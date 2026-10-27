# Python script to generate enhanced DiagramViewer.tsx

diagram_viewer_code = '''import React from 'react';

interface DiagramViewerProps {
  diagramType?: string;
  diagramSvg?: string;
  imageUrl?: string;
}

export const DiagramViewer: React.FC<DiagramViewerProps> = ({ diagramType, diagramSvg, imageUrl }) => {
  if (imageUrl) {
    return (
      <div className="my-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex flex-col items-center">
        <img
          src={imageUrl}
          alt="Exam question illustration"
          className="max-h-72 max-w-full rounded-lg object-contain shadow-2xs"
          loading="lazy"
        />
        <span className="text-[11px] text-slate-500 font-semibold mt-1.5 text-center">
          Official Examination Reference Figure
        </span>
      </div>
    );
  }

  if (diagramSvg) {
    return (
      <div
        className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: diagramSvg }}
      />
    );
  }

  if (!diagramType) return null;

  switch (diagramType) {
    // 1. Human Heart (Biology 2017 Q10 & 2018 Q20)
    case 'human-heart':
    case 'bio-heart-anatomy':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-64 max-w-full" viewBox="0 0 320 260" fill="none">
            {/* Heart Silhouette */}
            <path
              d="M160 50 C130 15 50 15 50 90 C50 155 160 235 160 235 C160 235 270 155 270 90 C270 15 190 15 160 50 Z"
              fill="#ffebee"
              stroke="#e53935"
              strokeWidth="2.5"
            />
            {/* Vena Cava / Pulmonary Artery */}
            <path d="M110 10 L110 70 M130 10 L130 60 M180 10 L180 70" stroke="#1976d2" strokeWidth="6" strokeLinecap="round" />
            {/* Aorta Arch (Distributes oxygenated blood to the body) */}
            <path d="M150 70 C150 25 210 25 210 70" stroke="#c62828" strokeWidth="8" fill="none" />
            <text x="220" y="45" fill="#c62828" fontSize="12" fontWeight="bold">Aorta (6)</text>
            {/* Right Atrium (1) */}
            <rect x="70" y="75" width="50" height="40" rx="8" fill="#bbdefb" stroke="#1976d2" strokeWidth="1.5" />
            <text x="88" y="100" fill="#0d47a1" fontSize="16" fontWeight="bold">1</text>
            <text x="45" y="65" fill="#424242" fontSize="9">Right Atrium</text>
            {/* Right Ventricle (10) */}
            <path d="M75 130 L135 130 L135 195 L80 160 Z" fill="#90caf9" stroke="#1976d2" strokeWidth="1.5" />
            <text x="98" y="165" fill="#0d47a1" fontSize="16" fontWeight="bold">10</text>
            <text x="40" y="210" fill="#424242" fontSize="9">Right Ventricle</text>
            {/* Left Atrium */}
            <rect x="190" y="75" width="50" height="40" rx="8" fill="#ffcdd2" stroke="#c62828" strokeWidth="1.5" />
            <text x="210" y="100" fill="#b71c1c" fontSize="16" fontWeight="bold">LA</text>
            {/* Left Ventricle (9) */}
            <path d="M165 130 L225 130 L205 195 L165 195 Z" fill="#ef9a9a" stroke="#c62828" strokeWidth="3" />
            <text x="185" y="165" fill="#b71c1c" fontSize="16" fontWeight="bold">9</text>
            <text x="235" y="165" fill="#424242" fontSize="9">Left Ventricle</text>
            {/* Pulmonary veins (6) */}
            <rect x="250" y="90" width="30" height="10" fill="#c62828" rx="2" />
            <rect x="250" y="105" width="30" height="10" fill="#c62828" rx="2" />
            <text x="285" y="103" fill="#c62828" fontSize="10">6</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Structure and Circulation of the Human Heart
          </span>
        </div>
      );

    // 2. Human Excretory System (Biology 2018 Q73)
    case 'bio-excretory-system':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-64 max-w-full" viewBox="0 0 240 240" fill="none">
            {/* Kidneys */}
            <path d="M70 70 C50 60 40 85 50 105 C60 120 75 110 70 70 Z" fill="#8d6e63" stroke="#4e342e" strokeWidth="2" />
            <path d="M170 70 C190 60 200 85 190 105 C180 120 165 110 170 70 Z" fill="#8d6e63" stroke="#4e342e" strokeWidth="2" />
            <text x="25" y="90" fill="#4e342e" fontSize="10" fontWeight="bold">Right Kidney</text>
            <text x="185" y="90" fill="#4e342e" fontSize="10" fontWeight="bold">Left Kidney</text>
            {/* Vena Cava and Aorta in center */}
            <line x1="110" y1="40" x2="110" y2="180" stroke="#1565c0" strokeWidth="4" />
            <line x1="125" y1="40" x2="125" y2="180" stroke="#c62828" strokeWidth="4" />
            {/* Ureters (M) */}
            <path d="M68 95 C90 130 95 155 105 180" stroke="#f57f17" strokeWidth="3" fill="none" />
            <path d="M172 95 C150 130 145 155 135 180" stroke="#f57f17" strokeWidth="3" fill="none" />
            {/* Pointer to Ureter labeled M */}
            <line x1="45" y1="135" x2="85" y2="135" stroke="#d32f2f" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="20" y="140" fill="#d32f2f" fontSize="18" fontWeight="bold">M</text>
            {/* Urinary Bladder */}
            <ellipse cx="120" cy="195" rx="22" ry="16" fill="#ffe082" stroke="#f57f17" strokeWidth="2" />
            <text x="100" y="198" fill="#e65100" fontSize="9" fontWeight="bold">Bladder</text>
            {/* Urethra */}
            <line x1="120" y1="211" x2="120" y2="230" stroke="#f57f17" strokeWidth="3" />
            <text x="125" y="226" fill="#555" fontSize="8">Urethra</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Human Urinary/Excretory System (M = Ureter)
          </span>
        </div>
      );

    // 3. Human Ear Anatomy (Biology 2018 Q90)
    case 'bio-ear-anatomy':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-52 max-w-full" viewBox="0 0 280 180" fill="none">
            {/* Outer Ear (Pinna) */}
            <path d="M30 40 C10 60 10 110 30 140 C45 160 55 140 45 120 C35 100 45 60 30 40 Z" fill="#ffccbc" stroke="#d84315" strokeWidth="2" />
            <text x="10" y="30" fill="#d84315" fontSize="10" fontWeight="bold">Pinna</text>
            {/* Auditory Canal (1) */}
            <path d="M45 85 L120 90 L120 105 L45 100 Z" fill="#ffe0b2" stroke="#e65100" strokeWidth="1.5" />
            <line x1="120" y1="140" x2="85" y2="105" stroke="#d32f2f" strokeWidth="2" />
            <text x="125" y="150" fill="#d32f2f" fontSize="18" fontWeight="bold">1</text>
            <text x="60" y="125" fill="#e65100" fontSize="9">Ear canal (1)</text>
            {/* Tympanic Membrane (Eardrum) */}
            <ellipse cx="122" cy="98" rx="3" ry="12" fill="#b0bec5" stroke="#37474f" strokeWidth="2" />
            {/* Ossicles (Malleus, Incus, Stapes) */}
            <line x1="125" y1="95" x2="145" y2="85" stroke="#5d4037" strokeWidth="3" />
            <line x1="145" y1="85" x2="155" y2="92" stroke="#5d4037" strokeWidth="3" />
            {/* Semicircular Canals */}
            <circle cx="170" cy="70" r="14" stroke="#43a047" strokeWidth="3" fill="none" />
            <circle cx="180" cy="65" r="14" stroke="#43a047" strokeWidth="3" fill="none" />
            {/* Cochlea */}
            <path d="M175 100 C195 100 215 115 210 135 C205 150 180 155 170 140 C160 130 170 115 185 120" stroke="#0288d1" strokeWidth="4" fill="none" />
            <text x="215" y="140" fill="#0288d1" fontSize="10" fontWeight="bold">Cochlea</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Structure of the Human Ear (1 = Auditory Canal)
          </span>
        </div>
      );

    // 4. Contact Process for Sulfuric Acid (Chemistry 2018 Q29)
    case 'chem-contact-process':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-48 max-w-full" viewBox="0 0 340 180" fill="none">
            {/* Furnace (A) */}
            <rect x="20" y="70" width="55" height="70" rx="4" fill="#ffcdd2" stroke="#c62828" strokeWidth="2" />
            <text x="42" y="105" fill="#b71c1c" fontSize="16" fontWeight="bold">A</text>
            <text x="22" y="60" fill="#c62828" fontSize="9" fontWeight="bold">S + O₂ Furnace</text>
            {/* Arrow A -> B: SO2 */}
            <line x1="75" y1="95" x2="115" y2="95" stroke="#37474f" strokeWidth="2" />
            <text x="85" y="88" fill="#37474f" fontSize="10" fontWeight="bold">SO₂</text>
            {/* Converter (B) */}
            <rect x="115" y="50" width="60" height="90" rx="4" fill="#e1bee7" stroke="#6a1b9a" strokeWidth="2" />
            <text x="138" y="95" fill="#4a148c" fontSize="16" fontWeight="bold">B</text>
            <text x="117" y="40" fill="#6a1b9a" fontSize="8" fontWeight="bold">V₂O₅ Converter</text>
            {/* Arrow B -> C: SO3 */}
            <line x1="175" y1="85" x2="225" y2="85" stroke="#37474f" strokeWidth="2" />
            <text x="188" y="78" fill="#37474f" fontSize="10" fontWeight="bold">SO₃</text>
            {/* Absorption Tower (C) */}
            <rect x="225" y="40" width="65" height="100" rx="4" fill="#c8e6c9" stroke="#2e7d32" strokeWidth="2" />
            <text x="250" y="90" fill="#1b5e20" fontSize="16" fontWeight="bold">C</text>
            <text x="215" y="30" fill="#2e7d32" fontSize="8" fontWeight="bold">Absorption (Oleum)</text>
            {/* Product Out */}
            <line x1="290" y1="120" x2="330" y2="120" stroke="#2e7d32" strokeWidth="3" />
            <text x="295" y="112" fill="#1b5e20" fontSize="10" fontWeight="bold">H₂SO₄</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Industrial Contact Process (A: SO₂, B: SO₃, C: H₂SO₄)
          </span>
        </div>
      );

    // 5. Daniell Cell / Voltaic Cell (Chemistry 2018 Q50)
    case 'chem-voltaic-cell':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-52 max-w-full" viewBox="0 0 320 200" fill="none">
            {/* Left Beaker: ZnSO4 */}
            <rect x="25" y="80" width="80" height="90" rx="4" fill="#e0f7fa" stroke="#00838f" strokeWidth="2" />
            <rect x="50" y="55" width="16" height="85" fill="#78909c" stroke="#37474f" strokeWidth="1.5" />
            <text x="52" y="50" fill="#37474f" fontSize="11" fontWeight="bold">Zn (A)</text>
            <text x="35" y="150" fill="#006064" fontSize="9">1.0 M ZnSO₄</text>
            {/* Right Beaker: CuSO4 */}
            <rect x="195" y="80" width="80" height="90" rx="4" fill="#bbdefb" stroke="#1565c0" strokeWidth="2" />
            <rect x="220" y="55" width="16" height="85" fill="#d84315" stroke="#bf360c" strokeWidth="1.5" />
            <text x="222" y="50" fill="#bf360c" fontSize="12" fontWeight="bold">B (Cu)</text>
            <text x="205" y="150" fill="#0d47a1" fontSize="9">1.0 M CuSO₄</text>
            {/* Salt Bridge */}
            <path d="M85 105 L85 65 L215 65 L215 105" stroke="#b0bec5" strokeWidth="10" fill="none" strokeLinecap="round" />
            <text x="125" y="60" fill="#455a64" fontSize="9" fontWeight="bold">Salt Bridge (KCl)</text>
            {/* Wires and Voltmeter */}
            <line x1="58" y1="55" x2="58" y2="25" stroke="#263238" strokeWidth="2" />
            <line x1="58" y1="25" x2="135" y2="25" stroke="#263238" strokeWidth="2" />
            <circle cx="150" cy="25" r="15" fill="#ffffff" stroke="#263238" strokeWidth="2" />
            <text x="142" y="29" fill="#d32f2f" fontSize="10" fontWeight="bold">1.10V</text>
            <line x1="165" y1="25" x2="228" y2="25" stroke="#263238" strokeWidth="2" />
            <line x1="228" y1="25" x2="228" y2="55" stroke="#263238" strokeWidth="2" />
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Zn-Cu Galvanic Cell (Electrode B is the Copper Cathode)
          </span>
        </div>
      );

    // 6. Copper Electrolytic Refining (Chemistry 2018 Q16)
    case 'chem-copper-refining':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-48 max-w-full" viewBox="0 0 280 180" fill="none">
            {/* Tank */}
            <rect x="30" y="50" width="220" height="110" rx="4" fill="#e1f5fe" stroke="#0288d1" strokeWidth="2" />
            <text x="40" y="80" fill="#0277bd" fontSize="9">CuSO₄ electrolyte (A)</text>
            {/* Pure Copper Cathode (-) on left */}
            <rect x="70" y="35" width="12" height="95" fill="#ffab91" stroke="#d84315" strokeWidth="1.5" />
            <text x="50" y="30" fill="#d84315" fontSize="10" fontWeight="bold">Cathode (-)</text>
            {/* Impure Copper Anode (+) on right */}
            <rect x="190" y="35" width="22" height="95" fill="#8d6e63" stroke="#4e342e" strokeWidth="1.5" />
            <text x="180" y="30" fill="#4e342e" fontSize="10" fontWeight="bold">Anode (+)</text>
            {/* Anode Mud C at bottom of right side */}
            <ellipse cx="201" cy="150" rx="18" ry="6" fill="#37474f" />
            <line x1="240" y1="135" x2="210" y2="148" stroke="#d32f2f" strokeWidth="2" />
            <text x="245" y="138" fill="#d32f2f" fontSize="14" fontWeight="bold">C (Anode mud)</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Electrolytic Refining of Copper (C = Anode Mud)
          </span>
        </div>
      );

    // 7. Reaction Rate Tangent Curve (Chemistry 2018 Q48)
    case 'chem-rate-graph':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-48 max-w-full" viewBox="0 0 250 180" fill="none">
            {/* Axes */}
            <line x1="40" y1="20" x2="40" y2="140" stroke="#263238" strokeWidth="2" />
            <line x1="40" y1="140" x2="230" y2="140" stroke="#263238" strokeWidth="2" />
            <text x="10" y="70" fill="#263238" fontSize="12" fontWeight="bold">[D]</text>
            <text x="120" y="160" fill="#263238" fontSize="11" fontWeight="bold">Time (s)</text>
            {/* Smooth decay curve */}
            <path d="M45 35 Q85 100 215 130" stroke="#1565c0" strokeWidth="3" fill="none" />
            {/* Point A */}
            <circle cx="70" cy="65" r="4" fill="#d32f2f" />
            <text x="75" y="60" fill="#d32f2f" fontSize="14" fontWeight="bold">A</text>
            <line x1="50" y1="40" x2="90" y2="90" stroke="#d32f2f" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Point B */}
            <circle cx="150" cy="115" r="4" fill="#2e7d32" />
            <text x="155" y="110" fill="#2e7d32" fontSize="14" fontWeight="bold">B</text>
            <line x1="125" y1="110" x2="175" y2="120" stroke="#2e7d32" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Reaction Rate of Reactant D (Slope at A &gt; Slope at B)
          </span>
        </div>
      );

    // 8. PET Condensation Polymer (Chemistry 2018 Q36)
    case 'chem-pet-polymer':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <div className="bg-white p-3 rounded-lg border border-slate-300 font-mono text-sm sm:text-base font-bold text-slate-900 tracking-wide text-center">
            HO — [ CH₂ — CH₂ — O — C(=O) — (C₆H₄) — C(=O) ]_n — OH
          </div>
          <span className="text-[11px] text-slate-500 font-semibold mt-1.5">
            Figure: Polyethylene terephthalate (PET) Condensation Structure
          </span>
        </div>
      );

    // 9. NPN Transistor Schematic (Physics 2018 Q14)
    case 'phys-transistor-npn':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-48 h-48 max-w-full" viewBox="0 0 160 160" fill="none">
            {/* Outer Circle */}
            <circle cx="80" cy="80" r="40" stroke="#263238" strokeWidth="2.5" fill="#ffffff" />
            {/* Base Bar */}
            <line x1="65" y1="55" x2="65" y2="105" stroke="#263238" strokeWidth="4" />
            {/* Base Terminal */}
            <line x1="30" y1="80" x2="65" y2="80" stroke="#263238" strokeWidth="2.5" />
            <text x="5" y="84" fill="#263238" fontSize="11" fontWeight="bold">Base</text>
            {/* Collector Lead */}
            <line x1="65" y1="65" x2="95" y2="45" stroke="#263238" strokeWidth="2.5" />
            <line x1="95" y1="45" x2="120" y2="30" stroke="#263238" strokeWidth="2.5" />
            <text x="100" y="20" fill="#263238" fontSize="11" fontWeight="bold">Collector</text>
            {/* Emitter Lead with Arrow pointing OUTWARDS */}
            <line x1="65" y1="95" x2="95" y2="115" stroke="#263238" strokeWidth="2.5" />
            <polygon points="90,110 97,117 88,118" fill="#d32f2f" />
            <line x1="95" y1="115" x2="120" y2="130" stroke="#263238" strokeWidth="2.5" />
            <text x="100" y="145" fill="#263238" fontSize="11" fontWeight="bold">Emitter</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Correct NPN Bipolar Junction Transistor Symbol (Option A)
          </span>
        </div>
      );

    // 10. Logic Gate Circuit (Physics 2018 Q11)
    case 'phys-logic-gate':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-36 max-w-full" viewBox="0 0 280 120" fill="none">
            {/* Inputs A and B */}
            <text x="15" y="45" fill="#263238" fontSize="14" fontWeight="bold">A</text>
            <text x="15" y="85" fill="#263238" fontSize="14" fontWeight="bold">B</text>
            <line x1="30" y1="40" x2="90" y2="40" stroke="#263238" strokeWidth="2" />
            <line x1="30" y1="80" x2="90" y2="80" stroke="#263238" strokeWidth="2" />
            {/* OR Gate */}
            <path d="M80 30 Q110 60 80 90 Q120 90 145 60 Q120 30 80 30 Z" fill="#e0f2f1" stroke="#00897b" strokeWidth="2" />
            <text x="95" y="64" fill="#00695c" fontSize="10" fontWeight="bold">OR</text>
            {/* Line from OR to NAND */}
            <line x1="145" y1="60" x2="175" y2="60" stroke="#263238" strokeWidth="2" />
            {/* Input B branch to NAND */}
            <line x1="55" y1="80" x2="55" y2="105" stroke="#263238" strokeWidth="2" />
            <line x1="55" y1="105" x2="175" y2="105" stroke="#263238" strokeWidth="2" />
            <line x1="175" y1="105" x2="175" y2="80" stroke="#263238" strokeWidth="2" />
            {/* NAND Gate */}
            <path d="M175 45 L200 45 A18 18 0 0 1 200 85 L175 85 Z" fill="#ffebee" stroke="#c62828" strokeWidth="2" />
            <circle cx="222" cy="65" r="4" stroke="#c62828" strokeWidth="2" fill="#ffffff" />
            <line x1="226" y1="65" x2="255" y2="65" stroke="#263238" strokeWidth="2" />
            <text x="260" y="70" fill="#263238" fontSize="14" fontWeight="bold">C</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Logic Circuit (OR Gate + NAND Gate)
          </span>
        </div>
      );

    // 11. Water Barrel Projectile (Physics 2018 Q25)
    case 'phys-barrel-projectile':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-52 max-w-full" viewBox="0 0 250 190" fill="none">
            {/* Barrel */}
            <rect x="30" y="30" width="60" height="130" rx="6" fill="#cfd8dc" stroke="#37474f" strokeWidth="2.5" />
            {/* Total height H */}
            <line x1="100" y1="30" x2="100" y2="160" stroke="#1565c0" strokeWidth="1.5" />
            <text x="105" y="95" fill="#1565c0" fontSize="12" fontWeight="bold">H</text>
            {/* Hole at height h */}
            <rect x="85" y="80" width="8" height="6" fill="#d32f2f" />
            <line x1="12" y1="80" x2="12" y2="160" stroke="#d32f2f" strokeWidth="1.5" />
            <text x="2" y="125" fill="#d32f2f" fontSize="12" fontWeight="bold">h</text>
            {/* Water parabolic trajectory */}
            <path d="M90 83 Q150 85 200 160" stroke="#0288d1" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />
            <text x="110" y="75" fill="#0288d1" fontSize="12" fontWeight="bold">v</text>
            {/* Ground Line & Range x */}
            <line x1="20" y1="160" x2="230" y2="160" stroke="#263238" strokeWidth="2" />
            <line x1="90" y1="175" x2="200" y2="175" stroke="#2e7d32" strokeWidth="1.5" />
            <text x="140" y="188" fill="#2e7d32" fontSize="12" fontWeight="bold">x</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Projectile Range of Spilled Water: x = v√(2h / g)
          </span>
        </div>
      );

    // 12. Block and Tackle Pulley System (Physics 2018 Q54)
    case 'phys-pulley-system':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-52 h-64 max-w-full" viewBox="0 0 180 230" fill="none">
            {/* Ceiling */}
            <line x1="40" y1="15" x2="140" y2="15" stroke="#263238" strokeWidth="3" />
            {/* Top Fixed Pulleys (2) */}
            <circle cx="80" cy="40" r="14" stroke="#37474f" strokeWidth="2" fill="#eceff1" />
            <circle cx="100" cy="40" r="14" stroke="#37474f" strokeWidth="2" fill="#eceff1" />
            {/* Bottom Movable Pulleys (2) */}
            <circle cx="80" cy="130" r="14" stroke="#37474f" strokeWidth="2" fill="#eceff1" />
            <circle cx="100" cy="130" r="14" stroke="#37474f" strokeWidth="2" fill="#eceff1" />
            {/* 4 Supporting Ropes */}
            <line x1="66" y1="40" x2="66" y2="130" stroke="#1565c0" strokeWidth="2" />
            <line x1="86" y1="40" x2="86" y2="130" stroke="#1565c0" strokeWidth="2" />
            <line x1="94" y1="40" x2="94" y2="130" stroke="#1565c0" strokeWidth="2" />
            <line x1="114" y1="40" x2="114" y2="130" stroke="#1565c0" strokeWidth="2" />
            {/* Weight 400N */}
            <rect x="65" y="160" width="50" height="35" rx="3" fill="#cfd8dc" stroke="#263238" strokeWidth="2" />
            <text x="70" y="182" fill="#263238" fontSize="10" fontWeight="bold">Weight = 400 N</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Compound Pulley System with Mechanical Advantage = 4
          </span>
        </div>
      );

    // 13. Bar Magnets Magnetic Lines (Physics 2018 Q56)
    case 'phys-bar-magnets':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-32 max-w-full" viewBox="0 0 320 100" fill="none">
            {/* Left Magnet Pole L (North) */}
            <rect x="20" y="25" width="80" height="50" fill="#ffcdd2" stroke="#c62828" strokeWidth="2" />
            <text x="80" y="55" fill="#b71c1c" fontSize="16" fontWeight="bold">L</text>
            {/* Right Magnet Pole R (South) */}
            <rect x="220" y="25" width="80" height="50" fill="#bbdefb" stroke="#1565c0" strokeWidth="2" />
            <text x="230" y="55" fill="#0d47a1" fontSize="16" fontWeight="bold">R</text>
            {/* Field lines flowing L -> R */}
            <path d="M100 35 C140 15 180 15 220 35" stroke="#37474f" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M100 50 L220 50" stroke="#37474f" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M100 65 C140 85 180 85 220 65" stroke="#37474f" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Magnetic Field Lines from North Pole (L) to South Pole (R)
          </span>
        </div>
      );

    // 14. Vector Polygon AB + CD + BC = AD (Maths 2018 Q10)
    case 'math-vector-polygon':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-48 max-w-full" viewBox="0 0 280 160" fill="none">
            {/* Point A */}
            <circle cx="210" cy="120" r="4" fill="#263238" />
            <text x="220" y="125" fill="#263238" fontSize="14" fontWeight="bold">A</text>
            {/* Point B */}
            <circle cx="230" cy="40" r="4" fill="#263238" />
            <text x="240" y="45" fill="#263238" fontSize="14" fontWeight="bold">B</text>
            {/* Point C */}
            <circle cx="80" cy="130" r="4" fill="#263238" />
            <text x="70" y="145" fill="#263238" fontSize="14" fontWeight="bold">C</text>
            {/* Point D */}
            <circle cx="60" cy="45" r="4" fill="#263238" />
            <text x="45" y="45" fill="#263238" fontSize="14" fontWeight="bold">D</text>
            {/* Directed Vectors */}
            <line x1="210" y1="120" x2="230" y2="40" stroke="#1565c0" strokeWidth="2.5" />
            <line x1="230" y1="40" x2="80" y2="130" stroke="#2e7d32" strokeWidth="2.5" strokeDasharray="4 3" />
            <line x1="80" y1="130" x2="60" y2="45" stroke="#e65100" strokeWidth="2.5" />
            <line x1="210" y1="120" x2="60" y2="45" stroke="#d32f2f" strokeWidth="2.5" />
            <text x="140" y="70" fill="#d32f2f" fontSize="13" fontWeight="bold">AD (Resultant)</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Vector Polygon Addition: AB + BC + CD = AD
          </span>
        </div>
      );

    // 15. Cubic Polynomial f(x) = x³ - x (Maths 2018 Q17)
    case 'math-cubic-graph':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-52 max-w-full" viewBox="0 0 240 180" fill="none">
            {/* Axes */}
            <line x1="20" y1="90" x2="220" y2="90" stroke="#263238" strokeWidth="2" />
            <line x1="120" y1="20" x2="120" y2="160" stroke="#263238" strokeWidth="2" />
            <text x="225" y="94" fill="#263238" fontSize="11" fontWeight="bold">x</text>
            <text x="125" y="25" fill="#263238" fontSize="11" fontWeight="bold">y</text>
            {/* Intercepts */}
            <text x="75" y="105" fill="#263238" fontSize="10">-1</text>
            <text x="160" y="105" fill="#263238" fontSize="10">1</text>
            {/* Cubic S-curve */}
            <path d="M50 160 C70 90 75 70 85 70 C100 70 110 90 120 90 C130 90 140 110 155 110 C165 110 170 90 190 20" stroke="#00897b" strokeWidth="3" fill="none" />
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Graph of Cubic Polynomial f(x) = x³ - x
          </span>
        </div>
      );

    // 16. Right-Angled Triangle Altitude (Maths 2018 Q19)
    case 'math-right-triangle':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-48 max-w-full" viewBox="0 0 240 160" fill="none">
            {/* Triangle ABC with right angle at B */}
            <polygon points="50,20 50,130 200,130" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2.5" />
            <text x="40" y="20" fill="#2e7d32" fontSize="14" fontWeight="bold">A</text>
            <text x="35" y="145" fill="#2e7d32" fontSize="14" fontWeight="bold">B</text>
            <text x="205" y="145" fill="#2e7d32" fontSize="14" fontWeight="bold">C</text>
            {/* Altitude BD to hypotenuse AC */}
            <line x1="50" y1="130" x2="115" y2="68" stroke="#d32f2f" strokeWidth="2" />
            <text x="120" y="65" fill="#d32f2f" fontSize="14" fontWeight="bold">D</text>
            <text x="90" y="110" fill="#d32f2f" fontSize="11" fontWeight="bold">BD = 2.4 cm</text>
            <text x="110" y="145" fill="#37474f" fontSize="10">BC = 4 cm</text>
            <text x="145" y="45" fill="#37474f" fontSize="10">AC = 5 cm</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Right Triangle with Altitude BD = (3 × 4) / 5 = 2.4 cm
          </span>
        </div>
      );

    // 17. Existing cases
    case 'mutation-dna':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <div className="grid grid-cols-2 gap-4 text-center max-w-sm w-full">
            <div className="bg-white p-3 rounded-xl border border-slate-300">
              <div className="text-[11px] font-bold text-slate-500 mb-1">Original Sequence</div>
              <div className="font-mono text-xs font-bold text-slate-800 tracking-wider">
                GAC GGG <span className="text-blue-600 bg-blue-50 px-1 rounded">ATT</span> GAG GAG
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                Asp • Gly • <strong className="text-blue-700">Ile</strong> • Glu • Glu
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-rose-300">
              <div className="text-[11px] font-bold text-rose-600 mb-1">Mutated Sequence</div>
              <div className="font-mono text-xs font-bold text-slate-800 tracking-wider">
                GAC GGG <span className="text-rose-600 bg-rose-50 px-1 rounded">ATG</span> GAG GAG
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                Asp • Gly • <strong className="text-rose-700">Met</strong> • Glu • Glu
              </div>
            </div>
          </div>
          <span className="text-[11px] text-slate-500 font-semibold mt-2">
            Figure: Nucleotide sequence point mutation (ATT → ATG substitution)
          </span>
        </div>
      );

    case 'biomass-pyramid':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-40 max-w-full" viewBox="0 0 240 140" fill="none">
            <rect x="95" y="15" width="50" height="25" fill="#ffcdd2" stroke="#d32f2f" strokeWidth="1.5" />
            <text x="114" y="32" fill="#b71c1c" fontSize="12" fontWeight="bold">IV</text>
            <rect x="70" y="40" width="100" height="25" fill="#ffe0b2" stroke="#f57c00" strokeWidth="1.5" />
            <text x="115" y="57" fill="#e65100" fontSize="12" fontWeight="bold">III</text>
            <rect x="45" y="65" width="150" height="25" fill="#fff9c4" stroke="#fbc02d" strokeWidth="1.5" />
            <text x="116" y="82" fill="#f57f17" fontSize="12" fontWeight="bold">II</text>
            <rect x="20" y="90" width="200" height="30" fill="#c8e6c9" stroke="#388e3c" strokeWidth="1.5" />
            <text x="117" y="110" fill="#1b5e20" fontSize="14" fontWeight="bold">I</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold">
            Figure: Pyramid of Biomass (Trophic Levels I, II, III, IV)
          </span>
        </div>
      );

    case 'histogram-values':
      return (
        <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-44 max-w-full" viewBox="0 0 260 160" fill="none">
            <line x1="40" y1="20" x2="40" y2="130" stroke="#37474f" strokeWidth="2" />
            <line x1="40" y1="130" x2="240" y2="130" stroke="#37474f" strokeWidth="2" />
            <rect x="50" y="60" width="28" height="70" fill="#37474f" />
            <text x="58" y="145" fill="#37474f" fontSize="10">12</text>
            <rect x="78" y="110" width="28" height="20" fill="#546e7a" />
            <text x="86" y="145" fill="#37474f" fontSize="10">13</text>
            <rect x="106" y="110" width="28" height="20" fill="#546e7a" />
            <text x="114" y="145" fill="#37474f" fontSize="10">14</text>
            <text x="142" y="145" fill="#37474f" fontSize="10">15</text>
            <rect x="162" y="60" width="28" height="70" fill="#37474f" />
            <text x="170" y="145" fill="#37474f" fontSize="10">16</text>
            <rect x="190" y="110" width="28" height="20" fill="#546e7a" />
            <text x="198" y="145" fill="#37474f" fontSize="10">17</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Frequency Distribution Histogram
          </span>
        </div>
      );

    default:
      return null;
  }
};
'''

with open('src/components/DiagramViewer.tsx', 'w') as f:
    f.write(diagram_viewer_code)

print("Updated DiagramViewer.tsx with all 2017 & 2018 diagram components.")
