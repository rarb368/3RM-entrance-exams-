import { UnitNotes } from "./chemistryGrade12Unit1";

export const chemistryGrade12Unit3Notes: UnitNotes = {
  subject: "Chemistry",
  grade: 12,
  unitNumber: 3,
  unitTitle: "Industrial Chemistry",
  subtitle: "Chemical manufacturing, Haber process, Ostwald process, Contact process, fertilizers, glass, cement, sugar, and soap",
  topics: [
    {
      id: "3.01",
      topicNumber: "3.01",
      title: "Industrial Chemistry and Society",
      coreConcepts: [
        "Industrial chemistry applies physical and chemical processes to transform natural raw materials into products that benefit society.",
        "It contributes significantly to modern agriculture (fertilizers, pesticides), healthcare (pharmaceuticals), construction (cement, glass), and consumer goods.",
        "A major goal is optimizing reaction yields and reaction rates while minimizing energy consumption, production costs, and environmental impact.",
        "Sustainable industrial chemistry integrates green chemistry principles, waste reduction, and effluent treatment into plant design."
      ],
      rememberPoints: [
        "Industrial chemistry bridges laboratory science and large-scale manufacturing.",
        "Key criteria: economic feasibility, high yield, optimal operating conditions, and environmental safety."
      ],
      practiceQuestions: [
        {
          id: "q3.01_1",
          question: "The primary objective of industrial chemistry compared to laboratory bench chemistry is to:",
          options: [
            "Produce substances only in small, gram-scale quantities",
            "Economically convert raw materials into useful commercial products on a large scale",
            "Use only endothermic reactions",
            "Eliminate all chemical catalysts"
          ],
          correctAnswer: 1,
          explanation: "Industrial chemistry focuses on large-scale, cost-effective transformation of natural raw materials into commercial products while optimizing reaction yield, rate, and safety."
        },
        {
          id: "q3.01_2",
          question: "Which of the following is an example of an industrial chemical sector that directly supports food security?",
          options: [
            "Ceramics manufacturing",
            "Fertilizer and agrochemical production",
            "Glass etching",
            "Tanning of leather"
          ],
          correctAnswer: 1,
          explanation: "The synthesis of nitrogen, phosphorus, and potassium fertilizers directly improves agricultural crop yield and food security."
        }
      ]
    },
    {
      id: "3.02",
      topicNumber: "3.02",
      title: "Natural Resources as Raw Materials",
      coreConcepts: [
        "Raw materials are starting substances obtained directly from nature: the atmosphere, lithosphere (crust), hydrosphere (oceans, rivers), and biosphere (plants, animals).",
        "Atmosphere provides N₂ (nitrogen) and O₂ (oxygen) via fractional distillation of liquid air.",
        "Hydrosphere provides water (H₂O), brine (aqueous NaCl), and dissolved minerals (magnesium, bromine).",
        "Lithosphere supplies ores, minerals (limestone CaCO₃, rock phosphate, bauxite), sulfur, coal, and petroleum.",
        "Biosphere supplies renewable organics such as cellulose, sugarcane, vegetable oils, animal fats, and natural rubber."
      ],
      rememberPoints: [
        "Air → N₂ (Haber), O₂.",
        "Sea / Brine → NaCl (Chlor-alkali, Solvay).",
        "Crust → CaCO₃ (limestone for cement/glass), sulfur, mineral ores.",
        "Biosphere → sucrose, triglycerides (soap), biomass."
      ],
      practiceQuestions: [
        {
          id: "q3.02_1",
          question: "Which sphere of the Earth is the direct source of nitrogen gas (N₂) used in ammonia synthesis?",
          options: [
            "Hydrosphere",
            "Atmosphere",
            "Lithosphere",
            "Biosphere"
          ],
          correctAnswer: 1,
          explanation: "Nitrogen gas makes up approximately 78% of the Earth's atmosphere by volume and is isolated by fractional distillation of liquid air."
        },
        {
          id: "q3.02_2",
          question: "Brine, a concentrated solution of NaCl used in the chlor-alkali and Solvay processes, is obtained primarily from the:",
          options: [
            "Stratosphere",
            "Hydrosphere and salt deposits",
            "Troposphere",
            "Biosphere"
          ],
          correctAnswer: 1,
          explanation: "Brine is sourced from seawater (hydrosphere) and underground rock-salt deposits formed by ancient evaporated oceans."
        }
      ]
    },
    {
      id: "3.03",
      topicNumber: "3.03",
      title: "Industry and Industrial Processes (Unit Operations vs. Unit Processes)",
      coreConcepts: [
        "A chemical manufacturing plant combines unit operations and unit processes.",
        "Unit Operations are physical treatments where no chemical change occurs: filtration, distillation, crushing, grinding, drying, evaporation, and sedimentation.",
        "Unit Processes are chemical transformations where reaction occurs and chemical bonds are broken and formed: oxidation, hydrogenation, esterification, saponification, halogenation, and neutralization.",
        "Batch processes produce limited quantities per run (useful for pharmaceuticals and fine chemicals), whereas continuous processes run uninterrupted 24/7 for high-volume bulk commodities (ammonia, sulfuric acid, cement)."
      ],
      rememberPoints: [
        "Unit Operation = Physical change only (crushing, distillation, filtering).",
        "Unit Process = Chemical reaction / bond change (oxidation, nitration, polymerisation).",
        "Bulk chemicals = Continuous flow; specialty chemicals = Batch."
      ],
      practiceQuestions: [
        {
          id: "q3.03_1",
          question: "Which of the following is classified as a unit operation rather than a unit process?",
          options: [
            "Saponification of triglycerides",
            "Fractional distillation of liquid air",
            "Catalytic oxidation of sulfur dioxide",
            "Neutralization of nitric acid with ammonia"
          ],
          correctAnswer: 1,
          explanation: "Fractional distillation is a physical separation based on boiling point differences (unit operation); the other three are chemical reactions (unit processes)."
        },
        {
          id: "q3.03_2",
          question: "Why do plants producing commodity chemicals like sulfuric acid and ammonia operate continuously rather than in batches?",
          options: [
            "Because catalysts stop working in continuous systems",
            "To achieve high output, uniform product quality, lower labor costs, and thermal energy integration",
            "Because batch reactions are too fast for sensors",
            "Because physical separation cannot be done continuously"
          ],
          correctAnswer: 1,
          explanation: "Continuous processes maximize thermal recovery, maintain steady-state conditions, lower labor and unit production costs, and yield high annual tonnage."
        }
      ]
    },
    {
      id: "3.04",
      topicNumber: "3.04",
      title: "Ammonia Manufacture — Haber Process",
      coreConcepts: [
        "Chemical reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + 92.4 kJ/mol (ΔH = −92.4 kJ/mol, exothermic).",
        "Raw materials: N₂ from fractional distillation of liquefied air; H₂ from steam reforming of natural gas (methane: CH₄ + H₂O → CO + 3H₂) or water electrolysis.",
        "Feed purification: Catalyst poisons like sulfur compounds and carbon oxides (CO, CO₂) must be removed before entering the converter.",
        "The reaction involves a mole reduction: 4 moles of gas react to form 2 moles of gas (Δn = −2)."
      ],
      rememberPoints: [
        "N₂ + 3H₂ ⇌ 2NH₃ (ΔH < 0, exothermic).",
        "Mole ratio: 1 volume N₂ : 3 volumes H₂.",
        "Poison removal: Sulfur and CO poison the finely divided iron catalyst."
      ],
      practiceQuestions: [
        {
          id: "q3.04_1",
          question: "In the Haber process, hydrogen gas (H₂) is most commonly generated commercially by:",
          options: [
            "Reacting sodium with cold water",
            "Steam reforming of natural gas (methane)",
            "Thermal decomposition of limestone",
            "Combustion of pure charcoal"
          ],
          correctAnswer: 1,
          explanation: "Methane reacts with steam at 700–1000 °C over a nickel catalyst: CH₄ + H₂O → CO + 3H₂, followed by the water-gas shift reaction to produce H₂."
        },
        {
          id: "q3.04_2",
          question: "Why must trace carbon monoxide (CO) be strictly removed from the Haber feed gas mixture?",
          options: [
            "CO oxidizes ammonia back into nitrogen gas",
            "CO permanently poisons the iron catalyst by binding to its active sites",
            "CO makes ammonia explosive at room temperature",
            "CO shifts the equilibrium completely to the left"
          ],
          correctAnswer: 1,
          explanation: "Carbon monoxide chemically binds to the active metallic iron catalyst, deactivating ('poisoning') its catalytic surface."
        }
      ]
    },
    {
      id: "3.05",
      topicNumber: "3.05",
      title: "Ammonia: Equilibrium, Compromise Conditions and Uses",
      coreConcepts: [
        "Le Chatelier's analysis: Since the forward reaction is exothermic, lower temperatures favor higher equilibrium yield of NH₃, but drastically slow the reaction rate. A compromise temperature of 450–500 °C is used.",
        "High pressure shifts equilibrium toward fewer gas moles (from 4 moles to 2 moles), favoring NH₃ formation and increasing the reaction rate. A compromise pressure of 150–250 atm (15–25 MPa) is used due to equipment and safety costs.",
        "Catalyst: Finely divided Iron (Fe) enriched with promoter oxides (Al₂O₃, K₂O) speeds up both forward and reverse rates without altering the equilibrium position.",
        "Unreacted N₂ and H₂ (~85%) are cooled, ammonia is liquefied (b.p. −33.3 °C) and tapped off, and remaining gases are recycled back to achieve ~98% overall conversion.",
        "Uses: Fertilizers (urea, ammonium nitrate, ammonium sulfate), manufacture of nitric acid, explosives, refrigerants, and nylon synthesis."
      ],
      rememberPoints: [
        "Optimal compromise: T ≈ 450 °C, P ≈ 200 atm, Fe catalyst + Al₂O₃/K₂O.",
        "Yield at single pass: ~15%; recycling achieves >95% efficiency.",
        "Ammonia is readily liquefied by cooling under pressure."
      ],
      practiceQuestions: [
        {
          id: "q3.05_1",
          question: "Why is a temperature of ~450 °C chosen for the Haber process instead of room temperature (25 °C)?",
          options: [
            "At room temperature, the equilibrium yield of ammonia is zero",
            "At room temperature, the reaction rate is negligibly slow despite a thermodynamically favorable yield",
            "The iron catalyst only decomposes at high temperatures",
            "Ammonia decomposes spontaneously at 25 °C"
          ],
          correctAnswer: 1,
          explanation: "Thermodynamics favors lower temperatures, but the activation energy is high (N≡N bond energy = 945 kJ/mol); 450 °C provides an acceptable reaction rate."
        },
        {
          id: "q3.05_2",
          question: "How does the addition of Al₂O₃ and K₂O assist the iron catalyst in the Haber converter?",
          options: [
            "They lower the boiling point of ammonia",
            "They act as promoters to maintain porous iron surface area and enhance catalytic activity",
            "They supply oxygen atoms to oxidize unreacted hydrogen",
            "They eliminate the need for high pressure"
          ],
          correctAnswer: 1,
          explanation: "Al₂O₃ and K₂O are chemical promoters that prevent sintering of the iron particles and enhance electron density on the active sites."
        }
      ]
    },
    {
      id: "3.06",
      topicNumber: "3.06",
      title: "Nitric Acid Manufacture (Ostwald Process)",
      coreConcepts: [
        "The Ostwald process converts ammonia into nitric acid in three sequential stages:",
        "Stage 1 — Catalytic Oxidation of Ammonia: 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g) over a platinum-rhodium (Pt-Rh) gauze catalyst at 850–900 °C. The reaction is extremely fast (~0.001 s) and strongly exothermic.",
        "Stage 2 — Oxidation of Nitric Oxide: 2NO(g) + O₂(g) → 2NO₂(g) (brown gas, favored by lower temperatures).",
        "Stage 3 — Absorption of NO₂ in Water: 3NO₂(g) + H₂O(l) → 2HNO₃(aq) + NO(g). The released NO is recycled back to Stage 2.",
        "Pure concentrated nitric acid is a colorless fuming liquid, but often appears yellow-brown due to dissolved dissolved NO₂ from photochemical decomposition."
      ],
      rememberPoints: [
        "Stage 1: Pt/Rh catalyst, 900 °C → NO.",
        "Stage 2: Cool → NO₂.",
        "Stage 3: Absorber with H₂O → HNO₃ + recycled NO.",
        "Yellow-brown tinge in HNO₃ bottle = dissolved NO₂ impurity."
      ],
      practiceQuestions: [
        {
          id: "q3.06_1",
          question: "Which catalyst is employed in Stage 1 of the Ostwald process for oxidizing ammonia to nitric oxide?",
          options: [
            "Vanadium pentoxide (V₂O₅)",
            "Platinum-rhodium (Pt-Rh) wire gauze",
            "Finely divided nickel (Ni)",
            "Silica gel"
          ],
          correctAnswer: 1,
          explanation: "Platinum alloyed with rhodium (Pt-Rh) wire gauze at 850–900 °C is the catalyst used in the ammonia burner of the Ostwald process."
        },
        {
          id: "q3.06_2",
          question: "Why does concentrated commercial nitric acid frequently acquire a yellowish-brown tint over time?",
          options: [
            "Due to oxidation of container glass",
            "Due to photochemical decomposition producing dissolved nitrogen dioxide (NO₂)",
            "Due to contamination by iron from stainless steel pipes",
            "Due to conversion into ammonium nitrate"
          ],
          correctAnswer: 1,
          explanation: "4HNO₃ → 4NO₂ + O₂ + 2H₂O in the presence of light or heat; the dissolved NO₂ imparts a characteristic yellow-brown coloration."
        }
      ]
    },
    {
      id: "3.07",
      topicNumber: "3.07",
      title: "Nitrogen-Based Fertilizers",
      coreConcepts: [
        "Plants require three primary macronutrients: Nitrogen (N for foliage & vegetative growth), Phosphorus (P for roots & flowering), and Potassium (K for enzyme activity & disease resistance) — labeled as NPK.",
        "Ammonium Nitrate (NH₄NO₃): Made by acid-base neutralization: NH₃ + HNO₃ → NH₄NO₃. Contains ~35% N (both fast-acting NO₃⁻ and slower-releasing NH₄⁺).",
        "Urea (CO(NH₂)₂): Highest nitrogen content among solid fertilizers (~46% N). Synthesized from ammonia and carbon dioxide: 2NH₃ + CO₂ ⇌ NH₂COONH₄ ⇌ CO(NH₂)₂ + H₂O under 150–200 atm and 180–200 °C.",
        "Ammonium Sulfate ((NH₄)₂SO₄): 2NH₃ + H₂SO₄ → (NH₄)₂SO₄. Contains ~21% N plus 24% sulfur, ideal for alkaline or sulfur-deficient soils.",
        "Fertilizer Grade (NPK ratio): Expressed as %N - %P₂O₅ - %K₂O (e.g., 20-10-10)."
      ],
      rememberPoints: [
        "Urea CO(NH₂)₂ = ~46% N (highest among solid fertilizers).",
        "Ammonium nitrate NH₄NO₃ = ~35% N (hygroscopic & explosive hazard).",
        "Ammonium sulfate (NH₄)₂SO₄ = provides both N and S, acidifies alkaline soils."
      ],
      practiceQuestions: [
        {
          id: "q3.07_1",
          question: "Which solid chemical fertilizer possesses the highest percentage of nitrogen by mass?",
          options: [
            "Ammonium nitrate (NH₄NO₃)",
            "Ammonium sulfate ((NH₄)₂SO₄)",
            "Urea (CO(NH₂)₂)",
            "Potassium nitrate (KNO₃)"
          ],
          correctAnswer: 2,
          explanation: "Urea (MW ≈ 60 g/mol, 2 N atoms = 28 g) contains (28/60) × 100% ≈ 46.7% nitrogen by mass."
        },
        {
          id: "q3.07_2",
          question: "A commercial fertilizer bag is labeled with the rating 15-15-15. This indicates:",
          options: [
            "15% N, 15% P₂O₅, and 15% K₂O by mass",
            "15 grams of each ingredient per 1000 kg",
            "15% moisture, 15% sand, 15% active salt",
            "Total NPK content equals 15%"
          ],
          correctAnswer: 0,
          explanation: "The standard NPK rating reflects the percent by weight of elemental nitrogen (N), phosphorus pentoxide (P₂O₅ equivalent), and potassium oxide (K₂O equivalent)."
        }
      ]
    },
    {
      id: "3.08",
      topicNumber: "3.08",
      title: "Sulfuric Acid Manufacture (Contact Process)",
      coreConcepts: [
        "The Contact process manufactures H₂SO₄ through four key steps:",
        "Step 1 — Production of SO₂: Burning elemental sulfur or roasting sulfide ores (pyrite): S(s) + O₂(g) → SO₂(g) or 4FeS₂(s) + 11O₂(g) → 2Fe₂O₃(s) + 8SO₂(g).",
        "Step 2 — Catalytic Oxidation of SO₂: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (ΔH = −196 kJ/mol, exothermic). Operated at 400–450 °C, 1–2 atm, over a Vanadium pentoxide (V₂O₅) catalyst.",
        "Step 3 — Absorption of SO₃ into H₂SO₄: SO₃ is NOT absorbed directly into pure water because the reaction is violently exothermic, producing a dense mist of fine acid droplets that escapes into the air. Instead, SO₃ is absorbed into 98% concentrated H₂SO₄ to form Oleum (pyrosulfuric acid): SO₃ + H₂SO₄ → H₂S₂O₇.",
        "Step 4 — Dilution of Oleum: Oleum is safely mixed with calculated water to yield 98% pure H₂SO₄: H₂S₂O₇ + H₂O → 2H₂SO₄."
      ],
      rememberPoints: [
        "Catalyst: V₂O₅ (Vanadium pentoxide) at 450 °C.",
        "Never add SO₃ directly to water → produces unmanageable sulfuric acid mist.",
        "SO₃ + H₂SO₄ → H₂S₂O₇ (Oleum); H₂S₂O₇ + H₂O → 2H₂SO₄."
      ],
      practiceQuestions: [
        {
          id: "q3.08_1",
          question: "Why is sulfur trioxide (SO₃) dissolved in concentrated H₂SO₄ instead of pure water in the Contact process?",
          options: [
            "SO₃ is completely insoluble in pure water",
            "Direct absorption in water creates an uncontrollable exothermic acid mist that cannot be condensed",
            "Water oxidizes SO₃ back into sulfur dioxide",
            "V₂O₅ only dissolves in oleum"
          ],
          correctAnswer: 1,
          explanation: "Direct reaction with water is so violently exothermic that sulfuric acid vaporizes into an aerosol fog of droplets that bypasses absorption towers."
        },
        {
          id: "q3.08_2",
          question: "The chemical formula of oleum (pyrosulfuric acid) produced in the Contact process is:",
          options: [
            "H₂SO₃",
            "H₂S₂O₇",
            "H₂S₂O₈",
            "H₂SO₅"
          ],
          correctAnswer: 1,
          explanation: "When SO₃ is absorbed into concentrated H₂SO₄: SO₃ + H₂SO₄ → H₂S₂O₇ (pyrosulfuric acid or fuming sulfuric acid)."
        }
      ]
    },
    {
      id: "3.09",
      topicNumber: "3.09",
      title: "Sulfuric Acid: Properties and Uses",
      coreConcepts: [
        "Physical properties: Heavy, oily, dense liquid (density 1.84 g/cm³), colorless, odorless, highly viscous due to extensive intermolecular hydrogen bonding.",
        "Strong Diprotic Acid: Ionizes in two steps: H₂SO₄ → H⁺ + HSO₄⁻ (complete, Ka₁ large) and HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (Ka₂ = 1.2 × 10⁻²).",
        "Powerful Dehydrating Agent: Has a tremendous affinity for water, stripping hydrogen and oxygen in a 2:1 ratio from organic compounds: C₁₂H₂₂O₁₁ (sucrose) + conc. H₂SO₄ → 12C (black sponge-like charcoal) + 11H₂O.",
        "Oxidizing Agent: Hot concentrated H₂SO₄ oxidizes metals and nonmetals: Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O; C + 2H₂SO₄ → CO₂ + 2SO₂ + 2H₂O.",
        "Safe Dilution Rule: ALWAYS add ACID to WATER slowly down the side of the glass container with constant stirring ('Do as you oughta, add acid to water'). Never add water to concentrated acid due to localized boiling and acid splattering.",
        "Uses: Known as the 'King of Chemicals' because annual national consumption reflects industrial strength. Used in fertilizer production (superphosphates, ammonium sulfate), petroleum refining, car batteries (lead-acid cells), detergents, and steel pickling."
      ],
      rememberPoints: [
        "Dehydrating agent = removes H₂O elements from compounds (sugar → black carbon).",
        "Safe dilution: Acid into Water (never Water into Acid).",
        "Benchmark of industrial development: H₂SO₄ consumption."
      ],
      practiceQuestions: [
        {
          id: "q3.09_1",
          question: "When concentrated sulfuric acid is poured onto table sugar (sucrose), a black steaming column of carbon rises. This demonstrates which property of H₂SO₄?",
          options: [
            "Volatile acid property",
            "Dehydrating agent property",
            "Reducing agent property",
            "Precipitation property"
          ],
          correctAnswer: 1,
          explanation: "Concentrated H₂SO₄ removes H and O as water molecules from the carbohydrate: C₁₂H₂₂O₁₁ → 12C(s) + 11H₂O(g), demonstrating powerful dehydration."
        },
        {
          id: "q3.09_2",
          question: "When preparing dilute sulfuric acid in a chemistry laboratory, the correct and safe procedure is to:",
          options: [
            "Pour water rapidly into the acid while shaking the container",
            "Slowly add the concentrated acid to water with continuous stirring",
            "Mix equal volumes of both liquids simultaneously in a sealed flask",
            "Boil the acid before pouring cold water"
          ],
          correctAnswer: 1,
          explanation: "The dissolution is intensely exothermic; adding acid to high-heat-capacity water dissipates heat safely, preventing localized boiling and violent acid splattering."
        }
      ]
    },
    {
      id: "3.10",
      topicNumber: "3.10",
      title: "Pesticides and Herbicides",
      coreConcepts: [
        "Pesticides are chemical substances used to prevent, destroy, repel, or mitigate pests. Subclasses: Insecticides (kill insects), Herbicides (kill unwanted weeds), Fungicides (kill fungi), and Rodenticides (kill rodents).",
        "Organochlorines (e.g., DDT): Extremely persistent, fat-soluble, undergo biomagnification in food chains; largely banned internationally.",
        "Organophosphates (e.g., Malathion, Parathion) and Carbamates: Inhibit acetylcholinesterase enzyme; more toxic acutely to mammals but degrade much faster in soil.",
        "Synthetic pyrethroids: Modeled on natural chrysanthemum pyrethrins; fast-acting knock-down effect, low mammalian toxicity.",
        "Environmental concerns: Bioaccumulation in adipose tissue, destruction of non-target pollinators (bees), runoff polluting aquatic life, and evolution of pesticide resistance."
      ],
      rememberPoints: [
        "Insecticides = insects; Herbicides = weeds; Fungicides = fungal mold.",
        "DDT = organochlorine, biomagnification in birds and apex predators.",
        "Organophosphates = nerve enzyme (cholinesterase) inhibitors, biodegradable."
      ],
      practiceQuestions: [
        {
          id: "q3.10_1",
          question: "Why was the broad-spectrum insecticide DDT banned in most countries worldwide?",
          options: [
            "It decomposes into toxic cyanide in sunlight",
            "It is highly persistent, fat-soluble, and biomagnifies up the food chain causing eggshell thinning in birds",
            "It promotes weed growth in crop fields",
            "It turns agricultural soil alkaline"
          ],
          correctAnswer: 1,
          explanation: "DDT is an organochlorine with high lipophilicity and chemical stability; it accumulates in fatty tissue and magnifies across trophic levels."
        },
        {
          id: "q3.10_2",
          question: "Herbicides are specifically designed to eliminate:",
          options: [
            "Pathogenic fungi",
            "Unwanted weeds and invasive plants competing with crops",
            "Rodents in food storage granaries",
            "Mosquito larvae in standing water"
          ],
          correctAnswer: 1,
          explanation: "Herbicides target plant metabolism (e.g., photosynthesis or plant hormone pathways) to eradicate unwanted vegetation and weeds."
        }
      ]
    },
    {
      id: "3.11",
      topicNumber: "3.11",
      title: "Sodium Carbonate (Solvay Process / Soda Ash)",
      coreConcepts: [
        "Sodium carbonate (Na₂CO₃), known commercially as soda ash, and its decahydrate (Na₂CO₃·10H₂O) as washing soda.",
        "Raw materials for the Solvay Process: Brine (concentrated NaCl solution), limestone (CaCO₃), and ammonia (NH₃) as a catalyst/reagent.",
        "Step 1: Limestone is thermally decomposed in a kiln: CaCO₃(s) → CaO(s) + CO₂(g).",
        "Step 2: Brine saturated with ammonia reacts with CO₂ in the Solvay carbonating tower: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃(s)↓ + NH₄Cl(aq).",
        "Sodium bicarbonate precipitates out because it has relatively low solubility in cold ammoniacal brine.",
        "Step 3: Calcination: NaHCO₃ is filtered and heated: 2NaHCO₃(s) → Na₂CO₃(s) + CO₂(g) + H₂O(g). The CO₂ is recycled back to the carbonator.",
        "Ammonia recovery: CaO from kiln is slaked with water: CaO + H₂O → Ca(OH)₂. Then Ca(OH)₂ is reacted with NH₄Cl to regenerate ammonia: 2NH₄Cl + Ca(OH)₂ → 2NH₃↑ + CaCl₂ + 2H₂O. Only CaCl₂ is a waste byproduct.",
        "Uses: Glass manufacturing (acts as a flux to lower silica melting point), detergents, paper manufacturing, water softening (precipitating Ca²⁺ and Mg²⁺)."
      ],
      rememberPoints: [
        "Key precipitate: NaHCO₃ (sodium bicarbonate) precipitates first.",
        "Calcination: 2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O.",
        "Ammonia is fully recycled; main waste byproduct is CaCl₂."
      ],
      practiceQuestions: [
        {
          id: "q3.11_1",
          question: "In the Solvay process, which intermediate compound precipitates from the carbonating tower due to its low solubility?",
          options: [
            "Calcium chloride (CaCl₂)",
            "Ammonium chloride (NH₄Cl)",
            "Sodium bicarbonate (NaHCO₃)",
            "Sodium hydroxide (NaOH)"
          ],
          correctAnswer: 2,
          explanation: "NaHCO₃ has lower solubility in cold ammoniacal brine than NH₄Cl, NaCl, or NH₄HCO₃, allowing it to precipitate out as crystals."
        },
        {
          id: "q3.11_2",
          question: "The primary major chemical byproduct discharged from the Solvay recovery tower is:",
          options: [
            "Ammonium nitrate",
            "Calcium chloride (CaCl₂)",
            "Pure nitrogen gas",
            "Sulfur dioxide"
          ],
          correctAnswer: 1,
          explanation: "Reaction: 2NH₄Cl + Ca(OH)₂ → 2NH₃ + CaCl₂ + 2H₂O. The ammonia is recycled, leaving calcium chloride as the principal byproduct."
        }
      ]
    },
    {
      id: "3.12",
      topicNumber: "3.12",
      title: "Sodium Hydroxide and Chlorine (Chlor-Alkali Process)",
      coreConcepts: [
        "The Chlor-Alkali industry electrolyzes concentrated aqueous sodium chloride (brine) to produce three vital commercial chemicals: Cl₂(g), H₂(g), and NaOH(aq).",
        "Overall Reaction: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) + H₂(g).",
        "Anode reaction (oxidation): 2Cl⁻(aq) → Cl₂(g) + 2e⁻.",
        "Cathode reaction (reduction of water): 2H₂O(l) + 2e⁻ → H₂(g) + 2OH⁻(aq).",
        "Cell technologies:",
        "1. Membrane Cell (Modern, eco-friendly): Uses a cation-exchange fluoropolymer membrane (e.g., Nafion) that allows only Na⁺ ions to pass from anode to cathode compartment while blocking Cl⁻ and OH⁻ ions. Produces high-purity (30–35%) NaOH with minimal energy consumption and zero toxic waste.",
        "2. Diaphragm Cell: Uses an asbestos diaphragm; product contains residual chloride.",
        "3. Mercury Cell: Uses liquid mercury cathode (forming Na-amalgam); phased out due to toxic mercury pollution.",
        "Uses of products: NaOH for soap, paper pulp, bauxite refining; Cl₂ for water purification, PVC, bleaches; H₂ for ammonia, hydrogenation of oils, fuel cells."
      ],
      rememberPoints: [
        "Anode = Cl₂ gas; Cathode = H₂ gas; Catholyte solution = NaOH.",
        "Membrane cell is cleanest and most energy efficient (cation-permeable Nafion).",
        "Products must be separated: Cl₂ reacts with NaOH if mixed."
      ],
      practiceQuestions: [
        {
          id: "q3.12_1",
          question: "During the electrolysis of concentrated brine in a membrane cell, which chemical species is discharged at the cathode?",
          options: [
            "Chlorine gas (Cl₂)",
            "Sodium metal (Na)",
            "Hydrogen gas (H₂)",
            "Oxygen gas (O₂)"
          ],
          correctAnswer: 2,
          explanation: "Water is more easily reduced than Na⁺ ions (E° for H₂O = −0.83 V vs Na⁺ = −2.71 V), evolving H₂ gas and leaving OH⁻ ions."
        },
        {
          id: "q3.12_2",
          question: "What is the critical function of the fluoropolymer membrane in the modern chlor-alkali membrane cell?",
          options: [
            "To permit only Cl⁻ anions to migrate to the cathode",
            "To selectively allow Na⁺ cations to pass to the cathode while preventing Cl⁻ and OH⁻ mixing",
            "To cool down the hot electrolytic bath",
            "To absorb hydrogen gas as a fuel"
          ],
          correctAnswer: 1,
          explanation: "The cation-exchange membrane allows Na⁺ to migrate from anode to cathode to form pure NaOH, while keeping Cl₂ and OH⁻ apart to prevent NaOCl formation."
        }
      ]
    },
    {
      id: "3.13",
      topicNumber: "3.13",
      title: "Glass: Composition, Types and Properties",
      coreConcepts: [
        "Glass is an amorphous, transparent, non-crystalline supercooled liquid or solid.",
        "Basic raw materials: Silica sand (SiO₂ ~70–75%), Soda ash (Na₂CO₃ ~15%), and Limestone (CaCO₃ ~10%).",
        "Role of ingredients: SiO₂ provides the structural network former; Na₂CO₃ acts as a flux to lower the melting temperature from ~1700 °C to ~1400 °C; CaCO₃ acts as a stabilizer to prevent the glass from dissolving in water (forming water-glass).",
        "Common glass types:",
        "1. Soda-lime glass: Ordinary container and window glass (inexpensive, easy to melt, susceptible to thermal shock).",
        "2. Borosilicate glass (Pyrex): Contains boron oxide (B₂O₃); extremely low coefficient of thermal expansion, resistant to thermal shock, ideal for lab glassware and bakeware.",
        "3. Lead crystal glass: Contains PbO; high refractive index and density, sparkles, used for decorative crystalware and radiation shielding.",
        "4. Colored glasses: Formed by adding transition metal oxides: CoO = deep blue; FeO/Fe₂O₃ = green/amber; Cr₂O₃ = emerald green; Cu₂O / Au = ruby red.",
        "Annealing: Controlled slow cooling of molten glass to relieve internal stresses and prevent spontaneous shattering."
      ],
      rememberPoints: [
        "Raw materials: Sand (SiO₂), Soda ash (Na₂CO₃), Limestone (CaCO₃).",
        "Pyrex / Borosilicate: Contains B₂O₃ → thermal shock resistant.",
        "Annealing: Slow cooling to relieve internal thermal stress."
      ],
      practiceQuestions: [
        {
          id: "q3.13_1",
          question: "Laboratory glassware (such as Pyrex beakers) resists cracking when heated because it contains:",
          options: [
            "Lead oxide (PbO) providing heavy weight",
            "Boron trioxide (B₂O₃) imparting a very low coefficient of thermal expansion",
            "Excess sodium carbonate to keep it soft",
            "Calcium chloride acting as a stabilizer"
          ],
          correctAnswer: 1,
          explanation: "Borosilicate glass contains ~13% B₂O₃, which drastically lowers the thermal expansion coefficient, preventing breakage upon rapid temperature changes."
        },
        {
          id: "q3.13_2",
          question: "What is the purpose of the annealing stage in industrial glass manufacturing?",
          options: [
            "To etch designs onto the transparent surface",
            "To slowly cool the glass under controlled conditions to eliminate internal structural stresses",
            "To melt unreacted quartz crystals",
            "To remove all sodium ions from the silicate matrix"
          ],
          correctAnswer: 1,
          explanation: "Annealing in a temperature-controlled lehr allows the glass structure to relax evenly, preventing internal strains that cause spontaneous fracture."
        }
      ]
    },
    {
      id: "3.14",
      topicNumber: "3.14",
      title: "Ceramics: Raw Materials, Shaping and Firing",
      coreConcepts: [
        "Ceramics are inorganic, non-metallic materials formed by shaping clay and other mineral powders and then hardening them through high-temperature firing (sintering).",
        "Primary raw materials: Clay / Kaolinite (Al₂O₃·2SiO₂·2H₂O) for plasticity when wet; Quartz/silica (SiO₂) as non-shrinking filler; Feldspar (K₂O·Al₂O₃·6SiO₂) as a flux that melts and binds particles during firing.",
        "Manufacturing steps: 1. Grinding & mixing raw materials; 2. Shaping / molding wet paste; 3. Drying to remove free capillary water; 4. Firing / Vitrification in kilns (800–1400 °C) where chemical water is lost and partial glass formation glues particles; 5. Glazing (applying a mineral coating) followed by second firing for a waterproof, glossy finish.",
        "Properties: High melting points, exceptional hardness, chemical inertness, high compressive strength, electrical and thermal insulation, but brittle in tension."
      ],
      rememberPoints: [
        "Kaolin = Al₂O₃·2SiO₂·2H₂O (gives plasticity with water).",
        "Quartz = structural skeleton; Feldspar = fluxing binder.",
        "Firing drives off chemical water and causes sintering/vitrification."
      ],
      practiceQuestions: [
        {
          id: "q3.14_1",
          question: "Which mineral component provides the required plasticity when water is added to ceramic raw mixtures?",
          options: [
            "Feldspar",
            "Quartz sand",
            "Kaolinite clay",
            "Hematite"
          ],
          correctAnswer: 2,
          explanation: "Kaolinite (hydrated aluminum silicate) forms microscopic flat platelets that slide over each other in water, imparting plastic formability."
        },
        {
          id: "q3.14_2",
          question: "A characteristic mechanical property of ceramic materials is:",
          options: [
            "High tensile ductility and ease of bending",
            "High compressive strength coupled with brittle fracture under tension",
            "Low melting point and high electrical conductivity",
            "Rapid dissolution in organic solvents"
          ],
          correctAnswer: 1,
          explanation: "Strong ionic and covalent bonding gives ceramics immense compressive strength and high melting points, but absence of slip planes makes them brittle."
        }
      ]
    },
    {
      id: "3.15",
      topicNumber: "3.15",
      title: "Cement: Manufacture, Composition and Setting",
      coreConcepts: [
        "Portland cement is a hydraulic binder that sets and hardens by chemical reaction with water (hydration).",
        "Raw materials: Calcareous materials (limestone CaCO₃ providing CaO) and Argillaceous materials (clay/shale providing SiO₂, Al₂O₃, Fe₂O₃).",
        "Kiln burning: Slurry or dry meal passes through a rotary kiln heated to ~1450 °C. Limestone decarbonates: CaCO₃ → CaO + CO₂. Minerals fuse to form clinker nodules.",
        "Major clinker phases: Tricalcium silicate (3CaO·SiO₂ or C₃S, responsible for early strength), Dicalcium silicate (2CaO·SiO₂ or C₂S, gives long-term strength), Tricalcium aluminate (3CaO·Al₂O₃ or C₃A, fastest initial setting), and Tetracalcium aluminoferrite (4CaO·Al₂O₃·Fe₂O₃ or C₄AF).",
        "Gypsum Addition: Clinker is ground with 2–3% Gypsum (CaSO₄·2H₂O). Gypsum slows down the rapid flash-setting of C₃A by forming protective ettringite crystals, giving workers sufficient time to mix and pour concrete.",
        "Hardening vs Drying: Cement does NOT harden by drying out (loss of water); it hardens through hydration reactions forming calcium silicate hydrate (C-S-H) gel needle networks."
      ],
      rememberPoints: [
        "Raw: Limestone (CaO source) + Clay (SiO₂, Al₂O₃ source).",
        "Kiln at ~1450 °C produces clinker.",
        "Gypsum (CaSO₄·2H₂O) is added to RETARD flash setting.",
        "Hardening is exothermic hydration, requiring wet curing."
      ],
      practiceQuestions: [
        {
          id: "q3.15_1",
          question: "Why is 2–3% gypsum (CaSO₄·2H₂O) added to clinker during the final grinding of Portland cement?",
          options: [
            "To speed up the drying time of wet concrete",
            "To prevent flash setting by retarding the hydration of tricalcium aluminate (C₃A)",
            "To reduce the density of the final concrete block",
            "To color the cement powder dark grey"
          ],
          correctAnswer: 1,
          explanation: "Gypsum reacts with C₃A to form insoluble ettringite needles around grains, preventing rapid flash-setting and allowing working time."
        },
        {
          id: "q3.15_2",
          question: "The chemical process through which poured cement sets and gains permanent mechanical strength is:",
          options: [
            "Evaporative drying of capillary water",
            "Exothermic hydration forming interlocking crystalline silicate hydrate gel",
            "Carbonation by atmospheric oxygen alone",
            "Thermal sintering at room temperature"
          ],
          correctAnswer: 1,
          explanation: "Cement setting is a chemical hydration reaction where water binds chemically into calcium silicate hydrate (C-S-H) gels."
        }
      ]
    },
    {
      id: "3.16",
      topicNumber: "3.16",
      title: "Sugar Manufacture (Cane Sugar Processing)",
      coreConcepts: [
        "Sucrose (C₁₂H₂₂O₁₁, a non-reducing disaccharide composed of α-D-glucose and β-D-fructose) is extracted from sugarcane (Saccharum officinarum).",
        "Steps in sugar manufacturing:",
        "1. Crushing and Extraction: Stems are shredded and pressed between heavy roller mills; water is sprayed to extract sucrose. The leftover fiber residue is Bagasse (used as boiler biofuel).",
        "2. Clarification (Defecation): Raw juice is acidic and turbid. Milk of lime (Ca(OH)₂) and SO₂ (sulfitation) or CO₂ (carbonatation) are added to neutralize organic acids, precipitate colloidal impurities, and bleach colored tannins.",
        "3. Evaporation: Clarified thin juice (~15% sucrose) is concentrated in multiple-effect vacuum evaporators into thick syrup (~65% sucrose).",
        "4. Crystallization: Syrup is seeded with microscopic sugar crystals in vacuum pans and boiled under reduced pressure to avoid caramelization.",
        "5. Centrifugation: High-speed centrifugal baskets spin away liquid Molasses (mother liquor) from solid raw sugar crystals.",
        "Molasses byproducts: Fermented with yeast to produce industrial ethanol, spirits, animal feed, and citric acid."
      ],
      rememberPoints: [
        "Sucrose = Glucose + Fructose (disaccharide C₁₂H₂₂O₁₁).",
        "Bagasse = fibrous stalk residue used as thermal factory fuel.",
        "Lime (Ca(OH)₂) + SO₂ = clarification and pH adjustment.",
        "Molasses = residual dark syrup fermented into ethanol."
      ],
      practiceQuestions: [
        {
          id: "q3.16_1",
          question: "What is the primary industrial application of bagasse, the fibrous byproduct remaining after crushing sugarcane?",
          options: [
            "It is roasted to manufacture Portland cement",
            "It is combusted in factory boilers to generate steam and electric power",
            "It is dissolved in brine to make caustic soda",
            "It is added as a flux in glass furnaces"
          ],
          correctAnswer: 1,
          explanation: "Bagasse is rich in cellulose and is burned on-site in cogeneration boilers to make sugar processing plants energy self-sufficient."
        },
        {
          id: "q3.16_2",
          question: "Why is milk of lime (Ca(OH)₂) added to raw extracted sugarcane juice during clarification?",
          options: [
            "To hydrolyze sucrose into monosaccharides",
            "To neutralize organic acids, prevent inversion of sucrose, and precipitate insoluble calcium salts of impurities",
            "To precipitate sucrose crystals immediately",
            "To dissolve the remaining cellulose fiber"
          ],
          correctAnswer: 1,
          explanation: "Lime raises the acidic pH (~5.0 to 7.0–7.5), preventing acid hydrolysis ('inversion') of sucrose while coagulating proteins and organic acids."
        }
      ]
    },
    {
      id: "3.17",
      topicNumber: "3.17",
      title: "Paper and Pulp Manufacturing",
      coreConcepts: [
        "Paper is a felted sheet of plant cellulose fibers.",
        "Wood contains ~40–50% cellulose (desired polymer), ~25–35% hemicellulose, and ~20–30% lignin (a complex aromatic polymer that glues fibers together and turns paper brown/yellow).",
        "Pulping Methods:",
        "1. Mechanical Pulping: Groundwood process; gives high pulp yield (~90–95%) but retains lignin, causing low paper strength and rapid yellowing (used for newsprint).",
        "2. Chemical Pulping — Kraft Process (Sulfate process): Wood chips are cooked in 'white liquor' containing NaOH and Na₂S at 170 °C under pressure. Lignin is dissolved into 'black liquor' without breaking cellulose chains. Produces the strongest paper (Kraft = 'strength' in German).",
        "3. Sulfite Process: Uses sulfurous acid and bisulfite salts.",
        "Bleaching: Kraft pulp is dark brown; it is bleached using chlorine dioxide (ClO₂), hydrogen peroxide (H₂O₂), or ozone (O₃) to degrade residual lignin without releasing toxic chlorinated dioxins (ECF/TCF bleaching).",
        "Paper machine (Fourdrinier): Dilute fiber suspension (99% water) is spread onto a moving wire mesh, dewatered, pressed, dried on heated cylinders, and calendered."
      ],
      rememberPoints: [
        "Cellulose = desired structural fiber; Lignin = cement that causes yellowing.",
        "Kraft process: NaOH + Na₂S digests lignin to leave intact strong cellulose.",
        "Modern bleaching uses ClO₂ or H₂O₂ to avoid toxic dioxin formation."
      ],
      practiceQuestions: [
        {
          id: "q3.17_1",
          question: "The chemical reagent mixture known as 'white liquor' used to dissolve lignin in the Kraft pulping process contains:",
          options: [
            "Sodium carbonate and calcium sulfate",
            "Sodium hydroxide (NaOH) and sodium sulfide (Na₂S)",
            "Sulfuric acid and hydrogen peroxide",
            "Ammonium nitrate and nitric acid"
          ],
          correctAnswer: 1,
          explanation: "The Kraft process cooks wood chips in an aqueous alkaline solution of sodium hydroxide (NaOH) and sodium sulfide (Na₂S) to break ether bonds in lignin."
        },
        {
          id: "q3.17_2",
          question: "Why do old newspapers turn yellow and brittle over time when exposed to air and sunlight?",
          options: [
            "Due to residual water from the Fourdrinier wire",
            "Because mechanical pulp retains high amounts of lignin, which photo-oxidizes",
            "Because newsprint contains excess gypsum and lime",
            "Due to the crystallization of sucrose residues"
          ],
          correctAnswer: 1,
          explanation: "Mechanical pulp contains intact aromatic lignin; exposure to ultraviolet light and oxygen oxidizes lignin chromophores into yellow/brown quinonoid compounds."
        }
      ]
    },
    {
      id: "3.18",
      topicNumber: "3.18",
      title: "Leather Tanning and Food Preservation",
      coreConcepts: [
        "Tanning converts perishable raw animal skins/hides into durable, non-rotting leather by cross-linking collagen protein fibers.",
        "Beamhouse operations: Curing (salting), soaking, liming/unhairing (using Ca(OH)₂ and NaHS), deliming (with ammonium salts), and bating (enzymatic digestion of non-collagenous proteins).",
        "Tanning methods: 1. Chrome tanning (uses basic chromium(III) sulfate, Cr(OH)SO₄; fast, produces supple water-resistant blue-colored wet leather); 2. Vegetable tanning (uses plant polyphenols/tannins from bark; produces firm, heavy sole leather).",
        "Environmental hazard: Hexavalent chromium (Cr(VI)) is carcinogenic and toxic, whereas Cr(III) is used in tanning; proper effluent treatment is critical.",
        "Food Preservation: Prevents microbial spoilage and enzymatic breakdown.",
        "Methods: Salting (osmotic dehydration of bacterial cells), pickling/acidification (vinegar acetic acid lowers pH below microbial tolerance), smoking (formaldehyde and phenolic antimicrobial deposits), thermal pasteurization/canning, and chemical preservatives (sodium benzoate, potassium sorbate, sodium metabisulfite SO₂)."
      ],
      rememberPoints: [
        "Tanning stabilizes skin protein (collagen) against microbial decay.",
        "Chrome tanning uses Chromium(III) sulfate (produces 'wet blue').",
        "Preservation by salting/sugar works by high osmotic pressure dehydrating microbes.",
        "Sodium benzoate & sorbates inhibit fungal and bacterial enzymes."
      ],
      practiceQuestions: [
        {
          id: "q3.18_1",
          question: "The most widely used chemical tanning agent in modern leather production, yielding flexible 'wet blue' leather, is:",
          options: [
            "Sodium chloride brine",
            "Basic chromium(III) sulfate [Cr(OH)SO₄]",
            "Concentrated sulfuric acid",
            "Potassium dichromate (Cr(VI))"
          ],
          correctAnswer: 1,
          explanation: "Basic chromium(III) sulfate coordinates with carboxyl groups of aspartic and glutamic acid residues in collagen, cross-linking the polypeptide chains."
        },
        {
          id: "q3.18_2",
          question: "High concentrations of salt (NaCl) or sugar preserve food primarily by:",
          options: [
            "Freezing the water content inside bacterial cells",
            "Creating high osmotic pressure that draws water out of microbial cells by osmosis",
            "Acting as a strong reducing agent that removes oxygen",
            "Converting all fats into soap"
          ],
          correctAnswer: 1,
          explanation: "High extracellular solute concentration causes hypertonic conditions; water exits microbial cells by osmosis (plasmolysis), inhibiting growth and metabolism."
        }
      ]
    },
    {
      id: "3.19",
      topicNumber: "3.19",
      title: "Ethanol, Soaps and Detergents",
      coreConcepts: [
        "Ethanol (C₂H₅OH): Manufactured by 1. Fermentation of sugars (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ using yeast enzymes zymase at 25–35 °C; max ~12–15% alcohol before yeast dies; concentrated by fractional distillation to 95.6% azeotrope); 2. Catalytic hydration of ethene (C₂H₄ + H₂O → C₂H₅OH over phosphoric acid H₃PO₄ catalyst at 300 °C, 60–70 atm).",
        "Soaps: Sodium or potassium salts of long-chain fatty acids (e.g., sodium stearate, C₁₇H₃₅COONa).",
        "Saponification: Alkaline hydrolysis of triglycerides (fats/oils) with NaOH (yields hard bar soap) or KOH (yields soft/liquid soap): Triglyceride + 3NaOH → Glycerol + 3 Soap molecules.",
        "Salting out: Concentrated NaCl solution is added to precipitate solid soap from the aqueous glycerol mixture.",
        "Cleansing Action: Soap has an amphipathic structure — a non-polar hydrophobic hydrocarbon tail (dissolves in grease) and an ionic hydrophilic carboxylate head (−COO⁻Na⁺, dissolves in water). In water, soap molecules surround oil droplets, forming spherical aggregates called Micelles with heads pointing outward, emulsifying the grease.",
        "Hard Water limitation: Soap reacts with dissolved Ca²⁺ and Mg²⁺ to form an insoluble sticky precipitate (scum): 2C₁₇H₃₅COO⁻ + Ca²⁺ → (C₁₇H₃₅COO)₂Ca↓.",
        "Synthetic Detergents: Sodium alkyl sulfates or alkylbenzene sulfonates (e.g., sodium dodecylbenzenesulfonate). Contain a sulfonate group (−SO₃⁻Na⁺) instead of carboxylate. Do NOT form scum with Ca²⁺/Mg²⁺, lathering effectively in hard water."
      ],
      rememberPoints: [
        "Saponification: Fat/Oil + NaOH → Soap + Glycerol (byproduct).",
        "Salting out uses NaCl to precipitate soap.",
        "Micelle: Hydrophobic tails face inward (oil); hydrophilic heads face water.",
        "Soap forms scum in hard water (Ca²⁺/Mg²⁺); synthetic detergents do NOT form scum."
      ],
      practiceQuestions: [
        {
          id: "q3.19_1",
          question: "During soap manufacturing, what valuable chemical byproduct is separated from the soap curd after adding sodium chloride brine?",
          options: [
            "Ethanol",
            "Glycerol (glycerin, propane-1,2,3-triol)",
            "Acetic acid",
            "Sulfuric acid"
          ],
          correctAnswer: 1,
          explanation: "Hydrolysis of triglycerides yields glycerol (a trihydric alcohol) in addition to fatty acid salts (soap). Glycerol is purified for pharmaceuticals and cosmetics."
        },
        {
          id: "q3.19_2",
          question: "Why do synthetic detergents clean effectively in hard water while ordinary soaps form an insoluble grey scum?",
          options: [
            "Detergents are completely non-polar molecules",
            "The calcium and magnesium salts of detergent sulfonate groups are water-soluble",
            "Detergents precipitate hard water ions as gases",
            "Detergents neutralize all water molecules to pH 14"
          ],
          correctAnswer: 1,
          explanation: "Unlike carboxylate soap anions that precipitate with Ca²⁺ and Mg²⁺, alkyl sulfonate anions form soluble calcium and magnesium salts, allowing uninterrupted lathering."
        }
      ]
    }
  ]
};
