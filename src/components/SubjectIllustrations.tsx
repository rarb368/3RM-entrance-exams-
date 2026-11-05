import React from "react";

export const SubjectIllustrations: React.FC<{ subjectId: string }> = ({ subjectId }) => {
  switch (subjectId) {
    case "chemistry":
      return (
        <div className="flex items-center justify-center space-x-3 py-1">
          {/* Flasks & Beakers with 3D liquid highlights */}
          <div className="relative w-16 h-18 flex items-end justify-center">
            {/* Back Flask with blue liquid */}
            <svg className="w-12 h-16 drop-shadow-md" viewBox="0 0 50 64" fill="none">
              <path
                d="M20 8 L20 18 L6 48 C4 52 7 56 12 56 L38 56 C43 56 46 52 44 48 L30 18 L30 8 Z"
                fill="url(#chemGlassBlue)"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              {/* Blue liquid */}
              <path
                d="M10 46 L14 38 Q25 35 36 38 L40 46 C42 50 40 54 37 54 L13 54 C10 54 8 50 10 46 Z"
                fill="url(#blueLiquidGrad)"
              />
              <circle cx="20" cy="46" r="2" fill="#FFFFFF" fillOpacity="0.8" />
              <circle cx="28" cy="43" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
              <defs>
                <linearGradient id="chemGlassBlue" x1="0" y1="0" x2="50" y2="64">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="blueLiquidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Front Beaker with green liquid */}
            <svg className="w-10 h-14 -ml-4 drop-shadow-lg" viewBox="0 0 44 56" fill="none">
              <path
                d="M17 6 L17 16 L5 42 C3 46 6 50 11 50 L33 50 C38 50 41 46 39 42 L27 16 L27 6 Z"
                fill="url(#chemGlassGreen)"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              {/* Green liquid */}
              <path
                d="M8 40 L12 32 Q22 30 32 32 L36 40 C38 44 36 48 33 48 L11 48 C8 48 6 44 8 40 Z"
                fill="url(#greenLiquidGrad)"
              />
              <defs>
                <linearGradient id="chemGlassGreen" x1="0" y1="0" x2="44" y2="56">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="greenLiquidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ADE80" />
                  <stop offset="100%" stopColor="#16A34A" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 3D Ball-and-Stick Molecule with red & blue spheres */}
          <svg className="w-14 h-16 drop-shadow-md" viewBox="0 0 64 64" fill="none">
            {/* Bonds */}
            <line x1="32" y1="32" x2="16" y2="20" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="32" y1="32" x2="48" y2="22" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="32" y1="32" x2="22" y2="48" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="32" y1="32" x2="44" y2="46" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
            {/* Central sphere */}
            <circle cx="32" cy="32" r="7" fill="url(#graySphere)" stroke="#475569" strokeWidth="1" />
            {/* Red atom */}
            <circle cx="16" cy="20" r="6" fill="url(#redSphere)" />
            {/* Blue atom */}
            <circle cx="48" cy="22" r="6" fill="url(#blueSphere)" />
            {/* Red atom 2 */}
            <circle cx="22" cy="48" r="5" fill="url(#redSphere)" />
            {/* Cyan atom */}
            <circle cx="44" cy="46" r="5" fill="url(#blueSphere)" />
            <defs>
              <radialGradient id="graySphere" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#334155" />
              </radialGradient>
              <radialGradient id="redSphere" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FCA5A5" />
                <stop offset="70%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#991B1B" />
              </radialGradient>
              <radialGradient id="blueSphere" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="70%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );

    case "physics":
      return (
        <div className="flex items-center justify-center py-1">
          {/* Glowing 3D Neon Blue Atom */}
          <svg className="w-24 h-20 drop-shadow-[0_4px_12px_rgba(59,130,246,0.5)]" viewBox="0 0 80 64" fill="none">
            {/* Ellipse orbit 1 */}
            <ellipse cx="40" cy="32" rx="34" ry="12" stroke="#60A5FA" strokeWidth="2.5" transform="rotate(-30 40 32)" strokeOpacity="0.9" />
            {/* Ellipse orbit 2 */}
            <ellipse cx="40" cy="32" rx="34" ry="12" stroke="#93C5FD" strokeWidth="2.5" transform="rotate(30 40 32)" strokeOpacity="0.9" />
            {/* Ellipse orbit 3 */}
            <ellipse cx="40" cy="32" rx="34" ry="12" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.9" />
            {/* Center glowing nucleus */}
            <circle cx="40" cy="32" r="10" fill="url(#nucleusGlow)" />
            <circle cx="38" cy="30" r="3" fill="#FFFFFF" fillOpacity="0.8" />
            {/* Orbiting electrons */}
            <circle cx="16" cy="22" r="3.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="64" cy="22" r="3.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="40" cy="44" r="3" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
            <defs>
              <radialGradient id="nucleusGlow" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );

    case "biology":
      return (
        <div className="flex items-center justify-center space-x-3 py-1">
          {/* Black Scientific Microscope */}
          <svg className="w-14 h-18 drop-shadow-md" viewBox="0 0 54 64" fill="none">
            <rect x="12" y="52" width="30" height="6" rx="3" fill="#0F172A" />
            <path d="M22 52 L22 42 L32 42 L32 52 Z" fill="#1E293B" />
            <rect x="14" y="38" width="26" height="4" rx="2" fill="#334155" />
            <path d="M30 42 C38 42 42 32 40 22 C39 16 35 14 30 14" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
            <circle cx="24" cy="28" r="4" fill="#64748B" />
            <rect x="22" y="31" width="5" height="6" rx="1" fill="#475569" />
            <path d="M20 10 L30 24" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
            <rect x="17" y="6" width="6" height="6" rx="1.5" fill="#475569" transform="rotate(-35 17 6)" />
          </svg>

          {/* Lush Green Leaf */}
          <svg className="w-10 h-16 drop-shadow-md" viewBox="0 0 40 64" fill="none">
            <path
              d="M10 54 C10 32 34 24 34 10 C20 18 6 34 10 54 Z"
              fill="url(#leafGreenGrad)"
              stroke="#15803D"
              strokeWidth="1.5"
            />
            <path d="M10 54 C14 38 24 26 34 10" stroke="#BBF7D0" strokeWidth="1.8" strokeLinecap="round" />
            <defs>
              <linearGradient id="leafGreenGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#15803D" />
                <stop offset="60%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#86EFAC" />
              </linearGradient>
            </defs>
          </svg>

          {/* Blue DNA Helix */}
          <svg className="w-12 h-18 drop-shadow-md" viewBox="0 0 44 64" fill="none">
            <line x1="12" y1="14" x2="32" y2="14" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="24" x2="34" y2="24" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="34" x2="26" y2="34" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="44" x2="34" y2="44" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="54" x2="32" y2="54" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M12 8 C26 20 32 28 22 34 C12 40 18 50 32 60" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M32 8 C18 20 12 28 22 34 C32 40 26 50 12 60" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "maths":
    case "maths_nat":
    case "maths_soc":
      return (
        <div className="flex items-center justify-center space-x-3 py-1">
          {/* Blue Digital 3D Calculator */}
          <div className="w-12 h-16 bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-slate-700 rounded-xl p-1.5 shadow-lg flex flex-col justify-between">
            <div className="w-full h-3.5 bg-sky-200/90 rounded border border-sky-400/50 flex items-center justify-end px-1">
              <span className="text-[7px] font-mono font-bold text-slate-800">88.5</span>
            </div>
            <div className="grid grid-cols-3 gap-1 my-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-2.5 h-2 bg-slate-600 rounded-[2px]" />
              ))}
            </div>
            <div className="w-full h-2.5 bg-orange-500 rounded-[2px] flex items-center justify-center text-[7px] font-bold text-white">
              =
            </div>
          </div>

          {/* Yellow Triangle Ruler & Pi Symbol */}
          <div className="flex items-center space-x-1">
            <svg className="w-14 h-16 drop-shadow-md" viewBox="0 0 56 64" fill="none">
              <polygon points="10,12 10,54 52,54" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
              <polygon points="16,26 16,48 40,48" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
              {/* Ticks */}
              <line x1="10" y1="18" x2="14" y2="18" stroke="#78350F" strokeWidth="1.5" />
              <line x1="10" y1="26" x2="14" y2="26" stroke="#78350F" strokeWidth="1.5" />
              <line x1="10" y1="34" x2="14" y2="34" stroke="#78350F" strokeWidth="1.5" />
              <line x1="10" y1="42" x2="14" y2="42" stroke="#78350F" strokeWidth="1.5" />
            </svg>
            <span className="text-amber-700 font-serif font-black text-2xl drop-shadow-sm">π</span>
          </div>
        </div>
      );

    case "english":
      return (
        <div className="flex items-center justify-center space-x-3 py-1">
          {/* Stack of Hardcover Books */}
          <div className="flex flex-col items-center">
            <div className="w-18 h-5 bg-gradient-to-r from-blue-700 to-indigo-600 rounded-sm shadow-md border-b-2 border-amber-100 flex items-center px-1">
              <div className="w-2 h-full bg-blue-900 rounded-l-xs" />
            </div>
            <div className="w-20 h-5 bg-gradient-to-r from-sky-600 to-blue-700 rounded-sm shadow-md border-b-2 border-amber-100 -mt-1 flex items-center px-1">
              <div className="w-2 h-full bg-sky-800 rounded-l-xs" />
            </div>
          </div>

          {/* Ink Pot & Feather Quill */}
          <svg className="w-14 h-18 drop-shadow-md" viewBox="0 0 50 64" fill="none">
            {/* Feather quill */}
            <path
              d="M12 50 C18 42 22 28 36 10 C36 18 34 32 20 48"
              fill="url(#quillGrad)"
              stroke="#047857"
              strokeWidth="1.5"
            />
            <path d="M10 52 L36 10" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
            {/* Inkpot */}
            <rect x="6" y="46" width="16" height="12" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <rect x="9" y="43" width="10" height="3" rx="1" fill="#475569" />
            <defs>
              <linearGradient id="quillGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "sat":
      return (
        <div className="flex items-center justify-center space-x-2 py-1">
          {/* Graduation Cap (Mortarboard) with Gold Tassel */}
          <div className="relative flex flex-col items-center">
            {/* Top rhombus */}
            <div className="w-16 h-8 bg-slate-900 transform -rotate-6 rounded-xs shadow-lg flex items-center justify-center relative">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              {/* Tassel */}
              <div className="absolute right-0 top-3 w-4 h-6 border-r-2 border-b-2 border-amber-400 rounded-br-xs" />
            </div>
            {/* Skullcap skull base */}
            <div className="w-10 h-5 bg-slate-800 rounded-b-lg -mt-2 shadow-md" />
          </div>

          {/* Rolled Diploma with Red Ribbon */}
          <svg className="w-14 h-14 drop-shadow-md transform rotate-12" viewBox="0 0 56 56" fill="none">
            <rect x="6" y="20" width="44" height="14" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
            <rect x="24" y="19" width="8" height="16" rx="2" fill="#EF4444" />
            <path d="M26 35 L24 44 L28 42 L32 44 L30 35" fill="#EF4444" />
          </svg>
        </div>
      );

    case "geography":
      return (
        <div className="flex items-center justify-center space-x-2 py-1">
          <svg className="w-16 h-16 drop-shadow-md" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="28" r="16" fill="url(#geoGlobeGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M24 24 Q30 18 36 24 Q42 30 32 34 Z" fill="#22C55E" />
            <path d="M16 28 A18 18 0 0 0 32 46 L32 54 L24 54 L40 54" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="geoGlobeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-2xl drop-shadow-sm">🏔️</div>
        </div>
      );

    case "history":
      return (
        <div className="flex items-center justify-center space-x-2 py-1">
          <svg className="w-16 h-16 drop-shadow-md" viewBox="0 0 64 64" fill="none">
            <polygon points="14,24 32,12 50,24" fill="#F8FAFC" stroke="#B45309" strokeWidth="2" />
            <rect x="18" y="26" width="5" height="22" rx="1" fill="#D97706" />
            <rect x="29.5" y="26" width="5" height="22" rx="1" fill="#D97706" />
            <rect x="41" y="26" width="5" height="22" rx="1" fill="#D97706" />
            <rect x="12" y="48" width="40" height="6" rx="2" fill="#F8FAFC" stroke="#B45309" strokeWidth="1" />
          </svg>
          <div className="text-2xl drop-shadow-sm">📜</div>
        </div>
      );

    case "economics":
      return (
        <div className="flex items-center justify-center space-x-2 py-1">
          <div className="text-2xl drop-shadow-sm">🪙</div>
          <svg className="w-14 h-16 drop-shadow-md" viewBox="0 0 54 64" fill="none">
            <line x1="8" y1="52" x2="48" y2="52" stroke="#4338CA" strokeWidth="2" strokeLinecap="round" />
            <rect x="12" y="36" width="8" height="16" rx="1" fill="#818CF8" />
            <rect x="24" y="24" width="8" height="28" rx="1" fill="#6366F1" />
            <rect x="36" y="12" width="8" height="40" rx="1" fill="#4F46E5" />
            <path d="M12 34 L26 20 L38 10 L46 6" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
