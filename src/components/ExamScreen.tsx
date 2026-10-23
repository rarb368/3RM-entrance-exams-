import React, { useEffect, useState, useRef } from 'react';
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Send,
  ArrowLeft,
  X,
  BookOpen,
  Check,
  MoreVertical,
  ChevronRight,
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
  // For unit practice: 2 minutes per question (questions.length * 120 seconds)
  const totalDuration = timeSeconds || (isUnitPractice ? questions.length * 120 : config.durationSeconds);

  // Initialize or restore active session
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>(() => {
    const savedSession = StorageService.getActiveSession();
    if (
      savedSession &&
      savedSession.subject === subjectId &&
      savedSession.year === year &&
      savedSession.isUnitPractice === isUnitPractice
    ) {
      return savedSession.userAnswers || {};
    }
    return {};
  });

  const [deadlineTimestamp, setDeadlineTimestamp] = useState<number>(() => {
    const savedSession = StorageService.getActiveSession();
    if (
      savedSession &&
      savedSession.subject === subjectId &&
      savedSession.year === year &&
      savedSession.isUnitPractice === isUnitPractice &&
      savedSession.deadlineTimestamp > Date.now()
    ) {
      return savedSession.deadlineTimestamp;
    }
    return Date.now() + totalDuration * 1000;
  });

  const [remainingSeconds, setRemainingSeconds] = useState<number>(() => {
    return Math.max(0, Math.floor((deadlineTimestamp - Date.now()) / 1000));
  });

  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});
  const [showPalette, setShowPalette] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Sync session into localStorage so accidental refresh or quit preserves progress
  useEffect(() => {
    const session: ActiveExamSession = {
      examId,
      subject: subjectId,
      year,
      unitTitle,
      grade,
      topicTitle,
      isUnitPractice,
      feedbackMode,
      deadlineTimestamp,
      totalDurationSeconds: totalDuration,
      timeRemainingSeconds: remainingSeconds,
      questionIds: questions.map((q) => q.id),
      userAnswers,
      startedAt: new Date().toISOString(),
    };
    StorageService.saveActiveSession(session);
  }, [userAnswers, deadlineTimestamp, remainingSeconds]);

  // Master countdown timer
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
    // In Right Away mode, lock after choosing
    if (feedbackMode === 'right_away' && userAnswers[questionId] !== undefined) {
      return;
    }

    const updated = {
      ...userAnswers,
      [questionId]: optionIndex,
    };
    setUserAnswers(updated);
    StorageService.updateSessionAnswers(updated);

    // In Right Away mode, automatically expand explanation
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

  // Quit Exam confirmation handler: saves answers and time, returns to dashboard without submitting
  const handleConfirmQuit = () => {
    // Save state
    const session: ActiveExamSession = {
      examId,
      subject: subjectId,
      year,
      unitTitle,
      grade,
      topicTitle,
      isUnitPractice,
      feedbackMode,
      deadlineTimestamp,
      totalDurationSeconds: totalDuration,
      timeRemainingSeconds: remainingSeconds,
      questionIds: questions.map((q) => q.id),
      userAnswers,
      startedAt: new Date().toISOString(),
    };
    StorageService.saveActiveSession(session);
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

  const scrollToQuestion = (questionId: string) => {
    const el = questionRefs.current[questionId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowPalette(false);
    }
  };

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);
  const isFiveMinWarning = remainingSeconds <= 300 && remainingSeconds > 60;
  const isOneMinWarning = remainingSeconds <= 60 && remainingSeconds > 0;

  // Header Title formatted as in Screenshot: "G12 U4 : 5 ques." or full paper
  const headerTitle = isUnitPractice && unitTitle
    ? `${grade ? grade.replace('Grade ', 'G') : 'G12'} : ${questions.length} ques.`
    : `${config.shortName} ${year || '2017'} : ${questions.length} ques.`;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-20">
      {/* Sticky Examination Top App Bar (matching Screenshot) */}
      <header className="sticky top-0 z-30 bg-[#00897b] text-white shadow-md">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          {/* Top-Left Visible Back / Quit Exam Button */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowQuitConfirm(true)}
              className="p-1 rounded-lg hover:bg-white/15 transition active:scale-95 cursor-pointer flex items-center gap-1 text-white"
              title="Quit Exam"
              aria-label="Quit Exam"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <span className="font-bold text-sm sm:text-base tracking-wide truncate max-w-[170px]">
              {headerTitle}
            </span>
          </div>

          {/* Right: Timer & Finish & Palette */}
          <div className="flex items-center gap-2">
            {/* Countdown Timer */}
            <div
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-mono text-xs font-bold ${
                isOneMinWarning
                  ? 'bg-rose-600 text-white animate-pulse'
                  : isFiveMinWarning
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-teal-950/60 text-teal-100 border border-teal-600/40'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{formatDurationHHMMSS(remainingSeconds)}</span>
            </div>

            {/* Jump Palette button */}
            <button
              onClick={() => setShowPalette(!showPalette)}
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

      {/* Main Questions Container (Vertically Scrollable, matching ethiomatric_1792390847_2dd03890.jpg) */}
      <main className="max-w-md mx-auto px-3 pt-3 space-y-4">
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
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/90 scroll-mt-20"
            >
              {/* Question Header: Number on Left, "Improve" on Right (matching screenshot) */}
              <div className="flex items-center justify-between border-b border-[#e91e63]/40 pb-1.5 mb-2.5">
                <span className="font-extrabold text-base text-slate-900">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-400 hover:text-slate-600 font-medium cursor-pointer">
                  Improve
                </span>
              </div>

              {/* Question Text */}
              <p className="text-slate-900 text-sm font-medium leading-relaxed mb-3 whitespace-pre-line">
                {q.question}
              </p>

              {/* Options with EXACT Solidity and Styling matching screenshot ethiomatric_1792390847_2dd03890.jpg */}
              <div className="space-y-2 mb-2">
                {q.options.map((optionText, optIdx) => {
                  const isUserSelection = selectedOption === optIdx;
                  const isCorrectAnswer = optIdx === q.correctAnswer;

                  // Determine background and solidity
                  let containerClasses =
                    'w-full py-2.5 px-3 rounded-md text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer border border-transparent';
                  let radioCircleClasses =
                    'w-4 h-4 rounded-full border border-slate-400 mr-2.5 flex items-center justify-center shrink-0';

                  if (isRightAway && isAnswered) {
                    if (isCorrectAnswer) {
                      // Solid Green Bar (same solidity as image: #81c784)
                      containerClasses =
                        'w-full py-2.5 px-3 rounded-md text-left text-xs sm:text-sm flex items-center justify-between bg-[#81c784] text-slate-950 font-medium shadow-xs';
                      radioCircleClasses =
                        'w-4 h-4 rounded-full bg-[#388e3c] border-2 border-white mr-2.5 flex items-center justify-center shrink-0';
                    } else if (isUserSelection) {
                      // Solid Salmon-Red Bar (same solidity as image: #ef9a9a)
                      containerClasses =
                        'w-full py-2.5 px-3 rounded-md text-left text-xs sm:text-sm flex items-center justify-between bg-[#ef9a9a] text-slate-950 font-medium shadow-xs';
                      radioCircleClasses =
                        'w-4 h-4 rounded-full bg-[#d32f2f] border-2 border-white mr-2.5 flex items-center justify-center shrink-0';
                    } else {
                      containerClasses =
                        'w-full py-2.5 px-3 rounded-md text-left text-xs sm:text-sm flex items-center justify-between bg-white text-slate-600 hover:bg-slate-50';
                    }
                  } else if (isUserSelection) {
                    // In After Finishing mode: clean selection highlight
                    containerClasses =
                      'w-full py-2.5 px-3 rounded-md text-left text-xs sm:text-sm flex items-center justify-between bg-teal-50 border-teal-500 text-teal-950 font-medium';
                    radioCircleClasses =
                      'w-4 h-4 rounded-full bg-[#00897b] border-2 border-white mr-2.5 flex items-center justify-center shrink-0';
                  } else {
                    containerClasses =
                      'w-full py-2.5 px-3 rounded-md text-left text-xs sm:text-sm flex items-center justify-between bg-white text-slate-800 hover:bg-slate-50';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isRightAway && isAnswered}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={containerClasses}
                    >
                      <div className="flex items-center min-w-0 flex-1 pr-2">
                        <div className={radioCircleClasses}>
                          {isUserSelection && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="leading-snug text-slate-900">
                          {optionText}
                        </span>
                      </div>

                      {/* Right-edge Icons matching ethiomatric_1792390847_2dd03890.jpg */}
                      {isRightAway && isAnswered && (
                        <div className="shrink-0 ml-2">
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

              {/* Collapsible "▾ Explanation" Accordion (matching screenshot) */}
              {(isRightAway && isAnswered) ? (
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
                    <div className="mt-2.5 p-3 rounded-lg bg-teal-50/80 border border-teal-200 text-xs text-teal-950 leading-relaxed animate-fade-in">
                      <p className="font-semibold text-teal-900 mb-1">
                        Verified Explanation & Solution:
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
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

      {/* Visible Quit Exam Confirmation Dialog (as explicitly requested by user) */}
      {showQuitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-100 p-6">
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Are you sure you want to quit this exam?
            </h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Your selected answers ({answeredCount}/{questions.length}) and remaining time ({formatDurationHHMMSS(remainingSeconds)}) will be securely saved locally. You can resume this examination later without losing progress.
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
