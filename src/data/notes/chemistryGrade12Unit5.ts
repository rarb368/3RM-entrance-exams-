import { UnitNotes } from "./chemistryGrade12Unit1";

export const chemistryGrade12Unit5Notes: UnitNotes = {
  subject: "Chemistry",
  grade: 12,
  unitNumber: 5,
  unitTitle: "Environmental Chemistry",
  subtitle: "Environmental components, cycles, pollution, climate change and green chemistry",
  topics: [
    {
      id: "5.01",
      topicNumber: "5.01",
      title: "Environmental Chemistry",
      coreConcepts: [
        "Environmental chemistry studies the production, transport, reactions, effects and fate of chemical species in air, water, soil and living systems, including effects of human activities.",
        "It is multidisciplinary because it connects chemistry with biology, geology, physics and environmental science.",
        "Chemical substances are tracked from their origin through environmental pathways, chemical transformation, and their ultimate sink."
      ],
      rememberPoints: [
        "Sequence: Source → Transport / Environmental Pathway → Transformation → Effect → Sink."
      ],
      examTips: [
        "Environmental problems always involve chemical processes interacting with organisms, Earth systems, and human activity."
      ],
      practiceQuestions: [
        {
          id: "q5.01_1",
          question: "Environmental chemistry is considered multidisciplinary because it:",
          options: [
            "Studies only laboratory glassware and pure synthesized compounds",
            "Connects chemistry with biology, geology, physics and other Earth sciences",
            "Excludes human activities and industrial technologies",
            "Focuses exclusively on transition metals and metallurgical refining"
          ],
          correctAnswer: 1,
          explanation: "Environmental chemistry integrates chemical principles with biological systems, atmospheric science, and geological cycles to understand human and natural chemical impacts."
        },
        {
          id: "q5.01_2",
          question: "In the environmental pathway sequence of a pollutant, which step comes immediately after 'source'?",
          options: [
            "Environmental pathway / transport",
            "Chemical transformation",
            "Effect / sink",
            "Emission origin"
          ],
          correctAnswer: 0,
          explanation: "The standard environmental schematic is arranged in sequence: Source → Environmental Pathway (Transport) → Transformation → Effect / Sink."
        }
      ]
    },
    {
      id: "5.02",
      topicNumber: "5.02",
      title: "Components of the Environment",
      coreConcepts: [
        "The environment consists of four interacting spheres: atmosphere (air layer), hydrosphere (all water bodies), lithosphere (outer crust and soil), and biosphere (living organisms).",
        "Chemical species continuously move between these spheres through biogeochemical cycles and anthropogenic activities.",
        "Disturbances or pollution in one sphere quickly propagate into the other connected spheres."
      ],
      rememberPoints: [
        "Four environmental compartments: Atmosphere • Hydrosphere • Lithosphere • Biosphere."
      ],
      practiceQuestions: [
        {
          id: "q5.02_1",
          question: "Which environmental sphere includes all of Earth's water bodies including oceans, lakes, rivers, glaciers, and groundwater?",
          options: [
            "Hydrosphere",
            "Lithosphere",
            "Atmosphere",
            "Stratosphere"
          ],
          correctAnswer: 0,
          explanation: "The hydrosphere comprises all water found on, under, and over the surface of the planet Earth."
        },
        {
          id: "q5.02_2",
          question: "When plant roots absorb dissolved mineral nitrates from moist topsoil into living plant tissues, this represents an interaction between:",
          options: [
            "Atmosphere and exosphere",
            "Lithosphere/hydrosphere and biosphere",
            "Cryosphere and ionosphere",
            "Troposphere and mesosphere"
          ],
          correctAnswer: 1,
          explanation: "The soil (lithosphere) and pore water (hydrosphere) interact directly with living plant organisms (biosphere)."
        }
      ]
    },
    {
      id: "5.03",
      topicNumber: "5.03",
      title: "Pollutants, Contaminants and Sinks",
      coreConcepts: [
        "Pollutant: A substance or energy present at a concentration high enough to cause adverse, harmful biological or physical effects.",
        "Contaminant: Any substance present in an environment where it does not naturally belong; it becomes a pollutant only when its level produces detrimental harm.",
        "Sink: A natural reservoir or chemical process that stores, neutralizes, or removes a substance from active circulation (e.g., oceans and forests acting as sinks for atmospheric CO₂)."
      ],
      rememberPoints: [
        "Pollutant = harmful concentration.",
        "Contaminant = unwanted or out-of-place substance.",
        "Sink = reservoir or process that absorbs/removes the chemical."
      ],
      practiceQuestions: [
        {
          id: "q5.03_1",
          question: "Which of the following serves as a major natural environmental sink for atmospheric carbon dioxide (CO₂)?",
          options: [
            "Ocean waters and photosynthetic forests",
            "Automobile exhaust catalytic converters",
            "Industrial factory smokestacks",
            "Uncontrolled municipal landfills"
          ],
          correctAnswer: 0,
          explanation: "Oceans absorb dissolved CO₂ (forming bicarbonate/carbonate) and growing forests sequester CO₂ via photosynthesis, serving as major carbon sinks."
        },
        {
          id: "q5.03_2",
          question: "What is the primary distinction between a contaminant and a pollutant?",
          options: [
            "Contaminants are always organic, whereas pollutants are strictly inorganic",
            "A contaminant is an out-of-place substance, while a pollutant is present at levels that cause measurable harmful effects",
            "Pollutants cannot be measured by analytical chemistry",
            "A contaminant always neutralizes pollutants"
          ],
          correctAnswer: 1,
          explanation: "All pollutants are contaminants, but a contaminant only becomes a pollutant when its concentration causes adverse ecological or human health harm."
        }
      ]
    },
    {
      id: "5.04",
      topicNumber: "5.04",
      title: "Biological Oxygen Demand (BOD)",
      coreConcepts: [
        "Biological Oxygen Demand (BOD) measures the amount of dissolved molecular oxygen (DO) required by aerobic microorganisms to biologically decompose organic waste in a water sample.",
        "High BOD indicates heavy organic pollution (such as raw municipal sewage or agricultural runoff).",
        "As microorganisms consume dissolved oxygen during decomposition, DO levels drop drastically, suffocating fish and aquatic life."
      ],
      rememberPoints: [
        "High biodegradable organic load → High BOD → Depleted dissolved oxygen (DO) → Aquatic asphyxiation."
      ],
      practiceQuestions: [
        {
          id: "q5.04_1",
          question: "A high Biological Oxygen Demand (BOD) value in a river water sample indicates that:",
          options: [
            "The water is pure with high dissolved oxygen saturation",
            "The water contains a high load of biodegradable organic waste that stimulates microbial oxygen consumption",
            "All microbial and bacterial decomposition has completely ceased",
            "The water has negligible biological activity"
          ],
          correctAnswer: 1,
          explanation: "More biodegradable organic waste supports faster aerobic bacterial proliferation, requiring more dissolved oxygen and raising the BOD."
        },
        {
          id: "q5.04_2",
          question: "What immediate ecological consequence occurs when water with high BOD enters a calm freshwater lake?",
          options: [
            "Dissolved oxygen drops sharply, causing aquatic organism mortality",
            "The pH of the lake permanently stabilizes at exactly 14",
            "Water clarity instantly increases to 100%",
            "Photosynthesis in deep water accelerates"
          ],
          correctAnswer: 0,
          explanation: "Aerobic microbes rapidly deplete available dissolved oxygen, starving fish and benthic macroinvertebrates of vital oxygen."
        }
      ]
    },
    {
      id: "5.05",
      topicNumber: "5.05",
      title: "Threshold Limit Value (TLV)",
      coreConcepts: [
        "Threshold Limit Value (TLV) is a standardized occupational and environmental guideline representing the maximum airborne concentration of a hazardous chemical to which a healthy worker can be repeatedly exposed without adverse health effects.",
        "Established by industrial hygiene bodies (like ACGIH) based on toxicological and epidemiological data.",
        "Used for monitoring indoor air, industrial plant hygiene, and exposure safety limits."
      ],
      rememberPoints: [
        "TLV = permissible airborne exposure guideline without adverse health risks.",
        "Lower TLV indicates higher chemical toxicity."
      ],
      practiceQuestions: [
        {
          id: "q5.05_1",
          question: "The primary purpose of determining and enforcing a Threshold Limit Value (TLV) is to:",
          options: [
            "Set occupational exposure safety limits to protect workers from airborne chemical hazards",
            "Calculate the enthalpy of combustion for synthetic polymers",
            "Measure the salt salinity of deep ocean water",
            "Determine the titration equivalence point in acid-base neutralization"
          ],
          correctAnswer: 0,
          explanation: "TLV guidelines set the maximum safe concentrations of toxic gases, vapors, or dusts in workplace environments to prevent occupational illness."
        },
        {
          id: "q5.05_2",
          question: "If Chemical A has a TLV of 5 ppm and Chemical B has a TLV of 500 ppm, which chemical is more toxic by inhalation?",
          options: [
            "Chemical B",
            "Chemical A",
            "Both chemicals have identical toxicity",
            "TLV is unrelated to inhalation toxicity"
          ],
          correctAnswer: 1,
          explanation: "A smaller TLV value means that even a tiny concentration (5 ppm) carries potential health hazards; hence Chemical A is more toxic."
        }
      ]
    },
    {
      id: "5.06",
      topicNumber: "5.06",
      title: "Hydrological Cycle",
      coreConcepts: [
        "The hydrological cycle describes the perpetual circulation of water between the hydrosphere, atmosphere, and lithosphere.",
        "Key stages: Evaporation (solar driven) & Transpiration → Condensation (cloud formation) → Precipitation (rain/snow) → Infiltration & Surface Runoff.",
        "Water acts as the universal solvent and mobile transport medium for dissolved minerals and soluble pollutants across global ecosystems."
      ],
      rememberPoints: [
        "Solar energy powers evaporation; gravity drives precipitation and runoff.",
        "Evaporation → Condensation → Precipitation → Runoff / Infiltration."
      ],
      practiceQuestions: [
        {
          id: "q5.06_1",
          question: "Which physical transition in the hydrological cycle directly transforms liquid surface water into airborne atmospheric water vapor?",
          options: [
            "Precipitation",
            "Evaporation and transpiration",
            "Condensation",
            "Infiltration"
          ],
          correctAnswer: 1,
          explanation: "Evaporation from water bodies and transpiration from plant foliage transfer liquid water into gaseous atmospheric moisture."
        },
        {
          id: "q5.06_2",
          question: "How can the hydrological cycle facilitate the transport of toxic water pollutants across geographic regions?",
          options: [
            "Surface runoff and groundwater percolation transport soluble agricultural and industrial residues into distant lakes and rivers",
            "Water molecules destroy all chemical bonds in pollutants upon freezing",
            "Evaporation only transports heavy particulate lead metals",
            "The cycle restricts chemical movement strictly to the point of origin"
          ],
          correctAnswer: 0,
          explanation: "Surface runoff carries pesticides, fertilizers, and industrial chemicals across drainage basins into rivers, lakes, and coastal bays."
        }
      ]
    },
    {
      id: "5.07",
      topicNumber: "5.07",
      title: "Carbon Cycle",
      coreConcepts: [
        "Carbon circulates among the atmosphere, biosphere, oceans, and sedimentary crust.",
        "Photosynthesis by autotrophs removes atmospheric CO₂: 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂.",
        "Aerobic respiration, microbial decomposition, and fossil-fuel combustion return CO₂ to the atmosphere.",
        "Human combustion of coal, oil, and natural gas releases sequestered geological carbon, driving atmospheric CO₂ levels higher."
      ],
      rememberPoints: [
        "Removal process: Photosynthesis & ocean absorption.",
        "Release processes: Respiration, decomposition, and combustion."
      ],
      practiceQuestions: [
        {
          id: "q5.07_1",
          question: "Which biological process is the principal mechanism responsible for removing carbon dioxide gas from the atmosphere?",
          options: [
            "Cellular respiration",
            "Oxygenic photosynthesis",
            "Hydrocarbon combustion",
            "Anaerobic fermentation"
          ],
          correctAnswer: 1,
          explanation: "Photosynthetic autotrophs (plants, algae, cyanobacteria) fix gaseous CO₂ into organic carbohydrates."
        },
        {
          id: "q5.07_2",
          question: "How has industrial combustion of fossil fuels disrupted the equilibrium of the natural carbon cycle?",
          options: [
            "It returns ancient sequestered carbon to the atmosphere much faster than photosynthetic and ocean sinks can absorb it",
            "It permanently eliminates all carbon atoms from the crust",
            "It converts carbon dioxide directly into ozone in the stratosphere",
            "It completely stops plant photosynthesis globally"
          ],
          correctAnswer: 0,
          explanation: "Burning fossil fuels releases carbon stored underground over hundreds of millions of years in just decades, exceeding the absorption capacity of natural carbon sinks."
        }
      ]
    },
    {
      id: "5.08",
      topicNumber: "5.08",
      title: "Nitrogen Cycle",
      coreConcepts: [
        "Atmospheric N₂ is inert due to a strong triple covalent bond (N≡N) and cannot be used directly by most organisms.",
        "Nitrogen Fixation: Converting N₂ into ammonia (NH₃/NH₄⁺) by diazotrophic bacteria (Rhizobium) or lightning.",
        "Nitrification: Two-step bacterial oxidation: NH₄⁺ → NO₂⁻ (Nitrosomonas), then NO₂⁻ → NO₃⁻ (Nitrobacter).",
        "Assimilation: Plants take up NO₃⁻ to synthesize amino acids and proteins.",
        "Ammonification: Decomposers break down nitrogenous waste into NH₃/NH₄⁺.",
        "Denitrification: Anaerobic denitrifying bacteria reduce nitrates back into gaseous N₂: NO₃⁻ → N₂O → N₂."
      ],
      rememberPoints: [
        "Fixation (N₂ → NH₄⁺) → Nitrification (NH₄⁺ → NO₃⁻) → Assimilation → Ammonification → Denitrification (NO₃⁻ → N₂)."
      ],
      practiceQuestions: [
        {
          id: "q5.08_1",
          question: "Which bacterial process in the nitrogen cycle converts nitrates (NO₃⁻) into atmospheric nitrogen gas (N₂)?",
          options: [
            "Denitrification",
            "Biological nitrogen fixation",
            "Ammonification",
            "Nitrification"
          ],
          correctAnswer: 0,
          explanation: "Denitrifying bacteria (e.g., Pseudomonas) in anaerobic soils reduce NO₃⁻ back into N₂ gas, completing the nitrogen cycle."
        },
        {
          id: "q5.08_2",
          question: "Why cannot plants directly assimilate abundant molecular nitrogen (N₂) gas from the atmosphere?",
          options: [
            "The triple bond between nitrogen atoms (N≡N) has high bond energy and requires specific enzymatic fixation to break",
            "Nitrogen gas is toxic to plant chloroplasts",
            "Nitrogen gas dissolves only in concentrated sulfuric acid",
            "Plants lack cell membranes"
          ],
          correctAnswer: 0,
          explanation: "The N≡N bond has an extremely high bond dissociation enthalpy (945 kJ/mol), which plants cannot cleave without nitrogenase enzymes from nitrogen-fixing microbes."
        }
      ]
    },
    {
      id: "5.09",
      topicNumber: "5.09",
      title: "Oxygen Cycle",
      coreConcepts: [
        "Molecular oxygen (O₂) makes up approximately 21% of dry atmospheric air.",
        "Photosynthesis is the sole primary source replenishing free molecular O₂ on Earth by photolysis of water.",
        "Processes consuming oxygen include aerobic respiration, biomass and fossil fuel combustion, oxidative weathering of crustal rocks, and formation of oxides (e.g., rusting).",
        "The oxygen cycle is intimately coupled to the carbon cycle through the reciprocal reactions of photosynthesis and cellular respiration."
      ],
      rememberPoints: [
        "Produces O₂: Photosynthesis.",
        "Consumes O₂: Respiration, combustion, decomposition, chemical oxidation (rusting)."
      ],
      practiceQuestions: [
        {
          id: "q5.09_1",
          question: "Which fundamental biochemical reaction is primarily responsible for producing and maintaining molecular oxygen in Earth's atmosphere?",
          options: [
            "Aerobic respiration",
            "Oxygenic photosynthesis",
            "Thermal decomposition of carbonates",
            "Petroleum combustion"
          ],
          correctAnswer: 1,
          explanation: "Oxygenic photosynthesis photolytically oxidizes water molecules, generating O₂ as a byproduct."
        },
        {
          id: "q5.09_2",
          question: "Which of the following processes CONSUMES molecular oxygen from the atmosphere?",
          options: [
            "Combustion of coal and cellular respiration",
            "Splitting of water by chlorophyll",
            "Evaporation of ocean brine",
            "Nitrogen fixation by Rhizobium"
          ],
          correctAnswer: 0,
          explanation: "Both fuel combustion (hydrocarbon + O₂ → CO₂ + H₂O) and aerobic cellular respiration require and consume free oxygen."
        }
      ]
    },
    {
      id: "5.10",
      topicNumber: "5.10",
      title: "Sulfur Cycle",
      coreConcepts: [
        "Sulfur is present in rocks and minerals as sulfides (FeS₂) and sulfates (CaSO₄·2H₂O).",
        "Natural sources: Volcanic eruptions emit SO₂ and H₂S; marine microorganisms produce dimethyl sulfide (DMS).",
        "Anthropogenic sources: Combustion of sulfur-containing fossil fuels (especially high-sulfur coal and heavy crude) emits sulfur dioxide (SO₂).",
        "Atmospheric oxidation converts SO₂ into sulfur trioxide (SO₃), which reacts with moisture to form sulfuric acid (H₂SO₄), causing acid rain."
      ],
      rememberPoints: [
        "S(fuel) + O₂ → SO₂.",
        "2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄ (acid deposition)."
      ],
      practiceQuestions: [
        {
          id: "q5.10_1",
          question: "Combustion of sulfur-rich coal in thermal power plants releases which major air pollutant into the atmosphere?",
          options: [
            "Sulfur dioxide (SO₂)",
            "Helium gas",
            "Pure elemental argon",
            "Ozone only"
          ],
          correctAnswer: 0,
          explanation: "Sulfur impurities in fossil fuels oxidize during combustion to form sulfur dioxide (SO₂)."
        },
        {
          id: "q5.10_2",
          question: "What environmental problem is caused when atmospheric SO₂ oxidizes and reacts with cloud water droplets?",
          options: [
            "Acid precipitation (acid rain)",
            "Ozone layer enrichment",
            "Thermal inversion of noble gases",
            "Eutrophication by phosphorus"
          ],
          correctAnswer: 0,
          explanation: "SO₂ is oxidized to SO₃, which dissolves in water to form H₂SO₄, lowering rainwater pH below 5.6 (acid rain)."
        }
      ]
    },
    {
      id: "5.11",
      topicNumber: "5.11",
      title: "Phosphorus Cycle",
      coreConcepts: [
        "Phosphorus is essential for nucleic acids (DNA, RNA), ATP energy transfer, and phospholipid cell membranes.",
        "CRITICAL MATRIC DISTINCTION: Unlike carbon, nitrogen, and sulfur cycles, the phosphorus cycle has NO significant gaseous or atmospheric phase.",
        "It is classified as a sedimentary cycle. Weathering of phosphate-bearing rocks (e.g., apatite) releases soluble orthophosphate (PO₄³⁻) into soils and waterways.",
        "Plant uptake → food chain transfer → death & mineralization → marine sedimentation."
      ],
      rememberPoints: [
        "Sedimentary cycle: NO major atmospheric or gaseous reservoir.",
        "Rock weathering → soil phosphate → plant uptake → food chain → sediment."
      ],
      practiceQuestions: [
        {
          id: "q5.11_1",
          question: "How does the biogeochemical cycle of phosphorus fundamentally differ from the carbon and nitrogen cycles?",
          options: [
            "It lacks a major gaseous atmospheric component",
            "Phosphorus exists only as an atmospheric gas",
            "Phosphorus is never used by biological organisms",
            "The cycle is driven strictly by ultraviolet radiation"
          ],
          correctAnswer: 0,
          explanation: "Phosphorus does not form stable gaseous compounds under normal atmospheric conditions, so it cycles primarily through rocks, soil, water, and sediments."
        },
        {
          id: "q5.11_2",
          question: "What is the primary natural geological source that introduces available phosphate into the terrestrial biosphere?",
          options: [
            "Weathering and erosion of phosphate-bearing mineral rocks",
            "Lightning electrical discharges in dry air",
            "Transpiration of oceanic kelp",
            "Volcanic methane release"
          ],
          correctAnswer: 0,
          explanation: "Rain, temperature fluctuations, and physical/chemical weathering slowly dissolve phosphate minerals from crustal rocks into soil solution."
        }
      ]
    },
    {
      id: "5.12",
      topicNumber: "5.12",
      title: "Environmental Pollution Overview",
      coreConcepts: [
        "Pollution is the undesirable alteration of physical, chemical, or biological properties of air, water, or land by releasing harmful substances or energy.",
        "Major classifications: Air pollution, water pollution, land/soil pollution, noise and thermal pollution.",
        "Primary pollutants: emitted directly from identifiable sources (e.g., CO, SO₂, NO, particulates).",
        "Secondary pollutants: formed in the environment by chemical reactions among primary pollutants (e.g., ground-level O₃, PAN, acid rain)."
      ],
      rememberPoints: [
        "Primary = emitted directly from source.",
        "Secondary = formed via atmospheric/chemical reactions.",
        "Prevention at source is more effective and economical than remediation."
      ],
      practiceQuestions: [
        {
          id: "q5.12_1",
          question: "Which of the following is classified as a SECONDARY pollutant?",
          options: [
            "Ground-level tropospheric ozone (O₃)",
            "Carbon monoxide directly from car exhaust",
            "Sulfur dioxide from a smelter stack",
            "Soot and ash from wood burning"
          ],
          correctAnswer: 0,
          explanation: "Tropospheric ozone is not emitted directly; it forms secondary photochemical reactions between VOCs and nitrogen oxides (NOₓ) in sunlight."
        },
        {
          id: "q5.12_2",
          question: "Discharge of hot cooling water from a thermal power plant into a natural river represents:",
          options: [
            "Thermal pollution, which reduces dissolved oxygen solubility in water",
            "Nutrient eutrophication",
            "Sedimentary rock metamorphism",
            "Biological nitrogen fixation"
          ],
          correctAnswer: 0,
          explanation: "Thermal pollution occurs when industrial coolant water raises river temperatures, lowering dissolved oxygen solubility and stressing aquatic life."
        }
      ]
    },
    {
      id: "5.13",
      topicNumber: "5.13",
      title: "Air Pollution",
      coreConcepts: [
        "Major air pollutants: Carbon monoxide (CO), sulfur oxides (SOₓ), nitrogen oxides (NOₓ), volatile organic compounds (VOCs), and particulate matter (PM2.5, PM10).",
        "Carbon Monoxide (CO): Colorless, odorless toxic gas formed by incomplete combustion; binds irreversibly to hemoglobin forming carboxyhemoglobin, preventing oxygen transport.",
        "Photochemical Smog: Brown haze formed when NO₂ and unburned hydrocarbons react under intense sunlight to yield ozone (O₃), peroxyacetyl nitrate (PAN), and aldehydes.",
        "Control methods: Catalytic converters, electrostatic precipitators, wet scrubbers for desulfurization."
      ],
      rememberPoints: [
        "Incomplete combustion → toxic CO (carboxyhemoglobin formation).",
        "NOₓ + VOCs + UV light → Photochemical Smog (O₃, PAN)."
      ],
      practiceQuestions: [
        {
          id: "q5.13_1",
          question: "Why is carbon monoxide (CO) hazardous to human health even at relatively low airborne concentrations?",
          options: [
            "It binds to blood hemoglobin with much greater affinity than oxygen, asphyxiating body tissues",
            "It causes instant crystallization of stomach acids",
            "It permanently converts atmospheric nitrogen into cyanide",
            "It destroys skin cells through alpha particle radiation"
          ],
          correctAnswer: 0,
          explanation: "CO has over 200 times higher affinity for hemoglobin than O₂, forming carboxyhemoglobin and starving vital organs of oxygen."
        },
        {
          id: "q5.13_2",
          question: "What conditions are necessary for the formation of photochemical smog in urban areas?",
          options: [
            "Automobile emissions containing NOₓ and hydrocarbons exposed to intense solar ultraviolet radiation",
            "Heavy rainfall in cold polar darkness",
            "High humidity combined strictly with sulfurous coal soot only",
            "Agricultural runoff containing excess phosphorus"
          ],
          correctAnswer: 0,
          explanation: "Photochemical smog requires primary emissions of NOₓ and VOCs reacting under warm sunny conditions to produce powerful photochemical oxidants."
        }
      ]
    },
    {
      id: "5.14",
      topicNumber: "5.14",
      title: "Water Pollution",
      coreConcepts: [
        "Key water contaminants: Pathogens, oxygen-demanding biodegradable organic wastes, synthetic organic compounds, heavy metals (Pb, Hg, Cd), and excess plant nutrients.",
        "Eutrophication: Excessive influx of nitrates (NO₃⁻) and phosphates (PO₄³⁻) from fertilizers and detergents causes algal blooms; when algae die, bacterial decomposition exhausts DO, causing widespread fish kills.",
        "Biomagnification: Persistent non-biodegradable toxins (e.g., methylmercury, DDT) increase in concentration at progressively higher trophic levels of the food web.",
        "Water treatment stages: Primary (screening/settling), Secondary (biological aeration), Tertiary (chemical disinfection/chlorination/UV)."
      ],
      rememberPoints: [
        "Eutrophication: Excess N & P → Algal bloom → Death & decay → Anoxia (DO depletion).",
        "Biomagnification: Toxin concentration multiplies up the food chain."
      ],
      practiceQuestions: [
        {
          id: "q5.14_1",
          question: "The process whereby high agricultural runoff containing nitrogen and phosphorus leads to massive algal blooms followed by severe oxygen depletion is known as:",
          options: [
            "Eutrophication",
            "Bioaccumulation",
            "Sedimentary weathering",
            "Photosynthetic catalysis"
          ],
          correctAnswer: 0,
          explanation: "Eutrophication is nutrient enrichment of water bodies triggering explosive algal growth and subsequent microbial deoxygenation."
        },
        {
          id: "q5.14_2",
          question: "The increasing concentration of fat-soluble, non-biodegradable toxins (like methylmercury) in the tissues of top predators is termed:",
          options: [
            "Biomagnification",
            "Eutrophication",
            "Biological oxidation demand",
            "Thermal dissociation"
          ],
          correctAnswer: 0,
          explanation: "Biomagnification is the progressive increase in toxic substance concentrations at each trophic step along the food chain."
        }
      ]
    },
    {
      id: "5.15",
      topicNumber: "5.15",
      title: "Land and Soil Pollution",
      coreConcepts: [
        "Land pollution results from dumping solid municipal waste, toxic industrial effluents, mining spoils, and excessive synthetic agrochemicals.",
        "Soil degradation includes loss of organic humus, acidification, salinization from improper irrigation, and heavy metal accumulation.",
        "Landfill Leaching: Rainwater percolating through unlined waste dumps produces toxic leachate that infiltrates groundwater tables.",
        "Remediation: Waste hierarchy (Reduce, Reuse, Recycle), sanitary engineered landfills with impermeable geomembrane liners, and bioremediation."
      ],
      rememberPoints: [
        "Hazardous leachate can contaminate groundwater reservoirs.",
        "Hierarchy: Reduce > Reuse > Recycle > Responsible Disposal."
      ],
      practiceQuestions: [
        {
          id: "q5.15_1",
          question: "What dangerous environmental hazard is created when rainwater percolates through unlined, open municipal waste dumps?",
          options: [
            "Toxic leachate forms and seeps into surrounding soil and underlying groundwater aquifers",
            "Direct depletion of the stratospheric ozone layer",
            "Excessive production of purified distilled water",
            "Accelerated biological nitrogen fixation"
          ],
          correctAnswer: 0,
          explanation: "Percolating rainwater dissolves hazardous heavy metals and organic toxins, creating contaminated leachate that threatens drinking water wells."
        },
        {
          id: "q5.15_2",
          question: "Which of the following represents the most environmentally preferred strategy in the modern solid waste management hierarchy?",
          options: [
            "Source reduction and waste prevention",
            "Open burning of municipal trash",
            "Landfilling in wetland areas",
            "Ocean dumping of untreated plastics"
          ],
          correctAnswer: 0,
          explanation: "Reducing waste at the source prevents pollution before any material enters the waste stream."
        }
      ]
    },
    {
      id: "5.16",
      topicNumber: "5.16",
      title: "Global Warming and Climate Change",
      coreConcepts: [
        "Global Warming: The sustained rise in Earth's global mean surface temperature caused by anthropogenic greenhouse gas emissions.",
        "Climate Change: The broader long-term shifts in weather patterns, precipitation regimes, storm intensities, and sea levels caused by warming.",
        "Greenhouse Effect: Natural atmospheric warming where incoming shortwave solar radiation passes through, but outgoing longwave infrared (thermal) radiation is absorbed by greenhouse gases and re-radiated back to Earth.",
        "Without natural greenhouse gases, Earth's average temperature would be roughly −18 °C instead of the habitable ~15 °C."
      ],
      rememberPoints: [
        "Sun emits shortwave radiation (UV/visible).",
        "Earth radiates longwave infrared (IR).",
        "Greenhouse gases trap outgoing IR radiation."
      ],
      practiceQuestions: [
        {
          id: "q5.16_1",
          question: "What is the primary difference between the terms 'global warming' and 'climate change'?",
          options: [
            "Global warming refers specifically to average temperature increase, whereas climate change encompasses broad long-term environmental and weather shifts",
            "Climate change refers only to daily changes in afternoon weather",
            "Global warming is natural, while climate change is completely non-existent",
            "Both terms refer exclusively to volcanic ash clouds"
          ],
          correctAnswer: 0,
          explanation: "Global warming is the thermal rise in Earth's average temperature, while climate change includes shifts in precipitation, extreme storms, and ecological changes."
        },
        {
          id: "q5.16_2",
          question: "In the greenhouse mechanism, which type of electromagnetic radiation emitted by Earth's warmed surface is absorbed by greenhouse gases?",
          options: [
            "Longwave infrared (thermal) radiation",
            "High-energy gamma rays",
            "Shortwave ultraviolet radiation",
            "X-rays"
          ],
          correctAnswer: 0,
          explanation: "Earth absorbs shortwave solar radiation and re-radiates lower-energy, longwave thermal infrared radiation, which is trapped by greenhouse gases."
        }
      ]
    },
    {
      id: "5.17",
      topicNumber: "5.17",
      title: "Greenhouse Gases and Their Chemistry",
      coreConcepts: [
        "Key Greenhouse Gases (GHGs): Water vapor (H₂O), Carbon dioxide (CO₂), Methane (CH₄), Nitrous oxide (N₂O), Ozone (O₃), and Chlorofluorocarbons (CFCs/HFCs).",
        "To absorb infrared radiation, a molecule must undergo a change in its dipole moment during molecular vibration (bending or asymmetric stretching).",
        "Homodiatomic gases like N₂ and O₂ cannot absorb IR because they have no dipole change; they are NOT greenhouse gases.",
        "Global Warming Potential (GWP): Measure of heat-trapping ability relative to CO₂ (CO₂ = 1, CH₄ ≈ 28, N₂O ≈ 265, CFCs > 1,000)."
      ],
      rememberPoints: [
        "CO₂, CH₄, N₂O, H₂O absorb IR because their vibrations change their molecular dipole.",
        "N₂ and O₂ are NOT greenhouse gases.",
        "Methane has higher heat-trapping efficiency than CO₂ per molecule."
      ],
      practiceQuestions: [
        {
          id: "q5.17_1",
          question: "Why do nitrogen (N₂) and oxygen (O₂) molecules in the atmosphere NOT act as greenhouse gases?",
          options: [
            "They are homonuclear diatomic molecules with zero dipole moment change during vibration",
            "They reflect 100% of incoming sunlight back to space",
            "Their molecular mass is too small to exist in the troposphere",
            "They react violently with infrared photons"
          ],
          correctAnswer: 0,
          explanation: "Only molecules that change dipole moment during vibration can absorb infrared radiation; symmetric homonuclear diatomic gases (N₂, O₂) cannot."
        },
        {
          id: "q5.17_2",
          question: "Which of the following atmospheric trace gases has a significantly higher Global Warming Potential (GWP) per molecule than CO₂?",
          options: [
            "Methane (CH₄)",
            "Argon (Ar)",
            "Helium (He)",
            "Molecular Nitrogen (N₂)"
          ],
          correctAnswer: 0,
          explanation: "Methane has a GWP roughly 28 times greater than CO₂ over a 100-year time horizon due to its strong infrared absorption bands."
        }
      ]
    },
    {
      id: "5.18",
      topicNumber: "5.18",
      title: "Green Chemistry and Its Purpose",
      coreConcepts: [
        "Green Chemistry (Sustainable Chemistry): The design of chemical products and processes that reduce or eliminate the generation and use of hazardous substances.",
        "Philosophy: 'Benign by design' — preventing hazard at the molecular design and synthesis stage rather than managing waste after generation.",
        "Differs fundamentally from traditional environmental engineering: environmental cleanup treats end-of-pipe waste, whereas green chemistry eliminates waste formation completely.",
        "Considers the complete life cycle: non-toxic feedstocks, efficient synthesis, safe consumer use, and biodegradable end-of-life disposal."
      ],
      rememberPoints: [
        "Prevention at source > End-of-pipe waste remediation.",
        "Design chemicals and reactions that are intrinsically safe."
      ],
      practiceQuestions: [
        {
          id: "q5.18_1",
          question: "The central philosophy of Green Chemistry is best described as:",
          options: [
            "Designing chemical products and processes that eliminate or reduce hazardous substances at the source",
            "Cleaning up contaminated landfills after chemical spills have occurred",
            "Restricting chemical manufacturing to green-colored pigments",
            "Increasing toxic solvent quantities to maximize chemical reaction rates"
          ],
          correctAnswer: 0,
          explanation: "Green chemistry focuses on intrinsic hazard prevention by design across the entire chemical lifecycle rather than waste remediation."
        },
        {
          id: "q5.18_2",
          question: "How does green chemistry differ from traditional 'end-of-pipe' environmental treatment?",
          options: [
            "Green chemistry eliminates hazardous waste formation at the design stage, while end-of-pipe treats waste after it is generated",
            "Green chemistry only applies to agriculture",
            "End-of-pipe treatment eliminates all chemical factories",
            "There is no difference between the two approaches"
          ],
          correctAnswer: 0,
          explanation: "End-of-pipe treats already produced hazardous waste, while green chemistry redesigns the synthetic pathway so hazardous byproducts are never created."
        }
      ]
    },
    {
      id: "5.19",
      topicNumber: "5.19",
      title: "The 12 Principles of Green Chemistry",
      coreConcepts: [
        "Formulated by Paul Anastas and John Warner (1998):",
        "1. Waste Prevention: Better to prevent waste than treat it later.",
        "2. Atom Economy: Maximize incorporation of all reactant atoms into final product (% Atom Economy = [MW product / MW reactants] × 100).",
        "3. Less Hazardous Synthesis: Generate substances with little or no toxicity.",
        "4. Designing Safer Chemicals: Preserve efficacy while reducing toxicity.",
        "5. Safer Solvents and Auxiliaries: Avoid auxiliary substances (use water or supercritical CO₂).",
        "6. Design for Energy Efficiency: Ambient temperature and pressure preferred.",
        "7. Use of Renewable Feedstocks: Agricultural raw materials rather than depletable petroleum.",
        "8. Reduce Derivatives: Avoid unnecessary blocking or protecting groups.",
        "9. Catalysis: Catalytic reagents are superior to stoichiometric reagents.",
        "10. Design for Degradation: Products break down into harmless environmental substances.",
        "11. Real-time Analysis for Pollution Prevention: In-line monitoring during synthesis.",
        "12. Inherently Safer Chemistry for Accident Prevention: Minimize explosions, fires, and releases."
      ],
      rememberPoints: [
        "Atom Economy = (Mass of desired product / Total mass of all reactants) × 100%.",
        "Catalysts are reusable; stoichiometric reagents create large waste streams."
      ],
      practiceQuestions: [
        {
          id: "q5.19_1",
          question: "Which principle of green chemistry emphasizes designing chemical products so that at the end of their functional lifespan, they break down into innocuous environmental products?",
          options: [
            "Design for degradation",
            "Atom economy",
            "Use of stoichiometric derivatives",
            "Real-time pollution analysis"
          ],
          correctAnswer: 0,
          explanation: "Design for degradation ensures chemicals and polymers break down into harmless non-toxic substances rather than persisting in the environment."
        },
        {
          id: "q5.19_2",
          question: "In green chemistry, why are catalytic reactions preferred over stoichiometric reactions?",
          options: [
            "Catalysts increase selectivity, lower activation energy, and can be recovered and reused without generating large stoichiometric waste",
            "Catalysts permanently consume all solvent molecules",
            "Stoichiometric reagents prevent all side reactions",
            "Catalytic reactions always require high temperature and pressure"
          ],
          correctAnswer: 0,
          explanation: "Catalytic reagents are used in small sub-stoichiometric amounts, perform repeated reaction cycles, and drastically reduce byproduct waste."
        }
      ]
    },
    {
      id: "5.20",
      topicNumber: "5.20",
      title: "Cleaner Production",
      coreConcepts: [
        "Cleaner Production is a continuous, preventative environmental strategy applied to processes, products, and services to increase efficiency and reduce risks to humans and the environment.",
        "For manufacturing processes: conserving raw materials and energy, eliminating toxic raw materials, and reducing toxic emissions and waste quantities.",
        "For products: reducing negative impacts along the entire life cycle from raw material extraction to ultimate disposal (Life Cycle Assessment - LCA).",
        "Practical measures: Closed-loop water recycling, waste-to-energy recovery, solvent recovery, and renewable energy integration."
      ],
      rememberPoints: [
        "Cleaner Production = Continuous preventative strategy for resource efficiency and waste minimization.",
        "Life Cycle Assessment (cradle-to-grave) evaluates environmental impact from raw material to final disposal."
      ],
      practiceQuestions: [
        {
          id: "q5.20_1",
          question: "Which industrial practice is a direct example of cleaner production?",
          options: [
            "Installing closed-loop recycling systems to recover, purify, and reuse process water within the manufacturing plant",
            "Discharging untreated toxic industrial effluent directly into local rivers at night",
            "Operating outdated boilers that maximize fuel combustion losses",
            "Disposing of heavy metal catalysts into unlined open pits"
          ],
          correctAnswer: 0,
          explanation: "Closed-loop water recycling conserves freshwater resources and eliminates wastewater discharge at the source."
        },
        {
          id: "q5.20_2",
          question: "What does a Life Cycle Assessment (LCA) evaluate in cleaner production?",
          options: [
            "The cumulative environmental impact of a product from raw material extraction, through manufacturing and use, to final disposal",
            "Only the immediate financial cost of marketing a product",
            "The time taken to transport goods by train",
            "The theoretical boiling point of pure noble gases"
          ],
          correctAnswer: 0,
          explanation: "Life Cycle Assessment (LCA) analyzes the 'cradle-to-grave' environmental footprint across every phase of a product's existence."
        }
      ]
    }
  ]
};
