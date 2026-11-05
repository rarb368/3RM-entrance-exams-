import { UnitNotes } from "./chemistryGrade12Unit1";

export const chemistryGrade12Unit4Notes: UnitNotes = {
  subject: "Chemistry",
  grade: 12,
  unitNumber: 4,
  unitTitle: "Polymers",
  subtitle: "Macromolecules, addition & condensation polymerization, thermoplastics vs thermosets, synthetic resins, natural polymers, and vulcanization",
  topics: [
    {
      id: "4.01",
      topicNumber: "4.01",
      title: "Meaning of Polymers",
      coreConcepts: [
        "A polymer is a high-molecular-weight macromolecule composed of many small, repeating structural units bonded together by covalent bonds.",
        "The word comes from Greek 'poly' (many) and 'meros' (parts/units).",
        "Polymers typically have molecular weights ranging from thousands to millions of grams per mole (g/mol).",
        "Because polymer chains vary in length during synthesis, polymers have an average molecular weight rather than a single fixed molecular weight.",
        "They display unique physical characteristics such as viscoelasticity, tensile strength, high durability, and resistance to chemical corrosion."
      ],
      rememberPoints: [
        "Polymer = giant molecule composed of repeated building units.",
        "Bonds connecting monomer units are strong covalent bonds.",
        "Polymers exhibit average molar mass distributions rather than sharp discrete masses."
      ],
      practiceQuestions: [
        {
          id: "q4.01_1",
          question: "The chemical bonds linking individual repeat units together along the backbone of a polymer chain are:",
          options: [
            "Hydrogen bonds",
            "Covalent bonds",
            "Ionic bonds",
            "Van der Waals forces only"
          ],
          correctAnswer: 1,
          explanation: "Individual monomer units are linked by sharing electron pairs in strong, stable covalent bonds along the macromolecular backbone."
        },
        {
          id: "q4.01_2",
          question: "Why do synthetic polymers lack a single exact molecular mass unlike small organic molecules like glucose?",
          options: [
            "Because polymer samples consist of chains of varying lengths and degrees of polymerization",
            "Because polymers decompose continuously in air",
            "Because they contain variable numbers of neutrons",
            "Because they only exist in gaseous form"
          ],
          correctAnswer: 0,
          explanation: "Polymerization reactions produce a distribution of chain lengths, so polymers are characterized by an average molecular weight (Mn or Mw)."
        }
      ]
    },
    {
      id: "4.02",
      topicNumber: "4.02",
      title: "Monomers and Repeat Units",
      coreConcepts: [
        "A Monomer is the small, reactive starting molecule that chemically bonds with other monomers to form a polymer chain.",
        "Functionality: A monomer must be at least difunctional (have two bonding sites) to form a continuous chain. Difunctional monomers form linear chains; polyfunctional (≥ 3) monomers form cross-linked networks.",
        "The Repeat Unit is the smallest recurring structural segment of the polymer chain whose chemical formula enclosed in square brackets with subscript 'n' represents the entire macromolecule: −[—R—]ₙ−.",
        "The Degree of Polymerization (DP, or n) is the number of monomer repeat units in the polymer chain: M_polymer = n × M_repeat_unit.",
        "In addition polymers, the repeat unit has the exact same empirical formula as the monomer; in condensation polymers, the repeat unit has fewer atoms because a small molecule was eliminated."
      ],
      rememberPoints: [
        "Monomer = starting small molecule; Repeat unit = recurring formula in brackets.",
        "Functionality ≥ 2 is required for polymerization.",
        "Degree of polymerization (n) = M(polymer) / M(monomer unit)."
      ],
      practiceQuestions: [
        {
          id: "q4.02_1",
          question: "What is the minimum functionality required for a monomer molecule to be capable of forming a linear polymer chain?",
          options: [
            "Monofunctional (1 reactive site)",
            "Difunctional (2 reactive sites)",
            "Trifunctional (3 reactive sites)",
            "Tetrafunctional (4 reactive sites)"
          ],
          correctAnswer: 1,
          explanation: "A monomer must possess at least two reactive sites (such as a double bond or two terminal functional groups) to propagate a chain in both directions."
        },
        {
          id: "q4.02_2",
          question: "If a sample of polyethylene has an average molecular mass of 28,000 g/mol, what is its degree of polymerization (n)? (Molar mass of ethylene C₂H₄ = 28 g/mol)",
          options: [
            "100",
            "500",
            "1,000",
            "2,800"
          ],
          correctAnswer: 2,
          explanation: "Degree of polymerization n = M(polymer) / M(monomer) = 28,000 / 28 = 1,000 repeat units."
        }
      ]
    },
    {
      id: "4.03",
      topicNumber: "4.03",
      title: "Polymer Architecture and Structural Classes",
      coreConcepts: [
        "Based on chain structure, polymers are classified into four main architectures:",
        "1. Linear Polymers: Straight, unbranched long chains (e.g., HDPE, PVC, Nylon). Chains can pack closely together, leading to high density, high crystallinity, high tensile strength, and higher melting points.",
        "2. Branched Polymers: Side chains or branches project from the main backbone (e.g., LDPE, amylopectin, glycogen). Branches prevent close packing, resulting in lower density, lower tensile strength, and greater flexibility.",
        "3. Cross-linked Polymers: Adjacent linear chains are joined at various points by covalent cross-links (e.g., vulcanized rubber). Elastic and resistant to swelling in solvents.",
        "4. Network Polymers: Complex three-dimensional rigid covalent mesh (e.g., Bakelite, melamine, cured epoxy). Monomers are trifunctional or polyfunctional; they do not melt on heating and are extremely hard and brittle."
      ],
      rememberPoints: [
        "Linear = tight packing, high density, high melting point (HDPE).",
        "Branched = loose packing, low density, high flexibility (LDPE).",
        "Cross-linked = flexible elastic chains with covalent bridges (vulcanized rubber).",
        "Network = rigid 3D covalent lattice (Bakelite)."
      ],
      practiceQuestions: [
        {
          id: "q4.03_1",
          question: "High-density polyethylene (HDPE) has higher density and tensile strength than low-density polyethylene (LDPE) primarily because:",
          options: [
            "HDPE contains aromatic benzene rings",
            "HDPE has a linear structure with minimal branching, allowing chains to pack closely together",
            "HDPE is composed of triple bonds",
            "HDPE has heavy chlorine substituents along its backbone"
          ],
          correctAnswer: 1,
          explanation: "Linear chains without significant side branches pack tightly into crystalline domains, maximizing intermolecular van der Waals forces and increasing density."
        },
        {
          id: "q4.03_2",
          question: "Which type of polymer architecture is characterized by a permanent 3D covalent network that prevents melting and thermal reshaping?",
          options: [
            "Linear polymer",
            "Network polymer",
            "Dendrimer",
            "Single-strand branched polymer"
          ],
          correctAnswer: 1,
          explanation: "Network polymers (like Bakelite) consist of extensive 3D covalent cross-links formed by polyfunctional monomers that degrade rather than melt upon heating."
        }
      ]
    },
    {
      id: "4.04",
      topicNumber: "4.04",
      title: "Polymerization Overview (Addition vs. Condensation)",
      coreConcepts: [
        "Polymerization is the chemical reaction uniting monomer molecules to form polymer chains.",
        "Two classic classification schemes (by Carothers and Flory):",
        "1. Addition (Chain-Growth) Polymerization: Monomers contain unsaturated bonds (usually C=C double bonds). Monomers add to the growing end of an active chain one at a time. No byproduct molecules are eliminated. The empirical formula of the polymer is identical to that of the monomer.",
        "2. Condensation (Step-Growth) Polymerization: Monomers possess two or more reactive functional groups (e.g., −OH, −COOH, −NH₂). Reaction proceeds between any two molecular species with the simultaneous elimination of small molecules like H₂O, HCl, or CH₃OH. The empirical formula of the polymer differs from that of the monomers.",
        "In addition polymerization, high-molecular-weight polymer forms almost immediately, and monomer concentration decreases steadily throughout the reaction.",
        "In condensation polymerization, high molecular weights are attained only at very high conversion (>98%) after monomer is consumed in early oligomer stages."
      ],
      rememberPoints: [
        "Addition = C=C bonds, no small molecule byproduct, fast chain growth.",
        "Condensation = functional groups (−OH, −COOH, −NH₂), eliminates H₂O/HCl, step growth."
      ],
      practiceQuestions: [
        {
          id: "q4.04_1",
          question: "Which of the following statements is TRUE regarding addition polymerization?",
          options: [
            "Water molecules are always eliminated at each linkage",
            "Monomers must possess unsaturated carbon-carbon double or triple bonds",
            "The reaction only occurs between diamines and dicarboxylic acids",
            "The empirical formula of the polymer is completely different from the monomer"
          ],
          correctAnswer: 1,
          explanation: "Addition polymerization involves the opening of unsaturated π-bonds (e.g., in alkenes) without the release of any small molecular byproducts."
        },
        {
          id: "q4.04_2",
          question: "Condensation polymerization is fundamentally distinguished by the fact that:",
          options: [
            "No byproducts are produced during the coupling of monomers",
            "Monomers combine with the elimination of a small byproduct molecule such as water or HCl",
            "Only free radical initiators can catalyze the process",
            "Polymer chains cannot contain heteroatoms like oxygen or nitrogen"
          ],
          correctAnswer: 1,
          explanation: "Step-growth condensation joins functionalized monomers with the release of a low-molecular-weight byproduct, most commonly water (H₂O)."
        }
      ]
    },
    {
      id: "4.05",
      topicNumber: "4.05",
      title: "Addition Polymerization Mechanism and Types",
      coreConcepts: [
        "Addition polymerization proceeds by opening of the carbon-carbon double bond: n (CH₂=CHR) → −[—CH₂—CHR—]ₙ−.",
        "Depending on the nature of the active propagating center, addition polymerization is categorized into three types:",
        "1. Free-Radical Polymerization: Initiated by organic peroxides (e.g., benzoyl peroxide, AIBN) that undergo homolytic cleavage under heat or UV light to generate free radicals (R•). The propagating center is a neutral carbon radical.",
        "2. Cationic Polymerization: Initiated by Lewis acids (BF₃, AlCl₃) with proton donors (H₂O). Propagating center is a carbocation (C⁺). Best for monomers with electron-donating groups (e.g., isobutylene).",
        "3. Anionic Polymerization: Initiated by strong bases (e.g., n-butyl lithium, sodium amide). Propagating center is a carbanion (C⁻). Best for monomers with electron-withdrawing groups (e.g., acrylonitrile, methyl methacrylate).",
        "4. Coordination Polymerization: Catalyzed by Ziegler-Natta catalysts (TiCl₄ + Al(C₂H₅)₃) to produce highly stereoregular linear polymers."
      ],
      rememberPoints: [
        "Radical: Peroxide initiator (benzoyl peroxide) generates R•.",
        "Cationic: Lewis acid generates carbocation (favored by electron donors).",
        "Anionic: Strong base generates carbanion (favored by electron withdrawers).",
        "Coordination: Ziegler-Natta yields stereoregular linear chains."
      ],
      practiceQuestions: [
        {
          id: "q4.05_1",
          question: "Benzoyl peroxide is widely used in industrial plastics synthesis as an initiator for:",
          options: [
            "Free-radical addition polymerization",
            "Condensation polymerization",
            "Hydrolysis of polysaccharides",
            "Saponification of fatty acids"
          ],
          correctAnswer: 0,
          explanation: "Benzoyl peroxide undergoes thermal homolytic cleavage of its O−O peroxide bond to produce benzoyloxy free radicals that initiate chain growth."
        },
        {
          id: "q4.05_2",
          question: "Monomers bearing strong electron-withdrawing groups (such as −CN in acrylonitrile) are most effectively polymerized by which mechanism?",
          options: [
            "Cationic addition polymerization",
            "Anionic addition polymerization",
            "Acid-catalyzed condensation",
            "Thermal vulcanization"
          ],
          correctAnswer: 1,
          explanation: "Electron-withdrawing substituents stabilize the propagating carbanion intermediate, facilitating anionic chain-growth polymerization."
        }
      ]
    },
    {
      id: "4.06",
      topicNumber: "4.06",
      title: "Stages of Addition Polymerization",
      coreConcepts: [
        "Free-radical addition polymerization occurs in three distinct, sequential steps:",
        "1. Chain Initiation: An initiator undergoes homolytic cleavage into radicals (In₂ → 2 In•). The initiator radical then attacks the π-bond of an alkene monomer to create a carbon radical: In• + CH₂=CHR → In—CH₂—ĊHR.",
        "2. Chain Propagation: The carbon radical rapidly adds to another monomer molecule, regenerating the radical center at the new chain terminus: In—CH₂—ĊHR + CH₂=CHR → In—CH₂—CHR—CH₂—ĊHR. This step repeats thousands of times in fractions of a second.",
        "3. Chain Termination: Propagating radical chains are deactivated by either:",
        "   a) Combination (coupling): Two active radical chains collide and bond covalently: ~R• + •R~ → ~R—R~.",
        "   b) Disproportionation: A hydrogen atom is transferred from one chain to another, yielding one saturated chain and one chain with a terminal alkene: ~CH₂—ĊHR + ~CH₂—ĊHR → ~CH₂—CH₂R + ~CH=CHR.",
        "Chain Transfer: A growing radical can abstract an atom from solvent, monomer, or polymer, terminating the original chain while initiating a new branch (leading to branching in LDPE)."
      ],
      rememberPoints: [
        "Three stages: 1. Initiation (creates radicals), 2. Propagation (rapid growth), 3. Termination (radical destruction).",
        "Termination occurs by Combination (chain joining) or Disproportionation (H transfer).",
        "Chain transfer causes branching."
      ],
      practiceQuestions: [
        {
          id: "q4.06_1",
          question: "When two growing polymer free radicals collide and combine to form a single longer inactive macromolecule, this termination mechanism is called:",
          options: [
            "Chain transfer",
            "Combination (coupling)",
            "Disproportionation",
            "Homolysis"
          ],
          correctAnswer: 1,
          explanation: "Combination occurs when the unpaired electrons on two propagating chain ends form a new covalent bond, joining both chains into a single dead molecule."
        },
        {
          id: "q4.06_2",
          question: "Chain transfer reactions during free-radical polymerization of ethylene are directly responsible for producing:",
          options: [
            "Short and long chain branching leading to LDPE",
            "High crystallinity and density",
            "Thermoset cross-linked networks",
            "Unreacted monomer gas"
          ],
          correctAnswer: 0,
          explanation: "Intramolecular ('backbiting') and intermolecular chain transfer create side branches on the backbone, reducing chain packing and creating Low-Density Polyethylene."
        }
      ]
    },
    {
      id: "4.07",
      topicNumber: "4.07",
      title: "Polyethylene: LDPE vs. HDPE",
      coreConcepts: [
        "Polyethylene (PE) is the most widely produced synthetic polymer: n CH₂=CH₂ → −[—CH₂—CH₂—]ₙ−.",
        "Low-Density Polyethylene (LDPE):",
        "  - Synthesis: Free-radical polymerization at high pressure (1000–3000 atm) and elevated temperature (100–300 °C) with trace O₂ or peroxide.",
        "  - Structure: Highly branched chains; cannot pack tightly; low density (~0.91–0.94 g/cm³) and lower melting point (~105–115 °C).",
        "  - Properties: Flexible, transparent, ductile, chemical resistant.",
        "  - Uses: Squeeze bottles, plastic wrap, grocery bags, flexible tubing.",
        "High-Density Polyethylene (HDPE):",
        "  - Synthesis: Coordination polymerization at low pressure (1–50 atm) and low temperature (50–100 °C) using Ziegler-Natta catalysts (TiCl₄ + Al(C₂H₅)₃) or Phillips chromium catalyst.",
        "  - Structure: Essentially unbranched, linear chains; close crystalline packing; higher density (~0.95–0.97 g/cm³) and higher melting point (~130–135 °C).",
        "  - Properties: Rigid, high tensile strength, opaque, tougher.",
        "  - Uses: Milk jugs, detergent jugs, chemical containers, water pipes, heavy-duty crates."
      ],
      rememberPoints: [
        "LDPE: High P (1000–3000 atm), free radical, branched, low density (~0.92 g/cm³), flexible bags.",
        "HDPE: Low P (1–50 atm), Ziegler-Natta catalyst, linear, high density (~0.96 g/cm³), rigid bottles/pipes."
      ],
      practiceQuestions: [
        {
          id: "q4.07_1",
          question: "Which catalytic system allows the commercial production of linear High-Density Polyethylene (HDPE) under mild pressures and temperatures?",
          options: [
            "Platinum gauze catalyst",
            "Ziegler-Natta catalyst [TiCl₄ + Al(C₂H₅)₃]",
            "Vanadium pentoxide (V₂O₅)",
            "Concentrated sulfuric acid"
          ],
          correctAnswer: 1,
          explanation: "Karl Ziegler and Giulio Natta discovered that coordination catalysts of transition metal salts (TiCl₄) and aluminum alkyls polymerize ethylene linearly at low pressure."
        },
        {
          id: "q4.07_2",
          question: "Why is LDPE preferred over HDPE for manufacturing transparent food wraps and flexible shopping bags?",
          options: [
            "LDPE has extensive branching that prevents crystalline packing, making it softer and more flexible",
            "LDPE has a higher melting point than HDPE",
            "LDPE is completely insoluble in all organic solvents at 200 °C",
            "LDPE conducts electric current"
          ],
          correctAnswer: 0,
          explanation: "Extensive branching in LDPE leads to lower crystallinity, resulting in greater optical transparency, flexibility, and elongation before tearing."
        }
      ]
    },
    {
      id: "4.08",
      topicNumber: "4.08",
      title: "Polystyrene (PS) and Expanded Polystyrene",
      coreConcepts: [
        "Monomer: Styrene (phenylethene, C₆H₅CH=CH₂).",
        "Polymerization: Addition polymerization: n C₆H₅CH=CH₂ → −[—CH(C₆H₅)—CH₂—]ₙ−.",
        "Structure: Bulky aromatic phenyl rings pendant along the hydrocarbon chain prevent crystallization; PS is naturally amorphous and glass-clear.",
        "Properties: Hard, brittle, rigid, optically clear, good electrical insulator, dissolves in aromatic and chlorinated organic solvents.",
        "Expanded Polystyrene (EPS, Styrofoam): Produced by incorporating a volatile blowing agent (e.g., pentane, ~5–8%) into polystyrene beads. When heated with steam, the pentane boils and expands the beads into a cellular foam (~95–98% air by volume).",
        "Uses of solid PS: Disposable Petri dishes, plastic cutlery, CD jewel cases, transparent cups.",
        "Uses of EPS foam: Thermal insulation for building walls/roofs, protective packaging for electronics, disposable coffee cups, egg cartons."
      ],
      rememberPoints: [
        "Monomer: Styrene (phenylethene).",
        "Bulky phenyl ring gives hardness and glassy transparency.",
        "Expanded PS (EPS) uses pentane blowing agent → lightweight thermal insulator."
      ],
      practiceQuestions: [
        {
          id: "q4.08_1",
          question: "The monomer unit for polystyrene is phenylethene, commonly known as:",
          options: [
            "Propylene",
            "Styrene",
            "Vinyl chloride",
            "Tetrafluoroethylene"
          ],
          correctAnswer: 1,
          explanation: "Styrene consists of a benzene ring bonded to a vinyl group (C₆H₅−CH=CH₂) and polymerizes to form polystyrene."
        },
        {
          id: "q4.08_2",
          question: "What blowing agent is commonly used in manufacturing Expanded Polystyrene (EPS) foam for thermal insulation and protective packaging?",
          options: [
            "Chlorine gas",
            "Liquid nitrogen",
            "Pentane hydrocarbon",
            "Argon"
          ],
          correctAnswer: 2,
          explanation: "Low-boiling pentane is absorbed into polystyrene beads; when heated with steam, pentane vaporizes, expanding the polymer into lightweight closed-cell foam."
        }
      ]
    },
    {
      id: "4.09",
      topicNumber: "4.09",
      title: "Polypropylene (PP) and Polymer Tacticity",
      coreConcepts: [
        "Monomer: Propylene (propene, CH₂=CH—CH₃).",
        "Polymerization: n CH₂=CH(CH₃) → −[—CH₂—CH(CH₃)—]ₙ−.",
        "Tacticity describes the spatial stereochemical arrangement of pendant substituent groups (−CH₃) along the polymer backbone:",
        "1. Isotactic Polypropylene: All methyl (−CH₃) groups are situated on the SAME side of the polymer chain. Chains pack into a tight crystal lattice: high melting point (~165 °C), high tensile strength, high stiffness. Prepared using stereospecific Ziegler-Natta or metallocene catalysts.",
        "2. Syndiotactic Polypropylene: Methyl groups alternate regularly on OPPOSITE sides of the chain. Crystalline and tough.",
        "3. Atactic Polypropylene: Methyl groups are arranged in a completely RANDOM orientation on either side. Cannot pack into crystals: soft, amorphous, sticky, rubbery wax with low commercial value.",
        "Uses of Isotactic PP: Plastic bottle caps, microwaveable containers (withstands 100 °C boiling water), automotive battery casings, thermal underwear fibers, synthetic carpets, ropes."
      ],
      rememberPoints: [
        "Isotactic = all on the same side (crystalline, commercial grade, m.p. 165 °C).",
        "Syndiotactic = alternating sides.",
        "Atactic = random orientation (rubbery, amorphous, non-crystalline).",
        "PP withstands higher temperatures than PE (can hold boiling liquids)."
      ],
      practiceQuestions: [
        {
          id: "q4.09_1",
          question: "In stereoregular polypropylene, when all pendant methyl (−CH₃) groups are located on the same side of the carbon backbone, the polymer is termed:",
          options: [
            "Atactic",
            "Isotactic",
            "Syndiotactic",
            "Thermoset"
          ],
          correctAnswer: 1,
          explanation: "Isotactic polymer chains have all substituent groups positioned uniformly on one side of the polymer axis, promoting crystallization."
        },
        {
          id: "q4.09_2",
          question: "Why can polypropylene (PP) food containers be safely used in microwave ovens to reheat boiling soup, whereas LDPE containers melt?",
          options: [
            "PP has a higher crystalline melting point (~165 °C) than the boiling point of water, unlike LDPE (~105 °C)",
            "PP contains metal ions that absorb microwave radiation",
            "PP is an inorganic ceramic material",
            "PP has no carbon atoms in its backbone"
          ],
          correctAnswer: 0,
          explanation: "Isotactic PP has a melting point of ~165 °C, comfortably above water's 100 °C boiling point, preventing softening or leaching during microwave heating."
        }
      ]
    },
    {
      id: "4.10",
      topicNumber: "4.10",
      title: "Polyvinyl Chloride (PVC) and Plasticizers",
      coreConcepts: [
        "Monomer: Vinyl chloride (chloroethene, CH₂=CHCl).",
        "Polymerization: n CH₂=CHCl → −[—CH₂—CH(Cl)—]ₙ−.",
        "Structure & Properties: Chlorine is electronegative, creating strong dipole-dipole attractions between chains. Rigid PVC is hard, strong, flame-retardant (chlorine releases HCl on burning, extinguishing flame), and chemically resistant.",
        "Plasticizers: Small organic liquid molecules (principally phthalate esters like DEHP/DOP) added to unplasticized PVC (uPVC).",
        "Mechanism of Plasticizer Action: Plasticizer molecules insert between PVC chains, spacing them further apart and shielding interchain dipole-dipole forces. This lowers the glass transition temperature (Tg), turning rigid PVC into a flexible, rubbery elastomer.",
        "Uses of Rigid uPVC: Water supply and drainage pipes, window frames, chemical conduit ducts.",
        "Uses of Flexible PVC: Electrical wire insulation, synthetic faux leather, shower curtains, medical blood/IV bags, raincoats."
      ],
      rememberPoints: [
        "Monomer: Chloroethene (vinyl chloride, CH₂=CHCl).",
        "Flame retardant due to chlorine content.",
        "Plasticizers (phthalates) wedge between chains, lowering Tg and increasing flexibility.",
        "uPVC = rigid pipes; Plasticized PVC = flexible cable coating & raincoats."
      ],
      practiceQuestions: [
        {
          id: "q4.10_1",
          question: "What is the primary function of plasticizers (such as phthalate esters) when compounded into polyvinyl chloride (PVC)?",
          options: [
            "To act as free-radical initiators to restart polymerization",
            "To penetrate between chains and reduce interchain dipole forces, increasing flexibility and softness",
            "To make PVC resistant to burning",
            "To color the polymer bright white"
          ],
          correctAnswer: 1,
          explanation: "Plasticizers insert between rigid polymer chains, increasing free volume and lowering the glass transition temperature (Tg) to make PVC pliable."
        },
        {
          id: "q4.10_2",
          question: "Which of the following items is manufactured from unplasticized PVC (uPVC) due to its high rigidity and corrosion resistance?",
          options: [
            "Flexible garden hoses",
            "Underground plumbing and drainage pipes",
            "Inflatable pool toys",
            "Clear kitchen cling film"
          ],
          correctAnswer: 1,
          explanation: "Rigid uPVC has excellent mechanical modulus and chemical corrosion resistance, making it standard for water and sewage pipes."
        }
      ]
    },
    {
      id: "4.11",
      topicNumber: "4.11",
      title: "PMMA (Plexiglas) and PTFE (Teflon)",
      coreConcepts: [
        "Polymethyl Methacrylate (PMMA, Plexiglas, Lucite, Perspex):",
        "  - Monomer: Methyl methacrylate (CH₂=C(CH₃)COOCH₃).",
        "  - Properties: Exceptional optical clarity (transmits 92% of visible light, superior to glass), half the weight of glass, shatter-resistant, weather-resistant.",
        "  - Uses: Aircraft cockpit canopies, illuminated outdoor signs, aquarium viewing walls, optical lenses, bone cement in orthopedic surgery.",
        "Polytetrafluoroethylene (PTFE, Teflon):",
        "  - Monomer: Tetrafluoroethene (CF₂=CF₂).",
        "  - Polymerization: n CF₂=CF₂ → −[—CF₂—CF₂—]ₙ− under peroxide catalysts.",
        "  - Structure & Bonding: Carbon backbone completely sheathed in a tight cylinder of electronegative fluorine atoms. The C−F bond is one of the strongest single bonds in organic chemistry (~485 kJ/mol).",
        "  - Properties: Extremely non-reactive, inert to boiling aqua regia, acids, and bases; highest chemical resistance of all plastics; withstands temperatures up to 260 °C; remarkably low coefficient of friction ('slippery', non-stick).",
        "  - Uses: Non-stick cookware coatings (frying pans), waterproof Gore-Tex fabrics, chemical reactor gaskets, low-friction bearings, plumbers' sealing tape."
      ],
      rememberPoints: [
        "PMMA: High optical transparency, shatterproof glass alternative.",
        "PTFE (Teflon): Monomer CF₂=CF₂. C−F bond is extremely strong.",
        "PTFE properties: Chemically inert, heat-resistant (260 °C), lowest friction, non-stick."
      ],
      practiceQuestions: [
        {
          id: "q4.11_1",
          question: "The extreme chemical inertness and high thermal stability of Teflon (PTFE) are primarily attributed to:",
          options: [
            "The presence of triple bonds between carbons",
            "The immense bond strength of carbon-fluorine (C−F) bonds and protective shielding by fluorine atoms",
            "Weak London dispersion forces between molecules",
            "Its low molecular weight"
          ],
          correctAnswer: 1,
          explanation: "The short, exceptionally strong C−F bonds (~485 kJ/mol) and the dense sheath of electronegative fluorine atoms protect the carbon backbone from chemical attack."
        },
        {
          id: "q4.11_2",
          question: "Which transparent synthetic polymer is known commercially as Plexiglas or Lucite and is widely used as a shatterproof glass replacement in aircraft windshields?",
          options: [
            "Polymethyl methacrylate (PMMA)",
            "Polytetrafluoroethylene (PTFE)",
            "Polyvinyl chloride (PVC)",
            "Polyester (PET)"
          ],
          correctAnswer: 0,
          explanation: "PMMA has high optical transparency (transmitting up to 92% of visible light) and resists shattering compared to standard inorganic glass."
        }
      ]
    },
    {
      id: "4.12",
      topicNumber: "4.12",
      title: "Condensation Polymerization (Step-Growth)",
      coreConcepts: [
        "Condensation polymerization involves the reaction between bifunctional or polyfunctional monomers accompanied by the elimination of a small byproduct molecule (most commonly H₂O, HCl, or CH₃OH).",
        "Step-growth kinetics: Any two molecules in the mixture (monomers, dimers, trimers, or oligomers) can react with each other at any stage:",
        "  - Monomer + Monomer → Dimer + H₂O",
        "  - Dimer + Monomer → Trimer + H₂O",
        "  - Dimer + Dimer → Tetramer + H₂O",
        "Monomers are consumed very early in the reaction (~50% conversion gives mostly dimers and trimers). High polymer molecular weight is reached only when conversion exceeds 99% (governed by Carothers equation: DP = 1 / (1 − p)).",
        "Important classes of condensation polymers: Polyamides (nylons), Polyesters (Dacron/PET), Polyurethanes, Phenol-formaldehyde resins (Bakelite), and Polysaccharides/Proteins in nature."
      ],
      rememberPoints: [
        "Elimination of small molecules (H₂O, HCl).",
        "Step-growth: Dimers, trimers, oligomers form first.",
        "High molecular weight requires very high fractional conversion (p > 0.99)."
      ],
      practiceQuestions: [
        {
          id: "q4.12_1",
          question: "According to the Carothers equation for linear condensation polymerization, why does a reaction must reach over 98% conversion before useful high-molecular-weight polymer forms?",
          options: [
            "Because catalysts only activate near the end of the process",
            "Because early stages consume monomers to produce small oligomers (dimers and trimers) rather than long chains",
            "Because water molecules catalyze chain degradation",
            "Because condensation polymers only grow from one active radical end"
          ],
          correctAnswer: 1,
          explanation: "In step-growth, all species react indiscriminately; monomers quickly form short oligomers, and high average DP occurs only when oligomers combine at near-complete conversion."
        },
        {
          id: "q4.12_2",
          question: "Which of the following pairs of monomers can undergo condensation polymerization to form a linear macromolecule?",
          options: [
            "Ethylene and propylene",
            "Hexanedioic acid and 1,6-diaminohexane",
            "Vinyl chloride and styrene",
            "Methane and ethane"
          ],
          correctAnswer: 1,
          explanation: "A dicarboxylic acid and a diamine possess two terminal reactive functional groups and react with the elimination of water molecules to form a polyamide."
        }
      ]
    },
    {
      id: "4.13",
      topicNumber: "4.13",
      title: "Nylon (Polyamides)",
      coreConcepts: [
        "Polyamides are polymers containing repeated amide linkages (−CO−NH−) along the main chain, identical to peptide bonds in proteins.",
        "Nylon-6,6 Synthesis: Formed by condensation of 1,6-diaminohexane (hexamethylenediamine, 6 carbons) and hexanedioic acid (adipic acid, 6 carbons):",
        "  n H₂N−(CH₂)₆−NH₂ + n HOOC−(CH₂)₄−COOH → −[—NH−(CH₂)₆−NH−CO−(CH₂)₄−CO—]ₙ− + 2n H₂O.",
        "The designation '6,6' denotes that both the diamine and the dicarboxylic acid contain 6 carbon atoms.",
        "Nylon-6 Synthesis: Prepared by ring-opening polymerization of Caprolactam (a cyclic amide containing 6 carbons).",
        "Properties: Exceptionally high tensile strength, elasticity, and abrasion resistance. Linear chains align and form dense networks of intermolecular hydrogen bonds between carbonyl oxygens (C=O) and amide hydrogens (N−H) of neighboring chains.",
        "Uses: Clothing fibers, hosiery, mountaineering ropes, parachutes, fishing lines, toothbrush bristles, machine gears and bearings."
      ],
      rememberPoints: [
        "Linkage: Amide group (−CO−NH−).",
        "Nylon-6,6: 1,6-diaminohexane (6C) + adipic acid (6C).",
        "Nylon-6: Ring-opening of caprolactam.",
        "High strength arises from dense intermolecular hydrogen bonding between chains."
      ],
      practiceQuestions: [
        {
          id: "q4.13_1",
          question: "What specific chemical linkage repeats throughout the backbone of nylon polymers?",
          options: [
            "Ester linkage (−COO−)",
            "Amide linkage (−CO−NH−)",
            "Ether linkage (−C−O−C−)",
            "Disulfide linkage (−S−S−)"
          ],
          correctAnswer: 1,
          explanation: "Nylons are polyamides characterized by recurring amide (−CONH−) functional groups formed by reacting carboxyl and amine groups."
        },
        {
          id: "q4.13_2",
          question: "The exceptional tensile strength and high melting point of nylon fibers are primarily due to:",
          options: [
            "Dense intermolecular hydrogen bonding between N−H and C=O groups of adjacent chains",
            "Covalent carbon-fluorine bonds",
            "Ionic bonds between sulfate ions",
            "Bulky phenyl side rings that cross-link"
          ],
          correctAnswer: 0,
          explanation: "Linear polyamide chains align in parallel sheets where regular, strong hydrogen bonds cross-bridge adjacent chains, providing high tensile strength."
        }
      ]
    },
    {
      id: "4.14",
      topicNumber: "4.14",
      title: "Polyester (PET / Dacron / Terylene)",
      coreConcepts: [
        "Polyesters contain recurring ester linkages (−COO−) in the main backbone.",
        "Polyethylene Terephthalate (PET, Dacron, Terylene):",
        "  - Monomers: Benzene-1,4-dicarboxylic acid (terephthalic acid) and ethane-1,2-diol (ethylene glycol).",
        "  - Reaction: n HOOC−C₆H₄−COOH + n HO−CH₂−CH₂−OH → −[—CO−C₆H₄−CO−O−CH₂−CH₂−O—]ₙ− + 2n H₂O.",
        "Properties: High mechanical strength, resistance to wrinkling and stretching, moisture-resistant, low gas permeability (ideal for carbonated beverage containment).",
        "Fiber Applications: Dacron/Terylene textile fabrics, blended with cotton (polycotton) to produce wrinkle-free, durable clothing, sails, and conveyor belts.",
        "Molded Resin Applications: Blow-molded clear beverage bottles (PET soda and water bottles). PET has recycling code #1.",
        "PET Recycling: Easily collected, mechanically shredded into flakes, washed, melted into pellets, and spun into recycled fleece jackets, carpeting, or new packaging."
      ],
      rememberPoints: [
        "Monomers: Terephthalic acid + Ethylene glycol.",
        "Linkage: Ester group (−COO−).",
        "Properties: Wrinkle-resistant, low gas permeability, recyclable (code #1).",
        "Blended with cotton to enhance durability."
      ],
      practiceQuestions: [
        {
          id: "q4.14_1",
          question: "Which two monomers undergo condensation polymerization to produce the polyester known as Dacron or PET?",
          options: [
            "Adipic acid and hexamethylenediamine",
            "Terephthalic acid and ethylene glycol",
            "Phenol and formaldehyde",
            "Styrene and butadiene"
          ],
          correctAnswer: 1,
          explanation: "Polyethylene terephthalate (PET) is synthesized by esterification between terephthalic acid (1,4-benzenedicarboxylic acid) and ethylene glycol (1,2-ethanediol)."
        },
        {
          id: "q4.14_2",
          question: "Why is PET the preferred polymer material for blow-molded bottles containing carbonated soft drinks?",
          options: [
            "It conducts electricity efficiently",
            "It exhibits low permeability to carbon dioxide gas, keeping drinks fizzy while offering shatterproof durability",
            "It decomposes in water after one week",
            "It is completely opaque to visible light"
          ],
          correctAnswer: 1,
          explanation: "PET has an excellent gas barrier profile that retains dissolved CO₂ pressure, combined with high tensile strength and transparency."
        }
      ]
    },
    {
      id: "4.15",
      topicNumber: "4.15",
      title: "Bakelite (Phenol-Formaldehyde Resins)",
      coreConcepts: [
        "Bakelite (polyoxybenzylmethylenglycolanhydride) was the first completely synthetic plastic, invented by Leo Baekeland in 1907.",
        "Monomers: Phenol (C₆H₅OH) and Formaldehyde (methanal, HCHO).",
        "Synthesis: Reaction proceeds under either acidic or basic catalysis:",
        "  - Step 1: Formaldehyde attacks the ortho and para positions of phenol, forming mono-, di-, and tri-hydroxymethylphenols.",
        "  - Step 2: In acidic conditions with excess phenol, linear intermediate chains form, known as Novolac (used in paints and lacquers).",
        "  - Step 3: When heated with hexamethylenetetramine (source of more formaldehyde) under pressure, cross-linking occurs via methylene (−CH₂−) bridges in all three dimensions, forming a hard, infusible, insoluble 3D network: Bakelite.",
        "Properties: Exceptional thermal stability, non-flammable, scratch-resistant, excellent electrical insulator, does not soften when heated (thermosetting).",
        "Uses: Electrical switches, sockets, plugs, circuit breaker casings, heat-resistant handles for cookware (pots and frying pans), billiard balls."
      ],
      rememberPoints: [
        "First fully synthetic plastic (1907).",
        "Monomers: Phenol + Formaldehyde.",
        "Cross-linked by methylene (−CH₂−) bridges.",
        "Thermosetting: Infusible, insoluble, heat-resistant handles and electrical switches."
      ],
      practiceQuestions: [
        {
          id: "q4.15_1",
          question: "Bakelite is formed by the condensation reaction between which two monomers?",
          options: [
            "Phenol and formaldehyde",
            "Aniline and acetaldehyde",
            "Glycerol and phthalic anhydride",
            "Urea and ethylene oxide"
          ],
          correctAnswer: 0,
          explanation: "Phenol reacts with formaldehyde (methanal) to yield cross-linked network polymers joined by methylene bridges."
        },
        {
          id: "q4.15_2",
          question: "Why are frying pan handles and wall electrical switches frequently fabricated from Bakelite?",
          options: [
            "Because Bakelite melts at low temperature and can be easily remolded",
            "Because Bakelite is an outstanding electrical and thermal insulator that will not melt or deform when hot",
            "Because Bakelite dissolves easily in cooking oil",
            "Because Bakelite is highly flexible like rubber"
          ],
          correctAnswer: 1,
          explanation: "Its 3D cross-linked thermosetting structure gives Bakelite high thermal resistance, rigidity, and electrical insulation properties."
        }
      ]
    },
    {
      id: "4.16",
      topicNumber: "4.16",
      title: "Natural Polymers and Vulcanization",
      coreConcepts: [
        "Natural polymers are synthesized by living organisms. Major classes include:",
        "1. Polysaccharides: Polymers of monosaccharides linked by glycosidic bonds. Starch (energy storage in plants, made of amylose α-1,4 and amylopectin α-1,4 & α-1,6 linkages), Glycogen (energy storage in animals), and Cellulose (structural wall in plants, β-1,4-glucosidic bonds; cannot be digested by humans).",
        "2. Proteins: Polypeptides formed by condensation of 20 standard α-amino acids joined by peptide bonds (−CONH−). Form structural tissues (keratin, collagen) and biocatalysts (enzymes).",
        "3. Nucleic Acids: DNA and RNA; polymers of nucleotides linked by 3′,5′-phosphodiester bridges, storing and transmitting genetic code.",
        "4. Natural Rubber: Harvested as latex from Hevea brasiliensis trees. Chemically, it is cis-1,4-polyisoprene: −[—CH₂—C(CH₃)=CH—CH₂—]ₙ−. All double bonds are cis, causing kinks that give coiled elasticity.",
        "Gutta-percha is the trans-1,4-polyisoprene isomer: rigid, crystalline, non-elastic (used in dentistry for root canals).",
        "Vulcanization (Charles Goodyear, 1839): Raw natural rubber is sticky when warm and brittle when cold. Heating raw rubber with 1–5% sulfur creates covalent disulfide cross-links (−S—S−) between adjacent polyisoprene chains.",
        "Effects of Vulcanization: Eliminates stickiness, drastically increases tensile strength, elasticity, thermal stability, and resistance to chemical oxidation."
      ],
      rememberPoints: [
        "Natural rubber = cis-1,4-polyisoprene (elastic).",
        "Gutta-percha = trans-1,4-polyisoprene (rigid).",
        "Vulcanization: Heating with sulfur creates −S—S− cross-links, transforming sticky raw latex into tough, elastic rubber.",
        "Cellulose = β-1,4 linkages; Starch = α-1,4 linkages."
      ],
      practiceQuestions: [
        {
          id: "q4.16_1",
          question: "Chemically, natural rubber harvested from the Hevea brasiliensis tree is a polymer of isoprene with which stereochemical configuration?",
          options: [
            "trans-1,4-polyisoprene",
            "cis-1,4-polyisoprene",
            "Atactic 1,2-polyisoprene",
            "Syndiotactic 3,4-polyisoprene"
          ],
          correctAnswer: 1,
          explanation: "Natural rubber is cis-1,4-polyisoprene; the all-cis geometry introduces bends that prevent crystallization, allowing chains to coil and stretch elastically."
        },
        {
          id: "q4.16_2",
          question: "What chemical change occurs during the vulcanization of natural rubber by heating with elemental sulfur?",
          options: [
            "All double bonds are converted into triple bonds",
            "Covalent sulfur-sulfur bridges cross-link adjacent polyisoprene chains",
            "Polyisoprene chains are chopped into small monomer units",
            "The polymer loses all its sulfur content"
          ],
          correctAnswer: 1,
          explanation: "Sulfur atoms react with allylic positions of polyisoprene, forming disulfide bridges (−S−S−) that tether chains together, preventing plastic slippage."
        }
      ]
    },
    {
      id: "4.17",
      topicNumber: "4.17",
      title: "Synthetic Polymers and Synthetic Rubbers",
      coreConcepts: [
        "Synthetic rubbers (elastomers) were developed to replace natural rubber, especially during wartime shortages:",
        "1. Neoprene (Polychloroprene): Monomer is chloroprene (2-chloro-1,3-butadiene). Chemically resistant to oils, petroleum, ozone, and weather; used for car fan belts, oil gaskets, wetsuits.",
        "2. Styrene-Butadiene Rubber (SBR / Buna-S): A copolymer synthesized by emulsion polymerization of 75% 1,3-butadiene and 25% styrene. Excellent resistance to abrasion, puncture, and aging; used for car tire treads.",
        "3. Nitrile Rubber (Buna-N): Copolymer of 1,3-butadiene and acrylonitrile (CH₂=CHCN). Outstanding resistance to oils, gasoline, and hydrocarbon solvents; used for fuel hoses, hydraulic seals, and nitrile medical gloves.",
        "Copolymers: Polymers made from two or more different monomer species (e.g., SBR, ABS). Homopolymers are made from a single monomer (e.g., PE, PVC)."
      ],
      rememberPoints: [
        "Neoprene = polychloroprene (oil & ozone resistant).",
        "SBR (Buna-S) = Butadiene + Styrene (car tires).",
        "Buna-N = Butadiene + Acrylonitrile (fuel hoses & nitrile gloves).",
        "Copolymer = 2+ different monomers; Homopolymer = 1 monomer."
      ],
      practiceQuestions: [
        {
          id: "q4.17_1",
          question: "Nitrile rubber (Buna-N), celebrated for its superior resistance to gasoline and automotive oils, is a copolymer of 1,3-butadiene and:",
          options: [
            "Styrene",
            "Acrylonitrile",
            "Methyl methacrylate",
            "Tetrafluoroethylene"
          ],
          correctAnswer: 1,
          explanation: "Buna-N is a copolymer of 1,3-butadiene and acrylonitrile; the polar nitrile (−C≡N) groups repel non-polar petroleum hydrocarbons."
        },
        {
          id: "q4.17_2",
          question: "Which synthetic rubber is produced by polymerizing chloroprene (2-chloro-1,3-butadiene) and is widely used for aquatic wetsuits and industrial gaskets?",
          options: [
            "Neoprene",
            "Gutta-percha",
            "Bakelite",
            "Polystyrene"
          ],
          correctAnswer: 0,
          explanation: "Neoprene is the trade name for polychloroprene, exhibiting exceptional ozone, weather, and chemical resistance."
        }
      ]
    },
    {
      id: "4.18",
      topicNumber: "4.18",
      title: "Thermoplastics: Structure, Properties and Processing",
      coreConcepts: [
        "Thermoplastics are polymers that soften and become viscous liquids when heated, and harden reversibly when cooled.",
        "This heating-cooling cycle can be repeated many times without significant chemical decomposition, making thermoplastics recyclable.",
        "Structure: Composed of linear or branched chains held together only by secondary intermolecular forces (van der Waals dispersion forces, dipole-dipole attractions, or hydrogen bonds), with NO permanent covalent cross-links.",
        "Thermal behavior: Below glass transition temperature (Tg), amorphous regions are glassy and rigid; above Tg, chains can slide past one another, becoming rubbery; above melting temperature (Tm), crystalline domains melt into a viscous flow.",
        "Common Examples: Polyethylene (LDPE, HDPE), Polypropylene (PP), Polyvinyl chloride (PVC), Polystyrene (PS), Polyethylene terephthalate (PET), Polymethyl methacrylate (PMMA), Nylon, Teflon.",
        "Processing Methods: Injection molding (intricate parts), Extrusion (pipes, sheets, filaments), Blow molding (bottles), Thermoforming (trays)."
      ],
      rememberPoints: [
        "Thermoplastics: Soften on heating, solidify on cooling (reversible).",
        "Chains held by weak intermolecular forces (no covalent cross-links).",
        "Recyclable and remoldable.",
        "Examples: PE, PP, PVC, PS, PET, Nylon."
      ],
      practiceQuestions: [
        {
          id: "q4.18_1",
          question: "Why can thermoplastic polymers be repeatedly melted, reshaped, and recycled without undergoing permanent chemical degradation?",
          options: [
            "Their chains are locked into rigid 3D covalent networks",
            "Their chains are held together only by intermolecular forces that break reversibly when heated",
            "They contain no carbon atoms in their backbone",
            "They undergo spontaneous vulcanization when cooled"
          ],
          correctAnswer: 1,
          explanation: "Thermal energy overcomes secondary intermolecular forces (van der Waals, dipole, or H-bonds) allowing chains to flow, but reforming when cooled."
        },
        {
          id: "q4.18_2",
          question: "Which of the following polymers is classified as a thermoplastic?",
          options: [
            "Bakelite",
            "Melamine-formaldehyde resin",
            "Polyvinyl chloride (PVC)",
            "Vulcanized rubber tire tread"
          ],
          correctAnswer: 2,
          explanation: "PVC consists of linear chains that soften upon heating and solidify upon cooling, unlike thermosets (Bakelite, melamine) or cross-linked vulcanized rubber."
        }
      ]
    },
    {
      id: "4.19",
      topicNumber: "4.19",
      title: "Thermosetting Polymers: Structure, Curing and Comparison",
      coreConcepts: [
        "Thermosetting polymers (thermosets) are materials that set permanently into an infusible, insoluble 3D network upon initial heating or chemical curing.",
        "Once cured, thermosets CANNOT be remelted, reshaped, or recycled by heating; further heating only causes irreversible thermal decomposition and charring.",
        "Structure: Formed by polyfunctional monomers that create an extensive 3D network of strong covalent cross-links tying all chains together into a single giant macromolecule.",
        "Curing: The irreversible chemical cross-linking reaction driven by heat, chemical cross-linking agents (hardeners), or UV radiation.",
        "Comparison: Thermoplastics vs. Thermosets:",
        "  - Bonding: Secondary intermolecular forces vs. extensive 3D covalent cross-links.",
        "  - Heat effect: Softens reversibly vs. does not soften (degrades/chars).",
        "  - Recyclability: Recyclable vs. non-recyclable.",
        "  - Solubility: Soluble in appropriate organic solvents vs. insoluble (only swells slightly).",
        "  - Mechanical: Flexible to rigid vs. extremely hard, brittle, high dimensional stability.",
        "Examples of Thermosets: Bakelite (phenol-formaldehyde), Melamine-formaldehyde (Formica tableware), Epoxy resins (structural adhesives), Urea-formaldehyde, Polyurethane foams."
      ],
      rememberPoints: [
        "Thermosets: Set permanently; do NOT remelt on heating.",
        "Extensive 3D covalent cross-links.",
        "Insoluble, infusible, non-recyclable.",
        "Examples: Bakelite, Melamine, Epoxy resins."
      ],
      practiceQuestions: [
        {
          id: "q4.19_1",
          question: "When a thermosetting polymer such as Bakelite is reheated to very high temperatures, it will:",
          options: [
            "Melt into a clear free-flowing liquid that can be poured into new molds",
            "Char and decompose chemically without melting",
            "Dissolve spontaneously into water",
            "Depolymerize cleanly back into pure formaldehyde gas"
          ],
          correctAnswer: 1,
          explanation: "Because the entire object is held together by covalent cross-links, thermal energy breaks covalent bonds (charring) rather than simply separating chains."
        },
        {
          id: "q4.19_2",
          question: "Which of the following is a classic example of a thermosetting polymer?",
          options: [
            "Polyethylene (PE)",
            "Polystyrene (PS)",
            "Melamine-formaldehyde resin",
            "Nylon-6,6"
          ],
          correctAnswer: 2,
          explanation: "Melamine-formaldehyde forms a heavily cross-linked 3D network upon curing, making it an infusible thermoset used in shatterproof dinnerware and Formica."
        }
      ]
    },
    {
      id: "4.20",
      topicNumber: "4.20",
      title: "Polymer Identification, Recycling Codes and Environmental Impact",
      coreConcepts: [
        "Standard Resin Identification Codes (SPI Codes 1–7):",
        "  1. PETE / PET: Polyethylene terephthalate (soda bottles, water bottles).",
        "  2. HDPE: High-density polyethylene (milk jugs, detergent bottles).",
        "  3. PVC / V: Polyvinyl chloride (pipes, siding, cable insulation).",
        "  4. LDPE: Low-density polyethylene (shopping bags, squeeze bottles).",
        "  5. PP: Polypropylene (bottle caps, straws, yogurt cups, syrup bottles).",
        "  6. PS: Polystyrene (disposable cutlery, CD cases, Styrofoam cups).",
        "  7. OTHER: All other resins or multi-layer combinations (polycarbonate, acrylic, bioplastics like PLA).",
        "Environmental Impact: Most synthetic polymers resist biological enzyme digestion and remain in landfills for centuries. Marine microplastics bioaccumulate in marine life and water supplies. Incineration can emit toxic gases (e.g., HCl and dioxins from burning PVC).",
        "Biodegradable Polymers: Designed to decompose under composting conditions by microbial action into CO₂, H₂O, and biomass. Examples: Polylactic acid (PLA, derived from fermented cornstarch), Polyhydroxyalkanoates (PHA), and starch-based blends.",
        "Recycling Hierarchy: Reduce > Reuse > Recycle (Mechanical / Chemical depolymerization) > Energy recovery."
      ],
      rememberPoints: [
        "Recycling codes: #1 PET, #2 HDPE, #3 PVC, #4 LDPE, #5 PP, #6 PS, #7 Other.",
        "PVC produces toxic HCl gas upon incineration.",
        "PLA (Polylactic acid) is an eco-friendly biodegradable polyester from cornstarch.",
        "Microplastics accumulate in marine food webs."
      ],
      practiceQuestions: [
        {
          id: "q4.20_1",
          question: "A plastic container stamped with the resin identification code number 5 (triangle of chasing arrows) is made of:",
          options: [
            "Polyethylene terephthalate (PET)",
            "Polyvinyl chloride (PVC)",
            "Polypropylene (PP)",
            "Polystyrene (PS)"
          ],
          correctAnswer: 2,
          explanation: "Resin code 5 identifies Polypropylene (PP), widely used for hot-fill food tubs, bottle caps, and straws."
        },
        {
          id: "q4.20_2",
          question: "Which of the following polymers is biodegradable and manufactured from renewable agricultural resources such as fermented cornstarch?",
          options: [
            "Polylactic acid (PLA)",
            "Polytetrafluoroethylene (PTFE)",
            "Bakelite",
            "Polystyrene (PS)"
          ],
          correctAnswer: 0,
          explanation: "Polylactic acid (PLA) is an aliphatic polyester produced from fermented plant starch; it is compostable and biodegrades into harmless lactic acid and CO₂."
        }
      ]
    }
  ]
};
