import { ActiveExamSession, ExamAttempt, StudentProfile, SubjectId } from '../types';

const STORAGE_KEYS = {
  PROFILE: '3rm_aibsbss_student_profile',
  ATTEMPTS: '3rm_aibsbss_exam_attempts',
  ACTIVE_SESSION: '3rm_aibsbss_active_session',
};

export const StorageService = {
  // Profile
  getProfile(): StudentProfile | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveProfile(profile: StudentProfile): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
      // Sync to central backend database asynchronously
      fetch('/api/students/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile }),
      }).catch(() => {});
    } catch (e) {
      console.error('Failed to save profile to localStorage', e);
    }
  },

  clearProfile(): void {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
  },

  // Attempts
  getAttempts(): ExamAttempt[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveAttempt(attempt: ExamAttempt): void {
    try {
      const existing = this.getAttempts();
      const updated = [attempt, ...existing];
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(updated));
      const currentProfile = this.getProfile();
      // Sync to central backend database asynchronously
      fetch('/api/students/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile: currentProfile, attempt }),
      }).catch(() => {});
    } catch (e) {
      console.error('Failed to save attempt', e);
    }
  },

  getSubjectStats(subjectId: SubjectId) {
    const attempts = this.getAttempts().filter((a) => a.subject === subjectId);
    if (attempts.length === 0) {
      return {
        bestScore: null,
        lastPracticed: null,
        attemptCount: 0,
      };
    }
    const bestScore = Math.max(...attempts.map((a) => a.scorePercentage));
    const lastPracticed = attempts[0].completedAt;
    return {
      bestScore,
      lastPracticed,
      attemptCount: attempts.length,
    };
  },

  getPaperStats(subjectId: SubjectId, year: string) {
    const attempts = this.getAttempts().filter(
      (a) => a.subject === subjectId && a.year === year && !a.isUnitPractice
    );
    if (attempts.length === 0) {
      return {
        bestScore: null,
        lastPracticed: null,
        lastScore: null,
      };
    }
    const bestScore = Math.max(...attempts.map((a) => a.scorePercentage));
    const lastPracticed = attempts[0].completedAt;
    const lastScore = attempts[0].scorePercentage;
    return {
      bestScore,
      lastPracticed,
      lastScore,
    };
  },

  getUnitStats(subjectId: SubjectId, unitTitle: string) {
    const attempts = this.getAttempts().filter(
      (a) =>
        a.subject === subjectId &&
        a.isUnitPractice &&
        a.unitTitle?.toLowerCase() === unitTitle.toLowerCase()
    );
    if (attempts.length === 0) return null;
    const bestScore = Math.max(...attempts.map((a) => a.scorePercentage));
    return {
      bestScore,
      lastPracticed: attempts[0].completedAt,
      attemptCount: attempts.length,
    };
  },

  // Active exam session persistence
  getActiveSession(): ActiveExamSession | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      if (!data) return null;
      const session: ActiveExamSession = JSON.parse(data);
      // If deadline has passed by more than 1 hour, ignore it
      if (Date.now() > session.deadlineTimestamp + 3600000) {
        this.clearActiveSession();
        return null;
      }
      return session;
    } catch {
      return null;
    }
  },

  saveActiveSession(session: ActiveExamSession): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
    } catch (e) {
      console.error('Failed to save active session', e);
    }
  },

  updateSessionAnswers(userAnswers: Record<string, number>): void {
    try {
      const current = this.getActiveSession();
      if (current) {
        current.userAnswers = userAnswers;
        this.saveActiveSession(current);
      }
    } catch (e) {
      console.error('Failed to update session answers', e);
    }
  },

  clearActiveSession(): void {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  },

  clearAllData(): void {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  },
};

/**
 * Validation helpers
 */
export function isValidEthiopianPhone(phone: string): boolean {
  // Allow formats like: 0912345678, +251912345678, 0712345678, 251912345678, or standard 10-digit number
  const cleaned = phone.replace(/[\s-]/g, '');
  const ethiopianPhoneRegex = /^(?:\+?251|0)?[79]\d{8}$/;
  // Also allow general phone formats if foreign/special
  return ethiopianPhoneRegex.test(cleaned) || /^\+?[0-9]{9,14}$/.test(cleaned);
}

export function isValidGmailOrEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim().toLowerCase());
}
