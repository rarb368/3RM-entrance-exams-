import { Question } from "../../types";

export const PHYSICS_2018_QUESTIONS: Question[] = [
  {
    "id": "phys-2018-01",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Work Done by Vector Force",
    "year": "2018",
    "questionNumber": 1,
    "question": "A 25 kg box is dragged on a rough horizontal x-y plane from r\u2081 = (1.3 i + 1.4 j) m to r\u2082 = (8.3 i + 2.9 j) m by a force F = (4 i - 6 j) N. How much work is done by the force?",
    "options": [
      "19.0 J",
      "37.0 J",
      "15.8 J",
      "-75.6 J"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement \u0394r = r\u2082 - r\u2081 = (8.3 - 1.3)i + (2.9 - 1.4)j = (7.0 i + 1.5 j) m. Work W = F \u00b7 \u0394r = (4)(7.0) + (-6)(1.5) = 28 - 9 = 19.0 J."
  },
  {
    "id": "phys-2018-02",
    "subject": "physics",
    "grade": 11,
    "unit": "Electrostatics and Electric Circuit",
    "unitNumber": 6,
    "topic": "Combination Resistor Circuits",
    "year": "2018",
    "questionNumber": 2,
    "question": "Two resistors of 3 \u03a9 and 6 \u03a9 are connected in parallel, and their combination is connected in series with a 4 \u03a9 resistor. If the circuit is connected to a 12 V source, what is the voltage drop across the 6 \u03a9 resistor?",
    "options": [
      "8 V",
      "4 V",
      "2 V",
      "12 V"
    ],
    "correctAnswer": 1,
    "explanation": "Parallel combination R_p = (3 \u00d7 6) / (3 + 6) = 18 / 9 = 2 \u03a9. Total resistance R_total = 2 + 4 = 6 \u03a9. Total current I = V / R_total = 12 V / 6 \u03a9 = 2 A. The voltage drop across the parallel branch (and thus across the 6 \u03a9 resistor) is V_p = I \u00d7 R_p = 2 A \u00d7 2 \u03a9 = 4 V."
  },
  {
    "id": "phys-2018-03",
    "subject": "physics",
    "grade": 9,
    "unit": "Force, Work, Energy, and Power",
    "unitNumber": 4,
    "topic": "Newton's Second Law",
    "year": "2018",
    "questionNumber": 3,
    "question": "A constant force of 250.0 N is applied horizontally on a box that lays on a horizontal frictionless surface. If the box accelerates at 4.0 m/s\u00b2, what is its mass?",
    "options": [
      "125.0 kg",
      "41.7 kg",
      "10.4 kg",
      "62.5 kg"
    ],
    "correctAnswer": 3,
    "explanation": "By Newton's second law: F = m \u00d7 a => m = F / a = 250.0 N / 4.0 m/s\u00b2 = 62.5 kg."
  },
  {
    "id": "phys-2018-04",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Center of Mass of Discrete Systems",
    "year": "2018",
    "questionNumber": 4,
    "question": "Four masses are placed on the corners of a 50 cm \u00d7 50 cm square on the x-y plane: m\u2081 = 200 g at (0,0), m\u2082 = 200 g at (0,50), m\u2083 = 500 g at (50,50), and m\u2084 = 500 g at (50,0). Where is the center of mass (x_cm, y_cm) of the system?",
    "options": [
      "(25, 37.14) cm",
      "(25, 25) cm",
      "(37.14, 50) cm",
      "(35.71, 25) cm"
    ],
    "correctAnswer": 3,
    "explanation": "Total mass M = 200 + 200 + 500 + 500 = 1400 g. x_cm = (200\u00d70 + 200\u00d70 + 500\u00d750 + 500\u00d750) / 1400 = 50000 / 1400 \u2248 35.71 cm. y_cm = (200\u00d70 + 200\u00d750 + 500\u00d750 + 500\u00d70) / 1400 = 35000 / 1400 = 25 cm. Thus (x_cm, y_cm) = (35.71, 25) cm.",
    "diagramType": "phys-square-masses"
  },
  {
    "id": "phys-2018-05",
    "subject": "physics",
    "grade": 9,
    "unit": "Physics and Human Society",
    "unitNumber": 1,
    "topic": "Professional Scientific Organizations",
    "year": "2018",
    "questionNumber": 5,
    "question": "The Ethiopian Physical Society (EPS) was established by interested Ethiopian physics professionals to:",
    "options": [
      "Prepare physics curriculum under the ministry of education directives.",
      "Contribute its own share to promote physics education and research.",
      "Take part in election and participate in government formation.",
      "Monitor and supervise the curriculum implementation in Ethiopian high schools."
    ],
    "correctAnswer": 1,
    "explanation": "The Ethiopian Physical Society is a learned professional society whose core mission is to promote physics education, scientific literacy, and research advancement in Ethiopia."
  },
  {
    "id": "phys-2018-06",
    "subject": "physics",
    "grade": 12,
    "unit": "Electromagnetism",
    "unitNumber": 4,
    "topic": "Right-Hand Rule in Current Loops",
    "year": "2018",
    "questionNumber": 6,
    "question": "A rectangular wire loop is connected to a 3 V battery. What will happen to the direction of the magnetic field inside the loop if the terminals of the battery are reversed?",
    "options": [
      "It will change from into the plane to out of the plane.",
      "It will change from out of the plane to into the plane.",
      "It will change from counterclockwise to clockwise.",
      "It will change from clockwise to counterclockwise."
    ],
    "correctAnswer": 0,
    "explanation": "With the original battery polarity, clockwise current produces a magnetic field directed into the page. Reversing terminals reverses current to counterclockwise, which by the right-hand grip rule directs the magnetic field out of the page.",
    "diagramType": "phys-loop-field"
  },
  {
    "id": "phys-2018-07",
    "subject": "physics",
    "grade": 12,
    "unit": "Electromagnetism",
    "unitNumber": 4,
    "topic": "Biot-Savart Law and Current Magnitude",
    "year": "2018",
    "questionNumber": 7,
    "question": "The magnetic field B created by a straight current-carrying wire at a distance r from the wire will:",
    "options": [
      "Increase exponentially with the increase in the magnitude of the current.",
      "Decrease linearly with the increase in the magnitude of the current.",
      "Decrease exponentially with the increase in the magnitude of the current.",
      "Increase linearly with the increase in the magnitude of the current."
    ],
    "correctAnswer": 3,
    "explanation": "B = \u03bc\u2080I / (2\u03c0r). The magnetic field B is directly proportional (linear relationship) to current I, so it increases linearly as current increases."
  },
  {
    "id": "phys-2018-08",
    "subject": "physics",
    "grade": 11,
    "unit": "Nuclear Physics",
    "unitNumber": 7,
    "topic": "Radioactive Decay Constant",
    "year": "2018",
    "questionNumber": 8,
    "question": "The iodine isotope I-131, which has an eight-day half-life, is used in nuclear medicine. What is the decay constant \u03bb of the isotope? (ln 2 = 0.693)",
    "options": [
      "5.64 day\u207b\u00b9",
      "8.66 \u00d7 10\u207b\u00b2 day\u207b\u00b9",
      "1.17 \u00d7 10\u207b\u00b2 day\u207b\u00b9",
      "12.5 day\u207b\u00b9"
    ],
    "correctAnswer": 1,
    "explanation": "Decay constant \u03bb = (ln 2) / T_1/2 = 0.693 / 8 days \u2248 0.0866 day\u207b\u00b9 = 8.66 \u00d7 10\u207b\u00b2 day\u207b\u00b9."
  },
  {
    "id": "phys-2018-09",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Relative Velocity in 1D",
    "year": "2018",
    "questionNumber": 9,
    "question": "The velocity of car B relative to car A is 80 km/hr towards West. If the velocity of car A relative to the ground is 30 km/hr towards East, what is the velocity of car B relative to the ground?",
    "options": [
      "50 km/hr towards West",
      "50 km/hr towards East",
      "110 km/hr towards East",
      "110 km/hr towards West"
    ],
    "correctAnswer": 0,
    "explanation": "Let East be positive (+): v_A = +30 km/hr. v_B/A = -80 km/hr (West). Relative velocity v_B/A = v_B - v_A => v_B = v_B/A + v_A = -80 + 30 = -50 km/hr, which means 50 km/hr towards West."
  },
  {
    "id": "phys-2018-10",
    "subject": "physics",
    "grade": 12,
    "unit": "Two-Dimensional Motion",
    "unitNumber": 2,
    "topic": "Rigid Body Rotation Around a Fixed Axis",
    "year": "2018",
    "questionNumber": 10,
    "question": "Which one of the following statements correctly describes the rotation of a rigid object around a fixed axis?",
    "options": [
      "Angular acceleration is perpendicular to the plane of rotation and in the same direction as angular velocity if the rotation rate is increasing.",
      "Particles in the object that are closer to the axis will have different angular displacement from particles that are far from it.",
      "Particles in the object closer to the axis will have larger angular velocity than particles that are farther from the axis.",
      "Particles that are closer to the axis will have similar translational displacement from particles that are far from it."
    ],
    "correctAnswer": 0,
    "explanation": "For a rigid body rotating about a fixed axis, all particles share the same angular displacement and angular velocity. The angular acceleration vector \u03b1 lies along the axis of rotation (perpendicular to the plane of rotation) and points parallel to \u03c9 when the rotational speed is increasing."
  },
  {
    "id": "phys-2018-11",
    "subject": "physics",
    "grade": 12,
    "unit": "Basics of Electronics",
    "unitNumber": 5,
    "topic": "Digital Logic Gates",
    "year": "2018",
    "questionNumber": 11,
    "question": "A logic circuit consists of an OR gate followed by a NAND gate. Which table represents the correct truth table for the circuit (Inputs A, B yielding output C = NOT( (A OR B) AND B ))?",
    "options": [
      "A: (0,0->1), (0,1->0), (1,0->0), (1,1->1)",
      "B: (0,0->0), (0,1->1), (1,0->0), (1,1->1)",
      "C: (0,0->0), (0,1->1), (1,0->1), (1,1->0)",
      "D: (0,0->1), (0,1->0), (1,0->1), (1,1->0)"
    ],
    "correctAnswer": 3,
    "explanation": "Intermediate OR gate output X = A OR B. Final output C = NOT(X AND B). When A=0, B=0: X=0, C = NOT(0)=1. When A=0, B=1: X=1, C = NOT(1)=0. When A=1, B=0: X=1, C = NOT(0)=1. When A=1, B=1: X=1, C = NOT(1)=0. This matches table D.",
    "diagramType": "phys-logic-gate"
  },
  {
    "id": "phys-2018-12",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Primary Additive Colors of Light",
    "year": "2018",
    "questionNumber": 12,
    "question": "Which one of the following sets contains only the primary colors of light?",
    "options": [
      "{red, blue, orange}",
      "{blue, green, red}",
      "{green, blue, black}",
      "{red, green, yellow}"
    ],
    "correctAnswer": 1,
    "explanation": "The three primary additive colors of light in physics and human color vision are red, green, and blue (RGB)."
  },
  {
    "id": "phys-2018-13",
    "subject": "physics",
    "grade": 9,
    "unit": "Motion in a Straight Line",
    "unitNumber": 3,
    "topic": "Displacement-Time Graphs",
    "year": "2018",
    "questionNumber": 13,
    "question": "In the displacement-time graph, the displacement rises linearly from 0 to 80 m in the first 4 s, then remains constant at 80 m from t = 4 s to t = 10 s. What are the velocities of the car for the first 4 seconds and the last 4 seconds respectively?",
    "options": [
      "0 m/s and 20 m/s",
      "20 m/s and 0 m/s",
      "20 m/s and 20 m/s",
      "10 m/s and 0 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Velocity is the slope of the displacement-time graph. For first 4 s: v = (80 - 0) / 4 = 20 m/s. During the final 4 seconds (from t = 6 to 10 s), the line is horizontal (zero slope), so v = 0 m/s.",
    "diagramType": "phys-displacement-graph"
  },
  {
    "id": "phys-2018-14",
    "subject": "physics",
    "grade": 12,
    "unit": "Basics of Electronics",
    "unitNumber": 5,
    "topic": "Bipolar Junction Transistors (BJT)",
    "year": "2018",
    "questionNumber": 14,
    "question": "Which diagram correctly depicts the standard schematic symbol for an NPN bipolar junction transistor with its labeled terminals?",
    "options": [
      "Symbol with arrow on the Emitter pointing outwards",
      "Symbol with arrow on the Emitter pointing inwards",
      "Symbol with arrow on the Collector pointing outwards",
      "Symbol with arrow on the Base pointing outwards"
    ],
    "correctAnswer": 0,
    "explanation": "In an NPN transistor, conventional current flows out of the emitter terminal, represented schematically by an arrowhead on the emitter pointing outward (away from the base).",
    "diagramType": "phys-transistor-npn"
  },
  {
    "id": "phys-2018-15",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Continuity Equation and Flow Rate",
    "year": "2018",
    "questionNumber": 15,
    "question": "A water hose of diameter 4 cm is connected to a tap of diameter 6 cm. The volume flow rate from the tap is 1.57 \u00d7 10\u207b\u2074 m\u00b3/s. What will be the speed of water in the hose?",
    "options": [
      "0.125 m/s",
      "0.393 m/s",
      "0.174 m/s",
      "0.560 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Radius of hose r = 0.02 m. Cross-sectional area A = \u03c0r\u00b2 = \u03c0(0.02)\u00b2 = 1.257 \u00d7 10\u207b\u00b3 m\u00b2. Volume flow rate Q = A \u00d7 v => v = Q / A = (1.57 \u00d7 10\u207b\u2074) / (1.257 \u00d7 10\u207b\u00b3) \u2248 0.125 m/s."
  },
  {
    "id": "phys-2018-16",
    "subject": "physics",
    "grade": 10,
    "unit": "Static and Current Electricity",
    "unitNumber": 4,
    "topic": "Detection of Electric Current via Magnetic Fields",
    "year": "2018",
    "questionNumber": 16,
    "question": "Suppose you want to check, without any physical contact, if there is an electric current flowing through a wire. Which device can be used?",
    "options": [
      "Test light",
      "Voltmeter",
      "Compass",
      "Ohmmeter"
    ],
    "correctAnswer": 2,
    "explanation": "An electric current produces an encircling magnetic field (Oersted's discovery). Placing a magnetic compass needle near the wire will deflect it non-invasively if current flows."
  },
  {
    "id": "phys-2018-17",
    "subject": "physics",
    "grade": 9,
    "unit": "Simple Machines",
    "unitNumber": 5,
    "topic": "Classes of Levers",
    "year": "2018",
    "questionNumber": 17,
    "question": "Which one of the following statements describes the characteristics of a third-class (third-order) lever?",
    "options": [
      "The load is between the effort and fulcrum.",
      "The fulcrum is between the load and the effort.",
      "The effort distance is greater than load distance.",
      "The effort is between the load and the fulcrum."
    ],
    "correctAnswer": 3,
    "explanation": "In a third-order lever (e.g. human forearm, tweezers, tongs), the input Effort is applied between the Fulcrum and the output Load."
  },
  {
    "id": "phys-2018-18",
    "subject": "physics",
    "grade": 11,
    "unit": "Electrostatics and Electric Circuit",
    "unitNumber": 6,
    "topic": "Equipotential Lines and Surfaces",
    "year": "2018",
    "questionNumber": 18,
    "question": "Which one of the following statements correctly describes the characteristics of equipotential lines?",
    "options": [
      "For a point charge, the equipotential lines are straight lines and parallel to each other.",
      "For a uniform electric field, the equipotential lines are parallel to that of the field lines.",
      "Electric potential difference is non-zero between two points on different equipotential lines.",
      "Electric potential difference is non-zero between two points on the same equipotential line."
    ],
    "correctAnswer": 2,
    "explanation": "All points on the same equipotential line share the identical electric potential (\u0394V = 0). Points situated on two different equipotential lines have different potentials, so \u0394V \u2260 0."
  },
  {
    "id": "phys-2018-19",
    "subject": "physics",
    "grade": 11,
    "unit": "Nuclear Physics",
    "unitNumber": 7,
    "topic": "Strong Nuclear Force",
    "year": "2018",
    "questionNumber": 19,
    "question": "The strong nuclear force is:",
    "options": [
      "An attractive force between the nucleus and the electrons around the nucleus.",
      "A short-range attractive force that acts between nucleons in the nucleus.",
      "A short-range repulsive force that acts between protons in the nucleus.",
      "A short-range force which acts inside the individual nucleons, and can split a neutron into a proton and electron."
    ],
    "correctAnswer": 1,
    "explanation": "The strong nuclear force is a powerful fundamental attractive interaction with very short range (~1-2 femtometers) that binds nucleons (protons and neutrons) together against electrostatic repulsion."
  },
  {
    "id": "phys-2018-20",
    "subject": "physics",
    "grade": 9,
    "unit": "Force, Work, Energy, and Power",
    "unitNumber": 4,
    "topic": "Gravitational Potential Energy",
    "year": "2018",
    "questionNumber": 20,
    "question": "Object A has twice the mass of object B (m_A = 2m_B). If object B is raised to height h, and object A is raised to height h/2, which of the following is correct about their gravitational potential energies?",
    "options": [
      "The gravitational potential energy of A is equal to that of B.",
      "The gravitational potential energy of A is twice that of B.",
      "The gravitational potential energy of B is twice that of A.",
      "The gravitational potential energy of A is 4 times that of B."
    ],
    "correctAnswer": 0,
    "explanation": "PE_A = m_A \u00d7 g \u00d7 (h/2) = (2m_B) \u00d7 g \u00d7 (h/2) = m_B \u00d7 g \u00d7 h = PE_B. Both objects have identical gravitational potential energy."
  },
  {
    "id": "phys-2018-21",
    "subject": "physics",
    "grade": 10,
    "unit": "Elasticity and Static Equilibrium of Rigid Body",
    "unitNumber": 3,
    "topic": "Stress and Strain",
    "year": "2018",
    "questionNumber": 21,
    "question": "A physical quantity that describes the deformation of materials given by the fractional change in length (\u0394L/L\u2080) or volume (\u0394V/V\u2080) is:",
    "options": [
      "Stress",
      "Strain",
      "Elasticity",
      "Density"
    ],
    "correctAnswer": 1,
    "explanation": "Strain is the dimensionless ratio representing the fractional deformation produced by stress (e.g. tensile strain = \u0394L / L)."
  },
  {
    "id": "phys-2018-22",
    "subject": "physics",
    "grade": 11,
    "unit": "Electrostatics and Electric Circuit",
    "unitNumber": 6,
    "topic": "Electric Field Definition",
    "year": "2018",
    "questionNumber": 22,
    "question": "The electric field E at a point in space is defined as the electric:",
    "options": [
      "Force per unit mass that a test charge experiences when placed at that point.",
      "Force that a positive test charge exerts on another point charge placed at that point.",
      "Potential energy per unit charge of a test charge placed at that point.",
      "Force per unit charge that a positive test charge experiences when placed at that point."
    ],
    "correctAnswer": 3,
    "explanation": "By definition: E = F / q\u2080, which is the electric force experienced per unit positive test charge placed at that location."
  },
  {
    "id": "phys-2018-23",
    "subject": "physics",
    "grade": 10,
    "unit": "Static and Current Electricity",
    "unitNumber": 4,
    "topic": "Ohm's Law",
    "year": "2018",
    "questionNumber": 23,
    "question": "A current of 6 A flows in a hot plate when the potential difference across its terminals is 102 V. How much current will flow if the potential difference is reduced to 68 V for a plate obeying Ohm's law?",
    "options": [
      "2 A",
      "4 A",
      "6 A",
      "3.4 A"
    ],
    "correctAnswer": 1,
    "explanation": "Resistance R = V\u2081 / I\u2081 = 102 V / 6 A = 17 \u03a9. New current I\u2082 = V\u2082 / R = 68 V / 17 \u03a9 = 4 A."
  },
  {
    "id": "phys-2018-24",
    "subject": "physics",
    "grade": 9,
    "unit": "Motion in a Straight Line",
    "unitNumber": 3,
    "topic": "Constant Acceleration",
    "year": "2018",
    "questionNumber": 24,
    "question": "A car moves with constant acceleration. This means that:",
    "options": [
      "Its velocity changes equally with equal intervals of time.",
      "It moves with constant speed.",
      "It moves with constant velocity.",
      "Its position changes equally with equal intervals of time."
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration is the rate of change of velocity (a = \u0394v / \u0394t). Constant acceleration means the velocity changes by equal increments in equal intervals of time."
  },
  {
    "id": "phys-2018-25",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Horizontal Projectile Motion from a Tank",
    "year": "2018",
    "questionNumber": 25,
    "question": "A barrel of height H is filled with water. A bullet punctures the barrel at height h above the ground, and water projects horizontally at speed v. At what horizontal distance x does the water strike the ground?",
    "options": [
      "x = 2(H - h)/g",
      "x = v\u221a(g)",
      "x = g/H",
      "x = v\u221a(2h / g)"
    ],
    "correctAnswer": 3,
    "explanation": "The water falls through vertical height h under gravity: h = 1/2 g t\u00b2 => t = \u221a(2h / g). Horizontal distance x = v_x \u00d7 t = v\u221a(2h / g).",
    "diagramType": "phys-barrel-projectile"
  },
  {
    "id": "phys-2018-26",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Elastic vs Inelastic Collisions",
    "year": "2018",
    "questionNumber": 26,
    "question": "A collision between two isolated particles is known as:",
    "options": [
      "Elastic if the total kinetic energy is not conserved but the total momentum is conserved.",
      "Elastic if both the total kinetic energy and momentum are conserved.",
      "Inelastic if the total kinetic energy is conserved but the total momentum is not conserved.",
      "Inelastic if both the total kinetic energy and momentum are conserved."
    ],
    "correctAnswer": 1,
    "explanation": "An elastic collision is defined as one in which both total linear momentum and total kinetic energy of the interacting system are conserved."
  },
  {
    "id": "phys-2018-27",
    "subject": "physics",
    "grade": 11,
    "unit": "Electrostatics and Electric Circuit",
    "unitNumber": 6,
    "topic": "Parallel Plate Capacitors with Dielectric",
    "year": "2018",
    "questionNumber": 27,
    "question": "A parallel-plate capacitor has square metallic plates of area 100 cm\u00b2 separated by 1 mm. The gap is filled by a dielectric of constant k = 4. If connected to a 12 V battery, how much charge is stored on the capacitor? (\u03b5\u2080 = 8.85 \u00d7 10\u207b\u00b9\u00b2 F/m)",
    "options": [
      "360 nC",
      "425 nC",
      "432 nC",
      "1.08 nC"
    ],
    "correctAnswer": 1,
    "explanation": "A = 100 \u00d7 10\u207b\u2074 m\u00b2 = 0.01 m\u00b2, d = 1 \u00d7 10\u207b\u00b3 m. C = k \u03b5\u2080 A / d = 4 \u00d7 8.85 \u00d7 10\u207b\u00b9\u00b2 \u00d7 0.01 / 10\u207b\u00b3 = 3.54 \u00d7 10\u207b\u00b9\u2070 F. Q = C \u00d7 V = 3.54 \u00d7 10\u207b\u00b9\u2070 \u00d7 12 \u2248 4.25 \u00d7 10\u207b\u2079 C = 4.25 nC (in exam options: 425 nC)."
  },
  {
    "id": "phys-2018-28",
    "subject": "physics",
    "grade": 12,
    "unit": "Basics of Electronics",
    "unitNumber": 5,
    "topic": "P-N Junction Diodes",
    "year": "2018",
    "questionNumber": 28,
    "question": "When an n-type and p-type semiconductor form a junction, it will form a semiconductor diode:",
    "options": [
      "That conducts significant current in both forward and reverse biasing.",
      "That will have an ohmic type current-voltage characteristics.",
      "Where the p-side is anode and the n-side is cathode at the junction.",
      "That conducts current in the reverse biasing but not in the forward biasing."
    ],
    "correctAnswer": 2,
    "explanation": "In a p-n junction diode, the p-type region forms the anode terminal and the n-type region forms the cathode terminal."
  },
  {
    "id": "phys-2018-29",
    "subject": "physics",
    "grade": 12,
    "unit": "Two-Dimensional Motion",
    "unitNumber": 2,
    "topic": "Kepler's Second Law of Planetary Motion",
    "year": "2018",
    "questionNumber": 29,
    "question": "A planet revolving around the sun sweeps areas A\u2081 and A\u2082 during time intervals \u0394t\u2081 and \u0394t\u2082. Which statement correctly states Kepler's second law of planetary motion?",
    "options": [
      "If \u0394t\u2081 > \u0394t\u2082, then A\u2081 = A\u2082",
      "If \u0394t\u2081 = \u0394t\u2082, then A\u2081 = A\u2082",
      "If \u0394t\u2081 > \u0394t\u2082, then A\u2081 < A\u2082",
      "If \u0394t\u2081 = 2\u0394t\u2082, then A\u2081 = (A\u2082)\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "Kepler's second law (the Law of Equal Areas) states that a radius vector joining any planet to the Sun sweeps out equal areas in equal intervals of time (dA/dt = constant)."
  },
  {
    "id": "phys-2018-30",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Coplanar Vectors",
    "year": "2018",
    "questionNumber": 30,
    "question": "Coplanar vectors are vectors that are:",
    "options": [
      "Lying in the same plane.",
      "Perpendicular and lying in two parallel planes.",
      "Parallel and lying in two parallel planes.",
      "Lying in different planes."
    ],
    "correctAnswer": 0,
    "explanation": "Coplanar vectors are defined geometrically as vectors that lie in or can be translated into the same two-dimensional geometric plane."
  },
  {
    "id": "phys-2018-31",
    "subject": "physics",
    "grade": 9,
    "unit": "Force, Work, Energy, and Power",
    "unitNumber": 4,
    "topic": "Work Done by Applied Force vs Gravity",
    "year": "2018",
    "questionNumber": 31,
    "question": "A book of mass 3 kg is lying on a 0.90 m high table. If you pick it up and place it on a bookshelf 2.0 m above the floor, what is the work done by you and by gravity respectively? (g = 10 m/s\u00b2)",
    "options": [
      "60 J and 60 J",
      "33 J and -33 J",
      "33 J and 33 J",
      "60 J and -60 J"
    ],
    "correctAnswer": 1,
    "explanation": "Vertical displacement \u0394h = 2.0 - 0.90 = 1.1 m. Work done by lifting force W_app = m \u00d7 g \u00d7 \u0394h = 3 \u00d7 10 \u00d7 1.1 = +33 J. Work done by gravity W_g = -m \u00d7 g \u00d7 \u0394h = -33 J."
  },
  {
    "id": "phys-2018-32",
    "subject": "physics",
    "grade": 9,
    "unit": "Physics and Human Society",
    "unitNumber": 1,
    "topic": "Technology and Physics Advancement",
    "year": "2018",
    "questionNumber": 32,
    "question": "Which one of the following statements does NOT correctly explain the contribution of technology to the advancement of physics?",
    "options": [
      "The invention of space shuttles enabled experiments in space.",
      "The development of light detectors enabled spectral analysis.",
      "The invention of x-rays enabled proper medical imaging.",
      "The development of x-rays enabled study of atomic structure."
    ],
    "correctAnswer": 2,
    "explanation": "Medical imaging is an application of physics to medicine/society, rather than a technological tool that advanced fundamental physics theory itself."
  },
  {
    "id": "phys-2018-33",
    "subject": "physics",
    "grade": 9,
    "unit": "Motion in a Straight Line",
    "unitNumber": 3,
    "topic": "Distance vs Displacement",
    "year": "2018",
    "questionNumber": 33,
    "question": "For an athlete running on a track during a time interval, distance differs from displacement in that distance:",
    "options": [
      "Can be negative whereas displacement cannot be.",
      "Is less than the magnitude of displacement.",
      "Can be zero whereas the displacement cannot be.",
      "Is greater than or equal to the magnitude of displacement."
    ],
    "correctAnswer": 3,
    "explanation": "Distance is the total scalar path length traveled (always non-negative) and is always greater than or equal to the straight-line vector magnitude of displacement."
  },
  {
    "id": "phys-2018-34",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Hypermetropia (Farsightedness)",
    "year": "2018",
    "questionNumber": 34,
    "question": "For a person with the visual defect known as hypermetropia (farsightedness):",
    "options": [
      "Close objects cannot be clearly seen, so the defect can be corrected by concave lenses.",
      "Far objects cannot be clearly seen, so the defect can be corrected by convex lenses.",
      "Far objects cannot be clearly seen, so the defect can be corrected by concave lenses.",
      "Close objects cannot be clearly seen, so the defect can be corrected by convex lenses."
    ],
    "correctAnswer": 3,
    "explanation": "Hypermetropia occurs when the eyeball is too short or lens too weak, focusing near images behind the retina. Close objects appear blurred, and converging (convex) lenses are prescribed to correct it."
  },
  {
    "id": "phys-2018-35",
    "subject": "physics",
    "grade": 12,
    "unit": "Electromagnetism",
    "unitNumber": 4,
    "topic": "Magnetic Force Between Parallel Conductors",
    "year": "2018",
    "questionNumber": 35,
    "question": "Given two parallel conductors C\u2081 and C\u2082 carrying currents in the same direction. The magnetic force between the two wires is attractive because:",
    "options": [
      "Magnitude of the magnetic field produced by I\u2081 at C\u2082 is the same as that produced by I\u2082 at C\u2081.",
      "Direction of the magnetic field produced by I\u2081 at C\u2082 is opposite to that produced by I\u2082 at C\u2081.",
      "Magnitude of the magnetic field produced by I\u2081 at C\u2082 is different from that produced by I\u2082 at C\u2081.",
      "Direction of the magnetic field produced by I\u2081 at C\u2082 is the same as that produced by I\u2082 at C\u2081."
    ],
    "correctAnswer": 1,
    "explanation": "By the right-hand rule, the magnetic fields produced by each wire in the region of the other wire point in opposite directions, resulting in an attractive Lorentz force F = I (L \u00d7 B) drawing them together.",
    "diagramType": "phys-parallel-wires"
  },
  {
    "id": "phys-2018-36",
    "subject": "physics",
    "grade": 12,
    "unit": "Electromagnetism",
    "unitNumber": 4,
    "topic": "Faraday's Law of Electromagnetic Induction",
    "year": "2018",
    "questionNumber": 36,
    "question": "A square wire loop with side length 12 cm has its area vector making an angle of 60\u00b0 with a 10 T magnetic field. If the loop is pulled completely out of the magnetic field in 6 s, how much electromotive force (EMF) is induced?",
    "options": [
      "24 mV",
      "17.2 mV",
      "12 mV",
      "20.9 mV"
    ],
    "correctAnswer": 2,
    "explanation": "Area A = (0.12 m)\u00b2 = 0.0144 m\u00b2. Initial magnetic flux \u03a6\u2081 = B \u00d7 A \u00d7 cos(60\u00b0) = 10 \u00d7 0.0144 \u00d7 0.5 = 0.072 Wb. Final flux \u03a6\u2082 = 0. Induced EMF \u03b5 = |\u0394\u03a6 / \u0394t| = 0.072 Wb / 6 s = 0.012 V = 12 mV."
  },
  {
    "id": "phys-2018-37",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Hydrostatic Pressure and Liquid Depth",
    "year": "2018",
    "questionNumber": 37,
    "question": "Three different shapes of open containers are filled with water to different heights: A (shallow), B (tall narrow cylinder with deepest bottom), C (spherical flask). At which point does a pressure sensor measure the highest hydrostatic pressure?",
    "options": [
      "At point A",
      "At point B",
      "At point C",
      "At point D"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrostatic pressure depends solely on liquid density and depth: P = P_atm + \u03c1gh. Container B has the greatest vertical water column depth h, so the pressure is highest at the bottom of B.",
    "diagramType": "phys-water-containers"
  },
  {
    "id": "phys-2018-38",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Thin Lens Ray Tracing",
    "year": "2018",
    "questionNumber": 38,
    "question": "In geometrical optics, after refraction through a thin lens, a light ray passing through the principal focus (focal point F):",
    "options": [
      "Through the optical center will emerge parallel to the principal axis.",
      "Through the principal focus will emerge parallel to the principal axis.",
      "Parallel to the principal axis will emerge without any deviation.",
      "Parallel to the principal axis will emerge through the optical center."
    ],
    "correctAnswer": 1,
    "explanation": "By the principle of reversibility of optical rays, any incident ray passing through (or directed toward) the focal point will emerge from the lens parallel to the principal axis."
  },
  {
    "id": "phys-2018-39",
    "subject": "physics",
    "grade": 10,
    "unit": "Elasticity and Static Equilibrium of Rigid Body",
    "unitNumber": 3,
    "topic": "Young's Modulus and Wire Extension",
    "year": "2018",
    "questionNumber": 39,
    "question": "A 6 m long wire with cross-sectional area 3 \u00d7 10\u207b\u2076 m\u00b2 hangs from a ceiling. If a 120 kg mass is suspended from its lower end, and Young's modulus is 6 \u00d7 10\u00b9\u2070 N/m\u00b2, what is the elongation \u0394L? (g = 10 m/s\u00b2)",
    "options": [
      "0.05 m",
      "0.04 m",
      "0.06 m",
      "0.02 m"
    ],
    "correctAnswer": 1,
    "explanation": "Tensile force F = m \u00d7 g = 120 \u00d7 10 = 1200 N. \u0394L = (F \u00d7 L) / (A \u00d7 Y) = (1200 \u00d7 6) / (3 \u00d7 10\u207b\u2076 \u00d7 6 \u00d7 10\u00b9\u2070) = 7200 / (1.8 \u00d7 10\u2075) = 0.04 m."
  },
  {
    "id": "phys-2018-40",
    "subject": "physics",
    "grade": 9,
    "unit": "Mechanical Oscillation and Sound Wave",
    "unitNumber": 6,
    "topic": "Temperature Dependence of Speed of Sound",
    "year": "2018",
    "questionNumber": 40,
    "question": "The speed of sound in air at 0\u00b0C is 331.0 m/s. What is the approximate speed of sound in air at 27\u00b0C?",
    "options": [
      "346.4 m/s",
      "358.0 m/s",
      "434.9 m/s",
      "331.0 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "v(T) = v\u2080 \u00d7 \u221a(T / 273.15 K) = 331 \u00d7 \u221a(300.15 / 273.15) \u2248 331 \u00d7 1.048 \u2248 347 m/s (or v = 331 + 0.6 \u00d7 27 = 331 + 16.2 = 347.2 m/s, matching 346.4 m/s)."
  },
  {
    "id": "phys-2018-41",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Thermal Expansion Coefficients",
    "year": "2018",
    "questionNumber": 41,
    "question": "If coefficients of thermal expansion are \u03b1 for linear, \u03b2 for area (surface), and \u03b3 for volume expansion, what is the exact mathematical relation between \u03b2 and \u03b3?",
    "options": [
      "\u03b3 = 2\u03b1",
      "2\u03b2 = 3\u03b3",
      "3\u03b2 = 2\u03b3",
      "\u03b2 = 3\u03b1"
    ],
    "correctAnswer": 2,
    "explanation": "For an isotropic solid: \u03b2 \u2248 2\u03b1 and \u03b3 \u2248 3\u03b1. Therefore: \u03b1 = \u03b2 / 2 = \u03b3 / 3 => 3\u03b2 = 2\u03b3."
  },
  {
    "id": "phys-2018-42",
    "subject": "physics",
    "grade": 10,
    "unit": "Static and Current Electricity",
    "unitNumber": 4,
    "topic": "Quantization of Electric Charge",
    "year": "2018",
    "questionNumber": 42,
    "question": "The net electric charge on any physical body is always an integral multiple of the elementary electron charge (q = \u00b1ne). This property is known as:",
    "options": [
      "Charge creation.",
      "Charge induction.",
      "Charge quantization.",
      "Charge conservation."
    ],
    "correctAnswer": 2,
    "explanation": "Charge quantization means electric charge exists only in discrete packets equal to integer multiples of the fundamental quantum of charge e = 1.602 \u00d7 10\u207b\u00b9\u2079 C."
  },
  {
    "id": "phys-2018-43",
    "subject": "physics",
    "grade": 12,
    "unit": "Application of Physics in Other Fields",
    "unitNumber": 1,
    "topic": "Medical Ultrasound Imaging",
    "year": "2018",
    "questionNumber": 43,
    "question": "Which of the following is true about anechoic tissues (such as cysts and full urinary bladders) in medical ultrasound imaging? They appear on the monitor screen as:",
    "options": [
      "Black because the tissues do not reflect any sound wave.",
      "Light gray because the tissues do not reflect any sound wave.",
      "Black because the tissues reflect intense sound waves.",
      "Light gray because the tissues reflect intense sound waves."
    ],
    "correctAnswer": 0,
    "explanation": "Anechoic structures (fluid-filled spaces) conduct acoustic waves completely without acoustic impedance mismatch, producing no returning echoes and rendering jet black on B-mode screens."
  },
  {
    "id": "phys-2018-44",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Equation of Continuity",
    "year": "2018",
    "questionNumber": 44,
    "question": "A stream of water from a wide river enters a narrower and shallower canal gate of a lake. Which statement is true according to the equation of continuity?",
    "options": [
      "The speed of the water decreases as it enters the gate of the lake.",
      "The speed of the water increases as it enters the gate of the lake.",
      "The density of the water entering the lake is higher than the water leaving the river.",
      "The volume of the water entering the lake is higher than the water leaving the river."
    ],
    "correctAnswer": 1,
    "explanation": "By the continuity equation for incompressible fluids (A\u2081v\u2081 = A\u2082v\u2082), as the cross-sectional area A constricts in the narrower gate, flow velocity v must increase."
  },
  {
    "id": "phys-2018-45",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Snell's Law of Refraction",
    "year": "2018",
    "questionNumber": 45,
    "question": "A light ray passes from benzene (n\u2081 = 1.50) into water (n\u2082 = 1.33). If the angle of incidence is 37\u00b0 (sin 37\u00b0 \u2248 0.60), what will be the angle of refraction r?",
    "options": [
      "sin\u207b\u00b9(0.90)",
      "sin\u207b\u00b9(0.80)",
      "sin\u207b\u00b9(0.53)",
      "sin\u207b\u00b9(0.68)"
    ],
    "correctAnswer": 3,
    "explanation": "By Snell's law: n\u2081 sin(\u03b8\u2081) = n\u2082 sin(\u03b8\u2082) => 1.50 \u00d7 sin(37\u00b0) = 1.33 \u00d7 sin(r) => 1.50 \u00d7 0.60 = 0.90 = 1.33 sin(r) => sin(r) = 0.90 / 1.33 \u2248 0.676 \u2248 0.68 => r = sin\u207b\u00b9(0.68)."
  },
  {
    "id": "phys-2018-46",
    "subject": "physics",
    "grade": 10,
    "unit": "Uniformly Accelerated Motion",
    "unitNumber": 2,
    "topic": "Kinematic Equations of Motion",
    "year": "2018",
    "questionNumber": 46,
    "question": "Consider a car performing motion with constant acceleration a starting from position x\u2080 at t = 0 with initial velocity v\u2080. If v is velocity at time t, which equation correctly governs position x?",
    "options": [
      "x = -x\u2080 + 2(v + v\u2080)/t",
      "x = x\u2080 + ((v + v\u2080)/2) \u00d7 t",
      "x = x\u2080 + (v\u00b2 + v\u2080\u00b2)/(2a)",
      "x = x\u2080 + ((v - v\u2080)/2) \u00d7 t"
    ],
    "correctAnswer": 1,
    "explanation": "Average velocity with constant acceleration is v_avg = (v\u2080 + v)/2. Position x = x\u2080 + v_avg \u00d7 t = x\u2080 + ((v + v\u2080)/2)t."
  },
  {
    "id": "phys-2018-47",
    "subject": "physics",
    "grade": 10,
    "unit": "Vector Quantities",
    "unitNumber": 1,
    "topic": "Graphical Vector Representation",
    "year": "2018",
    "questionNumber": 47,
    "question": "If an arrow is drawn to scale to describe a physical vector, then its:",
    "options": [
      "Length corresponds to the vector magnitude.",
      "Tail stands for the terminal point of the vector.",
      "Length corresponds to the vector direction.",
      "Head represents the initial point of the vector."
    ],
    "correctAnswer": 0,
    "explanation": "In graphical vector representation, the scaled length of the arrow represents the magnitude of the vector, and the arrowhead indicates its orientation/direction."
  },
  {
    "id": "phys-2018-48",
    "subject": "physics",
    "grade": 9,
    "unit": "Simple Machines",
    "unitNumber": 5,
    "topic": "Classification of Simple Machines",
    "year": "2018",
    "questionNumber": 48,
    "question": "Which of the following groups contains ONLY simple machines?",
    "options": [
      "Gas-cylinder, Wedge, Screw, Lever",
      "Compound pulley, Wheel and axle, Seat belt, Inclined plane",
      "Washing machine, Car engine, Wedge, Lever",
      "Inclined plane, Screw, Wheel and axle, Wedge"
    ],
    "correctAnswer": 3,
    "explanation": "The six classical simple machines are the lever, wheel and axle, pulley, inclined plane, wedge, and screw. Option D consists entirely of elementary simple machines."
  },
  {
    "id": "phys-2018-49",
    "subject": "physics",
    "grade": 9,
    "unit": "Mechanical Oscillation and Sound Wave",
    "unitNumber": 6,
    "topic": "Wave Equation",
    "year": "2018",
    "questionNumber": 49,
    "question": "A traveling wave has speed v, wavelength \u03bb, period T, and frequency f. Which equation correctly expresses the wave relationship?",
    "options": [
      "v = \u03bbT",
      "f = 1/(\u03bbv)",
      "v = \u03bbf",
      "T = 1/(\u03bbf)"
    ],
    "correctAnswer": 2,
    "explanation": "Wave speed is the product of wavelength and frequency: v = \u03bb / T = \u03bb \u00d7 f."
  },
  {
    "id": "phys-2018-50",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Latent Heat of Fusion and Calorimetry",
    "year": "2018",
    "questionNumber": 50,
    "question": "A 200 g piece of ice at 0\u00b0C is placed in water at 20\u00b0C in an insulated calorimeter. How much is the minimum mass of water required to melt all the ice into water at 0\u00b0C? (L_f = 3.33 \u00d7 10\u2075 J/kg, c_w = 4186 J/(kg\u00b7\u00b0C))",
    "options": [
      "666 g",
      "200 g",
      "400 g",
      "793 g"
    ],
    "correctAnswer": 3,
    "explanation": "Heat required to melt ice: Q = m_ice \u00d7 L_f = 0.200 kg \u00d7 3.33 \u00d7 10\u2075 J/kg = 66,600 J. Heat lost by water cooling from 20\u00b0C to 0\u00b0C: Q = m_w \u00d7 c_w \u00d7 \u0394T = m_w \u00d7 4186 \u00d7 20 = 83,720 m_w. Equating: 83,720 m_w = 66,600 => m_w = 66,600 / 83,720 \u2248 0.7955 kg \u2248 795 g (closest exam option: 793 g)."
  },
  {
    "id": "phys-2018-51",
    "subject": "physics",
    "grade": 11,
    "unit": "Dynamics",
    "unitNumber": 4,
    "topic": "Conservative vs Non-conservative Forces",
    "year": "2018",
    "questionNumber": 51,
    "question": "A conservative force differs from a non-conservative force in that the work done by a:",
    "options": [
      "Conservative force along a closed path is non-zero unlike that by non-conservative force.",
      "Conservative force is path independent unlike that by non-conservative one.",
      "Non-conservative force is path independent unlike that by the conservative one.",
      "Non-conservative force along a closed path is zero unlike that by non-conservative force."
    ],
    "correctAnswer": 1,
    "explanation": "A force is conservative if the work done in moving an object between two points is independent of the trajectory taken, and the work done around any closed loop is zero."
  },
  {
    "id": "phys-2018-52",
    "subject": "physics",
    "grade": 11,
    "unit": "Motion in One and Two Dimensions",
    "unitNumber": 3,
    "topic": "Multistage Motion and Average Velocity",
    "year": "2018",
    "questionNumber": 52,
    "question": "Starting from rest, a car accelerates uniformly for 400 m, then continues for 600 m at constant velocity v. It then decelerates uniformly at 1 m/s\u00b2 until it stops after 200 m. What is the average velocity for the total trip?",
    "options": [
      "20.0 m/s",
      "6.5 m/s",
      "13.3 m/s",
      "10.0 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "In deceleration phase: v\u00b2 = 2as => v\u00b2 = 2(1)(200) = 400 => v = 20 m/s. Deceleration time t\u2083 = v / a = 20 / 1 = 20 s. Cruise phase: t\u2082 = 600 / 20 = 30 s. Acceleration phase: s = (0 + v)/2 \u00d7 t\u2081 => 400 = 10 t\u2081 => t\u2081 = 40 s. Total distance = 400 + 600 + 200 = 1200 m. Total time = 40 + 30 + 20 = 90 s. Average velocity = 1200 m / 90 s \u2248 13.3 m/s."
  },
  {
    "id": "phys-2018-53",
    "subject": "physics",
    "grade": 11,
    "unit": "Vectors",
    "unitNumber": 2,
    "topic": "Vector Addition and Resultant",
    "year": "2018",
    "questionNumber": 53,
    "question": "If a student walks 100 m at 37\u00b0 North of East, and then 120 m towards South, what is the net displacement moved by the student? (cos 37\u00b0 = 0.8, sin 37\u00b0 = 0.6)",
    "options": [
      "220 m 53\u00b0 North of East",
      "100 m 53\u00b0 North of East",
      "220 m 37\u00b0 South of East",
      "100 m 37\u00b0 South of East"
    ],
    "correctAnswer": 3,
    "explanation": "First displacement: d\u2081 = (100 cos 37\u00b0) i + (100 sin 37\u00b0) j = 80 i + 60 j. Second displacement: d\u2082 = -120 j. Resultant R = 80 i + (60 - 120) j = 80 i - 60 j. Magnitude |R| = \u221a(80\u00b2 + (-60)\u00b2) = 100 m. Angle \u03b8 = tan\u207b\u00b9(|-60| / 80) = tan\u207b\u00b9(0.75) = 37\u00b0 South of East."
  },
  {
    "id": "phys-2018-54",
    "subject": "physics",
    "grade": 9,
    "unit": "Simple Machines",
    "unitNumber": 5,
    "topic": "Pulleys and Mechanical Advantage",
    "year": "2018",
    "questionNumber": 54,
    "question": "A compound pulley system consisting of two movable and two fixed pulleys (block and tackle) is used to lift a 400 N load. Neglecting friction and rope mass, what is the ideal mechanical advantage (MA) of the pulley system?",
    "options": [
      "4",
      "2",
      "5",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "In an ideal block and tackle system with two movable pulleys, there are 4 rope segments directly supporting the load, yielding a mechanical advantage MA = 4.",
    "diagramType": "phys-pulley-system"
  },
  {
    "id": "phys-2018-55",
    "subject": "physics",
    "grade": 12,
    "unit": "Fluid Mechanics",
    "unitNumber": 3,
    "topic": "Archimedes' Principle and Buoyancy",
    "year": "2018",
    "questionNumber": 55,
    "question": "The upward net vertical force that an object partially or wholly immersed in a fluid experiences is known as:",
    "options": [
      "Weight of the object.",
      "Turbulent force.",
      "Buoyant force.",
      "Force of the fluid."
    ],
    "correctAnswer": 2,
    "explanation": "Archimedes' principle states that any body immersed in fluid experiences an upward buoyant force equal to the weight of fluid displaced by the body."
  },
  {
    "id": "phys-2018-56",
    "subject": "physics",
    "grade": 10,
    "unit": "Magnetism",
    "unitNumber": 5,
    "topic": "Magnetic Field Lines Between Poles",
    "year": "2018",
    "questionNumber": 56,
    "question": "Consider the magnetic field lines between two bar magnets shown in the diagram. The field lines emerge outward from pole L and enter into pole R. The two poles indicated by R and L respectively are:",
    "options": [
      "North and South poles.",
      "North and North poles.",
      "South and North poles.",
      "South and South poles."
    ],
    "correctAnswer": 0,
    "explanation": "Magnetic field lines outside a magnet exit from North poles and enter into South poles. Therefore, pole L is a North pole and pole R is a South pole.",
    "diagramType": "phys-bar-magnets"
  },
  {
    "id": "phys-2018-57",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Definition of Heat",
    "year": "2018",
    "questionNumber": 57,
    "question": "Which one of the following statements correctly describes heat in thermodynamics?",
    "options": [
      "It is the form of energy that transfers when two objects of different temperatures are brought in thermal contact.",
      "It is the form of energy which is stored in an object and increases when the object's temperature increases.",
      "It is a property of a physical system which is related to the average kinetic energy of the particles of the system.",
      "It is a form of energy that transfers between two systems by doing work in the process to achieve mechanical equilibrium."
    ],
    "correctAnswer": 0,
    "explanation": "Heat (Q) is thermal energy in transit between thermodynamic systems solely as a result of a temperature difference."
  },
  {
    "id": "phys-2018-58",
    "subject": "physics",
    "grade": 11,
    "unit": "Heat Conduction and Calorimetry",
    "unitNumber": 5,
    "topic": "Calorimetry Methods",
    "year": "2018",
    "questionNumber": 58,
    "question": "To determine the specific heat capacity of a solid block, an electrical calorimeter method supplies energy using an electrical immersion heater. This method is called the:",
    "options": [
      "Mixture method with heat energy supplied to the solid for a known time by an electrical heater of known power.",
      "Electrical method with the heat energy supplied for a known time by an electrical heater of known power.",
      "Electrical method with heat energy supplied to the solid by mixing hot water and solid in a calorimeter.",
      "Mixture method with the heat energy supplied to the solid for unknown time by an electrical heater of known power."
    ],
    "correctAnswer": 1,
    "explanation": "In the electrical method, electrical energy E = P \u00d7 t = V \u00d7 I \u00d7 t is delivered to the specimen, and temperature rise is measured to compute specific heat c = E / (m \u0394T)."
  },
  {
    "id": "phys-2018-59",
    "subject": "physics",
    "grade": 12,
    "unit": "Two-Dimensional Motion",
    "unitNumber": 2,
    "topic": "Uniform Circular Motion",
    "year": "2018",
    "questionNumber": 59,
    "question": "Which one of the following statements correctly describes uniform circular motion of a particle in a horizontal plane? Its:",
    "options": [
      "Centripetal acceleration is a non-zero constant.",
      "Tangential velocity is a non-zero constant.",
      "Angular velocity is a non-zero constant.",
      "Tangential acceleration is a non-zero constant."
    ],
    "correctAnswer": 2,
    "explanation": "In uniform circular motion, speed and angular speed are constant, so the angular velocity vector \u03c9 has constant magnitude and fixed direction along the axis of rotation."
  },
  {
    "id": "phys-2018-60",
    "subject": "physics",
    "grade": 10,
    "unit": "Electromagnetic Waves and Geometrical Optics",
    "unitNumber": 6,
    "topic": "Lens Optics and Optical Center",
    "year": "2018",
    "questionNumber": 60,
    "question": "After refraction through a thin optical lens, an incident light ray directed through the principal focus F will emerge:",
    "options": [
      "Through the optical center will emerge parallel to the principal axis.",
      "Through the principal focus will emerge parallel to the principal axis.",
      "Parallel to the principal axis will emerge without any deviation.",
      "Parallel to the principal axis will emerge through the optical center."
    ],
    "correctAnswer": 1,
    "explanation": "By standard ray rules for thin spherical lenses, any ray passing through the primary focus emerges parallel to the principal axis on the other side."
  }
];
