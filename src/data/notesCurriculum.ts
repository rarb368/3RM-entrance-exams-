export interface SubjectMeta {
  id: string;
  name: string;
  tagline: string;
  code: string;
  hasGrades: boolean; // false for English and SAT
  bgGradient: string;
  borderClass: string;
  arrowBg: string;
  description: string;
}

export interface CurriculumUnit {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  topicsCount: number;
  hasFullNotes?: boolean;
}

export const NOTES_SUBJECTS: SubjectMeta[] = [
  {
    id: "chemistry",
    name: "Chemistry",
    tagline: "Explore & Master",
    code: "chem",
    hasGrades: true,
    bgGradient: "from-[#a7f3d0] via-[#6ee7b7] to-[#34d399]",
    borderClass: "border-[#6ee7b7]/60",
    arrowBg: "bg-[#059669] hover:bg-[#047857]",
    description: "Equilibria, environmental chemistry, electrochemistry & polymers."
  },
  {
    id: "physics",
    name: "Physics",
    tagline: "Think Deeper",
    code: "phy",
    hasGrades: true,
    bgGradient: "from-[#bfdbfe] via-[#93c5fd] to-[#60a5fa]",
    borderClass: "border-[#93c5fd]/60",
    arrowBg: "bg-[#2563eb] hover:bg-[#1d4ed8]",
    description: "Atomic models, mechanics, wave optics and thermodynamics."
  },
  {
    id: "biology",
    name: "Biology",
    tagline: "Discover Life",
    code: "bio",
    hasGrades: true,
    bgGradient: "from-[#e9d5ff] via-[#d8b4fe] to-[#c084fc]",
    borderClass: "border-[#d8b4fe]/60",
    arrowBg: "bg-[#7e22ce] hover:bg-[#6b21a8]",
    description: "Cell biology, genetics, ecology, physiology and biotechnology."
  },
  {
    id: "maths",
    name: "Maths",
    tagline: "Solve Better",
    code: "math",
    hasGrades: true,
    bgGradient: "from-[#fed7aa] via-[#fdba74] to-[#fb923c]",
    borderClass: "border-[#fdba74]/60",
    arrowBg: "bg-[#ea580c] hover:bg-[#c2410c]",
    description: "Calculus, sequences, geometry, vectors, matrices and statistics."
  },
  {
    id: "english",
    name: "English",
    tagline: "Communicate Well",
    code: "eng",
    hasGrades: false, // Direct to units
    bgGradient: "from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8]",
    borderClass: "border-[#7dd3fc]/60",
    arrowBg: "bg-[#0284c7] hover:bg-[#0369a1]",
    description: "Grammar, reading comprehension, vocabulary, idioms and syntax."
  },
  {
    id: "sat",
    name: "SAT",
    tagline: "Aim Higher",
    code: "sat",
    hasGrades: false, // Direct to units
    bgGradient: "from-[#fbcfe8] via-[#f472b6] to-[#ec4899]",
    borderClass: "border-[#f472b6]/60",
    arrowBg: "bg-[#db2777] hover:bg-[#be185d]",
    description: "Reading evidence, advanced algebra, data analysis and rhetoric."
  },
  {
    id: "geography",
    name: "Geography",
    tagline: "Understand Earth",
    code: "geo",
    hasGrades: true,
    bgGradient: "from-[#d9f99d] via-[#bef264] to-[#a3e635]",
    borderClass: "border-[#bef264]/60",
    arrowBg: "bg-[#65a30d] hover:bg-[#4d7c0f]",
    description: "Physical & human geography of Ethiopia, drainage and climate."
  },
  {
    id: "history",
    name: "History",
    tagline: "Uncover the Past",
    code: "hist",
    hasGrades: true,
    bgGradient: "from-[#fde68a] via-[#fcd34d] to-[#fbbf24]",
    borderClass: "border-[#fcd34d]/60",
    arrowBg: "bg-[#d97706] hover:bg-[#b45309]",
    description: "Ethiopian modern history (1855–1991) and world civilizations."
  },
  {
    id: "economics",
    name: "Economics",
    tagline: "Master Markets",
    code: "econ",
    hasGrades: true,
    bgGradient: "from-[#c7d2fe] via-[#a5b4fc] to-[#818cf8]",
    borderClass: "border-[#a5b4fc]/60",
    arrowBg: "bg-[#4f46e5] hover:bg-[#4338ca]",
    description: "Microeconomics, macro policies, fiscal budgets and development."
  }
];



// Units mapped by subjectId and grade (or 0 for non-grade subjects like English / SAT)
export const CURRICULUM_UNITS_DATA: Record<string, Record<number, CurriculumUnit[]>> = {
  chemistry: {
    12: [
      {
        id: "chem-12-u1",
        unitNumber: 1,
        title: "Acid–Base Equilibria",
        subtitle: "Arrhenius, Brønsted-Lowry, Lewis, Kw, pH, Ka, Kb, Buffers, Titrations",
        topicsCount: 20,
        hasFullNotes: true
      },
      {
        id: "chem-12-u2",
        unitNumber: 2,
        title: "Electrochemistry",
        subtitle: "Redox reactions, galvanic & electrolytic cells, Nernst equation, Faraday's laws & batteries",
        topicsCount: 20,
        hasFullNotes: true
      },
      {
        id: "chem-12-u3",
        unitNumber: 3,
        title: "Industrial Chemistry",
        subtitle: "Haber process, Ostwald process, Contact process, fertilizers, glass, cement, sugar, and soap",
        topicsCount: 19,
        hasFullNotes: true
      },
      {
        id: "chem-12-u4",
        unitNumber: 4,
        title: "Polymers",
        subtitle: "Addition & condensation polymerization, plastics, synthetic rubbers, and vulcanization",
        topicsCount: 20,
        hasFullNotes: true
      },
      {
        id: "chem-12-u5",
        unitNumber: 5,
        title: "Environmental Chemistry",
        subtitle: "Atmosphere, cycles, BOD, pollutants, global warming, and 12 principles of green chemistry",
        topicsCount: 20,
        hasFullNotes: true
      }
    ],
    11: [
      { id: "chem-11-u1", unitNumber: 1, title: "Fundamental Concepts of Chemistry", subtitle: "Atomic structure, isotopes, moles & chemical stoichiometry", topicsCount: 12 },
      { id: "chem-11-u2", unitNumber: 2, title: "Atomic Structure and Periodic Table", subtitle: "Quantum mechanical model, orbitals, electron configuration & periodic trends", topicsCount: 14 },
      { id: "chem-11-u3", unitNumber: 3, title: "Chemical Bonding and Intermolecular Forces", subtitle: "Ionic, covalent, metallic bonding, VSEPR theory & dipole-dipole forces", topicsCount: 16 },
      { id: "chem-11-u4", unitNumber: 4, title: "Chemical Kinetics", subtitle: "Reaction rates, collision theory, activation energy & rate laws", topicsCount: 12 },
      { id: "chem-11-u5", unitNumber: 5, title: "Chemical Equilibrium", subtitle: "Equilibrium constant Kc/Kp, Le Chatelier's principle & equilibrium calculations", topicsCount: 12 },
      { id: "chem-11-u6", unitNumber: 6, title: "Carboxylic Acids, Esters and Fats", subtitle: "Nomenclature, physical properties, esterification & saponification", topicsCount: 10 }
    ],
    10: [
      { id: "chem-10-u1", unitNumber: 1, title: "Chemical Reactions and Stoichiometry", subtitle: "Types of chemical equations, mole ratios and limiting reagents", topicsCount: 10 },
      { id: "chem-10-u2", unitNumber: 2, title: "Solutions", subtitle: "Solubility factors, concentration units (molarity, mass %) & colligative properties", topicsCount: 12 },
      { id: "chem-10-u3", unitNumber: 3, title: "Important Inorganic Compounds", subtitle: "Acids, bases, salts, and oxides classification and reactions", topicsCount: 12 },
      { id: "chem-10-u4", unitNumber: 4, title: "Energy Changes in Chemical Reactions", subtitle: "Exothermic, endothermic, enthalpy diagrams and calorimetry", topicsCount: 8 },
      { id: "chem-10-u5", unitNumber: 5, title: "Hydrocarbons", subtitle: "Alkanes, alkenes, alkynes, isomerism and cracking", topicsCount: 12 }
    ],
    9: [
      { id: "chem-9-u1", unitNumber: 1, title: "Chemistry and Its Importance", subtitle: "Scope of chemistry, laboratory safety and apparatus handling", topicsCount: 8 },
      { id: "chem-9-u2", unitNumber: 2, title: "Measurements and Scientific Methods", subtitle: "SI units, significant figures, precision and experimental errors", topicsCount: 8 },
      { id: "chem-9-u3", unitNumber: 3, title: "Structure of the Atom", subtitle: "Subatomic particles, Thomson, Rutherford & Bohr models", topicsCount: 10 },
      { id: "chem-9-u4", unitNumber: 4, title: "Periodic Classification of Elements", subtitle: "Periods, groups, alkali metals, halogens and noble gases", topicsCount: 10 },
      { id: "chem-9-u5", unitNumber: 5, title: "Chemical Bonding", subtitle: "Octet rule, ionic bonds and covalent shared electron pairs", topicsCount: 8 }
    ]
  },
  biology: {
    12: [
      { id: "bio-12-u1", unitNumber: 1, title: "Application of Biology", subtitle: "Biotechnology, agriculture, medicine and environmental conservation", topicsCount: 10 },
      { id: "bio-12-u2", unitNumber: 2, title: "Genetics and Molecular Biology", subtitle: "Mendelian laws, DNA replication, transcription, translation & mutations", topicsCount: 14 },
      { id: "bio-12-u3", unitNumber: 3, title: "Evolution", subtitle: "Theories of Lamarck and Darwin, natural selection, evidence of evolution & speciation", topicsCount: 12 },
      { id: "bio-12-u4", unitNumber: 4, title: "Ecology", subtitle: "Biomes of Ethiopia, energy flow, food webs, ecological pyramids & nutrient cycles", topicsCount: 12 },
      { id: "bio-12-u5", unitNumber: 5, title: "Behavior", subtitle: "Innate behavior, learned behavior, communication and social organization", topicsCount: 8 }
    ],
    11: [
      { id: "bio-11-u1", unitNumber: 1, title: "Biology and Technology", subtitle: "Scientific inquiry, tools in biology, electron microscopy and ethics", topicsCount: 8 },
      { id: "bio-11-u2", unitNumber: 2, title: "Cell Biology", subtitle: "Prokaryotic vs eukaryotic cells, cell organelles and membrane transport", topicsCount: 12 },
      { id: "bio-11-u3", unitNumber: 3, title: "Enzymes", subtitle: "Enzyme structure, mechanism of active sites, factors affecting reaction rates", topicsCount: 8 },
      { id: "bio-11-u4", unitNumber: 4, title: "Energy Transformation", subtitle: "Cellular respiration (glycolysis, Krebs cycle, ETC) and photosynthesis", topicsCount: 12 },
      { id: "bio-11-u5", unitNumber: 5, title: "Genetics", subtitle: "Chromosomes, monohybrid and dihybrid crosses, sex linkage and pedigree analysis", topicsCount: 12 },
      { id: "bio-11-u6", unitNumber: 6, title: "Organisms and Their Environment", subtitle: "Adaptations in plants and animals across Ethiopian agro-ecological zones", topicsCount: 10 }
    ],
    10: [
      { id: "bio-10-u1", unitNumber: 1, title: "Biotechnology", subtitle: "Fermentation, genetic engineering, cloning and tissue culture applications", topicsCount: 8 },
      { id: "bio-10-u2", unitNumber: 2, title: "Heredity", subtitle: "Mitosis, meiosis, variation, DNA and gene expression principles", topicsCount: 10 },
      { id: "bio-10-u3", unitNumber: 3, title: "Human Nervous System", subtitle: "Neurons, reflex arcs, brain anatomy and spinal cord coordination", topicsCount: 10 },
      { id: "bio-10-u4", unitNumber: 4, title: "Endocrine Glands", subtitle: "Hormones, pituitary, thyroid, adrenal, pancreas and feedback loops", topicsCount: 8 },
      { id: "bio-10-u5", unitNumber: 5, title: "Sense Organs", subtitle: "Structure and functioning of the eye, ear, skin, nose and tongue", topicsCount: 8 }
    ],
    9: [
      { id: "bio-9-u1", unitNumber: 1, title: "Biology and Technology", subtitle: "Introduction to biological sciences and technological tools", topicsCount: 8 },
      { id: "bio-9-u2", unitNumber: 2, title: "Cell Biology", subtitle: "Microscope handling, plant vs animal cells and cell division", topicsCount: 10 },
      { id: "bio-9-u3", unitNumber: 3, title: "Human Biology and Health", subtitle: "Digestive, circulatory, and respiratory systems and disease prevention", topicsCount: 14 },
      { id: "bio-9-u4", unitNumber: 4, title: "Microorganisms and Disease", subtitle: "Bacteria, viruses, fungi, parasites and immunological defense", topicsCount: 10 },
      { id: "bio-9-u5", unitNumber: 5, title: "Ecology", subtitle: "Habitats, ecosystems, biotic/abiotic factors and environmental protection", topicsCount: 8 }
    ]
  },
  maths_nat: {
    12: [
      { id: "math-12-u1", unitNumber: 1, title: "Sequences and Series", subtitle: "Arithmetic and geometric progressions, infinite series and convergence tests", topicsCount: 12 },
      { id: "math-12-u2", unitNumber: 2, title: "Introduction to Calculus", subtitle: "Limits, continuity, derivatives, rules of differentiation & applications of extrema", topicsCount: 16 },
      { id: "math-12-u3", unitNumber: 3, title: "Statistics and Probability", subtitle: "Variance, standard deviation, normal distribution & conditional probability", topicsCount: 10 },
      { id: "math-12-u4", unitNumber: 4, title: "Vectors and 3D Geometry", subtitle: "Lines and planes in space, scalar/vector products and projections", topicsCount: 10 }
    ],
    11: [
      { id: "math-11-u1", unitNumber: 1, title: "Further on Relations and Functions", subtitle: "Domain, range, inverse functions, composition and power functions", topicsCount: 10 },
      { id: "math-11-u2", unitNumber: 2, title: "Rational Expressions and Functions", subtitle: "Simplification, partial fractions, vertical/horizontal asymptotes & graphing", topicsCount: 10 },
      { id: "math-11-u3", unitNumber: 3, title: "Coordinate Geometry", subtitle: "Equations of lines, circles, parabolas, ellipses and hyperbolas", topicsCount: 14 },
      { id: "math-11-u4", unitNumber: 4, title: "Matrices and Determinants", subtitle: "Matrix operations, inverses, Cramer's rule and systems of linear equations", topicsCount: 12 },
      { id: "math-11-u5", unitNumber: 5, title: "Vectors in Two and Three Dimensions", subtitle: "Dot product, cross product, projection and vector equations of lines", topicsCount: 10 },
      { id: "math-11-u6", unitNumber: 6, title: "Trigonometric Functions", subtitle: "Trigonometric identities, graphs, amplitude, frequency and inverses", topicsCount: 10 }
    ],
    10: [
      { id: "math-10-u1", unitNumber: 1, title: "Relations and Functions", subtitle: "Relations, functions, graph analysis and one-to-one properties", topicsCount: 8 },
      { id: "math-10-u2", unitNumber: 2, title: "Polynomial Functions", subtitle: "Roots, synthetic division, remainder theorem and graphing polynomials", topicsCount: 10 },
      { id: "math-10-u3", unitNumber: 3, title: "Exponential and Logarithmic Functions", subtitle: "Laws of exponents, logarithm properties and solving exponential equations", topicsCount: 10 },
      { id: "math-10-u4", unitNumber: 4, title: "Trigonometric Functions", subtitle: "Unit circle, sine, cosine, tangent laws, trigonometric identities and graphs", topicsCount: 12 },
      { id: "math-10-u5", unitNumber: 5, title: "Plane Geometry", subtitle: "Theorems on circles, chords, tangents, cyclic quadrilaterals and secants", topicsCount: 10 }
    ],
    9: [
      { id: "math-9-u1", unitNumber: 1, title: "The Number System", subtitle: "Real numbers, rational & irrational numbers, surds and radicals", topicsCount: 8 },
      { id: "math-9-u2", unitNumber: 2, title: "Equations and Inequalities", subtitle: "Linear equations, quadratic equations by factoring & quadratic formula", topicsCount: 10 },
      { id: "math-9-u3", unitNumber: 3, title: "Linear Functions", subtitle: "Slope, intercepts, graphing lines and systems of 2 linear equations", topicsCount: 8 },
      { id: "math-9-u4", unitNumber: 4, title: "Geometry", subtitle: "Triangles, congruence, similarity criteria and Pythagorean theorem", topicsCount: 10 },
      { id: "math-9-u5", unitNumber: 5, title: "Statistics and Probability", subtitle: "Mean, median, mode, histograms and simple event probabilities", topicsCount: 8 }
    ]
  },
  maths_soc: {
    12: [
      { id: "math-soc-12-u1", unitNumber: 1, title: "Sequences and Series", subtitle: "Arithmetic and geometric progressions, financial compounding series", topicsCount: 10 },
      { id: "math-soc-12-u2", unitNumber: 2, title: "Introduction to Calculus", subtitle: "Limits, rates of change, marginal revenue & cost optimization", topicsCount: 12 },
      { id: "math-soc-12-u3", unitNumber: 3, title: "Statistics and Probability", subtitle: "Frequency tables, normal distribution, standard error and sampling", topicsCount: 12 },
      { id: "math-soc-12-u4", unitNumber: 4, title: "Mathematical Applications in Business", subtitle: "Linear programming, annuities, depreciation and compound interest models", topicsCount: 12 }
    ],
    11: [
      { id: "math-soc-11-u1", unitNumber: 1, title: "Relations and Functions", subtitle: "Domain, range, inverse functions and real-world business models", topicsCount: 10 },
      { id: "math-soc-11-u2", unitNumber: 2, title: "Coordinate Geometry", subtitle: "Linear break-even lines, slopes, distance and circles", topicsCount: 10 },
      { id: "math-soc-11-u3", unitNumber: 3, title: "Matrices and Linear Systems", subtitle: "Matrix algebra, determinants and solving economic models", topicsCount: 10 },
      { id: "math-soc-11-u4", unitNumber: 4, title: "Consumer and Financial Mathematics", subtitle: "Simple/compound interest, loans, mortages and financial mathematics", topicsCount: 12 }
    ],
    10: [
      { id: "math-soc-10-u1", unitNumber: 1, title: "Relations and Functions", subtitle: "Relations, linear and non-linear patterns", topicsCount: 8 },
      { id: "math-soc-10-u2", unitNumber: 2, title: "Polynomial Functions", subtitle: "Roots, synthetic division and graphical interpretations", topicsCount: 10 },
      { id: "math-soc-10-u3", unitNumber: 3, title: "Exponential and Logarithmic Functions", subtitle: "Compound interest growth curves and logarithmic calculations", topicsCount: 10 },
      { id: "math-soc-10-u4", unitNumber: 4, title: "Statistics and Data Display", subtitle: "Bar charts, histograms, pie charts, mean and median", topicsCount: 10 }
    ],
    9: [
      { id: "math-soc-9-u1", unitNumber: 1, title: "The Number System", subtitle: "Real numbers, percentages, fractions and practical calculations", topicsCount: 8 },
      { id: "math-soc-9-u2", unitNumber: 2, title: "Equations and Inequalities", subtitle: "Solving linear equations and simple inequalities", topicsCount: 8 },
      { id: "math-soc-9-u3", unitNumber: 3, title: "Linear Functions", subtitle: "Linear graphs, supply/demand intersections and gradients", topicsCount: 8 },
      { id: "math-soc-9-u4", unitNumber: 4, title: "Basic Statistics", subtitle: "Averages, ranges, and probability of everyday events", topicsCount: 8 }
    ]
  },

  physics: {
    12: [
      { id: "phy-12-u1", unitNumber: 1, title: "Thermodynamics", subtitle: "Heat transfer, ideal gas laws, First & Second laws of thermodynamics, heat engines", topicsCount: 12 },
      { id: "phy-12-u2", unitNumber: 2, title: "Wave Optics", subtitle: "Huygens' principle, interference, Young's double slit, diffraction & polarization", topicsCount: 12 },
      { id: "phy-12-u3", unitNumber: 3, title: "Modern Physics", subtitle: "Blackbody radiation, photoelectric effect, Compton effect and de Broglie wavelength", topicsCount: 12 },
      { id: "phy-12-u4", unitNumber: 4, title: "Nuclear Physics", subtitle: "Radioactive decay, half-life, nuclear binding energy, fission and fusion", topicsCount: 10 }
    ],
    11: [
      { id: "phy-11-u1", unitNumber: 1, title: "Measurement and Practical Work", subtitle: "Units, dimensional analysis, uncertainty, vector addition in 2D", topicsCount: 8 },
      { id: "phy-11-u2", unitNumber: 2, title: "Two-Dimensional Motion", subtitle: "Projectile motion, trajectory equations, uniform circular motion & centripetal force", topicsCount: 12 },
      { id: "phy-11-u3", unitNumber: 3, title: "Dynamics", subtitle: "Newton's laws, friction, momentum, impulse and conservation of momentum", topicsCount: 12 },
      { id: "phy-11-u4", unitNumber: 4, title: "Work, Energy and Power", subtitle: "Work-energy theorem, conservative forces, potential energy & power calculations", topicsCount: 10 },
      { id: "phy-11-u5", unitNumber: 5, title: "Rotational Motion", subtitle: "Torque, moment of inertia, rotational kinematics & angular momentum conservation", topicsCount: 10 },
      { id: "phy-11-u6", unitNumber: 6, title: "Oscillations and Waves", subtitle: "Simple harmonic motion, pendulums, wave velocity, sound waves & Doppler effect", topicsCount: 12 }
    ],
    10: [
      { id: "phy-10-u1", unitNumber: 1, title: "Motion in Two Dimensions", subtitle: "Vectors, relative velocity and projectile motion principles", topicsCount: 8 },
      { id: "phy-10-u2", unitNumber: 2, title: "Electrostatics", subtitle: "Coulomb's law, electric fields, electric potential and capacitors", topicsCount: 10 },
      { id: "phy-10-u3", unitNumber: 3, title: "Current Electricity", subtitle: "Ohm's law, resistance, series/parallel circuits, Kirchhoff's rules & electrical power", topicsCount: 12 },
      { id: "phy-10-u4", unitNumber: 4, title: "Electromagnetism", subtitle: "Magnetic fields, forces on moving charges, electromagnetic induction & transformers", topicsCount: 12 },
      { id: "phy-10-u5", unitNumber: 5, title: "Introduction to Electronics", subtitle: "Semiconductors, p-n junction diodes, rectification and logic gates", topicsCount: 8 }
    ],
    9: [
      { id: "phy-9-u1", unitNumber: 1, title: "Physical Quantities and Measurement", subtitle: "Measurement instruments, vernier caliper, micrometer screw gauge and scalar/vectors", topicsCount: 8 },
      { id: "phy-9-u2", unitNumber: 2, title: "Motion in One Dimension", subtitle: "Distance, displacement, speed, velocity, acceleration and kinematic graphs", topicsCount: 10 },
      { id: "phy-9-u3", unitNumber: 3, title: "Force and Newton's Laws", subtitle: "Inertia, F = ma, action-reaction pairs, gravity and weight", topicsCount: 10 },
      { id: "phy-9-u4", unitNumber: 4, title: "Work, Energy and Power", subtitle: "Mechanical work, kinetic/potential energy and conservation of energy", topicsCount: 8 },
      { id: "phy-9-u5", unitNumber: 5, title: "Simple Machines", subtitle: "Mechanical advantage, velocity ratio, efficiency, levers, pulleys and inclined planes", topicsCount: 8 }
    ]
  },
  english: {
    0: [
      { id: "eng-u1", unitNumber: 1, title: "Reading Comprehension & Critical Analysis", subtitle: "Main idea extraction, skimming & scanning, inference questions and context clues", topicsCount: 10 },
      { id: "eng-u2", unitNumber: 2, title: "Tense Concord & Verb Forms", subtitle: "Present/past perfect, continuous tenses, subject-verb agreement and irregular verbs", topicsCount: 12 },
      { id: "eng-u3", unitNumber: 3, title: "Active/Passive Voice & Conditionals", subtitle: "Zero, 1st, 2nd, 3rd conditionals, mixed conditionals and passive voice transformations", topicsCount: 10 },
      { id: "eng-u4", unitNumber: 4, title: "Reported Speech & Direct Quotes", subtitle: "Tense shifts, pronoun changes, reporting questions, orders, advice and modals", topicsCount: 8 },
      { id: "eng-u5", unitNumber: 5, title: "Vocabulary, Idioms & Phrasal Verbs", subtitle: "High-frequency matric idioms, collocations, phrasal verbs, synonyms and antonyms", topicsCount: 14 },
      { id: "eng-u6", unitNumber: 6, title: "Sentence Structure, Punctuation & Connectors", subtitle: "Coordinating & subordinating conjunctions, transitional words, semicolons & commas", topicsCount: 10 }
    ]
  },
  sat: {
    0: [
      { id: "sat-u1", unitNumber: 1, title: "Reading & Information Evidence", subtitle: "Command of evidence, central ideas, paired passages, and vocabulary in context", topicsCount: 12 },
      { id: "sat-u2", unitNumber: 2, title: "Standard English Conventions & Rhetoric", subtitle: "Sentence boundaries, apostrophes, parallel structure, subject-verb agreement and modifiers", topicsCount: 12 },
      { id: "sat-u3", unitNumber: 3, title: "Heart of Algebra", subtitle: "Linear equations in 1 and 2 variables, systems of linear equations and linear inequalities", topicsCount: 14 },
      { id: "sat-u4", unitNumber: 4, title: "Problem Solving & Data Analysis", subtitle: "Ratios, percentages, proportions, unit conversions, scatterplots and two-way tables", topicsCount: 12 },
      { id: "sat-u5", unitNumber: 5, title: "Passport to Advanced Math", subtitle: "Quadratic equations, polynomials, rational functions, radicals and function notation", topicsCount: 14 },
      { id: "sat-u6", unitNumber: 6, title: "Additional Topics in Math", subtitle: "Area, volume, angles, triangles, circles theorem, and basic trigonometry (SOH CAH TOA)", topicsCount: 10 }
    ]
  },
  geography: {
    12: [
      { id: "geo-12-u1", unitNumber: 1, title: "Physical Geography of Ethiopia and the Horn", subtitle: "Geological history, landform distribution, climate zones and drainage basins of Ethiopia", topicsCount: 12 },
      { id: "geo-12-u2", unitNumber: 2, title: "Human Geography of Ethiopia", subtitle: "Population growth, density, urbanization, ethnic composition and migration patterns", topicsCount: 10 },
      { id: "geo-12-u3", unitNumber: 3, title: "Economic Activities of Ethiopia", subtitle: "Agriculture, pastoralism, forestry, mining, manufacturing and transport networks", topicsCount: 12 },
      { id: "geo-12-u4", unitNumber: 4, title: "Environmental Challenges and Sustainable Resource Management", subtitle: "Deforestation, soil erosion, land degradation, climate change and conservation policies", topicsCount: 10 }
    ],
    11: [
      { id: "geo-11-u1", unitNumber: 1, title: "The Science of Geography", subtitle: "Branches of geography, spatial analysis, GIS and remote sensing concepts", topicsCount: 8 },
      { id: "geo-11-u2", unitNumber: 2, title: "The Physical Earth", subtitle: "Plate tectonics, continental drift, vulcanicity, earthquakes and rock cycles", topicsCount: 12 },
      { id: "geo-11-u3", unitNumber: 3, title: "World Climate and Global Ecosystems", subtitle: "Atmospheric pressure, global winds, climatic classifications and world biomes", topicsCount: 12 },
      { id: "geo-11-u4", unitNumber: 4, title: "Global Population and Settlements", subtitle: "Demographic transition model, settlement patterns, urbanization and food security", topicsCount: 10 }
    ],
    10: [
      { id: "geo-10-u1", unitNumber: 1, title: "Map Reading and Interpretation", subtitle: "Grid references, scales, contour lines, relief representation and gradient calculations", topicsCount: 10 },
      { id: "geo-10-u2", unitNumber: 2, title: "The Physical Environment of the Earth", subtitle: "Weathering, mass wasting, river processes, glacial and coastal landforms", topicsCount: 12 },
      { id: "geo-10-u3", unitNumber: 3, title: "Human Population Dynamics", subtitle: "Fertility, mortality, population pyramids, censuses and demographic challenges", topicsCount: 10 },
      { id: "geo-10-u4", unitNumber: 4, title: "Global Economic Activities", subtitle: "Primary, secondary, tertiary, and quaternary economic classifications and trade", topicsCount: 10 }
    ],
    9: [
      { id: "geo-9-u1", unitNumber: 1, title: "Introduction to Geography", subtitle: "Meaning, scope, relationship with other disciplines and geographical methods", topicsCount: 6 },
      { id: "geo-9-u2", unitNumber: 2, title: "The Earth and the Solar System", subtitle: "Earth rotation, revolution, seasons, solstices, equinoxes and latitude/longitude", topicsCount: 10 },
      { id: "geo-9-u3", unitNumber: 3, title: "Weather and Climate Elements", subtitle: "Temperature, precipitation, atmospheric moisture, clouds and meteorological instruments", topicsCount: 10 },
      { id: "geo-9-u4", unitNumber: 4, title: "Major Landforms and Drainage Systems", subtitle: "Mountains, plateaus, plains, lakes and river drainage patterns", topicsCount: 8 }
    ]
  },
  history: {
    12: [
      { id: "hist-12-u1", unitNumber: 1, title: "Ethiopia and the Horn (1855–1941)", subtitle: "State building under Tewodros, Yohannes, Menelik II, Battle of Adwa & Italian invasion", topicsCount: 14 },
      { id: "hist-12-u2", unitNumber: 2, title: "The World Since 1945", subtitle: "Post-WWII order, Cold War, decolonization of Africa, Non-Aligned Movement & fall of USSR", topicsCount: 12 },
      { id: "hist-12-u3", unitNumber: 3, title: "Ethiopian History (1941–1991)", subtitle: "Restoration of Haile Selassie, student movement, 1974 revolution, Derg regime & civil war", topicsCount: 14 },
      { id: "hist-12-u4", unitNumber: 4, title: "Contemporary Global and African Issues", subtitle: "Globalization, regional integration (AU, IGAD), democratization and conflict resolution", topicsCount: 8 }
    ],
    11: [
      { id: "hist-11-u1", unitNumber: 1, title: "Ancient World Civilizations", subtitle: "Mesopotamia, Ancient Egypt, Indus Valley, Ancient Greece and the Roman Empire", topicsCount: 10 },
      { id: "hist-11-u2", unitNumber: 2, title: "The Medieval World", subtitle: "Feudalism in Europe, rise of Islam, Byzantine Empire and trans-Saharan trade", topicsCount: 10 },
      { id: "hist-11-u3", unitNumber: 3, title: "The Dawn of the Modern World", subtitle: "Renaissance, Reformation, Scientific Revolution, and Enlightenment philosophy", topicsCount: 10 },
      { id: "hist-11-u4", unitNumber: 4, title: "Peoples and States of Africa to 1800", subtitle: "Kingdom of Aksum, Zagwe, Medieval Christian Highland kingdom, Adal Sultanate & Oromo movements", topicsCount: 12 },
      { id: "hist-11-u5", unitNumber: 5, title: "The Atlantic Slave Trade and Colonial Expansion", subtitle: "Trans-Atlantic triangle, scramble for Africa and early anti-colonial resistance", topicsCount: 10 }
    ],
    10: [
      { id: "hist-10-u1", unitNumber: 1, title: "The Age of Exploration and Commercial Revolution", subtitle: "Voyages of discovery, mercantilism and early European trade empires", topicsCount: 8 },
      { id: "hist-10-u2", unitNumber: 2, title: "The Industrial Revolution and Social Changes", subtitle: "Technological innovations, rise of industrial capitalism, urbanization and labor movements", topicsCount: 10 },
      { id: "hist-10-u3", unitNumber: 3, title: "Colonialism and Resistance in Africa", subtitle: "Berlin Conference (1884-85), colonial administrative systems and African resistance", topicsCount: 10 },
      { id: "hist-10-u4", unitNumber: 4, title: "The First and Second World Wars", subtitle: "Causes, alliances, major fronts, League of Nations, rise of fascism and United Nations", topicsCount: 12 }
    ],
    9: [
      { id: "hist-9-u1", unitNumber: 1, title: "Introduction to History", subtitle: "Historical sources (primary & secondary), historiography, dating methods and chronology", topicsCount: 6 },
      { id: "hist-9-u2", unitNumber: 2, title: "Human Evolution and Prehistoric Societies", subtitle: "Hominid fossils in the Afar Rift, stone ages, domestication of plants and animals", topicsCount: 8 },
      { id: "hist-9-u3", unitNumber: 3, title: "Ancient Civilizations of the Nile Basin", subtitle: "Nubia (Kush), Meroe, Punt and early contacts in the Red Sea basin", topicsCount: 8 },
      { id: "hist-9-u4", unitNumber: 4, title: "Peoples and States of Pre-16th Century Ethiopia", subtitle: "Da'amat, Aksumite civilization, currency, architecture and rock-hewn churches of Lalibela", topicsCount: 10 }
    ]
  },
  economics: {
    12: [
      { id: "econ-12-u1", unitNumber: 1, title: "Macroeconomic Policy Instruments", subtitle: "Fiscal policy, monetary policy, government budget deficits, taxation and public debt", topicsCount: 12 },
      { id: "econ-12-u2", unitNumber: 2, title: "International Trade and Finance", subtitle: "Absolute and comparative advantage, balance of payments, exchange rates & trade barriers", topicsCount: 12 },
      { id: "econ-12-u3", unitNumber: 3, title: "Economic Growth and Development", subtitle: "Indicators of development (GDP vs HDI), poverty alleviation and sustainable goals", topicsCount: 10 },
      { id: "econ-12-u4", unitNumber: 4, title: "The Structure of the Ethiopian Economy", subtitle: "Agricultural transformation, industrial policy, infrastructure and financial sector reforms", topicsCount: 10 }
    ],
    11: [
      { id: "econ-11-u1", unitNumber: 1, title: "Theory of Consumer Behavior", subtitle: "Cardinal utility (total and marginal utility) vs ordinal utility (indifference curves & budget lines)", topicsCount: 10 },
      { id: "econ-11-u2", unitNumber: 2, title: "Theory of Production and Costs", subtitle: "Short-run production, law of diminishing returns, fixed/variable costs & long-run economies of scale", topicsCount: 12 },
      { id: "econ-11-u3", unitNumber: 3, title: "Market Structures and Pricing", subtitle: "Perfect competition, monopoly, monopolistic competition and oligopoly equilibrium", topicsCount: 12 },
      { id: "econ-11-u4", unitNumber: 4, title: "National Income Accounting", subtitle: "GDP, GNP, NNP, expenditure/income/output methods, real vs nominal GDP and price deflator", topicsCount: 10 }
    ],
    10: [
      { id: "econ-10-u1", unitNumber: 1, title: "Introduction to Economics", subtitle: "Scarcity, choice, opportunity cost, and the Production Possibility Frontier (PPF)", topicsCount: 8 },
      { id: "econ-10-u2", unitNumber: 2, title: "Demand, Supply and Market Equilibrium", subtitle: "Law of demand, law of supply, price elasticity of demand/supply, price ceilings & floors", topicsCount: 12 },
      { id: "econ-10-u3", unitNumber: 3, title: "Money and Banking System", subtitle: "Functions of money, National Bank of Ethiopia (central banking) and commercial banking roles", topicsCount: 10 },
      { id: "econ-10-u4", unitNumber: 4, title: "The Role of Government in the Economy", subtitle: "Public goods, externalities, market failures and government regulation", topicsCount: 8 }
    ],
    9: [
      { id: "econ-9-u1", unitNumber: 1, title: "Fundamental Concepts of Economics", subtitle: "Definition, micro vs macro economics, positive vs normative economics", topicsCount: 6 },
      { id: "econ-9-u2", unitNumber: 2, title: "Economic Systems", subtitle: "Traditional, command, capitalist (free market) and mixed economic systems", topicsCount: 8 },
      { id: "econ-9-u3", unitNumber: 3, title: "Production and Factors of Production", subtitle: "Land, labor, capital and entrepreneurship; specialization and division of labor", topicsCount: 8 },
      { id: "econ-9-u4", unitNumber: 4, title: "Basic Markets and Prices", subtitle: "Barter system, introduction to money, simple buying and selling mechanisms", topicsCount: 8 }
    ]
  }
};
