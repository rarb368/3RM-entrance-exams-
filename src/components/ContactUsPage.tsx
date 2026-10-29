import React, { useState } from 'react';
import { Mail, Send, MessageSquare, AlertCircle, Sparkles, School, Check, Globe, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/subjectConfig';

export const ContactUsPage: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState('Question Feedback');
  const [subjectText, setSubjectText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `[AIBSBSS 3RM Exam Platform] ${feedbackType}${subjectText ? `: ${subjectText}` : ''}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Rebira Sisay Giti (3RM),\n\n${messageText}\n\n---\nSent from 3RM Ethiopian Entrance Exam Platform for AIBSBSS`
    );

    window.location.href = `mailto:${SCHOOL_INFO.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(SCHOOL_INFO.contactEmail);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-2xl mx-auto">
      {/* Official AIBSBSS School Platform Card - Direct Touch to Open */}
      <a
        href="https://aibsbss.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-6 bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 hover:from-teal-800 hover:to-teal-950 text-white rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all active:scale-[0.99] border-2 border-teal-500/40 group cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-13 h-13 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center shadow-inner shrink-0 group-hover:scale-105 transition-transform text-amber-300">
              <Globe className="w-7 h-7" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base tracking-wide truncate">
                  AIBSBSS School Platform
                </h3>
                <span className="bg-emerald-400 text-teal-950 text-[10px] font-black px-2 py-0.5 rounded-full shrink-0">
                  VISIT NOW
                </span>
              </div>
              <p className="text-teal-200 text-xs font-mono mt-0.5 truncate">
                https://aibsbss.vercel.app/
              </p>
              <p className="text-[11px] text-teal-100/90 font-medium mt-1">
                Touch here to open the official school portal & student platform →
              </p>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-teal-900 transition-colors">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
      </a>

      {/* School & Developer Card */}
      <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg mb-6 border border-teal-700 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-xs mb-3 shadow-inner">
            <School className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            {SCHOOL_INFO.fullName}
          </h2>
          <p className="text-teal-200 text-xs sm:text-sm font-semibold mt-1">
            (AIBSBSS) • Ambo, Oromia, Ethiopia
          </p>

          <div className="my-5 h-px bg-teal-700/60 w-3/4 mx-auto" />

          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-wider text-teal-300 font-bold">
              Platform Developer
            </div>
            <div className="text-lg sm:text-xl font-black text-amber-300 tracking-wide">
              {SCHOOL_INFO.developer}
            </div>
            <div className="text-sm font-medium text-white flex items-center justify-center gap-2 pt-1">
              <Mail className="w-4 h-4 text-teal-200" />
              <a
                href={`mailto:${SCHOOL_INFO.contactEmail}`}
                className="underline hover:text-teal-200 transition"
              >
                {SCHOOL_INFO.contactEmail}
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              onClick={copyEmail}
              className="px-3 py-1.5 rounded-lg bg-teal-700/70 hover:bg-teal-700 text-xs font-semibold text-teal-100 transition flex items-center gap-1.5 cursor-pointer"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${SCHOOL_INFO.contactEmail}`}
              className="px-4 py-1.5 rounded-lg bg-white text-teal-950 font-bold text-xs hover:bg-teal-50 transition shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open Mail App</span>
            </a>
          </div>
        </div>
      </div>

      {/* Message and Contribution Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-base text-slate-900 mb-1 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#00897b]" />
          <span>Report Errors, Suggest Improvements or Request Papers</span>
        </h3>
        <p className="text-xs text-slate-600 mb-5 leading-relaxed">
          We warmly invite AIBSBSS students and instructors to report any examination typographical error, request additional national examination years, or suggest platform improvements.
        </p>

        <form onSubmit={handleSendEmail} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Feedback Category
            </label>
            <select
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 bg-white outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
            >
              <option value="Question / Answer Typo Report">Question / Answer Typo Report</option>
              <option value="Request Additional Exam Year (e.g. 2013 or earlier)">Request Additional Exam Year</option>
              <option value="Unit Classification Suggestion">Curriculum Unit Classification Suggestion</option>
              <option value="Explanation Enhancement">Explanation Enhancement Request</option>
              <option value="General AIBSBSS Feedback">General Feedback for Rebira Sisay Giti</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Subject or Paper Reference (Optional)
            </label>
            <input
              type="text"
              value={subjectText}
              onChange={(e) => setSubjectText(e.target.value)}
              placeholder="e.g. Biology 2017 Question #3, or Chemistry Kinetics"
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Message or Correction Details
            </label>
            <textarea
              rows={4}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Describe the issue, correction, or exam paper you would like to have added..."
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#00897b] hover:bg-[#00796b] text-white py-3 px-4 font-bold text-xs sm:text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>SEND EMAIL TO REBIRA SISAY GITI</span>
          </button>
        </form>

        <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
          <div className="font-semibold text-slate-800">Direct Contact Details:</div>
          <div>Developer: <strong>REBIRA SISAY GITI (3RM)</strong></div>
          <div>
            Email:{' '}
            <a href="mailto:rarb368@gmail.com" className="text-[#00897b] font-medium underline">
              rarb368@gmail.com
            </a>
          </div>
          <div>School: Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS)</div>
        </div>
      </div>
    </div>
  );
};
