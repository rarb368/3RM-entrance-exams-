import React from 'react';
import { SubjectConfig, SubjectId } from '../types';

interface SubjectCardProps {
  config: SubjectConfig;
  onSelect: (subjectId: SubjectId) => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ config, onSelect }) => {
  // Render exact dual-icon illustrations matching Screenshot_20261019-070807_fb745c56.jpg
  const renderCardIllustration = () => {
    switch (config.id) {
      case 'biology':
        return (
          <div className="flex items-center justify-around w-full px-2 py-4">
            {/* Microscope */}
            <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <path d="M45 15 L58 15 L55 38 L42 38 Z" fill="#e0e0e0" />
              <path d="M50 10 L53 10 L53 15 L50 15 Z" fill="#9e9e9e" />
              <circle cx="62" cy="48" r="8" fill="#bdbdbd" />
              <path d="M62 40 C75 40 82 55 78 70 C75 80 62 82 50 82" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
              <rect x="25" y="60" width="35" height="6" rx="2" fill="#37474f" />
              <path d="M38 66 L38 82" stroke="#9e9e9e" strokeWidth="6" />
              <rect x="20" y="82" width="60" height="10" rx="4" fill="#ffffff" />
            </svg>
            {/* DNA double helix */}
            <svg className="w-14 h-16 sm:w-16 sm:h-20 drop-shadow-md" viewBox="0 0 80 100" fill="none">
              <path d="M25 15 Q40 35 55 55 Q40 75 25 95" stroke="#a5d6a7" strokeWidth="6" strokeLinecap="round" />
              <path d="M55 15 Q40 35 25 55 Q40 75 55 95" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
              <line x1="30" y1="25" x2="50" y2="25" stroke="#e8f5e9" strokeWidth="4" />
              <line x1="35" y1="42" x2="45" y2="42" stroke="#e8f5e9" strokeWidth="4" />
              <line x1="35" y1="68" x2="45" y2="68" stroke="#e8f5e9" strokeWidth="4" />
              <line x1="30" y1="85" x2="50" y2="85" stroke="#e8f5e9" strokeWidth="4" />
            </svg>
          </div>
        );

      case 'chemistry':
        return (
          <div className="flex items-center justify-around w-full px-2 py-4">
            {/* Test Tube */}
            <svg className="w-14 h-16 sm:w-16 sm:h-20 drop-shadow-md -rotate-12" viewBox="0 0 60 100" fill="none">
              <rect x="18" y="10" width="24" height="65" rx="2" fill="#ffffff" fillOpacity="0.8" />
              <path d="M18 75 C18 87 42 87 42 75 Z" fill="#76ff03" />
              <rect x="18" y="45" width="24" height="30" fill="#76ff03" />
              <rect x="14" y="6" width="32" height="6" rx="2" fill="#ffffff" />
              <line x1="28" y1="20" x2="38" y2="20" stroke="#006064" strokeWidth="2" />
              <line x1="30" y1="30" x2="38" y2="30" stroke="#006064" strokeWidth="2" />
              <line x1="28" y1="40" x2="38" y2="40" stroke="#006064" strokeWidth="2" />
            </svg>
            {/* Erlenmeyer Flask */}
            <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 90 100" fill="none">
              <path d="M38 12 L52 12 L52 35 L76 80 C80 88 74 92 65 92 L25 92 C16 92 10 88 14 80 L38 35 Z" fill="#ffffff" fillOpacity="0.95" />
              <path d="M22 68 L68 68 L74 80 C76 86 72 90 65 90 L25 90 C18 90 14 86 16 80 Z" fill="#ef5350" />
              <circle cx="36" cy="76" r="3" fill="#ffffff" />
              <circle cx="50" cy="73" r="2.5" fill="#ffffff" />
              <circle cx="44" cy="83" r="2" fill="#ffffff" />
              <rect x="35" y="8" width="20" height="5" rx="1.5" fill="#ffffff" />
            </svg>
          </div>
        );

      case 'physics':
        return (
          <div className="flex items-center justify-around w-full px-2 py-4">
            {/* Horseshoe Magnet */}
            <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md rotate-12" viewBox="0 0 100 100" fill="none">
              <path d="M25 35 C25 15 75 15 75 35 L75 55 L58 55 L58 35 C58 25 42 25 42 35 L42 55 L25 55 Z" fill="#e53935" />
              <rect x="25" y="55" width="17" height="15" fill="#b0bec5" />
              <rect x="58" y="55" width="17" height="15" fill="#b0bec5" />
              <path d="M18 72 L12 78 M82 72 L88 78 M14 62 L6 64" stroke="#ffeb3b" strokeWidth="3" strokeLinecap="round" />
            </svg>
            {/* Light Bulb */}
            <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 90 100" fill="none">
              <circle cx="45" cy="40" r="25" fill="#fbc02d" />
              <path d="M35 60 L55 60 L52 75 L38 75 Z" fill="#37474f" />
              <rect x="40" y="75" width="10" height="4" rx="2" fill="#9e9e9e" />
              <path d="M45 5 L45 12 M20 18 L26 23 M70 18 L64 23 M10 40 L16 40 M74 40 L80 40" stroke="#fbc02d" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'maths_nat':
        return (
          <div className="flex items-center justify-around w-full px-2 py-4">
            {/* Blackboard x^2 + x */}
            <div className="w-18 h-14 sm:w-22 sm:h-16 rounded-xl bg-black border-2 border-emerald-400 shadow-md flex items-center justify-center p-1">
              <span className="text-white font-mono font-bold text-xs sm:text-sm tracking-wider">
                x² + x
              </span>
            </div>
            {/* Right-angled triangle */}
            <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <polygon points="20,25 20,85 85,85" fill="#29b6f6" stroke="#000000" strokeWidth="2.5" />
              <rect x="20" y="75" width="10" height="10" fill="none" stroke="#e91e63" strokeWidth="2.5" />
              <text x="8" y="58" fill="#ffffff" fontSize="14" fontWeight="bold">a</text>
              <text x="68" y="80" fill="#ffffff" fontSize="12" fontWeight="bold">θ</text>
            </svg>
          </div>
        );

      case 'maths_soc':
        return (
          <div className="flex items-center justify-around w-full px-2 py-4">
            {/* Bar Chart with Arrow */}
            <div className="relative w-18 h-16 sm:w-22 sm:h-18 flex items-end justify-between px-1">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M15 75 Q45 45 75 25" stroke="#69f0ae" strokeWidth="5" strokeLinecap="round" />
                <polygon points="75,18 85,25 76,32" fill="#69f0ae" />
              </svg>
              <div className="w-4 h-8 bg-amber-400 rounded-t-xs" />
              <div className="w-4 h-12 bg-rose-500 rounded-t-xs" />
              <div className="w-4 h-15 bg-cyan-400 rounded-t-xs" />
            </div>
            {/* log_2 8 badge */}
            <div className="w-16 h-14 sm:w-20 sm:h-16 rounded-xl bg-black border-2 border-amber-300 shadow-md flex items-center justify-center p-1">
              <span className="text-amber-300 font-mono font-bold text-xs sm:text-sm">
                log₂8
              </span>
            </div>
          </div>
        );

      case 'english':
        return (
          <div className="flex items-center justify-around w-full px-2 py-4">
            {/* Megaphone */}
            <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <polygon points="20,40 50,25 50,75 20,60" fill="#eceff1" stroke="#37474f" strokeWidth="2" />
              <path d="M50 25 C58 25 65 35 65 50 C65 65 58 75 50 75" fill="#cfd8dc" stroke="#37474f" strokeWidth="2" />
              <rect x="25" y="60" width="10" height="20" rx="3" fill="#ffffff" stroke="#37474f" strokeWidth="2" />
              <path d="M72 40 L80 34 M75 50 L85 50 M72 60 L80 66" stroke="#ffeb3b" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            {/* Speech Bubbles */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <div className="absolute top-1 left-0 w-11 h-8 rounded-2xl bg-slate-900 border border-slate-700" />
              <div className="absolute bottom-1 right-0 w-13 h-9 rounded-2xl bg-white shadow-md flex items-center justify-center gap-1 px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </div>
            </div>
          </div>
        );

      case 'aptitude':
        return (
          <div className="flex items-center justify-around w-full px-2 py-4">
            {/* Speech bubble */}
            <div className="relative w-16 h-14 sm:w-20 sm:h-16 flex items-center justify-center">
              <div className="absolute top-0 left-0 w-12 h-9 rounded-xl bg-teal-800" />
              <div className="absolute bottom-0 right-1 w-13 h-9 rounded-xl bg-white shadow-md flex items-center justify-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
            </div>
            {/* Pi square badge */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-800/90 border-2 border-white/40 shadow-md flex items-center justify-center">
              <span className="text-white font-serif font-black text-2xl sm:text-3xl">
                π
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Specific background colors matching Screenshot_20261019-070807_fb745c56.jpg
  const getCardBg = () => {
    switch (config.id) {
      case 'biology':
        return 'bg-[#43a047]'; // Green
      case 'chemistry':
        return 'bg-[#0097a7]'; // Cyan-Teal
      case 'physics':
        return 'bg-[#e91e63]'; // Pink
      case 'maths_nat':
        return 'bg-[#546e7a]'; // Slate blue-gray
      case 'maths_soc':
        return 'bg-[#3949ab]'; // Royal blue
      case 'english':
        return 'bg-[#26a69a]'; // Sea green
      case 'aptitude':
        return 'bg-[#d81b60]'; // Magenta
      default:
        return 'bg-[#00897b]';
    }
  };

  return (
    <button
      onClick={() => onSelect(config.id)}
      className={`group relative flex flex-col justify-between rounded-2xl ${getCardBg()} text-left text-white shadow-md hover:shadow-xl transition-all duration-200 active:scale-[0.98] min-h-[175px] sm:min-h-[195px] overflow-hidden cursor-pointer border border-white/10`}
    >
      {/* Top Header Label */}
      <div className="p-3.5 sm:p-4 pb-0 z-10">
        <h2 className="font-extrabold text-sm sm:text-base tracking-wider uppercase text-white drop-shadow-xs">
          {config.title}
        </h2>
      </div>

      {/* Center Dual-Icon Illustration */}
      <div className="flex-1 flex items-center justify-center w-full">
        {renderCardIllustration()}
      </div>

      {/* Grounding Bottom Tab Strip (matching screenshots) */}
      <div className="w-full h-3 bg-white/95 rounded-b-2xl" />
    </button>
  );
};
