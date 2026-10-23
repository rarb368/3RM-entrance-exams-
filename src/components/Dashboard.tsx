import React from 'react';
import { Calendar, Award, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';
import { ExamYear, StudentProfile, SubjectId } from '../types';
import { AVAILABLE_YEARS, SUBJECT_CONFIGS, SUBJECT_ORDER } from '../data/subjectConfig';
import { SubjectCard } from './SubjectCard';
import { StorageService } from '../utils/storage';

interface DashboardProps {
  studentProfile: StudentProfile | null;
  selectedYear: ExamYear | 'all';
  onSelectYear: (year: ExamYear | 'all') => void;
  onSelectSubject: (subjectId: SubjectId) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  studentProfile,
  selectedYear,
  onSelectYear,
  onSelectSubject,
}) => {
  const attempts = StorageService.getAttempts();
  const totalCompleted = attempts.length;
  const avgScore =
    totalCompleted > 0
      ? Math.round(attempts.reduce((sum, a) => sum + a.scorePercentage, 0) / totalCompleted)
      : 0;

  return (
    <div className="pb-24 pt-3 px-4 max-w-4xl mx-auto">
      {/* Student Welcome & AIBSBSS Banner */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-2xl p-4 sm:p-5 text-white shadow-md mb-4 border border-teal-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-teal-300 font-bold">
                AIBSBSS Special Boarding
              </span>
              <span className="text-teal-400 text-xs">•</span>
              <span className="text-xs text-teal-200">2017 E.C. Candidate</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-0.5">
              Welcome, {studentProfile ? studentProfile.fullName : 'AIBSBSS Student'}!
            </h2>
            <p className="text-xs text-teal-100/90 mt-1">
              Select any national examination subject below to begin realistic timed practice or review specific curriculum units.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 bg-teal-950/50 p-2.5 rounded-xl border border-teal-600/30 shrink-0">
            <div className="text-center px-2">
              <div className="text-xs text-teal-300 font-medium">Completed</div>
              <div className="text-base font-bold text-white">{totalCompleted}</div>
            </div>
            <div className="h-7 w-[1px] bg-teal-700/60" />
            <div className="text-center px-2">
              <div className="text-xs text-teal-300 font-medium">Avg Score</div>
              <div className="text-base font-bold text-amber-300">{avgScore}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Examination Year Selector Banner */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00897b]" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Grade 9 to 12: 2014/15 – 2017
            </span>
            <span className="text-[11px] text-slate-500 font-normal">
              (Ethiopian Calendar E.C. / 2022–2025 G.C.)
            </span>
          </div>
          <span className="text-[11px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded-md self-start sm:self-auto border border-teal-100">
            National EUEE Papers
          </span>
        </div>

        {/* Year Filter Buttons (segmented control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => onSelectYear('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 cursor-pointer ${
              selectedYear === 'all'
                ? 'bg-[#00897b] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Years
          </button>
          {AVAILABLE_YEARS.map((year) => (
            <button
              key={year}
              onClick={() => onSelectYear(year)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 cursor-pointer ${
                selectedYear === year
                  ? 'bg-[#00897b] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {year} E.C.
            </button>
          ))}
        </div>
      </div>

      {/* Subject Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-xs sm:text-sm font-bold text-slate-700 tracking-wider uppercase">
          EUEE Examination Subjects
        </h3>
        <span className="text-xs text-slate-500 font-medium">
          7 Subjects Available
        </span>
      </div>

      {/* 2-Column Mobile Grid for Subject Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {SUBJECT_ORDER.map((subjectId) => (
          <SubjectCard
            key={subjectId}
            config={SUBJECT_CONFIGS[subjectId]}
            onSelect={onSelectSubject}
          />
        ))}
      </div>

      {/* Motivational / School Footer Note */}
      <div className="mt-8 text-center text-xs text-slate-500 leading-relaxed px-4">
        <p className="font-semibold text-slate-700">
          Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS)
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Dedicated to academic excellence and national university entrance success.
        </p>
      </div>
    </div>
  );
};
