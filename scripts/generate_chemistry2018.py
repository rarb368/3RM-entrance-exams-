import json

# 60 questions for Chemistry 2018
chem_2018 = [
    {
        "id": "chem-2018-01",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Faraday's Laws of Electrolysis",
        "year": "2018",
        "questionNumber": 1,
        "question": "The masses of different substances, liberated or deposited by the same amount of electricity, are proportional to their equivalent masses. This statement is ______.",
        "options": [
            "Faraday's first law of electrolysis",
            "the law of definite proportion",
            "Faraday's second law of electrolysis",
            "the law of multiple proportion"
        ],
        "correctAnswer": 2,
        "explanation": "Faraday's second law of electrolysis states that when the same quantity of electricity is passed through different electrolytes, the masses of substances liberated or deposited at the electrodes are directly proportional to their equivalent weights (equivalent masses)."
    },
    {
        "id": "chem-2018-02",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Atomic Structure and Periodic Properties of the Elements",
        "unitNumber": 1,
        "topic": "Electron Configuration and Periodic Table",
        "year": "2018",
        "questionNumber": 2,
        "question": "An unknown element has the following electronic configuration: 1s² 2s² 2p⁶ 3s² 3p³. To which period and group do this element belongs in the periodic table, respectively?",
        "options": [
            "3 and VA",
            "5 and IIIA",
            "3 and IIIA",
            "4 and IIA"
        ],
        "correctAnswer": 0,
        "explanation": "The highest principal quantum number is n=3, so the element is in Period 3. The valence shell configuration is 3s² 3p³, giving 2 + 3 = 5 valence electrons, placing it in Group VA (Group 15, Nitrogen family). The element is Phosphorus (P, Z=15)."
    },
    {
        "id": "chem-2018-03",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Chemical Reactions and Stoichiometry",
        "unitNumber": 1,
        "topic": "Balancing Chemical Equations",
        "year": "2018",
        "questionNumber": 3,
        "question": "Which of the following reaction represents the chemical equation for the reaction that takes place between aluminum metal and solution of hydrochloric acid?",
        "options": [
            "2AlCl₃(aq) + 3H₂(g) → 2Al(s) + 6HCl(aq)",
            "2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)",
            "2Al + 6HCl(aq) → 2AlCl₃(aq)",
            "Al + HCl → AlCl₃"
        ],
        "correctAnswer": 1,
        "explanation": "Aluminum metal displaces hydrogen from dilute hydrochloric acid in a single replacement reaction: 2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)."
    },
    {
        "id": "chem-2018-04",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Quantitative Electrolysis Calculations",
        "year": "2018",
        "questionNumber": 4,
        "question": "A cell containing AlCl₃ as an electrolyte, is placed in series with another cell containing AgNO₃ as an electrolyte. What mass of Ag is deposited, when 18g of Al is deposited at the cathode electrode? (M_Ag = 108 g/mol and M_Al = 27 g/mol)",
        "options": [
            "36 g",
            "24 g",
            "216 g",
            "72 g"
        ],
        "correctAnswer": 2,
        "explanation": "By Faraday's second law: (Mass of Al / Equivalent weight of Al) = (Mass of Ag / Equivalent weight of Ag). Equivalent weight of Al = 27 / 3 = 9 g/eq. Equivalent weight of Ag = 108 / 1 = 108 g/eq. Thus, 18 / 9 = Mass of Ag / 108 => 2 = Mass of Ag / 108 => Mass of Ag = 216 g."
    },
    {
        "id": "chem-2018-05",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Acid-Base Equilibrium",
        "unitNumber": 1,
        "topic": "Properties of Nitrogen Compounds",
        "year": "2018",
        "questionNumber": 5,
        "question": "Nitric acid is a colorless fuming liquid with a boiling point of 83°C. However, it turns yellow as it stays for long time. Which of the following accounts for the observed property of nitric acid?",
        "options": [
            "NO₃⁻",
            "NO₂",
            "NO₂⁻",
            "NO"
        ],
        "correctAnswer": 1,
        "explanation": "Pure concentrated nitric acid decomposes photochemically over time: 4HNO₃ → 4NO₂ + O₂ + 2H₂O. The dissolved nitrogen dioxide (NO₂), which is a reddish-brown gas, imparts the yellowish tint to the acid."
    },
    {
        "id": "chem-2018-06",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Chemistry and Its Importance",
        "unitNumber": 1,
        "topic": "Chemical Formulas",
        "year": "2018",
        "questionNumber": 6,
        "question": "Which of the following tells the exact number of atoms of different elements present in a molecule?",
        "options": [
            "Molecular mass",
            "Empirical formula",
            "Formula mass",
            "Molecular formula"
        ],
        "correctAnswer": 3,
        "explanation": "The molecular formula gives the exact number of atoms of each element in a molecule of a compound, whereas the empirical formula gives only the simplest whole-number ratio."
    },
    {
        "id": "chem-2018-07",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Acid-Base Equilibrium",
        "unitNumber": 1,
        "topic": "Weak Acid Ionization",
        "year": "2018",
        "questionNumber": 7,
        "question": "What is the concentration of hydrogen ion in a solution of 0.1 M nicotinic acid, HC₆H₄NO₂, at 25°C? (Ka = 1.4 × 10⁻⁵)",
        "options": [
            "1.2 × 10⁻⁵ M",
            "1.2 × 10⁻³ M",
            "1.4 × 10⁻⁵ M",
            "1.4 × 10⁻⁶ M"
        ],
        "correctAnswer": 1,
        "explanation": "For a weak monoprotic acid: [H⁺] = √(Ka × C) = √(1.4 × 10⁻⁵ × 0.1) = √(1.4 × 10⁻⁶) ≈ 1.18 × 10⁻³ M ≈ 1.2 × 10⁻³ M."
    },
    {
        "id": "chem-2018-08",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Structure of the Atom",
        "unitNumber": 3,
        "topic": "Isotopes and Average Atomic Mass",
        "year": "2018",
        "questionNumber": 8,
        "question": "Chlorine has two naturally occurring isotopes. In a sample of chlorine, 25% of the atoms are Cl-37 and 75% of the atoms are Cl-35. What is the average atomic mass of chlorine?",
        "options": [
            "26.25",
            "25.75",
            "35.5",
            "36.0"
        ],
        "correctAnswer": 2,
        "explanation": "Average atomic mass = (0.75 × 35) + (0.25 × 37) = 26.25 + 9.25 = 35.5 amu."
    },
    {
        "id": "chem-2018-09",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Important Inorganic Compounds",
        "unitNumber": 3,
        "topic": "Oxides and Redox Reactions",
        "year": "2018",
        "questionNumber": 9,
        "question": "A student performs an experiment to distinguish different oxides. He/she put 100 mL KI solution into four different test tubes, acidified each with 10 drops of dilute H₂SO₄, and added: CaO in test tube 1, Al₂O₃ in 2, Na₂O₂ in 3, and P₄O₁₀ in 4. Finally, 10 mL starch solution was added to each. In which test tube will he/she observe a blue-black color change?",
        "options": [
            "Test tube 2",
            "Test tube 1",
            "Test tube 3",
            "Test tube 4"
        ],
        "correctAnswer": 2,
        "explanation": "In test tube 3, sodium peroxide (Na₂O₂) is a strong oxidizing agent. In acidic conditions, it oxidizes iodide ions (I⁻) to elemental iodine (I₂). The liberated iodine reacts with the starch solution to form an intense blue-black starch-iodine complex."
    },
    {
        "id": "chem-2018-10",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Hydrocarbons and Their Natural Sources",
        "unitNumber": 6,
        "topic": "Alkynes and Oxyacetylene Flame",
        "year": "2018",
        "questionNumber": 10,
        "question": "Combustion of acetylene at about 3000°C with oxygen produces an intense hot flame used in welding. In which group of hydrocarbons is this compound classified?",
        "options": [
            "Alkanes",
            "Aromatics",
            "Alkenes",
            "Alkynes"
        ],
        "correctAnswer": 3,
        "explanation": "Acetylene (systematic IUPAC name: ethyne, C₂H₂) contains a carbon-carbon triple bond (-C≡C-), which classifies it as an alkyne."
    },
    {
        "id": "chem-2018-11",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Bonding",
        "unitNumber": 2,
        "topic": "Exceptions to the Octet Rule",
        "year": "2018",
        "questionNumber": 11,
        "question": "Phosphorus pentafluoride, PF₅, is one example of exception to the octet rule. Why is PF₅ considered exceptional to the octet rule? This is because the:",
        "options": [
            "central atom has more than eight valence electrons.",
            "atoms attached to P have more than eight valence electrons.",
            "central atom has less than eight valence electrons.",
            "central atom has eight valence electrons."
        ],
        "correctAnswer": 0,
        "explanation": "In PF₅, phosphorus forms 5 single covalent bonds with fluorine atoms by utilizing its empty 3d orbitals, accommodating 10 valence electrons around the central P atom (an expanded valence shell / hypervalent octet exception)."
    },
    {
        "id": "chem-2018-12",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Introduction to Environmental Chemistry",
        "unitNumber": 5,
        "topic": "Atmospheric Carbon Dioxide and Global Warming",
        "year": "2018",
        "questionNumber": 12,
        "question": "In the diagram illustrating atmospheric carbon dioxide, which of the items shown (A: automobile, B: cattle, C: green tree, D: industrial factory) does NOT contribute to global warming?",
        "options": [
            "B",
            "A",
            "D",
            "C"
        ],
        "correctAnswer": 3,
        "explanation": "Item C represents a green tree/vegetation. Plants remove carbon dioxide from the atmosphere via photosynthesis, acting as carbon sinks, rather than contributing to global warming.",
        "diagramType": "chem-co2-cycle"
    },
    {
        "id": "chem-2018-13",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Energy Changes and Electrochemistry",
        "unitNumber": 4,
        "topic": "Electrolytic Conductivity",
        "year": "2018",
        "questionNumber": 13,
        "question": "You are supposed to test the conductivity of substances using a conductivity apparatus (battery, bulb, electrodes, beaker). Which of the following aqueous solutions does NOT cause the bulb to glow when the switch turns on?",
        "options": [
            "Sodium hydroxide solution",
            "Copper sulphate solution",
            "Table salt solution",
            "Sugar solution"
        ],
        "correctAnswer": 3,
        "explanation": "Sugar (sucrose, C₁₂H₂₂O₁₁) is a covalent molecular compound that dissolves as uncharged intact molecules in water (a non-electrolyte). Without mobile ions to carry electric current, the circuit remains open and the bulb will not glow.",
        "diagramType": "chem-conductivity-apparatus"
    },
    {
        "id": "chem-2018-14",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Chemical Reactions and Stoichiometry",
        "unitNumber": 1,
        "topic": "Redox Reactions with Sulfuric Acid",
        "year": "2018",
        "questionNumber": 14,
        "question": "Copper metal reacts with concentrated sulfuric acid to produce copper sulphate, sulfur dioxide and water: Cu + H₂SO₄ → CuSO₄ + SO₂ + H₂O. Which of the following is the coefficient of H₂SO₄ after balancing this chemical reaction?",
        "options": [
            "6",
            "1",
            "2",
            "3"
        ],
        "correctAnswer": 2,
        "explanation": "The balanced chemical reaction is: Cu(s) + 2H₂SO₄(aq) → CuSO₄(aq) + SO₂(g) + 2H₂O(l). The stoichiometric coefficient of H₂SO₄ is 2."
    },
    {
        "id": "chem-2018-15",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Atomic Structure and Periodic Properties of the Elements",
        "unitNumber": 1,
        "topic": "Bohr Model Energy Transitions",
        "year": "2018",
        "questionNumber": 15,
        "question": "What is the amount of energy emitted when an electron moves from the n=4 to n=2 energy level in a hydrogen atom? (R_H = 2.18 × 10⁻¹⁸ J)",
        "options": [
            "-6.54 × 10⁻¹⁸ J",
            "-4.09 × 10⁻¹⁹ J",
            "4.09 × 10⁻¹⁹ J",
            "6.54 × 10⁻¹⁸ J"
        ],
        "correctAnswer": 2,
        "explanation": "ΔE = R_H × (1/n₁² - 1/n₂²) = 2.18 × 10⁻¹⁸ J × (1/4 - 1/16) = 2.18 × 10⁻¹⁸ J × (3/16) ≈ 4.09 × 10⁻¹⁹ J."
    },
    {
        "id": "chem-2018-16",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Electrolytic Refining of Copper",
        "year": "2018",
        "questionNumber": 16,
        "question": "Consider the electrolytic refining of copper cell diagram. What is the name of the precipitate collected at the bottom of the container indicated by letter 'C'?",
        "options": [
            "Copper sulphate solution",
            "Strip of pure copper",
            "Cathode mud",
            "Anode mud"
        ],
        "correctAnswer": 3,
        "explanation": "During the electrolytic refining of copper, impure copper is used as the anode. Noble metal impurities (such as gold, silver, and platinum) that do not oxidize drop to the bottom of the cell below the anode as 'anode mud' (or anode sludge), indicated by C.",
        "diagramType": "chem-copper-refining"
    },
    {
        "id": "chem-2018-17",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Acid-Base Equilibrium",
        "unitNumber": 1,
        "topic": "Degree of Ionization",
        "year": "2018",
        "questionNumber": 17,
        "question": "Consider the equilibrium reaction of a weak acid RCOOH(aq) + H₂O(l) ⇌ RCOO⁻(aq) + H₃O⁺(aq). Which of the following is the CORRECT expression of the percent ionization of RCOOH?",
        "options": [
            "(Equilibrium concentration of H₃O⁺ / Initial concentration of the acid) × 100",
            "(Initial concentration of the acid / Equilibrium concentration of the acid) × 100",
            "(Initial concentration of RCOO⁻ / Initial concentration of the acid) × 100",
            "(Equilibrium concentration of the acid / Initial concentration of the acid) × 100"
        ],
        "correctAnswer": 0,
        "explanation": "Percent ionization is defined as the ratio of the equilibrium concentration of ionized acid ([H₃O⁺]_eq or [RCOO⁻]_eq) to the initial (formal) concentration of the non-ionized acid ([RCOOH]_initial), multiplied by 100%."
    },
    {
        "id": "chem-2018-18",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Kinetics",
        "unitNumber": 4,
        "topic": "Collision Theory and Molecular Orientation",
        "year": "2018",
        "questionNumber": 18,
        "question": "Consider the reaction: AB₂C + C → AB₂ + C₂. Which of the following collisions are effective in the formation of the products?",
        "options": [
            "The collision that results in the A and C atoms directly facing each other.",
            "The collision that results in the C atoms directly facing each other.",
            "The collision that results in the B and C atoms directly facing each other.",
            "The collision that results in the A and B atoms directly facing each other."
        ],
        "correctAnswer": 1,
        "explanation": "According to collision theory, reacting species must collide with proper spatial orientation. Because a new covalent bond is formed between the incoming C atom and the C atom bonded in AB₂C to produce C₂, the collision is only effective when the two C atoms directly face each other."
    },
    {
        "id": "chem-2018-19",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Solutions",
        "unitNumber": 2,
        "topic": "Henry's Law of Gas Solubility",
        "year": "2018",
        "questionNumber": 19,
        "question": "At 0°C and 1.0 atm, the solubility of O₂ gas in water is 48.4 mole per liter. What is the molar solubility of O₂ in a saturated water solution at a partial pressure of 0.20 atm?",
        "options": [
            "1.20 × 10⁻³ M",
            "9.68 M",
            "4.10 × 10⁻³ M",
            "2.44 M"
        ],
        "correctAnswer": 1,
        "explanation": "By Henry's Law, solubility is directly proportional to gas partial pressure: S₂ = S₁ × (P₂ / P₁) = 48.4 mol/L × (0.20 atm / 1.0 atm) = 9.68 mol/L (M)."
    },
    {
        "id": "chem-2018-20",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Important Inorganic Compounds",
        "unitNumber": 3,
        "topic": "Acidic Oxides",
        "year": "2018",
        "questionNumber": 20,
        "question": "Which one of the following does NOT explain the chemical properties of acidic oxides? Acidic oxides react with:",
        "options": [
            "acids to form salt and water.",
            "basic oxides to form salts.",
            "water to form acids.",
            "base to form salt and water."
        ],
        "correctAnswer": 0,
        "explanation": "Acidic oxides (non-metal oxides such as SO₂, CO₂, P₄O₁₀) react with water to form oxyacids, with bases to form salt and water, and with basic oxides to form salts. Being acidic, they do NOT react with acids."
    },
    {
        "id": "chem-2018-21",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Periodic Classification of Elements",
        "unitNumber": 4,
        "topic": "Bohr-Bury Shell Filling",
        "year": "2018",
        "questionNumber": 21,
        "question": "What is the electronic configuration of an element with atomic number 19 (Potassium), on the main energy levels (K, L, M, N)?",
        "options": [
            "2, 8, 7, 2",
            "2, 8, 9",
            "2, 9, 8",
            "2, 8, 8, 1"
        ],
        "correctAnswer": 3,
        "explanation": "Potassium (Z=19) has electron configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. Shell K=2, L=8, M=8, N=1 (2, 8, 8, 1)."
    },
    {
        "id": "chem-2018-22",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Introduction to Environmental Chemistry",
        "unitNumber": 5,
        "topic": "Water Pollution and Eutrophication",
        "year": "2018",
        "questionNumber": 22,
        "question": "Recently, Lake Tana was invaded by an invasive surface water weed commonly known as 'Emboch' (Water Hyacinth). Which one of the following describes this phenomenon?",
        "options": [
            "Industrial pollution",
            "Water pollution",
            "Soil pollution",
            "Air pollution"
        ],
        "correctAnswer": 1,
        "explanation": "The proliferation of water hyacinth (Emboch) on Lake Tana is driven by nutrient runoff (eutrophication) and degrades the aquatic ecosystem by blocking light and depleting dissolved oxygen, representing severe water pollution."
    },
    {
        "id": "chem-2018-23",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Structure of the Atom",
        "unitNumber": 3,
        "topic": "Early Atomic Philosophies",
        "year": "2018",
        "questionNumber": 23,
        "question": "Which one of the following ancient philosophers believed that matter is NOT continuous, but composed of indivisible particles?",
        "options": [
            "Plato",
            "Democritus",
            "Empedocles",
            "Aristotle"
        ],
        "correctAnswer": 1,
        "explanation": "Democritus proposed the discontinuous atomist theory, arguing that matter consists of tiny, indivisible, indivisible particles called 'atomos'."
    },
    {
        "id": "chem-2018-24",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Important Inorganic Compounds",
        "unitNumber": 3,
        "topic": "Classification of Oxides and Peroxides",
        "year": "2018",
        "questionNumber": 24,
        "question": "Which of the following oxides has oxygen with a negative one (-1) oxidation state in its molecule?",
        "options": [
            "Basic oxide",
            "Super oxide",
            "Acidic oxide",
            "Peroxide"
        ],
        "correctAnswer": 3,
        "explanation": "In peroxides (such as H₂O₂ and Na₂O₂), the O₂²⁻ ion contains an O-O single bond, assigning oxygen an oxidation number of -1. In superoxides it is -1/2, and in normal oxides it is -2."
    },
    {
        "id": "chem-2018-25",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Energy Changes and Electrochemistry",
        "unitNumber": 4,
        "topic": "Thermodynamics of Combustion",
        "year": "2018",
        "questionNumber": 25,
        "question": "Combustion of methane results in a release of heat. Which of the following statements describes this chemical phenomenon? The release of heat is attributed to the energy change:",
        "options": [
            "due to the emission of light.",
            "that accompanies the reaction process.",
            "that resists changes in the reaction process.",
            "due to the absorption of light."
        ],
        "correctAnswer": 1,
        "explanation": "In an exothermic combustion reaction, the enthalpy of products is lower than reactants. The net chemical bond energy released is the heat change (ΔH < 0) that accompanies the reaction process."
    },
    {
        "id": "chem-2018-26",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Polymers",
        "unitNumber": 4,
        "topic": "Synthetic vs Natural Polymers",
        "year": "2018",
        "questionNumber": 26,
        "question": "Which one of the following is a synthetic polymer?",
        "options": [
            "Teflon",
            "Enzymes",
            "Starch",
            "Cotton"
        ],
        "correctAnswer": 0,
        "explanation": "Teflon (polytetrafluoroethylene, PTFE) is a man-made synthetic polymer. Enzymes (proteins), starch, and cotton (cellulose) are all naturally occurring biopolymers."
    },
    {
        "id": "chem-2018-27",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Bonding",
        "unitNumber": 2,
        "topic": "Molecular Polarity and Dipole Moments",
        "year": "2018",
        "questionNumber": 27,
        "question": "Which one of the following is a polar covalent molecule?",
        "options": [
            "CO₂",
            "CCl₄",
            "CH₄",
            "SO₂"
        ],
        "correctAnswer": 3,
        "explanation": "SO₂ has a bent V-shaped molecular geometry (lone pair on sulfur), which causes bond dipoles not to cancel, giving it a net dipole moment (polar). CO₂, CCl₄, and CH₄ are highly symmetrical and have zero net dipole (nonpolar)."
    },
    {
        "id": "chem-2018-28",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Nernst Equation and Le Chatelier Principle in Cells",
        "year": "2018",
        "questionNumber": 28,
        "question": "Consider the electrochemical reaction: Cu(s) + 2Ce⁴⁺(aq) ⇌ Cu²⁺(aq) + 2Ce³⁺(aq). Which of the following effects increases the cell potential of the reaction?",
        "options": [
            "Decreasing concentration of Cu(s)",
            "Increasing concentration of Cu²⁺",
            "Increasing concentration of Ce³⁺",
            "Increasing concentration of Ce⁴⁺"
        ],
        "correctAnswer": 3,
        "explanation": "By the Nernst equation: E_cell = E°_cell - (RT/nF)ln([Cu²⁺][Ce³⁺]² / [Ce⁴⁺]²). Increasing reactant concentration [Ce⁴⁺] shifts the reaction forward, decreasing Q and increasing the cell potential E_cell."
    },
    {
        "id": "chem-2018-29",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Industrial Chemistry",
        "unitNumber": 3,
        "topic": "The Contact Process for Sulfuric Acid",
        "year": "2018",
        "questionNumber": 29,
        "question": "In the schematic diagram of the Contact Process for sulfuric acid manufacturing, what are the compounds represented by letters A, B and C, respectively?",
        "options": [
            "SO₂, H₂SO₄ and SO₄²⁻",
            "SO₃, SO₂ and H₂SO₄",
            "SO₂, SO₃ and H₂SO₄",
            "SO₂, H₂SO₄ and SO₃"
        ],
        "correctAnswer": 2,
        "explanation": "In the Contact process: A is SO₂ (produced in the sulfur furnace), B is SO₃ (produced in the catalytic converter over V₂O₅), and C is concentrated H₂SO₄ product (from oleum dilution).",
        "diagramType": "chem-contact-process"
    },
    {
        "id": "chem-2018-30",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Metals and Non-metals",
        "unitNumber": 5,
        "topic": "Alloys of Copper",
        "year": "2018",
        "questionNumber": 30,
        "question": "Which one of the following is an alloy of 87% copper, 10% tin, and 3% zinc?",
        "options": [
            "Solder",
            "Gun metal",
            "Bronze",
            "Gold alloys"
        ],
        "correctAnswer": 1,
        "explanation": "Gun metal (also known as red brass) typically consists of approximately 86-88% copper, 10% tin, and 2-4% zinc."
    },
    {
        "id": "chem-2018-31",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Acid-Base Equilibrium",
        "unitNumber": 1,
        "topic": "pH and pOH Calculations",
        "year": "2018",
        "questionNumber": 31,
        "question": "What is the pH of a solution when the concentration of hydroxide ion [OH⁻] is 1.0 × 10⁻⁹ M?",
        "options": [
            "5",
            "1.8",
            "9",
            "7"
        ],
        "correctAnswer": 0,
        "explanation": "pOH = -log[OH⁻] = -log(1.0 × 10⁻⁹) = 9. Since pH + pOH = 14 at 25°C, pH = 14 - 9 = 5."
    },
    {
        "id": "chem-2018-32",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Physical State of Matter",
        "unitNumber": 3,
        "topic": "Graham's Law of Effusion and Diffusion",
        "year": "2018",
        "questionNumber": 32,
        "question": "A chemistry teacher designed to fill three similar balloons with three different gases to compare diffusion rates: helium (balloon 1), hydrogen (balloon 2), and oxygen (balloon 3). Which balloon will fill first?",
        "options": [
            "Second balloon",
            "Third balloon",
            "First balloon",
            "First and second balloon fills equal"
        ],
        "correctAnswer": 0,
        "explanation": "Graham's Law of Diffusion states that rate ∝ 1/√(molar mass). Molar mass of H₂ = 2 g/mol, He = 4 g/mol, O₂ = 32 g/mol. Hydrogen has the smallest molar mass, diffuses fastest, and fills balloon 2 first."
    },
    {
        "id": "chem-2018-33",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Measurements and Scientific Methods",
        "unitNumber": 2,
        "topic": "Fundamental Chemical Laws",
        "year": "2018",
        "questionNumber": 33,
        "question": "Oxygen reacts with sulfur to form sulfur dioxide. Experimentally, the total mass of the reactants (oxygen and sulfur) is equal to the mass of the product (sulfur dioxide). Which law illustrates this experiment?",
        "options": [
            "Law of constant composition",
            "Law of conservation of mass",
            "Law of multiple proportions",
            "Law of definite proportions"
        ],
        "correctAnswer": 1,
        "explanation": "Lavoisier's Law of Conservation of Mass states that in an ordinary chemical reaction, matter is neither created nor destroyed, so the total mass of reactants equals the total mass of products."
    },
    {
        "id": "chem-2018-34",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Chemistry and Its Importance",
        "unitNumber": 1,
        "topic": "Classification of Mixtures",
        "year": "2018",
        "questionNumber": 34,
        "question": "Which of the following is formed from the combination of two or more substances with at least two visible phases?",
        "options": [
            "Heterogeneous mixture",
            "Compound",
            "Homogeneous mixture",
            "Solution"
        ],
        "correctAnswer": 0,
        "explanation": "A heterogeneous mixture is non-uniform in composition and consists of two or more physically distinct and visible phases separated by boundaries."
    },
    {
        "id": "chem-2018-35",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Physical State of Matter",
        "unitNumber": 3,
        "topic": "Combined Gas Law",
        "year": "2018",
        "questionNumber": 35,
        "question": "If a 50 cm³ sample of gas exerts a pressure of 60.0 kPa at 35°C, what volume will it occupy at STP (0°C and 1 atm = 101.325 kPa) in cm³?",
        "options": [
            "226.86",
            "234.0",
            "26.24",
            "265.0"
        ],
        "correctAnswer": 2,
        "explanation": "P₁V₁/T₁ = P₂V₂/T₂. T₁ = 35 + 273.15 = 308.15 K, T₂ = 273.15 K. V₂ = (P₁ × V₁ × T₂) / (P₂ × T₁) = (60.0 × 50 × 273.15) / (101.325 × 308.15) ≈ 26.24 cm³."
    },
    {
        "id": "chem-2018-36",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Polymers",
        "unitNumber": 4,
        "topic": "Condensation Polymers and PET",
        "year": "2018",
        "questionNumber": 36,
        "question": "The polymer shown: -[O-CH₂-CH₂-O-CO-C₆H₄-CO]-_n is prepared by condensation polymerization. What are the monomers for this polymer?",
        "options": [
            "Adipic acid and hexamethylene diamine",
            "Ethylene glycol and terephthalic acid",
            "Ethylene glycol and adipic acid",
            "Terephthalic acid and hexamethylene diamine"
        ],
        "correctAnswer": 1,
        "explanation": "The repeating ester unit corresponds to Polyethylene terephthalate (PET or Dacron), formed by condensation of ethylene glycol (HO-CH₂CH₂-OH) and terephthalic acid (HOOC-C₆H₄-COOH).",
        "diagramType": "chem-pet-polymer"
    },
    {
        "id": "chem-2018-37",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Some Important Oxygen-Containing Organic Compounds",
        "unitNumber": 6,
        "topic": "Alcohols and IUPAC Nomenclature",
        "year": "2018",
        "questionNumber": 37,
        "question": "Which of the following is the condensed structural formula of 2-hexanol?",
        "options": [
            "CH₃CH₂CH₂CH₂CH(OH)CH₃",
            "CH₃CH₂CH₂CH₂C(OH)₂CH₃",
            "CH₃CH₂CH₂C(OH)₂CH₂CH₃",
            "CH₃CH₂CH₂CH₂CH₂CH₂OH"
        ],
        "correctAnswer": 0,
        "explanation": "2-hexanol is a 6-carbon secondary alcohol with the -OH hydroxyl functional group at carbon-2: CH₃-CH₂-CH₂-CH₂-CH(OH)-CH₃."
    },
    {
        "id": "chem-2018-38",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Physical State of Matter",
        "unitNumber": 3,
        "topic": "Types of Crystalline Solids",
        "year": "2018",
        "questionNumber": 38,
        "question": "Crystalline solids are classified as covalent, ionic, molecular, and metallic crystals. Which of the following is an example of a metallic crystal?",
        "options": [
            "Diamond",
            "Gold",
            "KCl",
            "CaCO₃"
        ],
        "correctAnswer": 1,
        "explanation": "Gold (Au) is held together by metallic bonding (delocalized sea of valence electrons among positive metal cations). Diamond is covalent network; KCl and CaCO₃ are ionic."
    },
    {
        "id": "chem-2018-39",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Daniell Cell EMF",
        "year": "2018",
        "questionNumber": 39,
        "question": "A Grade-12 student sets up a Zn-Cu voltaic cell containing 1.0 M ZnSO₄ and 1.0 M CuSO₄ solutions to measure the standard cell potential using a voltmeter. What will be the reading of the voltmeter?",
        "options": [
            "0.34 V",
            "0.76 V",
            "0.42 V",
            "1.1 V"
        ],
        "correctAnswer": 3,
        "explanation": "E°_cell = E°_cathode - E°_anode = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = +0.34 V - (-0.76 V) = 1.10 V."
    },
    {
        "id": "chem-2018-40",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Preferential Discharge Factors",
        "year": "2018",
        "questionNumber": 40,
        "question": "Which of the following factors does NOT affect preferential discharge of ions during electrolysis?",
        "options": [
            "Nature of ions",
            "Nature of electrodes",
            "Thickness of the electrodes",
            "Concentration of ions"
        ],
        "correctAnswer": 2,
        "explanation": "Preferential discharge is determined by: (1) position of ions in the electrochemical series (nature of ions), (2) concentration of ions, and (3) nature/material of the electrodes (inert vs active). The physical thickness of the electrode does not affect discharge thermodynamics or selectivity."
    },
    {
        "id": "chem-2018-41",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Structure of the Atom",
        "unitNumber": 3,
        "topic": "Ion Formation in Alkaline Earth Metals",
        "year": "2018",
        "questionNumber": 41,
        "question": "A given element 'M' has atomic number 20 (Calcium). What is the common ion form of this element after the ionization process?",
        "options": [
            "M⁺",
            "M²⁺",
            "M⁻",
            "M²⁻"
        ],
        "correctAnswer": 1,
        "explanation": "Element 20 is Calcium (Ca), Group IIA alkaline earth metal with valence configuration 4s². It readily loses 2 valence electrons to achieve the argon noble gas octet, forming Ca²⁺ (M²⁺)."
    },
    {
        "id": "chem-2018-42",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Periodic Classification of Elements",
        "unitNumber": 4,
        "topic": "Periods of the Periodic Table",
        "year": "2018",
        "questionNumber": 42,
        "question": "Which one of the following periods is considered a short period in the modern periodic table?",
        "options": [
            "Period 5",
            "Period 3",
            "Period 4",
            "Period 6"
        ],
        "correctAnswer": 1,
        "explanation": "Periods 1, 2, and 3 are known as short periods (Period 1 has 2 elements, Periods 2 and 3 each have 8 elements). Periods 4 and 5 (18 elements) and 6 and 7 (32 elements) are long periods."
    },
    {
        "id": "chem-2018-43",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Chemical Reactions and Stoichiometry",
        "unitNumber": 1,
        "topic": "Types of Chemical Reactions",
        "year": "2018",
        "questionNumber": 43,
        "question": "What is the reaction type that involves the breaking down of a single compound into two or more simpler components?",
        "options": [
            "Decomposition reaction",
            "Redox reaction",
            "Displacement reaction",
            "Combination reaction"
        ],
        "correctAnswer": 0,
        "explanation": "A decomposition reaction is defined as a chemical process where a single reactant breaks down into two or more simpler products (AB → A + B)."
    },
    {
        "id": "chem-2018-44",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Chemical Reactions and Stoichiometry",
        "unitNumber": 1,
        "topic": "Conservation of Mass in Precipitation Reactions",
        "year": "2018",
        "questionNumber": 44,
        "question": "A student tests the reaction between silver nitrate solution and dilute hydrochloric acid. Which reaction equation is correctly balanced according to the law of conservation of mass?",
        "options": [
            "HCl(aq) + AgNO₃(aq) → AgCl(s) + HNO₃(l)",
            "HCl(aq) + AgNO₃(aq) → 2AgCl(s) + HNO₃(l)",
            "HCl(aq) + AgNO₃(aq) → AgCl(s) + 2HNO₃(l)",
            "2HCl(aq) + AgNO₃(aq) → AgCl(s) + HNO₃(l)"
        ],
        "correctAnswer": 0,
        "explanation": "HCl(aq) + AgNO₃(aq) → AgCl(s) + HNO₃(aq) is stoichiometrically balanced with 1 H, 1 Cl, 1 Ag, 1 N, and 3 O atoms on both sides."
    },
    {
        "id": "chem-2018-45",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Chemistry and Its Importance",
        "unitNumber": 1,
        "topic": "Natural Resources",
        "year": "2018",
        "questionNumber": 45,
        "question": "Which of the following is a non-renewable natural resource?",
        "options": [
            "Cotton",
            "Gold",
            "Silk",
            "Wood"
        ],
        "correctAnswer": 1,
        "explanation": "Gold is a metallic mineral resource formed over millions of years within the Earth's crust. Once extracted, it cannot be regenerated on a human timescale, making it non-renewable."
    },
    {
        "id": "chem-2018-46",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Equilibrium",
        "unitNumber": 5,
        "topic": "Properties of the Equilibrium Constant Kc",
        "year": "2018",
        "questionNumber": 46,
        "question": "Consider the equilibrium reaction: aA + bB ⇌ cC + dD. Which of the following is CORRECT about the equilibrium constant Kc?",
        "options": [
            "Removing both reactants and products decrease the value of Kc.",
            "Adding products to the system decreases the value of Kc.",
            "Adding reactants to the system increases the value of Kc.",
            "Kc is not affected by removing both reactants and products."
        ],
        "correctAnswer": 3,
        "explanation": "The equilibrium constant Kc depends solely on temperature. Adding or removing reactants or products shifts the reaction quotient Q and equilibrium position (Le Chatelier's principle), but does NOT alter the value of Kc."
    },
    {
        "id": "chem-2018-47",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Bonding",
        "unitNumber": 2,
        "topic": "VSEPR Geometry of PCl3",
        "year": "2018",
        "questionNumber": 47,
        "question": "What is the molecular shape of phosphorus trichloride, PCl₃? (Atomic numbers: P=15, Cl=17)",
        "options": [
            "Trigonal planar",
            "Trigonal pyramidal",
            "Square planar",
            "Tetrahedral"
        ],
        "correctAnswer": 1,
        "explanation": "Phosphorus has 5 valence electrons. In PCl₃, P forms 3 single bonds with Cl and has 1 non-bonding lone pair (AX₃E notation). The electron pair geometry is tetrahedral and the molecular geometry is trigonal pyramidal."
    },
    {
        "id": "chem-2018-48",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Kinetics",
        "unitNumber": 4,
        "topic": "Instantaneous Reaction Rate",
        "year": "2018",
        "questionNumber": 48,
        "question": "In the concentration vs time graph showing the consumption of reactant D over time with points A (early time) and B (later time), which statement is CORRECT about the rate of reaction?",
        "options": [
            "The rate for this reaction is constant at all points",
            "The instantaneous rate at point A is greater than at point B",
            "The instantaneous rate at point A is equal to that at point B",
            "The instantaneous rate at point A is less than at point B"
        ],
        "correctAnswer": 1,
        "explanation": "The instantaneous reaction rate is given by the negative slope of the tangent line to the concentration-time curve. Because the curve is much steeper at earlier point A than at later point B, the rate at point A is greater.",
        "diagramType": "chem-rate-graph"
    },
    {
        "id": "chem-2018-49",
        "subject": "chemistry",
        "grade": 9,
        "unit": "Structure of the Atom",
        "unitNumber": 3,
        "topic": "Subatomic Particles and Relative Charges",
        "year": "2018",
        "questionNumber": 49,
        "question": "Neutron is one of the fundamental sub-atomic particles of an atom. What is the relative charge of a neutron in an atom?",
        "options": [
            "0",
            "+1",
            "-1",
            "+2"
        ],
        "correctAnswer": 0,
        "explanation": "Neutrons are electrically neutral subatomic particles located in the atomic nucleus, possessing a relative electric charge of 0."
    },
    {
        "id": "chem-2018-50",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Zn-Cu Galvanic Cell Electrodes",
        "year": "2018",
        "questionNumber": 50,
        "question": "In the diagram of the Zn-Cu voltaic cell, what does letter 'B' represent (the copper electrode where Cu²⁺ + 2e⁻ → Cu occurs)?",
        "options": [
            "Cathode",
            "Voltmeter",
            "Anode",
            "Salt bridge"
        ],
        "correctAnswer": 0,
        "explanation": "In a voltaic cell, reduction occurs at the cathode (positive terminal). Copper ions gain electrons to form copper metal at electrode B, so B is the cathode.",
        "diagramType": "chem-voltaic-cell"
    },
    {
        "id": "chem-2018-51",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Hydrocarbons and Their Natural Sources",
        "unitNumber": 6,
        "topic": "IUPAC Nomenclature of Alkynes",
        "year": "2018",
        "questionNumber": 51,
        "question": "Consider the structure: CH₃CH₂CH(CH₃)C≡CCH₂CH₃. Which one of the following is the IUPAC name for this organic compound?",
        "options": [
            "2-Ethyl-6-heptyne",
            "6-Ethyl-3-heptyne",
            "3-Methyl-5-octyne",
            "6-Methyl-3-octyne"
        ],
        "correctAnswer": 3,
        "explanation": "The longest continuous chain containing the triple bond has 8 carbons (octyne). Numbering from the right gives the triple bond locant 3 (lower than 5 from the left). At C-6, there is a methyl substituent. Thus, the correct IUPAC name is 6-methyl-3-octyne.",
        "diagramType": "chem-alkyne-structure"
    },
    {
        "id": "chem-2018-52",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Chemical Reactions and Stoichiometry",
        "unitNumber": 1,
        "topic": "Synthesis Reactions",
        "year": "2018",
        "questionNumber": 52,
        "question": "In the experiment where iron filings and sulfur powder are heated in a test tube over a Bunsen burner, which type of chemical reaction takes place?",
        "options": [
            "Decomposition reaction",
            "Direct combination reaction",
            "Double displacement reaction",
            "Single displacement reaction"
        ],
        "correctAnswer": 1,
        "explanation": "Fe(s) + S(s) → FeS(s). Iron and sulfur combine directly upon heating to form a single compound, iron(II) sulfide, which is a direct combination (synthesis) reaction.",
        "diagramType": "chem-iron-sulfur"
    },
    {
        "id": "chem-2018-53",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Equilibrium",
        "unitNumber": 5,
        "topic": "Equilibrium Constant Calculation",
        "year": "2018",
        "questionNumber": 53,
        "question": "An equilibrium mixture contains 0.30 mol CO, 0.10 mol H₂, 0.020 mol H₂O, and an unknown concentration of CH₄ in a 1.0 L container at 1200 K: CO(g) + 3H₂(g) ⇌ CH₄(g) + H₂O(g), Kc = 3.92. What is the molar concentration of CH₄ at equilibrium?",
        "options": [
            "0.059 mol/L",
            "0.015 mol/L",
            "0.197 mol/L",
            "0.001 mol/L"
        ],
        "correctAnswer": 0,
        "explanation": "Kc = ([CH₄][H₂O]) / ([CO][H₂]³) => 3.92 = ([CH₄] × 0.020) / (0.30 × 0.10³) = 0.020[CH₄] / 0.0003. Thus: 0.020[CH₄] = 3.92 × 0.0003 = 0.001176 => [CH₄] = 0.001176 / 0.020 ≈ 0.0588 mol/L ≈ 0.059 mol/L."
    },
    {
        "id": "chem-2018-54",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Acid-Base Equilibrium",
        "unitNumber": 1,
        "topic": "Salt Hydrolysis",
        "year": "2018",
        "questionNumber": 54,
        "question": "Which one of the following is the reason why hydrolysis of sodium carbonate (Na₂CO₃) gives a basic solution? This is due to:",
        "options": [
            "CO₃²⁻ is hydrolyzed",
            "H⁺ is hydrolyzed",
            "OH⁻ is hydrolyzed",
            "Na⁺ is hydrolyzed"
        ],
        "correctAnswer": 0,
        "explanation": "Na₂CO₃ is the salt of a strong base (NaOH) and a weak acid (H₂CO₃). The conjugate base carbonate ion undergoes anion hydrolysis: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻, producing excess OH⁻ ions and yielding a basic solution."
    },
    {
        "id": "chem-2018-55",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Chemical Reactions and Stoichiometry",
        "unitNumber": 1,
        "topic": "Green Chemistry and Atom Economy",
        "year": "2018",
        "questionNumber": 55,
        "question": "The thermal decomposition of calcium carbonate during commercial preparation of lime (CaO) is: CaCO₃(s) → CaO(s) + CO₂(g). What is the atom economy for preparation of lime? (Atomic masses: Ca=40, C=12, O=16)",
        "options": [
            "56%",
            "49.1%",
            "44%",
            "100%"
        ],
        "correctAnswer": 0,
        "explanation": "Atom economy = (Molar mass of desired product / Total molar mass of reactants) × 100%. M(CaO) = 40 + 16 = 56 g/mol. M(CaCO₃) = 40 + 12 + 48 = 100 g/mol. Atom economy = (56 / 100) × 100% = 56%."
    },
    {
        "id": "chem-2018-56",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Chemical Kinetics",
        "unitNumber": 4,
        "topic": "Arrhenius Equation and Activation Energy",
        "year": "2018",
        "questionNumber": 56,
        "question": "The rate constant of a reaction increases by a factor of 4 when the temperature is increased from 300 K to 320 K. What is the approximate activation energy of the reaction? (R = 8.314 J/(mol·K), ln(4) ≈ 1.386)",
        "options": [
            "27.6 kJ/mol",
            "55.3 kJ/mol",
            "110.6 kJ/mol",
            "8.31 kJ/mol"
        ],
        "correctAnswer": 1,
        "explanation": "ln(k₂/k₁) = (Ea / R) × ((T₂ - T₁) / (T₁ × T₂)). 1.386 = (Ea / 8.314) × ((320 - 300) / (300 × 320)) = (Ea / 8.314) × (20 / 96000) = Ea / (8.314 × 4800). Ea = 1.386 × 8.314 × 4800 ≈ 55,300 J/mol = 55.3 kJ/mol."
    },
    {
        "id": "chem-2018-57",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Electrochemistry",
        "unitNumber": 2,
        "topic": "Nernst Equation Calculations",
        "year": "2018",
        "questionNumber": 57,
        "question": "Calculate the electromotive force (EMF) of the cell Zn | Zn²⁺(0.01M) || Cu²⁺(1.0M) | Cu at 25°C. (E°_cell = 1.10 V)",
        "options": [
            "1.10 V",
            "1.04 V",
            "1.16 V",
            "1.22 V"
        ],
        "correctAnswer": 2,
        "explanation": "E_cell = E°_cell - (0.0592 / n) × log([Zn²⁺] / [Cu²⁺]) = 1.10 - (0.0592 / 2) × log(0.01 / 1.0) = 1.10 - 0.0296 × (-2) = 1.10 + 0.0592 ≈ 1.16 V."
    },
    {
        "id": "chem-2018-58",
        "subject": "chemistry",
        "grade": 12,
        "unit": "Acid-Base Equilibrium",
        "unitNumber": 1,
        "topic": "Buffer Solution pH",
        "year": "2018",
        "questionNumber": 58,
        "question": "What is the pH of a buffer solution prepared by mixing 50.0 mL of 0.20 M CH₃COOH and 50.0 mL of 0.10 M NaOH? (Ka for CH₃COOH = 1.8 × 10⁻⁵)",
        "options": [
            "2.87",
            "4.74",
            "5.04",
            "9.26"
        ],
        "correctAnswer": 1,
        "explanation": "Initial moles: n(acid) = 0.050 L × 0.20 M = 0.010 mol. n(OH⁻) = 0.050 L × 0.10 M = 0.005 mol. After reaction: n(CH₃COO⁻) = 0.005 mol, remaining n(CH₃COOH) = 0.010 - 0.005 = 0.005 mol. Because [acid] = [conjugate base], pH = pKa = -log(1.8 × 10⁻⁵) ≈ 4.74."
    },
    {
        "id": "chem-2018-59",
        "subject": "chemistry",
        "grade": 10,
        "unit": "Energy Changes and Electrochemistry",
        "unitNumber": 4,
        "topic": "Standard Enthalpy of Formation and Hess's Law",
        "year": "2018",
        "questionNumber": 59,
        "question": "Calculate the standard enthalpy of formation of liquid benzene C₆H₆(l) given the following standard enthalpies of combustion: ΔH_c(C(s)) = -394 kJ/mol, ΔH_c(H₂(g)) = -286 kJ/mol, ΔH_c(C₆H₆(l)) = -3268 kJ/mol.",
        "options": [
            "-46 kJ/mol",
            "+46 kJ/mol",
            "+3222 kJ/mol",
            "-3268 kJ/mol"
        ],
        "correctAnswer": 1,
        "explanation": "Formation reaction: 6C(s) + 3H₂(g) → C₆H₆(l). By Hess's Law using combustion enthalpies: ΔH_f = 6ΔH_c(C) + 3ΔH_c(H₂) - ΔH_c(C₆H₆) = 6(-394) + 3(-286) - (-3268) = -2364 - 858 + 3268 = -3222 + 3268 = +46 kJ/mol."
    },
    {
        "id": "chem-2018-60",
        "subject": "chemistry",
        "grade": 11,
        "unit": "Some Important Oxygen-Containing Organic Compounds",
        "unitNumber": 6,
        "topic": "SN1 Nucleophilic Substitution Mechanism",
        "year": "2018",
        "questionNumber": 60,
        "question": "Which of the following alkyl halides is most reactive towards an SN1 substitution reaction mechanism?",
        "options": [
            "1-Chlorobutane",
            "2-Chlorobutane",
            "2-Chloro-2-methylpropane",
            "Chloromethane"
        ],
        "correctAnswer": 2,
        "explanation": "The rate-determining step in an SN1 mechanism involves carbocation formation. Tertiary carbocations are the most stable due to electron donation by inductive and hyperconjugation effects from three adjacent alkyl groups. 2-chloro-2-methylpropane is a tertiary alkyl halide, making it by far the most reactive toward SN1."
    }
]

output_path = 'src/data/questions/chemistry2018.ts'
content = 'import { Question } from "../../types";\n\nexport const CHEMISTRY_2018_QUESTIONS: Question[] = ' + json.dumps(chem_2018, indent=2) + ';\n'
with open(output_path, 'w') as f:
    f.write(content)

print(f"Generated {len(chem_2018)} Chemistry 2018 questions.")
