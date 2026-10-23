import { Question } from '../../types';

export const MATHS_NAT_QUESTIONS: Question[] = [
  {
    id: 'mnat-2017-01',
    subject: 'maths_nat',
    grade: 11,
    unit: 'Coordinate Geometry',
    unitNumber: 3,
    topic: 'Real and Irrational Numbers',
    year: '2017',
    questionNumber: 1,
    question: 'Which one of the following numbers is an irrational number?',
    options: [
      '√0.04',
      '1.16222...',
      '√29',
      '3.4000'
    ],
    correctAnswer: 2,
    explanation: 'A: √0.04 = 0.2 is a terminating decimal (rational). B: 1.16222... is a recurring periodic decimal (rational). C: √29 is the square root of a prime number and cannot be written as a ratio of two integers, hence it is irrational. D: 3.4000 is terminating (rational).'
  },
  {
    id: 'mnat-2017-02',
    subject: 'maths_nat',
    grade: 11,
    unit: 'Further on Relations and Functions',
    unitNumber: 1,
    topic: 'Percentages and Powers',
    year: '2017',
    questionNumber: 2,
    question: 'Which of the following is the simplified form of the expression: 81% / 27%?',
    options: [
      '9/3',
      '√3',
      '1/3',
      '3'
    ],
    correctAnswer: 3,
    explanation: '81% / 27% = (81/100) / (27/100) = 81 / 27 = 3.'
  },
  {
    id: 'mnat-2017-03',
    subject: 'maths_nat',
    grade: 11,
    unit: 'Further on Relations and Functions',
    unitNumber: 1,
    topic: 'Scientific Notation',
    year: '2017',
    questionNumber: 3,
    question: 'When the number 43 × 10⁸ × 10⁻⁵ is written in scientific standard form, it equals:',
    options: [
      '43 × 10³',
      '4.3 × 10³',
      '0.43 × 10⁵',
      '4.3 × 10⁴'
    ],
    correctAnswer: 3,
    explanation: '43 × 10⁸ × 10⁻⁵ = 43 × 10^(8 - 5) = 43 × 10³ = 43,000. In scientific standard form (a × 10ⁿ where 1 ≤ a < 10): 43,000 = 4.3 × 10⁴.'
  },
  {
    id: 'mnat-2017-04',
    subject: 'maths_nat',
    grade: 11,
    unit: 'Matrices and Determinants',
    unitNumber: 1,
    topic: 'Linear Systems of Equations',
    year: '2017',
    questionNumber: 4,
    question: 'Given the system of linear equations:\na₁x + b₁y = c₁\na₂x + b₂y = c₂\nwhere a₁, a₂, b₁, b₂, c₁, c₂ ∈ ℝ and a₂, b₂, c₂ ≠ 0. Which of the following conditions guarantees that the system has exactly one unique solution?',
    options: [
      'If a₁/a₂ = c₁/c₂, then the system has no solution.',
      'If b₁/b₂ = c₁/c₂, then the system has a unique solution.',
      'If a₁/a₂ ≠ c₁/c₂, then the system has infinitely many solutions.',
      'If a₁/a₂ ≠ b₁/b₂, then the system has one unique solution.'
    ],
    correctAnswer: 3,
    explanation: 'A 2×2 system of linear equations has a unique solution if and only if the coefficient determinant is non-zero: a₁b₂ - a₂b₁ ≠ 0, which is equivalent to a₁/a₂ ≠ b₁/b₂ (the two straight lines have different slopes and intersect at a single point).'
  },
  {
    id: 'mnat-2017-05',
    subject: 'maths_nat',
    grade: 11,
    unit: 'Further on Relations and Functions',
    unitNumber: 1,
    topic: 'Quadratic Equations and Roots',
    year: '2017',
    questionNumber: 5,
    question: 'If one of the roots of the quadratic equation 2x² - 8x + k = 0 exceeds the other root by 2, what is the value of k?',
    options: [
      '6',
      '4',
      '3',
      '1'
    ],
    correctAnswer: 0,
    explanation: 'Let the roots be r and s, with r - s = 2 => r = s + 2. By Vieta\'s formulas, sum of roots is r + s = -(-8)/2 = 4. Substituting r: (s + 2) + s = 4 => 2s = 2 => s = 1, and r = 1 + 2 = 3. Product of roots: r × s = k/2 => 3 × 1 = k/2 => k = 6.'
  },
  {
    id: 'mnat-2017-09',
    subject: 'maths_nat',
    grade: 11,
    unit: 'Further on Relations and Functions',
    unitNumber: 1,
    topic: 'Quadratic Minima and Maxima',
    year: '2017',
    questionNumber: 9,
    question: 'What is the minimum value of the quadratic function defined by f(x) = -3 + 4x + x²?',
    options: [
      '1',
      '0',
      '-2',
      '-7'
    ],
    correctAnswer: 3,
    explanation: 'Write f(x) in standard form: f(x) = x² + 4x - 3. The vertex x-coordinate is x = -b / (2a) = -4 / (2 × 1) = -2. The minimum value is f(-2) = (-2)² + 4(-2) - 3 = 4 - 8 - 3 = -7.'
  },
  {
    id: 'mnat-2017-35',
    subject: 'maths_nat',
    grade: 11,
    unit: 'Matrices and Determinants',
    unitNumber: 1,
    topic: 'Matrix Equality',
    year: '2017',
    questionNumber: 35,
    question: 'If [[x + y, 2], [5, 3]] = [[7, 2], [5, x - y]], then what is the value of x?',
    options: [
      '-5',
      '5',
      '2',
      '-2'
    ],
    correctAnswer: 1,
    explanation: 'By matrix equality, corresponding elements must be equal: 1) x + y = 7, and 2) x - y = 3. Adding the two linear equations: (x + y) + (x - y) = 7 + 3 => 2x = 10 => x = 5.'
  },
  {
    id: 'mnat-2017-47',
    subject: 'maths_nat',
    grade: 12,
    unit: 'Sequences and Series',
    unitNumber: 1,
    topic: 'Geometric Series Sum',
    year: '2017',
    questionNumber: 47,
    question: 'Given the geometric sequence 3, 6, 12, 24, ..., what is the 10th partial sum (S₁₀) of the sequence?',
    options: [
      '3075',
      '1023',
      '1027',
      '3069'
    ],
    correctAnswer: 3,
    explanation: 'Here first term a = 3 and common ratio r = 6/3 = 2. The sum formula for a geometric progression is Sₙ = a(rⁿ - 1) / (r - 1). For n = 10: S₁₀ = 3 × (2¹⁰ - 1) / (2 - 1) = 3 × (1024 - 1) = 3 × 1023 = 3069.'
  },
  {
    id: 'mnat-2017-51',
    subject: 'maths_nat',
    grade: 12,
    unit: 'Derivatives and Applications of Differential Calculus',
    unitNumber: 3,
    topic: 'Chain Rule Derivatives',
    year: '2017',
    questionNumber: 51,
    question: 'Let f(x) = (1 - 2x)^(1/2). What is the first derivative f\'(x)?',
    options: [
      '-(1/2) √(1 - 2x)',
      '(1/2) √(1 - 2x)',
      '-1 / √(1 - 2x)',
      '1 / √(1 - 2x)'
    ],
    correctAnswer: 2,
    explanation: 'Using the chain rule: f\'(x) = (1/2)(1 - 2x)^(-1/2) · d/dx(1 - 2x) = (1/2)(1 - 2x)^(-1/2) · (-2) = -(1 - 2x)^(-1/2) = -1 / √(1 - 2x).'
  }
];
