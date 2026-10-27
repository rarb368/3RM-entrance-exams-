import json
import re

# Read current biology.ts
with open('src/data/questions/biology.ts', 'r') as f:
    content = f.read()

# Extract the JSON array
match = re.search(r'export const BIOLOGY_QUESTIONS:\s*Question\[\]\s*=\s*(\[[\s\S]*?\]);', content)
if not match:
    print("Could not match BIOLOGY_QUESTIONS")
    exit(1)

questions_2017 = json.loads(match.group(1))
print(f"Loaded {len(questions_2017)} 2017 Biology questions.")

# Enrich explanations for 2017 Biology questions
explanations_2017 = {
    1: "The Institute of Biodiversity Conservation (IBC, formerly the Plant Genetic Resources Centre) in Addis Ababa is one of the premier genebanks in Africa, conserving thousands of indigenous crop, plant, and animal accessions.",
    2: "Resolution (resolving power) is the ability of an optical microscope to distinguish two separate points that are close together as distinct and separate entities.",
    3: "Both plant and animal eukaryotic cells possess a plasma membrane, a true nucleus, cytoplasm, mitochondria (for cellular respiration), and endoplasmic reticulum (smooth and rough). Lysosomes are predominantly animal; chloroplasts and large central vacuoles are characteristic of plants.",
    4: "During sexual reproduction, two haploid gametes (each with n chromosomes) fuse in fertilization to produce a diploid single-celled zygote (2n), restoring the species chromosome number.",
    5: "The lock-and-key model proposed by Emil Fischer posits that the enzyme's active site possesses a rigid, complementary 3D shape that fits only one specific substrate molecule.",
    6: "The cell theory originally formulated by Schleiden, Schwann, and Virchow asserts that: (1) All living organisms are composed of one or more cells; (2) The cell is the fundamental unit of structure and function in life; and (3) All cells arise from pre-existing cells through cell division.",
    7: "Primary succession begins in essentially lifeless habitats devoid of established soil, such as newly cooled volcanic lava flows or exposed bare rock surfaces.",
    8: "Enzymes function as biological catalysts by lowering the activation energy barrier (Ea) required to initiate the chemical reaction, thereby accelerating the conversion of substrates into products.",
    9: "Lipids are hydrophobic nonpolar macromolecules composed of glycerol and fatty acids linked by ester bonds. They serve as long-term energy reserves, thermal insulation, and structural components of biological membranes.",
    10: "The human heart consists of 4 muscular chambers: the right atrium (I) receives deoxygenated blood from vena cava, right ventricle (II) pumps to pulmonary artery, left atrium (IV) receives oxygenated blood from pulmonary veins, and the thick left ventricle (III) pumps oxygenated blood into the aorta.",
    11: "Active transport requires cellular metabolic energy in the form of ATP to move solute ions or molecules across a biological membrane against their electrochemical concentration gradient.",
    12: "Facilitated diffusion is a passive transport process down a concentration gradient that does not require ATP energy, utilizing transmembrane transport proteins (channels or carrier permeases).",
    13: "Ribosomes are non-membrane-bound ribonucleoprotein organelles responsible for protein synthesis (translation) by reading mRNA triplet codons.",
    14: "The Golgi apparatus modifies, sorts, packages, and tags proteins and lipids into secretory vesicles for transport to extracellular destinations or lysosomes.",
    15: "In an ecological biomass pyramid, primary autotrophic producers (Level I) support herbivores (Level II), followed by secondary consumers (Level III) and top predators (Level IV), with biomass decreasing at each ascending trophic level.",
    16: "Cellular respiration occurs in three consecutive stages: Glycolysis (cytosol), the Krebs citric acid cycle (mitochondrial matrix), and the Electron Transport System/Chemiosmosis (inner mitochondrial cristae).",
    17: "Glycolysis is an anaerobic cytoplasmic metabolic pathway that cleaves one 6-carbon glucose into two 3-carbon pyruvate molecules, yielding a net 2 ATP and 2 NADH.",
    18: "Fermentation occurs under anaerobic conditions to re-oxidize NADH back to NAD+, allowing glycolysis to continue producing substrate-level ATP in the absence of oxygen.",
    19: "In alcoholic fermentation carried out by yeasts, pyruvate is decarboxylated into acetaldehyde and then reduced by NADH into ethanol and carbon dioxide.",
    20: "Aerobic respiration theoretically yields approximately 36 to 38 ATP molecules per molecule of oxidized glucose in eukaryotic cells.",
    21: "Photosynthesis takes place in chloroplasts: light-dependent reactions occur in the thylakoid membranes, while light-independent reactions (Calvin cycle) take place in the stroma.",
    22: "Chlorophyll a and b pigments absorb light primarily in the blue and red wavelengths of the visible spectrum and reflect green light.",
    23: "In the light-dependent reactions of photosynthesis, photolysis splits water (H₂O → 2H⁺ + 2e⁻ + ½O₂), releasing molecular oxygen as a byproduct.",
    24: "The enzyme Rubisco (ribulose-1,5-bisphosphate carboxylase/oxygenase) fixes carbon dioxide onto RuBP during the first stage of the Calvin cycle.",
    25: "DNA nucleotides consist of a deoxyribose sugar, a phosphate group, and one of four nitrogenous bases: Adenine, Thymine, Guanine, or Cytosine.",
    26: "According to Chargaff's rules of complementary base pairing in double-stranded DNA, Adenine pairs with Thymine (A=T via two hydrogen bonds), and Guanine pairs with Cytosine (G≡C via three hydrogen bonds).",
    27: "DNA replication is semiconservative: each daughter DNA double helix contains one conserved ancestral template strand and one newly synthesized daughter strand.",
    28: "DNA helicase unwinds the double helix by breaking hydrogen bonds between base pairs at the replication fork.",
    29: "DNA polymerase III synthesizes the complementary DNA strand in the 5' to 3' direction during replication.",
    30: "Transcription produces single-stranded messenger RNA (mRNA) from a DNA template strand inside the eukaryotic nucleus.",
    31: "In RNA, the pyrimidine base Uracil (U) replaces Thymine (T) and pairs with Adenine.",
    32: "A codon is a specific triplet of contiguous mRNA nucleotide bases that codes for a single amino acid or a stop termination signal during protein translation.",
    33: "Transfer RNA (tRNA) molecules carry specific amino acids to the ribosome, matching their anticodon triplets with the corresponding mRNA codons.",
    34: "Gregor Mendel's law of segregation states that each individual diploid organism carries two alleles for a trait, which segregate during gamete formation so each gamete carries only one allele.",
    35: "Mendel's law of independent assortment states that alleles of different genes segregate independently of one another during gametogenesis, provided they are on non-homologous chromosomes.",
    36: "A monohybrid cross between two heterozygous parents (Bb × Bb) yields a phenotypic ratio of 3 dominant : 1 recessive (and a 1:2:1 genotypic ratio).",
    37: "In incomplete dominance, the heterozygous phenotype is an intermediate blend between both homozygous phenotypes (e.g., red × white producing pink flowers).",
    38: "In codominance, both alleles are fully and simultaneously expressed in the heterozygote (e.g., ABO blood group allele I^A I^B giving type AB).",
    39: "Pedigree chart analysis traces the phenotypic inheritance of specific traits through successive generations of a family.",
    40: "Sex-linked traits (such as red-green color blindness and hemophilia) are governed by genes located on the X chromosome, appearing far more frequently in hemizygous males.",
    41: "Mitosis produces two genetically identical diploid somatic daughter cells for growth and tissue repair.",
    42: "The four continuous phases of mitosis are Prophase, Metaphase, Anaphase, and Telophase.",
    43: "During metaphase, duplicated chromosomes condense and align along the equatorial metaphase plate of the cell.",
    44: "During anaphase, spindle fibers shorten and pull sister chromatids apart toward opposite centrosome poles.",
    45: "Meiosis consists of two successive nuclear divisions (Meiosis I and Meiosis II) that reduce chromosome ploidy from diploid (2n) to four haploid (n) gametes.",
    46: "Crossing over (homologous genetic recombination) occurs during Prophase I of meiosis, creating novel allele combinations that enhance genetic diversity.",
    47: "Nondisjunction is the failure of homologous chromosomes or sister chromatids to separate properly during meiosis, resulting in aneuploid gametes (e.g., Down syndrome, Trisomy 21).",
    48: "Charles Darwin's theory of evolution by natural selection proposes that organisms with advantageous heritable traits survive and reproduce at higher rates in their environment.",
    49: "Homologous structures share fundamental anatomical ancestry but may serve different functions in modern taxa (e.g., human arm, bat wing, whale flipper), reflecting divergent evolution.",
    50: "Analogous structures perform similar functions but evolved independently through convergent evolution without a recent common ancestor (e.g., wings of insects and birds).",
    51: "Vestigial structures are evolutionary remnants that have lost their ancestral physiological function (e.g., human appendix, pelvic bones in whales).",
    52: "Speciation is the evolutionary process by which one ancestral biological population diverges into two or more distinct, reproductively isolated species.",
    53: "Allopatric speciation occurs when a physical geographic barrier (mountain, river, canyon) divides a population and prevents gene flow.",
    54: "The Hardy-Weinberg equilibrium principle states that allele frequencies in a population remain constant across generations in the absence of evolutionary influences (p² + 2pq + q² = 1).",
    55: "A community in ecology comprises all interacting populations of different biological species inhabiting a shared geographic ecosystem at a given time.",
    56: "An ecosystem encompasses both the biotic living community of organisms and the abiotic physical environment (soil, water, climate, light) with which they interact.",
    57: "Autotrophs (primary producers) synthesize organic molecules from inorganic carbon dioxide and sunlight (or chemical energy), forming the foundation of ecological food webs.",
    58: "Heterotrophs obtain organic nutrients and metabolic energy by ingesting other organisms or their organic byproducts.",
    59: "Decomposers (saprotrophs, such as bacteria and fungi) break down complex dead organic biomass, recycling vital mineral nutrients back to the abiotic environment.",
    60: "In an ecosystem food web, the 10% ecological efficiency rule indicates that approximately only 10% of chemical energy at one trophic level is transferred to the next higher level.",
    61: "Mutualism is a symbiotic interspecific interaction in which both coexisting species derive mutual biological benefit (e.g., mycorrhizal fungi and plant roots).",
    62: "Commensalism is an ecological relationship where one species benefits while the host species is neither helped nor harmed (e.g., epiphytic orchids on rainforest tree trunks).",
    63: "Parasitism is a symbiotic relationship where one organism (the parasite) benefits at the nutritional expense and physical detriment of the host organism.",
    64: "The carbon cycle circulates carbon between the atmosphere, biosphere, oceans, and geosphere through photosynthesis, cellular respiration, combustion, and decomposition.",
    65: "Nitrogen-fixing bacteria (e.g., Rhizobium in legume root nodules, and Azotobacter in soil) convert inert atmospheric N₂ gas into bioavailable ammonia (NH₃).",
    66: "Nitrifying bacteria in soil convert ammonia into nitrites (Nitrosomonas) and subsequently into nitrates (Nitrobacter), which plants absorb.",
    67: "Denitrifying bacteria (e.g., Pseudomonas) complete the nitrogen cycle under anaerobic conditions by reducing nitrates back into atmospheric N₂ gas.",
    68: "Secondary ecological succession occurs in disturbed areas where an existing community was disrupted (by wildfire, flood, or farming) but the soil substrate remains intact.",
    69: "Deforestation exacerbates global climate change by removing terrestrial carbon sinks and accelerating topsoil erosion and biodiversity loss in Ethiopia.",
    70: "The Green Legacy Initiative in Ethiopia is an ambitious national afforestation and reforestation initiative designed to combat climate change, restore degraded landscapes, and enhance soil water retention.",
    71: "The human circulatory system is a closed double-circulatory circuit comprising the pulmonary circuit (to lungs) and systemic circuit (to body organs).",
    72: "Arteries possess thick, elastic muscular walls to withstand the high systolic pressure of blood pumped directly from the ventricles.",
    73: "Veins feature wider lumens, thinner walls, and one-way pocket valves to ensure unidirectional venous return of blood to the heart against gravity.",
    74: "Capillaries are microscopic, single-endothelial-cell thick vessels where metabolic nutrient and gas exchange occurs between blood and interstitial tissue fluid.",
    75: "Red blood cells (erythrocytes) are biconcave, anucleated discs packed with iron-containing hemoglobin specialized for oxygen transport.",
    76: "White blood cells (leukocytes) are nucleated immune defense cells comprising granulocytes (neutrophils, eosinophils, basophils) and agranulocytes (lymphocytes, monocytes).",
    77: "Platelets (thrombocytes) are cell fragments derived from bone marrow megakaryocytes that initiate the blood clotting cascade to stop hemorrhage.",
    78: "The human respiratory system conducts gas exchange via alveoli, tiny thin-walled air sacs enveloped by pulmonary capillaries that maximize surface area.",
    79: "Inhalation is an active process driven by contraction and flattening of the diaphragm and outward movement of external intercostal muscles, lowering thoracic pressure.",
    80: "The human central nervous system consists of the brain and the spinal cord, coordinating sensory perception and motor effector responses.",
    81: "Point mutations in DNA involve single base-pair substitutions (missense, nonsense, or silent), insertions, or deletions that alter codons.",
    82: "A sensory neuron (afferent) transmits nerve impulses from peripheral sensory receptors toward the central nervous system.",
    83: "Motor neurons (efferent) conduct action potentials from the central nervous system outward to peripheral effectors (muscles and glands).",
    84: "The resting membrane potential of a neuron (~ -70 mV) is maintained primarily by active Na+/K+ ATPase pumps that transport 3 Na+ out for every 2 K+ pumped inward.",
    85: "An action potential is generated when membrane depolarization reaches the threshold potential (~ -55 mV), triggering rapid influx of Na+ through voltage-gated sodium channels.",
    86: "Synaptic neurotransmission occurs when an action potential triggers calcium influx into the axon terminal, causing exocytosis of neurotransmitters across the synaptic cleft.",
    87: "The human endocrine system secretes chemical messenger hormones directly into the bloodstream to regulate target organ homeostasis and development.",
    88: "Insulin (secreted by pancreatic beta cells) stimulates cellular glucose uptake and glycogenesis in liver and skeletal muscles, lowering blood sugar levels.",
    89: "Glucagon (secreted by pancreatic alpha cells) stimulates hepatic glycogenolysis and gluconeogenesis, elevating blood glucose concentration during fasting.",
    90: "The path of light through the human eye follows: Cornea → Aqueous humor → Pupil aperture → Lens → Vitreous humor → Photoreceptor retina → Optic nerve.",
    91: "The functional filtration unit of the human kidney is the nephron, numbering approximately one million per renal organ.",
    92: "Ultrafiltration occurs in the glomerulus under high hydrostatic pressure, forcing water and small solutes through fenestrated capillaries into Bowman's capsule.",
    93: "Selective tubular reabsorption takes place predominantly in the proximal convoluted tubule (PCT), returning all glucose, amino acids, and water to peritubular capillaries.",
    94: "Antidiuretic hormone (ADH / vasopressin), released by the posterior pituitary, inserts aquaporin water channels into the collecting ducts to increase water reabsorption.",
    95: "Aldosterone, synthesized by the adrenal cortex, stimulates distal tubule Na+ reabsorption and K+ excretion, regulating blood volume and arterial blood pressure.",
    96: "Bacterial pathogens replicate via binary fission and can cause human infectious diseases by producing exotoxins or cell wall endotoxins.",
    97: "Koch's postulates are four criteria established by Robert Koch to scientifically prove that a specific micro-organism is the causative agent of an infectious disease.",
    98: "Vaccines induce active artificial immunity by introducing attenuated pathogens or antigen subunits to stimulate memory B and T lymphocyte production.",
    99: "Antibiotics are chemical compounds that selectively kill or inhibit bacteria by disrupting bacterial cell wall synthesis (penicillin) or bacterial ribosomes, without harming host cells.",
    100: "Community afforestation, watershed management, and soil terracing are traditional and modern agroecological practices in Ethiopia that preserve native biodiversity and promote sustainability."
}

# Apply explanations
for q in questions_2017:
    num = q["questionNumber"]
    if num in explanations_2017:
        q["explanation"] = explanations_2017[num]

# Write updated biology.ts
bio_file_content = '''import { Question } from "../../types";
import { BIOLOGY_2018_QUESTIONS } from "./biology2018";

export const BIOLOGY_2017_QUESTIONS: Question[] = ''' + json.dumps(questions_2017, indent=2) + ''';

export const BIOLOGY_QUESTIONS: Question[] = [
  ...BIOLOGY_2017_QUESTIONS,
  ...BIOLOGY_2018_QUESTIONS,
];
'''

with open('src/data/questions/biology.ts', 'w') as f:
    f.write(bio_file_content)

print("Updated biology.ts with rich 2017 explanations and merged 2018 questions.")
