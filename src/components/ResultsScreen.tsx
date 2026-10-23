import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  RotateCcw,
  Home,
  BookOpen,
  Award,
  ChevronDown,
  Filter,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import { ExamAttempt, Question } from '../types';
import { SUBJECT_CONFIGS, formatDurationHHMMSS } from '../data/subjectConfig';

interface ResultsScreenProps {
  attempt: ExamAttempt;
  questions: Question[];
  onTryAgain: () => void;
  onReturnHome: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  attempt,
  questions,
  onTryAgain,
  onReturnHome,
}) => {
  const config = SUBJECT_CONFIGS[attempt.subject];
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct'>('all');

  // Performance category
  let performanceTitle = 'Needs Improvement';
  let performanceColor = 'text-rose-600';
  let performanceBg = 'bg-rose-50 border-rose-200';

  if (attempt.scorePercentage >= 80) {
    performanceTitle = 'Excellent (Distinction)';
    performanceColor = 'text-emerald-700';
    performanceBg = 'bg-emerald-50 border-emerald-200';
  } else if (attempt.scorePercentage >= 65) {
    performanceTitle = 'Very Good';
    performanceColor = 'text-teal-700';
    performanceBg = 'bg-teal-50 border-teal-200';
  } else if (attempt.scorePercentage >= 50) {
    performanceTitle = 'Satisfactory';
    performanceColor = 'text-amber-700';
    performanceBg = 'bg-amber-50 border-amber-200';
  }

  // Unit breakdown
  const unitStatsMap: Record<
    string,
    { unitName: string; total: number; correct: number }
  > = {};

  questions.forEach((q) => {
    if (!unitStatsMap[q.unit]) {
      unitStatsMap[q.unit] = { unitName: q.unit, total: 0, correct: 0 };
    }
    unitStatsMap[q.unit].total += 1;
    if (attempt.userAnswers[q.id] === q.correctAnswer) {
      unitStatsMap[q.unit].correct += 1;
    }
  });

  const unitBreakdown = Object.values(unitStatsMap);

  // Filtered review questions
  const filteredQuestions = questions.filter((q) => {
    const isAnswered = attempt.userAnswers[q.id] !== undefined;
    const isCorrect = isAnswered && attempt.userAnswers[q.id] === q.correctAnswer;
    if (filterMode === 'correct') return isCorrect;
    if (filterMode === 'incorrect') return !isCorrect;
    return true;
  });

  const remainingSeconds = Math.max(0, attempt.totalDurationSeconds - attempt.timeUsedSeconds);

  return (
    <div className="pb-24 pt-4 px-4 max-w-3xl mx-auto">
      {/* Top Result Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-6 text-center relative overflow-hidden">
        {/* Subtle decorative background ring */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-teal-50 rounded-b-full -z-0 opacity-80" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full mb-3">
            <Award className="w-4 h-4 text-teal-700" />
            <span>AIBSBSS EUEE Examination Results</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {config.title} {attempt.isUnitPractice ? `— ${attempt.unitTitle}` : `— ${attempt.year} E.C.`}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Student: <strong className="text-slate-800">{attempt.studentName}</strong> • {new Date(attempt.completedAt).toLocaleString()}
          </p>

          {/* Circular Score Gauge */}
          <div className="my-6 inline-flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-slate-100"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[#00897b] transition-all duration-1000 ease-out"
                  strokeWidth="8"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * attempt.scorePercentage) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {attempt.scorePercentage}%
                </span>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                  Final Score
                </span>
              </div>
            </div>

            <div className={`mt-2 px-3 py-1 rounded-lg border text-xs font-bold ${performanceBg} ${performanceColor}`}>
              {performanceTitle}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto text-left">
            <div className="bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Correct
              </div>
              <div className="text-xl font-bold text-emerald-950">{attempt.correctCount}</div>
            </div>

            <div className="bg-rose-50/70 border border-rose-100 p-3 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs text-rose-800 font-semibold mb-1">
                <XCircle className="w-3.5 h-3.5 text-rose-600" /> Incorrect
              </div>
              <div className="text-xl font-bold text-rose-950">{attempt.incorrectCount}</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold mb-1">
                <HelpCircle className="w-3.5 h-3.5 text-slate-500" /> Unanswered
              </div>
              <div className="text-xl font-bold text-slate-900">{attempt.unansweredCount}</div>
            </div>

            <div className="bg-teal-50/70 border border-teal-100 p-3 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs text-teal-800 font-semibold mb-1">
                <Clock className="w-3.5 h-3.5 text-teal-600" /> Time Used
              </div>
              <div className="text-sm font-bold text-teal-950">
                {formatDurationHHMMSS(attempt.timeUsedSeconds)}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onTryAgain}
              className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>

            <button
              onClick={onReturnHome}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition active:scale-95 flex items-center gap-2 cursor-pointer border border-slate-300"
            >
              <Home className="w-4 h-4" />
              <span>Return to HOME</span>
            </button>
          </div>
        </div>
      </div>

      {/* Unit-by-Unit Performance Breakdown */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6">
        <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#00897b]" />
          <span>Curriculum Unit Mastery & Weak Spot Analysis</span>
        </h3>

        <div className="space-y-3">
          {unitBreakdown.map((ub) => {
            const pct = Math.round((ub.correct / ub.total) * 100);
            const isWeak = pct < 60;

            return (
              <div
                key={ub.unitName}
                className="p-3 rounded-xl border border-slate-100 bg-slate-50/50"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-800">{ub.unitName}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-medium">
                      {ub.correct} of {ub.total} ({pct}%)
                    </span>
                    {isWeak && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                        Review Recommended
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Question-by-Question Review */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#00897b]" />
            <span>Complete Question-by-Question Review</span>
          </h3>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              onClick={() => setFilterMode('incorrect')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                filterMode === 'incorrect'
                  ? 'bg-rose-600 text-white'
                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
              }`}
            >
              Incorrect / Skipped ({attempt.incorrectCount + attempt.unansweredCount})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Correct ({attempt.correctCount})
            </button>
          </div>
        </div>

        {/* Question Cards */}
        {filteredQuestions.map((q, idx) => {
          const selectedOption = attempt.userAnswers[q.id];
          const isAnswered = selectedOption !== undefined;
          const isCorrect = isAnswered && selectedOption === q.correctAnswer;
          const optionLetters = ['A', 'B', 'C', 'D'];

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-5 border shadow-sm transition-all ${
                isCorrect ? 'border-emerald-200' : 'border-rose-200'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-3 border-b pb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-bold px-2 py-0.5 rounded text-white ${
                      isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                    }`}
                  >
                    Question {q.questionNumber}
                  </span>
                  <span className="text-slate-500 font-medium">
                    {q.unit} • Grade {q.grade}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-bold">
                  {isCorrect ? (
                    <span className="text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Correct (+1)
                    </span>
                  ) : (
                    <span className="text-rose-600 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> {isAnswered ? 'Incorrect (0)' : 'Unanswered (0)'}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <p className="text-sm text-slate-900 font-medium leading-relaxed mb-3 whitespace-pre-line">
                {q.question}
              </p>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {q.options.map((optText, optIdx) => {
                  const isCorrectChoice = optIdx === q.correctAnswer;
                  const isUserSelection = selectedOption === optIdx;

                  let optBg = 'bg-slate-50 border-slate-200 text-slate-700';
                  if (isCorrectChoice) {
                    optBg = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-400';
                  } else if (isUserSelection) {
                    optBg = 'bg-rose-50 border-rose-300 text-rose-950 line-through';
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${optBg}`}
                    >
                      <span className="font-bold w-5 shrink-0">
                        {optionLetters[optIdx]}.
                      </span>
                      <span className="flex-1">{optText}</span>
                      {isCorrectChoice && (
                        <span className="text-emerald-700 font-bold text-xs shrink-0">
                          (Verified Answer)
                        </span>
                      )}
                      {isUserSelection && !isCorrectChoice && (
                        <span className="text-rose-600 font-semibold text-xs shrink-0">
                          (Your Choice)
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Box */}
              <div className="bg-teal-50/70 border border-teal-200/80 rounded-xl p-3.5 text-xs text-teal-950 leading-relaxed">
                <div className="font-bold text-teal-900 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                  Explanation & Principle:
                </div>
                <p className="text-slate-700 leading-relaxed">{q.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
