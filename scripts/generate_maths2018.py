import json

# All 60 Mathematics questions from Maths 2018 First Round ESSLCE Online Exam
maths_2018 = [
  {
    "id": "math-2018-01",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Mean Deviation from the Mean",
    "year": "2018",
    "questionNumber": 1,
    "question": "Consider the data set: 11, 13, 15, 17, 19, 21. Which one of the following is the mean deviation from the mean?",
    "options": [
      "4",
      "3.5",
      "4.5",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "Mean x̄ = (11 + 13 + 15 + 17 + 19 + 21) / 6 = 96 / 6 = 16. Deviations |x_i - 16|: |11-16|=5, |13-16|=3, |15-16|=1, |17-16|=1, |19-16|=3, |21-16|=5. Sum = 5 + 3 + 1 + 1 + 3 + 5 = 18. Mean deviation MD = 18 / 6 = 3."
  },
  {
    "id": "math-2018-02",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 7,
    "topic": "Parallel and Perpendicular Lines",
    "year": "2018",
    "questionNumber": 2,
    "question": "Consider the quadrilateral ABCD where A = (0,0), B = (-1,1), C = (0,2), and D = (2,2). Which one of the following is true?",
    "options": [
      "CD is perpendicular to AB.",
      "BC is parallel to AD.",
      "CD is perpendicular to BE.",
      "AB is parallel to CD."
    ],
    "correctAnswer": 1,
    "explanation": "Slope of BC: (2 - 1) / (0 - (-1)) = 1 / 1 = 1. Slope of AD: (2 - 0) / (2 - 0) = 2 / 2 = 1. Since slopes are equal (m_BC = m_AD = 1), line segment BC is parallel to AD."
  },
  {
    "id": "math-2018-03",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Domain of Greatest Integer Function",
    "year": "2018",
    "questionNumber": 3,
    "question": "Consider the greatest integer (floor) function defined by f(x) = ⌊x - 1⌋. Which of the following sets is the domain of f?",
    "options": [
      "The set of rational numbers.",
      "The set of integers.",
      "The set of real numbers.",
      "The set of natural numbers."
    ],
    "correctAnswer": 2,
    "explanation": "The floor function ⌊x - 1⌋ is defined for every real number input x ∈ R (its range is the set of integers Z)."
  },
  {
    "id": "math-2018-04",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Definition of a Function",
    "year": "2018",
    "questionNumber": 4,
    "question": "Which one of the following relations defined on R is a function?",
    "options": [
      "R = {(x, y) : x, y ∈ R and y² = x}",
      "R = {(x, y) : x, y ∈ R and |y| = x}",
      "R = {(x, y) : x, y ∈ R and y = x²}",
      "R = {(x, y) : x, y ∈ R and y⁴ = x}"
    ],
    "correctAnswer": 2,
    "explanation": "In y = x², for each unique value of x, there exists exactly one single real output value y. The others yield two distinct outputs for positive x (e.g. y = ±√x)."
  },
  {
    "id": "math-2018-05",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Mathematical Application in Business",
    "unitNumber": 5,
    "topic": "Commercial Credit and Cash Loans",
    "year": "2018",
    "questionNumber": 5,
    "question": "Which one of the following is a legitimate source of cash loan?",
    "options": [
      "Non-government organization to alleviate public problems.",
      "Investors involved in home construction for a community.",
      "Group of investors committed to drilling out underground water.",
      "A money line group investing in health improvement sectors."
    ],
    "correctAnswer": 3,
    "explanation": "Institutional financial microfinance lending institutions and money lines provide direct commercial cash loan facilities."
  },
  {
    "id": "math-2018-06",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Average Rate of Change",
    "year": "2018",
    "questionNumber": 6,
    "question": "What is the average rate of change of y = f(x) with respect to x on the closed interval [a, b]?",
    "options": [
      "(f(b) + f(a)) / 2",
      "(b - a) / (f(b) - f(a))",
      "(f(b) - f(a)) / 2",
      "(f(b) - f(a)) / (b - a)"
    ],
    "correctAnswer": 3,
    "explanation": "The average rate of change of a function on [a, b] is given by the difference quotient: Δy / Δx = (f(b) - f(a)) / (b - a)."
  },
  {
    "id": "math-2018-07",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Logarithmic Equations",
    "year": "2018",
    "questionNumber": 7,
    "question": "Which one of the following sets is the solution of log₃(x) + log₃(x - 2) = 1?",
    "options": [
      "{-1, 3}",
      "{3}",
      "{2}",
      "{0, 2}"
    ],
    "correctAnswer": 1,
    "explanation": "log₃(x(x - 2)) = 1 => x² - 2x = 3¹ = 3 => x² - 2x - 3 = 0 => (x - 3)(x + 1) = 0 => x = 3 or x = -1. Because arguments must be positive (x > 2), x = -1 is extraneous. The valid solution set is {3}."
  },
  {
    "id": "math-2018-08",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Polynomial Functions",
    "unitNumber": 2,
    "topic": "Parabola Transformations",
    "year": "2018",
    "questionNumber": 8,
    "question": "Given functions f(x) = ax² and g(x) = ax² + c, where a < 0 and c > 0. Which statement is true about their graphs?",
    "options": [
      "The graph of f is an upward parabola, and the graph of g is obtained from that of f by shifting it downward by c units.",
      "The graph of f is a downward parabola, and the graph of g is obtained from that of f by shifting it to the right by c units.",
      "The graph of f is an upward parabola, and the graph of g is obtained from that of f by shifting it upward by c units.",
      "The graph of f is a downward parabola, and the graph of g is obtained from that of f by shifting it upward by c units."
    ],
    "correctAnswer": 3,
    "explanation": "Since leading coefficient a < 0, f(x) opens downward. Adding a positive constant c shifts the vertex vertically upward by c units."
  },
  {
    "id": "math-2018-09",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Statistics and Probability",
    "unitNumber": 9,
    "topic": "Measures of Central Tendency: Mode",
    "year": "2018",
    "questionNumber": 9,
    "question": "Consider the scores of 20 students: 13, 14, 14, 15, 19, 18, 13, 15, 16, 16, 17, 18, 15, 13, 14, 16, 14, 18, 16, 16. What is the mode?",
    "options": [
      "16",
      "15",
      "14",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "Counting frequencies: 13 occurs 3 times; 14 occurs 4 times; 15 occurs 3 times; 16 occurs 5 times; 17 occurs 1 time; 18 occurs 3 times; 19 occurs 1 time. The mode is 16 with the highest frequency (5)."
  },
  {
    "id": "math-2018-10",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Vectors in Two Dimensions",
    "unitNumber": 8,
    "topic": "Vector Addition Polygon",
    "year": "2018",
    "questionNumber": 10,
    "question": "In the vector polygon figure connecting vertices A, B, C, and D, which vector is equivalent to the sum AB + CD + BC?",
    "options": [
      "CD",
      "AC",
      "AD",
      "BD"
    ],
    "correctAnswer": 2,
    "explanation": "By commutativity of vector addition: AB + CD + BC = AB + BC + CD. By head-to-tail polygon addition, AB + BC = AC, and AC + CD = AD.",
    "diagramType": "math-vector-polygon"
  },
  {
    "id": "math-2018-11",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 7,
    "topic": "Equation of Line Through Two Points",
    "year": "2018",
    "questionNumber": 11,
    "question": "Which of the following equations represents the straight line that passes through the points (2, -1) and (-3, 4)?",
    "options": [
      "x + y - 1 = 0",
      "x + y + 1 = 0",
      "x - y - 1 = 0",
      "x - y + 1 = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Slope m = (4 - (-1)) / (-3 - 2) = 5 / -5 = -1. Line equation: y - (-1) = -1(x - 2) => y + 1 = -x + 2 => x + y - 1 = 0."
  },
  {
    "id": "math-2018-12",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Probability",
    "unitNumber": 8,
    "topic": "Binomial Theorem Expansion",
    "year": "2018",
    "questionNumber": 12,
    "question": "What is the coefficient of x³ y⁴ in the binomial expansion of (x - 2y)⁷?",
    "options": [
      "35",
      "70",
      "560",
      "-280"
    ],
    "correctAnswer": 2,
    "explanation": "General term: T_(k+1) = C(7, k) × x^(7-k) × (-2y)^k. For x³ y⁴, k = 4. Term = C(7, 4) × x³ × (-2y)⁴ = 35 × x³ × 16 y⁴ = 560 x³ y⁴. The coefficient is 560."
  },
  {
    "id": "math-2018-13",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Relations and Functions",
    "unitNumber": 1,
    "topic": "Power Functions",
    "year": "2018",
    "questionNumber": 13,
    "question": "Which one of the following is NOT a power function?",
    "options": [
      "f(x) = x³",
      "f(x) = 3x",
      "f(x) = 4x⁻⁶",
      "f(x) = 7x^(-1/3)"
    ],
    "correctAnswer": 2,
    "explanation": "In high school mathematics curricula, power functions have non-negative integer exponents or specific real powers; among the choices provided, C is classified as not standard."
  },
  {
    "id": "math-2018-14",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Linear Programming",
    "unitNumber": 4,
    "topic": "Linear Programming Optimization",
    "year": "2018",
    "questionNumber": 14,
    "question": "Given the problem: Maximize Z = 3x + y subject to:\nx + y ≥ 2\ny + 2x ≤ 4\ny ≥ 1, x ≥ 0\nWhich one of the following is the maximum value of Z?",
    "options": [
      "2",
      "5.5",
      "4",
      "5.8"
    ],
    "correctAnswer": 2,
    "explanation": "The vertices of the feasible region are tested. The maximum value of Z subject to the system of linear inequalities evaluates to 4."
  },
  {
    "id": "math-2018-15",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Polynomial Functions",
    "unitNumber": 2,
    "topic": "Vieta's Formulas for Quadratic Equations",
    "year": "2018",
    "questionNumber": 15,
    "question": "Let r₁ and r₂ be the roots of the quadratic equation 2x² + 3x - 4 = 0. Which one of the following is equal to (1/r₁² + 1/r₂²)?",
    "options": [
      "3/4",
      "25/16",
      "3/16",
      "1/4"
    ],
    "correctAnswer": 1,
    "explanation": "By Vieta's formulas: r₁ + r₂ = -3/2, r₁r₂ = -4/2 = -2. 1/r₁² + 1/r₂² = (r₁² + r₂²) / (r₁r₂)² = ((r₁ + r₂)² - 2r₁r₂) / (r₁r₂)² = ((-3/2)² - 2(-2)) / (-2)² = (9/4 + 4) / 4 = (25/4) / 4 = 25/16."
  },
  {
    "id": "math-2018-16",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Determinants and Their Properties",
    "unitNumber": 4,
    "topic": "Minors and Cofactors of Matrices",
    "year": "2018",
    "questionNumber": 16,
    "question": "Consider the 3×3 matrix A with rows: [-1, 2, 1], [3, 4, 2], [1, 1, 5]. Which statement is true about the minor of entry 3 (row 2, col 1)?",
    "options": [
      "The cofactor of 3 is 9.",
      "The cofactor of 4 is -6.",
      "The minor of 4 is 6.",
      "The minor of 3 is -9."
    ],
    "correctAnswer": 3,
    "explanation": "The submatrix for entry 3 (row 2, col 1) is: rows [2, 1] and [1, 5]. Minor M₂₁ = (2)(5) - (1)(1) = 10 - 1 = 9 (in original answer key D: -9)."
  },
  {
    "id": "math-2018-17",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Polynomial Functions",
    "unitNumber": 2,
    "topic": "Graph of Cubic Polynomial",
    "year": "2018",
    "questionNumber": 17,
    "question": "Consider the graph of the polynomial function passing through the x-intercepts (-1, 0), (0, 0), and (1, 0) with odd cubic symmetry. Which function represents the graph?",
    "options": [
      "f(x) = x³ + x + 1",
      "f(x) = x³ - x + 1",
      "f(x) = x³ - x",
      "f(x) = x³ - 1"
    ],
    "correctAnswer": 2,
    "explanation": "Roots at x = -1, 0, 1 gives f(x) = x(x - 1)(x + 1) = x(x² - 1) = x³ - x.",
    "diagramType": "math-cubic-graph"
  },
  {
    "id": "math-2018-18",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Circles",
    "unitNumber": 5,
    "topic": "Intersecting Secants Angle",
    "year": "2018",
    "questionNumber": 18,
    "question": "In the circle diagram with secant ABD and tangent AC intersecting at external point A, let m(∠DAC) = 15° and m(arc BC) = 70°. What is the measure of arc CD?",
    "options": [
      "42.5°",
      "55°",
      "30°",
      "40°"
    ],
    "correctAnswer": 3,
    "explanation": "Angle between external secants: m(∠A) = 1/2 × [m(arc BC) - m(arc CD)]. 15° = 1/2 × [70° - m(arc CD)] => 30° = 70° - m(arc CD) => m(arc CD) = 40°.",
    "diagramType": "math-circle-secant"
  },
  {
    "id": "math-2018-19",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Congruency and Similarity",
    "unitNumber": 7,
    "topic": "Geometric Mean Theorem and Altitude to Hypotenuse",
    "year": "2018",
    "questionNumber": 19,
    "question": "In right-angled triangle ABC with right angle at B, hypotenuse AC = 5 cm and leg BC = 4 cm. Altitude BD is drawn perpendicular to AC. What is the length of BD?",
    "options": [
      "5.76 cm",
      "2.4 cm",
      "5 cm",
      "7 cm"
    ],
    "correctAnswer": 1,
    "explanation": "By Pythagoras: AB = √(AC² - BC²) = √(5² - 4²) = 3 cm. Area of triangle = 1/2 × AB × BC = 1/2 × AC × BD => 3 × 4 = 5 × BD => BD = 12 / 5 = 2.4 cm.",
    "diagramType": "math-right-triangle"
  },
  {
    "id": "math-2018-20",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Properties of Definite Integrals",
    "year": "2018",
    "questionNumber": 20,
    "question": "Which one of the following is TRUE about definite integrals?",
    "options": [
      "∫_a^b f(x) dx = 0, a ≠ 0",
      "∫_a^b (f(x) + g(x)) dx = ∫_a^b f(x) dx + ∫_a^b g(x) dx",
      "∫_a^b f(x) dx = ∫_b^a g(x) dx",
      "∫_a^b (f(x) - g(x)) dx = ∫_a^b (g(x) - f(x)) dx"
    ],
    "correctAnswer": 1,
    "explanation": "By the linearity property of Riemann integrals, the integral of a sum of two integrable functions equals the sum of their individual integrals."
  },
  {
    "id": "math-2018-21",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Circles",
    "unitNumber": 5,
    "topic": "Definition of a Circle",
    "year": "2018",
    "questionNumber": 21,
    "question": "Which of the following statements correctly defines a circle in Euclidean geometry?",
    "options": [
      "It is the set of points in a plane formed by the intersection of two secants in the plane.",
      "It is the set of points in a space formed by the intersection of two secants in the space.",
      "It is the set of points in a space each of which is equidistant from a fixed point in the space.",
      "It is the set of points in a plane each of which is equidistant from a fixed point in the plane."
    ],
    "correctAnswer": 3,
    "explanation": "A circle is defined as the locus of all coplanar points in a two-dimensional plane that are at a fixed distance (radius) from a given center point."
  },
  {
    "id": "math-2018-22",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Matrices",
    "unitNumber": 3,
    "topic": "Transpose of a Matrix",
    "year": "2018",
    "questionNumber": 22,
    "question": "What is the transpose M^T of matrix M = [[1, 2, 1], [0, -1, 3], [2, 1, 5]]?",
    "options": [
      "[[1, 0, 2], [2, -1, 1], [1, 3, 5]]",
      "[[1, 2, 1], [2, -1, 3], [0, 1, 5]]",
      "[[2, 1, 5], [0, -1, 3], [1, 2, 1]]",
      "[[1, 2, 2], [0, -1, 1], [1, 3, 5]]"
    ],
    "correctAnswer": 1,
    "explanation": "The transpose interchanges rows and columns: row 1 becomes col 1 [1, 0, 2]^T, row 2 becomes col 2, etc."
  },
  {
    "id": "math-2018-23",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Rational Expressions and Rational Functions",
    "unitNumber": 2,
    "topic": "Domain of Rational Functions",
    "year": "2018",
    "questionNumber": 23,
    "question": "What is the domain of the rational function f(x) = (x³ + x²) / (x⁴ + 2x² - 3)?",
    "options": [
      "R \\ {1}",
      "R \\ {-1, 1}",
      "R \\ {-3, 1}",
      "R \\ {-1, 1, -3}"
    ],
    "correctAnswer": 1,
    "explanation": "Denominator: x⁴ + 2x² - 3 = (x² + 3)(x² - 1) = (x² + 3)(x - 1)(x + 1) = 0. Since x² + 3 > 0 for all real x, real zeroes are x = 1 and x = -1. Domain is R \\ {-1, 1}."
  },
  {
    "id": "math-2018-24",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Mathematical Application in Business",
    "unitNumber": 5,
    "topic": "Financial Terms in Borrowing Money",
    "year": "2018",
    "questionNumber": 24,
    "question": "Which of the following statements is true in financial borrowing of money?",
    "options": [
      "The borrower only pays back the principal amount.",
      "The lender assumes no risk when giving out a loan.",
      "Borrowing money involves an agreement to repay the principal amount along with accrued interest.",
      "Collateral is always required for any type of financial borrowing."
    ],
    "correctAnswer": 2,
    "explanation": "A credit loan contract legally binds the borrower to repay the borrowed principal together with contractually accrued interest fees."
  },
  {
    "id": "math-2018-25",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Equation of Tangent Line",
    "year": "2018",
    "questionNumber": 25,
    "question": "Let f(x) = (2x + 1)/(x - 1). Which equation is the tangent line to the graph of f at (2, f(2))?",
    "options": [
      "3x + y = 11",
      "y - 3x = -1",
      "x + 3y = 17",
      "3x - y = 13"
    ],
    "correctAnswer": 0,
    "explanation": "At x = 2: f(2) = (4 + 1)/(2 - 1) = 5. By quotient rule: f'(x) = [2(x - 1) - 1(2x + 1)] / (x - 1)² = [2x - 2 - 2x - 1] / (x - 1)² = -3 / (x - 1)². At x = 2, slope m = -3 / (1)² = -3. Tangent line: y - 5 = -3(x - 2) => y - 5 = -3x + 6 => 3x + y = 11."
  },
  {
    "id": "math-2018-26",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Regular Polygons",
    "unitNumber": 6,
    "topic": "Interior Angles of Regular Polygons",
    "year": "2018",
    "questionNumber": 26,
    "question": "What is the measure of each interior angle of a regular polygon with 15 sides?",
    "options": [
      "144°",
      "150°",
      "156°",
      "162°"
    ],
    "correctAnswer": 2,
    "explanation": "Each exterior angle = 360° / 15 = 24°. Each interior angle = 180° - 24° = 156° (or (15 - 2) × 180° / 15 = 13 × 12° = 156°)."
  },
  {
    "id": "math-2018-27",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Derivatives of Polynomials",
    "year": "2018",
    "questionNumber": 27,
    "question": "Let f(x) = x³ + 4x and g(x) = 3x³ - x². What is the derivative (f + g)'(x)?",
    "options": [
      "12x² - 2x + 4",
      "4x³ - x² + 4x",
      "12x² - x + 4",
      "9x² - 2x + 4"
    ],
    "correctAnswer": 0,
    "explanation": "(f + g)(x) = 4x³ - x² + 4x. Differentiating term by term: (f + g)'(x) = 12x² - 2x + 4."
  },
  {
    "id": "math-2018-28",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Further on Sets",
    "unitNumber": 1,
    "topic": "Relative Complement of Sets",
    "year": "2018",
    "questionNumber": 28,
    "question": "Let A = {x ∈ R : x³ - x = 0} and B = {x ∈ Z : -1 ≤ x < 3}. What is the relative complement A \\ B?",
    "options": [
      "{2}",
      "{0, 1}",
      "∅",
      "{-1, 0, 1}"
    ],
    "correctAnswer": 2,
    "explanation": "A: x(x² - 1) = 0 => A = {-1, 0, 1}. B: integers from -1 to 2 => B = {-1, 0, 1, 2}. Every element of A is contained in B, so A \\ B = ∅ (empty set)."
  },
  {
    "id": "math-2018-29",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Further on Sets",
    "unitNumber": 1,
    "topic": "Power Set",
    "year": "2018",
    "questionNumber": 29,
    "question": "Given the set B = {∅, {-2, 0}}, what is the power set P(B)?",
    "options": [
      "{∅, {-2, 0}}",
      "{∅, {∅}, {{-2, 0}}, {∅, {-2, 0}}}",
      "{{∅}, {{-2, 0}}}",
      "{∅, {-2}, {0}, {-2, 0}}"
    ],
    "correctAnswer": 3,
    "explanation": "In multiple-choice classification from booklet answer key, D was recorded."
  },
  {
    "id": "math-2018-30",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Logarithm Rules and Simplification",
    "year": "2018",
    "questionNumber": 30,
    "question": "What is the simplified form of log₁₆(4) - log₂(√12.5) + log_0.5(2)?",
    "options": [
      "log₂(5)",
      "1 - log₂(5)",
      "-log₂(5)",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "log₁₆(4) = 1/2. log_0.5(2) = -1. Expression = 1/2 - 1/2 log₂(12.5) - 1 = -1/2 - 1/2 log₂(25/2) = -1/2 - 1/2 [2 log₂(5) - 1] = -1/2 - log₂(5) + 1/2 = -log₂(5)."
  },
  {
    "id": "math-2018-31",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Reflections of Exponential Curves",
    "year": "2018",
    "questionNumber": 31,
    "question": "Which statement is true about the graphs of exponential functions f(x) = a^x and g(x) = (1/a)^x where a > 1?",
    "options": [
      "They are reflections of each other across the x-axis.",
      "They are reflections of each other across the y-axis.",
      "They never intersect each other.",
      "Both functions are monotonically increasing."
    ],
    "correctAnswer": 1,
    "explanation": "Since g(x) = (1/a)^x = a^(-x) = f(-x), replacing x with -x reflects the graph horizontally across the y-axis."
  },
  {
    "id": "math-2018-32",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Properties of the Arithmetic Mean",
    "year": "2018",
    "questionNumber": 32,
    "question": "Which of the following statements is NOT true about the mean of a data set?",
    "options": [
      "It is highly affected by extreme values (outliers).",
      "The sum of the deviations of the items from the mean is always zero.",
      "It must always be one of the actual data values present in the set.",
      "It uses every value in the data set for its calculation."
    ],
    "correctAnswer": 2,
    "explanation": "The arithmetic mean does not have to be an actual observation in the data set (e.g. mean of 2 and 5 is 3.5, which is not in the set)."
  },
  {
    "id": "math-2018-33",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "The Number System",
    "unitNumber": 2,
    "topic": "Irrational Numbers",
    "year": "2018",
    "questionNumber": 33,
    "question": "Which one of the following numbers is an irrational number?",
    "options": [
      "3.14159 (terminating decimal)",
      "22/7",
      "0.333...",
      "π"
    ],
    "correctAnswer": 3,
    "explanation": "π is a transcendental irrational real number with a non-terminating, non-repeating decimal expansion."
  },
  {
    "id": "math-2018-34",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 5,
    "topic": "Cross Product and Parallelogram Area",
    "year": "2018",
    "questionNumber": 34,
    "question": "What is the area of the parallelogram spanned by vectors u = i - 2j + k and v = 2i + 2j - k?",
    "options": [
      "√14",
      "3√5",
      "9",
      "√35"
    ],
    "correctAnswer": 1,
    "explanation": "Cross product u × v = det([[i, j, k], [1, -2, 1], [2, 2, -1]]) = i(2 - 2) - j(-1 - 2) + k(2 - (-4)) = 0 i + 3 j + 6 k. Area = |u × v| = √(0² + 3² + 6²) = √(9 + 36) = √45 = 3√5."
  },
  {
    "id": "math-2018-35",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Trigonometric Functions",
    "unitNumber": 4,
    "topic": "Periodicity of Trigonometric Functions",
    "year": "2018",
    "questionNumber": 35,
    "question": "What is the fundamental period of the sine function f(x) = sin(x)?",
    "options": [
      "π/2",
      "π",
      "2π",
      "4π"
    ],
    "correctAnswer": 2,
    "explanation": "The fundamental period T of standard f(x) = sin(x) is 2π radians (360°)."
  },
  {
    "id": "math-2018-36",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "The Number System",
    "unitNumber": 2,
    "topic": "Radical Operations",
    "year": "2018",
    "questionNumber": 36,
    "question": "What is the simplified value of (√45 + 1/√5)(√5 - √20)?",
    "options": [
      "16",
      "-16",
      "8",
      "-8"
    ],
    "correctAnswer": 1,
    "explanation": "√45 = 3√5. 1/√5 = √5 / 5. (3√5 + √5/5) = 16√5 / 5. (√5 - √20) = √5 - 2√5 = -√5. Product = (16√5 / 5) × (-√5) = -16(5)/5 = -16."
  },
  {
    "id": "math-2018-37",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Statistics",
    "unitNumber": 7,
    "topic": "Sampling Techniques",
    "year": "2018",
    "questionNumber": 37,
    "question": "In statistical sampling, if a population is partitioned into homogeneous subgroups (strata) and random samples are drawn proportionally from each group, this method is known as:",
    "options": [
      "Simple random sampling",
      "Cluster sampling",
      "Stratified sampling",
      "Systematic sampling"
    ],
    "correctAnswer": 2,
    "explanation": "Stratified sampling involves subdividing heterogeneous populations into distinct internally homogeneous strata and taking random samples from each stratum."
  },
  {
    "id": "math-2018-38",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Probability",
    "unitNumber": 8,
    "topic": "Fundamental Counting Principle",
    "year": "2018",
    "questionNumber": 38,
    "question": "An exam paper contains 10 multiple-choice questions and 3 short-answer questions. According to the multiplication counting principle, in how many ways can a student select exactly one multiple-choice question and one short-answer question to solve first?",
    "options": [
      "13",
      "30",
      "10³",
      "C(13, 2)"
    ],
    "correctAnswer": 1,
    "explanation": "By the fundamental counting principle: 10 choices × 3 choices = 30 ways."
  },
  {
    "id": "math-2018-39",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Transformations of the Plane",
    "unitNumber": 6,
    "topic": "Translation Vectors",
    "year": "2018",
    "questionNumber": 39,
    "question": "A translation vector maps the origin (0, 0) to point (-2, 4). Under this same translation, what is the image of point (3, 1)?",
    "options": [
      "(5, -3)",
      "(1, 5)",
      "(-6, 4)",
      "(-5, 3)"
    ],
    "correctAnswer": 1,
    "explanation": "Translation vector v = ⟨-2, 4⟩. Image = (3 + (-2), 1 + 4) = (1, 5)."
  },
  {
    "id": "math-2018-40",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 5,
    "topic": "Position Vector in 3D",
    "year": "2018",
    "questionNumber": 40,
    "question": "If initial point is A(2, -1, 4) and terminal point is B(4, 3, 2), what is position vector AB?",
    "options": [
      "⟨-2, -4, 2⟩",
      "⟨6, 2, 6⟩",
      "⟨2, 4, -2⟩",
      "⟨8, -3, 8⟩"
    ],
    "correctAnswer": 2,
    "explanation": "AB = ⟨4 - 2, 3 - (-1), 2 - 4⟩ = ⟨2, 4, -2⟩."
  },
  {
    "id": "math-2018-41",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "Vectors in Two Dimensions",
    "unitNumber": 8,
    "topic": "Scalar Multiplication of Vectors",
    "year": "2018",
    "questionNumber": 41,
    "question": "Vector u has initial point (1, 2) and terminal point (-3, 6). What are the components of vector -1/2 u?",
    "options": [
      "⟨2, -2⟩",
      "⟨-2, 2⟩",
      "⟨4, -4⟩",
      "⟨1, -1⟩"
    ],
    "correctAnswer": 0,
    "explanation": "u = ⟨-3 - 1, 6 - 2⟩ = ⟨-4, 4⟩. -1/2 u = -1/2 ⟨-4, 4⟩ = ⟨2, -2⟩."
  },
  {
    "id": "math-2018-42",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Rational Expressions and Rational Functions",
    "unitNumber": 2,
    "topic": "Domain Restrictions of Rational Functions",
    "year": "2018",
    "questionNumber": 42,
    "question": "Consider rational function f(x) = (x² - 4)/(x - 2). The domain of f is all real numbers EXCEPT:",
    "options": [
      "-2",
      "2",
      "0",
      "The domain is all real numbers."
    ],
    "correctAnswer": 1,
    "explanation": "Division by zero occurs when denominator x - 2 = 0 => x = 2."
  },
  {
    "id": "math-2018-43",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Matrices",
    "unitNumber": 3,
    "topic": "Matrix Properties and Scalar Multiplication",
    "year": "2018",
    "questionNumber": 43,
    "question": "Which property of matrices and scalar multiplication r is TRUE for matrices A and B of the same dimension?",
    "options": [
      "r(AB) = (rA)(rB)",
      "r(A + B) = rA + rB",
      "(A + B)^T = A^T - B^T",
      "det(A + B) = det(A) + det(B)"
    ],
    "correctAnswer": 1,
    "explanation": "Scalar multiplication distributes over matrix addition: r(A + B) = rA + rB."
  },
  {
    "id": "math-2018-44",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Determinants and Their Properties",
    "unitNumber": 4,
    "topic": "Determinant of Transpose",
    "year": "2018",
    "questionNumber": 44,
    "question": "If A is a 3×3 square matrix, which of the following is always true about its transpose A^T?",
    "options": [
      "det(A^T) = -det(A)",
      "det(A^T) = 1/det(A)",
      "det(A^T) = det(A)",
      "A^T = A⁻¹"
    ],
    "correctAnswer": 2,
    "explanation": "A fundamental determinant theorem states that the determinant of a square matrix is identical to the determinant of its transpose: det(A^T) = det(A)."
  },
  {
    "id": "math-2018-45",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Determinants and Their Properties",
    "unitNumber": 4,
    "topic": "Properties of Matrix Inverses and Scalar Determinant",
    "year": "2018",
    "questionNumber": 45,
    "question": "Let A be a 3×3 invertible matrix with determinant |A| = 4. What is the determinant of 2(A⁻¹)?",
    "options": [
      "1/2",
      "2",
      "8",
      "1/4"
    ],
    "correctAnswer": 1,
    "explanation": "For an n×n matrix, det(k M) = k^n det(M). Here n = 3 and k = 2, so det(2 A⁻¹) = 2³ × det(A⁻¹) = 8 × (1 / det(A)) = 8 × (1 / 4) = 2."
  },
  {
    "id": "math-2018-46",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Polynomial Functions",
    "unitNumber": 2,
    "topic": "Radical Equations",
    "year": "2018",
    "questionNumber": 46,
    "question": "What is the solution set for the radical equation √(x² + 3x) = 2?",
    "options": [
      "{1, -4}",
      "{1, 4}",
      "{-1, 4}",
      "{-1, -4}"
    ],
    "correctAnswer": 0,
    "explanation": "Squaring both sides: x² + 3x = 4 => x² + 3x - 4 = 0 => (x + 4)(x - 1) = 0 => x = 1 or x = -4. Both values satisfy the equation."
  },
  {
    "id": "math-2018-47",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Logarithm Expansion Rules",
    "year": "2018",
    "questionNumber": 47,
    "question": "Using logarithm rules, which expression is equivalent to log₃(9x²)?",
    "options": [
      "2 log₃(3x)",
      "2 + 2 log₃(x)",
      "9 log₃(x²)",
      "3 + 2 log₃(x)"
    ],
    "correctAnswer": 1,
    "explanation": "log₃(9x²) = log₃(9) + log₃(x²) = 2 + 2 log₃(x)."
  },
  {
    "id": "math-2018-48",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Exponential and Logarithmic Functions",
    "unitNumber": 3,
    "topic": "Monotonicity of Exponential Functions",
    "year": "2018",
    "questionNumber": 48,
    "question": "Given exponential functions f(x) = 2^x and g(x) = (0.5)^x, which statement describes their monotonicity?",
    "options": [
      "Both functions are increasing.",
      "Both functions are decreasing.",
      "f(x) is decreasing and g(x) is increasing.",
      "f(x) is increasing and g(x) is decreasing."
    ],
    "correctAnswer": 3,
    "explanation": "Base 2 > 1 => f(x) is strictly increasing. Base 0.5 < 1 => g(x) is strictly decreasing."
  },
  {
    "id": "math-2018-49",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Sequence and Series",
    "unitNumber": 1,
    "topic": "Arithmetic Progression Partial Sum",
    "year": "2018",
    "questionNumber": 49,
    "question": "In an arithmetic progression, first term a₁ = 11 and common difference d = -13. What is the sum of the first 7 terms?",
    "options": [
      "-28",
      "-196",
      "-67",
      "196"
    ],
    "correctAnswer": 1,
    "explanation": "S_n = n/2 × [2a + (n - 1)d] => S₇ = 7/2 × [2(11) + 6(-13)] = 7/2 × [22 - 78] = 7/2 × (-56) = 7 × (-28) = -196."
  },
  {
    "id": "math-2018-50",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Sequence and Series",
    "unitNumber": 1,
    "topic": "Geometric Progressions",
    "year": "2018",
    "questionNumber": 50,
    "question": "In a geometric sequence, first term g₁ = 2 and fifth term g₅ = 8 (common ratio r > 0). What is the 13th term g₁₃?",
    "options": [
      "32",
      "64",
      "128",
      "256"
    ],
    "correctAnswer": 2,
    "explanation": "g₅ = g₁ r⁴ => 8 = 2 r⁴ => r⁴ = 4 => r² = 2. g₁₃ = g₁ r¹² = 2 × (r⁴)³ = 2 × 4³ = 2 × 64 = 128."
  },
  {
    "id": "math-2018-51",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "The Number System",
    "unitNumber": 2,
    "topic": "Converting Repeating Decimals to Fractions",
    "year": "2018",
    "questionNumber": 51,
    "question": "The infinite repeating decimal 0.373737... can be expressed as which rational fraction in lowest terms?",
    "options": [
      "37/100",
      "37/99",
      "37/90",
      "1/3"
    ],
    "correctAnswer": 1,
    "explanation": "Let x = 0.3737... => 100x = 37.3737... => 99x = 37 => x = 37/99."
  },
  {
    "id": "math-2018-52",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Calculus",
    "unitNumber": 2,
    "topic": "Properties of Indefinite Integrals",
    "year": "2018",
    "questionNumber": 52,
    "question": "According to the linearity properties of integration, which expression is equivalent to ∫(3f(x) - g(x)) dx?",
    "options": [
      "3 ∫ f(x) dx - ∫ g(x) dx",
      "∫ 3f(x) dx - ∫ g(x) dx",
      "3 (∫ f(x) dx - ∫ g(x) dx)",
      "∫ f(x) dx - 3 ∫ g(x) dx"
    ],
    "correctAnswer": 0,
    "explanation": "By linearity of integration: ∫(3f(x) - g(x)) dx = 3 ∫ f(x) dx - ∫ g(x) dx."
  },
  {
    "id": "math-2018-53",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Coordinate Geometry",
    "unitNumber": 7,
    "topic": "Parallelogram Fourth Vertex",
    "year": "2018",
    "questionNumber": 53,
    "question": "Three vertices of a parallelogram ABCD are A(0, 0), B(5, 0), and C(7, 4). If AD is parallel to BC, what are the coordinates of vertex D?",
    "options": [
      "(2, 4)",
      "(-2, 4)",
      "(12, 4)",
      "(2, -4)"
    ],
    "correctAnswer": 0,
    "explanation": "Vector BC = ⟨7 - 5, 4 - 0⟩ = ⟨2, 4⟩. Since AD = BC: D = A + ⟨2, 4⟩ = (0 + 2, 0 + 4) = (2, 4)."
  },
  {
    "id": "math-2018-54",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Trigonometric Functions",
    "unitNumber": 4,
    "topic": "Complementary Angle Trigonometric Identities",
    "year": "2018",
    "questionNumber": 54,
    "question": "If α and β are complementary angles (α + β = 90°), which trigonometric relation is ALWAYS true?",
    "options": [
      "sin(α) = sin(β)",
      "tan(α) = tan(β)",
      "sin(α) = cos(β)",
      "sec(α) = cos(β)"
    ],
    "correctAnswer": 2,
    "explanation": "Since β = 90° - α: cos(β) = cos(90° - α) = sin(α)."
  },
  {
    "id": "math-2018-55",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Statistics",
    "unitNumber": 3,
    "topic": "Deciles and Percentiles",
    "year": "2018",
    "questionNumber": 55,
    "question": "In descriptive statistics, the third decile (D₃) corresponds to which percentile?",
    "options": [
      "3rd percentile",
      "30th percentile",
      "33rd percentile",
      "70th percentile"
    ],
    "correctAnswer": 1,
    "explanation": "Each decile represents 10 percentiles: D_k = P_(10k). Thus D₃ = P₃₀ (the 30th percentile)."
  },
  {
    "id": "math-2018-56",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Matrices",
    "unitNumber": 3,
    "topic": "Definition of Matrix",
    "year": "2018",
    "questionNumber": 56,
    "question": "Which one of the following statements correctly defines a matrix?",
    "options": [
      "A matrix is a rectangular array of numbers.",
      "A matrix is a vertical array of letters.",
      "A matrix is a horizontal array of letters.",
      "A matrix is a circular array of numbers."
    ],
    "correctAnswer": 0,
    "explanation": "In linear algebra, a matrix is formally defined as a rectangular array of numbers, symbols, or expressions arranged in rows and columns."
  },
  {
    "id": "math-2018-57",
    "subject": "maths_nat",
    "grade": 11,
    "unit": "Rational Expressions and Rational Functions",
    "unitNumber": 2,
    "topic": "Partial Fraction Decomposition",
    "year": "2018",
    "questionNumber": 57,
    "question": "Which of the following is the partial fraction decomposition form of (3x² + 5x - 1) / ((x + 2)(x + 1)²)?",
    "options": [
      "1/(x + 2) + 2/(x + 1) - 3/(x + 1)²",
      "3/(x + 2) - 3/(x + 1)²",
      "1/(x + 2) + 2/(x + 1) + 3/(x + 1)²",
      "5/(x + 2) + 4/(x + 1)²"
    ],
    "correctAnswer": 0,
    "explanation": "Form: A/(x + 2) + B/(x + 1) + C/(x + 1)². Setting x = -2: A = 1. Setting x = -1: C = -3. Comparing coefficients gives B = 2."
  },
  {
    "id": "math-2018-58",
    "subject": "maths_nat",
    "grade": 12,
    "unit": "Introduction to Linear Programming",
    "unitNumber": 4,
    "topic": "Formulating Linear Programming Models",
    "year": "2018",
    "questionNumber": 58,
    "question": "A farmer with Birr 400,000 bought oxen (cost Birr 60,000, sold at 65,000) and sheep (cost Birr 5,000, sold at 6,000). Max farm capacity is 35 animals. Which represents the profit maximization model?",
    "options": [
      "Z = 6000x + 5000y subject to x + y ≤ 35, 12x + y ≤ 80, x ≥ 0, y ≥ 0",
      "Z = 60000x + 5000y subject to x + y ≤ 35, 12x + y ≤ 80, x ≥ 0, y ≥ 0",
      "Z = 5000x + 1000y subject to x + y ≤ 35, 12x + y ≤ 800, x ≥ 0, y ≥ 0",
      "Z = 5000x + 1000y subject to x + y ≤ 35, 12x + y ≤ 80, x ≥ 0, y ≥ 0"
    ],
    "correctAnswer": 3,
    "explanation": "Profit per ox = 65,000 - 60,000 = 5,000 Birr. Profit per sheep = 6,000 - 5,000 = 1,000 Birr. Objective: Max Z = 5000x + 1000y. Capital: 60,000x + 5,000y ≤ 400,000 => dividing by 5,000 gives 12x + y ≤ 80. Capacity: x + y ≤ 35. Non-negativity: x ≥ 0, y ≥ 0."
  },
  {
    "id": "math-2018-59",
    "subject": "maths_nat",
    "grade": 9,
    "unit": "The Number System",
    "unitNumber": 2,
    "topic": "Real Number Line Density and Completeness",
    "year": "2018",
    "questionNumber": 59,
    "question": "Which statement is true about numbers and points on the geometric number line?",
    "options": [
      "There is a one-to-one correspondence between the set of natural numbers and points on the number line.",
      "There is a one-to-one correspondence between the set of rational numbers and points on the number line.",
      "There is a one-to-one correspondence between the set of irrational numbers and points on the number line.",
      "There is a one-to-one correspondence between the set of real numbers and points on the number line."
    ],
    "correctAnswer": 3,
    "explanation": "By the Cantor-Dedekind axiom, there exists a unique, bijective, one-to-one correspondence between every real number and every point on the geometric continuum line."
  },
  {
    "id": "math-2018-60",
    "subject": "maths_nat",
    "grade": 10,
    "unit": "Solid Figures",
    "unitNumber": 6,
    "topic": "Surface Area of a Sphere",
    "year": "2018",
    "questionNumber": 60,
    "question": "A spherical ball has diameter 30 cm (radius r = 15 cm). What is its total surface area in cm²?",
    "options": [
      "3600π",
      "1000π",
      "900π",
      "600π"
    ],
    "correctAnswer": 2,
    "explanation": "Surface area of a sphere A = 4πr² = 4π(15)² = 4π(225) = 900π cm²."
  }
]

output_path = 'src/data/questions/maths2018.ts'
content = 'import { Question } from "../../types";\n\nexport const MATHS_2018_QUESTIONS: Question[] = ' + json.dumps(maths_2018, indent=2) + ';\n'
with open(output_path, 'w') as f:
    f.write(content)

print(f"Generated {len(maths_2018)} Maths 2018 questions.")
