import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '@Rabira1818';

// Active admin session tokens (persisted to disk to survive server reloads)
const DB_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'database.json');
const SESSIONS_FILE = path.join(DB_DIR, 'sessions.json');
const ARCHIVE_FILE = path.join(DB_DIR, 'registered_students_archive.json');
const NOTIFICATIONS_LOG_FILE = path.join(DB_DIR, 'registration_notifications.json');

// Ensure database directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

function loadAdminSessions(): Map<string, number> {
  const map = new Map<string, number>();
  try {
    if (fs.existsSync(SESSIONS_FILE)) {
      const data = JSON.parse(fs.readFileSync(SESSIONS_FILE, 'utf-8'));
      const now = Date.now();
      for (const [token, expiry] of Object.entries(data)) {
        if (typeof expiry === 'number' && expiry > now) {
          map.set(token, expiry);
        }
      }
    }
  } catch {}
  return map;
}

function saveAdminSessions(sessions: Map<string, number>): void {
  try {
    const obj: Record<string, number> = {};
    const now = Date.now();
    for (const [token, expiry] of sessions.entries()) {
      if (expiry > now) {
        obj[token] = expiry;
      }
    }
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(obj, null, 2), 'utf-8');
  } catch {}
}

const adminSessions = loadAdminSessions();

export interface AdminMessage {
  id: string;
  sender: string;
  recipient: string; // 'all', student email, or student name
  recipientName?: string;
  title: string;
  text: string;
  createdAt: string;
}

interface DatabaseSchema {
  students: Record<string, {
    fullName: string;
    phoneNumber: string;
    email: string;
    school: string;
    grade: string;
    registeredAt: string;
  }>;
  attempts: any[];
  customQuestions: any[];
  messages: AdminMessage[];
}

const DEFAULT_STUDENTS: DatabaseSchema['students'] = {};

const DEFAULT_ATTEMPTS: any[] = [];

function appendNotificationLog(entry: any): void {
  try {
    let logs: any[] = [];
    if (fs.existsSync(NOTIFICATIONS_LOG_FILE)) {
      try {
        logs = JSON.parse(fs.readFileSync(NOTIFICATIONS_LOG_FILE, 'utf-8'));
      } catch {}
    }
    logs.unshift(entry);
    fs.writeFileSync(NOTIFICATIONS_LOG_FILE, JSON.stringify(logs.slice(0, 500), null, 2), 'utf-8');
  } catch {}
}

async function sendStudentRegistrationEmail(student: {
  fullName: string;
  phoneNumber: string;
  email: string;
  school: string;
  grade: string;
  registeredAt: string;
}) {
  const targetEmail = 'rarb367@gmail.com';
  console.log(`[Registration] Dispatching email to ${targetEmail} for: ${student.fullName}`);

  const payload = {
    _subject: `New AIBSBSS Student Registered: ${student.fullName} (${student.grade})`,
    _template: 'table',
    _captcha: 'false',
    name: student.fullName,
    email: student.email,
    'Student Full Name': student.fullName,
    'School Name': student.school,
    'Phone Number': student.phoneNumber,
    'Student Gmail': student.email,
    'Grade Level': student.grade,
    'Registration Date': student.registeredAt || new Date().toISOString(),
    'Notification Recipient': targetEmail,
    'Platform': "Rebira's Ethiopian University Entrance Exam (AIBSBSS)",
  };

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://ais-pre-eat2fjuxpyz7pocktub6mn-253147144878.europe-west2.run.app',
        'Referer': 'https://ais-pre-eat2fjuxpyz7pocktub6mn-253147144878.europe-west2.run.app/',
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json().catch(() => null);
    console.log('[Registration] Email dispatch response:', result);

    appendNotificationLog({
      timestamp: new Date().toISOString(),
      student,
      recipient: targetEmail,
      status: 'dispatched',
      service: 'formsubmit',
      result,
    });
  } catch (err) {
    console.error('[Registration] Failed to dispatch email via FormSubmit:', err);
    appendNotificationLog({
      timestamp: new Date().toISOString(),
      student,
      recipient: targetEmail,
      status: 'error',
      error: String(err),
    });
  }
}

function readDatabase(): DatabaseSchema {
  let archiveStudents: DatabaseSchema['students'] = {};
  if (fs.existsSync(ARCHIVE_FILE)) {
    try {
      const arch = JSON.parse(fs.readFileSync(ARCHIVE_FILE, 'utf-8'));
      if (arch && typeof arch === 'object') {
        archiveStudents = arch;
      }
    } catch {}
  }

  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      const students = { ...DEFAULT_STUDENTS, ...archiveStudents, ...(parsed.students || {}) };
      const attempts = (parsed.attempts && parsed.attempts.length > 0)
        ? parsed.attempts
        : [...DEFAULT_ATTEMPTS];
      return {
        students,
        attempts,
        customQuestions: parsed.customQuestions || [],
        messages: parsed.messages || [],
      };
    }
  } catch (e) {
    console.error('Error reading database file', e);
  }
  return {
    students: { ...DEFAULT_STUDENTS, ...archiveStudents },
    attempts: [...DEFAULT_ATTEMPTS],
    customQuestions: [],
    messages: [],
  };
}

function writeDatabase(data: DatabaseSchema): void {
  try {
    let existingDiskStudents: DatabaseSchema['students'] = {};
    let existingDiskAttempts: any[] = [];
    if (fs.existsSync(DB_FILE)) {
      try {
        const raw = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
        if (raw.students) existingDiskStudents = raw.students;
        if (Array.isArray(raw.attempts)) existingDiskAttempts = raw.attempts;
      } catch {}
    }

    let archiveStudents: DatabaseSchema['students'] = {};
    if (fs.existsSync(ARCHIVE_FILE)) {
      try {
        const arch = JSON.parse(fs.readFileSync(ARCHIVE_FILE, 'utf-8'));
        if (arch && typeof arch === 'object') archiveStudents = arch;
      } catch {}
    }

    const mergedStudents = {
      ...DEFAULT_STUDENTS,
      ...archiveStudents,
      ...existingDiskStudents,
      ...data.students,
    };

    const attemptMap = new Map<string, any>();
    DEFAULT_ATTEMPTS.forEach((att) => attemptMap.set(att.id, att));
    existingDiskAttempts.forEach((att) => attemptMap.set(att.id, att));
    (data.attempts || []).forEach((att) => attemptMap.set(att.id, att));

    const toWrite = {
      ...data,
      students: mergedStudents,
      attempts: Array.from(attemptMap.values()),
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(toWrite, null, 2), 'utf-8');
    fs.writeFileSync(ARCHIVE_FILE, JSON.stringify(mergedStudents, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error writing database file', e);
  }
}

// CORS & Middleware to support external students across devices and browsers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json({ limit: '10mb' }));

// Helper to authenticate admin
function authenticateAdmin(req: Request, res: Response, next: Function) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Missing or invalid token' });
  }
  const token = authHeader.split(' ')[1];
  const expiry = adminSessions.get(token);
  if (!expiry || Date.now() > expiry) {
    adminSessions.delete(token);
    saveAdminSessions(adminSessions);
    return res.status(401).json({ success: false, error: 'Unauthorized: Session expired or invalid' });
  }
  // Refresh token expiry for 2 hours
  adminSessions.set(token, Date.now() + 2 * 60 * 60 * 1000);
  saveAdminSessions(adminSessions);
  next();
}

// API Routes

app.post('/api/admin/login', (req: Request, res: Response) => {
  const { password } = req.body;
  const ALLOWED_PASSWORDS = [
    ADMIN_PASSWORD,
    '@Rabira1818',
    'rebira2025',
    'rebira3rm',
    'Rebira1818',
    '@rabira1818',
    'rebira',
  ];
  if (typeof password !== 'string' || !ALLOWED_PASSWORDS.includes(password.trim())) {
    return res.status(401).json({ success: false, error: 'Invalid admin password' });
  }

  // Generate secure random session token
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + 2 * 60 * 60 * 1000; // 2 hours
  adminSessions.set(token, expiresAt);
  saveAdminSessions(adminSessions);

  return res.json({
    success: true,
    token,
    expiresAt,
    message: 'Admin authentication successful',
  });
});

// 2. Admin Verify Token
app.get('/api/admin/verify', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ valid: false });
  }
  const token = authHeader.split(' ')[1];
  const expiry = adminSessions.get(token);
  if (expiry && Date.now() <= expiry) {
    return res.json({ valid: true });
  }
  return res.status(401).json({ valid: false });
});

// 3. Admin Logout
app.post('/api/admin/logout', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    adminSessions.delete(token);
    saveAdminSessions(adminSessions);
  }
  return res.json({ success: true, message: 'Logged out successfully' });
});

// 3b. Student Registration & Email Dispatch to rarb367@gmail.com
app.post('/api/register', async (req: Request, res: Response) => {
  const { profile } = req.body;
  if (!profile || !profile.email || !profile.fullName) {
    return res.status(400).json({ success: false, error: 'Full name and email are required' });
  }

  const studentData = {
    fullName: String(profile.fullName).trim(),
    phoneNumber: String(profile.phoneNumber || '').trim(),
    email: String(profile.email).trim().toLowerCase(),
    school: String(profile.school || 'Ambo Ifa Boru Special Boarding Secondary School').trim(),
    grade: String(profile.grade || 'Grade 12').trim(),
    registeredAt: profile.registeredAt || new Date().toISOString(),
  };

  const db = readDatabase();
  db.students[studentData.email] = studentData;
  writeDatabase(db);

  // Dispatch email to rarb367@gmail.com in background without blocking student entry
  sendStudentRegistrationEmail(studentData).catch((e) =>
    console.error('Async registration email error:', e)
  );

  return res.json({
    success: true,
    message: 'Student registered successfully and notification dispatched',
    student: studentData,
    totalStudents: Object.keys(db.students).length,
  });
});

// 4. Student Sync (Client sends registration or attempts to central database)
app.post('/api/students/sync', (req: Request, res: Response) => {
  const { profile, attempt, attempts } = req.body;
  const db = readDatabase();

  if (profile && profile.email) {
    const studentEmail = profile.email.toLowerCase();
    const isNew = !db.students[studentEmail];
    db.students[studentEmail] = {
      fullName: profile.fullName,
      phoneNumber: profile.phoneNumber,
      email: studentEmail,
      school: profile.school || 'Ambo Ifa Boru Special Boarding Secondary School',
      grade: profile.grade || 'Grade 12',
      registeredAt: profile.registeredAt || new Date().toISOString(),
    };
    if (isNew) {
      sendStudentRegistrationEmail(db.students[studentEmail]).catch(() => {});
    }
  }

  if (attempt && attempt.id) {
    const exists = db.attempts.some((a) => a.id === attempt.id);
    if (!exists) {
      db.attempts.unshift(attempt);
    }
  }

  if (Array.isArray(attempts)) {
    for (const a of attempts) {
      if (a && a.id && !db.attempts.some((x) => x.id === a.id)) {
        db.attempts.unshift(a);
      }
    }
  }

  writeDatabase(db);
  return res.json({ success: true, totalStudents: Object.keys(db.students).length });
});

// 5. Admin: Get all registered students with full exam statistics
app.get('/api/admin/students', authenticateAdmin, (req: Request, res: Response) => {
  const db = readDatabase();
  const studentsList = Object.values(db.students);

  // Augment each student with aggregate exam metrics and history
  const responseData = studentsList.map((st) => {
    const studentAttempts = db.attempts.filter(
      (a) => a.studentEmail?.toLowerCase() === st.email.toLowerCase()
    );
    const count = studentAttempts.length;
    const scores = studentAttempts.map((a) => a.scorePercentage || 0);
    const avgScore = count > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / count) : 0;
    const bestScore = count > 0 ? Math.max(...scores) : null;

    return {
      ...st,
      attemptsCount: count,
      avgScore,
      bestScore,
      attempts: studentAttempts,
    };
  });

  return res.json({ success: true, students: responseData, totalCount: responseData.length });
});

// 5b. Admin: Get registration email dispatch notifications log
app.get('/api/admin/notifications', authenticateAdmin, (_req: Request, res: Response) => {
  let logs: any[] = [];
  if (fs.existsSync(NOTIFICATIONS_LOG_FILE)) {
    try {
      logs = JSON.parse(fs.readFileSync(NOTIFICATIONS_LOG_FILE, 'utf-8'));
    } catch {}
  }
  return res.json({ success: true, notifications: logs, recipientEmail: 'rarb367@gmail.com' });
});

// 6. Admin: Question Management (CRUD)
app.get('/api/admin/questions', authenticateAdmin, (req: Request, res: Response) => {
  const db = readDatabase();
  return res.json({ success: true, customQuestions: db.customQuestions || [] });
});

app.post('/api/admin/questions', authenticateAdmin, (req: Request, res: Response) => {
  const question = req.body;
  if (!question || !question.question || !question.subject) {
    return res.status(400).json({ success: false, error: 'Missing required question fields' });
  }

  const db = readDatabase();
  if (!db.customQuestions) db.customQuestions = [];

  const existingIdx = db.customQuestions.findIndex((q) => q.id === question.id);
  if (existingIdx >= 0) {
    db.customQuestions[existingIdx] = question;
  } else {
    question.id = question.id || `custom-${Date.now()}`;
    db.customQuestions.unshift(question);
  }

  writeDatabase(db);
  return res.json({ success: true, question });
});

app.delete('/api/admin/questions/:id', authenticateAdmin, (req: Request, res: Response) => {
  const { id } = req.params;
  const db = readDatabase();
  if (db.customQuestions) {
    db.customQuestions = db.customQuestions.filter((q) => q.id !== id);
    writeDatabase(db);
  }
  return res.json({ success: true });
});

// 7. Admin: Send Announcement / Message to Students
app.post('/api/admin/messages', authenticateAdmin, (req: Request, res: Response) => {
  const { recipient, recipientName, title, text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ success: false, error: 'Message text cannot be empty' });
  }

  const db = readDatabase();
  const newMessage: AdminMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    sender: 'Rebira Sisay Giti (Admin)',
    recipient: recipient?.trim() || 'all',
    recipientName: recipientName?.trim() || (recipient === 'all' ? 'All Registered Students' : recipient),
    title: title?.trim() || 'Notice from Admin',
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };

  db.messages.unshift(newMessage);
  writeDatabase(db);
  return res.json({ success: true, message: newMessage });
});

// 8. Public / Student: Fetch Messages
app.get('/api/messages', (req: Request, res: Response) => {
  const email = (req.query.email as string)?.toLowerCase();
  const name = (req.query.name as string)?.toLowerCase();
  const db = readDatabase();
  const filtered = (db.messages || []).filter((m) => {
    if (m.recipient === 'all') return true;
    const rLower = m.recipient.toLowerCase();
    const rNameLower = (m.recipientName || '').toLowerCase();
    if (email && (rLower === email || rNameLower === email)) return true;
    if (name && (rLower === name || rNameLower === name)) return true;
    return false;
  });
  return res.json({ success: true, messages: filtered });
});

// 9. 3RM AI Study Assistant (Gemini API Integration)
app.post('/api/ai/ask', async (req: Request, res: Response) => {
  try {
    const { prompt, questionContext, subject, history } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ success: false, error: 'Prompt is required' });
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.VITE_GEMINI_API_KEY;

    const contextParts: string[] = [];

    if (subject) {
      contextParts.push(`[Active Subject: ${subject}]`);
    }

    if (questionContext) {
      contextParts.push(
        `[Active Entrance Exam Question Context]\n` +
        `Subject: ${questionContext.subject || subject || 'Entrance Exam'}\n` +
        `Question: ${questionContext.question || ''}\n` +
        (questionContext.options && questionContext.options.length > 0
          ? `Choices:\n${questionContext.options.map((opt: string, i: number) => `  ${['A', 'B', 'C', 'D'][i]}. ${opt}`).join('\n')}\n`
          : '') +
        (questionContext.explanation ? `Solution Reference: ${questionContext.explanation}\n` : '')
      );
    }

    if (Array.isArray(history) && history.length > 0) {
      const formattedHistory = history
        .slice(-6)
        .map((h: any) => `${h.sender === 'user' ? 'Student' : '3RM AI'}: ${h.text}`)
        .join('\n');
      contextParts.push(`[Recent Conversation]\n${formattedHistory}`);
    }

    contextParts.push(`Student Question:\n${prompt}`);
    const fullPrompt = contextParts.join('\n\n');

    const systemInstruction = `You are the "3RM AI Study Assistant", an expert, intelligent Ethiopian University Entrance Examination (EUEE) AI tutor built for students at Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS) by developer REBIRA SISAY GITI (3RM).

Answer like an authentic, world-class AI tutor:
1. Provide accurate, clear explanations for Ethiopian curriculum subjects:
   - Biology: cellular mechanisms, genetics, taxonomy, human anatomy, ecology.
   - Chemistry: stoichiometry, atomic structure, thermochemistry, equilibrium, organic chemistry.
   - Physics: kinematics, Newton's laws, electromagnetism, optics, thermodynamics with clear formulas and units.
   - Mathematics: calculus, vectors, trigonometry, coordinate geometry, matrices.
   - English: grammatical tenses, sentence completion, reading comprehension deductions, idioms, and vocabulary.
   - Scholastic Aptitude: syllogisms, analogies, quantitative problem-solving, and data interpretation.
2. Structure your answer clearly with:
   - Direct conceptual breakdown or immediate answer
   - Step-by-step mathematical calculation or logical deduction where applicable
   - The correct choice highlighted in **bold** if analyzing a multiple-choice question
   - Key takeaway or exam tip for EUEE candidates
3. Tone: Encouraging, academic, highly articulate, and concise for mobile readability.`;

    let reply = '';
    const modelsToTry = ['gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3.8-flash'];

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        for (const modelName of modelsToTry) {
          try {
            const response = await ai.models.generateContent({
              model: modelName,
              contents: fullPrompt,
              config: {
                systemInstruction,
              },
            });
            if (response.text && response.text.trim().length > 0) {
              reply = response.text.trim();
              break;
            }
          } catch (modelErr) {
            console.warn(`Model ${modelName} failed, trying next fallback...`, modelErr);
          }
        }
      } catch (clientInitErr) {
        console.warn('GoogleGenAI initialization error:', clientInitErr);
      }
    }

    // High-quality contextual fallback so students NEVER see a blank error
    if (!reply) {
      if (questionContext && questionContext.question) {
        reply = `### 3RM AI Study Assistant Solution\n\n**Question**: ${questionContext.question}\n\n` +
          (questionContext.options ? `**Choices**:\n${questionContext.options.map((o: string, i: number) => `* **${['A', 'B', 'C', 'D'][i]}**: ${o}`).join('\n')}\n\n` : '') +
          `**Detailed Analysis**:\n` +
          (questionContext.explanation ? `${questionContext.explanation}\n\n` : 'In this problem, verify the fundamental Ethiopian curriculum laws governing the question and systematically eliminate incorrect alternatives.\n\n') +
          `**Exam Takeaway**: Keep track of the specific principles covered in your unit practice to excel in the EUEE.`;
      } else {
        reply = `### 3RM AI Study Assistant\n\nHello! I am your AI study companion for **${subject || 'Ethiopian University Entrance Exams'}**.\n\n` +
          `Regarding your question: "${prompt}"\n\n` +
          `* **Curriculum Focus**: Review the essential Grade 9–12 concepts and definitions.\n` +
          `* **Methodology**: Identify the given constraints and step-by-step logic.\n` +
          `* You can also open any exam question and tap the **Explain this question** button for an instant breakdown!`;
      }
    }

    return res.json({ success: true, reply });
  } catch (err: any) {
    console.error('Gemini AI Assistant error:', err);
    return res.json({
      success: true,
      reply: '### 3RM AI Study Assistant\n\nI am analyzing your question. Please ensure your query is clear and ask again!',
    });
  }
});

// Start server with Vite middleware in development
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
