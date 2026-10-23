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
 * Official Curriculum Units for Grade 9 - 12 (Matching Ethio Matric Screenshots)
 */
export const CURRICULUM_UNITS: Record<SubjectId, CurriculumUnit[]> = {
  biology: [
    // Grade 12 (as shown in Screenshot_20261019-071418_49aaae27.jpg)
    { id: 'bio-g12-u1', subject: 'biology', grade: 12, unitNumber: 1, title: 'Application of Biology', topics: ['Biological Research in Ethiopia', 'Microscopy and Resolution', 'Biotechnology Applications'] },
    { id: 'bio-g12-u2', subject: 'biology', grade: 12, unitNumber: 2, title: 'Microorganisms', topics: ['Bacterial Characteristics', 'Viral Diseases', 'Fungal Pathogens', 'Koch Postulates'] },
    { id: 'bio-g12-u3', subject: 'biology', grade: 12, unitNumber: 3, title: 'Energy Transformation', topics: ['Glycolysis', 'Krebs Cycle', 'Electron Transport Chain', 'Light Reactions', 'Calvin Cycle'] },
    { id: 'bio-g12-u4', subject: 'biology', grade: 12, unitNumber: 4, title: 'Evolution', topics: ['Evidence for Evolution', 'Mechanisms of Natural Selection', 'Hardy-Weinberg Principle', 'Human Evolution'] },
    { id: 'bio-g12-u5', subject: 'biology', grade: 12, unitNumber: 5, title: 'Human Body System', topics: ['Cardiovascular System', 'Nervous Impulse Transmission', 'Endocrine Homeostasis', 'Reproductive Biology'] },
    { id: 'bio-g12-u6', subject: 'biology', grade: 12, unitNumber: 6, title: 'Climate Change', topics: ['Greenhouse Effect', 'Global Warming Impact in Ethiopia', 'Ecological Pyramids', 'Conservation Biology'] },
    // Grade 11 (as shown in Screenshot_20261019-071418_49aaae27.jpg)
    { id: 'bio-g11-u1', subject: 'biology', grade: 11, unitNumber: 1, title: 'Biology and Technology', topics: ['Scientific Methodology', 'Cell Biology', 'Biological Instruments'] },
    { id: 'bio-g11-u2', subject: 'biology', grade: 11, unitNumber: 2, title: 'Animals', topics: ['Animal Diversity', 'Invertebrate Anatomy', 'Vertebrate Comparative Physiology'] },
    { id: 'bio-g11-u3', subject: 'biology', grade: 11, unitNumber: 3, title: 'Enzymes', topics: ['Enzyme Action Mechanism', 'Factors Affecting Enzyme Kinetics', 'Inhibition Types'] },
    { id: 'bio-g11-u4', subject: 'biology', grade: 11, unitNumber: 4, title: 'Genetics', topics: ['Mendelian Inheritance', 'Non-Mendelian Patterns', 'Pedigree Charts', 'DNA Replication'] },
  ],
  chemistry: [
    // Grade 11
    { id: 'chem-g11-u1', subject: 'chemistry', grade: 11, unitNumber: 1, title: 'Fundamental Concepts of Chemistry', topics: ['Chemical Laws', 'Stoichiometry and Mole Concept', 'Limiting Reactants'] },
    { id: 'chem-g11-u2', subject: 'chemistry', grade: 11, unitNumber: 2, title: 'Atomic Structure and Periodic Properties', topics: ['Bohr Model', 'Quantum Numbers', 'Periodic Trends'] },
    { id: 'chem-g11-u3', subject: 'chemistry', grade: 11, unitNumber: 3, title: 'Chemical Bonding and Intermolecular Forces', topics: ['Covalent and Ionic Bonding', 'Hydrogen Bonding', 'Molecular Geometry'] },
    { id: 'chem-g11-u4', subject: 'chemistry', grade: 11, unitNumber: 4, title: 'Chemical Kinetics', topics: ['Reaction Rates', 'Rate Laws', 'Catalysis'] },
    { id: 'chem-g11-u5', subject: 'chemistry', grade: 11, unitNumber: 5, title: 'Chemical Equilibrium', topics: ['Equilibrium Constant', 'Le Chatelier Principle', 'Equilibrium Calculations'] },
    // Grade 12
    { id: 'chem-g12-u1', subject: 'chemistry', grade: 12, unitNumber: 1, title: 'Solutions and Colligative Properties', topics: ['Types of Solutions', 'Vapor Pressure Lowering', 'Osmotic Pressure'] },
    { id: 'chem-g12-u2', subject: 'chemistry', grade: 12, unitNumber: 2, title: 'Acid-Base Equilibria', topics: ['Ionization of Weak Acids', 'pH and pOH', 'Buffer Solutions', 'Titrations'] },
    { id: 'chem-g12-u3', subject: 'chemistry', grade: 12, unitNumber: 3, title: 'Electrochemistry', topics: ['Galvanic Cells', 'Standard Reduction Potentials', 'Faraday Laws of Electrolysis'] },
    { id: 'chem-g12-u4', subject: 'chemistry', grade: 12, unitNumber: 4, title: 'Hydrocarbons and Organic Functional Groups', topics: ['Alkanes and Alkenes', 'IUPAC Nomenclature', 'Alcohols and Carboxylic Acids'] },
    { id: 'chem-g12-u5', subject: 'chemistry', grade: 12, unitNumber: 5, title: 'Polymers and Industrial Chemistry in Ethiopia', topics: ['Synthetic Polymers', 'Sulfuric Acid Contact Process', 'Fertilizer Industry'] },
  ],
  physics: [
    // Grade 11
    { id: 'phys-g11-u1', subject: 'physics', grade: 11, unitNumber: 1, title: 'Physics and Measurement', topics: ['Vectors and Scalars', 'Vector Components', 'Dimensional Analysis'] },
    { id: 'phys-g11-u2', subject: 'physics', grade: 11, unitNumber: 2, title: 'Two-Dimensional Kinematics', topics: ['Uniformly Accelerated Motion', 'Projectile Motion', 'Circular Motion'] },
    { id: 'phys-g11-u3', subject: 'physics', grade: 11, unitNumber: 3, title: 'Dynamics and Laws of Motion', topics: ['Newton Laws of Motion', 'Frictional Forces', 'Momentum and Collisions'] },
    { id: 'phys-g11-u4', subject: 'physics', grade: 11, unitNumber: 4, title: 'Work, Energy and Power', topics: ['Work-Energy Theorem', 'Conservation of Mechanical Energy', 'Power Output'] },
    { id: 'phys-g11-u5', subject: 'physics', grade: 11, unitNumber: 5, title: 'Heat and Thermodynamics', topics: ['Thermal Expansion', 'Specific Heat Capacity', 'First and Second Laws of Thermodynamics'] },
    // Grade 12
    { id: 'phys-g12-u1', subject: 'physics', grade: 12, unitNumber: 1, title: 'Oscillations and Wave Motion', topics: ['Simple Harmonic Motion', 'Doppler Effect', 'Wave Superposition'] },
    { id: 'phys-g12-u2', subject: 'physics', grade: 12, unitNumber: 2, title: 'Wave Optics and Interference', topics: ['Double-Slit Interference', 'Diffraction', 'Refraction and Snell Law'] },
    { id: 'phys-g12-u3', subject: 'physics', grade: 12, unitNumber: 3, title: 'Electrostatics and Current Electricity', topics: ['Coulomb Law', 'Electric Field and Potential', 'Resistor & Capacitor Circuits'] },
    { id: 'phys-g12-u4', subject: 'physics', grade: 12, unitNumber: 4, title: 'Electromagnetism and Circuits', topics: ['Magnetic Fields of Current', 'Faraday Law of Induction', 'Lenz Law'] },
    { id: 'phys-g12-u5', subject: 'physics', grade: 12, unitNumber: 5, title: 'Atomic, Nuclear and Modern Physics', topics: ['Photoelectric Effect', 'Semiconductor Doping', 'Radioactivity'] },
  ],
  maths_nat: [
    // Grade 11
    { id: 'mnat-g11-u1', subject: 'maths_nat', grade: 11, unitNumber: 1, title: 'Further on Relations and Functions', topics: ['Function Compositions', 'Inverse Functions', 'Quadratic Modeling'] },
    { id: 'mnat-g11-u2', subject: 'maths_nat', grade: 11, unitNumber: 2, title: 'Rational Expressions and Rational Functions', topics: ['Partial Fraction Decomposition', 'Asymptotes', 'Rational Equations'] },
    { id: 'mnat-g11-u3', subject: 'maths_nat', grade: 11, unitNumber: 3, title: 'Coordinate Geometry', topics: ['Distance and Slope', 'Equations of Lines and Circles', 'Conic Sections'] },
    { id: 'mnat-g11-u4', subject: 'maths_nat', grade: 11, unitNumber: 4, title: 'Matrices and Determinants', topics: ['Matrix Operations', '2x2 & 3x3 Determinants', 'Linear Systems'] },
    { id: 'mnat-g11-u5', subject: 'maths_nat', grade: 11, unitNumber: 5, title: 'Trigonometric Functions', topics: ['Trigonometric Identities', 'Double Angle Formulas', 'Trig Equations'] },
    // Grade 12
    { id: 'mnat-g12-u1', subject: 'maths_nat', grade: 12, unitNumber: 1, title: 'Sequences and Series', topics: ['Arithmetic Progressions', 'Geometric Series', 'Infinite Convergence'] },
    { id: 'mnat-g12-u2', subject: 'maths_nat', grade: 12, unitNumber: 2, title: 'Introduction to Calculus: Limits and Continuity', topics: ['Limit Theorems', 'L\'Hopital Rule', 'Continuity Criteria'] },
    { id: 'mnat-g12-u3', subject: 'maths_nat', grade: 12, unitNumber: 3, title: 'Derivatives and Applications of Differential Calculus', topics: ['Chain Rule', 'Implicit Differentiation', 'Curve Sketching and Extrema'] },
    { id: 'mnat-g12-u4', subject: 'maths_nat', grade: 12, unitNumber: 4, title: 'Integrals and Applications of Integral Calculus', topics: ['Definite Integrals', 'Substitution Method', 'Area under Curves'] },
    { id: 'mnat-g12-u5', subject: 'maths_nat', grade: 12, unitNumber: 5, title: 'Three-Dimensional Geometry and Vectors', topics: ['3D Coordinate Space', 'Dot and Cross Products', 'Planes and Lines'] },
  ],
  maths_soc: [
    // Grade 11
    { id: 'msoc-g11-u1', subject: 'maths_soc', grade: 11, unitNumber: 1, title: 'Matrices and Determinants', topics: ['Matrix Multiplication', 'Inverses', 'Cramer Rule'] },
    { id: 'msoc-g11-u2', subject: 'maths_soc', grade: 11, unitNumber: 2, title: 'Linear Programming and Optimization', topics: ['Linear Inequalities', 'Feasible Region', 'Objective Function Extrema'] },
    { id: 'msoc-g11-u3', subject: 'maths_soc', grade: 11, unitNumber: 3, title: 'Financial Mathematics & Simple/Compound Interest', topics: ['Compound Interest', 'Annuities', 'Amortization'] },
    // Grade 12
    { id: 'msoc-g12-u1', subject: 'maths_soc', grade: 12, unitNumber: 1, title: 'Statistics and Frequency Distributions', topics: ['Measures of Central Tendency', 'Measures of Dispersion', 'Histograms'] },
    { id: 'msoc-g12-u2', subject: 'maths_soc', grade: 12, unitNumber: 2, title: 'Probability and Counting Techniques', topics: ['Permutations and Combinations', 'Conditional Probability', 'Independent Events'] },
    { id: 'msoc-g12-u3', subject: 'maths_soc', grade: 12, unitNumber: 3, title: 'Commercial Calculations and Tax Computations', topics: ['Value Added Tax (VAT)', 'Income Tax Schedules in Ethiopia', 'Markups and Discounts'] },
  ],
  english: [
    // Grade 12
    { id: 'eng-g12-u1', subject: 'english', grade: 12, unitNumber: 1, title: 'Reading Comprehension', topics: ['Passage Analysis', 'Main Idea and Inference', 'Author Tone and Stance'] },
    { id: 'eng-g12-u2', subject: 'english', grade: 12, unitNumber: 2, title: 'Vocabulary in Context', topics: ['Synonyms and Antonyms', 'Context Clues', 'Phrasal Verbs'] },
    { id: 'eng-g12-u3', subject: 'english', grade: 12, unitNumber: 3, title: 'Grammar and Structure', topics: ['Conditional Clauses', 'Passive Voice', 'Relative Clauses', 'Subjunctive'] },
    { id: 'eng-g12-u4', subject: 'english', grade: 12, unitNumber: 4, title: 'Communicative Activities', topics: ['Polite Requests and Offers', 'Seeking and Giving Advice', 'Agreeing and Disagreeing'] },
    { id: 'eng-g12-u5', subject: 'english', grade: 12, unitNumber: 5, title: 'Writing Skills and Mechanics', topics: ['Punctuation and Capitalization', 'Paragraph Coherence', 'Types of Writing'] },
  ],
  aptitude: [
    // Grade 12
    { id: 'apt-g12-u1', subject: 'aptitude', grade: 12, unitNumber: 1, title: 'Verbal Reasoning & Word Analogies', topics: ['Word Relationships', 'Odd One Out', 'Sentence Logic'] },
    { id: 'apt-g12-u2', subject: 'aptitude', grade: 12, unitNumber: 2, title: 'Quantitative Reasoning & Number Sequences', topics: ['Arithmetic and Geometric Patterns', 'Work and Rate Problems', 'Algebraic Inequalities'] },
    { id: 'apt-g12-u3', subject: 'aptitude', grade: 12, unitNumber: 3, title: 'Syllogisms & Logical Deductions', topics: ['Categorical Propositions', 'Premise-Conclusion Validity', 'Venn Diagrams'] },
    { id: 'apt-g12-u4', subject: 'aptitude', grade: 12, unitNumber: 4, title: 'Spatial & Diagrammatic Analysis', topics: ['Shape Rotations', 'Cube Unfolding', 'Geometric Counting'] },
    { id: 'apt-g12-u5', subject: 'aptitude', grade: 12, unitNumber: 5, title: 'Data Sufficiency & Chart Interpretation', topics: ['Bar Graphs and Tables', 'Average and Percent Calculations', 'Quantity Comparisons'] },
  ],
};

/**
 * Returns available examination papers for each subject.
 */
export function getExamPapersForSubject(subjectId: SubjectId): ExamPaperMeta[] {
  const years: ExamYear[] = ['2017', '2016', '2015', '2014/15'];
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
    const matchUnit = q.unit.toLowerCase() === unitTitle.toLowerCase();
    const matchYear = year ? q.year === year : true;
    return matchSubject && matchUnit && matchYear;
  });
}

/**
 * Retrieve questions by Topic
 */
export function getQuestionsByTopic(subjectId: SubjectId, topicTitle: string): Question[] {
  return ALL_QUESTIONS.filter(
    (q) => q.subject === subjectId && q.topic?.toLowerCase() === topicTitle.toLowerCase()
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
