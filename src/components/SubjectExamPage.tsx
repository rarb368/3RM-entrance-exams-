import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  BookOpen,
  Filter,
  CheckCircle,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { AnswerFeedbackMode, ExamYear, SubjectId, Question } from '../types';
import { SUBJECT_CONFIGS, formatDurationHHMMSS } from '../data/subjectConfig';
import {
  CURRICULUM_UNITS,
  getExamPapersForSubject,
  getCategoryHierarchyForSubject,
  ALL_QUESTIONS,
  getQuestionsForUnit,
  getQuestionsByTopic,
} from '../data/allQuestions';
import { StorageService } from '../utils/storage';

interface SubjectExamPageProps {
  subjectId: SubjectId;
  onBack: () => void;
  onStartExam: (params: {
    subjectId: SubjectId;
    year?: ExamYear;
    unitTitle?: string;
    grade?: string;
    topicTitle?: string;
    isUnitPractice: boolean;
    mode: AnswerFeedbackMode;
    timeSeconds?: number;
  }) => void;
}

export const SubjectExamPage: React.FC<SubjectExamPageProps> = ({
  subjectId,
  onBack,
  onStartExam,
}) => {
  const config = SUBJECT_CONFIGS[subjectId];
  // Tabs: 'All' (Full examination list) or specific year '2017' | '2016' | '2015' | '2014/15'
  const [activeTab, setActiveTab] = useState<string>('All');
  const [showCategoryExplorer, setShowCategoryExplorer] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Modal for feedback mode selection
  const [modeModalTarget, setModeModalTarget] = useState<{
    year?: ExamYear;
    unitTitle?: string;
    grade?: string;
    topicTitle?: string;
    isUnitPractice: boolean;
    title: string;
    questionCount: number;
    durationSeconds: number;
  } | null>(null);

  const tabs = ['All', '2017', '2016', '2015', '2014/15'];
  const papers = getExamPapersForSubject(subjectId);
  const units = CURRICULUM_UNITS[subjectId] || [];
  const hierarchy = getCategoryHierarchyForSubject(subjectId);

  const handleStartExamConfirmed = (mode: AnswerFeedbackMode) => {
    if (!modeModalTarget) return;
    onStartExam({
      subjectId,
      year: modeModalTarget.year,
      unitTitle: modeModalTarget.unitTitle,
      grade: modeModalTarget.grade,
      topicTitle: modeModalTarget.topicTitle,
      isUnitPractice: modeModalTarget.isUnitPractice,
      mode,
      timeSeconds: modeModalTarget.durationSeconds,
    });
    setModeModalTarget(null);
  };

  return (
    <div className="min-h-screen pb-24 bg-slate-100/70 text-slate-900">
      {/* Top Application Bar with Subject Title */}
      <header className="sticky top-0 z-30 bg-[#00897b] text-white shadow-sm">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1 rounded-lg hover:bg-white/15 transition active:scale-95 cursor-pointer text-white"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="font-bold text-lg capitalize tracking-wide">
              {config.shortName}
            </h1>
          </div>

          <button
            onClick={() => setShowCategoryExplorer(!showCategoryExplorer)}
            className="text-xs font-semibold bg-teal-800/80 hover:bg-teal-700 px-3 py-1.5 rounded-lg border border-teal-600/40 flex items-center gap-1.5 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{showCategoryExplorer ? 'View By Year' : 'Categories Tree'}</span>
          </button>
        </div>

        {/* Horizontal Navigation Tabs (matching Screenshot_20261019-071418_49aaae27.jpg) */}
        {!showCategoryExplorer && (
          <div className="max-w-md mx-auto px-2 flex items-center justify-around border-t border-teal-600/40 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-semibold relative transition-colors cursor-pointer shrink-0 ${
                    isActive ? 'text-white font-bold' : 'text-teal-100/80 hover:text-white'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[3px] bg-[#e91e63] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Container */}
      <div className="max-w-md mx-auto px-4 pt-3">
        {/* VIEW 1: CATEGORY HIERARCHY TREE EXPLORER (Subject -> Grade -> Unit -> Topic -> Questions) */}
        {showCategoryExplorer ? (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4 pb-2 border-b">
              <div>
                <h3 className="font-bold text-sm text-slate-900">
                  Curriculum Classification System
                </h3>
                <p className="text-[11px] text-slate-500">
                  Subject → Grade → Unit → Topic → Questions
                </p>
              </div>
              <span className="text-[11px] bg-teal-50 text-teal-800 font-bold px-2 py-0.5 rounded-md border border-teal-200">
                New Curriculum
              </span>
            </div>

            {/* Grade Selector */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                1. Select Grade
              </label>
              <div className="grid grid-cols-2 gap-2">
                {hierarchy.map((node) => (
                  <button
                    key={node.grade}
                    onClick={() => {
                      setSelectedGrade(node.grade);
                      setSelectedUnit(null);
                      setSelectedTopic(null);
                    }}
                    className={`py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border cursor-pointer ${
                      selectedGrade === node.grade
                        ? 'bg-[#00897b] text-white border-[#00897b] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>Grade {node.grade}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Units Selector */}
            {selectedGrade && (
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                  2. Select Unit in Grade {selectedGrade}
                </label>
                <div className="space-y-1.5 max-h-56 overflow-y-auto">
                  {hierarchy
                    .find((n) => n.grade === selectedGrade)
                    ?.units.map((u) => (
                      <button
                        key={u.unitTitle}
                        onClick={() => {
                          setSelectedUnit(u.unitTitle);
                          setSelectedTopic(null);
                        }}
                        className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold transition border flex items-center justify-between cursor-pointer ${
                          selectedUnit === u.unitTitle
                            ? 'bg-teal-50 border-teal-500 text-teal-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>Unit {u.unitNumber}: {u.unitTitle}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Topics Selector */}
            {selectedUnit && (
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                  3. Select Topic
                </label>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {hierarchy
                    .find((n) => n.grade === selectedGrade)
                    ?.units.find((u) => u.unitTitle === selectedUnit)
                    ?.topics.map((top) => {
                      const topQuestions = getQuestionsByTopic(subjectId, top);
                      return (
                        <button
                          key={top}
                          onClick={() => setSelectedTopic(top)}
                          className={`w-full p-2.5 rounded-xl text-left text-xs transition border flex items-center justify-between cursor-pointer ${
                            selectedTopic === top
                              ? 'bg-purple-50 border-purple-500 text-purple-950 font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div>
                            <span>{top}</span>
                            <div className="text-[10px] text-slate-400">
                              {topQuestions.length > 0 ? `${topQuestions.length} verified questions` : 'National curriculum topic'}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </button>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Practice Button for Selected Category */}
            {selectedUnit && (
              <div className="pt-2 border-t">
                {(() => {
                  const qList = selectedTopic
                    ? getQuestionsByTopic(subjectId, selectedTopic)
                    : getQuestionsForUnit(subjectId, selectedUnit);
                  const count = qList.length > 0 ? qList.length : 5;
                  const durationSec = count * 120; // 2 minutes per question

                  return (
                    <button
                      onClick={() =>
                        setModeModalTarget({
                          unitTitle: selectedUnit,
                          grade: `Grade ${selectedGrade}`,
                          topicTitle: selectedTopic || undefined,
                          isUnitPractice: true,
                          title: selectedTopic
                            ? `Grade ${selectedGrade} - ${selectedTopic}`
                            : `Grade ${selectedGrade} - ${selectedUnit}`,
                          questionCount: count,
                          durationSeconds: durationSec,
                        })
                      }
                      className="w-full bg-[#00897b] hover:bg-[#00796b] text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>
                        PRACTICE {selectedTopic || selectedUnit} ({count} Qs • {formatDurationHHMMSS(durationSec)})
                      </span>
                    </button>
                  );
                })()}
              </div>
            )}
          </div>
        ) : activeTab === 'All' ? (
          /* VIEW 2: FULL EXAMINATION BY YEARS (Matching Screenshot_20261019-071433_70cb2fc8.jpg) */
          <div className="space-y-4">
            {papers.map((paper) => {
              const stats = StorageService.getPaperStats(subjectId, paper.year);
              const scorePct = stats.bestScore !== null ? stats.bestScore : 0;
              const formattedDuration = `${Math.floor(paper.durationSeconds / 3600)}:${Math.floor((paper.durationSeconds % 3600) / 60).toString().padStart(2, '0')}`;

              return (
                <div
                  key={paper.id}
                  onClick={() =>
                    setModeModalTarget({
                      year: paper.year,
                      isUnitPractice: false,
                      title: `${config.title} — ${paper.year} E.C.`,
                      questionCount: paper.questionCount,
                      durationSeconds: paper.durationSeconds,
                    })
                  }
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-md transition active:scale-[0.99]"
                >
                  {/* Top teal header band */}
                  <div className="bg-[#00897b] px-4 py-2 text-white font-bold text-sm tracking-wide">
                    {paper.year} - Natural
                  </div>

                  {/* Body with circular gauge and details */}
                  <div className="p-4 flex items-center justify-between">
                    {/* Left: Info list */}
                    <div className="space-y-1.5 text-xs text-slate-600 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="w-28 text-slate-500 font-medium">Total Questions:</span>
                        <strong className="text-slate-900">{paper.questionCount}</strong>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-28 text-slate-500 font-medium">Given Time:</span>
                        <strong className="text-slate-900">{formattedDuration}</strong>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-28 text-slate-500 font-medium">Last Practiced:</span>
                        <strong className="text-slate-800">
                          {stats.lastPracticed
                            ? new Date(stats.lastPracticed).toLocaleDateString()
                            : 'Not yet'}
                        </strong>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-28 text-slate-500 font-medium">Exam Year:</span>
                        <strong className="text-slate-800">{paper.year} July EC</strong>
                      </div>
                    </div>

                    {/* Right: Circular score gauge (as shown in Screenshot_20261019-071433_70cb2fc8.jpg) */}
                    <div className="relative w-20 h-20 flex items-center justify-center shrink-0 ml-2">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="stroke-slate-100"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="stroke-[#e91e63] transition-all duration-700"
                          strokeWidth="8"
                          strokeDasharray={251}
                          strokeDashoffset={251 - (251 * scorePct) / 100}
                          strokeLinecap="round"
                          fill="transparent"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-base font-extrabold text-slate-900 leading-none">
                          {scorePct}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom swipe hint banner */}
            <div className="pt-2 pb-6 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <span>Swipe right or tap tabs above to access exams by unit</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
            </div>
          </div>
        ) : (
          /* VIEW 3: PRACTICE BY UNIT FOR SPECIFIC YEAR (Matching Screenshot_20261019-071418_49aaae27.jpg) */
          <div className="space-y-3">
            {units.map((u) => {
              const yearQuestions = ALL_QUESTIONS.filter(
                (q) =>
                  q.subject === subjectId &&
                  q.unit.toLowerCase() === u.title.toLowerCase() &&
                  q.year === activeTab
              );
              // Fallback to all questions in unit if specific year has no separate unit subset
              const allUnitQuestions = ALL_QUESTIONS.filter(
                (q) => q.subject === subjectId && q.unit.toLowerCase() === u.title.toLowerCase()
              );
              const qCount = yearQuestions.length > 0 ? yearQuestions.length : (allUnitQuestions.length > 0 ? allUnitQuestions.length : 6);
              const unitStats = StorageService.getUnitStats(subjectId, u.title);
              const progressPct = unitStats?.bestScore || 0;
              const durationSec = qCount * 120; // Exactly 2 minutes per question

              const isGrade12 = u.grade === 12;
              const gradeCircleBg = isGrade12 ? 'bg-[#1976d2]' : 'bg-[#e91e63]';

              return (
                <div
                  key={u.id}
                  onClick={() =>
                    setModeModalTarget({
                      unitTitle: u.title,
                      grade: `Grade ${u.grade}`,
                      year: activeTab as ExamYear,
                      isUnitPractice: true,
                      title: `${config.title} — Grade ${u.grade} Unit ${u.unitNumber}: ${u.title}`,
                      questionCount: qCount,
                      durationSeconds: durationSec,
                    })
                  }
                  className="bg-white rounded-xl p-3.5 shadow-2xs border border-slate-200/90 hover:shadow-md transition active:scale-[0.99] cursor-pointer flex items-center gap-3.5"
                >
                  {/* Circular Grade Badge: Blue for 12, Pink for 11 (as in Screenshot_20261019-071418_49aaae27.jpg) */}
                  <div
                    className={`w-12 h-12 rounded-full ${gradeCircleBg} text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {u.grade}
                  </div>

                  {/* Unit details and Participation level progress line */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs mb-0.5">
                      <span className="font-bold text-slate-900">
                        Unit {u.unitNumber}
                      </span>
                      <span className="text-slate-500 font-medium">
                        {qCount} ques
                      </span>
                    </div>

                    <h4 className="font-medium text-slate-800 text-sm truncate">
                      {u.title}
                    </h4>

                    {/* Participation Level Bar (Green/Red progress line as in screenshot) */}
                    <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          progressPct > 0 ? 'bg-[#43a047]' : 'bg-[#e53935] w-2'
                        }`}
                        style={{ width: progressPct > 0 ? `${progressPct}%` : '8px' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Answer Feedback Mode Selection Dialog */}
      {modeModalTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-100 p-6 overflow-hidden">
            <div className="flex items-center gap-2.5 text-[#00897b] mb-2">
              <Clock className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900">
                Examination Feedback Mode
              </h3>
            </div>

            <p className="text-xs text-slate-600 mb-2 leading-relaxed">
              For <strong>{modeModalTarget.title}</strong>
            </p>
            <div className="text-[11px] text-teal-800 bg-teal-50 px-2.5 py-1.5 rounded-lg mb-4 border border-teal-100 flex items-center justify-between">
              <span>{modeModalTarget.questionCount} Questions</span>
              <span>Time: <strong>{formatDurationHHMMSS(modeModalTarget.durationSeconds)}</strong> (2 min/question)</span>
            </div>

            <div className="space-y-3 mb-6">
              {/* Option 1: Right away */}
              <button
                onClick={() => handleStartExamConfirmed('right_away')}
                className="w-full p-3.5 rounded-xl border border-teal-200 hover:border-teal-500 bg-teal-50/50 hover:bg-teal-50 text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="w-4 h-4 rounded-full border-2 border-teal-600 mt-0.5 group-hover:bg-teal-600 flex items-center justify-center transition">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-teal-950">Right away (Study Mode)</div>
                  <div className="text-[11px] text-teal-800/80 leading-normal mt-0.5">
                    Instant color feedback with checkmark and explanations immediately as you tap each answer.
                  </div>
                </div>
              </button>

              {/* Option 2: After finishing */}
              <button
                onClick={() => handleStartExamConfirmed('after_finishing')}
                className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 bg-slate-50 hover:bg-white text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 mt-0.5 group-hover:bg-slate-800 flex items-center justify-center transition">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">After finishing (Exam Simulation)</div>
                  <div className="text-[11px] text-slate-600 leading-normal mt-0.5">
                    Realistic exam condition. Answers and explanations are revealed after submission.
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setModeModalTarget(null)}
              className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
