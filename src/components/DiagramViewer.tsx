import React from 'react';

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

  if (diagramSvg && diagramSvg.startsWith('<svg')) {
    return (
      <div
        className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: diagramSvg }}
      />
    );
  }

  if (diagramSvg === 'aptitude2017_bargraph_q46' || diagramType === 'aptitude2017_bargraph_q46') {
    return (
      <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
        <svg className="w-80 h-64 max-w-full" viewBox="0 0 360 250" fill="none">
          <text x="180" y="22" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
            Study Patterns of a Student (Recorded for 32 Days)
          </text>
          {/* Y Axis Grid lines */}
          {[0, 2, 4, 6, 8, 10].map((val) => {
            const y = 190 - val * 15;
            return (
              <g key={val}>
                <line x1="50" y1={y} x2="330" y2={y} stroke="#e2e8f0" strokeDasharray="2,2" />
                <text x="42" y={y + 4} textAnchor="end" fill="#64748b" fontSize="10">{val}</text>
              </g>
            );
          })}
          {/* Axes */}
          <line x1="50" y1="40" x2="50" y2="190" stroke="#334155" strokeWidth="2" />
          <line x1="50" y1="190" x2="330" y2="190" stroke="#334155" strokeWidth="2" />
          {/* Y-axis label */}
          <text x="18" y="115" fill="#475569" fontSize="11" fontWeight="600" transform="rotate(-90 18 115)" textAnchor="middle">
            Number of days
          </text>
          {/* X-axis label */}
          <text x="190" y="235" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">
            Amount of study (Hours)
          </text>

          {/* Bar 1: 2 hours -> 10 days */}
          <rect x="70" y={190 - 10 * 15} width="36" height={10 * 15} fill="#334155" rx="3" />
          <text x="88" y={190 - 10 * 15 - 5} textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">10</text>
          <text x="88" y="208" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">2 hours</text>

          {/* Bar 2: 4 hours -> 7 days */}
          <rect x="122" y={190 - 7 * 15} width="36" height={7 * 15} fill="#475569" rx="3" />
          <text x="140" y={190 - 7 * 15 - 5} textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">7</text>
          <text x="140" y="208" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">4 hours</text>

          {/* Bar 3: 6 hours -> 7 days */}
          <rect x="174" y={190 - 7 * 15} width="36" height={7 * 15} fill="#475569" rx="3" />
          <text x="192" y={190 - 7 * 15 - 5} textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">7</text>
          <text x="192" y="208" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">6 hours</text>

          {/* Bar 4: 8 hours -> 5 days */}
          <rect x="226" y={190 - 5 * 15} width="36" height={5 * 15} fill="#64748b" rx="3" />
          <text x="244" y={190 - 5 * 15 - 5} textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">5</text>
          <text x="244" y="208" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">8 hours</text>

          {/* Bar 5: 10 hours -> 3 days */}
          <rect x="278" y={190 - 3 * 15} width="36" height={3 * 15} fill="#94a3b8" rx="3" />
          <text x="296" y={190 - 3 * 15 - 5} textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">3</text>
          <text x="296" y="208" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">10 hours</text>
        </svg>
        <span className="text-[11px] text-slate-500 font-semibold mt-1">
          Figure: Students' Study Pattern Recorded for 32 Days
        </span>
      </div>
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

    // 2016 EUEE Examination Diagrams
    case 'aptitude2016_exp_q48':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-52 max-w-full" viewBox="0 0 320 200" fill="none">
            <line x1="30" y1="160" x2="300" y2="160" stroke="#334155" strokeWidth="1.5" />
            <polygon points="300,157 308,160 300,163" fill="#334155" />
            <text x="302" y="152" fill="#334155" fontSize="12" fontWeight="bold">x</text>

            <line x1="160" y1="190" x2="160" y2="20" stroke="#334155" strokeWidth="1.5" />
            <polygon points="157,20 160,12 163,20" fill="#334155" />
            <text x="168" y="24" fill="#334155" fontSize="12" fontWeight="bold">y</text>

            {/* Grid markings */}
            <text x="146" y="176" fill="#64748b" fontSize="10">0</text>
            <line x1="195" y1="157" x2="195" y2="163" stroke="#94a3b8" />
            <text x="192" y="176" fill="#64748b" fontSize="10">1</text>
            <line x1="230" y1="157" x2="230" y2="163" stroke="#94a3b8" />
            <text x="227" y="176" fill="#64748b" fontSize="10">2</text>
            <line x1="265" y1="157" x2="265" y2="163" stroke="#94a3b8" />
            <text x="262" y="176" fill="#64748b" fontSize="10">3</text>

            <line x1="125" y1="157" x2="125" y2="163" stroke="#94a3b8" />
            <text x="117" y="176" fill="#64748b" fontSize="10">-1</text>
            <line x1="90" y1="157" x2="90" y2="163" stroke="#94a3b8" />
            <text x="82" y="176" fill="#64748b" fontSize="10">-2</text>

            <line x1="157" y1="125" x2="163" y2="125" stroke="#94a3b8" />
            <text x="146" y="129" fill="#64748b" fontSize="10">1</text>
            <line x1="157" y1="90" x2="163" y2="90" stroke="#94a3b8" />
            <text x="146" y="94" fill="#64748b" fontSize="10">2</text>
            <line x1="157" y1="55" x2="163" y2="55" stroke="#94a3b8" />
            <text x="146" y="59" fill="#64748b" fontSize="10">3</text>

            {/* y = (7/5)^x exponential curve */}
            <path
              d="M 50 159 Q 120 155 160 125 T 260 50"
              stroke="#7b1fa2"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="160" cy="125" r="3.5" fill="#7b1fa2" />
            <text x="220" y="65" fill="#7b1fa2" fontSize="11" fontWeight="bold">f(x) = (7/5)ˣ</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Graph of the Exponential Function f(x) = (7/5)ˣ
          </span>
        </div>
      );

    case 'aptitude2016_table_q56':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-2xs">
          <div className="font-bold text-xs text-slate-700 mb-2 text-center uppercase tracking-wider">
            Annual Income of Five Schools (in thousands Birr)
          </div>
          <table className="w-full text-xs text-slate-800 border-collapse text-center">
            <thead>
              <tr className="bg-purple-100/70 border border-purple-200 text-purple-950 font-bold">
                <th className="p-2 text-left">Source of Income</th>
                <th className="p-2 border-l border-purple-200">P</th>
                <th className="p-2 border-l border-purple-200">Q</th>
                <th className="p-2 border-l border-purple-200">R</th>
                <th className="p-2 border-l border-purple-200">S</th>
                <th className="p-2 border-l border-purple-200">T</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-slate-200 hover:bg-slate-50">
                <td className="p-2 font-medium text-left">Tuition fees</td>
                <td className="p-2 border-l border-slate-200">120</td>
                <td className="p-2 border-l border-slate-200">60</td>
                <td className="p-2 border-l border-slate-200">210</td>
                <td className="p-2 border-l border-slate-200">90</td>
                <td className="p-2 border-l border-slate-200">120</td>
              </tr>
              <tr className="border border-slate-200 bg-slate-50/50 hover:bg-slate-50">
                <td className="p-2 font-medium text-left">Term fees</td>
                <td className="p-2 border-l border-slate-200">24</td>
                <td className="p-2 border-l border-slate-200">12</td>
                <td className="p-2 border-l border-slate-200">45</td>
                <td className="p-2 border-l border-slate-200">24</td>
                <td className="p-2 border-l border-slate-200">30</td>
              </tr>
              <tr className="border border-slate-200 hover:bg-slate-50">
                <td className="p-2 font-medium text-left">Donations</td>
                <td className="p-2 border-l border-slate-200">54</td>
                <td className="p-2 border-l border-slate-200">21</td>
                <td className="p-2 border-l border-slate-200">60</td>
                <td className="p-2 border-l border-slate-200">51</td>
                <td className="p-2 border-l border-slate-200">60</td>
              </tr>
              <tr className="border border-slate-200 bg-slate-50/50 hover:bg-slate-50">
                <td className="p-2 font-medium text-left">Grants</td>
                <td className="p-2 border-l border-slate-200">60</td>
                <td className="p-2 border-l border-slate-200">54</td>
                <td className="p-2 border-l border-slate-200">120</td>
                <td className="p-2 border-l border-slate-200">42</td>
                <td className="p-2 border-l border-slate-200">55</td>
              </tr>
              <tr className="border border-slate-200 hover:bg-slate-50">
                <td className="p-2 font-medium text-left">Miscellaneous</td>
                <td className="p-2 border-l border-slate-200">12</td>
                <td className="p-2 border-l border-slate-200">3</td>
                <td className="p-2 border-l border-slate-200">15</td>
                <td className="p-2 border-l border-slate-200">3</td>
                <td className="p-2 border-l border-slate-200">15</td>
              </tr>
              <tr className="border border-slate-300 bg-purple-50 font-bold text-purple-900">
                <td className="p-2 text-left">Total Income</td>
                <td className="p-2 border-l border-slate-300">270</td>
                <td className="p-2 border-l border-slate-300">150</td>
                <td className="p-2 border-l border-slate-300">450</td>
                <td className="p-2 border-l border-slate-300">210</td>
                <td className="p-2 border-l border-slate-300">280</td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    case 'maths2016_relation_q7':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-56 max-w-full" viewBox="0 0 320 220" fill="none">
            {/* Shaded Region R for x <= -1/2 */}
            <polygon points="20,20 20,200 135,110 135,110" fill="#cbd5e1" opacity="0.6" />
            {/* Axes */}
            <line x1="20" y1="120" x2="300" y2="120" stroke="#334155" strokeWidth="1.5" />
            <polygon points="300,117 308,120 300,123" fill="#334155" />
            <text x="302" y="114" fill="#334155" fontSize="12" fontWeight="bold">x</text>

            <line x1="160" y1="210" x2="160" y2="15" stroke="#334155" strokeWidth="1.5" />
            <polygon points="157,15 160,7 163,15" fill="#334155" />
            <text x="168" y="20" fill="#334155" fontSize="12" fontWeight="bold">y</text>

            {/* Line x - y + 1 = 0 => y = x + 1 */}
            <line x1="30" y1="200" x2="260" y2="40" stroke="#1e293b" strokeWidth="2" />
            <text x="210" y="55" fill="#1e293b" fontSize="10" fontWeight="bold">x - y + 1 = 0</text>

            {/* Line x + y = 0 => y = -x */}
            <line x1="30" y1="30" x2="250" y2="190" stroke="#1e293b" strokeWidth="2" />
            <text x="215" y="175" fill="#1e293b" fontSize="10" fontWeight="bold">x + y = 0</text>

            {/* Vertex Intersection (-0.5, 0.5) */}
            <circle cx="135" cy="110" r="4" fill="#0f766e" />
            <text x="70" y="115" fill="#0f766e" fontSize="16" fontWeight="bold">R</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Shaded Feasible Region of Relation R
          </span>
        </div>
      );

    case 'maths2016_linear_ineq_q13':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-56 max-w-full" viewBox="0 0 320 220" fill="none">
            {/* Shaded Feasible Region */}
            <polygon points="100,20 180,20 190,130 190,130" fill="#93c5fd" opacity="0.5" />
            {/* Axes */}
            <line x1="30" y1="130" x2="290" y2="130" stroke="#334155" strokeWidth="1.5" />
            <text x="292" y="125" fill="#334155" fontSize="12" fontWeight="bold">x</text>

            <line x1="140" y1="210" x2="140" y2="15" stroke="#334155" strokeWidth="1.5" />
            <text x="148" y="20" fill="#334155" fontSize="12" fontWeight="bold">y</text>

            {/* Line 2x + y = 4 (passes (0,4) and (2,0)) */}
            <line x1="80" y1="10" x2="210" y2="170" stroke="#1d4ed8" strokeWidth="2" />
            <text x="75" y="55" fill="#1d4ed8" fontSize="10" fontWeight="bold">2x + y = 4</text>
            <circle cx="140" cy="50" r="3.5" fill="#1d4ed8" />
            <text x="126" y="53" fill="#1d4ed8" fontSize="10">4</text>
            <circle cx="190" cy="130" r="3.5" fill="#1d4ed8" />
            <text x="187" y="145" fill="#1d4ed8" fontSize="10">2</text>

            {/* Line 3x - y = 6 (passes (2,0) and (0,-6)) */}
            <line x1="120" y1="190" x2="240" y2="20" stroke="#dc2626" strokeWidth="2" />
            <text x="215" y="45" fill="#dc2626" fontSize="10" fontWeight="bold">3x - y = 6</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: System of Linear Inequalities 2x + y ≥ 4 and 3x - y ≤ 6
          </span>
        </div>
      );

    case 'maths2016_exp_graph_q26':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-52 max-w-full" viewBox="0 0 320 200" fill="none">
            <line x1="30" y1="130" x2="290" y2="130" stroke="#334155" strokeWidth="1.5" />
            <text x="292" y="125" fill="#334155" fontSize="12" fontWeight="bold">x</text>

            <line x1="140" y1="190" x2="140" y2="15" stroke="#334155" strokeWidth="1.5" />
            <text x="148" y="20" fill="#334155" fontSize="12" fontWeight="bold">y</text>

            {/* Asymptote y = -2 */}
            <line x1="30" y1="170" x2="290" y2="170" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
            <text x="35" y="165" fill="#ef4444" fontSize="10">y = -2</text>

            {/* Exponential Curve y = 2^x - 2 */}
            <path
              d="M 50 169 Q 120 165 140 150 T 170 130 T 200 90 T 230 30"
              stroke="#2563eb"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Points: (0, -1), (1, 0), (2, 2) */}
            <circle cx="140" cy="150" r="3.5" fill="#2563eb" />
            <text x="115" y="153" fill="#2563eb" fontSize="10">(0, -1)</text>
            <circle cx="170" cy="130" r="3.5" fill="#2563eb" />
            <text x="172" y="145" fill="#2563eb" fontSize="10">(1, 0)</text>
            <circle cx="200" cy="90" r="3.5" fill="#2563eb" />
            <text x="205" y="93" fill="#2563eb" fontSize="10">(2, 2)</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Graph of f(x) = (2)ˣ - 2
          </span>
        </div>
      );

    case 'maths2016_quad_graph_q46':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-52 max-w-full" viewBox="0 0 320 200" fill="none">
            <line x1="20" y1="120" x2="300" y2="120" stroke="#334155" strokeWidth="1.5" />
            <text x="302" y="115" fill="#334155" fontSize="12" fontWeight="bold">x</text>

            <line x1="80" y1="190" x2="80" y2="20" stroke="#334155" strokeWidth="1.5" />
            <text x="88" y="25" fill="#334155" fontSize="12" fontWeight="bold">y</text>

            {/* Parabola opening downwards: Vertex at (4, 4), Intercepts at x = 2 and x = 6 */}
            <path
              d="M 100 180 Q 180 30 260 180"
              stroke="#0d9488"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Roots at x = 2 (cx = 140) and x = 6 (cx = 220) */}
            <circle cx="140" cy="120" r="4" fill="#0d9488" />
            <text x="135" y="138" fill="#0d9488" fontSize="11" fontWeight="bold">2</text>
            <circle cx="220" cy="120" r="4" fill="#0d9488" />
            <text x="217" y="138" fill="#0d9488" fontSize="11" fontWeight="bold">6</text>
            <circle cx="180" cy="65" r="4" fill="#0d9488" />
            <text x="185" y="60" fill="#0d9488" fontSize="10">(4, 4)</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Graph of Quadratic Function f(x) ≤ 0 for x ≤ 2 or x ≥ 6
          </span>
        </div>
      );

    case 'maths2016_circle_q50':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-72 max-w-full" viewBox="0 0 280 280" fill="none">
            <circle cx="140" cy="140" r="100" stroke="#334155" strokeWidth="2" fill="#f8fafc" />
            {/* Center O */}
            <circle cx="140" cy="140" r="3.5" fill="#dc2626" />
            <text x="146" y="138" fill="#dc2626" fontSize="12" fontWeight="bold">O</text>

            {/* Vertices A, B, C */}
            {/* A: top left (-60, -80) => (80, 60) */}
            {/* B: bottom (140, 240) */}
            {/* C: top right (200, 60) */}
            <polygon points="80,90 140,240 215,80" stroke="#0284c7" strokeWidth="2" fill="none" />
            <text x="60" y="90" fill="#0284c7" fontSize="14" fontWeight="bold">A</text>
            <text x="135" y="260" fill="#0284c7" fontSize="14" fontWeight="bold">B</text>
            <text x="225" y="80" fill="#0284c7" fontSize="14" fontWeight="bold">C</text>

            {/* Angle markers */}
            <text x="135" y="210" fill="#0284c7" fontSize="11" fontWeight="bold">60°</text>
            <text x="180" y="105" fill="#0284c7" fontSize="11" fontWeight="bold">40°</text>

            {/* Central radii OB and OC */}
            <line x1="140" y1="140" x2="140" y2="240" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="140" y1="140" x2="215" y2="80" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="145" y="170" fill="#dc2626" fontSize="12" fontWeight="bold">160°</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Circle Chords AB, AC, BC and Central Angle m(∠BOC) = 160°
          </span>
        </div>
      );

    case 'maths2016_secants_q57':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-56 max-w-full" viewBox="0 0 320 220" fill="none">
            <circle cx="210" cy="120" r="70" stroke="#334155" strokeWidth="2" fill="#f8fafc" />
            <circle cx="210" cy="120" r="3" fill="#64748b" />
            <text x="216" y="118" fill="#64748b" fontSize="10">O</text>

            {/* Secants from external vertex A (40, 110) */}
            <line x1="40" y1="110" x2="260" y2="70" stroke="#0f766e" strokeWidth="2" />
            <line x1="40" y1="110" x2="250" y2="185" stroke="#0f766e" strokeWidth="2" />
            <text x="25" y="115" fill="#0f766e" fontSize="14" fontWeight="bold">A</text>

            {/* Chords crossing */}
            <line x1="150" y1="145" x2="260" y2="70" stroke="#6366f1" strokeWidth="1.5" />
            <text x="138" y="155" fill="#0f766e" fontSize="12" fontWeight="bold">D</text>
            <text x="160" y="80" fill="#0f766e" fontSize="12" fontWeight="bold">E</text>
            <text x="268" y="70" fill="#0f766e" fontSize="12" fontWeight="bold">C</text>
            <text x="256" y="195" fill="#0f766e" fontSize="12" fontWeight="bold">B</text>

            <text x="235" y="88" fill="#6366f1" fontSize="10" fontWeight="bold">30°</text>
            <text x="165" y="105" fill="#d97706" fontSize="11" fontWeight="bold">50°</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Intersecting Circle Secants AB and AC with External Angle A = 20°
          </span>
        </div>
      );

    case 'chemistry2016_lewis_q3':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <div className="flex items-center gap-6 py-4 px-6 bg-slate-50 rounded-xl border border-slate-300 font-mono text-xl sm:text-2xl font-bold text-slate-900">
            <span>Mg²⁺</span>
            <div className="flex items-center gap-1">
              <span className="text-2xl">[</span>
              <div className="relative px-2">
                <span className="text-sm absolute -top-3 left-1/2 -translate-x-1/2">••</span>
                <span className="text-sm absolute -bottom-3 left-1/2 -translate-x-1/2">••</span>
                <span className="text-sm absolute -left-2 top-1/2 -translate-y-1/2">••</span>
                <span className="text-sm absolute -right-2 top-1/2 -translate-y-1/2">••</span>
                <span className="text-teal-800">O</span>
              </div>
              <span className="text-2xl">]²⁻</span>
            </div>
          </div>
          <span className="text-[11px] text-slate-500 font-semibold mt-2">
            Figure: Lewis Electron-Dot Structure of Magnesium Oxide (MgO)
          </span>
        </div>
      );

    case 'chemistry2016_cell_q12':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-56 max-w-full" viewBox="0 0 280 200" fill="none">
            {/* Beaker Container */}
            <rect x="50" y="70" width="180" height="110" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <text x="90" y="170" fill="#0369a1" fontSize="11" fontWeight="semibold">Molten / Aqueous Electrolyte</text>

            {/* Electrodes */}
            <rect x="80" y="40" width="20" height="100" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
            <text x="70" y="30" fill="#b91c1c" fontSize="11" fontWeight="bold">Anode (+)</text>

            <rect x="180" y="40" width="20" height="100" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
            <text x="170" y="30" fill="#15803d" fontSize="11" fontWeight="bold">Cathode (-)</text>

            {/* Circuit Wires and DC Power Supply */}
            <line x1="90" y1="40" x2="90" y2="15" stroke="#334155" strokeWidth="2" />
            <line x1="90" y1="15" x2="125" y2="15" stroke="#334155" strokeWidth="2" />

            <line x1="190" y1="40" x2="190" y2="15" stroke="#334155" strokeWidth="2" />
            <line x1="190" y1="15" x2="155" y2="15" stroke="#334155" strokeWidth="2" />

            {/* Battery Plates */}
            <line x1="125" y1="5" x2="125" y2="25" stroke="#b91c1c" strokeWidth="3" />
            <line x1="135" y1="10" x2="135" y2="20" stroke="#334155" strokeWidth="2" />
            <line x1="145" y1="5" x2="145" y2="25" stroke="#b91c1c" strokeWidth="3" />
            <line x1="155" y1="10" x2="155" y2="20" stroke="#334155" strokeWidth="2" />
            <text x="130" y="40" fill="#334155" fontSize="10" fontWeight="bold">DC Source</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Schematic Diagram of an Electrolytic Cell
          </span>
        </div>
      );

    case 'chemistry2016_periodic_q22':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-52 max-w-full" viewBox="0 0 320 180" fill="none">
            {/* Periodic Table Box */}
            <rect x="50" y="40" width="220" height="110" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="110" y="100" fill="#334155" fontSize="14" fontWeight="bold">Periodic Properties</text>

            {/* Top Horizontal Arrow: Increase across period */}
            <line x1="60" y1="25" x2="255" y2="25" stroke="#059669" strokeWidth="2.5" />
            <polygon points="255,21 265,25 255,29" fill="#059669" />
            <text x="135" y="18" fill="#059669" fontSize="12" fontWeight="bold">Increase</text>

            {/* Left Vertical Arrow: Decrease down group */}
            <line x1="30" y1="45" x2="30" y2="140" stroke="#dc2626" strokeWidth="2.5" />
            <polygon points="26,140 30,150 34,140" fill="#dc2626" />
            <text x="5" y="95" fill="#dc2626" fontSize="11" fontWeight="bold" transform="rotate(-90 20,95)">Decrease</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: General Periodic Trends of Electronegativity & Ionization Energy
          </span>
        </div>
      );

    case 'chemistry2016_benzene_q63':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <div className="flex items-center gap-8 py-3">
            <svg className="w-24 h-28" viewBox="0 0 100 120" fill="none">
              <polygon points="50,15 90,38 90,82 50,105 10,82 10,38" stroke="#0f766e" strokeWidth="2.5" />
              <line x1="48" y1="25" x2="82" y2="45" stroke="#0f766e" strokeWidth="2" />
              <line x1="82" y1="78" x2="48" y2="98" stroke="#0f766e" strokeWidth="2" />
              <line x1="18" y1="45" x2="18" y2="78" stroke="#0f766e" strokeWidth="2" />
            </svg>
            <span className="text-xl font-bold text-slate-400">↔</span>
            <svg className="w-24 h-28" viewBox="0 0 100 120" fill="none">
              <polygon points="50,15 90,38 90,82 50,105 10,82 10,38" stroke="#0f766e" strokeWidth="2.5" />
              <circle cx="50" cy="60" r="24" stroke="#0f766e" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
          </div>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Kekulé and Delocalized Resonance Structures of Benzene (C6H6)
          </span>
        </div>
      );

    case 'physics2016_vertical_circle_q20':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-64 h-64 max-w-full" viewBox="0 0 240 240" fill="none">
            <circle cx="120" cy="120" r="85" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" fill="#f8fafc" />
            <circle cx="120" cy="120" r="3.5" fill="#334155" />
            <text x="126" y="118" fill="#334155" fontSize="12" fontWeight="bold">O</text>

            {/* Radius Line to m */}
            <line x1="120" y1="120" x2="180" y2="60" stroke="#0284c7" strokeWidth="2" />
            <circle cx="180" cy="60" r="6" fill="#0284c7" />
            <text x="190" y="58" fill="#0284c7" fontSize="12" fontWeight="bold">m</text>

            {/* Marked Points A, B, C, D */}
            <circle cx="120" cy="35" r="4" fill="#dc2626" />
            <text x="116" y="25" fill="#dc2626" fontSize="12" fontWeight="bold">A</text>

            <circle cx="205" cy="120" r="4" fill="#dc2626" />
            <text x="215" y="124" fill="#dc2626" fontSize="12" fontWeight="bold">B</text>

            <circle cx="120" cy="205" r="4" fill="#dc2626" />
            <text x="116" y="225" fill="#dc2626" fontSize="12" fontWeight="bold">C</text>

            <circle cx="35" cy="120" r="4" fill="#dc2626" />
            <text x="18" y="124" fill="#dc2626" fontSize="12" fontWeight="bold">D</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Ball in Vertical Circular Motion (Positions A, B, C, D)
          </span>
        </div>
      );

    case 'physics2016_circuit_q29':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-48 max-w-full" viewBox="0 0 280 160" fill="none">
            {/* Battery on left */}
            <line x1="40" y1="40" x2="40" y2="70" stroke="#334155" strokeWidth="2" />
            <line x1="30" y1="70" x2="50" y2="70" stroke="#dc2626" strokeWidth="3" />
            <line x1="34" y1="80" x2="46" y2="80" stroke="#334155" strokeWidth="2" />
            <line x1="40" y1="80" x2="40" y2="120" stroke="#334155" strokeWidth="2" />

            {/* Parallel Switch branches */}
            <line x1="40" y1="40" x2="100" y2="40" stroke="#334155" strokeWidth="2" />
            <line x1="100" y1="40" x2="100" y2="25" stroke="#334155" strokeWidth="2" />
            <line x1="100" y1="40" x2="100" y2="55" stroke="#334155" strokeWidth="2" />

            {/* Switch A */}
            <circle cx="110" cy="25" r="3" fill="#334155" />
            <line x1="110" y1="25" x2="135" y2="15" stroke="#2563eb" strokeWidth="2" />
            <circle cx="140" cy="25" r="3" fill="#334155" />
            <text x="122" y="10" fill="#2563eb" fontSize="12" fontWeight="bold">A</text>

            {/* Switch B */}
            <circle cx="110" cy="55" r="3" fill="#334155" />
            <line x1="110" y1="55" x2="135" y2="45" stroke="#2563eb" strokeWidth="2" />
            <circle cx="140" cy="55" r="3" fill="#334155" />
            <text x="122" y="70" fill="#2563eb" fontSize="12" fontWeight="bold">B</text>

            <line x1="140" y1="25" x2="150" y2="25" stroke="#334155" strokeWidth="2" />
            <line x1="140" y1="55" x2="150" y2="55" stroke="#334155" strokeWidth="2" />
            <line x1="150" y1="25" x2="150" y2="55" stroke="#334155" strokeWidth="2" />
            <line x1="150" y1="40" x2="200" y2="40" stroke="#334155" strokeWidth="2" />

            {/* Lamp Y */}
            <circle cx="215" cy="40" r="14" stroke="#ca8a04" strokeWidth="2" fill="#fef08a" />
            <line x1="205" y1="30" x2="225" y2="50" stroke="#ca8a04" strokeWidth="1.5" />
            <line x1="205" y1="50" x2="225" y2="30" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="235" y="45" fill="#ca8a04" fontSize="14" fontWeight="bold">Y</text>

            {/* Return path */}
            <line x1="215" y1="54" x2="215" y2="120" stroke="#334155" strokeWidth="2" />
            <line x1="215" y1="120" x2="40" y2="120" stroke="#334155" strokeWidth="2" />
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Parallel Switches A and B with Lamp Y (Equivalent to OR gate)
          </span>
        </div>
      );

    case 'physics2016_vt_graph_q36':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-52 max-w-full" viewBox="0 0 320 200" fill="none">
            {/* Shaded Trapezoid */}
            <polygon points="50,150 50,50 170,50 250,150" fill="#fef3c7" opacity="0.7" />

            {/* Axes */}
            <line x1="40" y1="150" x2="290" y2="150" stroke="#334155" strokeWidth="2" />
            <text x="295" y="154" fill="#334155" fontSize="11" fontWeight="bold">t (s)</text>

            <line x1="50" y1="170" x2="50" y2="30" stroke="#334155" strokeWidth="2" />
            <text x="35" y="25" fill="#334155" fontSize="11" fontWeight="bold">v (m/s)</text>

            {/* Graph Profile */}
            <line x1="50" y1="50" x2="170" y2="50" stroke="#b45309" strokeWidth="3" />
            <line x1="170" y1="50" x2="250" y2="150" stroke="#b45309" strokeWidth="3" />

            <circle cx="50" cy="50" r="3.5" fill="#b45309" />
            <circle cx="170" cy="50" r="3.5" fill="#b45309" />
            <circle cx="250" cy="150" r="3.5" fill="#b45309" />

            <text x="25" y="55" fill="#334155" fontSize="11" fontWeight="bold">30</text>
            <text x="165" y="168" fill="#334155" fontSize="11" fontWeight="bold">15</text>
            <text x="245" y="168" fill="#334155" fontSize="11" fontWeight="bold">25</text>
            <text x="110" y="105" fill="#b45309" fontSize="13" fontWeight="bold">Area = 600 m East</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Velocity-Time Graph for Straight Line Motion East
          </span>
        </div>
      );

    case 'physics2016_lever_q39':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-44 max-w-full" viewBox="0 0 320 150" fill="none">
            {/* Lever Bar 1m (240px) */}
            <rect x="40" y="70" width="240" height="8" rx="2" fill="#475569" stroke="#1e293b" />

            {/* Fulcrum at 80cm from left (cx = 40 + 192 = 232) */}
            <polygon points="232,78 222,105 242,105" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
            <line x1="210" y1="105" x2="254" y2="105" stroke="#991b1b" strokeWidth="2" />

            {/* Effort 200N on Left */}
            <line x1="50" y1="20" x2="50" y2="65" stroke="#2563eb" strokeWidth="2.5" />
            <polygon points="46,65 50,73 54,65" fill="#2563eb" />
            <text x="25" y="15" fill="#2563eb" fontSize="11" fontWeight="bold">Effort = 200 N</text>
            <text x="120" y="60" fill="#475569" fontSize="11">80 cm</text>

            {/* Load 600N on Right */}
            <rect x="255" y="42" width="22" height="28" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
            <text x="240" y="32" fill="#d97706" fontSize="11" fontWeight="bold">Load = 600 N</text>
            <text x="245" y="90" fill="#475569" fontSize="11">20 cm</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: First-Class Lever System with Fulcrum at 80 cm from Effort
          </span>
        </div>
      );

    case 'physics2016_resistors_q47':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-48 max-w-full" viewBox="0 0 280 160" fill="none">
            {/* Input and Output terminals a and b */}
            <circle cx="30" cy="80" r="4" fill="#0f172a" />
            <text x="15" y="84" fill="#0f172a" fontSize="14" fontWeight="bold">a</text>
            <circle cx="250" cy="80" r="4" fill="#0f172a" />
            <text x="260" y="84" fill="#0f172a" fontSize="14" fontWeight="bold">b</text>

            {/* Vertical bus bars */}
            <line x1="30" y1="80" x2="70" y2="80" stroke="#334155" strokeWidth="2" />
            <line x1="70" y1="30" x2="70" y2="130" stroke="#334155" strokeWidth="2" />

            <line x1="210" y1="30" x2="210" y2="130" stroke="#334155" strokeWidth="2" />
            <line x1="210" y1="80" x2="250" y2="80" stroke="#334155" strokeWidth="2" />

            {/* Resistor 1 (3 kΩ) */}
            <line x1="70" y1="30" x2="110" y2="30" stroke="#334155" strokeWidth="2" />
            <rect x="110" y="20" width="60" height="20" fill="#f8fafc" stroke="#2563eb" strokeWidth="2" />
            <text x="124" y="34" fill="#2563eb" fontSize="11" fontWeight="bold">3 kΩ</text>
            <line x1="170" y1="30" x2="210" y2="30" stroke="#334155" strokeWidth="2" />

            {/* Resistor 2 (6 kΩ) */}
            <line x1="70" y1="80" x2="110" y2="80" stroke="#334155" strokeWidth="2" />
            <rect x="110" y="70" width="60" height="20" fill="#f8fafc" stroke="#2563eb" strokeWidth="2" />
            <text x="124" y="84" fill="#2563eb" fontSize="11" fontWeight="bold">6 kΩ</text>
            <line x1="170" y1="80" x2="210" y2="80" stroke="#334155" strokeWidth="2" />

            {/* Resistor 3 (2 kΩ) */}
            <line x1="70" y1="130" x2="110" y2="130" stroke="#334155" strokeWidth="2" />
            <rect x="110" y="120" width="60" height="20" fill="#f8fafc" stroke="#2563eb" strokeWidth="2" />
            <text x="124" y="134" fill="#2563eb" fontSize="11" fontWeight="bold">2 kΩ</text>
            <line x1="170" y1="130" x2="210" y2="130" stroke="#334155" strokeWidth="2" />
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Three Parallel Resistors (Effective Resistance = 1.0 kΩ)
          </span>
        </div>
      );

    case 'physics2016_compass_q49':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-72 h-64 max-w-full" viewBox="0 0 280 240" fill="none">
            {/* Wire with current pointing OUT OF PAGE (dot) */}
            <circle cx="160" cy="120" r="14" fill="#f1f5f9" stroke="#0f172a" strokeWidth="2" />
            <circle cx="160" cy="120" r="5" fill="#0f172a" />
            <text x="156" y="98" fill="#0f172a" fontSize="11" fontWeight="bold">Current ⊙</text>

            {/* Concentric field lines */}
            <circle cx="160" cy="120" r="45" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="160" cy="120" r="75" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Point P on left */}
            <circle cx="85" cy="120" r="5" fill="#dc2626" />
            <text x="65" y="124" fill="#dc2626" fontSize="14" fontWeight="bold">P</text>

            {/* Compass needle at P pointing DOWNWARD */}
            <line x1="85" y1="95" x2="85" y2="145" stroke="#dc2626" strokeWidth="2.5" />
            <polygon points="81,140 85,152 89,140" fill="#dc2626" />
            <text x="94" y="145" fill="#dc2626" fontSize="11" fontWeight="bold">B (downward)</text>

            {/* Cross compass directions */}
            <line x1="220" y1="180" x2="260" y2="180" stroke="#64748b" strokeWidth="1.5" />
            <text x="264" y="184" fill="#64748b" fontSize="10">right</text>
            <line x1="240" y1="160" x2="240" y2="200" stroke="#64748b" strokeWidth="1.5" />
            <text x="230" y="155" fill="#64748b" fontSize="10">upward</text>
            <text x="225" y="215" fill="#64748b" fontSize="10">downward</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Magnetic Field Direction Around Current-Carrying Wire at Point P
          </span>
        </div>
      );

    case 'physics2016_logic_q50':
      return (
        <div className="my-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
          <svg className="w-80 h-44 max-w-full" viewBox="0 0 320 150" fill="none">
            {/* Input lines P and Q */}
            <line x1="30" y1="35" x2="80" y2="35" stroke="#334155" strokeWidth="2" />
            <text x="15" y="39" fill="#334155" fontSize="13" fontWeight="bold">P</text>

            <line x1="30" y1="65" x2="80" y2="65" stroke="#334155" strokeWidth="2" />
            <text x="15" y="69" fill="#334155" fontSize="13" fontWeight="bold">Q</text>

            {/* Branch from Q to OR gate */}
            <circle cx="55" cy="65" r="3" fill="#334155" />
            <line x1="55" y1="65" x2="55" y2="110" stroke="#334155" strokeWidth="2" />
            <line x1="55" y1="110" x2="190" y2="110" stroke="#334155" strokeWidth="2" />

            {/* NAND Gate */}
            <path d="M 80 20 L 110 20 A 30 30 0 0 1 110 80 L 80 80 Z" stroke="#0284c7" strokeWidth="2" fill="#f0f9ff" />
            <circle cx="145" cy="50" r="5" stroke="#0284c7" strokeWidth="2" fill="#ffffff" />
            <text x="92" y="55" fill="#0284c7" fontSize="11" fontWeight="bold">NAND</text>

            {/* Output of NAND to OR gate input */}
            <line x1="150" y1="50" x2="190" y2="50" stroke="#334155" strokeWidth="2" />
            <line x1="190" y1="50" x2="190" y2="70" stroke="#334155" strokeWidth="2" />

            {/* OR Gate */}
            <path d="M 180 60 Q 200 85 180 120 Q 220 120 250 85 Q 220 60 180 60 Z" stroke="#7c3aed" strokeWidth="2" fill="#faf5ff" />
            <text x="200" y="90" fill="#7c3aed" fontSize="11" fontWeight="bold">OR</text>

            {/* Output Line */}
            <line x1="250" y1="85" x2="295" y2="85" stroke="#334155" strokeWidth="2" />
            <text x="255" y="70" fill="#334155" fontSize="11" fontWeight="bold">Output</text>
          </svg>
          <span className="text-[11px] text-slate-500 font-semibold mt-1">
            Figure: Combination of NAND Gate and OR Gate Circuit
          </span>
        </div>
      );

    default:
      return null;
  }
};
