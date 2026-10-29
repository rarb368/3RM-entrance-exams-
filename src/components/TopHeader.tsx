import React, { useState } from 'react';
import { Menu, Share2, Check, Bell } from 'lucide-react';
import { StudentProfile } from '../types';

export const RealTelegramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

interface TopHeaderProps {
  studentProfile: StudentProfile | null;
  unreadCount?: number;
  onOpenNotifications?: () => void;
  onOpenMenu: () => void;
  onOpenProfile: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  studentProfile,
  unreadCount = 0,
  onOpenNotifications,
  onOpenMenu,
  onOpenProfile,
}) => {
  const [copiedToast, setCopiedToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Rebira's Ethiopian University Entrance Exam",
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
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2500);
      }
    }
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

        {/* Right Action Icons: Telegram, Notification Bell (if new from admin), Share, Profile */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Real Telegram Community Button */}
          <a
            href="https://t.me/rebiraentranceexam"
            target="_blank"
            rel="noopener noreferrer"
            title="Join Telegram Community"
            aria-label="Join Telegram"
            className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-white/15 transition active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <RealTelegramIcon className="w-5 h-5 text-[#229ED9]" />
            <span className="hidden md:inline text-xs font-semibold">Telegram</span>
          </a>

          {/* Admin Notification Bell: Visible only/alerting when admin sent notification */}
          <button
            onClick={onOpenNotifications}
            title={unreadCount > 0 ? `${unreadCount} new notice from Admin` : 'Admin Announcements'}
            aria-label="Notifications"
            className="p-1.5 rounded-lg text-teal-100 hover:text-white hover:bg-white/15 transition active:scale-95 cursor-pointer relative"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                {unreadCount}
              </span>
            )}
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
              <span className="absolute -bottom-8 right-0 bg-slate-900 text-white text-[11px] py-1 px-2.5 rounded-md shadow-lg flex items-center gap-1 whitespace-nowrap animate-fade-in z-50">
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
