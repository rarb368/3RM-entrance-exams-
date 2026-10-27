import { Question } from '../../types';

import { APTITUDE_2018_QUESTIONS } from "./aptitude2018";
import { APTITUDE_2016_QUESTIONS } from "./aptitude2016";

export const APTITUDE_2017_QUESTIONS: Question[] = [
  // Unit 1: Verbal Reasoning & Word Analogies
  {
    id: 'apt-2017-01',
    subject: 'aptitude',
    grade: 12,
    unit: 'Verbal Reasoning & Word Analogies',
    unitNumber: 1,
    topic: 'Time and Day Logic',
    year: '2017',
    questionNumber: 1,
    question: 'If two days after tomorrow is four days before Saturday, what day is it today?',
    options: [
      'Friday',
      'Saturday',
      'Sunday',
      'Monday'
    ],
    correctAnswer: 3,
    explanation: 'Work backwards: 4 days before Saturday is Tuesday. Since Tuesday is "two days after tomorrow", tomorrow is Sunday (Tuesday minus 2 days). If tomorrow is Sunday, today must be Monday.'
  },
  {
    id: 'apt-2017-02',
    subject: 'aptitude',
    grade: 12,
    unit: 'Verbal Reasoning & Word Analogies',
    unitNumber: 1,
    topic: 'Comparative Age Ordering',
    year: '2017',
    questionNumber: 2,
    question: 'Gad is older than Dan, and Dan is older than Betti. With Senni being older than Dan and younger than Gad, who is the youngest among them?',
    options: [
      'Betti',
      'Senni',
      'Gad',
      'Dan'
    ],
    correctAnswer: 0,
    explanation: 'Ranking by age in descending order: Gad > Senni > Dan > Betti. Betti is younger than Dan, and all others are older than Dan, so Betti is definitively the youngest.'
  },
  {
    id: 'apt-2017-03',
    subject: 'aptitude',
    grade: 12,
    unit: 'Verbal Reasoning & Word Analogies',
    unitNumber: 1,
    topic: 'Family Relationship Tree',
    year: '2017',
    questionNumber: 3,
    question: 'Aki is Bali\'s sister. Yaya is Bali\'s mother. Lema is Yaya\'s father. Gette is Lema\'s mother. How is Aki related to Lema?',
    options: [
      'daughter',
      'granddaughter',
      'grandson',
      'grandmother'
    ],
    correctAnswer: 1,
    explanation: 'Lema is Yaya\'s father. Yaya is Bali and Aki\'s mother. Therefore, Aki is Lema\'s female grandchild, i.e., granddaughter.'
  },
  {
    id: 'apt-2017-05',
    subject: 'aptitude',
    grade: 12,
    unit: 'Verbal Reasoning & Word Analogies',
    unitNumber: 1,
    topic: 'Riddle and Critical Deduction',
    year: '2017',
    questionNumber: 5,
    question: 'How many months in a standard calendar year have a twenty-eighth (28th) day?',
    options: [
      'seven months',
      'twelve months',
      'one month',
      'two months'
    ],
    correctAnswer: 1,
    explanation: 'Every single month of the twelve months in a year has at least 28 days (February has 28 or 29, and all other months have 30 or 31 days).'
  },
  {
    id: 'apt-2017-19',
    subject: 'aptitude',
    grade: 12,
    unit: 'Verbal Reasoning & Word Analogies',
    unitNumber: 1,
    topic: 'Word Relationships',
    year: '2017',
    questionNumber: 19,
    question: 'AUTOMOBILE : GARAGE :: Airplane : ________',
    options: [
      'Deck',
      'Truck',
      'Train',
      'Hangar'
    ],
    correctAnswer: 3,
    explanation: 'An automobile is stored and sheltered in a garage. Similarly, an airplane is stored and sheltered in a hangar.'
  },
  {
    id: 'apt-2017-20',
    subject: 'aptitude',
    grade: 12,
    unit: 'Verbal Reasoning & Word Analogies',
    unitNumber: 1,
    topic: 'Word Relationships',
    year: '2017',
    questionNumber: 20,
    question: 'KEY : LOCK :: ________ : Computer',
    options: [
      'Server',
      'Screen',
      'Monitor',
      'Password'
    ],
    correctAnswer: 3,
    explanation: 'A physical key is required to gain authorized access to a mechanical lock. Analogously, a password is required to gain authorized access into a secured computer system.'
  },

  // Unit 2: Quantitative Reasoning & Number Sequences
  {
    id: 'apt-2017-41',
    subject: 'aptitude',
    grade: 12,
    unit: 'Quantitative Reasoning & Number Sequences',
    unitNumber: 2,
    topic: 'Pipe and Tank Rates',
    year: '2017',
    questionNumber: 41,
    question: 'Two pipes A and B are used to fill a water tank. Pipe A can fill the tank in 3 hours, and pipe B can fill the same tank in 6 hours. How long will it take in hours to fill the tank if both pipes are opened simultaneously?',
    options: [
      '5',
      '4',
      '9',
      '2'
    ],
    correctAnswer: 3,
    explanation: 'Pipe A\'s rate = 1/3 tank/hr. Pipe B\'s rate = 1/6 tank/hr. Combined rate = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 tank/hr. Time required = 1 / (1/2) = 2 hours.'
  },
  {
    id: 'apt-2017-49',
    subject: 'aptitude',
    grade: 12,
    unit: 'Quantitative Reasoning & Number Sequences',
    unitNumber: 2,
    topic: 'Arithmetic and Geometric Sequences',
    year: '2017',
    questionNumber: 49,
    question: 'If -x + 2y = 4, then what is the value of (25ʸ) / (5ˣ)?',
    options: [
      '125',
      '625',
      '5',
      '25'
    ],
    correctAnswer: 1,
    explanation: 'Express 25 in base 5: 25ʸ = (5²)ʸ = 5^(2y). The expression becomes: (5^(2y)) / (5ˣ) = 5^(2y - x). Since given -x + 2y = 4 => 2y - x = 4: 5^(2y - x) = 5⁴ = 625.'
  },
  {
    id: 'apt-2017-50',
    subject: 'aptitude',
    grade: 12,
    unit: 'Quantitative Reasoning & Number Sequences',
    unitNumber: 2,
    topic: 'Work and Time Problems',
    year: '2017',
    questionNumber: 50,
    question: 'A woman burns 416 calories in an hour (60 minutes) at a fitness center. If she burns 10 calories per minute swimming and 6 calories per minute pedaling on a stationary bike, how many minutes did she spend swimming?',
    options: [
      '56',
      '14',
      '60',
      '46'
    ],
    correctAnswer: 1,
    explanation: 'Let t = minutes swimming, then (60 - t) = minutes biking. 10t + 6(60 - t) = 416 => 10t + 360 - 6t = 416 => 4t = 56 => t = 14 minutes.'
  },

  // Unit 3: Syllogisms & Logical Deductions
  {
    id: 'apt-2017-04',
    subject: 'aptitude',
    grade: 12,
    unit: 'Syllogisms & Logical Deductions',
    unitNumber: 3,
    topic: 'Premise-Conclusion Validity',
    year: '2017',
    questionNumber: 4,
    question: 'Statement I: All football players are sportspersons.\nStatement II: All sportspersons are fit.\nEvaluating the conclusion: "Some football players are fit", this conclusion is:',
    options: [
      'Conclusion: Some football players are fit.',
      'incorrect',
      'reasonably correct (logically valid)',
      'appropriate'
    ],
    correctAnswer: 2,
    explanation: 'From "All football players are sportspersons" and "All sportspersons are fit", it deductively follows that "All football players are fit". By subalternation in classical logic, if all are fit, then necessarily some football players are fit.'
  },

  // Unit 4: Spatial & Diagrammatic Analysis (WITH DIAGRAM)
  {
    id: 'apt-2017-36',
    subject: 'aptitude',
    grade: 12,
    unit: 'Spatial & Diagrammatic Analysis',
    unitNumber: 4,
    topic: 'Counting Geometric Triangles',
    year: '2017',
    questionNumber: 36,
    question: 'Refer to the geometric diagram below showing a square intersected by its diagonals and middle bisectors. How many triangles of all sizes can you find in the figure?',
    diagramType: 'triangles-puzzle',
    options: [
      '8',
      '12',
      '16',
      '20'
    ],
    correctAnswer: 2,
    explanation: 'Breakdown of triangles: 8 single smallest triangles, 4 medium triangles formed by pairs across the axes, and 4 large half-square triangles formed across the two diagonals. Total = 8 + 4 + 4 = 16 triangles.'
  }
];

export const APTITUDE_QUESTIONS: Question[] = [
  ...APTITUDE_2018_QUESTIONS,
  ...APTITUDE_2017_QUESTIONS,
  ...APTITUDE_2016_QUESTIONS,
];
