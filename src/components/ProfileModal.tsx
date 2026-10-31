import React, { useState } from 'react';
import {
  X,
  User,
  Phone,
  Mail,
  GraduationCap,
  Calendar,
  Award,
  Trash2,
  Edit2,
  Check,
  CheckCircle2,
  Clock,
  History,
} from 'lucide-react';
import { StudentProfile } from '../types';
import { StorageService, isValidEthiopianPhone, isValidGmailOrEmail } from '../utils/storage';
import { SUBJECT_CONFIGS, formatDurationHHMMSS } from '../data/subjectConfig';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile | null;
  onProfileUpdated: (profile: StudentProfile) => void;
  onViewAttemptResult?: (attemptId: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onProfileUpdated,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(profile?.fullName || '');
  const [school, setSchool] = useState(profile?.school || '');
  const [phoneNumber, setPhoneNumber] = useState(profile?.phoneNumber || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [grade, setGrade] = useState(profile?.grade || 'Grade 12');
  const [editError, setEditError] = useState<string | null>(null);

  if (!isOpen) return null;

  const attempts = StorageService.getAttempts();
  const totalAttempted = attempts.length;
  const totalCorrect = attempts.reduce((acc, a) => acc + a.correctCount, 0);
  const totalQuestions = attempts.reduce((acc, a) => acc + a.totalQuestions, 0);
  const overallAvg =
    totalAttempted > 0
      ? Math.round(attempts.reduce((acc, a) => acc + a.scorePercentage, 0) / totalAttempted)
      : 0;

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.length < 3) {
      setEditError('Please enter a valid full name');
      return;
    }
    if (!school.trim()) {
      setEditError('Please enter your school name');
      return;
    }
    if (!isValidEthiopianPhone(phoneNumber)) {
      setEditError('Please enter a valid phone number');
      return;
    }
    if (!isValidGmailOrEmail(email)) {
      setEditError('Please enter a valid email address');
      return;
    }

    const updated: StudentProfile = {
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim().toLowerCase(),
      school: school.trim(),
      grade,
      registeredAt: profile?.registeredAt || new Date().toISOString(),
    };

    StorageService.saveProfile(updated);
    onProfileUpdated(updated);
    setIsEditing(false);
    setEditError(null);
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear your local examination attempts history?')) {
      localStorage.removeItem('3rm_aibsbss_exam_attempts');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#00897b] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
              {profile ? profile.fullName.charAt(0).toUpperCase() : 'S'}
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Student Profile & Statistics</h3>
              <p className="text-teal-100 text-xs">{profile?.school || 'Ethiopian University Entrance Examination'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Student Info Card */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Registration Information
              </span>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-xs font-semibold text-[#00897b] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveEdit} className="space-y-3">
                {editError && (
                  <p className="text-xs text-rose-500 font-medium">{editError}</p>
                )}
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-0.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Rebira Sisay"
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 placeholder:text-slate-400 outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-0.5">
                    School Name
                  </label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="Ambo Ifa Boru"
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 placeholder:text-slate-400 outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-0.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="0911223344"
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 placeholder:text-slate-400 outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-0.5">
                    Gmail Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 placeholder:text-slate-400 outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-0.5">
                    Grade
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 outline-none bg-white"
                  >
                    <option value="Grade 12">Grade 12</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 9">Grade 9</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-[#00897b] text-white text-xs font-bold"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-1.5 rounded-lg bg-slate-200 text-slate-700 text-xs font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="font-bold text-slate-900 text-sm">
                    {profile?.fullName}
                  </span>
                  <span className="ml-auto text-[11px] bg-teal-100 text-teal-800 font-semibold px-2 py-0.5 rounded">
                    {profile?.grade || 'Grade 12'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{profile?.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{profile?.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{profile?.school}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[11px] pt-1 border-t">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>
                    Registered on{' '}
                    {profile?.registeredAt
                      ? new Date(profile.registeredAt).toLocaleDateString()
                      : 'N/A'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Aggregate Progress Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Examination Performance Summary
            </h4>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="text-[11px] text-slate-500 font-medium">Exams Taken</div>
                <div className="text-lg font-bold text-slate-900">{totalAttempted}</div>
              </div>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
                <div className="text-[11px] text-teal-800 font-medium">Average Score</div>
                <div className="text-lg font-bold text-teal-900">{overallAvg}%</div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                <div className="text-[11px] text-emerald-800 font-medium">Correct Ans</div>
                <div className="text-lg font-bold text-emerald-950">
                  {totalCorrect}/{totalQuestions}
                </div>
              </div>
            </div>
          </div>

          {/* Subject Best Scores */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Best Scores by Subject
            </h4>
            <div className="space-y-2">
              {Object.values(SUBJECT_CONFIGS).map((subj) => {
                const stats = StorageService.getSubjectStats(subj.id);
                return (
                  <div
                    key={subj.id}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-white shadow-2xs text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        style={{ backgroundColor: subj.primaryColor }}
                        className="w-3 h-3 rounded-full"
                      />
                      <span className="font-semibold text-slate-800">{subj.title}</span>
                    </div>
                    <div>
                      {stats.bestScore !== null ? (
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {stats.bestScore}%
                        </span>
                      ) : (
                        <span className="text-slate-400">Not practiced</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Attempts History */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <History className="w-3.5 h-3.5 text-[#00897b]" />
                Recent Attempts
              </h4>
              {attempts.length > 0 && (
                <button
                  onClick={handleClearHistory}
                  className="text-[11px] text-rose-500 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" /> Clear History
                </button>
              )}
            </div>

            {attempts.length === 0 ? (
              <p className="text-xs text-slate-400 italic bg-slate-50 p-4 rounded-xl text-center">
                No examinations completed yet. Select a subject to take your first practice test!
              </p>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {attempts.slice(0, 10).map((att) => {
                  const cfg = SUBJECT_CONFIGS[att.subject];
                  return (
                    <div
                      key={att.id}
                      className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-slate-900">
                          {cfg ? cfg.title : att.subject}{' '}
                          {att.isUnitPractice ? `(${att.unitTitle})` : `(${att.year} E.C.)`}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {new Date(att.completedAt).toLocaleDateString()} • {att.correctCount}/
                          {att.totalQuestions} questions
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-slate-900">
                          {att.scorePercentage}%
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {formatDurationHHMMSS(att.timeUsedSeconds)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
