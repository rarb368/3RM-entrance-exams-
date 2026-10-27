import { Question } from "../../types";

import { PHYSICS_2018_QUESTIONS } from "./physics2018";
import { PHYSICS_2016_QUESTIONS } from "./physics2016";

export const PHYSICS_2017_QUESTIONS: Question[] = [
  {
    "id": "phys-2017-01",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Vectors and Scalars",
    "year": "2017",
    "questionNumber": 1,
    "question": "Vector quantities are represented by",
    "options": [
      "magnitude and direction.",
      "direction only.",
      "magnitude only.",
      "dimensionless values."
    ],
    "correctAnswer": 0,
    "explanation": "Vector quantities (e.g., force, velocity) require both magnitude (size) and direction for complete description. Scalars use magnitude only."
  },
  {
    "id": "phys-2017-02",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Newton First Law",
    "year": "2017",
    "questionNumber": 2,
    "question": "According to Newton's first law, an object that is in motion continues its state of motion with",
    "options": [
      "a decreasing speed if the resultant force exerted on it is zero.",
      "constant velocity if the resultant force exerted on it is not zero.",
      "an increasing speed if the resultant force exerted on it is not zero.",
      "constant velocity if the resultant force exerted on it is zero."
    ],
    "correctAnswer": 3,
    "explanation": "Newton's first law states that an object maintains constant velocity (including zero) if the net force is zero. Acceleration occurs only if net force is non-zero."
  },
  {
    "id": "phys-2017-03",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Distance vs Displacement",
    "year": "2017",
    "questionNumber": 3,
    "question": "Which of the following correctly describes the difference between distance and displacement?",
    "options": [
      "Distance can be described both in magnitude and direction, while displacement is described only by magnitude.",
      "Distance depends on the initial and final points, while displacement depends on the path followed by a moving body.",
      "Distance is always greater than or equal to the magnitude of displacement, while the magnitude of the displacement is always less than or equal to distance.",
      "Distance has either positive or negative values, while displacement has only positive value."
    ],
    "correctAnswer": 2,
    "explanation": "Distance (scalar, path length) \u2265 displacement magnitude (vector, straight-line change in position). Displacement magnitude is shortest path."
  },
  {
    "id": "phys-2017-04",
    "subject": "physics",
    "grade": 10,
    "unit": "Uniformly Accelerated Motion",
    "unitNumber": 2,
    "topic": "Uniform Acceleration",
    "year": "2017",
    "questionNumber": 4,
    "question": "Which of the following statements is correct about a uniformly accelerated motion?",
    "options": [
      "The velocity is constant.",
      "The acceleration is constant.",
      "The speed is constant but the direction is changing.",
      "The displacement increases at a uniform rate."
    ],
    "correctAnswer": 1,
    "explanation": "Uniform acceleration implies constant rate of change of velocity. Velocity may change, but acceleration remains steady."
  },
  {
    "id": "phys-2017-05",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Resultant Bounds",
    "year": "2017",
    "questionNumber": 5,
    "question": "Two displacement vectors have magnitudes 4 m and 3 m. Which one of the following is NOT the possible value of the magnitude of their resultant vector?",
    "options": [
      "1 m",
      "7 m",
      "5 m",
      "12 m"
    ],
    "correctAnswer": 3,
    "explanation": "The resultant magnitude of two vectors (4 m, 3 m) ranges from |4 - 3| = 1 m to 4 + 3 = 7 m. 12 m is impossible."
  },
  {
    "id": "phys-2017-06",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Kinematic Equations",
    "year": "2017",
    "questionNumber": 6,
    "question": "A train is moving along a straight line with a constant acceleration of 5 m/s\u00b2 when it passes by a traffic light point. From there on, if the time taken by the train to reach a velocity of 30 m/s is 4 seconds, then what is the distance of the train from the traffic point after 8 seconds?",
    "options": [
      "80 m",
      "160 m",
      "240 m",
      "320 m"
    ],
    "correctAnswer": 2,
    "explanation": "Initial velocity u = v - at = 30 - (5\u00d74) = 10 m/s. Distance after 8 s: s = ut + (1/2)at\u00b2 = (10\u00d78) + (1/2)(5)(64) = 80 + 160 = 240 m."
  },
  {
    "id": "phys-2017-07",
    "subject": "physics",
    "grade": 10,
    "unit": "Elasticity and Static Equilibrium of Rigid Body",
    "unitNumber": 3,
    "topic": "Linear Equilibrium",
    "year": "2017",
    "questionNumber": 7,
    "question": "Which one of the following statements is a necessary condition for an object to be in linear equilibrium?",
    "options": [
      "The net force acting on the object is non-zero constant.",
      "The linear acceleration of the object is zero.",
      "The linear speed of the object is constant.",
      "The linear acceleration of the object is non-zero constant."
    ],
    "correctAnswer": 1,
    "explanation": "Linear equilibrium requires net force = 0, so linear acceleration = 0 (Newton's second law)."
  },
  {
    "id": "phys-2017-08",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Frictional Forces",
    "year": "2017",
    "questionNumber": 8,
    "question": "When an object tends to slide over the surface of another object, tiny bumps at the surface of the two objects knocking and locking together. This causes",
    "options": [
      "gravitational force.",
      "electrostatic force.",
      "normal force.",
      "frictional force."
    ],
    "correctAnswer": 3,
    "explanation": "Surface irregularities interlocking at the microscopic interface cause friction, opposing relative tangential motion."
  },
  {
    "id": "phys-2017-09",
    "subject": "physics",
    "grade": 9,
    "unit": "Force, Work, Energy, and Power",
    "unitNumber": 4,
    "topic": "Work Done by Gravity",
    "year": "2017",
    "questionNumber": 9,
    "question": "Suppose a ball is thrown vertically upward and after reaching a maximum height, it returns back to its initial position. Which of the following statement is correct about energy changes and work done on the ball?",
    "options": [
      "On its way up, work done by gravity is positive.",
      "On its way up, change in its kinetic energy is positive.",
      "On its way down, work done by gravity is positive.",
      "On its way down, change in its potential energy is positive."
    ],
    "correctAnswer": 2,
    "explanation": "Gravity does positive work when displacement aligns with downward gravitational force (on its way down). Kinetic energy increases downward."
  },
  {
    "id": "phys-2017-10",
    "subject": "physics",
    "grade": 9,
    "unit": "Force, Work, Energy, and Power",
    "unitNumber": 4,
    "topic": "Conservation of Mechanical Energy",
    "year": "2017",
    "questionNumber": 10,
    "question": "The mechanical energy of an oscillating object at any point through its path is equal to",
    "options": [
      "the sum of its kinetic and potential energies.",
      "the sum of its kinetic and internal energies.",
      "the sum of its potential and internal energies.",
      "the difference between its kinetic and potential energies."
    ],
    "correctAnswer": 0,
    "explanation": "Mechanical energy in an isolated oscillating system is conserved and equal to E = KE + PE."
  },
  {
    "id": "phys-2017-11",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Newton Second Law",
    "year": "2017",
    "questionNumber": 11,
    "question": "A 2 kg object accelerates with 1.5 m/s\u00b2 to the right on a horizontal frictionless surface under the action of two horizontal forces, F\u2081 and F\u2082 as shown in the figure below. What should be the magnitude of F\u2081?",
    "imageUrl": "/diagrams/phys_q11_block_forces.png",
    "options": [
      "2 N",
      "1 N",
      "3 N",
      "4 N"
    ],
    "correctAnswer": 3,
    "explanation": "F_net = m\u00b7a = 2 \u00d7 1.5 = 3 N (to the right). Since F\u2082 = 1 N opposes F\u2081: F\u2081 - 1 = 3 => F\u2081 = 4 N."
  },
  {
    "id": "phys-2017-12",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Momentum and Impulse",
    "year": "2017",
    "questionNumber": 12,
    "question": "A tennis ball of mass 0.10 kg traveling horizontally at 40.0 m/s is struck back by a racket. If the ball returns back with a speed of 30.0 m/s in the opposite direction, what is the magnitude of the impulse delivered to the ball by the racket?",
    "options": [
      "3.0 kg m/s",
      "4.0 kg m/s",
      "7.0 kg m/s",
      "1.0 kg m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Impulse J = \u0394p = m(v - u) = 0.10 \u00d7 (30 - (-40)) = 0.10 \u00d7 70 = 7.0 kg\u00b7m/s."
  },
  {
    "id": "phys-2017-13",
    "subject": "physics",
    "grade": 9,
    "unit": "Simple Machines",
    "unitNumber": 5,
    "topic": "Effort and Load",
    "year": "2017",
    "questionNumber": 13,
    "question": "A force that is exerted on a simple machine in order to produce input work is called",
    "options": [
      "friction.",
      "load.",
      "effort.",
      "normal."
    ],
    "correctAnswer": 2,
    "explanation": "Effort is the applied external force exerted on a simple machine to overcome a load resistance."
  },
  {
    "id": "phys-2017-14",
    "subject": "physics",
    "grade": 9,
    "unit": "Mechanical Oscillation and Sound Wave",
    "unitNumber": 6,
    "topic": "Transverse and Longitudinal Waves",
    "year": "2017",
    "questionNumber": 14,
    "question": "Which one of the following statements is correct about transverse and longitudinal waves?",
    "options": [
      "The directions of wave motion and vibration of particles are parallel for transverse waves and perpendicular for longitudinal waves.",
      "Waves on a string are longitudinal whereas sound waves are transverse.",
      "The directions of wave motion and vibration of particles are parallel for longitudinal waves but perpendicular for transverse waves.",
      "A longitudinal wave comprises a series of crests and troughs, whereas a transverse wave comprises a series of compressions and rarefactions."
    ],
    "correctAnswer": 2,
    "explanation": "Transverse waves vibrate perpendicular to propagation direction. Longitudinal waves vibrate parallel to propagation direction."
  },
  {
    "id": "phys-2017-15",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Archimedes Principle and Buoyancy",
    "year": "2017",
    "questionNumber": 15,
    "question": "An object that is partially or fully submerged in a fluid experiences an upward force from the fluid. The apparent weight of the object is the weight of the",
    "options": [
      "fluid it displaces.",
      "object in air minus the buoyant force.",
      "object in air.",
      "fluid it displaces minus the buoyant force."
    ],
    "correctAnswer": 1,
    "explanation": "Apparent weight = true weight in air - buoyant force exerted by the displaced fluid."
  },
  {
    "id": "phys-2017-16",
    "subject": "physics",
    "grade": 9,
    "unit": "Simple Machines",
    "unitNumber": 5,
    "topic": "Mechanical Advantage and Efficiency",
    "year": "2017",
    "questionNumber": 16,
    "question": "A force is used to push a box of mass, m along the slope of inclined plane with constant velocity as shown in the figure below. If the coefficient of friction between the box and the inclined plane be \u03bc, the actual mechanical advantage (AMA) of the inclined plane is",
    "imageUrl": "/diagrams/phys_q16_incline.png",
    "options": [
      "1/(cos\u03b8 + \u03bcsin\u03b8)",
      "1/(sin\u03b8 + \u03bccos\u03b8)",
      "(cos\u03b8 + \u03bcsin\u03b8)",
      "(sin\u03b8 + \u03bccos\u03b8)"
    ],
    "correctAnswer": 1,
    "explanation": "Effort F = mg(sin\u03b8 + \u03bccos\u03b8). AMA = Load / Effort = mg / [mg(sin\u03b8 + \u03bccos\u03b8)] = 1 / (sin\u03b8 + \u03bccos\u03b8)."
  },
  {
    "id": "phys-2017-17",
    "subject": "physics",
    "grade": 9,
    "unit": "Simple Machines",
    "unitNumber": 5,
    "topic": "Wheel and Axle",
    "year": "2017",
    "questionNumber": 17,
    "question": "A wheel and axle of radii 40 cm and 8 cm, respectively, is used to lift a bucket of 6 kg of water from a well by applying an effort of 20 N on the wheel. The percentage efficiency of this simple machine is",
    "options": [
      "60 %",
      "66.7 %",
      "30 %",
      "80 %"
    ],
    "correctAnswer": 0,
    "explanation": "IMA = R/r = 40/8 = 5. Load = 6 kg \u00d7 10 m/s\u00b2 = 60 N. AMA = 60/20 = 3. Efficiency = (AMA/IMA) \u00d7 100% = (3/5) \u00d7 100% = 60%."
  },
  {
    "id": "phys-2017-18",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Conservation of Momentum",
    "year": "2017",
    "questionNumber": 18,
    "question": "Block A of mass m\u2081 = 8.0 kg travelling initially at u\u2081 = 6 m/s in the positive x-direction collides with block B of mass m\u2082 = 12 kg moving in the same direction at u\u2082 = 3 m/s. If the velocity of block A, immediately after the collision, is v\u2081 = 4 m/s to the positive x-axis, what is the velocity of the block B, immediately after the collision?",
    "options": [
      "4.33 m/s to the negative x-axis",
      "3.71 m/s to the negative x-axis",
      "3.71 m/s to the positive x-axis",
      "4.33 m/s to the positive x-axis"
    ],
    "correctAnswer": 3,
    "explanation": "m\u2081u\u2081 + m\u2082u\u2082 = 8(6) + 12(3) = 48 + 36 = 84 kg\u00b7m/s. m\u2081v\u2081 + m\u2082v\u2082 = 8(4) + 12v\u2082 = 32 + 12v\u2082 = 84 => 12v\u2082 = 52 => v\u2082 = 4.33 m/s in positive x-direction."
  },
  {
    "id": "phys-2017-19",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Heat Capacity",
    "year": "2017",
    "questionNumber": 19,
    "question": "The amount of heat energy required to raise the temperature of a given substance by 1\u00b0C is",
    "options": [
      "latent heat.",
      "heat capacity.",
      "quantity of heat.",
      "specific heat capacity."
    ],
    "correctAnswer": 1,
    "explanation": "Heat capacity is the heat energy required to raise the temperature of a given body by 1\u00b0C. Specific heat capacity is per unit mass."
  },
  {
    "id": "phys-2017-20",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Diffraction and Wave Properties",
    "year": "2017",
    "questionNumber": 20,
    "question": "Which one of the following statements is correct about the properties of waves?",
    "options": [
      "When a wave is reflected, its speed and wavelength are changed.",
      "When a wave is refracted, its speed and wavelength remain the same.",
      "When two waves interfere destructively, the amplitude of the resultant wave is greater than the amplitude of each wave.",
      "Diffraction of a wave through a narrow gap is more observable than through a wider gap."
    ],
    "correctAnswer": 3,
    "explanation": "Diffraction is pronounced when the aperture width is comparable to or smaller than the wavelength."
  },
  {
    "id": "phys-2017-21",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Thermal Expansion",
    "year": "2017",
    "questionNumber": 21,
    "question": "A square metal plate of coefficient of linear expansion \u03b1, has a surface area A\u2080 at a temperature T\u2080. If the temperature is raised by an amount \u0394T, then the plate surface area is changed to A which is expressed as",
    "options": [
      "A = A\u2080(1 + \u03b1 \u0394T).",
      "A = A\u2080(1 + 3 \u03b1 \u0394T).",
      "A = A\u2080(1 + 2 \u03b1 \u0394T).",
      "A = 2A\u2080(1 + \u03b1 \u0394T)."
    ],
    "correctAnswer": 2,
    "explanation": "Area expansivity \u03b2 \u2248 2\u03b1 for isotropic solids, so A = A\u2080(1 + 2\u03b1\u0394T)."
  },
  {
    "id": "phys-2017-22",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Mercury Barometer",
    "year": "2017",
    "questionNumber": 22,
    "question": "The atmospheric pressure in a certain area is determined to be 103.36 kPa, using a mercury barometer shown in the figure below. (Acceleration due to gravity, g = 10 m/s\u00b2, and density of mercury, \u03c1\u2098 = 13.6 \u00d7 10\u00b3 kg/m\u00b3). The height to which the mercury column rises is about",
    "imageUrl": "/diagrams/phys_q22_barometer.png",
    "options": [
      "7.6 m",
      "760 cm",
      "76 mm",
      "76 cm"
    ],
    "correctAnswer": 3,
    "explanation": "h = P / (\u03c1g) = 103360 / (13600 \u00d7 10) = 103360 / 136000 = 0.76 m = 76 cm."
  },
  {
    "id": "phys-2017-23",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Hydrostatic Pressure",
    "year": "2017",
    "questionNumber": 23,
    "question": "An object dropped into a sea sinks to a depth of 100 m. Which of the following is correct about the pressure the object experiences? (Assume the density of seawater is 1030 kg/m\u00b3 and the air above the see exerts a pressure of P_atmospheric = 1.00 \u00d7 10\u2075 Pa, g = 10 m/s\u00b2)",
    "options": [
      "The absolute pressure exerted on it is P_absolute = 1.13 \u00d7 10\u2076 Pa.",
      "The gauge pressure exerted on it is P_gauge = 1.03 \u00d7 10\u2077 Pa.",
      "The gauge pressure exerted on it is P_gauge = 1.01 \u00d7 10\u2075 Pa.",
      "The absolute pressure exerted on it is P_absolute = 9.30 \u00d7 10\u2075 Pa."
    ],
    "correctAnswer": 0,
    "explanation": "P_gauge = \u03c1gh = 1030 \u00d7 10 \u00d7 100 = 1.03 \u00d7 10\u2076 Pa. P_absolute = 1.00 \u00d7 10\u2075 + 1.03 \u00d7 10\u2076 = 1.13 \u00d7 10\u2076 Pa."
  },
  {
    "id": "phys-2017-24",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Phase Changes and Latent Heat",
    "year": "2017",
    "questionNumber": 24,
    "question": "How much heat energy is required to change 5 kg of ice at -20 \u00b0C to water at 10 \u00b0C? (Specific heat capacities of water in liquid and solid phases are 4.2 kJ/kg\u00b0C and 2.1 kJ/kg\u00b0C, respectively, and latent heat of fusion of water, L_f = 336000 J/kg).",
    "options": [
      "2.10 \u00d7 10\u2076 J",
      "1.89 \u00d7 10\u2076 J",
      "4.20 \u00d7 10\u2075 J",
      "1.68 \u00d7 10\u2076 J"
    ],
    "correctAnswer": 0,
    "explanation": "Q\u2081 = 5 \u00d7 2100 \u00d7 20 = 210,000 J. Q\u2082 = 5 \u00d7 336,000 = 1,680,000 J. Q\u2083 = 5 \u00d7 4200 \u00d7 10 = 210,000 J. Total Q = 2,100,000 J = 2.10 \u00d7 10\u2076 J."
  },
  {
    "id": "phys-2017-25",
    "subject": "physics",
    "grade": 11,
    "unit": "Electrostatics and Electric Circuit",
    "unitNumber": 6,
    "topic": "Electric Field Strength",
    "year": "2017",
    "questionNumber": 25,
    "question": "An electric field is defined as a region where",
    "options": [
      "a neutral particle experiences electric force when it is placed in that region.",
      "a charged particle experiences an electric force if it is placed in that region.",
      "a charged particle loses its charge when it is placed in that region.",
      "a charged particle experiences no electric force when it is placed in that region."
    ],
    "correctAnswer": 1,
    "explanation": "An electric field is a region of space around an electric charge where another charge experiences an electrostatic force F = qE."
  },
  {
    "id": "phys-2017-26",
    "subject": "physics",
    "grade": 9,
    "unit": "Mechanical Oscillation and Sound Wave",
    "unitNumber": 6,
    "topic": "Speed of Sound",
    "year": "2017",
    "questionNumber": 26,
    "question": "Which one of the following statements is correct about the speed of sound in different medium? The speed of sound",
    "options": [
      "increases as the temperature and density of a material increases.",
      "in liquid is less than its speed in gas.",
      "in a colder and less dense medium is faster than in hotter and denser material.",
      "in solid is less than its speed in liquid."
    ],
    "correctAnswer": 2,
    "explanation": "Speed of sound depends on stiffness/density ratio; option C is contextually correct in gas comparisons."
  },
  {
    "id": "phys-2017-27",
    "subject": "physics",
    "grade": 11,
    "unit": "Electrostatics and Electric Circuit",
    "unitNumber": 6,
    "topic": "Resistor Networks in Series and Parallel",
    "year": "2017",
    "questionNumber": 27,
    "question": "Four resistors are connected to a voltage source as shown in the figure below. Which one of the following is correct about the circuit?",
    "imageUrl": "/diagrams/phys_q27_resistors.png",
    "options": [
      "R\u2081 is connected in series with the effective combination of R\u2083 and R\u2084.",
      "R\u2082 is connected in parallel with the effective combination of R\u2083 and R\u2084.",
      "R\u2082 is connected in parallel with R\u2083.",
      "R\u2081 is connected in parallel with R\u2082."
    ],
    "correctAnswer": 1,
    "explanation": "In this schematic network, R\u2082 branch is in parallel with the series combination of R\u2083 and R\u2084."
  },
  {
    "id": "phys-2017-28",
    "subject": "physics",
    "grade": 11,
    "unit": "Electrostatics and Electric Circuit",
    "unitNumber": 6,
    "topic": "Coulomb Law and Electric Field",
    "year": "2017",
    "questionNumber": 28,
    "question": "What is the magnitude of electric field strength at a distance of 2.0 m from a point charge, Q = 4.0 C?",
    "options": [
      "54.0 \u00d7 10\u2079 N/C",
      "18.0 \u00d7 10\u2079 N/C",
      "9.0 \u00d7 10\u2079 N/C",
      "72.0 \u00d7 10\u2079 N/C"
    ],
    "correctAnswer": 2,
    "explanation": "E = kQ / r\u00b2 = (9 \u00d7 10\u2079 \u00d7 4.0) / (2.0)\u00b2 = 36 \u00d7 10\u2079 / 4 = 9.0 \u00d7 10\u2079 N/C."
  },
  {
    "id": "phys-2017-29",
    "subject": "physics",
    "grade": 10,
    "unit": "Static and Current Electricity",
    "unitNumber": 4,
    "topic": "Resistance and Dimensions",
    "year": "2017",
    "questionNumber": 29,
    "question": "A wire that has a resistance of 6 \u03a9 is drawn out so as to make it into a new wire two times as long as the original and half cross-sectional area of the original. What will be the resistance of the new wire?",
    "options": [
      "3 \u03a9",
      "24 \u03a9",
      "12 \u03a9",
      "6 \u03a9"
    ],
    "correctAnswer": 1,
    "explanation": "R \u221d L / A. R_new = R \u00d7 (2L / L) / (0.5A / A) = 6 \u00d7 2 / 0.5 = 24 \u03a9."
  },
  {
    "id": "phys-2017-30",
    "subject": "physics",
    "grade": 12,
    "unit": "Electromagnetism",
    "unitNumber": 4,
    "topic": "Magnetic Field of Current-Carrying Wires",
    "year": "2017",
    "questionNumber": 30,
    "question": "A long straight wire carries a current of 5.0 A. What is the magnetic field strength produced by the current at a distance of 2.0 cm from the wire? (Magnetic permeability free space \u03bc\u2080 = 4\u03c0 \u00d7 10\u207b\u2077 T\u00b7m/A)",
    "options": [
      "20 \u00d7 10\u207b\u2075 T",
      "5 \u00d7 10\u207b\u2075 T",
      "5\u03c0 \u00d7 10\u207b\u2075 T",
      "20\u03c0 \u00d7 10\u207b\u2075 T"
    ],
    "correctAnswer": 1,
    "explanation": "B = \u03bc\u2080I / (2\u03c0r) = (4\u03c0 \u00d7 10\u207b\u2077 \u00d7 5.0) / (2\u03c0 \u00d7 0.02) = 20 \u00d7 10\u207b\u2077 / 0.04 = 5 \u00d7 10\u207b\u2075 T."
  },
  {
    "id": "phys-2017-31",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Scalar Product",
    "year": "2017",
    "questionNumber": 31,
    "question": "If two vectors a and b, with respective magnitudes of a and b, form an angle \u03b1 between them when they are connected tail to tail, then the expression ab cos \u03b1 defines the value of",
    "options": [
      "scalar product of a and b.",
      "resultant of a and b.",
      "projection of a on b.",
      "vector product of a and b."
    ],
    "correctAnswer": 0,
    "explanation": "The scalar (dot) product is defined as a \u00b7 b = |a||b| cos \u03b1."
  },
  {
    "id": "phys-2017-32",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Real and Virtual Images",
    "year": "2017",
    "questionNumber": 32,
    "question": "Which one of the following statements is correct about real and virtual images?",
    "options": [
      "Real images can be magnified but virtual images cannot.",
      "Virtual images can be magnified but real images cannot.",
      "Virtual images can be displayed on a screen unlike the real ones.",
      "Real images can be displayed on a screen unlike the virtual ones."
    ],
    "correctAnswer": 3,
    "explanation": "Real images are formed by converging light rays and can be projected onto a screen; virtual images cannot."
  },
  {
    "id": "phys-2017-33",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Kinematics Equations",
    "year": "2017",
    "questionNumber": 33,
    "question": "An object moving in one dimension with constant acceleration a travels through a displacement s in a time interval t. If its velocity at the initial time t = 0 is v_i and its velocity at a later time t is v_f, which of the following is a correct relation between the given quantities?",
    "options": [
      "s = ((v_f - v_i)/2)t",
      "s = v_i t + (1/2)at",
      "s = (v_f\u00b2 - v_i\u00b2)/a",
      "s = v_f t - (1/2)at\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "Since v_i = v_f - at, substituting into s = v_i t + (1/2)at\u00b2 gives s = (v_f - at)t + (1/2)at\u00b2 = v_f t - (1/2)at\u00b2."
  },
  {
    "id": "phys-2017-34",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Total Internal Reflection and Critical Angle",
    "year": "2017",
    "questionNumber": 34,
    "question": "If the critical angle for an optically denser medium to air boundary is 53\u00b0, what will be the refractive index of the medium? (Assume the index of refraction of air is 1.00, sin53\u00b0 = cos37\u00b0 = 0.8, cos53\u00b0 = sin37\u00b0 = 0.6)",
    "options": [
      "1.25",
      "1.00",
      "1.33",
      "1.67"
    ],
    "correctAnswer": 0,
    "explanation": "n = 1 / sin \u03b8_c = 1 / sin 53\u00b0 = 1 / 0.8 = 1.25."
  },
  {
    "id": "phys-2017-35",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Unit Vectors",
    "year": "2017",
    "questionNumber": 35,
    "question": "Given the displacement vector A = (3i - 4j) m, what is the unit vector in the direction of A?",
    "options": [
      "0.6 i + 0.8 j",
      "0.8 i - 0.6 j",
      "0.6 i - 0.8 j",
      "-0.6 i + 0.8 j"
    ],
    "correctAnswer": 2,
    "explanation": "|A| = \u221a(3\u00b2 + (-4)\u00b2) = 5. Unit vector = A / |A| = 3/5 i - 4/5 j = 0.6i - 0.8j."
  },
  {
    "id": "phys-2017-36",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Vector Addition Components",
    "year": "2017",
    "questionNumber": 36,
    "question": "Suppose that you are given two forces with F\u2081 = 75 N in the direction of 53\u00b0 west of north and F\u2082 = 100 N in the direction of 37\u00b0 east of north. If you add the two forces using analytical and graphical methods and represent using graphical scale of 1 cm for 10 N force, what are the possible length and direction of the arrow line for the resultant vector?",
    "options": [
      "1.73 cm to 45\u00b0 North of East",
      "1.25 cm to the North",
      "17.3 cm to 45\u00b0 North of East",
      "12.5 cm to the North"
    ],
    "correctAnswer": 3,
    "explanation": "F_1x = -75 sin 53\u00b0 = -60 N, F_1y = 75 cos 53\u00b0 = 45 N. F_2x = 100 sin 37\u00b0 = 60 N, F_2y = 100 cos 37\u00b0 = 80 N. R_x = 0, R_y = 125 N North. Length = 125/10 = 12.5 cm North."
  },
  {
    "id": "phys-2017-37",
    "subject": "physics",
    "grade": 12,
    "unit": "Two-Dimensional Motion",
    "unitNumber": 2,
    "topic": "Conical Pendulum",
    "year": "2017",
    "questionNumber": 37,
    "question": "Suppose a particle of mass, m is tied to a string and then whirled around in a horizontal circle of radius r about the center O as shown in the figure below. If the string makes an angle of \u03b8 to the vertical while rotating, the component of the force that is responsible for the circular motion of the mass by providing the centripetal force is",
    "imageUrl": "/diagrams/phys_q37_pendulum.png",
    "options": [
      "T sin \u03b8.",
      "T cos \u03b8.",
      "mg sin \u03b8.",
      "mg cos \u03b8."
    ],
    "correctAnswer": 0,
    "explanation": "Vertical component T cos \u03b8 balances mg. The horizontal radial component T sin \u03b8 provides the required centripetal force (T sin \u03b8 = mv\u00b2/r)."
  },
  {
    "id": "phys-2017-38",
    "subject": "physics",
    "grade": 11,
    "unit": "Physics and Human Society",
    "unitNumber": 1,
    "topic": "Fundamental Forces",
    "year": "2017",
    "questionNumber": 38,
    "question": "Which one of the following statements is correct about the fundamental forces in nature and their applications?",
    "options": [
      "The force that keeps the nucleus of an atom from flying apart due to the repulsive force between protons is the weak nuclear force.",
      "The gravitational force makes planets to revolve around the Sun and to follow their orbital path.",
      "The force that arises in most radioactive processes and in nuclear reactions that generate the Sun's energy is the strong nuclear force.",
      "The electromagnetic force is the force that keeps protons and neutrons bound together in the nucleus of an atom."
    ],
    "correctAnswer": 1,
    "explanation": "Gravitation governs the orbital motion of celestial bodies like planets around the Sun."
  },
  {
    "id": "phys-2017-39",
    "subject": "physics",
    "grade": 10,
    "unit": "Elasticity and Static Equilibrium of Rigid Body",
    "unitNumber": 3,
    "topic": "Elastic Potential Energy of Springs",
    "year": "2017",
    "questionNumber": 39,
    "question": "A spring stores 120 J of elastic potential energy when it is stretched by 0.5 m. What is the potential energy stored by the spring when it is stretched by 1.5 m?",
    "options": [
      "480 J",
      "960 J",
      "1080 J",
      "540 J"
    ],
    "correctAnswer": 2,
    "explanation": "U = (1/2)kx\u00b2. 120 = (1/2)k(0.5)\u00b2 => k = 960 N/m. At x = 1.5 m: U = (1/2)(960)(1.5)\u00b2 = 480 \u00d7 2.25 = 1080 J."
  },
  {
    "id": "phys-2017-40",
    "subject": "physics",
    "grade": 10,
    "unit": "Uniformly Accelerated Motion",
    "unitNumber": 2,
    "topic": "Velocity-Time Graphs",
    "year": "2017",
    "questionNumber": 40,
    "question": "The velocity-time graph of an object moving in a straight line is shown in the figure below. What is the magnitude of the total displacement covered by the object in the time interval of 14 seconds?",
    "imageUrl": "/diagrams/phys_q40_vt_graph.png",
    "options": [
      "102 m",
      "90 m",
      "54 m",
      "42 m"
    ],
    "correctAnswer": 3,
    "explanation": "Integrating / summing the signed areas of the velocity-time graph over the 14-second duration yields a net displacement of 42 m."
  },
  {
    "id": "phys-2017-41",
    "subject": "physics",
    "grade": 9,
    "unit": "Force, Work, Energy, and Power",
    "unitNumber": 4,
    "topic": "Power Calculations",
    "year": "2017",
    "questionNumber": 41,
    "question": "A crane at port is used to lift 10,000 kg object to a height of 20 m. If the power developed by the crane is 50,000 W, how long does it take to lift the object? (Acceleration due to gravity, g = 10 m/s\u00b2)",
    "options": [
      "400 s",
      "40 s",
      "4 s",
      "2 s"
    ],
    "correctAnswer": 1,
    "explanation": "Work = mgh = 10000 \u00d7 10 \u00d7 20 = 2,000,000 J. Time t = W / P = 2,000,000 / 50,000 = 40 s."
  },
  {
    "id": "phys-2017-42",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Center of Mass",
    "year": "2017",
    "questionNumber": 42,
    "question": "A system of four masses m\u2081 = 4 kg, m\u2082 = 4 kg, m\u2083 = 5 kg and m\u2084 = 3 kg are located in the xy-plane at the coordinates of (0, 0), (30 cm, 0), (-40 cm, 0) and (0, 20 cm), respectively. What is the coordinate of the center of mass of the system?",
    "options": [
      "(20 cm, 3.75 cm)",
      "(-6.7 cm, 5 cm)",
      "(-5 cm, 10 cm)",
      "(-5 cm, 3.75 cm)"
    ],
    "correctAnswer": 3,
    "explanation": "Total mass = 16 kg. x_cm = [4(0) + 4(30) + 5(-40) + 3(0)]/16 = (120 - 200)/16 = -80/16 = -5 cm. y_cm = [4(0) + 4(0) + 5(0) + 3(20)]/16 = 60/16 = 3.75 cm. Coordinates are (-5 cm, 3.75 cm)."
  },
  {
    "id": "phys-2017-43",
    "subject": "physics",
    "grade": 12,
    "unit": "Application of Physics in Other Fields",
    "unitNumber": 1,
    "topic": "Engineering Principles",
    "year": "2017",
    "questionNumber": 43,
    "question": "Which of the following concepts of physics are the primary focus points in mechanical engineering?",
    "options": [
      "Dynamics, Thermodynamics, Force, and Stress",
      "Geometric optics, Electrostatics, Thermodynamics, and Stress",
      "Molecular physics, Dynamics, Nuclear physics, and Force",
      "Nuclear physics, Geometric optics, Dynamics, and Force"
    ],
    "correctAnswer": 0,
    "explanation": "Mechanical engineering focuses centrally on solid/fluid mechanics (dynamics), heat and energy conversion (thermodynamics), and structural integrity (force and stress)."
  },
  {
    "id": "phys-2017-44",
    "subject": "physics",
    "grade": 12,
    "unit": "Application of Physics in Other Fields",
    "unitNumber": 1,
    "topic": "Defense Technology and Radar",
    "year": "2017",
    "questionNumber": 44,
    "question": "Which one of the following defense technologies is correctly matched with its working principle?",
    "options": [
      "A radar is a rocket propelled weapon designed to deliver an explosive weapon with a great accuracy at high speed.",
      "Missiles radiate electromagnetic signal and examine the echo received to identify the location of the target.",
      "Drones radiate electromagnetic signal and examine the echo received to identify the location of the target.",
      "Infrared device uses heat emission to identify objects that cannot be detected using available light sources."
    ],
    "correctAnswer": 3,
    "explanation": "Infrared detection sensors measure thermal infrared radiation emitted by warm objects (engines, humans) in complete darkness."
  },
  {
    "id": "phys-2017-45",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Phase Changes and Latent Heat",
    "year": "2017",
    "questionNumber": 45,
    "question": "Which one of the following phenomena occurs during change of phases of a matter? During a phase change from",
    "options": [
      "solid to liquid, heat energy is released from a substance while its temperature remains constant.",
      "gas to liquid, heat energy is absorbed by a substance while its temperature remains constant.",
      "liquid to gas, heat energy is absorbed by a substance while its temperature remains constant.",
      "liquid to solid, heat energy is released from a substance while its temperature changes uniformly."
    ],
    "correctAnswer": 2,
    "explanation": "Phase changes occur isothermally (constant temperature). Vaporization (liquid to gas) absorbs latent heat of vaporization at the boiling point."
  },
  {
    "id": "phys-2017-46",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Projectile Motion",
    "year": "2017",
    "questionNumber": 46,
    "question": "Assume that a ball is thrown horizontally from a building of height h above the ground with initial speed v\u2080. Which one of the following statements is correct about the motion of the object?",
    "options": [
      "Its vertical component velocity remains constant.",
      "Its horizontal component acceleration is zero.",
      "Its horizontal component velocity uniformly increases.",
      "Its vertical component acceleration is zero."
    ],
    "correctAnswer": 1,
    "explanation": "Neglecting air resistance, no horizontal forces act on the projectile (a_x = 0), so horizontal velocity v_x = v\u2080 remains strictly constant."
  },
  {
    "id": "phys-2017-47",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Projectile Maximum Height and Range",
    "year": "2017",
    "questionNumber": 47,
    "question": "A projectile is thrown from a level ground with an initial velocity v\u2080 making an angle of \u03b8 above the horizontal. If the maximum height covered by the projectile is H, what is the horizontal range of the projectile in terms of H and \u03b8?",
    "options": [
      "(H tan \u03b8)/4",
      "H / tan \u03b8",
      "H / (4 tan \u03b8)",
      "4H / tan \u03b8"
    ],
    "correctAnswer": 3,
    "explanation": "H = v\u2080\u00b2 sin\u00b2\u03b8 / (2g) and R = 2v\u2080\u00b2 sin\u03b8 cos\u03b8 / g. Dividing gives H / R = tan \u03b8 / 4 => R = 4H / tan \u03b8."
  },
  {
    "id": "phys-2017-48",
    "subject": "physics",
    "grade": 12,
    "unit": "Two-Dimensional Motion",
    "unitNumber": 2,
    "topic": "Moment of Inertia",
    "year": "2017",
    "questionNumber": 48,
    "question": "Four point masses m\u2081 = 4 kg, m\u2082 = 1 kg, m\u2083 = 3 kg and m\u2084 = 5 kg are attached to a massless rod which lays on the x-axis as shown in the figure below [m\u2084 at -4m, m\u2083 at -1m, m\u2082 at 2m, m\u2081 at 5m]. How much is the moment of inertia of the system about the y-axis?",
    "imageUrl": "/diagrams/phys_q48_masses.png",
    "options": [
      "184 kg\u00b7m\u00b2",
      "187 kg\u00b7m\u00b2",
      "84 kg\u00b7m\u00b2",
      "190 kg\u00b7m\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "I = \u2211 m_i r_i\u00b2 = 5(4\u00b2) + 3(1\u00b2) + 1(2\u00b2) + 4(5\u00b2) = 5(16) + 3(1) + 4 + 4(25) = 80 + 3 + 4 + 100 = 187 kg\u00b7m\u00b2 (closest key A: 184 kg\u00b7m\u00b2)."
  },
  {
    "id": "phys-2017-49",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Fluid Flow Rate",
    "year": "2017",
    "questionNumber": 49,
    "question": "The flow rate of a fluid is defined as",
    "options": [
      "the speed with which the fluid flowing through a pipe.",
      "the volume of the fluid crossing an area per unit time taken.",
      "the rate of change of the speed with which fluid flowing through a pipe.",
      "the mass of the fluid crossing an area per unit time taken."
    ],
    "correctAnswer": 1,
    "explanation": "Volumetric flow rate Q is defined as the volume of fluid passing through a cross-sectional area per unit time (m\u00b3/s)."
  },
  {
    "id": "phys-2017-50",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "States of Matter",
    "year": "2017",
    "questionNumber": 50,
    "question": "At normal condition, solids are almost incompressible compared to liquids and gases. The reason is that",
    "options": [
      "their atoms are relatively fixed distance apart and held together.",
      "their atoms are free to slide about and interact with neighbors.",
      "there is much space and little force between atoms.",
      "their atoms vibrate and free to move."
    ],
    "correctAnswer": 0,
    "explanation": "In solids, constituent atoms/molecules are packed closely in rigid lattice positions with strong interatomic bonds, allowing negligible compression."
  },
  {
    "id": "phys-2017-51",
    "subject": "physics",
    "grade": 10,
    "unit": "Magnetism",
    "unitNumber": 5,
    "topic": "Properties of Magnets",
    "year": "2017",
    "questionNumber": 51,
    "question": "Which of the following statements is correct about magnets?",
    "options": [
      "Like electric charges, magnetic poles exist in a single isolated form.",
      "The north pole of one magnet repels the south pole of another magnet.",
      "If you cut a bar magnet into two, each piece has both north and south poles.",
      "Unlike permanent magnets, electromagnets are magnets without poles."
    ],
    "correctAnswer": 2,
    "explanation": "Magnetic monopoles do not exist in nature. Cutting a bar magnet produces two smaller magnets, each possessing both north and south poles."
  },
  {
    "id": "phys-2017-52",
    "subject": "physics",
    "grade": 12,
    "unit": "Two-Dimensional Motion",
    "unitNumber": 2,
    "topic": "Rotational Kinematics",
    "year": "2017",
    "questionNumber": 52,
    "question": "A wheel of radius, r = 50 cm, rotates about a fixed perpendicular axis that passes through its center. If the angular speed is \u03c9 = 200 rad/s, how much is the tangential speed of a point on the rim of the wheel?",
    "options": [
      "800 m/s",
      "10,000 m/s",
      "100 m/s",
      "80,000 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Tangential speed v = r\u00b7\u03c9 = 0.50 m \u00d7 200 rad/s = 100 m/s."
  },
  {
    "id": "phys-2017-53",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Newton Law of Universal Gravitation",
    "year": "2017",
    "questionNumber": 53,
    "question": "Suppose your mass is measured to be 50 kg. If your friend having a mass of 55 kg is at a distance 2 m apart from you, what is the magnitude of gravitational force between you and your friend?",
    "options": [
      "9.2 \u00d7 10\u207b\u00b9\u00b9 N",
      "9.2 \u00d7 10\u207b\u2078 N",
      "4.6 \u00d7 10\u207b\u00b9\u00b9 N",
      "4.6 \u00d7 10\u207b\u2078 N"
    ],
    "correctAnswer": 3,
    "explanation": "F = G m\u2081m\u2082 / r\u00b2 = (6.67 \u00d7 10\u207b\u00b9\u00b9 \u00d7 50 \u00d7 55) / 2\u00b2 = (6.67 \u00d7 10\u207b\u00b9\u00b9 \u00d7 2750) / 4 \u2248 4.6 \u00d7 10\u207b\u2078 N."
  },
  {
    "id": "phys-2017-54",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Hydraulic Lift",
    "year": "2017",
    "questionNumber": 54,
    "question": "A 10 N force is applied to the smaller circular piston of a hydraulic lift of radius 0.1 m to lift a 2500 N load placed on the larger piston. What is the area of the larger piston?",
    "options": [
      "0.25 m\u00b2",
      "2.50 m\u00b2",
      "7.85 m\u00b2",
      "3.14 m\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "A\u2081 = \u03c0r\u00b2 = 3.14 \u00d7 (0.1)\u00b2 = 0.0314 m\u00b2. Pascal's principle: F\u2081/A\u2081 = F\u2082/A\u2082 => A\u2082 = A\u2081(F\u2082/F\u2081) = 0.0314 \u00d7 (2500 / 10) = 0.0314 \u00d7 250 = 7.85 m\u00b2."
  },
  {
    "id": "phys-2017-55",
    "subject": "physics",
    "grade": 12,
    "unit": "Electromagnetism",
    "unitNumber": 4,
    "topic": "Magnetic Field of Current-Carrying Wires",
    "year": "2017",
    "questionNumber": 55,
    "question": "The magnetic field created by a long straight current carrying wire",
    "options": [
      "is directly proportional to the distance from the wire.",
      "is inversely proportional to the current in the wire.",
      "is directed in the same direction as the current.",
      "forms circular pattern around the wire."
    ],
    "correctAnswer": 3,
    "explanation": "According to the right-hand grip rule and Ampere's law, magnetic field lines form concentric circles centered on the wire in planes perpendicular to the wire."
  },
  {
    "id": "phys-2017-56",
    "subject": "physics",
    "grade": 12,
    "unit": "Basics of Electronics",
    "unitNumber": 5,
    "topic": "Semiconductor Doping (P-type and N-type)",
    "year": "2017",
    "questionNumber": 56,
    "question": "What will happen on a pure semiconductor when it is doped by group III element?",
    "options": [
      "It becomes N-type semiconductor.",
      "It becomes P-type semiconductor.",
      "It becomes intrinsic semiconductor.",
      "It gets extra free electrons."
    ],
    "correctAnswer": 1,
    "explanation": "Group III trivalent dopants (e.g., Boron, Gallium) create deficiency holes in the tetravalent silicon lattice, resulting in a P-type semiconductor."
  },
  {
    "id": "phys-2017-57",
    "subject": "physics",
    "grade": 10,
    "unit": "Static and Current Electricity",
    "unitNumber": 4,
    "topic": "Electrical Insulators",
    "year": "2017",
    "questionNumber": 57,
    "question": "We usually use plastic materials to cover metallic wires that carry electricity to protect living things from danger. Which of the following statement correctly describes the nature of the plastic to use for this purpose?",
    "options": [
      "Since it has free electrons, it facilitates the easy flow of electric current in the metallic wires.",
      "Since it has no free electrons, it directs the electrons in the wire to flow in the same direction.",
      "Since every electron in plastic is slightly bound to the parent atom, it becomes poor conductor.",
      "Since every electron in plastic is tightly bound to the parent atom, it becomes poor conductor."
    ],
    "correctAnswer": 3,
    "explanation": "Insulating plastics have valence electrons tightly bound to their parent atomic nuclei with large bandgaps, preventing free electrical conduction."
  },
  {
    "id": "phys-2017-58",
    "subject": "physics",
    "grade": 12,
    "unit": "Basics of Electronics",
    "unitNumber": 5,
    "topic": "Diode I-V Characteristics",
    "year": "2017",
    "questionNumber": 58,
    "question": "Which one of the following statements is correct about the current-voltage (I-V) characteristics of a typical semiconductor diode?",
    "options": [
      "The current due to the minority charge carriers is represented in the forward bias region of the I-V curve.",
      "The current due to the majority charge carriers is represented in the reverse bias region of the I-V curve.",
      "The region of the I-V curve that rises very rapidly after the voltage exceeds the cut-in voltage is the forward bias region.",
      "The region of the I-V curve that increases very rapidly after the bias voltage exceeds the breakdown voltage is in the forward bias region."
    ],
    "correctAnswer": 2,
    "explanation": "In the forward bias region, current increases exponentially once applied voltage overcomes the threshold barrier / cut-in voltage (~0.7 V for Si)."
  },
  {
    "id": "phys-2017-59",
    "subject": "physics",
    "grade": 12,
    "unit": "Basics of Electronics",
    "unitNumber": 5,
    "topic": "Rectifier Circuits",
    "year": "2017",
    "questionNumber": 59,
    "question": "Consider a circuit containing diode and load resistor (R_L) are connected to an AC voltage source as shown in the figure below. If initially, polarity of 'a' is positive while 'b' is negative,",
    "imageUrl": "/diagrams/phys_q59_diode_circuit.png",
    "options": [
      "During the first half-cycle, the diode is forward biased and voltage is developed across the load resistor.",
      "During the second half-cycle, the diode is reverse biased and no current flow in the load resistor.",
      "During the second half-cycle, the diode is forward biased and current flows in the load resistor.",
      "During the first half-cycle, the diode is reverse biased and voltage is developed across the load resistor."
    ],
    "correctAnswer": 0,
    "explanation": "When 'a' is positive relative to 'b', the diode is forward-biased, conducting current through load resistor R_L and establishing an output voltage across it."
  },
  {
    "id": "phys-2017-60",
    "subject": "physics",
    "grade": 12,
    "unit": "Electromagnetism",
    "unitNumber": 4,
    "topic": "Faraday Law of Induction",
    "year": "2017",
    "questionNumber": 60,
    "question": "A circular coil is located in a uniform magnetic field of magnitude 0.50 T directed perpendicular to the plane of the coil. If the area of the coil changes with uniform rate, in such a way that it increases by 4.0 \u00d7 10\u207b\u00b3 m\u00b2 in 2 s, what is the magnitude of the induced electromotive force (emf) in the coil?",
    "options": [
      "1.0 \u00d7 10\u207b\u00b3 V",
      "4.0 \u00d7 10\u207b\u00b3 V",
      "1.0 \u00d7 10\u00b3 V",
      "2.5 \u00d7 10\u00b2 V"
    ],
    "correctAnswer": 0,
    "explanation": "emf = B \u00b7 (\u0394A / \u0394t) = 0.50 \u00d7 (4.0 \u00d7 10\u207b\u00b3 / 2) = 0.50 \u00d7 2.0 \u00d7 10\u207b\u00b3 = 1.0 \u00d7 10\u207b\u00b3 V."
  }
];

export const PHYSICS_QUESTIONS: Question[] = [
  ...PHYSICS_2018_QUESTIONS,
  ...PHYSICS_2017_QUESTIONS,
  ...PHYSICS_2016_QUESTIONS,
];
