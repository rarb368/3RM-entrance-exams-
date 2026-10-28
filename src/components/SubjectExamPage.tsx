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
import { AiAssistantModal } from './AiAssistantModal';

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

export interface ExamCategoryDef {
  categoryNumber: number;
  title: string;
}

export const ENGLISH_CATEGORIES: ExamCategoryDef[] = [
  { categoryNumber: 1, title: 'Grammar' },
  { categoryNumber: 2, title: 'Reading Passage I' },
  { categoryNumber: 3, title: 'Reading Passage II' },
  { categoryNumber: 4, title: 'Sentence Comprehension' },
  { categoryNumber: 5, title: 'Vocabulary - Substitution' },
  { categoryNumber: 6, title: 'Vocabulary - Analogy' },
  { categoryNumber: 7, title: 'Vocabulary - Completion' },
  { categoryNumber: 8, title: 'Communicative Activities' },
  { categoryNumber: 9, title: 'Word Spelling' },
  { categoryNumber: 10, title: 'Punctuation and Capitalization' },
  { categoryNumber: 11, title: 'Jumbled Words' },
  { categoryNumber: 12, title: 'Paragraph Coherence' },
  { categoryNumber: 13, title: 'Letter Writing' },
  { categoryNumber: 14, title: 'Types of Paragraph Writing' },
];

export const APTITUDE_CATEGORIES: ExamCategoryDef[] = [
  { categoryNumber: 1, title: 'Classification Items' },
  { categoryNumber: 2, title: 'Reading Comprehension' },
  { categoryNumber: 3, title: 'Analytical and Logical Reasoning' },
  { categoryNumber: 4, title: 'Word Substitution' },
  { categoryNumber: 5, title: 'Synonyms' },
  { categoryNumber: 6, title: 'Reading Comprehension II' },
  { categoryNumber: 7, title: 'Sentence Correction' },
  { categoryNumber: 8, title: 'Analogy' },
  { categoryNumber: 9, title: 'Antonyms' },
  { categoryNumber: 10, title: 'Quantitative Reasoning' },
  { categoryNumber: 11, title: 'Data Interpretation' },
];

// Helper to filter questions by category
function filterQuestionsByCategory(
  subjectId: SubjectId,
  categoryTitle: string,
  yearTab: string
): Question[] {
  const normCat = categoryTitle.toLowerCase().trim();

  return ALL_QUESTIONS.filter((q) => {
    if (q.subject !== subjectId) return false;

    // Filter by year if specific year is chosen
    if (yearTab !== 'All') {
      const targetYear = yearTab.replace(/\s*(Na|So)$/i, '').trim();
      if (q.year !== targetYear) return false;
    }

    const qUnit = (q.unit || '').toLowerCase();
    const qPassage = (q.passageTitle || '').toLowerCase();
    const qTopic = (q.topic || '').toLowerCase();

    if (subjectId === 'english') {
      if (normCat === 'grammar') {
        return qUnit.includes('grammar') || qUnit.includes('structure') || qTopic.includes('grammar');
      }
      if (normCat === 'reading passage i') {
        return qUnit === 'reading passage i' || qPassage.includes('passage i') || qTopic.includes('passage i');
      }
      if (normCat === 'reading passage ii') {
        return qUnit === 'reading passage ii' || qPassage.includes('passage ii') || qTopic.includes('passage ii');
      }
      if (normCat === 'sentence comprehension') {
        return qUnit.includes('sentence comprehension') || qTopic.includes('sentence comprehension');
      }
      if (normCat === 'vocabulary - substitution') {
        return qUnit.includes('substitution') || qTopic.includes('substitution');
      }
      if (normCat === 'vocabulary - analogy') {
        return qUnit.includes('analogy') || qTopic.includes('analogy');
      }
      if (normCat === 'vocabulary - completion') {
        return qUnit.includes('completion') || (qUnit.includes('vocabulary') && !qUnit.includes('substitution') && !qUnit.includes('analogy'));
      }
      if (normCat === 'communicative activities') {
        return qUnit.includes('communicative') || qTopic.includes('communicative') || qTopic.includes('conversation');
      }
      if (normCat === 'word spelling') {
        return qUnit.includes('spelling') || qTopic.includes('spelling');
      }
      if (normCat === 'punctuation and capitalization') {
        return qUnit.includes('punctuation') || qTopic.includes('punctuation');
      }
      if (normCat === 'jumbled words') {
        return qUnit.includes('jumbled') || qTopic.includes('jumbled');
      }
      if (normCat === 'paragraph coherence') {
        return qUnit.includes('coherence') || qTopic.includes('coherence');
      }
      if (normCat === 'letter writing') {
        return qUnit.includes('letter') || qTopic.includes('letter');
      }
      if (normCat === 'types of paragraph writing') {
        return qUnit.includes('paragraph writing') || qTopic.includes('paragraph writing');
      }
    }

    if (subjectId === 'aptitude') {
      if (normCat === 'classification items') {
        return qUnit.includes('classification') || qTopic.includes('classification') || qTopic.includes('odd one out');
      }
      if (normCat === 'reading comprehension') {
        return qUnit === 'reading comprehension' || (qPassage.includes('passage i') && !qPassage.includes('passage ii'));
      }
      if (normCat === 'analytical and logical reasoning') {
        return qUnit.includes('analytical') || qUnit.includes('logical') || qUnit.includes('syllogism');
      }
      if (normCat === 'word substitution') {
        return qUnit.includes('substitution');
      }
      if (normCat === 'synonyms') {
        return qUnit.includes('synonyms');
      }
      if (normCat === 'reading comprehension ii') {
        return qUnit.includes('reading comprehension ii') || qPassage.includes('passage ii');
      }
      if (normCat === 'sentence correction') {
        return qUnit.includes('sentence correction');
      }
      if (normCat === 'analogy') {
        return qUnit.includes('analogy') || qTopic.includes('analogy');
      }
      if (normCat === 'antonyms') {
        return qUnit.includes('antonyms');
      }
      if (normCat === 'quantitative reasoning') {
        return qUnit.includes('quantitative') || qUnit.includes('sequence') || qUnit.includes('spatial');
      }
      if (normCat === 'data interpretation') {
        return qUnit.includes('data interpretation') || qUnit.includes('data sufficiency');
      }
    }

    return qUnit === normCat;
  });
}

export const SubjectExamPage: React.FC<SubjectExamPageProps> = ({
  subjectId,
  onBack,
  onStartExam,
}) => {
  const config = SUBJECT_CONFIGS[subjectId];
  const isSpecialCategorySubject = subjectId === 'english' || subjectId === 'aptitude';

  // Tabs
  const tabs = isSpecialCategorySubject
    ? ['All', '2018 Na', '2017 Na', '2016 Na', '2015 Na', '2014/15 Na', '2014/15 So']
    : ['All', '2018', '2017', '2016', '2015', '2014', '2013'];

  const [activeTab, setActiveTab] = useState<string>('All');
  const [showCategoryExplorer, setShowCategoryExplorer] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedUnitGrade, setSelectedUnitGrade] = useState<'all' | 9 | 10 | 11 | 12>('all');
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  const getGradeCircleBg = (grade: number | string) => {
    const gNum = typeof grade === 'string' ? parseInt(grade, 10) : grade;
    switch (gNum) {
      case 12:
        return 'bg-[#1976d2]';
      case 11:
        return 'bg-[#e91e63]';
      case 10:
        return 'bg-[#fb8c00]';
      case 9:
        return 'bg-[#00897b]';
      default:
        return 'bg-[#607d8b]';
    }
  };

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

  const [soonModalMessage, setSoonModalMessage] = useState<string | null>(null);
  const papers = getExamPapersForSubject(subjectId);
  const units = CURRICULUM_UNITS[subjectId] || [];
  const hierarchy = getCategoryHierarchyForSubject(subjectId);

  const handleTabClick = (tab: string) => {
    if (subjectId === 'maths_soc') {
      setSoonModalMessage('Rebira will add this questions soon.');
      return;
    }
    const cleanYear = tab.replace(/\s*(Na|So)$/i, '').trim();
    if (tab !== 'All' && cleanYear !== '2018' && cleanYear !== '2017' && cleanYear !== '2016') {
      setSoonModalMessage("Rebira will add this year's questions soon.");
      return;
    }
    setActiveTab(tab);
  };

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
    <div className="min-h-screen pb-24 bg-slate-100/70 text-slate-900 relative">
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

          {!isSpecialCategorySubject && (
            <button
              onClick={() => setShowCategoryExplorer(!showCategoryExplorer)}
              className="text-xs font-semibold bg-teal-800/80 hover:bg-teal-700 px-3 py-1.5 rounded-lg border border-teal-600/40 flex items-center gap-1.5 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showCategoryExplorer ? 'View By Year' : 'Categories Tree'}</span>
            </button>
          )}
        </div>

        {/* Horizontal Navigation Tabs */}
        {!showCategoryExplorer && (
          <div className="max-w-md mx-auto px-2 flex items-center justify-around border-t border-teal-600/40 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
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
        {showCategoryExplorer ? (
          /* VIEW 1: CATEGORY HIERARCHY TREE EXPLORER FOR SCIENCE SUBJECTS */
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
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                      selectedGrade === node.grade
                        ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>Grade {node.grade}</span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      {node.units.length} units
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Unit Selector */}
            {selectedGrade && (
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                  2. Select Curriculum Unit
                </label>
                <div className="space-y-1.5 max-h-56 overflow-y-auto">
                  {hierarchy
                    .find((n) => n.grade === selectedGrade)
                    ?.units.map((u) => {
                      const uQuestions = getQuestionsForUnit(subjectId, u.unitTitle);
                      return (
                        <button
                          key={u.unitTitle}
                          onClick={() => {
                            setSelectedUnit(u.unitTitle);
                            setSelectedTopic(null);
                          }}
                          className={`w-full p-2.5 rounded-xl text-left text-xs transition border flex items-center justify-between cursor-pointer ${
                            selectedUnit === u.unitTitle
                              ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="truncate mr-2">
                            <span className="font-semibold text-slate-500 mr-1.5">
                              U{u.unitNumber}.
                            </span>
                            <span>{u.unitTitle}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 shrink-0">
                            {uQuestions.length > 0 ? `${uQuestions.length} ques` : '0 ques'}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Practice Button for Selected Unit */}
            {selectedUnit && (
              <div className="pt-2 border-t">
                {(() => {
                  const qList = selectedTopic
                    ? getQuestionsByTopic(subjectId, selectedTopic)
                    : getQuestionsForUnit(subjectId, selectedUnit);
                  const count = qList.length;
                  const durationSec = Math.max(120, count * 120);

                  return (
                    <button
                      onClick={() => {
                        if (count === 0) {
                          setSoonModalMessage(
                            'No examination questions currently available for this topic. Rebira will add them soon.'
                          );
                          return;
                        }
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
                        });
                      }}
                      className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                        count === 0
                          ? 'bg-slate-400 text-white hover:bg-slate-500'
                          : 'bg-[#00897b] hover:bg-[#00796b] text-white'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>
                        PRACTICE {selectedTopic || selectedUnit} ({count} questions
                        {count > 0 ? ` • ${formatDurationHHMMSS(durationSec)}` : ''})
                      </span>
                    </button>
                  );
                })()}
              </div>
            )}
          </div>
        ) : activeTab === 'All' ? (
          /* VIEW 2: FULL EXAMINATION BY YEARS FOR SCIENCE SUBJECTS */
          <div className="space-y-4">
            {papers.map((paper) => {
              const stats = StorageService.getPaperStats(subjectId, paper.year);
              const scorePct = stats.bestScore !== null ? stats.bestScore : 0;
              const formattedDuration = `${Math.floor(paper.durationSeconds / 3600)}:${Math.floor((paper.durationSeconds % 3600) / 60).toString().padStart(2, '0')}`;

              return (
                <div
                  key={paper.id}
                  onClick={() => {
                    if (paper.year !== '2018' && paper.year !== '2017' && paper.year !== '2016') {
                      setSoonModalMessage("Rebira will add this year's questions soon.");
                      return;
                    }
                    setModeModalTarget({
                      year: paper.year,
                      isUnitPractice: false,
                      title: `${config.title} — ${paper.year} E.C.`,
                      questionCount: paper.questionCount,
                      durationSeconds: paper.durationSeconds,
                    });
                  }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-md transition active:scale-[0.99]"
                >
                  <div className="bg-[#00897b] px-4 py-2 text-white font-bold text-sm tracking-wide">
                    {paper.year} - Natural
                  </div>

                  <div className="p-4 flex items-center justify-between">
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
          </div>
        ) : isSpecialCategorySubject ? (
          /* VIEW 3A: SPECIAL CATEGORY VIEW FOR ENGLISH & APTITUDE WHEN TOUCHING A SPECIFIC YEAR */
          <div className="space-y-3">
            {(subjectId === 'english' ? ENGLISH_CATEGORIES : APTITUDE_CATEGORIES).map(
              (cat) => {
                const matchingQuestions = filterQuestionsByCategory(
                  subjectId,
                  cat.title,
                  activeTab
                );
                const qCount = matchingQuestions.length;
                const stats = StorageService.getUnitStats(subjectId, cat.title);
                const progressPct = stats?.bestScore || 0;
                const durationSec = Math.max(120, qCount * 120);

                return (
                  <div
                    key={cat.categoryNumber}
                    onClick={() => {
                      if (qCount === 0) {
                        setSoonModalMessage(
                          'No examination questions currently available for this category. Rebira will add them soon.'
                        );
                        return;
                      }
                      setModeModalTarget({
                        unitTitle: cat.title,
                        year:
                          activeTab !== 'All'
                            ? (activeTab.replace(/\s*(Na|So)$/i, '').trim() as ExamYear)
                            : undefined,
                        isUnitPractice: true,
                        title: `${config.title} — Category ${cat.categoryNumber}: ${cat.title}`,
                        questionCount: qCount,
                        durationSeconds: durationSec,
                      });
                    }}
                    className="bg-white rounded-xl p-3.5 shadow-2xs border border-slate-200/90 hover:shadow-md transition active:scale-[0.99] cursor-pointer flex items-center gap-3.5"
                  >
                    {/* Pink/Red Circular Badge with Category Number */}
                    <div className="w-12 h-12 rounded-full bg-[#e91e63] text-white font-black text-lg flex items-center justify-center shrink-0 shadow-xs">
                      {cat.categoryNumber}
                    </div>

                    {/* Category Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="font-bold text-slate-900 text-sm">
                          Category {cat.categoryNumber}
                        </span>
                        <span className="text-slate-500 font-medium">
                          {qCount} {qCount === 1 ? 'ques' : 'ques'}
                        </span>
                      </div>

                      <h4 className="font-medium text-slate-800 text-xs sm:text-sm truncate">
                        {cat.title}
                      </h4>

                      {/* Participation Level Bar */}
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
              }
            )}
          </div>
        ) : (
          /* VIEW 3B: PRACTICE BY UNIT FOR SCIENCE SUBJECTS */
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedUnitGrade('all')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedUnitGrade === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                All Grades ({units.length})
              </button>
              {([12, 11, 10, 9] as const).map((gr) => {
                const countForGr = units.filter((u) => u.grade === gr).length;
                if (countForGr === 0) return null;
                const isSelected = selectedUnitGrade === gr;
                return (
                  <button
                    key={gr}
                    onClick={() => setSelectedUnitGrade(gr)}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? `${getGradeCircleBg(gr)} text-white shadow-xs`
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : getGradeCircleBg(gr)}`}
                    />
                    <span>Grade {gr}</span>
                    <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                      ({countForGr})
                    </span>
                  </button>
                );
              })}
            </div>

            {units
              .filter((u) => selectedUnitGrade === 'all' || u.grade === selectedUnitGrade)
              .map((u) => {
                const yearQuestions = ALL_QUESTIONS.filter(
                  (q) =>
                    q.subject === subjectId &&
                    q.unit.toLowerCase() === u.title.toLowerCase() &&
                    q.year === activeTab
                );
                const allUnitQuestions = ALL_QUESTIONS.filter(
                  (q) => q.subject === subjectId && q.unit.toLowerCase() === u.title.toLowerCase()
                );
                const qCount = activeTab === 'All' ? allUnitQuestions.length : yearQuestions.length;
                const unitStats = StorageService.getUnitStats(subjectId, u.title);
                const progressPct = unitStats?.bestScore || 0;
                const durationSec = Math.max(120, qCount * 120);
                const gradeCircleBg = getGradeCircleBg(u.grade);

                return (
                  <div
                    key={u.id}
                    onClick={() => {
                      if (qCount === 0) {
                        setSoonModalMessage(
                          'No examination questions currently available for this unit. Rebira will add them soon.'
                        );
                        return;
                      }
                      setModeModalTarget({
                        unitTitle: u.title,
                        grade: `Grade ${u.grade}`,
                        year: activeTab !== 'All' ? (activeTab as ExamYear) : undefined,
                        isUnitPractice: true,
                        title: `${config.title} — Grade ${u.grade} Unit ${u.unitNumber}: ${u.title}`,
                        questionCount: qCount,
                        durationSeconds: durationSec,
                      });
                    }}
                    className="bg-white rounded-xl p-3.5 shadow-2xs border border-slate-200/90 hover:shadow-md transition active:scale-[0.99] cursor-pointer flex items-center gap-3.5"
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${gradeCircleBg} text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {u.grade}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="font-bold text-slate-900">
                          Unit {u.unitNumber}
                        </span>
                        <span className="text-slate-500 font-medium">
                          {qCount} {qCount === 1 ? 'ques' : 'questions'}
                        </span>
                      </div>

                      <h4 className="font-medium text-slate-800 text-sm truncate">
                        {u.title}
                      </h4>

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

      {/* Floating 3RM AI Assistant Trigger Button */}
      <button
        onClick={() => setIsAiAssistantOpen(true)}
        title="Ask 3RM AI Assistant"
        aria-label="3RM AI Assistant"
        className="fixed right-3 sm:right-5 bottom-6 z-40 w-13 h-13 rounded-full bg-[#00897b] hover:bg-[#00796b] text-white shadow-xl flex items-center justify-center border-2 border-white/90 active:scale-95 transition-all cursor-pointer group hover:ring-4 hover:ring-teal-200"
      >
        <Sparkles className="w-6 h-6 text-amber-300 group-hover:rotate-12 transition-transform" />
      </button>

      {/* 3RM AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        subjectTitle={config.title}
      />

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
              <button
                onClick={() => handleStartExamConfirmed('right_away')}
                className="w-full p-3.5 rounded-xl border border-teal-200 hover:border-teal-500 bg-teal-50/50 hover:bg-teal-50 text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="w-4 h-4 rounded-full border-2 border-teal-600 mt-0.5 group-hover:bg-teal-600 flex items-center justify-center transition">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-teal-950">
                    Right away
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Show green/red answer indication and full explanation immediately after choosing.
                  </p>
                </div>
              </button>

              <button
                onClick={() => handleStartExamConfirmed('after_finishing')}
                className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/40 text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 group-hover:border-teal-600 mt-0.5 flex items-center justify-center transition">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-teal-950">
                    After finishing
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Simulate genuine exam conditions with score calculation and answer review at the end.
                  </p>
                </div>
              </button>
            </div>

            <button
              onClick={() => setModeModalTarget(null)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Notice Modal */}
      {soonModalMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl p-6 text-center border border-slate-100 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1.5">
              Notice
            </h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              {soonModalMessage}
            </p>
            <button
              onClick={() => setSoonModalMessage(null)}
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#00897b] hover:bg-[#00796b] text-white shadow-sm transition cursor-pointer"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
