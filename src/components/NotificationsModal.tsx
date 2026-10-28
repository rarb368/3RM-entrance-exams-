import React from 'react';
import { Bell, CheckCircle2, ShieldCheck, X, Megaphone, Clock } from 'lucide-react';

export interface AdminNotice {
  id: string;
  sender: string;
  title: string;
  text: string;
  createdAt: string;
}

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AdminNotice[];
  onMarkAllRead: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-fade-in">
        {/* Header */}
        <div className="bg-[#00897b] p-4 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Megaphone className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Admin Announcements</h3>
              <p className="text-[11px] text-teal-100">From Rebira Sisay Giti (AIBSBSS)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/15 text-teal-100 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Notifications */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 bg-slate-50/50">
          {notifications.length === 0 ? (
            <div className="py-10 text-center text-slate-500">
              <Bell className="w-10 h-10 mx-auto text-slate-300 mb-2 stroke-1" />
              <p className="font-semibold text-sm text-slate-700">No new announcements</p>
              <p className="text-xs text-slate-400 mt-1">
                You are all caught up! New updates from admin will appear here.
              </p>
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-teal-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00897b]" />
                    {item.title || 'Official Notice'}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
                <div className="pt-1 text-[10px] text-slate-400">
                  Sender: <span className="font-medium text-slate-600">{item.sender}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-end">
            <button
              onClick={() => {
                onMarkAllRead();
                onClose();
              }}
              className="px-3.5 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-[#00897b] font-semibold text-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Mark all as read</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
