import React, { useState } from 'react';
import { BookOpen, CheckCircle2, GraduationCap, ShieldCheck, User } from 'lucide-react';
import { StudentProfile } from '../types';
import { isValidEthiopianPhone, isValidGmailOrEmail, StorageService } from '../utils/storage';
import { SCHOOL_INFO } from '../data/subjectConfig';

interface RegistrationModalProps {
  isOpen: boolean;
  onRegistered: (profile: StudentProfile) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onRegistered }) => {
  const [fullName, setFullName] = useState('');
  const [schoolName, setSchoolName] = useState('Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS)');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('12');
  const [errors, setErrors] = useState<{ fullName?: string; schoolName?: string; phoneNumber?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { fullName?: string; schoolName?: string; phoneNumber?: string; email?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      errs.fullName = 'Please enter your full name (at least 3 characters)';
    }

    if (!schoolName.trim() || schoolName.trim().length < 2) {
      errs.schoolName = 'Please enter your school name';
    }

    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (!isValidEthiopianPhone(phoneNumber)) {
      errs.phoneNumber = 'Enter a valid phone number (e.g. 0912345678 or +251912345678)';
    }

    if (!email.trim()) {
      errs.email = 'Gmail address is required';
    } else if (!isValidGmailOrEmail(email)) {
      errs.email = 'Enter a valid email address (e.g. student@gmail.com)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const profile: StudentProfile = {
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim().toLowerCase(),
      school: schoolName.trim(),
      grade: `Grade ${grade}`,
      registeredAt: new Date().toISOString(),
    };

    StorageService.saveProfile(profile);
    setTimeout(() => {
      setIsSubmitting(false);
      onRegistered(profile);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden my-6">
        {/* Header with Ethio Teal Theme */}
        <div className="bg-[#00897b] p-6 text-white text-center relative">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-3 shadow-inner">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight leading-snug">
            {SCHOOL_INFO.examName}
          </h1>
          <p className="text-teal-100 text-xs mt-1 font-medium">
            Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS)
          </p>
          <div className="mt-2 text-[11px] text-teal-200/90 flex items-center justify-center gap-1.5">
            <span>Dev: {SCHOOL_INFO.developer}</span>
            <span>•</span>
            <span>{SCHOOL_INFO.contactEmail}</span>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="p-6">
          <div className="mb-5 bg-teal-50 border border-teal-100 rounded-xl p-3.5 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div className="text-xs text-teal-900 leading-relaxed">
              <span className="font-semibold text-teal-950">Welcome to realistic EUEE practice!</span> Prepare for the Ethiopian University Entrance Examination with verified previous national questions, accurate timers, curriculum units, and step-by-step explanations.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="e.g. Rebira Sisay Giti"
                  className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                    errors.fullName
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                School Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => {
                    setSchoolName(e.target.value);
                    if (errors.schoolName) setErrors({ ...errors, schoolName: undefined });
                  }}
                  placeholder="e.g. Ambo Ifa Boru Special Boarding Secondary School"
                  className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                    errors.schoolName
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100'
                  }`}
                />
              </div>
              {errors.schoolName && (
                <p className="mt-1 text-xs text-rose-500">{errors.schoolName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                }}
                placeholder="e.g. 0912 34 56 78 or +251 911 234567"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                  errors.phoneNumber
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100'
                }`}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-rose-500">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Gmail Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="e.g. yourname@gmail.com"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                  errors.email
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Grade Level
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['9', '10', '11', '12'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      grade === g
                        ? 'bg-[#00897b] text-white border-[#00897b] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Grade {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#00897b] hover:bg-[#00796b] text-white py-3 px-4 font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Saving Profile...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>REGISTER AND CONTINUE</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Saved locally on your device for fast offline study</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
