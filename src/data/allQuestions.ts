import { CategoryNode, CurriculumUnit, ExamPaperMeta, ExamYear, Question, SubjectId } from '../types';
import { APTITUDE_QUESTIONS } from './questions/aptitude';
import { BIOLOGY_QUESTIONS } from './questions/biology';
import { CHEMISTRY_QUESTIONS } from './questions/chemistry';
import { ENGLISH_QUESTIONS } from './questions/english';
import { MATHS_NAT_QUESTIONS } from './questions/mathsNat';
import { MATHS_SOC_QUESTIONS } from './questions/mathsSoc';
import { PHYSICS_QUESTIONS } from './questions/physics';
import { SUBJECT_CONFIGS } from './subjectConfig';

/**
 * All verified authentic questions
 */
export const ALL_QUESTIONS: Question[] = [
  ...BIOLOGY_QUESTIONS,
  ...CHEMISTRY_QUESTIONS,
  ...PHYSICS_QUESTIONS,
  ...MATHS_NAT_QUESTIONS,
  ...MATHS_SOC_QUESTIONS,
  ...ENGLISH_QUESTIONS,
  ...APTITUDE_QUESTIONS,
];

/**
 * ETHIOPIAN NEW CURRICULUM: NATURAL SCIENCE & MATHEMATICS UNIT TITLES (GRADES 9–12)
 * Matches the official curriculum unit titles provided by the user.
 */
export const CURRICULUM_UNITS: Record<SubjectId, CurriculumUnit[]> = {
  biology: [
    // Grade 12
    { id: 'bio-g12-u1', subject: 'biology', grade: 12, unitNumber: 1, title: 'Application of Biology', topics: ['Biological Research in Ethiopia', 'Microscopy and Resolution', 'Biotechnology Applications'] },
    { id: 'bio-g12-u2', subject: 'biology', grade: 12, unitNumber: 2, title: 'Microorganisms', topics: ['Bacterial Characteristics', 'Viral Diseases', 'Fungal Pathogens', 'Koch Postulates'] },
    { id: 'bio-g12-u3', subject: 'biology', grade: 12, unitNumber: 3, title: 'Energy Transformation', topics: ['Glycolysis', 'Krebs Cycle', 'Electron Transport Chain', 'Photosynthesis Light Reactions', 'Calvin Cycle'] },
    { id: 'bio-g12-u4', subject: 'biology', grade: 12, unitNumber: 4, title: 'Evolution', topics: ['Evidence for Evolution', 'Mechanisms of Natural Selection', 'Hardy-Weinberg Principle', 'Human Evolution'] },
    { id: 'bio-g12-u5', subject: 'biology', grade: 12, unitNumber: 5, title: 'Human Body System', topics: ['Cardiovascular System', 'Nervous Impulse Transmission', 'Endocrine Homeostasis', 'Kidney and Ultrafiltration'] },
    { id: 'bio-g12-u6', subject: 'biology', grade: 12, unitNumber: 6, title: 'Climate Change', topics: ['Greenhouse Effect', 'Global Warming Impact in Ethiopia', 'Conservation Biology', 'Green Legacy Initiative'] },
    // Grade 11
    { id: 'bio-g11-u1', subject: 'biology', grade: 11, unitNumber: 1, title: 'Biology and Technology', topics: ['Scientific Methodology', 'Cytology and Cell Structure', 'Biological Instruments'] },
    { id: 'bio-g11-u2', subject: 'biology', grade: 11, unitNumber: 2, title: 'Characteristics of Animals', topics: ['Animal Diversity', 'Comparative Invertebrates', 'Vertebrate Physiology'] },
    { id: 'bio-g11-u3', subject: 'biology', grade: 11, unitNumber: 3, title: 'Enzymes', topics: ['Enzyme Action Mechanism', 'Induced-Fit Model', 'Inhibition Types', 'Kinetics'] },
    { id: 'bio-g11-u4', subject: 'biology', grade: 11, unitNumber: 4, title: 'Genetics', topics: ['Mendelian Inheritance', 'Non-Mendelian Patterns', 'Pedigree Charts', 'DNA & Mutations'] },
    { id: 'bio-g11-u5', subject: 'biology', grade: 11, unitNumber: 5, title: 'The Human Body Systems', topics: ['Digestive System', 'Respiratory System', 'Nervous System'] },
    { id: 'bio-g11-u6', subject: 'biology', grade: 11, unitNumber: 6, title: 'Population and Natural Resources', topics: ['Population Ecology', 'Resource Depletion', 'Biodiversity Conservation'] },
    // Grade 10
    { id: 'bio-g10-u1', subject: 'biology', grade: 10, unitNumber: 1, title: 'Sub-fields of Biology', topics: ['Botany', 'Zoology', 'Microbiology', 'Biochemistry'] },
    { id: 'bio-g10-u2', subject: 'biology', grade: 10, unitNumber: 2, title: 'Plants', topics: ['Plant Morphology', 'Photosynthesis', 'Transport in Plants'] },
    { id: 'bio-g10-u3', subject: 'biology', grade: 10, unitNumber: 3, title: 'Biochemical Molecules', topics: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic Acids'] },
    { id: 'bio-g10-u4', subject: 'biology', grade: 10, unitNumber: 4, title: 'Cell Reproduction', topics: ['Mitosis', 'Meiosis', 'Gametogenesis'] },
    { id: 'bio-g10-u5', subject: 'biology', grade: 10, unitNumber: 5, title: 'Human Biology', topics: ['Organ Systems', 'Circulation', 'Coordination'] },
    { id: 'bio-g10-u6', subject: 'biology', grade: 10, unitNumber: 6, title: 'Ecological Interaction', topics: ['Biomes', 'Symbiosis', 'Energy Flow in Ecosystems'] },
    // Grade 9
    { id: 'bio-g9-u1', subject: 'biology', grade: 9, unitNumber: 1, title: 'Introduction to Biology', topics: ['Nature of Science', 'Biological Tools', 'Branches of Biology'] },
    { id: 'bio-g9-u2', subject: 'biology', grade: 9, unitNumber: 2, title: 'Characteristics and Classification of Organisms', topics: ['Five Kingdoms', 'Binomial Nomenclature', 'Taxonomic Hierarchy'] },
    { id: 'bio-g9-u3', subject: 'biology', grade: 9, unitNumber: 3, title: 'Cells', topics: ['Plant and Animal Cells', 'Microscopic Observation', 'Cell Wall and Membrane'] },
    { id: 'bio-g9-u4', subject: 'biology', grade: 9, unitNumber: 4, title: 'Reproduction', topics: ['Asexual Reproduction', 'Sexual Reproduction in Flowering Plants', 'Human Reproductive Health'] },
    { id: 'bio-g9-u5', subject: 'biology', grade: 9, unitNumber: 5, title: 'Human Health, Nutrition, and Disease', topics: ['Balanced Diet', 'Infectious Diseases', 'HIV/AIDS Awareness'] },
    { id: 'bio-g9-u6', subject: 'biology', grade: 9, unitNumber: 6, title: 'Ecology', topics: ['Abiotic and Biotic Factors', 'Food Chains and Webs', 'Environmental Protection in Ethiopia'] },
  ],

  chemistry: [
    // Grade 12
    { id: 'chem-g12-u1', subject: 'chemistry', grade: 12, unitNumber: 1, title: 'Acid-Base Equilibrium', topics: ['Weak Acids & Bases', 'pH and pOH Calculations', 'Buffer Solutions', 'Titration Curves'] },
    { id: 'chem-g12-u2', subject: 'chemistry', grade: 12, unitNumber: 2, title: 'Electrochemistry', topics: ['Galvanic Cells', 'Standard Reduction Potentials', 'Faraday Laws', 'Electrolysis of Molten NaCl & Dilute H2SO4'] },
    { id: 'chem-g12-u3', subject: 'chemistry', grade: 12, unitNumber: 3, title: 'Industrial Chemistry', topics: ['Sulfuric Acid Contact Process', 'Ammonia Haber Process', 'Nitric Acid Ostwald Process', 'Glass & Cement Manufacture'] },
    { id: 'chem-g12-u4', subject: 'chemistry', grade: 12, unitNumber: 4, title: 'Polymers', topics: ['Addition Polymerization', 'Condensation Polymerization', 'Nylon', 'Polypropylene', 'Teflon'] },
    { id: 'chem-g12-u5', subject: 'chemistry', grade: 12, unitNumber: 5, title: 'Introduction to Environmental Chemistry', topics: ['Greenhouse Gases', 'Acid Rain', 'Water and Land Pollution', 'Ozone Layer Depletion'] },
    // Grade 11
    { id: 'chem-g11-u1', subject: 'chemistry', grade: 11, unitNumber: 1, title: 'Atomic Structure and Periodic Properties of the Elements', topics: ['Bohr Model', 'Quantum Numbers', 'Electron Configuration', 'Periodic Trends'] },
    { id: 'chem-g11-u2', subject: 'chemistry', grade: 11, unitNumber: 2, title: 'Chemical Bonding', topics: ['Covalent and Ionic Bonding', 'Hydrogen Bonding', 'VSEPR Molecular Geometry', 'Hybridization'] },
    { id: 'chem-g11-u3', subject: 'chemistry', grade: 11, unitNumber: 3, title: 'Physical State of Matter', topics: ['Gas Laws', 'Kinetic Molecular Theory', 'Graham Law of Diffusion', 'Intermolecular Forces'] },
    { id: 'chem-g11-u4', subject: 'chemistry', grade: 11, unitNumber: 4, title: 'Chemical Kinetics', topics: ['Reaction Rates', 'Rate Laws and Order', 'Activation Energy', 'Catalysts'] },
    { id: 'chem-g11-u5', subject: 'chemistry', grade: 11, unitNumber: 5, title: 'Chemical Equilibrium', topics: ['Equilibrium Constant Kc and Kp', 'Le Chatelier Principle', 'Homogeneous and Heterogeneous Equilibria'] },
    { id: 'chem-g11-u6', subject: 'chemistry', grade: 11, unitNumber: 6, title: 'Some Important Oxygen-Containing Organic Compounds', topics: ['Alcohols', 'Aldehydes and Ketones', 'Carboxylic Acids', 'Esters'] },
    // Grade 10
    { id: 'chem-g10-u1', subject: 'chemistry', grade: 10, unitNumber: 1, title: 'Chemical Reactions and Stoichiometry', topics: ['Balancing Reactions', 'Mole Calculations', 'Limiting Reactant', 'Theoretical Yield'] },
    { id: 'chem-g10-u2', subject: 'chemistry', grade: 10, unitNumber: 2, title: 'Solutions', topics: ['Solubility Rules', 'Molarity and Concentration', 'Colligative Effects'] },
    { id: 'chem-g10-u3', subject: 'chemistry', grade: 10, unitNumber: 3, title: 'Important Inorganic Compounds', topics: ['Oxides (Acidic and Basic)', 'Acids and Bases', 'Salts'] },
    { id: 'chem-g10-u4', subject: 'chemistry', grade: 10, unitNumber: 4, title: 'Energy Changes and Electrochemistry', topics: ['Exothermic and Endothermic Reactions', 'Electrolytic Conduction', 'Basic Cells'] },
    { id: 'chem-g10-u5', subject: 'chemistry', grade: 10, unitNumber: 5, title: 'Metals and Non-metals', topics: ['Extraction of Iron from Pig Iron', 'Reactivity Series', 'Properties of Copper and Aluminum'] },
    { id: 'chem-g10-u6', subject: 'chemistry', grade: 10, unitNumber: 6, title: 'Hydrocarbons and Their Natural Sources', topics: ['Alkanes, Alkenes, Alkynes', 'Methane and Natural Gas', 'IUPAC Rules'] },
    // Grade 9
    { id: 'chem-g9-u1', subject: 'chemistry', grade: 9, unitNumber: 1, title: 'Chemistry and Its Importance', topics: ['Scope of Chemistry', 'Branches of Chemistry', 'Role in Society'] },
    { id: 'chem-g9-u2', subject: 'chemistry', grade: 9, unitNumber: 2, title: 'Measurements and Scientific Methods', topics: ['SI Units', 'Density and Volume', 'Significant Figures'] },
    { id: 'chem-g9-u3', subject: 'chemistry', grade: 9, unitNumber: 3, title: 'Structure of the Atom', topics: ['Subatomic Particles', 'Atomic Number and Mass', 'Isotopes'] },
    { id: 'chem-g9-u4', subject: 'chemistry', grade: 9, unitNumber: 4, title: 'Periodic Classification of Elements', topics: ['Mendeleev Table', 'Modern Periodic Table', 'Groups and Periods'] },
    { id: 'chem-g9-u5', subject: 'chemistry', grade: 9, unitNumber: 5, title: 'Chemical Bonding', topics: ['Octet Rule', 'Ionic Bonds', 'Covalent Bonds'] },
  ],

  physics: [
    // Grade 12
    { id: 'phys-g12-u1', subject: 'physics', grade: 12, unitNumber: 1, title: 'Application of Physics in Other Fields', topics: ['Engineering Principles', 'Defense Technology and Radar', 'Medical Physics'] },
    { id: 'phys-g12-u2', subject: 'physics', grade: 12, unitNumber: 2, title: 'Two-Dimensional Motion', topics: ['Conical Pendulum', 'Horizontal Circular Motion', 'Rotational Kinematics'] },
    { id: 'phys-g12-u3', subject: 'physics', grade: 12, unitNumber: 3, title: 'Fluid Mechanics', topics: ['Archimedes Principle and Buoyancy', 'Fluid Flow Rate', 'Hydraulic Lift', 'Mercury Barometer'] },
    { id: 'phys-g12-u4', subject: 'physics', grade: 12, unitNumber: 4, title: 'Electromagnetism', topics: ['Biot-Savart Law', 'Magnetic Field of Current-Carrying Wires', 'Faraday Law of Induction', 'Lenz Law'] },
    { id: 'phys-g12-u5', subject: 'physics', grade: 12, unitNumber: 5, title: 'Basics of Electronics', topics: ['Semiconductor Doping (P-type and N-type)', 'Diode I-V Characteristics', 'Rectifier Circuits'] },
    // Grade 11
    { id: 'phys-g11-u1', subject: 'physics', grade: 11, unitNumber: 1, title: 'Physics and Human Society', topics: ['Measurement Accuracy', 'Vectors in Nature', 'Fundamental Forces'] },
    { id: 'phys-g11-u2', subject: 'physics', grade: 11, unitNumber: 2, title: 'Vectors', topics: ['Vector Components', 'Scalar and Vector Products', 'Orthogonality'] },
    { id: 'phys-g11-u3', subject: 'physics', grade: 11, unitNumber: 3, title: 'Motion in One and Two Dimensions', topics: ['Uniformly Accelerated Kinematics', 'Projectile Motion', 'Relative Velocity'] },
    { id: 'phys-g11-u4', subject: 'physics', grade: 11, unitNumber: 4, title: 'Dynamics', topics: ['Newton Laws of Motion', 'Frictional Forces', 'Momentum and Impulse', 'Center of Mass'] },
    { id: 'phys-g11-u5', subject: 'physics', grade: 11, unitNumber: 5, title: 'Heat Conduction and Calorimetry', topics: ['Heat Capacity', 'Phase Changes and Latent Heat', 'Thermal Expansion'] },
    { id: 'phys-g11-u6', subject: 'physics', grade: 11, unitNumber: 6, title: 'Electrostatics and Electric Circuit', topics: ['Coulomb Law', 'Electric Field Strength', 'Resistor Networks in Series and Parallel'] },
    { id: 'phys-g11-u7', subject: 'physics', grade: 11, unitNumber: 7, title: 'Nuclear Physics', topics: ['Nuclear Binding Energy', 'Radioactivity', 'Strong and Weak Nuclear Forces'] },
    // Grade 10
    { id: 'phys-g10-u1', subject: 'physics', grade: 10, unitNumber: 1, title: 'Vector Quantities', topics: ['Representation of Vectors', 'Addition of Vectors', 'Resultant Forces'] },
    { id: 'phys-g10-u2', subject: 'physics', grade: 10, unitNumber: 2, title: 'Uniformly Accelerated Motion', topics: ['Equations of Motion', 'Free Fall under Gravity', 'Velocity-Time Graphs'] },
    { id: 'phys-g10-u3', subject: 'physics', grade: 10, unitNumber: 3, title: 'Elasticity and Static Equilibrium of Rigid Body', topics: ['Hooke Law', 'Elastic Potential Energy of Springs', 'Conditions of Equilibrium'] },
    { id: 'phys-g10-u4', subject: 'physics', grade: 10, unitNumber: 4, title: 'Static and Current Electricity', topics: ['Charge Carriers', 'Electric Current and Resistance', 'Ohm Law'] },
    { id: 'phys-g10-u5', subject: 'physics', grade: 10, unitNumber: 5, title: 'Magnetism', topics: ['Properties of Magnets', 'Magnetic Poles', 'Magnetic Fields'] },
    { id: 'phys-g10-u6', subject: 'physics', grade: 10, unitNumber: 6, title: 'Electromagnetic Waves and Geometrical Optics', topics: ['Real and Virtual Images', 'Reflection and Refraction', 'Total Internal Reflection and Critical Angle'] },
    // Grade 9
    { id: 'phys-g9-u1', subject: 'physics', grade: 9, unitNumber: 1, title: 'Physics and Human Society', topics: ['Historical Development', 'Branches of Physics'] },
    { id: 'phys-g9-u2', subject: 'physics', grade: 9, unitNumber: 2, title: 'Physical Quantities', topics: ['Fundamental and Derived Units', 'Measurement Devices'] },
    { id: 'phys-g9-u3', subject: 'physics', grade: 9, unitNumber: 3, title: 'Motion in a Straight Line', topics: ['Distance and Displacement', 'Speed and Velocity', 'Acceleration'] },
    { id: 'phys-g9-u4', subject: 'physics', grade: 9, unitNumber: 4, title: 'Force, Work, Energy, and Power', topics: ['Work Done by Force', 'Kinetic and Potential Energy', 'Power Calculations'] },
    { id: 'phys-g9-u5', subject: 'physics', grade: 9, unitNumber: 5, title: 'Simple Machines', topics: ['Levers', 'Wheel and Axle', 'Inclined Plane', 'Mechanical Advantage and Efficiency'] },
    { id: 'phys-g9-u6', subject: 'physics', grade: 9, unitNumber: 6, title: 'Mechanical Oscillation and Sound Wave', topics: ['Transverse and Longitudinal Waves', 'Speed of Sound', 'Echo and Resonance'] },
    { id: 'phys-g9-u7', subject: 'physics', grade: 9, unitNumber: 7, title: 'Temperature and Thermometer', topics: ['Thermal Equilibrium', 'Temperature Scales (Celsius, Kelvin)', 'Thermal Expansion'] },
  ],

  maths_nat: [
    // Grade 12
    { id: 'mnat-g12-u1', subject: 'maths_nat', grade: 12, unitNumber: 1, title: 'Sequence and Series', topics: ['Arithmetic Sequences', 'Geometric Progressions', 'Partial Sums', 'Infinite Series Convergence'] },
    { id: 'mnat-g12-u2', subject: 'maths_nat', grade: 12, unitNumber: 2, title: 'Introduction to Calculus', topics: ['Limits and Continuity', 'Average Rate of Change', 'Derivatives by Chain Rule', 'Definite Integrals'] },
    { id: 'mnat-g12-u3', subject: 'maths_nat', grade: 12, unitNumber: 3, title: 'Statistics', topics: ['Grouped Data Analysis', 'Mean and Median', 'Mean Deviation', 'Quartile Deviation'] },
    { id: 'mnat-g12-u4', subject: 'maths_nat', grade: 12, unitNumber: 4, title: 'Introduction to Linear Programming', topics: ['Linear Inequalities in Two Variables', 'Feasible Region and Vertices', 'Objective Function Optimization'] },
    { id: 'mnat-g12-u5', subject: 'maths_nat', grade: 12, unitNumber: 5, title: 'Mathematical Application in Business', topics: ['Profit and Cost Modeling', 'Discounts and Commercial Loans', 'Installment Payments'] },
    // Grade 11
    { id: 'mnat-g11-u1', subject: 'maths_nat', grade: 11, unitNumber: 1, title: 'Relations and Functions', topics: ['Composite Functions', 'Power Functions', 'Greatest Integer Function', 'Location Theorem'] },
    { id: 'mnat-g11-u2', subject: 'maths_nat', grade: 11, unitNumber: 2, title: 'Rational Expressions and Rational Functions', topics: ['Partial Fraction Decomposition', 'Graphing Rational Functions', 'Vertical and Horizontal Asymptotes'] },
    { id: 'mnat-g11-u3', subject: 'maths_nat', grade: 11, unitNumber: 3, title: 'Matrices', topics: ['Matrix Equality', 'Matrix Addition and Multiplication', 'Matrix Inverses'] },
    { id: 'mnat-g11-u4', subject: 'maths_nat', grade: 11, unitNumber: 4, title: 'Determinants and Their Properties', topics: ['2x2 and 3x3 Determinants', 'Row Operations', 'Cramer Rule'] },
    { id: 'mnat-g11-u5', subject: 'maths_nat', grade: 11, unitNumber: 5, title: 'Vectors', topics: ['Vector Representation', 'Dot Product', 'Vector Applications'] },
    { id: 'mnat-g11-u6', subject: 'maths_nat', grade: 11, unitNumber: 6, title: 'Transformations of the Plane', topics: ['Translations', 'Rotations', 'Reflections'] },
    { id: 'mnat-g11-u7', subject: 'maths_nat', grade: 11, unitNumber: 7, title: 'Statistics', topics: ['Measures of Dispersion', 'Standard Deviation', 'Variance'] },
    { id: 'mnat-g11-u8', subject: 'maths_nat', grade: 11, unitNumber: 8, title: 'Probability', topics: ['Combinations and Permutations', 'Favorable Outcomes', 'Dice and Card Probability'] },
    // Grade 10
    { id: 'mnat-g10-u1', subject: 'maths_nat', grade: 10, unitNumber: 1, title: 'Relations and Functions', topics: ['Domain and Range', 'Inverse Relations', 'One-to-One Functions'] },
    { id: 'mnat-g10-u2', subject: 'maths_nat', grade: 10, unitNumber: 2, title: 'Polynomial Functions', topics: ['Quadratic Equations', 'Vieta Formulas', 'Division of Polynomials'] },
    { id: 'mnat-g10-u3', subject: 'maths_nat', grade: 10, unitNumber: 3, title: 'Exponential and Logarithmic Functions', topics: ['Logarithmic Equations', 'Properties of Logarithms', 'Exponential Growth of Bacteria'] },
    { id: 'mnat-g10-u4', subject: 'maths_nat', grade: 10, unitNumber: 4, title: 'Trigonometric Functions', topics: ['Graphs of Sine and Cosine', 'Trigonometric Ratios (Cosecant, Secant)', 'Quadrant Signs'] },
    { id: 'mnat-g10-u5', subject: 'maths_nat', grade: 10, unitNumber: 5, title: 'Circles', topics: ['Inscribed Angles', 'Chords and Tangents', 'Circle Equations'] },
    { id: 'mnat-g10-u6', subject: 'maths_nat', grade: 10, unitNumber: 6, title: 'Solid Figures', topics: ['Cylinder Surface Area', 'Pyramid Volume', 'Frustum of a Cone'] },
    { id: 'mnat-g10-u7', subject: 'maths_nat', grade: 10, unitNumber: 7, title: 'Coordinate Geometry', topics: ['Section Formula (Ratio Division)', 'Equation of Lines in Point-Slope Form', 'Perpendicular Lines'] },
    // Grade 9
    { id: 'mnat-g9-u1', subject: 'maths_nat', grade: 9, unitNumber: 1, title: 'Further on Sets', topics: ['Set Operations', 'Relative Complements', 'Venn Diagrams'] },
    { id: 'mnat-g9-u2', subject: 'maths_nat', grade: 9, unitNumber: 2, title: 'The Number System', topics: ['Rational and Irrational Numbers', 'Scientific Notation', 'Percentage Simplification'] },
    { id: 'mnat-g9-u3', subject: 'maths_nat', grade: 9, unitNumber: 3, title: 'Solving Equations', topics: ['Linear Systems in Two Variables', 'Methods of Substitution and Elimination'] },
    { id: 'mnat-g9-u4', subject: 'maths_nat', grade: 9, unitNumber: 4, title: 'Solving Inequalities', topics: ['Linear Inequalities', 'Interval Notation'] },
    { id: 'mnat-g9-u5', subject: 'maths_nat', grade: 9, unitNumber: 5, title: 'Introduction to Trigonometry', topics: ['Right Triangle Ratios', 'Trigonometric Values of Special Angles'] },
    { id: 'mnat-g9-u6', subject: 'maths_nat', grade: 9, unitNumber: 6, title: 'Regular Polygons', topics: ['Interior and Exterior Angles of Polygons', 'Inscribed and Circumscribed Circles'] },
    { id: 'mnat-g9-u7', subject: 'maths_nat', grade: 9, unitNumber: 7, title: 'Congruency and Similarity', topics: ['SSS Similarity Theorem', 'Shadow Proportions and Height Estimation'] },
    { id: 'mnat-g9-u8', subject: 'maths_nat', grade: 9, unitNumber: 8, title: 'Vectors in Two Dimensions', topics: ['Vector Representation in Plane', 'Vector Addition Triangle'] },
    { id: 'mnat-g9-u9', subject: 'maths_nat', grade: 9, unitNumber: 9, title: 'Statistics and Probability', topics: ['Histograms and Frequency Distributions', 'Basic Probability of Events'] },
  ],

  maths_soc: [
    // Grade 12
    { id: 'msoc-g12-u1', subject: 'maths_soc', grade: 12, unitNumber: 1, title: 'Sequence and Series', topics: ['Arithmetic and Geometric Progressions', 'Business Growth Series'] },
    { id: 'msoc-g12-u2', subject: 'maths_soc', grade: 12, unitNumber: 2, title: 'Introduction to Calculus', topics: ['Marginal Cost and Revenue', 'Differential Optimization'] },
    { id: 'msoc-g12-u3', subject: 'maths_soc', grade: 12, unitNumber: 3, title: 'Statistics', topics: ['Measures of Dispersion', 'Variance and Standard Deviation', 'Quartiles'] },
    { id: 'msoc-g12-u4', subject: 'maths_soc', grade: 12, unitNumber: 4, title: 'Introduction to Linear Programming', topics: ['Feasible Polytope', 'Corner Point Optimization', 'Production Scheduling'] },
    { id: 'msoc-g12-u5', subject: 'maths_soc', grade: 12, unitNumber: 5, title: 'Mathematical Application in Business', topics: ['Compound Interest', 'VAT Computations', 'Discount Analysis'] },
    // Grade 11
    { id: 'msoc-g11-u1', subject: 'maths_soc', grade: 11, unitNumber: 1, title: 'Relations and Functions', topics: ['Domain and Range', 'Linear and Quadratic Models'] },
    { id: 'msoc-g11-u2', subject: 'maths_soc', grade: 11, unitNumber: 2, title: 'Rational Expressions and Rational Functions', topics: ['Economic Rational Functions', 'Break-even Analysis'] },
    { id: 'msoc-g11-u3', subject: 'maths_soc', grade: 11, unitNumber: 3, title: 'Matrices', topics: ['Matrix Multiplication', 'Input-Output Leontief Models'] },
    { id: 'msoc-g11-u4', subject: 'maths_soc', grade: 11, unitNumber: 4, title: 'Determinants and Their Properties', topics: ['Cramer Rule for Economic Systems'] },
    { id: 'msoc-g11-u5', subject: 'maths_soc', grade: 11, unitNumber: 5, title: 'Vectors', topics: ['Vector Space Representations'] },
    { id: 'msoc-g11-u6', subject: 'maths_soc', grade: 11, unitNumber: 6, title: 'Transformations of the Plane', topics: ['Geometric Mappings'] },
    { id: 'msoc-g11-u7', subject: 'maths_soc', grade: 11, unitNumber: 7, title: 'Statistics', topics: ['Frequency Distributions', 'Histograms'] },
    { id: 'msoc-g11-u8', subject: 'maths_soc', grade: 11, unitNumber: 8, title: 'Probability', topics: ['Conditional Probability', 'Independent Events'] },
    // Grade 10
    { id: 'msoc-g10-u1', subject: 'maths_soc', grade: 10, unitNumber: 1, title: 'Relations and Functions', topics: ['Function Notation', 'Graphs'] },
    { id: 'msoc-g10-u2', subject: 'maths_soc', grade: 10, unitNumber: 2, title: 'Polynomial Functions', topics: ['Quadratic Graphs', 'Profit Functions'] },
    { id: 'msoc-g10-u3', subject: 'maths_soc', grade: 10, unitNumber: 3, title: 'Exponential and Logarithmic Functions', topics: ['Compound Growth', 'Logarithmic Scales'] },
    { id: 'msoc-g10-u4', subject: 'maths_soc', grade: 10, unitNumber: 4, title: 'Coordinate Geometry', topics: ['Slope of Linear Cost', 'Equations of Lines'] },
    // Grade 9
    { id: 'msoc-g9-u1', subject: 'maths_soc', grade: 9, unitNumber: 1, title: 'The Number System', topics: ['Percentages', 'Ratios in Business'] },
    { id: 'msoc-g9-u2', subject: 'maths_soc', grade: 9, unitNumber: 2, title: 'Solving Equations', topics: ['Linear Equations in Two Variables'] },
    { id: 'msoc-g9-u3', subject: 'maths_soc', grade: 9, unitNumber: 3, title: 'Statistics and Probability', topics: ['Mean, Median, Mode', 'Simple Probabilities'] },
  ],

  english: [
    // Grade 12
    { id: 'eng-g12-u1', subject: 'english', grade: 12, unitNumber: 1, title: 'Advanced Reading Comprehension', topics: ['Critical Passage Analysis', 'Inference and Deduction', 'Author Tone and Attitude'] },
    { id: 'eng-g12-u2', subject: 'english', grade: 12, unitNumber: 2, title: 'Complex Grammar and Structure', topics: ['Conditional Clauses (Types 2 & 3)', 'Passive Voice Constructions', 'Causative Verbs', 'Reported Speech'] },
    { id: 'eng-g12-u3', subject: 'english', grade: 12, unitNumber: 3, title: 'Advanced Vocabulary and Phrasal Verbs', topics: ['Contextual Synonyms and Antonyms', 'Collocations', 'Idioms'] },
    { id: 'eng-g12-u4', subject: 'english', grade: 12, unitNumber: 4, title: 'Communicative Activities and Discourse', topics: ['Asking and Giving Advice', 'Expressing Agreement and Disagreement', 'Conversational Etiquette'] },
    { id: 'eng-g12-u5', subject: 'english', grade: 12, unitNumber: 5, title: 'Writing Mechanics and Text Coherence', topics: ['Punctuation and Capitalization', 'Jumbled Sentences', 'Paragraph Organization', 'Letter Writing'] },
    // Grade 11
    { id: 'eng-g11-u1', subject: 'english', grade: 11, unitNumber: 1, title: 'Reading for Information', topics: ['Main Idea and Topic Sentences', 'Vocabulary in Context'] },
    { id: 'eng-g11-u2', subject: 'english', grade: 11, unitNumber: 2, title: 'Grammar Focus: Tenses and Pronouns', topics: ['Past Continuous', 'Reflexive Pronouns', 'Relative Pronouns (whose, whom)'] },
    { id: 'eng-g11-u3', subject: 'english', grade: 11, unitNumber: 3, title: 'Vocabulary Building', topics: ['Word Substitution', 'Word Classification (Odd one out)'] },
    { id: 'eng-g11-u4', subject: 'english', grade: 11, unitNumber: 4, title: 'Types of Paragraph Writing', topics: ['Expository', 'Argumentative', 'Descriptive', 'Narrative'] },
    // Grade 10
    { id: 'eng-g10-u1', subject: 'english', grade: 10, unitNumber: 1, title: 'Language Usage and Mechanics', topics: ['Prepositions and Collocations', 'Sentence Structure'] },
    { id: 'eng-g10-u2', subject: 'english', grade: 10, unitNumber: 2, title: 'Reading Comprehension', topics: ['Factual and Inferential Questions'] },
    // Grade 9
    { id: 'eng-g9-u1', subject: 'english', grade: 9, unitNumber: 1, title: 'Grammar and Sentence Structure', topics: ['Parts of Speech', 'Basic Tenses', 'Question Tags'] },
    { id: 'eng-g9-u2', subject: 'english', grade: 9, unitNumber: 2, title: 'Vocabulary and Spelling', topics: ['Commonly Misspelt Words', 'Dictionary Use'] },
  ],

  aptitude: [
    // Grade 12
    { id: 'apt-g12-u1', subject: 'aptitude', grade: 12, unitNumber: 1, title: 'Verbal Reasoning & Word Analogies', topics: ['Word Relationships', 'Anagrams and Scrambled Words', 'Odd One Out'] },
    { id: 'apt-g12-u2', subject: 'aptitude', grade: 12, unitNumber: 2, title: 'Quantitative Reasoning & Number Sequences', topics: ['Arithmetic and Geometric Sequences', 'Interleaved Series', 'Pipe and Tank Rates', 'Work and Time Problems'] },
    { id: 'apt-g12-u3', subject: 'aptitude', grade: 12, unitNumber: 3, title: 'Syllogisms & Logical Deductions', topics: ['Categorical Propositions', 'Premise-Conclusion Validity', 'Family Relations', 'Age Rankings'] },
    { id: 'apt-g12-u4', subject: 'aptitude', grade: 12, unitNumber: 4, title: 'Spatial & Diagrammatic Analysis', topics: ['Counting Geometric Triangles', 'Sphere and Circle Geometry', 'Rotational Symmetry'] },
    { id: 'apt-g12-u5', subject: 'aptitude', grade: 12, unitNumber: 5, title: 'Data Sufficiency & Chart Interpretation', topics: ['Study Pattern Bar Graphs', 'Quantity Comparisons (Quantity P vs Quantity Q)', 'Averages and Percentages'] },
  ],
};

/**
 * Returns available examination papers for each subject.
 */
export function getExamPapersForSubject(subjectId: SubjectId): ExamPaperMeta[] {
  const years: ExamYear[] = ['2018', '2017', '2016', '2015', '2014', '2013'];
  const config = SUBJECT_CONFIGS[subjectId];

  return years.map((year) => {
    const verifiedQuestions = ALL_QUESTIONS.filter(
      (q) => q.subject === subjectId && q.year === year
    );
    const count = verifiedQuestions.length;

    return {
      id: `${subjectId}-${year}`,
      subject: subjectId,
      year: year,
      title: `${config.title} — ${year} E.C.`,
      questionCount: count > 0 ? count : config.standardQuestionsCount,
      durationSeconds: config.durationSeconds,
      isComplete: count > 0,
      notes: count > 0 
        ? `${count} verified authentic questions from official national booklet`
        : `Awaiting full paper digitization by AIBSBSS department`,
    };
  });
}

/**
 * Retrieve questions for full exam
 */
export function getQuestionsForExam(subjectId: SubjectId, year?: ExamYear): Question[] {
  if (year) {
    const filtered = ALL_QUESTIONS.filter(
      (q) => q.subject === subjectId && q.year === year
    );
    if (filtered.length > 0) {
      return [...filtered].sort((a, b) => a.questionNumber - b.questionNumber);
    }
  }
  return ALL_QUESTIONS.filter((q) => q.subject === subjectId).sort((a, b) => {
    if (a.year !== b.year) return b.year.localeCompare(a.year);
    return a.questionNumber - b.questionNumber;
  });
}

/**
 * Retrieve questions filtered by Curriculum Unit and optional Year
 */
export function getQuestionsForUnit(subjectId: SubjectId, unitTitle: string, year?: ExamYear): Question[] {
  return ALL_QUESTIONS.filter((q) => {
    const matchSubject = q.subject === subjectId;
    const matchUnit = q.unit.toLowerCase().trim() === unitTitle.toLowerCase().trim();
    const matchYear = year ? q.year === year : true;
    return matchSubject && matchUnit && matchYear;
  });
}

/**
 * Retrieve questions by Topic
 */
export function getQuestionsByTopic(subjectId: SubjectId, topicTitle: string): Question[] {
  return ALL_QUESTIONS.filter(
    (q) => q.subject === subjectId && q.topic?.toLowerCase().trim() === topicTitle.toLowerCase().trim()
  );
}

/**
 * Retrieve unclassified questions
 */
export function getUnclassifiedQuestions(): Question[] {
  return ALL_QUESTIONS.filter((q) => q.grade === 'unclassified' || q.isUnclassified);
}

/**
 * Builds hierarchical Category Tree: Subject -> Grade -> Unit -> Topic
 */
export function getCategoryHierarchyForSubject(subjectId: SubjectId): CategoryNode[] {
  const units = CURRICULUM_UNITS[subjectId] || [];
  const rawGrades = Array.from(new Set(units.map((u) => u.grade)));
  const grades = rawGrades.filter((g): g is 9 | 10 | 11 | 12 => typeof g === 'number').sort((a, b) => b - a);

  return grades.map((gr) => {
    const gradeUnits = units.filter((u) => u.grade === gr).sort((a, b) => a.unitNumber - b.unitNumber);
    return {
      grade: gr,
      units: gradeUnits.map((u) => ({
        unitNumber: u.unitNumber,
        unitTitle: u.title,
        topics: u.topics || [],
      })),
    };
  });
}
