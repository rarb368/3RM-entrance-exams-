import { Question } from '../../types';

export const MATHS_SOC_QUESTIONS: Question[] = [
  {
    id: 'msoc-2017-01',
    subject: 'maths_soc',
    grade: 12,
    unit: 'Statistics and Frequency Distributions',
    unitNumber: 1,
    topic: 'Measures of Dispersion',
    subtopic: 'Variance and Standard Deviation',
    year: '2017',
    questionNumber: 1,
    question: 'A dataset consists of the numbers: 4, 6, 8, 10, 12. What is the sample variance (s²) of this dataset?',
    options: [
      '8.0',
      '10.0',
      '2.83',
      '40.0'
    ],
    correctAnswer: 1,
    explanation: '1) Mean: x̄ = (4 + 6 + 8 + 10 + 12) / 5 = 40 / 5 = 8. 2) Deviations from mean: (4-8) = -4, (6-8) = -2, (8-8) = 0, (10-8) = 2, (12-8) = 4. 3) Squared deviations: 16, 4, 0, 4, 16. Sum = 16 + 4 + 0 + 4 + 16 = 40. 4) Sample variance: s² = Σ(xi - x̄)² / (n - 1) = 40 / (5 - 1) = 40 / 4 = 10.0. (Population variance would be 40/5 = 8).'
  },
  {
    id: 'msoc-2017-02',
    subject: 'maths_soc',
    grade: 12,
    unit: 'Probability and Counting Techniques',
    unitNumber: 2,
    topic: 'Conditional Probability',
    subtopic: 'Bayes Rule',
    year: '2017',
    questionNumber: 2,
    question: 'Two cards are drawn consecutively without replacement from a standard, well-shuffled 52-card deck. What is the probability that both cards are Aces?',
    options: [
      '1/169',
      '1/221',
      '4/663',
      '1/26'
    ],
    correctAnswer: 1,
    explanation: 'There are 4 Aces in a 52-card deck. P(1st card is Ace) = 4/52 = 1/13. Given that one Ace was drawn, 3 Aces remain out of 51 total remaining cards: P(2nd card is Ace | 1st is Ace) = 3/51 = 1/17. The joint probability of both events is P = (1/13) × (1/17) = 1 / (13 × 17) = 1 / 221.'
  },
  {
    id: 'msoc-2017-03',
    subject: 'maths_soc',
    grade: 11,
    unit: 'Matrices and Determinants',
    unitNumber: 1,
    topic: 'Matrix Inverses',
    subtopic: '2x2 Matrix Determinants',
    year: '2017',
    questionNumber: 3,
    question: 'Given the 2×2 matrix A = [[3, 2], [5, 4]]. What is the determinant and inverse matrix A⁻¹?',
    options: [
      'det(A) = 2, A⁻¹ = [[2, -1], [-2.5, 1.5]]',
      'det(A) = 22, A⁻¹ = [[4, -2], [-5, 3]]',
      'det(A) = -2, A⁻¹ = [[-2, 1], [2.5, -1.5]]',
      'det(A) = 2, A⁻¹ = [[4, -5], [-2, 3]]'
    ],
    correctAnswer: 0,
    explanation: 'For a matrix [[a, b], [c, d]]: det(A) = ad - bc = (3)(4) - (2)(5) = 12 - 10 = 2. The formula for the inverse is A⁻¹ = (1 / det(A)) × [[d, -b], [-c, a]] = 1/2 × [[4, -2], [-5, 3]] = [[2, -1], [-2.5, 1.5]].'
  },
  {
    id: 'msoc-2016-01',
    subject: 'maths_soc',
    grade: 11,
    unit: 'Financial Mathematics & Simple/Compound Interest',
    unitNumber: 3,
    topic: 'Compound Interest',
    subtopic: 'Annual Compounding',
    year: '2016',
    questionNumber: 1,
    question: 'A merchant deposits 10,000 Birr into an investment account yielding an annual interest rate of 10% compounded annually. What will the total amount (future value) be after 3 years?',
    options: [
      '13,000 Birr',
      '13,310 Birr',
      '14,641 Birr',
      '12,100 Birr'
    ],
    correctAnswer: 1,
    explanation: 'Using the compound interest formula: A = P(1 + r)^t. Here Principal P = 10,000 Birr, annual rate r = 0.10, and time t = 3 years. A = 10,000 × (1 + 0.10)³ = 10,000 × (1.10)³ = 10,000 × 1.331 = 13,310 Birr. (Simple interest would only be 10,000 + 3,000 = 13,000 Birr).'
  },
  {
    id: 'msoc-2016-02',
    subject: 'maths_soc',
    grade: 11,
    unit: 'Linear Programming and Optimization',
    unitNumber: 2,
    topic: 'Feasible Region and Corner Points',
    subtopic: 'Objective Function Maximization',
    year: '2016',
    questionNumber: 2,
    question: 'In a linear programming problem, the feasible region has corner points (vertices) at (0, 0), (0, 4), (3, 2), and (5, 0). Which vertex maximizes the objective function Z = 4x + 5y?',
    options: [
      '(0, 4) with Z = 20',
      '(3, 2) with Z = 22',
      '(5, 0) with Z = 20',
      '(0, 0) with Z = 0'
    ],
    correctAnswer: 1,
    explanation: 'By the Fundamental Theorem of Linear Programming, the maximum or minimum of a linear objective function occurs at a vertex (corner point) of the convex feasible polygon. Evaluate Z at each corner point: At (0, 0): Z = 0; At (0, 4): Z = 4(0) + 5(4) = 20; At (5, 0): Z = 4(5) + 5(0) = 20; At (3, 2): Z = 4(3) + 5(2) = 12 + 10 = 22. The maximum value is 22 occurring at vertex (3, 2).'
  },
  {
    id: 'msoc-2015-01',
    subject: 'maths_soc',
    grade: 12,
    unit: 'Commercial Calculations and Tax Computations',
    unitNumber: 3,
    topic: 'Value Added Tax (VAT)',
    subtopic: 'Net and Gross Prices',
    year: '2015',
    questionNumber: 1,
    question: 'In Ethiopia, standard Value Added Tax (VAT) is 15%. If a laptop is sold for a gross price of 46,000 Birr including 15% VAT, what was the net price before VAT?',
    options: [
      '39,100 Birr',
      '40,000 Birr',
      '41,400 Birr',
      '39,500 Birr'
    ],
    correctAnswer: 1,
    explanation: 'Gross Price = Net Price × (1 + VAT rate) = Net Price × 1.15. Therefore: Net Price = Gross Price / 1.15 = 46,000 / 1.15 = 40,000 Birr. (Note: calculating 15% of 46,000 and subtracting it is a common error: 46,000 - 6,900 = 39,100 is incorrect because VAT is calculated on the net amount).'
  }
];
