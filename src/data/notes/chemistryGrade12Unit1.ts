export interface AssessmentQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
}

export interface NoteTopic {
  id: string;
  topicNumber: string;
  title: string;
  coreConcepts: string[];
  rememberPoints: string[];
  examTips?: string[];
  practiceQuestions: AssessmentQuestion[];
}

export interface UnitNotes {
  subject: string;
  grade: number;
  unitNumber: number;
  unitTitle: string;
  subtitle: string;
  topics: NoteTopic[];
}

export const chemistryGrade12Unit1Notes: UnitNotes = {
  subject: "Chemistry",
  grade: 12,
  unitNumber: 1,
  unitTitle: "Acid–Base Equilibria",
  subtitle: "Comprehensive matric notes & exam-oriented assessment questions",
  topics: [
    {
      id: "1.01",
      topicNumber: "1.01",
      title: "Arrhenius Acids and Bases",
      coreConcepts: [
        "Arrhenius Acid: A substance that dissociates in water (aqueous solution) to produce hydrogen ions (H⁺) or hydronium ions (H₃O⁺). E.g., HCl(aq) → H⁺(aq) + Cl⁻(aq).",
        "Arrhenius Base: A substance that dissociates in aqueous solution to produce hydroxide ions (OH⁻). E.g., NaOH(s) → Na⁺(aq) + OH⁻(aq).",
        "Arrhenius Neutralization: The reaction between an acid and a base forming water and a salt: H⁺(aq) + OH⁻(aq) → H₂O(l)."
      ],
      rememberPoints: [
        "Limitation 1: Restricted only to aqueous solutions (cannot explain reactions in gas phase or non-aqueous solvents).",
        "Limitation 2: Cannot explain basic properties of substances lacking OH groups, like ammonia (NH₃)."
      ],
      examTips: [
        "If a question asks why NH₃ is basic according to Arrhenius, the answer is that Arrhenius theory CANNOT explain it directly without assuming NH₄OH formation."
      ],
      practiceQuestions: [
        {
          id: "q1.01_1",
          question: "According to the Arrhenius concept, an acid is defined as a substance that:",
          options: [
            "Accepts an electron pair in aqueous solution",
            "Increases the concentration of H⁺ (or H₃O⁺) ions in aqueous solution",
            "Donates a proton to another chemical species",
            "Increases the concentration of OH⁻ ions in non-aqueous solvents"
          ],
          correctAnswer: 1,
          explanation: "The Arrhenius theory defines acids strictly in aqueous solutions as substances that ionize to release H⁺ (or H₃O⁺) ions."
        },
        {
          id: "q1.01_2",
          question: "Which of the following represents a major limitation of the Arrhenius acid-base theory?",
          options: [
            "It cannot account for the neutralization of strong mineral acids",
            "It applies only to substances dissolved in water and fails to explain the basicity of NH₃",
            "It cannot determine whether HCl is an electrolyte",
            "It predicts that water cannot act as a solvent"
          ],
          correctAnswer: 1,
          explanation: "Arrhenius theory requires an aqueous medium and explicitly requires hydroxide (OH⁻) ions for bases, thereby failing to explain bases such as NH₃ or gas-phase reactions."
        }
      ]
    },
    {
      id: "1.02",
      topicNumber: "1.02",
      title: "Brønsted–Lowry Theory",
      coreConcepts: [
        "Brønsted–Lowry Acid: A proton (H⁺) donor.",
        "Brønsted–Lowry Base: A proton (H⁺) acceptor.",
        "Every Brønsted–Lowry base must have at least one unshared (lone) pair of electrons to bind the incoming proton.",
        "Proton transfer is not restricted to aqueous solutions; it occurs in gaseous and non-aqueous systems (e.g., NH₃(g) + HCl(g) → NH₄Cl(s))."
      ],
      rememberPoints: [
        "Acid = Proton Donor (H⁺ given away).",
        "Base = Proton Acceptor (H⁺ taken in)."
      ],
      practiceQuestions: [
        {
          id: "q1.02_1",
          question: "In the gas-phase reaction NH₃(g) + HCl(g) → NH₄Cl(s), HCl acts as a:",
          options: [
            "Brønsted–Lowry base",
            "Brønsted–Lowry acid",
            "Lewis base only",
            "Arrhenius acid"
          ],
          correctAnswer: 1,
          explanation: "HCl donates a proton (H⁺) to NH₃ in the gas phase. Since it donates a proton, it is a Brønsted–Lowry acid (and Arrhenius does not apply to dry gases)."
        },
        {
          id: "q1.02_2",
          question: "Which essential structural feature must every Brønsted–Lowry base possess?",
          options: [
            "An ionizable hydroxide group",
            "A vacant p-orbital",
            "At least one unshared (lone) pair of electrons",
            "A formal positive charge"
          ],
          correctAnswer: 2,
          explanation: "To accept a proton (H⁺, which has no electrons), the base must supply the pair of electrons to form a coordinate covalent bond."
        }
      ]
    },
    {
      id: "1.03",
      topicNumber: "1.03",
      title: "Conjugate Acid–Base Pairs",
      coreConcepts: [
        "A conjugate acid–base pair consists of two species that differ only by one single proton (H⁺).",
        "Conjugate Acid = Base + H⁺.",
        "Conjugate Base = Acid − H⁺.",
        "Example: In CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺, CH₃COOH/CH₃COO⁻ is one pair and H₃O⁺/H₂O is the other pair."
      ],
      rememberPoints: [
        "To find the conjugate base of any species: remove one H and decrease charge by 1.",
        "To find the conjugate acid of any species: add one H and increase charge by 1."
      ],
      practiceQuestions: [
        {
          id: "q1.03_1",
          question: "What is the conjugate acid of the hydrogen phosphate ion, HPO₄²⁻?",
          options: [
            "PO₄³⁻",
            "H₂PO₄⁻",
            "H₃PO₄",
            "H₂PO₄²⁻"
          ],
          correctAnswer: 1,
          explanation: "To find the conjugate acid, add one H⁺: HPO₄²⁻ + H⁺ → H₂PO₄⁻."
        },
        {
          id: "q1.03_2",
          question: "What is the conjugate base of the bicarbonate ion, HCO₃⁻?",
          options: [
            "H₂CO₃",
            "CO₃²⁻",
            "CO₂",
            "OH⁻"
          ],
          correctAnswer: 1,
          explanation: "To find the conjugate base, remove one H⁺: HCO₃⁻ − H⁺ → CO₃²⁻."
        }
      ]
    },
    {
      id: "1.04",
      topicNumber: "1.04",
      title: "Relative Strengths of Conjugate Acid–Base Pairs",
      coreConcepts: [
        "The stronger an acid, the weaker its conjugate base.",
        "The stronger a base, the weaker its conjugate acid.",
        "Very strong acids (e.g., HCl, HNO₃, HClO₄) have extremely weak (negligible) conjugate bases that do not hydrolyze in water (Cl⁻, NO₃⁻, ClO₄⁻).",
        "Moderate weak acids yield conjugate bases that are significant weak bases in water.",
        "Acid–base equilibria always favor the side with the weaker acid and weaker base (the more stable species)."
      ],
      rememberPoints: [
        "Strong acid → Negligible conjugate base.",
        "Weak acid → Weak conjugate base.",
        "Extremely weak acid (e.g., H₂O, OH⁻) → Strong conjugate base (OH⁻, O²⁻)."
      ],
      practiceQuestions: [
        {
          id: "q1.04_1",
          question: "Given that HCl is a strong acid, its conjugate base Cl⁻ is:",
          options: [
            "A strong base that readily accepts protons in water",
            "A moderately strong base",
            "A very weak base with negligible tendency to accept protons in water",
            "An amphoteric species"
          ],
          correctAnswer: 2,
          explanation: "Strong acids dissociate almost 100%. Consequently, their conjugate bases have negligible basicity in aqueous solution."
        },
        {
          id: "q1.04_2",
          question: "An acid-base equilibrium favors the direction of:",
          options: [
            "Stronger acid and stronger base",
            "Weaker acid and weaker base",
            "Stronger acid and weaker base",
            "Maximum ionization always"
          ],
          correctAnswer: 1,
          explanation: "Proton transfer always spontaneously proceeds from the stronger acid and stronger base toward the formation of the weaker, more stable acid and base."
        }
      ]
    },
    {
      id: "1.05",
      topicNumber: "1.05",
      title: "Autoionization and Amphiprotic Species",
      coreConcepts: [
        "Amphiprotic (or amphoteric) species can either donate or accept a proton depending on reaction conditions.",
        "Key examples: H₂O, HCO₃⁻, HSO₄⁻, H₂PO₄⁻, HPO₄²⁻.",
        "Autoionization of Water: Pure water self-ionizes in an equilibrium process: 2H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq).",
        "At 25 °C, Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴."
      ],
      rememberPoints: [
        "Amphiprotic = species that contains an ionizable hydrogen AND can accept a proton.",
        "Water acts as an acid when reacting with bases (e.g., NH₃) and as a base when reacting with acids (e.g., HCl)."
      ],
      practiceQuestions: [
        {
          id: "q1.05_1",
          question: "Which of the following ions is amphiprotic in aqueous solution?",
          options: [
            "SO₄²⁻",
            "CO₃²⁻",
            "HCO₃⁻",
            "NO₃⁻"
          ],
          correctAnswer: 2,
          explanation: "HCO₃⁻ can act as an acid (giving CO₃²⁻) and as a base (accepting H⁺ to form H₂CO₃). The others lack ionizable protons."
        },
        {
          id: "q1.05_2",
          question: "In the autoionization reaction of water, 2H₂O ⇌ H₃O⁺ + OH⁻, one water molecule acts as a Brønsted acid because it:",
          options: [
            "Accepts an electron pair",
            "Donates a proton to the other water molecule",
            "Accepts a hydroxide ion",
            "Reduces the other molecule"
          ],
          correctAnswer: 1,
          explanation: "One H₂O donates a proton to become OH⁻ (acting as Brønsted acid), while the second accepts the proton to become H₃O⁺ (acting as Brønsted base)."
        }
      ]
    },
    {
      id: "1.06",
      topicNumber: "1.06",
      title: "Lewis Acid–Base Concept",
      coreConcepts: [
        "Lewis Acid: An electron-pair acceptor (possesses an empty orbital). E.g., BF₃, AlCl₃, Fe³⁺, CO₂, H⁺.",
        "Lewis Base: An electron-pair donor (possesses at least one lone pair). E.g., NH₃, H₂O, F⁻, CN⁻.",
        "The reaction produces a coordinate covalent bond (dative bond) to form a Lewis adduct or complex ion.",
        "All Brønsted acids/bases are Lewis acids/bases, but Lewis is broader and includes reactions without proton transfer."
      ],
      rememberPoints: [
        "Lewis Acid = Lone pair acceptor (Electrophile).",
        "Lewis Base = Lone pair donor (Nucleophile).",
        "BF₃ + :NH₃ → F₃B–NH₃ (classic Lewis acid-base adduct)."
      ],
      practiceQuestions: [
        {
          id: "q1.06_1",
          question: "In the reaction BF₃ + NH₃ → F₃B:NH₃, boron trifluoride (BF₃) acts as a:",
          options: [
            "Brønsted–Lowry acid",
            "Lewis base",
            "Lewis acid",
            "Arrhenius base"
          ],
          correctAnswer: 2,
          explanation: "Boron in BF₃ has an incomplete octet (6 valence electrons) and accepts an electron pair from the nitrogen of NH₃, making it a Lewis acid."
        },
        {
          id: "q1.06_2",
          question: "Which of the following species can act ONLY as a Lewis acid and NOT as a Brønsted–Lowry acid?",
          options: [
            "HCl",
            "AlCl₃",
            "HSO₄⁻",
            "NH₄⁺"
          ],
          correctAnswer: 1,
          explanation: "AlCl₃ has no proton (H⁺) to donate, so it cannot be a Brønsted acid, but aluminium has an empty orbital to accept electron pairs (Lewis acid)."
        }
      ]
    },
    {
      id: "1.07",
      topicNumber: "1.07",
      title: "Water Ion Product, Kw",
      coreConcepts: [
        "Kw = [H₃O⁺][OH⁻].",
        "At 25 °C (298 K), Kw = 1.0 × 10⁻¹⁴.",
        "Autoionization of water is ENDOTHERMIC: 2H₂O(l) + heat ⇌ H₃O⁺(aq) + OH⁻(aq).",
        "As temperature increases: equilibrium shifts forward, [H₃O⁺] and [OH⁻] both increase, Kw increases, and neutral pH becomes less than 7 (e.g., at 60 °C, neutral pH ≈ 6.5)."
      ],
      rememberPoints: [
        "Neutral solution condition: [H₃O⁺] = [OH⁻] at ANY temperature.",
        "pH = 7 is neutral ONLY at 25 °C! At higher temperature, neutral pH < 7."
      ],
      practiceQuestions: [
        {
          id: "q1.07_1",
          question: "If pure water is heated from 25 °C to 60 °C, which statement is correct?",
          options: [
            "Kw decreases and the water becomes acidic",
            "Kw increases and the water becomes alkaline",
            "Kw increases, [H₃O⁺] = [OH⁻], and water remains neutral with pH < 7",
            "Kw remains constant at 1.0 × 10⁻¹⁴"
          ],
          correctAnswer: 2,
          explanation: "Since autoionization is endothermic, higher temperature increases Kw. [H⁺] equals [OH⁻], so it remains chemically neutral, but higher [H⁺] means pH = −log[H⁺] drops below 7."
        },
        {
          id: "q1.07_2",
          question: "What is the hydroxide ion concentration [OH⁻] in a neutral solution at 25 °C?",
          options: [
            "1.0 × 10⁻¹⁴ M",
            "1.0 × 10⁻⁷ M",
            "7.0 M",
            "1.0 × 10⁰ M"
          ],
          correctAnswer: 1,
          explanation: "At 25 °C, Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. In a neutral solution [H⁺] = [OH⁻] = √(1.0 × 10⁻¹⁴) = 1.0 × 10⁻⁷ M."
        }
      ]
    },
    {
      id: "1.08",
      topicNumber: "1.08",
      title: "pH, pOH and Ion Concentrations",
      coreConcepts: [
        "pH = −log[H₃O⁺]  =>  [H₃O⁺] = 10^(−pH)",
        "pOH = −log[OH⁻]  =>  [OH⁻] = 10^(−pOH)",
        "At 25 °C: pH + pOH = pKw = 14.00.",
        "Acidic: pH < 7, [H₃O⁺] > 10⁻⁷ M.",
        "Basic: pH > 7, [H₃O⁺] < 10⁻⁷ M."
      ],
      rememberPoints: [
        "Logarithmic scale: A change of 1 pH unit represents a 10-fold change in [H₃O⁺].",
        "A change of 2 pH units represents a 100-fold change."
      ],
      practiceQuestions: [
        {
          id: "q1.08_1",
          question: "If a solution has a pOH of 4.30 at 25 °C, what is its pH?",
          options: [
            "4.30",
            "9.70",
            "7.00",
            "11.70"
          ],
          correctAnswer: 1,
          explanation: "pH = 14.00 − pOH = 14.00 − 4.30 = 9.70."
        },
        {
          id: "q1.08_2",
          question: "Solution A has pH = 3 and Solution B has pH = 6. How many times more acidic is Solution A than Solution B?",
          options: [
            "2 times",
            "3 times",
            "1000 times",
            "100 times"
          ],
          correctAnswer: 2,
          explanation: "Each pH unit is a factor of 10. The difference is 6 − 3 = 3 units, so 10³ = 1000 times more concentrated in [H⁺]."
        }
      ]
    },
    {
      id: "1.09",
      topicNumber: "1.09",
      title: "Strong and Weak Acids and Bases",
      coreConcepts: [
        "Strong Acids ionize ~100% in dilute solution. Examples: HCl, HBr, HI, HNO₃, H₂SO₄ (1st ionization), HClO₄, HClO₃.",
        "Strong Bases dissociate ~100%. Examples: Group 1 hydroxides (LiOH, NaOH, KOH, etc.) and heavy Group 2 hydroxides (Ca(OH)₂, Sr(OH)₂, Ba(OH)₂).",
        "Weak Acids and Bases ionize only partially (usually < 5%). They exist in dynamic equilibrium with their ions.",
        "For a strong monoprotic acid of initial concentration C: [H₃O⁺] = C."
      ],
      rememberPoints: [
        "Never use Ka/Kb for strong acids/bases; assume 100% dissociation.",
        "Ba(OH)₂ releases 2 moles of OH⁻ per mole: [OH⁻] = 2 × [Ba(OH)₂]."
      ],
      practiceQuestions: [
        {
          id: "q1.09_1",
          question: "What is the pH of a 0.005 M Ba(OH)₂ solution at 25 °C?",
          options: [
            "2.00",
            "2.30",
            "11.70",
            "12.00"
          ],
          correctAnswer: 3,
          explanation: "Ba(OH)₂ → Ba²⁺ + 2OH⁻. Thus [OH⁻] = 2 × 0.005 M = 0.010 M = 10⁻² M. pOH = −log(10⁻²) = 2.00. pH = 14 − 2.00 = 12.00."
        },
        {
          id: "q1.09_2",
          question: "Which of the following is categorized as a WEAK acid?",
          options: [
            "HClO₄",
            "HNO₃",
            "HF",
            "HBr"
          ],
          correctAnswer: 2,
          explanation: "Hydrofluoric acid (HF) is a weak acid due to the high H-F bond strength and poor anion stabilization, whereas HClO₄, HNO₃, and HBr are strong mineral acids."
        }
      ]
    },
    {
      id: "1.10",
      topicNumber: "1.10",
      title: "Percent Ionization",
      coreConcepts: [
        "Percent Ionization = ([H₃O⁺]_eq / [HA]_initial) × 100%.",
        "Dilution effect: As a weak acid solution is diluted (initial concentration decreases), percent ionization INCREASES.",
        "Even though percent ionization increases upon dilution, the total [H₃O⁺] concentration still decreases."
      ],
      rememberPoints: [
        "5% rule: If percent ionization is < 5%, the approximation [HA]_initial − x ≈ [HA]_initial is valid.",
        "Dilution increases degree of dissociation α."
      ],
      practiceQuestions: [
        {
          id: "q1.10_1",
          question: "A 0.10 M solution of a weak acid HA has a [H⁺] concentration of 1.34 × 10⁻³ M. Its percent ionization is:",
          options: [
            "1.34%",
            "0.134%",
            "13.4%",
            "0.0134%"
          ],
          correctAnswer: 0,
          explanation: "% ionization = (1.34 × 10⁻³ / 0.10) × 100% = 1.34%."
        },
        {
          id: "q1.10_2",
          question: "When water is added to dilute a 0.2 M acetic acid solution:",
          options: [
            "The percent ionization decreases and pH decreases",
            "The percent ionization increases and pH increases",
            "Ka increases and pH remains constant",
            "Both percent ionization and [H⁺] increase"
          ],
          correctAnswer: 1,
          explanation: "According to Ostwald's dilution law, dilution increases the degree/percent of ionization, while total [H⁺] decreases, causing pH to rise towards 7."
        }
      ]
    },
    {
      id: "1.11",
      topicNumber: "1.11",
      title: "Acid Dissociation Constant, Ka",
      coreConcepts: [
        "For HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq): Ka = ([H₃O⁺][A⁻]) / [HA].",
        "Ka depends ONLY on temperature.",
        "Larger Ka = stronger acid (greater ionization).",
        "pKa = −log(Ka). Smaller pKa = stronger acid."
      ],
      rememberPoints: [
        "High Ka  <=>  Low pKa  <=>  Stronger weak acid.",
        "For polyprotic acids: Ka1 >> Ka2 >> Ka3 because removing H⁺ from a negatively charged species requires more energy."
      ],
      practiceQuestions: [
        {
          id: "q1.11_1",
          question: "Acid X has pKa = 3.75, while Acid Y has pKa = 4.88. Which statement is correct?",
          options: [
            "Acid Y is stronger than Acid X",
            "Acid X has a higher Ka and is stronger than Acid Y",
            "Acid X has a lower Ka than Acid Y",
            "Both acids have identical ionization constants"
          ],
          correctAnswer: 1,
          explanation: "Smaller pKa corresponds to a higher Ka value and thus a stronger acid. Acid X (pKa 3.75) is stronger than Acid Y (pKa 4.88)."
        },
        {
          id: "q1.11_2",
          question: "Which of the following will alter the numerical value of the acid dissociation constant (Ka)?",
          options: [
            "Changing the initial concentration of the weak acid",
            "Adding the conjugate base salt",
            "Changing the temperature of the solution",
            "Diluting the solution with pure water"
          ],
          correctAnswer: 2,
          explanation: "Equilibrium constants such as Ka depend strictly on temperature; concentrations or dilution change the position of equilibrium, not the constant itself."
        }
      ]
    },
    {
      id: "1.12",
      topicNumber: "1.12",
      title: "Base Dissociation Constant, Kb",
      coreConcepts: [
        "For B(aq) + H₂O(l) ⇌ BH⁺(aq) + OH⁻(aq): Kb = ([BH⁺][OH⁻]) / [B].",
        "For any conjugate acid–base pair in aqueous solution: Ka × Kb = Kw = 1.0 × 10⁻¹⁴ (at 25 °C).",
        "Taking negative logarithms: pKa + pKb = pKw = 14.00."
      ],
      rememberPoints: [
        "If you are given Ka for NH₄⁺, calculate Kb for NH₃ using Kb = Kw / Ka.",
        "Larger Kb = stronger weak base = smaller pKb."
      ],
      practiceQuestions: [
        {
          id: "q1.12_1",
          question: "For a conjugate acid–base pair at 25 °C, what is the mathematical relationship between Ka and Kb?",
          options: [
            "Ka + Kb = 14",
            "Ka / Kb = Kw",
            "Ka × Kb = 1.0 × 10⁻¹⁴",
            "Ka × Kb = 1.0"
          ],
          correctAnswer: 2,
          explanation: "Multiplying the equilibrium expressions for Ka and Kb cancels out the acid and conjugate base species, leaving [H₃O⁺][OH⁻] = Kw = 1.0 × 10⁻¹⁴."
        },
        {
          id: "q1.12_2",
          question: "If the Kb of ammonia (NH₃) is 1.8 × 10⁻⁵, what is the Ka of its conjugate acid (NH₄⁺)?",
          options: [
            "1.8 × 10⁻⁹",
            "5.6 × 10⁻¹⁰",
            "5.6 × 10⁻⁵",
            "1.0 × 10⁻¹⁴"
          ],
          correctAnswer: 1,
          explanation: "Ka = Kw / Kb = (1.0 × 10⁻¹⁴) / (1.8 × 10⁻⁵) = 5.56 × 10⁻¹⁰ ≈ 5.6 × 10⁻¹⁰."
        }
      ]
    },
    {
      id: "1.13",
      topicNumber: "1.13",
      title: "Weak Acid Equilibrium Calculations",
      coreConcepts: [
        "Standard ICE Table: Initial, Change, Equilibrium.",
        "HA ⇌ H⁺ + A⁻: Initial = [C, 0, 0], Change = [−x, +x, +x], Equilibrium = [C − x, x, x].",
        "Ka = x² / (C − x).",
        "If C / Ka > 400 (or % ionization < 5%), approximate: C − x ≈ C, so x = √(Ka × C)."
      ],
      rememberPoints: [
        "x = [H⁺] = √(Ka × C) for weak monoprotic acids when approximation holds.",
        "Always test the 5% check: (x / C) × 100% < 5%."
      ],
      practiceQuestions: [
        {
          id: "q1.13_1",
          question: "Calculate the [H⁺] of a 0.10 M acetic acid solution (Ka = 1.8 × 10⁻⁵).",
          options: [
            "1.8 × 10⁻⁵ M",
            "1.34 × 10⁻³ M",
            "0.10 M",
            "4.24 × 10⁻⁴ M"
          ],
          correctAnswer: 1,
          explanation: "Using x = √(Ka × C) = √(1.8 × 10⁻⁵ × 0.10) = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M. (1.34 × 10⁻³ / 0.10) = 1.34% < 5%, so approximation is valid."
        },
        {
          id: "q1.13_2",
          question: "The approximation C_initial − x ≈ C_initial is generally considered mathematically valid if:",
          options: [
            "C_initial is less than Ka",
            "The percent ionization is greater than 10%",
            "The ratio C_initial / Ka is greater than 400 (or % ionization < 5%)",
            "The acid is diprotic"
          ],
          correctAnswer: 2,
          explanation: "The 5% rule requires that the ionized amount x is less than 5% of initial concentration, which corresponds to C / Ka > 400."
        }
      ]
    },
    {
      id: "1.14",
      topicNumber: "1.14",
      title: "Weak Bases and Polyprotic Acids",
      coreConcepts: [
        "Polyprotic acids have more than one ionizable proton (e.g., H₂SO₄, H₂CO₃, H₃PO₄).",
        "Ionization occurs in stepwise stages: Ka1 >> Ka2 >> Ka3.",
        "Because Ka1 is typically 10³ to 10⁶ times greater than Ka2, virtually all [H⁺] in solution is produced from the FIRST dissociation step.",
        "For a diprotic acid H₂A, the concentration of the divalent anion [A²⁻] is approximately equal to Ka2."
      ],
      rememberPoints: [
        "pH is determined by Ka1.",
        "In a solution of weak diprotic acid H₂A: [A²⁻] ≈ Ka2."
      ],
      practiceQuestions: [
        {
          id: "q1.14_1",
          question: "In a 0.10 M aqueous solution of the diprotic acid H₂S (Ka1 = 1.0 × 10⁻⁷, Ka2 = 1.3 × 10⁻¹³), what is the sulfide ion concentration [S²⁻]?",
          options: [
            "1.0 × 10⁻⁴ M",
            "1.0 × 10⁻⁷ M",
            "1.3 × 10⁻¹³ M",
            "1.3 × 10⁻¹⁴ M"
          ],
          correctAnswer: 2,
          explanation: "For a weak diprotic acid where Ka1 >> Ka2, the second dissociation H⁻ ⇌ H⁺ + A²⁻ produces [A²⁻] ≈ Ka2. Thus [S²⁻] ≈ Ka2 = 1.3 × 10⁻¹³ M."
        },
        {
          id: "q1.14_2",
          question: "Why is Ka1 always much larger than Ka2 for a polyprotic acid?",
          options: [
            "The first proton is lost from a neutral molecule, whereas the second is lost from a negatively charged anion",
            "The acid increases in strength after losing one proton",
            "The second ionization produces hydroxide ions",
            "The solvent prevents the second ionization from occurring"
          ],
          correctAnswer: 0,
          explanation: "It is electrostatically much more difficult to remove a positively charged proton (H⁺) from a negatively charged ion (HA⁻) than from a neutral molecule (H₂A)."
        }
      ]
    },
    {
      id: "1.15",
      topicNumber: "1.15",
      title: "Common-Ion Effect",
      coreConcepts: [
        "The shift in equilibrium caused by the addition of an ion that is already involved in the equilibrium.",
        "By Le Chatelier's principle, adding a common ion suppresses the ionization of a weak electrolyte.",
        "Example: Adding CH₃COONa (adds acetate ion CH₃COO⁻) to a solution of CH₃COOH shifts the equilibrium to the left: CH₃COOH ⇌ CH₃COO⁻ + H⁺.",
        "Consequence: [H⁺] decreases, and the pH of the acid solution INCREASES."
      ],
      rememberPoints: [
        "Adding common conjugate base to weak acid -> lowers [H⁺] -> increases pH.",
        "Adding common conjugate acid (e.g., NH₄Cl) to weak base (NH₃) -> lowers [OH⁻] -> decreases pH."
      ],
      practiceQuestions: [
        {
          id: "q1.15_1",
          question: "What happens when solid sodium acetate (CH₃COONa) is added to a 0.1 M solution of acetic acid (CH₃COOH)?",
          options: [
            "The pH decreases and percent ionization increases",
            "The pH increases and percent ionization decreases",
            "The Ka of acetic acid increases",
            "Both pH and [H⁺] increase"
          ],
          correctAnswer: 1,
          explanation: "The common acetate ion (CH₃COO⁻) shifts equilibrium to the left, suppressing acetic acid ionization. Thus [H⁺] drops, meaning pH increases."
        },
        {
          id: "q1.15_2",
          question: "The suppression of the ionization of a weak electrolyte by the addition of a strong electrolyte containing a shared ion is known as the:",
          options: [
            "Buffer capacity",
            "Common-ion effect",
            "Hydrolysis effect",
            "Autoionization phenomenon"
          ],
          correctAnswer: 1,
          explanation: "This is the textbook definition of the common-ion effect."
        }
      ]
    },
    {
      id: "1.16",
      topicNumber: "1.16",
      title: "Buffer Solutions",
      coreConcepts: [
        "A buffer solution resists changes in pH upon the addition of small amounts of an acid or a base.",
        "Acidic Buffer: Weak acid + its conjugate base salt (e.g., CH₃COOH + CH₃COONa).",
        "Basic Buffer: Weak base + its conjugate acid salt (e.g., NH₃ + NH₄Cl).",
        "Henderson–Hasselbalch Equation: pH = pKa + log([Conjugate Base] / [Weak Acid]).",
        "Optimal buffering occurs when [Base] = [Acid], where pH = pKa (buffer range: pKa ± 1).",
        "Buffer Capacity: The amount of acid or base a buffer can absorb before significant pH change; depends on total concentrations."
      ],
      rememberPoints: [
        "A mixture of strong acid and its salt (e.g., HCl + NaCl) is NOT a buffer!",
        "When [Base] = [Acid], log(1) = 0, so pH = pKa."
      ],
      practiceQuestions: [
        {
          id: "q1.16_1",
          question: "Which of the following mixtures acts as an effective buffer solution?",
          options: [
            "0.1 M HCl and 0.1 M NaCl",
            "0.1 M HNO₃ and 0.1 M NaNO₃",
            "0.1 M CH₃COOH and 0.1 M CH₃COONa",
            "0.1 M NaOH and 0.1 M NH₃"
          ],
          correctAnswer: 2,
          explanation: "A buffer requires a weak acid and its conjugate base (or weak base and conjugate acid). CH₃COOH (weak acid) and CH₃COONa provide the required weak acid-base pair."
        },
        {
          id: "q1.16_2",
          question: "According to the Henderson–Hasselbalch equation, what is the pH of a buffer containing equal molar concentrations of HF and NaF (pKa of HF = 3.17)?",
          options: [
            "7.00",
            "3.17",
            "1.00",
            "10.83"
          ],
          correctAnswer: 1,
          explanation: "When [Base] = [Acid], log([Base]/[Acid]) = log(1) = 0. Therefore pH = pKa + 0 = 3.17."
        }
      ]
    },
    {
      id: "1.17",
      topicNumber: "1.17",
      title: "Salt Hydrolysis",
      coreConcepts: [
        "Salt of Strong Acid + Strong Base (e.g., NaCl, KNO₃) → Neutral solution (pH = 7). Neither ion hydrolyzes.",
        "Salt of Strong Acid + Weak Base (e.g., NH₄Cl, AlCl₃) → Acidic solution (pH < 7). Cation hydrolyzes: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.",
        "Salt of Weak Acid + Strong Base (e.g., CH₃COONa, KCN) → Basic solution (pH > 7). Anion hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻.",
        "Salt of Weak Acid + Weak Base (e.g., NH₄CN): Compare Ka and Kb: if Ka > Kb → acidic; if Kb > Ka → basic; if Ka = Kb → neutral."
      ],
      rememberPoints: [
        "Anions of weak acids produce OH⁻ (basic hydrolysis).",
        "Cations of weak bases (and small, highly charged metal ions like Fe³⁺, Al³⁺) produce H₃O⁺ (acidic hydrolysis)."
      ],
      practiceQuestions: [
        {
          id: "q1.17_1",
          question: "An aqueous solution of ammonium chloride (NH₄Cl) is acidic because:",
          options: [
            "Cl⁻ reacts with water to release OH⁻",
            "NH₄⁺ hydrolyzes to donate a proton to water, forming H₃O⁺",
            "NH₄Cl is a strong covalent molecule",
            "Water molecules are consumed to produce solid NH₄OH"
          ],
          correctAnswer: 1,
          explanation: "NH₄⁺ is the conjugate acid of the weak base NH₃. It hydrolyzes: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺, making the solution acidic."
        },
        {
          id: "q1.17_2",
          question: "Which of the following salts will produce an alkaline (basic) solution when dissolved in pure water?",
          options: [
            "NaCl",
            "KNO₃",
            "Na₂CO₃",
            "NH₄NO₃"
          ],
          correctAnswer: 2,
          explanation: "Na₂CO₃ comes from a strong base (NaOH) and a weak acid (H₂CO₃/HCO₃⁻). The carbonate ion CO₃²⁻ hydrolyzes: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻, producing an alkaline pH."
        }
      ]
    },
    {
      id: "1.18",
      topicNumber: "1.18",
      title: "Acid–Base Indicators",
      coreConcepts: [
        "An indicator is a weak organic acid (HIn) or weak organic base whose ionized (In⁻) and un-ionized (HIn) forms have distinctly different colors.",
        "Equilibrium: HIn(aq, color 1) ⇌ H⁺(aq) + In⁻(aq, color 2).",
        "Color change transition range: pH = pKin ± 1.",
        "Equivalence Point: Theoretical point where stoichiometric equivalents of acid and base are equal.",
        "End Point: Experimental point where the indicator visibly changes color. An indicator must be chosen whose pKin coincides with the equivalence point pH."
      ],
      rememberPoints: [
        "Phenolphthalein: Colorless in acid, magenta/pink in base (transition pH 8.2–10.0); ideal for strong acid vs strong base or weak acid vs strong base.",
        "Methyl Orange: Red in acid, yellow in base (transition pH 3.1–4.4); ideal for strong acid vs weak base."
      ],
      practiceQuestions: [
        {
          id: "q1.18_1",
          question: "The experimental point at which an indicator changes color during a titration is called the:",
          options: [
            "Equivalence point",
            "End point",
            "Neutral point",
            "Standardization point"
          ],
          correctAnswer: 1,
          explanation: "The end point is the visible color transition of the indicator, while the equivalence point is the stoichiometric completion of the chemical reaction."
        },
        {
          id: "q1.18_2",
          question: "Which indicator is most suitable for titrating a weak base (such as NH₃) with a strong acid (such as HCl)?",
          options: [
            "Phenolphthalein (transition pH 8.2–10.0)",
            "Methyl orange (transition pH 3.1–4.4)",
            "Thymolphthalein (transition pH 9.3–10.5)",
            "Universal indicator"
          ],
          correctAnswer: 1,
          explanation: "The equivalence point of a weak base vs strong acid titration is in the acidic range (pH < 7, typically ~5). Methyl orange changes color in the acidic pH 3.1–4.4 interval."
        }
      ]
    },
    {
      id: "1.19",
      topicNumber: "1.19",
      title: "Equivalents and Neutralization",
      coreConcepts: [
        "Equivalent Weight = Molar Mass / n-factor.",
        "n-factor for acids = number of replaceable H⁺ ions (e.g., HCl = 1, H₂SO₄ = 2, H₃PO₄ = 3).",
        "n-factor for bases = number of replaceable OH⁻ ions (e.g., NaOH = 1, Ca(OH)₂ = 2).",
        "Normality (N) = Molarity (M) × n-factor.",
        "Neutralization formula: N₁V₁ = N₂V₂, or (n₁ × M₁ × V₁) = (n₂ × M₂ × V₂)."
      ],
      rememberPoints: [
        "1 mole of H₂SO₄ provides 2 equivalents of acid.",
        "At complete neutralization: Equivalents of Acid = Equivalents of Base."
      ],
      practiceQuestions: [
        {
          id: "q1.19_1",
          question: "What volume of 0.20 M NaOH is required to completely neutralize 25.0 mL of 0.10 M H₂SO₄?",
          options: [
            "12.5 mL",
            "25.0 mL",
            "50.0 mL",
            "100.0 mL"
          ],
          correctAnswer: 1,
          explanation: "Equivalents of acid = equivalents of base. n_acid × M_acid × V_acid = n_base × M_base × V_base. 2 × 0.10 M × 25.0 mL = 1 × 0.20 M × V_base => 5.0 = 0.20 × V_base => V_base = 25.0 mL."
        },
        {
          id: "q1.19_2",
          question: "What is the normality (N) of a 0.50 M sulfuric acid (H₂SO₄) solution in a complete neutralization reaction?",
          options: [
            "0.25 N",
            "0.50 N",
            "1.00 N",
            "2.00 N"
          ],
          correctAnswer: 2,
          explanation: "Normality = Molarity × n-factor. For diprotic H₂SO₄, n = 2. N = 0.50 M × 2 = 1.00 N."
        }
      ]
    },
    {
      id: "1.20",
      topicNumber: "1.20",
      title: "Acid–Base Titration Curves",
      coreConcepts: [
        "Strong Acid vs Strong Base Titration: Equivalence point pH = 7.00. Curve has a sharp vertical jump between pH 3 and 11.",
        "Weak Acid vs Strong Base Titration: Initial pH is higher. Equivalence point pH > 7 (due to basic salt hydrolysis). Half-equivalence point: pH = pKa.",
        "Strong Acid vs Weak Base Titration: Equivalence point pH < 7 (due to acidic salt hydrolysis). Half-equivalence point: pOH = pKb.",
        "Weak Acid vs Weak Base Titration: Has no sharp inflection; volumetric indicators are unsuitable (potentiometric titration required)."
      ],
      rememberPoints: [
        "Half-equivalence point for weak acid vs strong base: [HA] = [A⁻] => pH = pKa.",
        "Equivalence point pH is determined by the salt formed!"
      ],
      practiceQuestions: [
        {
          id: "q1.20_1",
          question: "In the titration of 50.0 mL of 0.10 M acetic acid with 0.10 M NaOH, what is the pH at the half-equivalence point (Ka = 1.8 × 10⁻⁵)?",
          options: [
            "7.00",
            "4.74",
            "8.72",
            "1.80"
          ],
          correctAnswer: 1,
          explanation: "At the half-equivalence point, exactly half the weak acid has been converted to its conjugate base, so [HA] = [A⁻]. Therefore, pH = pKa = −log(1.8 × 10⁻⁵) = 4.74."
        },
        {
          id: "q1.20_2",
          question: "Why is the equivalence point pH greater than 7 in a titration of a weak acid with a strong base?",
          options: [
            "Excess strong base is present at the equivalence point",
            "The conjugate base produced hydrolyzes with water to generate OH⁻ ions",
            "The weak acid fails to react completely",
            "The strong base neutralizes the water"
          ],
          correctAnswer: 1,
          explanation: "At the equivalence point, the solution contains the conjugate base of the weak acid, which hydrolyzes: A⁻ + H₂O ⇌ HA + OH⁻, resulting in a basic pH > 7."
        }
      ]
    }
  ]
};
