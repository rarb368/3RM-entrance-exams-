import { SubjectConfig, SubjectId } from '../types';

/**
 * Single centralized configuration object for all EUEE Examination Subjects
 * Developer can adjust duration in seconds and question counts here easily.
 * Note: 2 hours 30 minutes = 2.5 * 3600 = 9000 seconds.
 * 3 hours = 3 * 3600 = 10800 seconds.
 * 2 hours = 2 * 3600 = 7200 seconds.
 */
export const SUBJECT_CONFIGS: Record<SubjectId, SubjectConfig> = {
  biology: {
    id: 'biology',
    title: 'BIOLOGY',
    shortName: 'Biology',
    colorName: 'Green',
    primaryColor: '#2e7d32', // Emerald green
    lightColor: '#e8f5e9',
    accentColor: '#1b5e20',
    badgeBg: 'bg-emerald-600',
    textColor: 'text-emerald-700',
    icon: 'Microscope',
    standardQuestionsCount: 100,
    durationSeconds: 9000, // 02:30:00 (2 hrs 30 min)
    description: 'Cell biology, genetics, physiology, evolution, ecology & human systems',
  },
  chemistry: {
    id: 'chemistry',
    title: 'CHEMISTRY',
    shortName: 'Chemistry',
    colorName: 'Cyan',
    primaryColor: '#00838f', // Cyan / Deep Teal Cyan
    lightColor: '#e0f7fa',
    accentColor: '#006064',
    badgeBg: 'bg-cyan-600',
    textColor: 'text-cyan-700',
    icon: 'FlaskConical',
    standardQuestionsCount: 80,
    durationSeconds: 9000, // 02:30:00 (2 hrs 30 min)
    description: 'Atomic structure, chemical equilibrium, organic reactions & electrochemistry',
  },
  physics: {
    id: 'physics',
    title: 'PHYSICS',
    shortName: 'Physics',
    colorName: 'Pink',
    primaryColor: '#c2185b', // Pink / Rose
    lightColor: '#fce4ec',
    accentColor: '#880e4f',
    badgeBg: 'bg-pink-600',
    textColor: 'text-pink-700',
    icon: 'Zap',
    standardQuestionsCount: 60,
    durationSeconds: 9000, // 02:30:00 (2 hrs 30 min)
    description: 'Mechanics, electromagnetism, wave optics, thermodynamics & modern physics',
  },
  maths_nat: {
    id: 'maths_nat',
    title: 'MATHS NAT',
    shortName: 'Natural Mathematics',
    colorName: 'Blue-gray',
    primaryColor: '#455a64', // Blue-gray
    lightColor: '#eceff1',
    accentColor: '#263238',
    badgeBg: 'bg-slate-700',
    textColor: 'text-slate-700',
    icon: 'Calculator',
    standardQuestionsCount: 60,
    durationSeconds: 10800, // 03:00:00 (3 hours)
    description: 'Calculus, complex numbers, coordinate geometry, vectors & trigonometry',
  },
  maths_soc: {
    id: 'maths_soc',
    title: 'MATHS SOC',
    shortName: 'Social Mathematics',
    colorName: 'Blue',
    primaryColor: '#1565c0', // Royal Blue
    lightColor: '#e3f2fd',
    accentColor: '#0d47a1',
    badgeBg: 'bg-blue-600',
    textColor: 'text-blue-700',
    icon: 'BarChart3',
    standardQuestionsCount: 60,
    durationSeconds: 10800, // 03:00:00 (3 hours)
    description: 'Statistics, probability, linear programming, financial math & matrices',
  },
  english: {
    id: 'english',
    title: 'ENGLISH',
    shortName: 'English',
    colorName: 'Turquoise',
    primaryColor: '#0097a7', // Turquoise
    lightColor: '#e0f2f1',
    accentColor: '#004d40',
    badgeBg: 'bg-teal-600',
    textColor: 'text-teal-700',
    icon: 'BookOpen',
    standardQuestionsCount: 100,
    durationSeconds: 7200, // 02:00:00 (2 hours)
    description: 'Grammar, reading comprehension, vocabulary, mechanics & dialogue',
  },
  aptitude: {
    id: 'aptitude',
    title: 'SAT / APTITUDE',
    shortName: 'SAT & Aptitude',
    colorName: 'Magenta',
    primaryColor: '#7b1fa2', // Magenta / Purple
    lightColor: '#f3e5f5',
    accentColor: '#4a148c',
    badgeBg: 'bg-purple-700',
    textColor: 'text-purple-700',
    icon: 'Brain',
    standardQuestionsCount: 60,
    durationSeconds: 7200, // 02:00:00 (2 hours)
    description: 'Verbal analogies, numerical reasoning, logical deduction & spatial tests',
  },
};

export const SUBJECT_ORDER: SubjectId[] = [
  'biology',
  'chemistry',
  'physics',
  'maths_nat',
  'maths_soc',
  'english',
  'aptitude',
];

export const AVAILABLE_YEARS = ['2018', '2017', '2016', '2015', '2014', '2013'] as const;

export const SCHOOL_INFO = {
  fullName: 'Ambo Ifa Boru Special Boarding Secondary School',
  shortName: 'AIBSBSS',
  examName: "Rebira's Ethiopian University Entrance Exam",
  developer: 'REBIRA SISAY GITI (3RM)',
  contactEmail: 'rarb368@gmail.com',
  telegramChannel: 'https://t.me/rebiraentranceexam',
  location: 'Ambo, Oromia, Ethiopia',
  academicYear: '2017 E.C. (2024/25 G.C.)',
};

export function formatDurationHHMMSS(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
