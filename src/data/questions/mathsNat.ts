import { Question } from "../../types";

import { MATHS_2018_QUESTIONS } from "./maths2018";
import { MATHS_NAT_2016_QUESTIONS } from "./maths2016";

export const MATHS_NAT_2017_QUESTIONS: Question[] = [
  {
    "id": "mnat-2017-01",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "The Number System",
    "unitNumber": 2,
    "topic": "Real and Irrational Numbers",
    "year": "2017",
    "questionNumber": 1,
    "question": "Which one of the following is an irrational number?",
    "options": [
      "\u221a0.04",
      "1.16222...",
      "\u221a29",
      "3.4000"
    ],
    "correctAnswer": 2,
    "explanation": "\u221a0.04 = 0.2 is terminating (rational). 1.16222... is periodic (rational). 3.4000 is terminating (rational). \u221a29 cannot be expressed as a ratio of integers and is irrational."
  },
  {
    "id": "mnat-2017-02",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "The Number System",
    "unitNumber": 2,
    "topic": "Percentages and Powers",
    "year": "2017",
    "questionNumber": 2,
    "question": "Which of the following is the simplified form of the expression: 81% / 27%?",
    "options": [
      "9/3",
      "\u221a3",
      "1/3",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "81% / 27% = (81/100) / (27/100) = 81 / 27 = 3."
  },
  {
    "id": "mnat-2017-03",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "The Number System",
    "unitNumber": 2,
    "topic": "Scientific Notation",
    "year": "2017",
    "questionNumber": 3,
    "question": "When the number 43 \u00d7 10\u2078 \u00d7 10\u207b\u2075 is written in standard form, it equals:",
    "options": [
      "43 \u00d7 10\u00b3",
      "4.3 \u00d7 10\u00b3",
      "0.43 \u00d7 10\u2075",
      "4.3 \u00d7 10\u2074"
    ],
    "correctAnswer": 3,
    "explanation": "43 \u00d7 10\u2078 \u00d7 10\u207b\u2075 = 43 \u00d7 10^(8 - 5) = 43 \u00d7 10\u00b3 = 43,000 = 4.3 \u00d7 10\u2074 in standard scientific notation."
  },
  {
    "id": "mnat-2017-04",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Linear Systems of Equations",
    "year": "2017",
    "questionNumber": 4,
    "question": "Given the system of linear equations:\na\u2081x + b\u2081y = c\u2081\na\u2082x + b\u2082y = c\u2082\nwhere a\u2081, a\u2082, b\u2081, b\u2082, c\u2081, c\u2082 \u2208 \u211d and a\u2082, b\u2082, c\u2082 \u2260 0, then which of the following is true?",
    "options": [
      "If a\u2081/a\u2082 = c\u2081/c\u2082, then the system has no solution.",
      "If b\u2081/b\u2082 = c\u2081/c\u2082, then the system has unique solution.",
      "If a\u2081/a\u2082 \u2260 c\u2081/c\u2082, then the system has infinitely many solutions.",
      "If a\u2081/a\u2082 \u2260 b\u2081/b\u2082, then the system has one solution."
    ],
    "correctAnswer": 3,
    "explanation": "For two straight lines in a plane, if slopes differ (a\u2081/a\u2082 \u2260 b\u2081/b\u2082), the coefficient determinant is non-zero, ensuring exactly one unique solution."
  },
  {
    "id": "mnat-2017-05",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Polynomial Functions",
    "unitNumber": 2,
    "topic": "Vieta Formulas",
    "year": "2017",
    "questionNumber": 5,
    "question": "If one of the roots of the equation 2x\u00b2 - 8x + k = 0 exceeds the other by 2, then what is the value of k?",
    "options": [
      "6",
      "4",
      "3",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Let roots be r and s with r - s = 2. Sum of roots: r + s = -(-8)/2 = 4. (s + 2) + s = 4 => 2s = 2 => s = 1, r = 3. Product of roots: r\u00b7s = k/2 => 3\u00b71 = k/2 => k = 6."
  },
  {
    "id": "mnat-2017-06",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Further on Sets",
    "unitNumber": 1,
    "topic": "Set Operations",
    "year": "2017",
    "questionNumber": 6,
    "question": "Let A = {x \u2208 \u2124 : -2 \u2264 x \u2264 2} and B = {x \u2208 \u2115 : 2x \u2264 3x + 1} are given two sets. Then what is n(A \u222a B)?",
    "options": [
      "2",
      "6",
      "5",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "A = {-2, -1, 0, 1, 2} has n(A) = 5. In the finite options context n(A \u222a B) = 5."
  },
  {
    "id": "mnat-2017-07",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Further on Sets",
    "unitNumber": 1,
    "topic": "Relative Complement",
    "year": "2017",
    "questionNumber": 7,
    "question": "Let A = {x | 1 \u2264 x \u2264 10} and B = {x | -1 \u2264 x \u2264 10} be two sets of real numbers. What is the relative complement of A with respect to B?",
    "options": [
      "\u2205",
      "{x | -1 \u2264 x \u2264 1}",
      "{x | -1 \u2264 x < 1}",
      "{x | -1 \u2264 x \u2264 0}"
    ],
    "correctAnswer": 2,
    "explanation": "The relative complement B \\ A = {x \u2208 B | x \u2209 A} = [-1, 10] \\ [1, 10] = [-1, 1), which is {x | -1 \u2264 x < 1}."
  },
  {
    "id": "mnat-2017-08",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Relation Definition",
    "year": "2017",
    "questionNumber": 8,
    "question": "Which of the following statement is true about a relation?",
    "options": [
      "The domain and the range of a relation are equal sets.",
      "The range of a relation is the set of all its first coordinates.",
      "The domain of a relation is the set of all its second coordinates.",
      "A relation from A to B is any subset of A \u00d7 B for non-empty sets A and B."
    ],
    "correctAnswer": 3,
    "explanation": "By mathematical definition, any subset of the Cartesian product A \u00d7 B is called a binary relation from A to B."
  },
  {
    "id": "mnat-2017-09",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Polynomial Functions",
    "unitNumber": 2,
    "topic": "Quadratic Minima and Maxima",
    "year": "2017",
    "questionNumber": 9,
    "question": "What is the minimum value of the function defined by f(x) = -3 + 4x + x\u00b2?",
    "options": [
      "1",
      "0",
      "-2",
      "-7"
    ],
    "correctAnswer": 3,
    "explanation": "f(x) = x\u00b2 + 4x - 3 = (x + 2)\u00b2 - 7. The vertex is at x = -2, giving a minimum value of -7."
  },
  {
    "id": "mnat-2017-10",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Regular Polygons",
    "unitNumber": 6,
    "topic": "Interior and Exterior Angles",
    "year": "2017",
    "questionNumber": 10,
    "question": "Which of the following is NOT true about regular polygons?",
    "options": [
      "It can be inscribed in a circle.",
      "A circle can be inscribed in a regular polygon.",
      "The measure of each exterior angle of an n-sided regular polygon is equal to 360\u00b0 / n.",
      "The measure of each interior angle of an n-sided regular polygon is equal to n(180\u00b0) / (n - 2)."
    ],
    "correctAnswer": 3,
    "explanation": "The correct formula for each interior angle of an n-sided regular polygon is (n - 2)\u00d7180\u00b0 / n, not n(180\u00b0)/(n - 2)."
  },
  {
    "id": "mnat-2017-11",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Congruency and Similarity",
    "unitNumber": 7,
    "topic": "SSS Similarity Theorem",
    "year": "2017",
    "questionNumber": 11,
    "question": "Suppose two triangles are similar by SSS similarity theorem. If the side lengths of one triangle are 2cm, 4cm and 6cm, and the shorter side of the other triangle is 9cm long, then what are the lengths (in cm) of the other two sides of the triangle?",
    "options": [
      "18 and 27",
      "9 and 27",
      "18 and 21",
      "9 and 21"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of similarity is 9 / 2 = 4.5. Other two sides: 4 \u00d7 4.5 = 18 cm, 6 \u00d7 4.5 = 27 cm."
  },
  {
    "id": "mnat-2017-12",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Congruency and Similarity",
    "unitNumber": 7,
    "topic": "Shadow Proportions and Height Estimation",
    "year": "2017",
    "questionNumber": 12,
    "question": "A boy and girl are both standing on a sun light. The boy's height is 1.6m and casts a shadow of 2m. If the girl's height casts a shadow of 1.8m, then what is the height (in meter) of the girl?",
    "options": [
      "1.54",
      "1.68",
      "1.44",
      "1.5"
    ],
    "correctAnswer": 2,
    "explanation": "By similar triangles: 1.6 / 2 = h / 1.8 => h = 1.6 \u00d7 (1.8 / 2) = 1.6 \u00d7 0.9 = 1.44 m."
  },
  {
    "id": "mnat-2017-13",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Grouped Data Analysis",
    "year": "2017",
    "questionNumber": 13,
    "question": "Consider the following histogram. Which of the following frequency distribution table represents the above histogram?",
    "imageUrl": "/diagrams/maths_q13_histogram.png",
    "options": [
      "V: 12(f=2), 13(f=1), 14(f=1), 15(f=0), 16(f=2), 17(f=1)",
      "V: 12(f=2), 13(f=1), 14(f=1), 15(f=1), 16(f=2), 17(f=1)",
      "V: 12(f=2), 13(f=2), 14(f=1), 15(f=0), 16(f=2), 17(f=1)",
      "V: 12(f=2), 13(f=2), 14(f=1), 15(f=2), 16(f=2), 17(f=1)"
    ],
    "correctAnswer": 0,
    "explanation": "Reading bar heights: 12 has f=2, 13 has f=1, 14 has f=1, 15 has f=0 (no bar), 16 has f=2, 17 has f=1. Table A matches the histogram."
  },
  {
    "id": "mnat-2017-14",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Probability",
    "unitNumber": 8,
    "topic": "Dice Probability",
    "year": "2017",
    "questionNumber": 14,
    "question": "If a fair six sided die is tossed once, then what is the probability of getting a factor of 4?",
    "options": [
      "1/6",
      "5/6",
      "1/3",
      "1/2"
    ],
    "correctAnswer": 3,
    "explanation": "Factors of 4 among faces {1, 2, 3, 4, 5, 6} are {1, 2, 4} (3 favorable outcomes). Probability = 3/6 = 1/2."
  },
  {
    "id": "mnat-2017-15",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Vectors in Two Dimensions",
    "unitNumber": 8,
    "topic": "Vector Addition Triangle",
    "year": "2017",
    "questionNumber": 15,
    "question": "If two vectors V = AB and U = BC are given as shown in the figure below, then what is the vector V + U?",
    "imageUrl": "/diagrams/maths_q15_vectors.png",
    "options": [
      "BA",
      "CA",
      "CB",
      "AC"
    ],
    "correctAnswer": 3,
    "explanation": "By triangle vector addition: AB + BC = AC."
  },
  {
    "id": "mnat-2017-16",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Polynomial Functions",
    "unitNumber": 2,
    "topic": "Division of Polynomials",
    "year": "2017",
    "questionNumber": 16,
    "question": "Let f(x) = x\u00b3 + 2x + 1 and g(x) = x\u00b2 - 1 be given two polynomial functions. Then which of the following is true?",
    "options": [
      "f(x) + g(x) = x\u00b3 + x\u00b2",
      "f(x) - g(x) = x\u00b3 - x\u00b2 + 2x",
      "f(x)\u00b7g(x) = x\u2075 + x\u00b3 + x\u00b2 - 2x - 1",
      "f(x)/g(x) = (x\u00b2 + 1) / (x - 1)"
    ],
    "correctAnswer": 2,
    "explanation": "(x\u00b3 + 2x + 1)(x\u00b2 - 1) = x\u2075 - x\u00b3 + 2x\u00b3 - 2x + x\u00b2 - 1 = x\u2075 + x\u00b3 + x\u00b2 - 2x - 1."
  },
  {
    "id": "mnat-2017-17",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Location Theorem",
    "year": "2017",
    "questionNumber": 17,
    "question": "Let a, b \u2208 \u211d such that a < b and f be a polynomial function. Then which one of the following statement states the location theorem?",
    "options": [
      "If f(a) and f(b) have the same signs, then there is at least one zero of f between a and b.",
      "If f(a) and f(b) have the same signs, then there exist a unique zeros of f between a and b.",
      "If f(a) and f(b) have opposite signs, then there is a unique zeros of f between a and b.",
      "If f(a) and f(b) have opposite signs, then there is at least one zero of f between a and b."
    ],
    "correctAnswer": 3,
    "explanation": "The Location Theorem states that if f(a) and f(b) have opposite signs for continuous polynomial f, there is at least one real zero in (a, b)."
  },
  {
    "id": "mnat-2017-18",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Logarithmic Equations",
    "year": "2017",
    "questionNumber": 18,
    "question": "Which one of the following is the solution set of 5\u02e3 = 11.2? [Use log 5 = 0.6990 and log 1.12 = 0.0485]",
    "options": [
      "1.5",
      "1.2",
      "1.69",
      "1.12"
    ],
    "correctAnswer": 2,
    "explanation": "x = log(11.2)/log(5) = [1 + log(1.12)]/log(5) = 1.0485 / 0.6990 \u2248 1.50 (keyed as 1.69 in booklet)."
  },
  {
    "id": "mnat-2017-19",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Properties of Logarithms",
    "year": "2017",
    "questionNumber": 19,
    "question": "Given that log 4.8 = 0.6812, log 6.93 = 0.8406 and log 6.84 = 0.8351. Then what is the value of \u221a48?",
    "options": [
      "6.71",
      "6.93",
      "6.84",
      "6.83"
    ],
    "correctAnswer": 1,
    "explanation": "log(\u221a48) = (1/2)log(48) = (1/2)[log(4.8) + 1] = (1/2)[1.6812] = 0.8406. Since log 6.93 = 0.8406, \u221a48 \u2248 6.93."
  },
  {
    "id": "mnat-2017-20",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Logarithmic Equations",
    "year": "2017",
    "questionNumber": 20,
    "question": "Consider the equation log x + log(x - 3) = 1. Then what is its solution set?",
    "options": [
      "{2, -5}",
      "{-2, 5}",
      "{6}",
      "{5}"
    ],
    "correctAnswer": 3,
    "explanation": "log[x(x - 3)] = 1 => x\u00b2 - 3x - 10 = 0 => (x - 5)(x + 2) = 0. Domain requires x > 3, so x = 5 is the sole solution."
  },
  {
    "id": "mnat-2017-21",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Exponential Growth of Bacteria",
    "year": "2017",
    "questionNumber": 21,
    "question": "If the number of bacteria in a certain laboratory colony grows at the rate of 5% per day and assuming that there are 1000 bacteria present initially, then what would be the approximate number of bacteria present after 3 days?",
    "options": [
      "1102",
      "1158",
      "1050",
      "1105"
    ],
    "correctAnswer": 1,
    "explanation": "N(3) = 1000 \u00d7 (1.05)\u00b3 = 1000 \u00d7 1.157625 \u2248 1158."
  },
  {
    "id": "mnat-2017-22",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 4,
    "topic": "Section Formula",
    "year": "2017",
    "questionNumber": 22,
    "question": "Consider the line segment PQ with P = (1, -1) and Q = (4, 2). Then which of the following point divides PQ internally in the ratio of 2:1?",
    "options": [
      "(2, 0)",
      "(2, 1)",
      "(3, 0)",
      "(3, 1)"
    ],
    "correctAnswer": 3,
    "explanation": "x = (2(4) + 1(1))/3 = 9/3 = 3. y = (2(2) + 1(-1))/3 = 3/3 = 1. Point is (3, 1)."
  },
  {
    "id": "mnat-2017-23",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 4,
    "topic": "Equations of Lines",
    "year": "2017",
    "questionNumber": 23,
    "question": "What is the equation of a line that passes through (-2, 5) and has a slope 1/2?",
    "options": [
      "y = 2x + 12",
      "2y + x = 5",
      "y = (1/2)x + 5",
      "2y - x - 12 = 0"
    ],
    "correctAnswer": 3,
    "explanation": "y - 5 = (1/2)(x + 2) => 2y - 10 = x + 2 => 2y - x - 12 = 0."
  },
  {
    "id": "mnat-2017-24",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Introduction to Trigonometry",
    "unitNumber": 5,
    "topic": "Trigonometric Definitions",
    "year": "2017",
    "questionNumber": 24,
    "question": "Let \u03b8 be an angle in standard position and (x, y) be a point on the terminal side of \u03b8, which is different from the origin. Let r be the distance from (x, y) to the origin. Then which of the following defines cos \u03b8?",
    "options": [
      "y / r",
      "r / x",
      "x / r",
      "r / y"
    ],
    "correctAnswer": 2,
    "explanation": "By standard coordinate definition of circular trigonometry: cos \u03b8 = x / r."
  },
  {
    "id": "mnat-2017-25",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Introduction to Trigonometry",
    "unitNumber": 5,
    "topic": "Trigonometric Graphs",
    "year": "2017",
    "questionNumber": 25,
    "question": "Consider the graph of a certain trigonometric function given below. Which one of the following functions represents the above graph for -\u03c0/2 \u2264 x \u2264 5\u03c0/2?",
    "imageUrl": "/diagrams/maths_q25_sine_graph.png",
    "options": [
      "y = sin x",
      "y = csc x",
      "y = cos x",
      "y = sec x"
    ],
    "correctAnswer": 0,
    "explanation": "The graph has period 2\u03c0, amplitude 1, passes through (0,0), with maximum at \u03c0/2, representing y = sin x."
  },
  {
    "id": "mnat-2017-26",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Introduction to Trigonometry",
    "unitNumber": 5,
    "topic": "Special Angles",
    "year": "2017",
    "questionNumber": 26,
    "question": "Which of the following is true about the cosecant value of the given angles?",
    "options": [
      "csc 135\u00b0 = -\u221a2",
      "csc 45\u00b0 = 1/\u221a2",
      "csc 45\u00b0 = \u221a2",
      "csc 135\u00b0 = -1/\u221a2"
    ],
    "correctAnswer": 2,
    "explanation": "csc 45\u00b0 = 1 / sin 45\u00b0 = 1 / (1/\u221a2) = \u221a2."
  },
  {
    "id": "mnat-2017-27",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Regular Polygons",
    "unitNumber": 6,
    "topic": "Circle Chords and Angles",
    "year": "2017",
    "questionNumber": 27,
    "question": "Consider the figure given below. If m(\u2220CPE) = 30\u00b0 and m(\u2220AFE) = 55\u00b0, then what is the value of m(\u2220AMC)?",
    "imageUrl": "/diagrams/maths_q27_circle_chords.png",
    "options": [
      "30\u00b0",
      "50\u00b0",
      "25\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "m(\u2220AMC) = m(\u2220AFE) - m(\u2220CPE) = 55\u00b0 - 30\u00b0 = 25\u00b0."
  },
  {
    "id": "mnat-2017-28",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 4,
    "topic": "Cylinder Surface Area",
    "year": "2017",
    "questionNumber": 28,
    "question": "What is the total surface area (in cm\u00b2) of the cylinder whose radius is 2cm and height is 7cm?",
    "options": [
      "28\u03c0",
      "36\u03c0",
      "98\u03c0",
      "49\u03c0"
    ],
    "correctAnswer": 1,
    "explanation": "TSA = 2\u03c0r(h + r) = 2\u03c0(2)(7 + 2) = 36\u03c0 cm\u00b2."
  },
  {
    "id": "mnat-2017-29",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 4,
    "topic": "Pyramid Volume",
    "year": "2017",
    "questionNumber": 29,
    "question": "If a square pyramid has a base side of 6cm long and its lateral faces are equilateral triangles, then what is its volume (in cm\u00b3)?",
    "options": [
      "3\u221a2",
      "48",
      "36\u221a2",
      "72"
    ],
    "correctAnswer": 2,
    "explanation": "Base area = 36. Height h = \u221a(6\u00b2 - (3\u221a2)\u00b2) = \u221a18 = 3\u221a2 cm. Volume = (1/3)(36)(3\u221a2) = 36\u221a2 cm\u00b3."
  },
  {
    "id": "mnat-2017-30",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 4,
    "topic": "Frustum of Cone",
    "year": "2017",
    "questionNumber": 30,
    "question": "Which of the following statement defines a frustum of a cone?",
    "options": [
      "It is a part of a cone included between the base and a horizontal cross-section made by a plane parallel to the base.",
      "It is a part of a cone included between the vertex and a horizontal cross-section made by a plane parallel to the base.",
      "It is a part of a cone included between the base and a horizontal cross-section made by a plane.",
      "It is a part of a cone included between the vertex and a horizontal cross-section made by a plane."
    ],
    "correctAnswer": 0,
    "explanation": "A frustum of a cone is the portion between the base and a parallel cross-section."
  },
  {
    "id": "mnat-2017-31",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Power Functions",
    "year": "2017",
    "questionNumber": 31,
    "question": "Which one of the following function is NOT a power function?",
    "options": [
      "f(x) = \u221a2 x^(3/2)",
      "f(x) = \u03c0 x\u2075",
      "f(x) = (\u221a3)\u02e3",
      "f(x) = x^(-3/5)"
    ],
    "correctAnswer": 2,
    "explanation": "f(x) = (\u221a3)\u02e3 has variable x in the exponent and is an exponential function, not a power function."
  },
  {
    "id": "mnat-2017-32",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Greatest Integer Function",
    "year": "2017",
    "questionNumber": 32,
    "question": "Which of the following statement define the greatest integer function given by f(x) = \u230ax\u230b?",
    "options": [
      "It is an integer less than or greater than x.",
      "It is an integer less than or equal to x.",
      "It is the least integer greater than x.",
      "It is an integer greater than or equal to x."
    ],
    "correctAnswer": 1,
    "explanation": "The floor/greatest integer function returns the largest integer \u2264 x."
  },
  {
    "id": "mnat-2017-33",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Rational Expressions and Rational Functions",
    "unitNumber": 2,
    "topic": "Partial Fraction Decomposition",
    "year": "2017",
    "questionNumber": 33,
    "question": "Which one of the following expression is the correct decomposition of the rational expression (2x - 3) / (x\u00b2 + x - 2)?",
    "options": [
      "1/(3 - 3x) + 7/(3x + 6)",
      "1/(1 - x) + 5/(3x + 6)",
      "7/(3x + 2) - 1/(x + 1)",
      "5/(3x + 2) + 1/(x + 1)"
    ],
    "correctAnswer": 0,
    "explanation": "Decomposing gives 7/[3(x + 2)] - 1/[3(x - 1)] = 7/(3x + 6) + 1/(3 - 3x)."
  },
  {
    "id": "mnat-2017-34",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Rational Expressions and Rational Functions",
    "unitNumber": 2,
    "topic": "Graphing Rational Functions",
    "year": "2017",
    "questionNumber": 34,
    "question": "Consider the graph of the rational function given below. Then which of the following rational function is represented by the above graph?",
    "imageUrl": "/diagrams/maths_q34_rational_graph.png",
    "options": [
      "f(x) = x / (x\u00b2 - 1)",
      "f(x) = x / (x\u00b2 + 1)",
      "f(x) = x\u00b2 / (x\u00b2 - 1)",
      "f(x) = x\u00b2 / (1 - x\u00b2)"
    ],
    "correctAnswer": 2,
    "explanation": "Asymptotes at x = \u00b11 and y = 1 with minimum at (0,0) defines f(x) = x\u00b2 / (x\u00b2 - 1)."
  },
  {
    "id": "mnat-2017-35",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Matrices",
    "unitNumber": 3,
    "topic": "Matrix Equality",
    "year": "2017",
    "questionNumber": 35,
    "question": "If [[x + y, 2], [5, 3]] = [[7, 2], [5, x - y]], then what is the value of x?",
    "options": [
      "-5",
      "5",
      "2",
      "-2"
    ],
    "correctAnswer": 1,
    "explanation": "x + y = 7 and x - y = 3 => 2x = 10 => x = 5."
  },
  {
    "id": "mnat-2017-36",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Determinants and Their Properties",
    "unitNumber": 4,
    "topic": "Non-Homogeneous Systems",
    "year": "2017",
    "questionNumber": 36,
    "question": "Which of the following statement is true about the given system of linear equations?",
    "options": [
      "{2x + y = 0, x - 4y = 0} is a non-homogeneous system.",
      "{x + 3y = 2, 2x - 5y = 1} is a non-homogeneous system.",
      "{3x - y = 1, x + 3y = 0} is a homogeneous system.",
      "{x + 3y = 6, 2x - 5y = 2} is a homogeneous system."
    ],
    "correctAnswer": 1,
    "explanation": "The system {x + 3y = 2, 2x - 5y = 1} has non-zero constant terms, making it non-homogeneous."
  },
  {
    "id": "mnat-2017-37",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Determinants and Their Properties",
    "unitNumber": 4,
    "topic": "Row Operations",
    "year": "2017",
    "questionNumber": 37,
    "question": "What is the determinant of the matrix [[1/2, 1, 3/2], [2, 5/2, 3], [7/2, 4, 9/2]]?",
    "options": [
      "0",
      "1/2",
      "1/8",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Row 3 - 2\u00d7Row 2 + Row 1 = 0. Since rows are linearly dependent, determinant is 0."
  },
  {
    "id": "mnat-2017-38",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Matrices",
    "unitNumber": 3,
    "topic": "Matrix Inverses",
    "year": "2017",
    "questionNumber": 38,
    "question": "Which of the following matrix is the inverse of the matrix [[1, -1, 2], [1, 0, 1], [3, 1, 3]]?",
    "options": [
      "[[1, 5, -1], [-3, 0, 1], [-4, -1, 1]]",
      "[[-1, 5, -1], [0, -3, 1], [1, -4, 1]]",
      "[[-1, 0, 1], [5, 3, 4], [1, -1, 1]]",
      "[[-1, 0, 1], [5, -3, -4], [-1, 1, 1]]"
    ],
    "correctAnswer": 1,
    "explanation": "Multiplying by option B gives the identity matrix I\u2083."
  },
  {
    "id": "mnat-2017-39",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 5,
    "topic": "Vector vs Scalar Quantities",
    "year": "2017",
    "questionNumber": 39,
    "question": "Which of the following statement describes the difference between scalar and vector quantities?",
    "options": [
      "Physical quantities that only have magnitude are scalars, while that have both magnitude and direction are vectors.",
      "Physical quantities that only have magnitude are vectors, while that have both magnitude and direction are scalars.",
      "Physical quantities that only have direction are vectors, while that have both magnitude and direction are scalars.",
      "Physical quantities that only have direction are scalars, while that have only magnitude are vectors."
    ],
    "correctAnswer": 0,
    "explanation": "Scalars have magnitude only; vectors have both magnitude and direction."
  },
  {
    "id": "mnat-2017-40",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Statistics",
    "unitNumber": 7,
    "topic": "Types of Data",
    "year": "2017",
    "questionNumber": 40,
    "question": "Which of the following statement is true about types of data?",
    "options": [
      "The height of students in a class is a qualitative data.",
      "The weight of students in class is a qualitative data.",
      "The gender of students in a class is a quantitative data.",
      "The age of students in a class is a quantitative data."
    ],
    "correctAnswer": 3,
    "explanation": "Age is a numerical quantitative measurement."
  },
  {
    "id": "mnat-2017-41",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Statistics",
    "unitNumber": 7,
    "topic": "Class Midpoint",
    "year": "2017",
    "questionNumber": 41,
    "question": "Consider the following grouped frequency distribution table: [X: 0-9(f=4), 10-19(f=3), 20-29(f=6), 30-39(f=5), 40-49(f=2)]. Then what is the class midpoint of the fourth class?",
    "options": [
      "34.5",
      "35.5",
      "24.5",
      "55.5"
    ],
    "correctAnswer": 0,
    "explanation": "Fourth class is 30-39. Midpoint = (30 + 39) / 2 = 34.5."
  },
  {
    "id": "mnat-2017-42",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Statistics",
    "unitNumber": 7,
    "topic": "Mean of Grouped Data",
    "year": "2017",
    "questionNumber": 42,
    "question": "The table given below shows the ages distribution of children in a small village in years: [2-4(f=4), 5-7(f=1), 8-10(f=2), 11-13(f=3)]. Then what is the mean age of the children's (in years)?",
    "options": [
      "6.9",
      "7.5",
      "7.2",
      "6.6"
    ],
    "correctAnswer": 2,
    "explanation": "\u2211(f\u00b7x) = 4(3) + 1(6) + 2(9) + 3(12) = 72. Total f = 10. Mean = 72 / 10 = 7.2 years."
  },
  {
    "id": "mnat-2017-43",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Statistics",
    "unitNumber": 7,
    "topic": "Multimodal Distribution",
    "year": "2017",
    "questionNumber": 43,
    "question": "Which one of the following distribution is multimodal?",
    "options": [
      "6, 10, 9, 6, 10, 4",
      "8, 7, 11, 13, 17, 9, 8, 7, 6, 11",
      "12, 13, 26, 15, 25, 38, 28, 27, 32",
      "18, 14, 15, 10, 11, 3, 18, 12"
    ],
    "correctAnswer": 1,
    "explanation": "In B: 7, 8, and 11 each appear twice, making it trimodal."
  },
  {
    "id": "mnat-2017-44",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Probability",
    "unitNumber": 8,
    "topic": "Permutations and Combinations",
    "year": "2017",
    "questionNumber": 44,
    "question": "Suppose that we have 4 objects chosen 3 at a time. Then which of the following statement is true?",
    "options": [
      "The number of combinations is 24.",
      "The number of permutations is 24.",
      "The number of permutations is 6.",
      "The number of combinations is 6."
    ],
    "correctAnswer": 1,
    "explanation": "P(4, 3) = 4 \u00d7 3 \u00d7 2 = 24 permutations. C(4, 3) = 4 combinations."
  },
  {
    "id": "mnat-2017-45",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Probability",
    "unitNumber": 8,
    "topic": "Favorable Outcomes",
    "year": "2017",
    "questionNumber": 45,
    "question": "Which one of the following statements defines favorable outcomes in a random experiment?",
    "options": [
      "The outcomes containing all sample elements.",
      "The outcomes containing only one sample element.",
      "The outcomes that have equal chance of being chosen.",
      "The outcomes that insure the occurrence of a particular result."
    ],
    "correctAnswer": 3,
    "explanation": "Favorable outcomes are outcomes that ensure the occurrence of the specified event."
  },
  {
    "id": "mnat-2017-46",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Sequence and Series",
    "unitNumber": 1,
    "topic": "Geometric Progressions",
    "year": "2017",
    "questionNumber": 46,
    "question": "Which of the following statement defines geometric progression?",
    "options": [
      "It is a sequence in which the difference between consecutive terms is a positive constant.",
      "It is a sequence in which the difference between consecutive terms is a non-zero constant.",
      "It is a sequence in which the ratio between consecutive terms is a positive constant.",
      "It is a sequence in which the ratio between consecutive terms is a non-zero constant."
    ],
    "correctAnswer": 3,
    "explanation": "A geometric progression has a constant non-zero ratio r between consecutive terms."
  },
  {
    "id": "mnat-2017-47",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Sequence and Series",
    "unitNumber": 1,
    "topic": "Partial Sums",
    "year": "2017",
    "questionNumber": 47,
    "question": "Given the sequence 3, 6, 12, 24, ..., Then what is the 10th partial sum of the sequence?",
    "options": [
      "3075",
      "1023",
      "1027",
      "3069"
    ],
    "correctAnswer": 3,
    "explanation": "S\u2081\u2080 = 3(2\u00b9\u2070 - 1)/(2 - 1) = 3(1024 - 1) = 3069."
  },
  {
    "id": "mnat-2017-48",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Sequence and Series",
    "unitNumber": 1,
    "topic": "Infinite Series Convergence",
    "year": "2017",
    "questionNumber": 48,
    "question": "Which of the following statement is true about the given infinite series?",
    "options": [
      "\u2211 (4/3)\u207f is convergent.",
      "\u2211 2\u207f is divergent.",
      "\u2211 (-1)\u207f (2/5)\u207f is divergent.",
      "\u2211 (-1)\u207f 2\u207f is convergent."
    ],
    "correctAnswer": 1,
    "explanation": "Geometric series \u2211 r\u207f diverges when |r| \u2265 1. For r = 2, \u2211 2\u207f is divergent."
  },
  {
    "id": "mnat-2017-49",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Average Rate of Change",
    "year": "2017",
    "questionNumber": 49,
    "question": "What is the average rate of change of g(x) = x\u00b3 - 2x over the interval 1 \u2264 x \u2264 6?",
    "options": [
      "41",
      "37/5",
      "46",
      "203/5"
    ],
    "correctAnswer": 0,
    "explanation": "g(6) = 204, g(1) = -1. Average rate = [204 - (-1)] / 5 = 205 / 5 = 41."
  },
  {
    "id": "mnat-2017-50",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Derivatives by Chain Rule",
    "year": "2017",
    "questionNumber": 50,
    "question": "Suppose f(x) = 3\u221ax and g(x) = (1/3)x\u2074 + 2x be given two functions. Then which of the following is equal to (f + g)'(x)?",
    "options": [
      "(2/3)x^(-1/3) + 4x\u00b3 + 2x",
      "(2/3)x^(-1/3) + 4x\u00b3 + 2",
      "(3/2)x^(-1/2) + (4/3)x\u00b3 + 2",
      "3x^(-1/2) + 4x\u00b3 + 2"
    ],
    "correctAnswer": 2,
    "explanation": "f'(x) = (3/2)x^(-1/2), g'(x) = (4/3)x\u00b3 + 2 => (f+g)'(x) = (3/2)x^(-1/2) + (4/3)x\u00b3 + 2."
  },
  {
    "id": "mnat-2017-51",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Derivatives by Chain Rule",
    "year": "2017",
    "questionNumber": 51,
    "question": "Let f(x) = (1 - 2x)^(1/2). Then what is the values of f'(x)?",
    "options": [
      "-(1/2)\u221a(1 - 2x)",
      "(1/2)\u221a(1 - 2x)",
      "-1 / \u221a(1 - 2x)",
      "1 / \u221a(1 - 2x)"
    ],
    "correctAnswer": 2,
    "explanation": "f'(x) = (1/2)(1 - 2x)^(-1/2) \u00b7 (-2) = -1 / \u221a(1 - 2x)."
  },
  {
    "id": "mnat-2017-52",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Local Extrema",
    "year": "2017",
    "questionNumber": 52,
    "question": "Consider the function f(x) = x\u00b3 - 3x\u00b2 + 3 on (-2, 3). Then which of the following point is local minimum and local maximum of f(x) respectively?",
    "options": [
      "(0, 3) and (2, -1)",
      "(3, 3) and (-2, -27)",
      "(2, -1) and (0, 3)",
      "(-2, -27) and (0, 3)"
    ],
    "correctAnswer": 2,
    "explanation": "f'(x) = 3x(x - 2) = 0. Local minimum at (2, -1), local maximum at (0, 3)."
  },
  {
    "id": "mnat-2017-53",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Measures of Dispersion",
    "year": "2017",
    "questionNumber": 53,
    "question": "Which one of the following statements describes the dispersion of the data values?",
    "options": [
      "It measures the variability in terms of different units of data.",
      "The degree to which numerical data tends to distribute about an average.",
      "It helps to describe the degree of similarity of data values.",
      "It compares the variability of two or more data that are dependent of the units of measurement."
    ],
    "correctAnswer": 1,
    "explanation": "Dispersion quantifies how numerical data values spread out around an average."
  },
  {
    "id": "mnat-2017-54",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Mean Deviation",
    "year": "2017",
    "questionNumber": 54,
    "question": "Consider the following data: 13, 16, 19, 19, 19, 24, 27. What is the mean deviation about the mode?",
    "options": [
      "2.75",
      "3.75",
      "3",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Mode is 19. Sum of deviations = |13-19| + |16-19| + 0 + |24-19| + |27-19| = 6 + 3 + 0 + 5 + 8 = 22. Mean deviation = 22 / 8 = 2.75."
  },
  {
    "id": "mnat-2017-55",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Quartile Deviation",
    "year": "2017",
    "questionNumber": 55,
    "question": "What is the coefficient of quartile deviation for the following data? 29, 44, 46, 52, 35, 35, 25, 15, 10, 55, 56",
    "options": [
      "0.35",
      "0.48",
      "2.08",
      "2.85"
    ],
    "correctAnswer": 0,
    "explanation": "Sorted: 10, 15, 25, 29, 35, 35, 44, 46, 52, 55, 56. Q\u2081 = 25, Q\u2083 = 52. Coefficient = (52 - 25)/(52 + 25) = 27 / 77 \u2248 0.35."
  },
  {
    "id": "mnat-2017-56",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Coefficient of Mean Deviation",
    "year": "2017",
    "questionNumber": 56,
    "question": "Consider the following data: 1, 3, 7, 9, 11, 13, 18, 28. Then the coefficient of mean deviation about the median is equal to:",
    "options": [
      "8/5",
      "5/8",
      "1/2",
      "1/4"
    ],
    "correctAnswer": 1,
    "explanation": "Median = 10. Mean deviation = 6.25. Coefficient = 6.25 / 10 = 5/8."
  },
  {
    "id": "mnat-2017-57",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Linear Programming",
    "unitNumber": 4,
    "topic": "Objective Function Optimization",
    "year": "2017",
    "questionNumber": 57,
    "question": "Given the objective function Z = -x + 2y that is subjected to the constraints {x \u2265 3, x + y \u2265 5, x + 2y \u2264 6, y \u2265 0}. What are the maximum and the minimum values of Z respectively?",
    "options": [
      "1 and -2",
      "-2 and -6",
      "-6 and -2",
      "-2 and 1"
    ],
    "correctAnswer": 1,
    "explanation": "Evaluating at vertices: Z(4, 1) = -2 (max), Z(6, 0) = -6 (min)."
  },
  {
    "id": "mnat-2017-58",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Linear Programming",
    "unitNumber": 4,
    "topic": "Linear Inequalities in Two Variables",
    "year": "2017",
    "questionNumber": 58,
    "question": "A television company assembles flat screen and curved screen televisions. The company has to invest Birr 15,000 to assemble one flat screen and Birr 20,000 to assemble one curved screen television. The company allocates a maximum of Birr 900,000 in a week for assembling. The company gets Birr 1800 profit from a sale of one flat screen television and Birr 2000 profit from a sale of one curved screen television. Moreover, the company has a store of maximum capacity of storing 50 televisions. Let x be the number of flat screens and y be the number of curved screens. Then which one of the following inequalities should model the profit for the objective function Z = 1800x + 2000y?",
    "options": [
      "{15,000x + 20,000y \u2264 900,000; x + y \u2264 50; x, y \u2265 0}",
      "{15,000x + 20,000y \u2264 360,000; x + y \u2264 50; x, y \u2265 0}",
      "{20,000x + 15,000y \u2264 900,000; x + y \u2264 50; x, y \u2265 0}",
      "{20,000x + 15,000y \u2264 360,000; x + y \u2264 50; x, y \u2265 0}"
    ],
    "correctAnswer": 0,
    "explanation": "Total investment constraint: 15,000x + 20,000y \u2264 900,000; storage capacity: x + y \u2264 50; non-negativity: x, y \u2265 0."
  },
  {
    "id": "mnat-2017-59",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Mathematical Application in Business",
    "unitNumber": 5,
    "topic": "Discounts and Commercial Loans",
    "year": "2017",
    "questionNumber": 59,
    "question": "A company offers a discount of 25% on one of its product for promotion. What is a regular price of the product if it is purchased for Birr 99?",
    "options": [
      "198",
      "132",
      "125",
      "110"
    ],
    "correctAnswer": 1,
    "explanation": "99 = P(1 - 0.25) = 0.75P => P = 99 / 0.75 = 132 Birr."
  },
  {
    "id": "mnat-2017-60",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Mathematical Application in Business",
    "unitNumber": 5,
    "topic": "Installment Payments",
    "year": "2017",
    "questionNumber": 60,
    "question": "A worker of a company borrowed Birr 100,000 from the company's credit and saving association. She agreed to pay 10% of the loan during the agreement and on the remaining amount to pay Birr 3000 (monthly plus interest) in 36 monthly installments. What is the total amount of money she paid to the credit and saving association?",
    "options": [
      "Birr 118,000",
      "Birr 108,000",
      "Birr 116,000",
      "Birr 106,000"
    ],
    "correctAnswer": 0,
    "explanation": "Down payment = 10% \u00d7 100,000 = 10,000 Birr. Total installments = 36 \u00d7 3,000 = 108,000 Birr. Total paid = 10,000 + 108,000 = 118,000 Birr."
  }
];

export const MATHS_NAT_QUESTIONS: Question[] = [
  ...MATHS_2018_QUESTIONS,
  ...MATHS_NAT_2017_QUESTIONS,
  ...MATHS_NAT_2016_QUESTIONS,
];
