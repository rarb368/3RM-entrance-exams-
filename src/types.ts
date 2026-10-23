export type SubjectId =
  | 'biology'
  | 'chemistry'
  | 'physics'
  | 'maths_nat'
  | 'maths_soc'
  | 'english'
  | 'aptitude';

export type ExamYear = '2017' | '2016' | '2015' | '2014/15';

export type AnswerFeedbackMode = 'right_away' | 'after_finishing';

export interface StudentProfile {
  fullName: string;
  phoneNumber: string;
  email: string;
  registeredAt: string;
  school: string;
  grade?: string;
}

export interface Question {
  id: string;
  subject: SubjectId;
  grade: 9 | 10 | 11 | 12 | 'unclassified';
  unit: string;
  unitNumber: number;
  topic?: string;
  year: ExamYear;
  questionNumber: number;
  question: string;
  options: [string, string, string, string] | string[];
  correctAnswer: number; // 0 = A, 1 = B, 2 = C, 3 = D
  explanation: string;
  diagramSvg?: string;
  subtopic?: string;
  isUnclassified?: boolean;
}

export interface CurriculumUnit {
  id: string;
  subject: SubjectId;
  grade: 9 | 10 | 11 | 12 | 'unclassified';
  unitNumber: number;
  title: string;
  topics?: string[];
  description?: string;
}

export interface SubjectConfig {
  id: SubjectId;
  title: string;
  shortName: string;
  colorName: string;
  primaryColor: string;
  lightColor: string;
  accentColor: string;
  badgeBg: string;
  textColor: string;
  icon: string;
  standardQuestionsCount: number;
  durationSeconds: number; // in seconds
  description: string;
}

export interface ExamPaperMeta {
  id: string;
  subject: SubjectId;
  year: ExamYear;
  title: string;
  questionCount: number;
  durationSeconds: number;
  isComplete: boolean;
  notes?: string;
}

export interface ExamAttempt {
  id: string;
  studentEmail: string;
  studentName: string;
  subject: SubjectId;
  year?: ExamYear;
  unitTitle?: string;
  grade?: string;
  topicTitle?: string;
  isUnitPractice: boolean;
  feedbackMode: AnswerFeedbackMode;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scorePercentage: number;
  timeUsedSeconds: number;
  totalDurationSeconds: number;
  completedAt: string;
  userAnswers: Record<string, number>;
}

export interface ActiveExamSession {
  examId: string;
  subject: SubjectId;
  year?: ExamYear;
  unitTitle?: string;
  grade?: string;
  topicTitle?: string;
  isUnitPractice: boolean;
  feedbackMode: AnswerFeedbackMode;
  deadlineTimestamp: number;
  totalDurationSeconds: number;
  timeRemainingSeconds?: number;
  questionIds: string[];
  userAnswers: Record<string, number>;
  startedAt: string;
}

export interface AdminStudentSummary {
  fullName: string;
  phoneNumber: string;
  email: string;
  grade: string;
  school: string;
  registeredAt: string;
  attemptsCount: number;
  avgScore: number;
  bestScore: number | null;
  attempts: ExamAttempt[];
}

export interface CategoryNode {
  grade: number;
  units: {
    unitNumber: number;
    unitTitle: string;
    topics: string[];
  }[];
}
