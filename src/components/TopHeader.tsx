import React, { useState } from 'react';
import { Menu, Share2, Send, UserCircle, Check } from 'lucide-react';
import { StudentProfile } from '../types';

interface TopHeaderProps {
  studentProfile: StudentProfile | null;
  onOpenMenu: () => void;
  onOpenProfile: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  studentProfile,
  onOpenMenu,
  onOpenProfile,
}) => {
  const [copiedToast, setCopiedToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: '3RM Ethiopian Entrance Exam for AIBSBSS',
      text: 'Practice national entrance examination questions with verified answers and explanations!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback or dismissed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2500);
      } catch {
        alert('Share link: ' + window.location.href);
      }
    }
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/rebiraentranceexam', '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#00897b] text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Left: Menu Icon & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="p-1.5 rounded-lg text-white hover:bg-white/15 transition active:scale-95 cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-sm sm:text-base md:text-lg leading-tight tracking-wide line-clamp-1">
                Rebira's Ethiopian University Entrance Exam
              </h1>
              <span className="hidden sm:inline-block bg-teal-800/80 text-[11px] font-semibold px-2 py-0.5 rounded-md border border-teal-600/40">
                AIBSBSS
              </span>
            </div>
            <p className="text-[10px] text-teal-100 font-medium">
              Ambo Ifa Boru Special Boarding Secondary School
            </p>
          </div>
        </div>

        {/* Right Action Icons: Telegram, Share, Profile */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Telegram Community */}
          <button
            onClick={handleTelegramClick}
            title="Join Telegram Community"
            aria-label="Telegram community"
            className="p-1.5 rounded-lg text-teal-100 hover:text-white hover:bg-white/15 transition active:scale-95 cursor-pointer flex items-center gap-1"
          >
            <Send className="w-4 h-4 text-sky-200" />
            <span className="hidden md:inline text-xs font-medium">Telegram</span>
          </button>

          {/* Share Icon */}
          <button
            onClick={handleShare}
            title="Share with AIBSBSS classmates"
            aria-label="Share platform"
            className="p-1.5 rounded-lg text-teal-100 hover:text-white hover:bg-white/15 transition active:scale-95 cursor-pointer relative"
          >
            <Share2 className="w-5 h-5" />
            {copiedToast && (
              <span className="absolute -bottom-8 right-0 bg-slate-900 text-white text-[11px] py-1 px-2.5 rounded-md shadow-lg flex items-center gap-1 whitespace-nowrap animate-fade-in">
                <Check className="w-3 h-3 text-emerald-400" /> Link copied!
              </span>
            )}
          </button>

          {/* Student Profile avatar */}
          {studentProfile && (
            <button
              onClick={onOpenProfile}
              title={`Logged in as ${studentProfile.fullName}`}
              className="ml-1 flex items-center gap-1.5 bg-teal-700/80 hover:bg-teal-700 px-2 py-1 rounded-full border border-teal-500/50 transition cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-amber-400 text-teal-950 font-bold text-xs flex items-center justify-center">
                {studentProfile.fullName.charAt(0).toUpperCase()}
              </div>
              <span className="hidden lg:inline text-xs font-medium max-w-[90px] truncate">
                {studentProfile.fullName.split(' ')[0]}
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
