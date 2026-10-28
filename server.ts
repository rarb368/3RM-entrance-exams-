import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '@Rabira1818';

// Active admin session tokens (token -> expiry timestamp)
const adminSessions = new Map<string, number>();

// Database file path
const DB_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'database.json');

// Ensure database directory and file exist
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

export interface AdminMessage {
  id: string;
  sender: string;
  recipient: string; // 'all' or student email
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

function readDatabase(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      return {
        students: parsed.students || {},
        attempts: parsed.attempts || [],
        customQuestions: parsed.customQuestions || [],
        messages: parsed.messages || [],
      };
    }
  } catch (e) {
    console.error('Error reading database file', e);
  }
  return { students: {}, attempts: [], customQuestions: [], messages: [] };
}

function writeDatabase(data: DatabaseSchema): void {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error writing database file', e);
  }
}

// Middleware
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
    return res.status(401).json({ success: false, error: 'Unauthorized: Session expired or invalid' });
  }
  // Refresh token expiry for 2 hours
  adminSessions.set(token, Date.now() + 2 * 60 * 60 * 1000);
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
  }
  return res.json({ success: true, message: 'Logged out successfully' });
});

// 4. Student Sync (Client sends registration or attempts to central database)
app.post('/api/students/sync', (req: Request, res: Response) => {
  const { profile, attempt } = req.body;
  const db = readDatabase();

  if (profile && profile.email) {
    db.students[profile.email.toLowerCase()] = {
      fullName: profile.fullName,
      phoneNumber: profile.phoneNumber,
      email: profile.email.toLowerCase(),
      school: profile.school || 'Ambo Ifa Boru Special Boarding Secondary School',
      grade: profile.grade || 'Grade 12',
      registeredAt: profile.registeredAt || new Date().toISOString(),
    };
  }

  if (attempt && attempt.id) {
    // Avoid duplicates
    const exists = db.attempts.some((a) => a.id === attempt.id);
    if (!exists) {
      db.attempts.unshift(attempt);
    }
  }

  writeDatabase(db);
  return res.json({ success: true });
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
  const { recipient, title, text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ success: false, error: 'Message text cannot be empty' });
  }

  const db = readDatabase();
  const newMessage: AdminMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    sender: 'Rebira Sisay Giti (Admin)',
    recipient: recipient?.trim() || 'all',
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
  const db = readDatabase();
  const filtered = (db.messages || []).filter(
    (m) => m.recipient === 'all' || (email && m.recipient.toLowerCase() === email)
  );
  return res.json({ success: true, messages: filtered });
});

// 9. 3RM AI Study Assistant (Gemini API Integration)
app.post('/api/ai/ask', async (req: Request, res: Response) => {
  try {
    const { prompt, questionContext, subject } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ success: false, error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        success: true,
        reply: `Hello! I am your 3RM AI Study Assistant for Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS).

Regarding your inquiry: "${prompt}":
1. Carefully identify the given values and equations.
2. Recall the relevant Ethiopian curriculum principle for ${subject || 'this subject'}.
3. Work through each alternative step-by-step to arrive at the verified solution.`,
      });
    }

    const ai = new GoogleGenAI();
    let fullPrompt = prompt;
    if (questionContext) {
      fullPrompt = `[Context of Current Exam Question: Subject: ${questionContext.subject || ''}, Question: ${questionContext.question || ''}, Options: ${JSON.stringify(questionContext.options || [])}]\n\nStudent question / request: ${prompt}`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: `You are the "3RM AI Study Assistant", an expert, encouraging Ethiopian University Entrance Examination (EUEE) tutor created for students at Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS) by developer Rebira Sisay Giti (3RM).
Help Ethiopian students master secondary school Natural Science (Biology, Chemistry, Physics, Mathematics) and Social Science (English, Scholastic Aptitude Test).
Provide clear, step-by-step explanations, helpful hints without giving away answers immediately if they are practicing, and highlight key curriculum concepts. Keep responses structured, concise, and easy to read on mobile devices.`,
      },
    });

    const reply = response.text || 'I could not generate an answer right now. Please try again.';
    return res.json({ success: true, reply });
  } catch (err: any) {
    console.error('Gemini AI Assistant error:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to process AI request. ' + (err?.message || ''),
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
