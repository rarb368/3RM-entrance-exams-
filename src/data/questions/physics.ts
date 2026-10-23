import { Question } from '../../types';

export const PHYSICS_QUESTIONS: Question[] = [
  {
    id: 'phys-2017-01',
    subject: 'physics',
    grade: 11,
    unit: 'Physics and Measurement',
    unitNumber: 1,
    topic: 'Vectors and Scalars',
    year: '2017',
    questionNumber: 1,
    question: 'Vector physical quantities are fundamentally represented by:',
    options: [
      'magnitude and direction',
      'direction only',
      'magnitude only',
      'dimensionless values'
    ],
    correctAnswer: 0,
    explanation: 'A vector quantity requires both numerical magnitude (with unit) and a spatial direction for its complete physical specification (e.g., velocity, acceleration, force). Scalars require only magnitude.'
  },
  {
    id: 'phys-2017-02',
    subject: 'physics',
    grade: 11,
    unit: 'Dynamics and Laws of Motion',
    unitNumber: 3,
    topic: 'Newton\'s First Law of Motion',
    year: '2017',
    questionNumber: 2,
    question: 'According to Newton\'s first law of motion, an object that is in motion continues its state of motion with:',
    options: [
      'a decreasing speed if the resultant force exerted on it is zero.',
      'constant velocity if the resultant force exerted on it is not zero.',
      'an increasing speed if the resultant force exerted on it is not zero.',
      'constant velocity if the resultant force exerted on it is zero.'
    ],
    correctAnswer: 3,
    explanation: 'Newton\'s first law (the law of inertia) states that an object continues in its state of rest or uniform motion at constant velocity in a straight line unless acted upon by a net non-zero external force (ΣF = 0 => a = 0).'
  },
  {
    id: 'phys-2017-03',
    subject: 'physics',
    grade: 11,
    unit: 'Two-Dimensional Kinematics',
    unitNumber: 2,
    topic: 'Distance vs Displacement',
    year: '2017',
    questionNumber: 3,
    question: 'Which of the following correctly describes the fundamental physical difference between distance and displacement?',
    options: [
      'Distance can be described both in magnitude and direction, while displacement is described only by magnitude.',
      'Distance depends on the initial and final points, while displacement depends on the path followed by a moving body.',
      'Distance is always greater than or equal to the magnitude of displacement, while the magnitude of displacement is always less than or equal to distance.',
      'Distance has either positive or negative values, while displacement has only positive value.'
    ],
    correctAnswer: 2,
    explanation: 'Distance is the total scalar path length traversed, while displacement is the shortest straight-line vector directed from initial to final position. Therefore, Distance ≥ |Displacement| always.'
  },
  {
    id: 'phys-2017-04',
    subject: 'physics',
    grade: 11,
    unit: 'Two-Dimensional Kinematics',
    unitNumber: 2,
    topic: 'Uniformly Accelerated Motion',
    year: '2017',
    questionNumber: 4,
    question: 'Which of the following statements is correct regarding uniformly accelerated motion?',
    options: [
      'The velocity is constant.',
      'The acceleration is constant.',
      'The speed is constant but the direction is changing.',
      'The displacement increases at a uniform rate.'
    ],
    correctAnswer: 1,
    explanation: 'Uniformly accelerated motion is defined as motion along a trajectory where the rate of change of velocity (acceleration) remains constant in both magnitude and direction over time.'
  },
  {
    id: 'phys-2017-05',
    subject: 'physics',
    grade: 11,
    unit: 'Physics and Measurement',
    unitNumber: 1,
    topic: 'Resultant of Two Vectors',
    year: '2017',
    questionNumber: 5,
    question: 'Two displacement vectors have magnitudes of 4 m and 3 m. Which one of the following is NOT a possible value for the magnitude of their resultant vector?',
    options: [
      '1 m',
      '7 m',
      '5 m',
      '12 m'
    ],
    correctAnswer: 3,
    explanation: 'The magnitude R of the resultant of two vectors with magnitudes A = 4 m and B = 3 m is bounded by |A - B| ≤ R ≤ (A + B). Here: |4 - 3| = 1 m ≤ R ≤ (4 + 3) = 7 m. Therefore, 12 m is mathematically impossible.'
  },
  {
    id: 'phys-2017-06',
    subject: 'physics',
    grade: 11,
    unit: 'Two-Dimensional Kinematics',
    unitNumber: 2,
    topic: 'Kinematic Equations',
    year: '2017',
    questionNumber: 6,
    question: 'A train moves along a straight line with a constant acceleration of 5 m/s² when it passes a traffic light. If the time taken to reach 30 m/s is 4 seconds, what is the distance of the train from the traffic point after 8 seconds?',
    options: [
      '80 m',
      '160 m',
      '240 m',
      '320 m'
    ],
    correctAnswer: 2,
    explanation: 'Initial velocity u = v - at = 30 - (5 × 4) = 10 m/s. The displacement after t = 8 seconds with a = 5 m/s² is: s = ut + (1/2)at² = (10 × 8) + (1/2)(5)(8²) = 80 + (1/2)(5)(64) = 80 + 160 = 240 m.'
  },
  {
    id: 'phys-2017-08',
    subject: 'physics',
    grade: 11,
    unit: 'Dynamics and Laws of Motion',
    unitNumber: 3,
    topic: 'Nature of Friction',
    year: '2017',
    questionNumber: 8,
    question: 'When an object tends to slide over the surface of another object, microscopic irregularities and tiny bumps knock and interlock together. This physical interaction causes:',
    options: [
      'gravitational force',
      'electrostatic force',
      'normal force',
      'frictional force'
    ],
    correctAnswer: 3,
    explanation: 'At the microscopic level, all solid surfaces have roughness (asperities). When surfaces touch and slide relative to each other, interlocking asperities and microscopic cold welds resist tangential motion, generating friction.'
  },
  {
    id: 'phys-2017-27',
    subject: 'physics',
    grade: 12,
    unit: 'Electrostatics and Current Electricity',
    unitNumber: 3,
    topic: 'Resistor Circuits',
    year: '2017',
    questionNumber: 27,
    question: 'In a circuit where resistor R₁ is in series with R₂, and both feed into a parallel branch containing R₃ and R₄, which of the following is correct about the circuit configuration?',
    options: [
      'R₁ is connected in series with the effective combination of R₃ and R₄.',
      'R₂ is connected in parallel with the effective combination of R₃ and R₄.',
      'R₂ is connected in parallel with R₃.',
      'R₁ is connected in parallel with R₂.'
    ],
    correctAnswer: 1,
    explanation: 'In this network arrangement, the sub-branch containing R₂ is in parallel with the equivalent branch formed by the other resistors.'
  },
  {
    id: 'phys-2017-55',
    subject: 'physics',
    grade: 12,
    unit: 'Electromagnetism and Circuits',
    unitNumber: 4,
    topic: 'Biot-Savart Law and Straight Wires',
    year: '2017',
    questionNumber: 55,
    question: 'The magnetic field created by a long straight current-carrying wire:',
    options: [
      'forms concentric circular patterns around the wire in a perpendicular plane.',
      'is directed in the same linear direction as the electric current.',
      'is inversely proportional to the current in the wire.',
      'is directly proportional to the radial distance from the wire.'
    ],
    correctAnswer: 0,
    explanation: 'According to Ampere\'s law (B = μ₀I / 2πr), the magnetic field lines form concentric circles centered on the wire, with direction given by the right-hand grip rule.'
  },
  {
    id: 'phys-2017-56',
    subject: 'physics',
    grade: 12,
    unit: 'Atomic, Nuclear and Modern Physics',
    unitNumber: 5,
    topic: 'Semiconductor Doping',
    year: '2017',
    questionNumber: 56,
    question: 'What will happen to a pure intrinsic semiconductor (like silicon) when it is doped with a group III trivalent element (such as Boron)?',
    options: [
      'It becomes an N-type semiconductor.',
      'It becomes a P-type semiconductor with excess positive holes.',
      'It remains an intrinsic semiconductor.',
      'It acquires extra free conduction electrons.'
    ],
    correctAnswer: 1,
    explanation: 'Group III elements have 3 valence electrons. When substituted into a group IV silicon lattice, one covalent bond lacks an electron, creating a positive hole (majority carrier in P-type semiconductors).'
  }
];
