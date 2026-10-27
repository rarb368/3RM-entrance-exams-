import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

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
}

function readDatabase(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (e) {
    console.error('Error reading database file', e);
  }
  return { students: {}, attempts: [], customQuestions: [] };
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
