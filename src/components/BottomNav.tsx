import React from 'react';
import { Home, Mail, ShieldCheck } from 'lucide-react';

interface BottomNavProps {
  currentTab: 'home' | 'contact' | 'admin';
  onSelectTab: (tab: 'home' | 'contact' | 'admin') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-md mx-auto grid grid-cols-3 h-14">
        {/* HOME Tab */}
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center justify-center gap-1 transition-all cursor-pointer relative ${
            currentTab === 'home'
              ? 'text-[#00897b] font-bold'
              : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {currentTab === 'home' && (
            <span className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#00897b] rounded-full" />
          )}
          <Home className={`w-5 h-5 ${currentTab === 'home' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] sm:text-[11px] tracking-wider uppercase">HOME</span>
        </button>

        {/* CONTACT US Tab */}
        <button
          onClick={() => onSelectTab('contact')}
          className={`flex flex-col items-center justify-center gap-1 transition-all cursor-pointer relative ${
            currentTab === 'contact'
              ? 'text-[#00897b] font-bold'
              : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {currentTab === 'contact' && (
            <span className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#00897b] rounded-full" />
          )}
          <Mail className={`w-5 h-5 ${currentTab === 'contact' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] sm:text-[11px] tracking-wider uppercase">CONTACT US</span>
        </button>

        {/* ADMIN Tab */}
        <button
          onClick={() => onSelectTab('admin')}
          className={`flex flex-col items-center justify-center gap-1 transition-all cursor-pointer relative ${
            currentTab === 'admin'
              ? 'text-[#00897b] font-bold'
              : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {currentTab === 'admin' && (
            <span className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#00897b] rounded-full" />
          )}
          <ShieldCheck className={`w-5 h-5 ${currentTab === 'admin' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] sm:text-[11px] tracking-wider uppercase">ADMIN</span>
        </button>
      </div>
    </nav>
  );
};
