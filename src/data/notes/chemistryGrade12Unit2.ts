import { UnitNotes } from "./chemistryGrade12Unit1";

export const chemistryGrade12Unit2Notes: UnitNotes = {
  subject: "Chemistry",
  grade: 12,
  unitNumber: 2,
  unitTitle: "Electrochemistry",
  subtitle: "Redox reactions, electrolysis, Faraday's laws, industrial electrolysis and voltaic cells",
  topics: [
    {
      id: "2.01",
      topicNumber: "2.01",
      title: "Meaning of Redox Reactions",
      coreConcepts: [
        "Oxidation and reduction occur together in a redox reaction.",
        "Oxidation is the loss of electrons and an increase in oxidation number.",
        "Reduction is the gain of electrons and a decrease in oxidation number.",
        "A reaction can be verified as redox by tracking electron transfer or oxidation-number changes."
      ],
      rememberPoints: [
        "OIL RIG: Oxidation Is Loss; Reduction Is Gain.",
        "Electrons lost in oxidation must equal electrons gained in reduction."
      ],
      practiceQuestions: [
        {
          id: "q2.01_1",
          question: "The chemical change Mg → Mg²⁺ + 2e⁻ represents:",
          options: [
            "Oxidation",
            "Reduction",
            "Neutralization",
            "Precipitation"
          ],
          correctAnswer: 0,
          explanation: "Magnesium loses two electrons and its oxidation number increases from 0 to +2, which is oxidation."
        },
        {
          id: "q2.01_2",
          question: "In any spontaneous or non-spontaneous redox process, oxidation and reduction:",
          options: [
            "Occur independently at different times",
            "Occur simultaneously because electrons transferred must be conserved",
            "Only happen in non-aqueous molten salts",
            "Produce only gaseous products"
          ],
          correctAnswer: 1,
          explanation: "Oxidation and reduction are coupled processes; electrons cannot exist free in solution, so any electron lost by one species must be gained by another."
        }
      ]
    },
    {
      id: "2.02",
      topicNumber: "2.02",
      title: "Oxidation Numbers",
      coreConcepts: [
        "Oxidation number is an apparent charge assigned to an atom according to prescribed rules.",
        "An element in its free uncombined state has an oxidation number of zero (e.g., O₂, Mg, S₈ = 0).",
        "A simple monatomic ion has an oxidation number equal to its charge (e.g., Na⁺ = +1, Cl⁻ = −1).",
        "The algebraic sum of oxidation numbers in a neutral compound equals 0; in a polyatomic ion, it equals the overall charge."
      ],
      rememberPoints: [
        "Sum of oxidation numbers = overall charge of the species.",
        "Hydrogen is +1 (except in metal hydrides, −1); Oxygen is −2 (except in peroxides, −1)."
      ],
      practiceQuestions: [
        {
          id: "q2.02_1",
          question: "What is the oxidation number of sulfur in the sulfate ion, SO₄²⁻?",
          options: [
            "+6",
            "+4",
            "−2",
            "+2"
          ],
          correctAnswer: 0,
          explanation: "Let S = x. Then x + 4(−2) = −2 => x − 8 = −2 => x = +6."
        },
        {
          id: "q2.02_2",
          question: "What is the oxidation number of manganese in the permanganate ion, MnO₄⁻?",
          options: [
            "+7",
            "+5",
            "+4",
            "+2"
          ],
          correctAnswer: 0,
          explanation: "Let Mn = x. Then x + 4(−2) = −1 => x − 8 = −1 => x = +7."
        }
      ]
    },
    {
      id: "2.03",
      topicNumber: "2.03",
      title: "Oxidizing and Reducing Agents",
      coreConcepts: [
        "The oxidizing agent causes another species to be oxidized and is itself reduced (gains electrons).",
        "The reducing agent causes another species to be reduced and is itself oxidized (loses electrons).",
        "The agent's own oxidation-number change is the reverse of the chemical effect it induces on its partner."
      ],
      rememberPoints: [
        "Oxidizing agent is REDUCED; Reducing agent is OXIDIZED."
      ],
      practiceQuestions: [
        {
          id: "q2.03_1",
          question: "In the single-displacement reaction Zn + Cu²⁺ → Zn²⁺ + Cu, the oxidizing agent is:",
          options: [
            "Cu²⁺",
            "Zn",
            "Zn²⁺",
            "Cu"
          ],
          correctAnswer: 0,
          explanation: "Cu²⁺ gains two electrons to become metallic Cu; because it undergoes reduction, it is the oxidizing agent."
        },
        {
          id: "q2.03_2",
          question: "Which of the following elements is most likely to act as a powerful reducing agent?",
          options: [
            "Potassium (K)",
            "Fluorine (F₂)",
            "Chlorine (Cl₂)",
            "Oxygen (O₂)"
          ],
          correctAnswer: 0,
          explanation: "Potassium has a very low ionization energy and readily loses its valence electron (oxidation), making it a strong reducing agent."
        }
      ]
    },
    {
      id: "2.04",
      topicNumber: "2.04",
      title: "Recognizing Redox Reactions",
      coreConcepts: [
        "To determine if a chemical reaction is redox, compare oxidation states before and after the reaction.",
        "If at least one element's oxidation number increases (oxidation) and another decreases (reduction), it is redox.",
        "Reactions where oxidation numbers remain unchanged (such as precipitation or acid–base neutralization) are non-redox."
      ],
      rememberPoints: [
        "Oxidation number change = Redox reaction.",
        "No oxidation number change = Non-redox (e.g. double replacement, precipitation)."
      ],
      practiceQuestions: [
        {
          id: "q2.04_1",
          question: "Which of the following chemical equations represents a redox reaction?",
          options: [
            "2Mg + O₂ → 2MgO",
            "HCl + NaOH → NaCl + H₂O",
            "AgNO₃ + NaCl → AgCl + NaNO₃",
            "BaCl₂ + H₂SO₄ → BaSO₄ + 2HCl"
          ],
          correctAnswer: 0,
          explanation: "In 2Mg + O₂ → 2MgO, Mg changes from 0 to +2 and oxygen from 0 to −2. The other reactions are non-redox double replacement reactions."
        },
        {
          id: "q2.04_2",
          question: "Why is the reaction between aqueous HCl and NaOH NOT classified as a redox reaction?",
          options: [
            "None of the participating atoms experience a change in oxidation number",
            "It produces salt and water",
            "It occurs too rapidly",
            "It requires an external battery"
          ],
          correctAnswer: 0,
          explanation: "H (+1), Cl (−1), Na (+1), and O (−2) retain identical oxidation numbers on both sides of the equation."
        }
      ]
    },
    {
      id: "2.05",
      topicNumber: "2.05",
      title: "Balancing Redox Equations",
      coreConcepts: [
        "Balanced redox equations must conserve both mass (atoms) and net electrostatic charge.",
        "The Ion-Electron (Half-Reaction) Method: Split into oxidation and reduction half-reactions.",
        "In acidic media: balance O by adding H₂O, balance H by adding H⁺, balance charge by adding e⁻.",
        "Multiply half-reactions by integer factors to equate total electrons lost and gained before combining."
      ],
      rememberPoints: [
        "Electrons lost = Electrons gained.",
        "Check atoms and net charge on both sides of the final combined equation."
      ],
      practiceQuestions: [
        {
          id: "q2.05_1",
          question: "Why must the total number of electrons lost equal electrons gained when balancing a redox equation?",
          options: [
            "To satisfy the fundamental law of conservation of electric charge",
            "To ensure the final reaction volume remains constant",
            "To equalize the molar masses of reactants and products",
            "To eliminate all hydrogen ions from the solution"
          ],
          correctAnswer: 0,
          explanation: "Electric charge cannot be created or destroyed; electron transfer between reducing and oxidizing agents must balance."
        },
        {
          id: "q2.05_2",
          question: "In balancing the half-reaction Cr₂O₇²⁻ → 2Cr³⁺ in acidic solution, how many electrons must be added to the reactant side?",
          options: [
            "6e⁻",
            "3e⁻",
            "12e⁻",
            "2e⁻"
          ],
          correctAnswer: 0,
          explanation: "Cr changes from +6 to +3 (3e⁻ per Cr atom). For 2 Cr atoms, 2 × 3 = 6 electrons are gained: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O."
        }
      ]
    },
    {
      id: "2.06",
      topicNumber: "2.06",
      title: "Electrolytes and Electrolysis",
      coreConcepts: [
        "An electrolyte is a chemical compound that conducts electric current via mobile ions when molten or dissolved in water.",
        "Electrolysis is the process in which electrical energy drives a non-spontaneous chemical redox reaction.",
        "In an electrolytic cell: Cations (positive ions) migrate to the Cathode (reduction); Anions (negative ions) migrate to the Anode (oxidation)."
      ],
      rememberPoints: [
        "Cathode: site of REDUCTION (attracts cations).",
        "Anode: site of OXIDATION (attracts anions)."
      ],
      practiceQuestions: [
        {
          id: "q2.06_1",
          question: "Which charge carriers conduct electricity through an electrolyte solution during electrolysis?",
          options: [
            "Mobile cations and anions",
            "Delocalized valence electrons",
            "Neutral salt molecules",
            "Photons and neutrons"
          ],
          correctAnswer: 0,
          explanation: "In electrolytes, electric current is carried by the physical migration of dissolved cations toward the cathode and anions toward the anode."
        },
        {
          id: "q2.06_2",
          question: "Electrolysis fundamentally differs from a galvanic cell because electrolysis:",
          options: [
            "Uses an external electrical power source to drive a non-spontaneous chemical reaction",
            "Produces electrical current spontaneously from chemical energy",
            "Requires no electrodes",
            "Always occurs without electron transfer"
          ],
          correctAnswer: 0,
          explanation: "Galvanic cells produce spontaneous electricity; electrolytic cells consume external electrical energy to force non-spontaneous redox reactions."
        }
      ]
    },
    {
      id: "2.07",
      topicNumber: "2.07",
      title: "Electrolytic Cell Components",
      coreConcepts: [
        "An electrolytic cell consists of an electrolyte (molten salt or aqueous solution), two electrodes (inert or active), and an external DC power source.",
        "Polarity in Electrolytic Cells: The ANODE is connected to the positive terminal of the DC battery (+); the CATHODE is connected to the negative terminal (−).",
        "Contrast with Galvanic cells where anode is (−) and cathode is (+)."
      ],
      rememberPoints: [
        "Electrolytic: Anode (+), Cathode (−).",
        "Galvanic: Anode (−), Cathode (+).",
        "In BOTH cells: Anode = Oxidation, Cathode = Reduction."
      ],
      practiceQuestions: [
        {
          id: "q2.07_1",
          question: "In an electrolytic cell, the cathode is connected to the:",
          options: [
            "Negative terminal of the DC power supply",
            "Positive terminal of the DC power supply",
            "Ground wire without voltage",
            "Voltmeter only"
          ],
          correctAnswer: 0,
          explanation: "The DC power supply pumps electrons onto the cathode, giving it a negative charge that attracts positive cations for reduction."
        },
        {
          id: "q2.07_2",
          question: "What is the primary role of the external DC power supply in an electrolytic cell?",
          options: [
            "To supply electrical energy that forces electrons against their spontaneous electrochemical potential",
            "To measure the pH of the electrolytic bath",
            "To prevent ions from moving through the solution",
            "To synthesize water molecules"
          ],
          correctAnswer: 0,
          explanation: "The power source acts as an electron pump driving non-spontaneous electron transfer."
        }
      ]
    },
    {
      id: "2.08",
      topicNumber: "2.08",
      title: "Preferential Discharge",
      coreConcepts: [
        "When an aqueous solution contains multiple cations and anions, competition occurs at each electrode.",
        "Factors influencing discharge: 1. Position in electrochemical series (species with higher reduction potential are reduced preferentially).",
        "2. Relative concentration: High concentration can overcome small standard potential differences (e.g., concentrated NaCl discharges Cl₂ rather than O₂).",
        "3. Nature of electrodes: Inert electrodes (Pt, graphite) vs active electrodes (Cu, Ag) participate directly in oxidation."
      ],
      rememberPoints: [
        "Cathode: Cation with highest E° (most easily reduced) discharges first.",
        "Anode: Anion with lowest E° (most easily oxidized) discharges first."
      ],
      practiceQuestions: [
        {
          id: "q2.08_1",
          question: "During the electrolysis of dilute aqueous NaCl using inert electrodes, why is H₂ gas liberated at the cathode instead of sodium metal (Na)?",
          options: [
            "Water molecules (or H⁺) have a higher reduction potential and are more easily reduced than Na⁺",
            "Sodium metal is a non-metal that cannot conduct electrons",
            "The cathode repels all sodium ions",
            "Chlorine gas blocks the cathode surface"
          ],
          correctAnswer: 0,
          explanation: "E° for 2H₂O + 2e⁻ → H₂ + 2OH⁻ is −0.83 V, which is much more positive than E° for Na⁺ + e⁻ → Na (−2.71 V)."
        },
        {
          id: "q2.08_2",
          question: "What effect does a very high concentration of halide ions (such as brine) have on anodic discharge?",
          options: [
            "It favors discharge of halide ions (forming Cl₂) over oxidation of water into oxygen",
            "It prevents all electrical conduction",
            "It causes hydrogen gas to form at the anode",
            "It dissolves the graphite electrode immediately"
          ],
          correctAnswer: 0,
          explanation: "High Cl⁻ concentration overcomes the overvoltage barrier, allowing Cl⁻ oxidation over OH⁻ oxidation."
        }
      ]
    },
    {
      id: "2.09",
      topicNumber: "2.09",
      title: "Electrolysis of Aqueous Solutions",
      coreConcepts: [
        "Electrolysis of Dilute H₂SO₄: Cathode: 4H⁺ + 4e⁻ → 2H₂; Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻. Net reaction is the decomposition of water: 2H₂O → 2H₂ + O₂ (volume ratio 2:1).",
        "Electrolysis of Concentrated NaCl (Brine): Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻; Anode: 2Cl⁻ → Cl₂ + 2e⁻. Remaining solution forms NaOH.",
        "Electrolysis of CuSO₄ with Inert vs Active Electrodes: Pt electrodes produce Cu at cathode and O₂ at anode; Cu electrodes transfer Cu from anode to cathode."
      ],
      rememberPoints: [
        "Water electrolysis: 2 volumes H₂ at cathode : 1 volume O₂ at anode.",
        "Brine electrolysis products: Cl₂ gas, H₂ gas, and NaOH solution."
      ],
      practiceQuestions: [
        {
          id: "q2.09_1",
          question: "In the industrial chlor-alkali electrolysis of brine (concentrated aqueous NaCl), the three primary commercial products are:",
          options: [
            "Cl₂ gas, H₂ gas, and aqueous NaOH",
            "Na metal, Cl₂ gas, and O₂ gas",
            "HCl acid, Na metal, and ozone",
            "NaClO, sodium metal, and water"
          ],
          correctAnswer: 0,
          explanation: "Chlorine gas forms at the anode, hydrogen gas at the cathode, leaving hydroxide and sodium ions in solution as NaOH."
        },
        {
          id: "q2.09_2",
          question: "During the electrolysis of acidified water, what is the theoretical volume ratio of gases collected at the cathode compared to the anode?",
          options: [
            "2 : 1 (2 volumes H₂ to 1 volume O₂)",
            "1 : 1",
            "1 : 2",
            "4 : 1"
          ],
          correctAnswer: 0,
          explanation: "The stoichiometry is 2H₂O → 2H₂ + O₂; 2 moles of H₂ gas are produced for every 1 mole of O₂ gas."
        }
      ]
    },
    {
      id: "2.10",
      topicNumber: "2.10",
      title: "Electrode Reactions and Half-Equations",
      coreConcepts: [
        "A half-equation depicts the chemical change and electron transfer occurring specifically at one electrode.",
        "Reduction Half-Equation: Electrons appear on the reactant (left) side: Mⁿ⁺ + ne⁻ → M.",
        "Oxidation Half-Equation: Electrons appear on the product (right) side: 2X⁻ → X₂ + 2e⁻.",
        "To obtain the overall cell equation, multiply half-equations so that electrons cancel out completely."
      ],
      rememberPoints: [
        "Reduction = Electrons on the LEFT.",
        "Oxidation = Electrons on the RIGHT."
      ],
      practiceQuestions: [
        {
          id: "q2.10_1",
          question: "Which of the following half-equations correctly represents a cathodic reduction process?",
          options: [
            "Cu²⁺ + 2e⁻ → Cu",
            "Zn → Zn²⁺ + 2e⁻",
            "2Cl⁻ → Cl₂ + 2e⁻",
            "Fe²⁺ → Fe³⁺ + e⁻"
          ],
          correctAnswer: 0,
          explanation: "Reduction involves gaining electrons (electrons on the left of the arrow), as seen in Cu²⁺ + 2e⁻ → Cu."
        },
        {
          id: "q2.10_2",
          question: "What is the oxidation half-equation occurring at the inert anode during water electrolysis?",
          options: [
            "2H₂O → O₂ + 4H⁺ + 4e⁻",
            "O₂ + 4H⁺ + 4e⁻ → 2H₂O",
            "2H⁺ + 2e⁻ → H₂",
            "H₂ → 2H⁺ + 2e⁻"
          ],
          correctAnswer: 0,
          explanation: "Water molecules lose electrons to produce oxygen gas and hydrogen ions: 2H₂O → O₂ + 4H⁺ + 4e⁻."
        }
      ]
    },
    {
      id: "2.11",
      topicNumber: "2.11",
      title: "Faraday’s First Law of Electrolysis",
      coreConcepts: [
        "Faraday’s First Law: The mass (m) of a chemical substance deposited or liberated at an electrode is directly proportional to the quantity of electricity (Q) passed through the electrolyte.",
        "Mathematical form: m ∝ Q => m = z·Q = z·I·t, where z is the electrochemical equivalent of the substance.",
        "Electric charge Q = I × t, where I is current in amperes (A) and t is time in seconds (s)."
      ],
      rememberPoints: [
        "m ∝ Q; Q = I × t.",
        "Doubling current or doubling time doubles the mass of substance deposited."
      ],
      practiceQuestions: [
        {
          id: "q2.11_1",
          question: "According to Faraday’s First Law of Electrolysis, if the electric current passing through an electrolytic cell is doubled while time is held constant, the mass of metal deposited will:",
          options: [
            "Double",
            "Halve",
            "Remain unchanged",
            "Quadruple"
          ],
          correctAnswer: 0,
          explanation: "Since m ∝ I·t, doubling current doubles the total charge passed and doubles the deposited mass."
        },
        {
          id: "q2.11_2",
          question: "What fundamental relationship defines electrical charge (Q) in electrochemical calculations?",
          options: [
            "Q = Current (amperes) × Time (seconds)",
            "Q = Voltage × Resistance",
            "Q = Mass / Volume",
            "Q = Molar mass × Faraday constant"
          ],
          correctAnswer: 0,
          explanation: "Charge in coulombs equals current in amperes multiplied by time in seconds: Q = I·t."
        }
      ]
    },
    {
      id: "2.12",
      topicNumber: "2.12",
      title: "Faraday Constant and Charge",
      coreConcepts: [
        "The Faraday constant (F) represents the total electric charge carried by one mole of electrons: F = N_A × e = (6.022 × 10²³ mol⁻¹) × (1.602 × 10⁻¹⁹ C) ≈ 96,500 C/mol.",
        "Number of moles of electrons transferred: n(e⁻) = Q / F = (I × t) / 96,500.",
        "1 Faraday of electricity (96,500 C) deposits 1 mole of Ag⁺, 0.5 mole of Cu²⁺, or 0.333 mole of Al³⁺."
      ],
      rememberPoints: [
        "1 Faraday = 96,500 C = 1 mole of electrons.",
        "Mⁿ⁺ + ne⁻ → M requires n Faradays to deposit 1 mole of metal M."
      ],
      practiceQuestions: [
        {
          id: "q2.12_1",
          question: "What quantity of electrical charge in coulombs passes through a cell when a steady current of 2.0 A flows for 10 minutes?",
          options: [
            "1,200 C",
            "20 C",
            "600 C",
            "96,500 C"
          ],
          correctAnswer: 0,
          explanation: "Time in seconds = 10 min × 60 s/min = 600 s. Q = I × t = 2.0 A × 600 s = 1,200 C."
        },
        {
          id: "q2.12_2",
          question: "How many moles of electrons are carried by a total electrical charge of 19,300 coulombs?",
          options: [
            "0.20 mol",
            "0.10 mol",
            "0.50 mol",
            "2.00 mol"
          ],
          correctAnswer: 0,
          explanation: "n(e⁻) = Q / F = 19,300 C / 96,500 C/mol = 0.20 mol of electrons."
        }
      ]
    },
    {
      id: "2.13",
      topicNumber: "2.13",
      title: "Electrolysis Mass Calculations",
      coreConcepts: [
        "Comprehensive electrolysis mass formula: m = (M · I · t) / (n · F).",
        "M = molar mass (g/mol), I = current (A), t = time (s), n = number of electrons transferred per ion, F = 96,500 C/mol.",
        "Stepwise procedure: 1. Q = I·t. 2. n(e⁻) = Q / 96,500. 3. n(product) = n(e⁻) / n. 4. mass = n(product) × Molar Mass."
      ],
      rememberPoints: [
        "m = (M · I · t) / (n · F).",
        "Always convert time to seconds before calculating."
      ],
      practiceQuestions: [
        {
          id: "q2.13_1",
          question: "How many moles of electrons are required to deposit exactly 1.0 mole of copper from an aqueous Cu²⁺ solution?",
          options: [
            "2.0 mol",
            "1.0 mol",
            "0.5 mol",
            "4.0 mol"
          ],
          correctAnswer: 0,
          explanation: "The cathodic half-reaction is Cu²⁺ + 2e⁻ → Cu. Depositing 1 mole of Cu metal requires 2 moles of electrons."
        },
        {
          id: "q2.13_2",
          question: "What mass of silver (Ag, molar mass = 108 g/mol) is deposited when 9,650 C of charge passes through AgNO₃(aq)?",
          options: [
            "10.8 g",
            "1.08 g",
            "5.4 g",
            "108 g"
          ],
          correctAnswer: 0,
          explanation: "Ag⁺ + e⁻ → Ag (n = 1). m = (108 × 9,650) / (1 × 96,500) = 108 × 0.1 = 10.8 g."
        }
      ]
    },
    {
      id: "2.14",
      topicNumber: "2.14",
      title: "Faraday’s Second Law of Electrolysis",
      coreConcepts: [
        "Faraday’s Second Law: When the same quantity of electricity passes through different electrolytes, the masses of substances deposited or liberated are directly proportional to their chemical equivalent masses.",
        "Mathematical form: m₁ / m₂ = E₁ / E₂.",
        "Equivalent mass (E) = Molar Mass / n (where n is valence / electrons transferred per ion)."
      ],
      rememberPoints: [
        "m₁ / m₂ = E₁ / E₂ = (M₁/n₁) / (M₂/n₂).",
        "Equal charge produces equal equivalents of different elements."
      ],
      practiceQuestions: [
        {
          id: "q2.14_1",
          question: "When the same electrical charge passes through cells containing AgNO₃ and CuSO₄ in series, the ratio of masses of Ag and Cu deposited is proportional to their:",
          options: [
            "Chemical equivalent masses (M / n)",
            "Density values",
            "Atomic numbers",
            "Electrode surface areas"
          ],
          correctAnswer: 0,
          explanation: "Faraday’s second law states that deposited masses are directly proportional to their chemical equivalent masses (m ∝ M/n)."
        },
        {
          id: "q2.14_2",
          question: "If 1.0 mole of electrons passes through separate solutions of Ag⁺, Cu²⁺, and Al³⁺, what is the mole ratio of metals deposited (Ag : Cu : Al)?",
          options: [
            "1 : 1/2 : 1/3 (or 6 : 3 : 2)",
            "1 : 2 : 3",
            "3 : 2 : 1",
            "1 : 1 : 1"
          ],
          correctAnswer: 0,
          explanation: "Each requires n electrons: 1 mol e⁻ deposits 1 mol Ag (1e⁻), 1/2 mol Cu (2e⁻), and 1/3 mol Al (3e⁻)."
        }
      ]
    },
    {
      id: "2.15",
      topicNumber: "2.15",
      title: "Industrial Electrolysis",
      coreConcepts: [
        "Extraction of Reactive Metals: Highly electropositive metals (Na, Al, Mg) cannot be reduced by carbon and must be extracted by electrolysis of molten salts.",
        "Hall–Héroult Process for Aluminium: Electrolysis of molten Al₂O₃ dissolved in molten cryolite (Na₃AlF₆) at ~950 °C with carbon electrodes.",
        "Downs Cell for Sodium: Electrolysis of molten NaCl mixed with CaCl₂ (to lower the melting point from 801 °C to ~600 °C).",
        "Manufacture of chemicals: Cl₂, NaOH, H₂ via chlor-alkali process."
      ],
      rememberPoints: [
        "Cryolite (Na₃AlF₆) lowers Al₂O₃ melting point from 2050 °C to 950 °C and increases conductivity.",
        "Downs cell extracts Na from molten NaCl."
      ],
      practiceQuestions: [
        {
          id: "q2.15_1",
          question: "Which metal is industrially extracted by the electrolytic reduction of its molten oxide dissolved in molten cryolite (Hall–Héroult process)?",
          options: [
            "Aluminium (Al)",
            "Iron (Fe)",
            "Copper (Cu)",
            "Lead (Pb)"
          ],
          correctAnswer: 0,
          explanation: "Aluminium is produced commercially by the Hall–Héroult process using bauxite dissolved in cryolite (Na₃AlF₆)."
        },
        {
          id: "q2.15_2",
          question: "Why is molten cryolite (Na₃AlF₆) added to alumina (Al₂O₃) in the extraction of aluminium?",
          options: [
            "It drastically lowers the melting point of alumina from 2,050 °C to ~950 °C and improves electrical conductivity",
            "It acts as an oxidizing agent that consumes aluminium ions",
            "It forms carbon dioxide directly without electricity",
            "It prevents all cathode reactions"
          ],
          correctAnswer: 0,
          explanation: "Alumina melts above 2000 °C, which is impractical; cryolite forms a lower-melting eutectic mixture at ~950 °C."
        }
      ]
    },
    {
      id: "2.16",
      topicNumber: "2.16",
      title: "Electrolytic Refining of Metals",
      coreConcepts: [
        "Purification of impure crude metals (like copper, silver, gold, nickel) to > 99.99% purity.",
        "Refining of Copper: Impure blister copper is cast as the ANODE; a thin sheet of pure copper is used as the CATHODE.",
        "Electrolyte: Acidified copper sulfate (CuSO₄ + H₂SO₄).",
        "Anode reaction: Cu(impure) → Cu²⁺ + 2e⁻ (anode dissolves). Cathode reaction: Cu²⁺ + 2e⁻ → Cu(pure) (pure copper deposits).",
        "Anode Mud / Sludge: Precious noble metals (Au, Ag, Pt) do not oxidize and settle below the anode as valuable sludge."
      ],
      rememberPoints: [
        "Anode: Impure metal (dissolves).",
        "Cathode: Pure metal (grows thicker).",
        "Anode sludge contains precious unreactive metals (Au, Ag)."
      ],
      practiceQuestions: [
        {
          id: "q2.16_1",
          question: "In the electrolytic refining of blister copper, the impure copper is connected as the:",
          options: [
            "Anode",
            "Cathode",
            "Salt bridge",
            "External voltmeter"
          ],
          correctAnswer: 0,
          explanation: "The impure copper is connected to the positive terminal (anode), where it oxidizes and dissolves into Cu²⁺ ions."
        },
        {
          id: "q2.16_2",
          question: "What happens to precious noble metal impurities like gold and silver during the electrolytic refining of copper?",
          options: [
            "They resist oxidation at the anode voltage and settle to the cell bottom as anode mud (sludge)",
            "They dissolve and deposit on the pure copper cathode",
            "They escape into the atmosphere as toxic fumes",
            "They neutralize the sulfuric acid electrolyte"
          ],
          correctAnswer: 0,
          explanation: "Au and Ag have higher standard reduction potentials than Cu, so they do not oxidize and precipitate as valuable anode sludge."
        }
      ]
    },
    {
      id: "2.17",
      topicNumber: "2.17",
      title: "Voltaic (Galvanic) Cells",
      coreConcepts: [
        "A voltaic (galvanic) cell converts chemical energy released from a spontaneous redox reaction into electrical energy.",
        "Consists of two separate half-cells connected by an external metallic wire and an internal salt bridge.",
        "Anode: Site of oxidation; releases electrons to the external circuit (negative electrode, −).",
        "Cathode: Site of reduction; receives electrons from the external circuit (positive electrode, +).",
        "Electron flow is ALWAYS from Anode to Cathode through the external conductor wire."
      ],
      rememberPoints: [
        "Spontaneous redox → Electricity.",
        "Anode (−) = Oxidation; Cathode (+) = Reduction.",
        "Electron flow: Anode → Cathode."
      ],
      practiceQuestions: [
        {
          id: "q2.17_1",
          question: "A galvanic (voltaic) cell performs which fundamental energy conversion?",
          options: [
            "Chemical energy from a spontaneous redox reaction is converted into electrical energy",
            "Electrical energy is consumed to create non-spontaneous chemical compounds",
            "Mechanical kinetic energy is converted into nuclear potential energy",
            "Thermal heat is converted directly into magnetic fields"
          ],
          correctAnswer: 0,
          explanation: "Galvanic cells use spontaneous redox potential differences to generate electric current through an external circuit."
        },
        {
          id: "q2.17_2",
          question: "In a functioning Daniell voltaic cell (Zn | Zn²⁺ || Cu²⁺ | Cu), electrons flow through the external circuit wire from:",
          options: [
            "Zinc anode to the copper cathode",
            "Copper cathode to the zinc anode",
            "Salt bridge to the voltmeter",
            "Cathode to the power supply"
          ],
          correctAnswer: 0,
          explanation: "Zinc oxidizes at the anode, releasing electrons that travel through the external conductor to the copper cathode."
        }
      ]
    },
    {
      id: "2.18",
      topicNumber: "2.18",
      title: "Cell Notation and the Salt Bridge",
      coreConcepts: [
        "Cell Notation Convention: Anode on the LEFT, Cathode on the RIGHT.",
        "Format: Anode | Anodic solution || Cathodic solution | Cathode. Example: Zn(s) | Zn²⁺(aq, 1 M) || Cu²⁺(aq, 1 M) | Cu(s).",
        "Single vertical line (|) represents a phase boundary (solid/aqueous); double vertical line (||) represents the salt bridge.",
        "Functions of Salt Bridge: 1. Completes the internal circuit. 2. Maintains electrical neutrality by allowing ions to migrate (anions to anode, cations to cathode).",
        "Does NOT allow electrons to flow through it!"
      ],
      rememberPoints: [
        "Anode on left, Cathode on right: Anode | ion || ion | Cathode.",
        "Salt bridge transports IONS, never electrons."
      ],
      practiceQuestions: [
        {
          id: "q2.18_1",
          question: "In standard electrochemical cell notation such as Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s), the double vertical line (||) represents:",
          options: [
            "The salt bridge or porous barrier separating the half-cells",
            "A phase boundary between solid electrode and solution",
            "The metallic copper wire",
            "A closed switch"
          ],
          correctAnswer: 0,
          explanation: "A single line (|) denotes a phase boundary; a double vertical line (||) denotes the salt bridge connecting the half-cells."
        },
        {
          id: "q2.18_2",
          question: "What is the vital function of the salt bridge in a galvanic cell?",
          options: [
            "It permits ionic migration to maintain electrical neutrality in both half-cells and completes the circuit",
            "It conducts electrons directly between the electrodes",
            "It stops all chemical reactions from proceeding",
            "It produces hydrogen gas to power the voltmeter"
          ],
          correctAnswer: 0,
          explanation: "As oxidation and reduction proceed, ions from the salt bridge neutralize excess charges that would otherwise halt the cell reaction."
        }
      ]
    },
    {
      id: "2.19",
      topicNumber: "2.19",
      title: "Standard Cell Potential (E°cell)",
      coreConcepts: [
        "Standard Cell Potential (electromotive force, EMF): The electrical potential difference between cathode and anode under standard conditions (1 M concentrations, 1 atm pressure, 25 °C / 298 K).",
        "Formula: E°cell = E°cathode − E°anode (both using standard reduction potentials).",
        "Standard Hydrogen Electrode (SHE): Pt | H₂(g, 1 atm) | H⁺(aq, 1 M), assigned an arbitrary reference potential of exactly 0.00 V.",
        "Spontaneity criterion: E°cell > 0 => Spontaneous (ΔG° < 0, K > 1)."
      ],
      rememberPoints: [
        "E°cell = E°cathode − E°anode.",
        "Positive E°cell = Spontaneous reaction."
      ],
      practiceQuestions: [
        {
          id: "q2.19_1",
          question: "Given standard reduction potentials E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, calculate the standard cell potential (E°cell) for the Daniell cell:",
          options: [
            "+1.10 V",
            "−1.10 V",
            "+0.42 V",
            "−0.42 V"
          ],
          correctAnswer: 0,
          explanation: "E°cell = E°cathode − E°anode = (+0.34 V) − (−0.76 V) = +0.34 + 0.76 = +1.10 V."
        },
        {
          id: "q2.19_2",
          question: "A positive standard cell potential (E°cell > 0) indicates that the overall redox reaction is:",
          options: [
            "Spontaneous under standard thermodynamic conditions",
            "Non-spontaneous under all conditions",
            "At chemical equilibrium with zero current",
            "Electrolytic and consumes battery power"
          ],
          correctAnswer: 0,
          explanation: "Since ΔG° = −nFE°cell, a positive E°cell produces a negative ΔG°, confirming a thermodynamically spontaneous reaction."
        }
      ]
    },
    {
      id: "2.20",
      topicNumber: "2.20",
      title: "Voltaic Cells, Corrosion and Impact",
      coreConcepts: [
        "Primary Cells: Non-rechargeable cells (e.g., Leclanché dry cell, alkaline cell). Reaction cannot be reversed easily.",
        "Secondary Cells: Rechargeable storage cells (e.g., lead-acid car battery, lithium-ion battery). Reaction is reversed by applying DC current.",
        "Corrosion of Iron (Rusting): An electrochemical process where iron acts as the anode: Fe(s) → Fe²⁺(aq) + 2e⁻. Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻. Fe²⁺ and OH⁻ form hydrated iron(III) oxide (rust, Fe₂O₃·xH₂O).",
        "Corrosion Prevention: Barrier coatings (paint, grease), galvanizing (coating with sacrificial zinc), and cathodic protection (sacrificial Mg anode)."
      ],
      rememberPoints: [
        "Primary = Non-rechargeable; Secondary = Rechargeable.",
        "Rusting requires BOTH oxygen and water.",
        "Galvanizing = sacrificial protection using zinc (more reactive than iron)."
      ],
      practiceQuestions: [
        {
          id: "q2.20_1",
          question: "Which chemical transformation represents the primary anodic oxidation half-reaction during the electrochemical corrosion (rusting) of iron?",
          options: [
            "Fe → Fe²⁺ + 2e⁻",
            "O₂ + 2H₂O + 4e⁻ → 4OH⁻",
            "Fe²⁺ + 2e⁻ → Fe",
            "2H⁺ + 2e⁻ → H₂"
          ],
          correctAnswer: 0,
          explanation: "At the anodic site on the iron metal surface, iron atoms lose electrons to form Fe²⁺ ions."
        },
        {
          id: "q2.20_2",
          question: "Why does galvanizing (coating iron with a layer of zinc) protect iron from corrosion even if the coating is scratched?",
          options: [
            "Zinc is more active (more easily oxidized) than iron and acts as a sacrificial anode",
            "Zinc converts iron into stainless steel instantly",
            "Zinc prevents all electrical conductivity",
            "Zinc absorbs all atmospheric moisture permanently"
          ],
          correctAnswer: 0,
          explanation: "Because zinc has a more negative reduction potential than iron (sacrificial protection), zinc oxidizes preferentially, protecting the exposed iron."
        }
      ]
    }
  ]
};
