import React, { useEffect, useState, useRef } from 'react';
import {
  Clock,
  AlertTriangle,
  LayoutGrid,
  Send,
  ArrowLeft,
  X,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import {
  ActiveExamSession,
  AnswerFeedbackMode,
  ExamAttempt,
  ExamYear,
  Question,
  StudentProfile,
  SubjectId,
} from '../types';
import { SUBJECT_CONFIGS, formatDurationHHMMSS } from '../data/subjectConfig';
import { StorageService } from '../utils/storage';
import { DiagramViewer } from './DiagramViewer';
import { cleanExamText } from '../utils/textCleaner';
import { AiAssistantModal } from './AiAssistantModal';

interface ExamScreenProps {
  subjectId: SubjectId;
  year?: ExamYear;
  unitTitle?: string;
  grade?: string;
  topicTitle?: string;
  isUnitPractice: boolean;
  feedbackMode: AnswerFeedbackMode;
  questions: Question[];
  studentProfile: StudentProfile | null;
  timeSeconds?: number;
  onFinishExam: (attempt: ExamAttempt) => void;
  onExitExam: () => void;
}

export const ExamScreen: React.FC<ExamScreenProps> = ({
  subjectId,
  year,
  unitTitle,
  grade,
  topicTitle,
  isUnitPractice,
  feedbackMode,
  questions,
  studentProfile,
  timeSeconds,
  onFinishExam,
  onExitExam,
}) => {
  const config = SUBJECT_CONFIGS[subjectId];
  const examId = `${subjectId}-${year || 'unit'}-${Date.now()}`;
  const totalDuration = timeSeconds || (isUnitPractice ? questions.length * 120 : config.durationSeconds);

  // Fresh examination session: starts fresh without resuming stale quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [deadlineTimestamp, setDeadlineTimestamp] = useState<number>(() => Date.now() + totalDuration * 1000);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(totalDuration);

  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});
  const [showPalette, setShowPalette] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isTimerHidden, setIsTimerHidden] = useState(false);

  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const left = Math.max(0, Math.floor((deadlineTimestamp - now) / 1000));
      setRemainingSeconds(left);

      if (left <= 0) {
        clearInterval(interval);
        handleAutoSubmit();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadlineTimestamp]);

  const handleAutoSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    buildAndFinalizeAttempt();
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (feedbackMode === 'right_away' && userAnswers[questionId] !== undefined) {
      return;
    }

    const updated = {
      ...userAnswers,
      [questionId]: optionIndex,
    };
    setUserAnswers(updated);

    if (feedbackMode === 'right_away') {
      setExpandedExplanations((prev) => ({ ...prev, [questionId]: true }));
    }
  };

  const toggleExplanation = (questionId: string) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Quit Exam confirmation handler: clears active session so student starts fresh next time
  const handleConfirmQuit = () => {
    StorageService.clearActiveSession();
    setUserAnswers({});
    setShowQuitConfirm(false);
    onExitExam();
  };

  const buildAndFinalizeAttempt = () => {
    setIsSubmitting(true);
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;

    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const incorrectCount = answeredCount - correctCount;
    const unansweredCount = questions.length - answeredCount;
    const scorePercentage = Math.round((correctCount / questions.length) * 1000) / 10;
    const timeUsedSeconds = Math.min(totalDuration, totalDuration - remainingSeconds);

    const attempt: ExamAttempt = {
      id: examId,
      studentEmail: studentProfile ? studentProfile.email : 'student@aibsbss.edu',
      studentName: studentProfile ? studentProfile.fullName : 'AIBSBSS Candidate',
      subject: subjectId,
      year,
      unitTitle,
      grade,
      topicTitle,
      isUnitPractice,
      feedbackMode,
      totalQuestions: questions.length,
      answeredCount,
      correctCount,
      incorrectCount,
      unansweredCount,
      scorePercentage,
      timeUsedSeconds,
      totalDurationSeconds: totalDuration,
      completedAt: new Date().toISOString(),
      userAnswers,
    };

    StorageService.saveAttempt(attempt);
    StorageService.clearActiveSession();
    onFinishExam(attempt);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;
  const isOneMinWarning = remainingSeconds <= 60 && remainingSeconds > 0;

  const scrollToQuestion = (qId: string) => {
    const el = questionRefs.current[qId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setShowPalette(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 bg-slate-100 text-slate-900 relative">
      {/* Sticky Exam Top Bar */}
      <header className="sticky top-0 z-30 bg-[#00897b] text-white shadow-md">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between">
          {/* Left: Back/Exit & Title */}
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              onClick={() => setShowQuitConfirm(true)}
              className="p-1.5 rounded-lg hover:bg-white/15 text-white transition active:scale-95 cursor-pointer shrink-0"
              aria-label="Exit exam"
              title="Quit Exam"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="min-w-0 truncate">
              <h2 className="font-bold text-xs sm:text-sm capitalize leading-tight truncate">
                {unitTitle ? unitTitle : `${config.shortName} ${year || ''}`}
              </h2>
              <span className="text-[10px] text-teal-100 font-medium">
                {answeredCount}/{questions.length} answered
              </span>
            </div>
          </div>

          {/* Right: Digital Countdown Timer, Palette, and Finish Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Timer Badge - Tap to toggle visibility */}
            <button
              type="button"
              onClick={() => setIsTimerHidden((prev) => !prev)}
              title={isTimerHidden ? "Touch to show countdown" : "Touch to hide countdown"}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-sm font-black tracking-widest cursor-pointer select-none transition active:scale-95 ${
                remainingSeconds <= 300 && !isTimerHidden
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-teal-900/80 text-amber-300 border border-teal-600/50 hover:bg-teal-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{isTimerHidden ? '••:••:••' : formatDurationHHMMSS(remainingSeconds)}</span>
            </button>

            {/* Question Palette Trigger */}
            <button
              onClick={() => setShowPalette(true)}
              title="Question Palette"
              className="p-1.5 rounded-lg hover:bg-white/15 text-white transition cursor-pointer"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>

            {/* Finish Button */}
            <button
              onClick={() => setShowSubmitModal(true)}
              className="bg-white text-teal-950 font-bold px-3 py-1 rounded-lg text-xs hover:bg-teal-50 transition shadow-xs cursor-pointer"
            >
              Finish
            </button>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-teal-950/40 h-1">
          <div
            className="bg-teal-200 h-1 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Warning Banners */}
      {isOneMinWarning && (
        <div className="bg-rose-600 text-white px-4 py-2 text-xs font-bold text-center flex items-center justify-center gap-2 sticky top-14 z-20 animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          <span>Less than 1 minute remaining! Examination will auto-submit at 00:00:00.</span>
        </div>
      )}

      {/* Main Questions Container (Responsive, No Overflow, No Topics Displayed) */}
      <main className="max-w-2xl mx-auto px-3 sm:px-4 pt-4 space-y-4 w-full">
        {questions.map((q, idx) => {
          const selectedOption = userAnswers[q.id];
          const isAnswered = selectedOption !== undefined;
          const isRightAway = feedbackMode === 'right_away';
          const isExplanationExpanded = !!expandedExplanations[q.id];

          return (
            <div
              key={q.id}
              ref={(el) => {
                questionRefs.current[q.id] = el;
              }}
              onFocus={() => setActiveQuestionIndex(idx)}
              onClick={() => setActiveQuestionIndex(idx)}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200/90 scroll-mt-20 overflow-hidden break-words max-w-full w-full"
            >
              {/* Question Header: Number on Left, "Improve" on Right */}
              <div className="flex items-center justify-between border-b border-[#e91e63]/30 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                    {idx + 1}
                  </span>
                </div>
                <span className="text-xs text-slate-400 hover:text-slate-600 font-medium cursor-pointer">
                  Improve
                </span>
              </div>

              {/* Reading Passage Card if question belongs to a passage */}
              {q.passageText && (
                <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 text-slate-800 shadow-2xs overflow-hidden break-words max-w-full">
                  <div className="flex items-center gap-2 font-bold text-amber-950 text-xs sm:text-sm mb-2 border-b border-amber-200/60 pb-1.5">
                    <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
                    <span className="break-words">{q.passageTitle || 'Reading Comprehension Passage'}</span>
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-800 font-normal space-y-2 max-h-72 overflow-y-auto pr-1 break-words [overflow-wrap:anywhere]">
                    {q.passageText}
                  </div>
                </div>
              )}

              {/* Question Text - Responsive and Wrap-Protected */}
              <p className="text-slate-900 text-base sm:text-lg font-bold leading-relaxed mb-4 whitespace-pre-wrap break-words [overflow-wrap:anywhere] max-w-full w-full">
                {cleanExamText(q.question)}
              </p>

              {/* Diagram / Image if question has visual asset */}
              {(q.diagramType || q.diagramSvg || q.imageUrl) && (
                <DiagramViewer
                  diagramType={q.diagramType}
                  diagramSvg={q.diagramSvg}
                  imageUrl={q.imageUrl}
                />
              )}

              {/* Options with Word Wrap Protection */}
              <div className="space-y-2.5 mb-2 w-full max-w-full">
                {q.options.map((optionText, optIdx) => {
                  const isUserSelection = selectedOption === optIdx;
                  const isCorrectAnswer = optIdx === q.correctAnswer;
                  const optionLetter = String.fromCharCode(65 + optIdx);

                  let containerClasses =
                    'w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl text-left flex items-start sm:items-center justify-between transition-colors cursor-pointer border overflow-hidden break-words max-w-full';
                  let radioCircleClasses =
                    'w-6 h-6 rounded-full border-2 border-slate-400 mr-2.5 sm:mr-3 flex items-center justify-center shrink-0 font-black text-xs sm:text-sm mt-0.5 sm:mt-0';

                  if (isRightAway && isAnswered) {
                    if (isCorrectAnswer) {
                      containerClasses += ' bg-[#81c784] text-slate-950 font-bold shadow-xs border-[#66bb6a]';
                      radioCircleClasses =
                        'w-6 h-6 rounded-full bg-[#388e3c] border-2 border-white text-white mr-2.5 sm:mr-3 flex items-center justify-center shrink-0 font-black text-xs sm:text-sm mt-0.5 sm:mt-0';
                    } else if (isUserSelection) {
                      containerClasses += ' bg-[#ef9a9a] text-slate-950 font-bold shadow-xs border-[#e57373]';
                      radioCircleClasses =
                        'w-6 h-6 rounded-full bg-[#d32f2f] border-2 border-white text-white mr-2.5 sm:mr-3 flex items-center justify-center shrink-0 font-black text-xs sm:text-sm mt-0.5 sm:mt-0';
                    } else {
                      containerClasses += ' bg-white text-slate-700 hover:bg-slate-50 border-slate-200/80';
                    }
                  } else if (isUserSelection) {
                    containerClasses += ' bg-teal-50 border-2 border-teal-600 text-teal-950 font-bold';
                    radioCircleClasses =
                      'w-6 h-6 rounded-full bg-[#00897b] border-2 border-white text-white mr-2.5 sm:mr-3 flex items-center justify-center shrink-0 font-black text-xs sm:text-sm mt-0.5 sm:mt-0';
                  } else {
                    containerClasses += ' bg-white text-slate-900 hover:bg-slate-50 border-slate-200/90';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isRightAway && isAnswered}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={containerClasses}
                    >
                      <div className="flex items-start sm:items-center min-w-0 flex-1 pr-2">
                        <div className={radioCircleClasses}>
                          <span>{optionLetter}</span>
                        </div>
                        <span className="leading-snug font-bold text-slate-950 text-sm sm:text-base break-words [overflow-wrap:anywhere] flex-1 min-w-0">
                          {cleanExamText(optionText)}
                        </span>
                      </div>

                      {/* Right-edge Icons */}
                      {isRightAway && isAnswered && (
                        <div className="shrink-0 ml-1.5 mt-0.5 sm:mt-0">
                          {isCorrectAnswer && (
                            <Check className="w-5 h-5 text-white stroke-[3]" />
                          )}
                          {isUserSelection && !isCorrectAnswer && (
                            <X className="w-5 h-5 text-white stroke-[3]" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Collapsible Explanation Accordion */}
              {isRightAway && isAnswered && (
                <div className="pt-2">
                  <button
                    onClick={() => toggleExplanation(q.id)}
                    className="text-xs font-semibold text-[#00897b] hover:text-[#00796b] flex items-center gap-1 cursor-pointer"
                  >
                    {isExplanationExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                    <span>Explanation</span>
                  </button>

                  {isExplanationExpanded && (
                    <div className="mt-2.5 p-3 rounded-lg bg-teal-50/80 border border-teal-200 text-xs text-teal-950 leading-relaxed animate-fade-in break-words [overflow-wrap:anywhere]">
                      <p className="font-semibold text-teal-900 mb-1">
                        Verified Explanation & Solution:
                      </p>
                      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                        {cleanExamText(q.explanation)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Submit Button in scroll */}
        <div className="pt-2 pb-8 text-center">
          <button
            onClick={() => setShowSubmitModal(true)}
            className="w-full bg-[#00897b] hover:bg-[#00796b] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>SUBMIT EXAMINATION</span>
          </button>
        </div>
      </main>

      {/* Floating 3RM AI Assistant Trigger Button (appears even when student is taking exam) */}
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
        currentQuestion={questions[activeQuestionIndex || 0]}
        currentQuestionNumber={(activeQuestionIndex || 0) + 1}
        subjectTitle={config.title}
      />

      {/* Question Palette Drawer */}
      {showPalette && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-5 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b pb-2.5 mb-3">
              <h3 className="font-bold text-sm text-slate-900">
                Question Palette ({answeredCount}/{questions.length})
              </h3>
              <button
                onClick={() => setShowPalette(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-6 gap-2 overflow-y-auto p-1 flex-1">
              {questions.map((q, i) => {
                const isAns = userAnswers[q.id] !== undefined;
                return (
                  <button
                    key={q.id}
                    onClick={() => scrollToQuestion(q.id)}
                    className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center transition cursor-pointer ${
                      isAns
                        ? 'bg-[#00897b] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Visible Quit Exam Confirmation Dialog */}
      {showQuitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-100 p-6">
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Are you sure you want to quit this exam?
            </h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              If you quit now, this session will end. When you return to take this exam again, it will start completely fresh as a new examination.
            </p>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setShowQuitConfirm(false)}
                className="flex-1 py-2.5 text-xs font-bold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                Continue Exam
              </button>
              <button
                onClick={handleConfirmQuit}
                className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-sm transition cursor-pointer"
              >
                Quit Exam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-100 p-6">
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Submit Examination?
            </h3>
            <div className="bg-slate-50 rounded-xl p-3 mb-4 space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>Answered:</span>
                <strong className="text-teal-700">{answeredCount} of {questions.length}</strong>
              </div>
              <div className="flex justify-between">
                <span>Unanswered:</span>
                <strong className="text-rose-600">{questions.length - answeredCount}</strong>
              </div>
              <div className="flex justify-between">
                <span>Time Left:</span>
                <strong>{formatDurationHHMMSS(remainingSeconds)}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 text-xs font-semibold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Continue
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={buildAndFinalizeAttempt}
                className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-[#00897b] hover:bg-[#00796b] text-white shadow-sm cursor-pointer"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
