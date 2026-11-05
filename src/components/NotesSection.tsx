import React, { useState } from "react";
import {
  NOTES_SUBJECTS,
  CURRICULUM_UNITS_DATA,
  SubjectMeta,
  CurriculumUnit
} from "../data/notesCurriculum";
import {
  chemistryGrade12Unit1Notes,
  NoteTopic,
  AssessmentQuestion
} from "../data/notes/chemistryGrade12Unit1";
import { chemistryGrade12Unit2Notes } from "../data/notes/chemistryGrade12Unit2";
import { chemistryGrade12Unit3Notes } from "../data/notes/chemistryGrade12Unit3";
import { chemistryGrade12Unit4Notes } from "../data/notes/chemistryGrade12Unit4";
import { chemistryGrade12Unit5Notes } from "../data/notes/chemistryGrade12Unit5";
import { SubjectIllustrations } from "./SubjectIllustrations";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  ChevronRight,
  RefreshCw,
  Search,
  Check,
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowUp,
  Bell,
  User,
  Trophy,
  Sun,
  Moon
} from "lucide-react";

interface NotesSectionProps {
  onBackToHome: () => void;
  onOpenAiBot?: () => void;
}

type ViewState = "subjects" | "grades" | "units" | "topic_detail";

export const NotesSection: React.FC<NotesSectionProps> = ({ onBackToHome, onOpenAiBot }) => {
  const [currentView, setCurrentView] = useState<ViewState>("subjects");
  const [selectedSubject, setSelectedSubject] = useState<SubjectMeta | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<CurriculumUnit | null>(null);

  // Theme state: "Notes' auto is light and might be found in dark"
  // Default/Auto is LIGHT theme (false), but user can toggle to DARK mode (true)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("3rm_notes_theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
      // Auto is light as requested by user
      return false;
    } catch {
      return false;
    }
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("3rm_notes_theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  };

  // Assessment question answer state: { [questionId]: selectedOptionIndex }
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  
  // Search filter for subjects
  const [subjectSearch, setSubjectSearch] = useState<string>("");

  // Search filter for topics in notes
  const [notesFilter, setNotesFilter] = useState<string>("");

  // Collapse / Expand state for individual topics (all open by default)
  const [collapsedTopics, setCollapsedTopics] = useState<Record<string, boolean>>({});

  // Handler: Select Subject
  const handleSelectSubject = (subject: SubjectMeta) => {
    setSelectedSubject(subject);
    if (!subject.hasGrades) {
      // English and SAT: bypass grade selection directly to units (grade 0)
      setSelectedGrade(0);
      setCurrentView("units");
    } else {
      // Biology, Chemistry, Maths, Physics, Geography, History, Economics: ask for grade (9-12)
      setSelectedGrade(null);
      setCurrentView("grades");
    }
  };

  // Handler: Select Grade
  const handleSelectGrade = (grade: number) => {
    setSelectedGrade(grade);
    setCurrentView("units");
  };

  // Handler: Select Unit
  const handleSelectUnit = (unit: CurriculumUnit) => {
    setSelectedUnit(unit);
    setCurrentView("topic_detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handler: Answer assessment question
  const handleAnswerQuestion = (qId: string, optionIndex: number) => {
    if (userAnswers[qId] !== undefined) return; // prevent changing after answered
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  // Reset quiz for a single topic
  const handleResetTopicQuiz = (topic: NoteTopic) => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      topic.practiceQuestions.forEach((q) => {
        delete next[q.id];
      });
      return next;
    });
  };

  // Toggle collapse state for a topic
  const toggleTopicCollapse = (topicId: string) => {
    setCollapsedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  // Expand all / collapse all
  const setAllCollapsed = (collapsed: boolean) => {
    const activeTopics = getActiveUnitNotes()?.topics || [];
    const next: Record<string, boolean> = {};
    activeTopics.forEach((t) => {
      next[t.id] = collapsed;
    });
    setCollapsedTopics(next);
  };

  // Scroll to topic
  const scrollToTopic = (topicId: string) => {
    const el = document.getElementById(`topic-${topicId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Breadcrumb back handler
  const handleBack = () => {
    if (currentView === "topic_detail") {
      setCurrentView("units");
    } else if (currentView === "units") {
      if (selectedSubject && !selectedSubject.hasGrades) {
        setCurrentView("subjects");
        setSelectedSubject(null);
      } else {
        setCurrentView("grades");
      }
    } else if (currentView === "grades") {
      setCurrentView("subjects");
      setSelectedSubject(null);
    } else {
      onBackToHome();
    }
  };

  // Get active full notes based on selected subject, grade, and unit
  const getActiveUnitNotes = () => {
    if (selectedSubject?.id === "chemistry" && selectedGrade === 12) {
      if (selectedUnit?.unitNumber === 1) {
        return chemistryGrade12Unit1Notes;
      }
      if (selectedUnit?.unitNumber === 2) {
        return chemistryGrade12Unit2Notes;
      }
      if (selectedUnit?.unitNumber === 3) {
        return chemistryGrade12Unit3Notes;
      }
      if (selectedUnit?.unitNumber === 4) {
        return chemistryGrade12Unit4Notes;
      }
      if (selectedUnit?.unitNumber === 5) {
        return chemistryGrade12Unit5Notes;
      }
    }
    return null;
  };

  const activeNotes = getActiveUnitNotes();
  const hasFullNotes = !!activeNotes;

  // Get units for current subject and grade
  const currentUnits: CurriculumUnit[] =
    selectedSubject && selectedGrade !== null
      ? CURRICULUM_UNITS_DATA[selectedSubject.id]?.[selectedGrade] || []
      : [];

  // Filtered topics for search in active unit notes
  const visibleTopics = activeNotes
    ? activeNotes.topics.filter(
        (t) =>
          notesFilter === "" ||
          t.title.toLowerCase().includes(notesFilter.toLowerCase()) ||
          t.topicNumber.includes(notesFilter) ||
          t.coreConcepts.some((c) => c.toLowerCase().includes(notesFilter.toLowerCase()))
      )
    : [];

  // Filtered subjects for search
  const filteredSubjects = NOTES_SUBJECTS.filter(
    (s) =>
      s.name.toLowerCase().includes(subjectSearch.toLowerCase()) ||
      s.description.toLowerCase().includes(subjectSearch.toLowerCase()) ||
      s.tagline.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen pb-28 transition-colors duration-200 selection:bg-emerald-500 selection:text-white ${
        isDarkMode
          ? "bg-[#070b09] text-white"
          : "bg-slate-100/90 text-slate-900"
      }`}
    >
      {/* Top Application Header with Theme Toggle */}
      <div
        className={`sticky top-0 z-30 backdrop-blur-md border-b transition-colors duration-200 shadow-sm ${
          isDarkMode
            ? "bg-[#070b09]/95 border-emerald-900/40"
            : "bg-white/95 border-slate-200"
        }`}
      >
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {currentView !== "subjects" ? (
              <button
                onClick={handleBack}
                className={`p-2 rounded-xl border transition active:scale-95 flex items-center justify-center shadow-xs ${
                  isDarkMode
                    ? "bg-slate-900/80 border-emerald-900/60 text-emerald-400 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
                title="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-black border-2 border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.35)] flex items-center justify-center">
                <span className="text-white font-black text-xs tracking-tighter">3RM</span>
              </div>
            )}

            <div>
              <div className="flex items-center space-x-1.5">
                <h1
                  className={`text-lg font-black tracking-wide ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  3RM
                </h1>
                <span
                  className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded border ${
                    isDarkMode
                      ? "bg-emerald-950/80 text-emerald-400 border-emerald-800/60"
                      : "bg-emerald-50 text-emerald-800 border-emerald-200"
                  }`}
                >
                  Rebira's Notes
                </span>
              </div>
              <p
                className={`text-[11px] font-medium ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Learn • Practice • Excel
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Light / Dark Mode Switcher (Auto is light, toggles to dark) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition flex items-center justify-center cursor-pointer active:scale-95 shadow-xs ${
                isDarkMode
                  ? "bg-slate-900 border-emerald-900/60 text-amber-300 hover:text-amber-200 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
              title={isDarkMode ? "Switch to Light Mode (Default)" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 fill-amber-300/30" /> : <Moon className="w-4 h-4" />}
            </button>

            {onOpenAiBot && (
              <button
                onClick={onOpenAiBot}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-md shadow-emerald-950 transition active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>AI</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-3.5 py-4 space-y-4">
        {/* ========================================================================= */}
        {/* VIEW 1: SUBJECTS GRID (MATCHING 3RM INTERFACE IN LIGHT / DARK)            */}
        {/* ========================================================================= */}
        {currentView === "subjects" && (
          <div className="space-y-4 animate-fadeIn">
            {/* Search Pill Input matching screenshot */}
            <div className="relative flex items-center">
              <Search
                className={`w-4 h-4 absolute left-3.5 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search for topics, questions..."
                value={subjectSearch}
                onChange={(e) => setSubjectSearch(e.target.value)}
                className={`w-full pl-10 pr-12 py-3 rounded-full text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition shadow-xs ${
                  isDarkMode
                    ? "bg-[#111814] text-white placeholder-slate-400 border border-emerald-900/40"
                    : "bg-white text-slate-900 placeholder-slate-400 border border-slate-200"
                }`}
              />
              <button
                className="absolute right-1.5 w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-md transition active:scale-95 cursor-pointer"
                title="Search"
              >
                <ArrowRight className="w-4 h-4 text-slate-950 stroke-[3]" />
              </button>
            </div>

            {/* 2-Column Grid of 3D Glossy Subject Cards */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {filteredSubjects.map((subject) => {
                const isChem = subject.id === "chemistry";

                return (
                  <div
                    key={subject.id}
                    onClick={() => handleSelectSubject(subject)}
                    className={`group cursor-pointer rounded-3xl p-4 sm:p-4.5 relative overflow-hidden shadow-lg border ${subject.borderClass} transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between min-h-[168px] sm:min-h-[180px] bg-gradient-to-br ${subject.bgGradient}`}
                  >
                    {/* Inner glossy reflection */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent pointer-events-none rounded-t-3xl" />

                    {/* Top Subject illustration in center */}
                    <div className="relative z-10 my-auto py-1 flex items-center justify-center">
                      <SubjectIllustrations subjectId={subject.id} />
                    </div>

                    {/* Bottom row: Title & Tagline on left, Circular Arrow on right */}
                    <div className="relative z-10 flex items-end justify-between mt-2 pt-1">
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="text-slate-950 font-black text-base sm:text-lg tracking-tight leading-tight">
                            {subject.name}
                          </h3>
                        </div>
                        <p className="text-[11px] font-bold text-slate-800/80 leading-none mt-0.5">
                          {subject.tagline}
                        </p>
                        {isChem && (
                          <span className="inline-block mt-1 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-slate-950 text-emerald-300">
                            Units 1 & 5 Notes
                          </span>
                        )}
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110 shrink-0 ${subject.arrowBg}`}
                      >
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Hero Banner matching screenshot: "Your Success Starts Here!" */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#041d13] via-[#092b1e] to-[#041d13] border border-emerald-500/30 p-4 sm:p-5 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex items-center justify-between text-white">
              <div className="flex items-center space-x-3.5 z-10">
                {/* Golden Trophy Icon */}
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-inner shrink-0">
                  <Trophy className="w-7 h-7 text-amber-400 fill-amber-400/30 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                    Your Success{" "}
                    <span className="text-emerald-400 font-black">Starts Here!</span>
                  </h4>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    Study Smart. Achieve More.
                  </p>
                </div>
              </div>

              {/* Upward green chart arrow graphic */}
              <div className="relative flex items-end space-x-1.5 opacity-90 shrink-0">
                <div className="w-2.5 h-4 bg-emerald-600 rounded-t-xs" />
                <div className="w-2.5 h-6 bg-emerald-500 rounded-t-xs" />
                <div className="w-2.5 h-9 bg-emerald-400 rounded-t-xs" />
                <div className="w-2.5 h-12 bg-emerald-300 rounded-t-xs" />
                <div className="absolute -top-3 -right-2 text-emerald-400 text-lg font-bold">
                  ↗
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: GRADE SELECTION (For subjects with Grades 9-12)                   */}
        {/* ========================================================================= */}
        {currentView === "grades" && selectedSubject && (
          <div className="space-y-4 animate-fadeIn">
            {/* Subject Banner */}
            <div
              className={`rounded-3xl p-5 border ${selectedSubject.borderClass} bg-gradient-to-r ${selectedSubject.bgGradient} text-slate-950 shadow-lg flex items-center justify-between`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">
                  Select Grade Level
                </span>
                <h2 className="text-2xl font-black mt-0.5">{selectedSubject.name}</h2>
                <p className="text-xs font-bold text-slate-800/90 mt-0.5">
                  Rebira's Notes & Assessment Practice
                </p>
              </div>
              <div className="w-16 h-14 flex items-center justify-center">
                <SubjectIllustrations subjectId={selectedSubject.id} />
              </div>
            </div>

            {/* Grades 12, 11, 10, 9 */}
            <div className="grid grid-cols-1 gap-2.5">
              {[12, 11, 10, 9].map((grade) => {
                const unitsCount =
                  CURRICULUM_UNITS_DATA[selectedSubject.id]?.[grade]?.length || 0;
                const isGrade12Chem = selectedSubject.id === "chemistry" && grade === 12;

                return (
                  <button
                    key={grade}
                    onClick={() => handleSelectGrade(grade)}
                    className={`w-full rounded-2xl p-4 border transition flex items-center justify-between text-left group shadow-xs hover:shadow-md cursor-pointer ${
                      isDarkMode
                        ? "bg-[#111814] border-emerald-900/40 hover:border-emerald-500 text-white"
                        : "bg-white border-slate-200 hover:border-emerald-500 text-slate-900"
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl font-black flex flex-col items-center justify-center transition border ${
                          isDarkMode
                            ? "bg-emerald-950/80 border-emerald-800/80 group-hover:bg-emerald-500 group-hover:text-black text-emerald-400"
                            : "bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white text-emerald-700"
                        }`}
                      >
                        <span className="text-[9px] uppercase leading-none font-extrabold">GRADE</span>
                        <span className="text-lg leading-none mt-0.5">{grade}</span>
                      </div>
                      <div>
                        <h3
                          className={`font-black transition text-sm sm:text-base ${
                            isDarkMode
                              ? "text-white group-hover:text-emerald-400"
                              : "text-slate-900 group-hover:text-emerald-700"
                          }`}
                        >
                          Grade {grade} {selectedSubject.name}
                        </h3>
                        <p
                          className={`text-xs font-medium ${
                            isDarkMode ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          {unitsCount} Curriculum Units
                        </p>
                        {isGrade12Chem && (
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md mt-1 border ${
                              isDarkMode
                                ? "text-emerald-300 bg-emerald-950 border-emerald-700"
                                : "text-emerald-800 bg-emerald-50 border-emerald-200"
                            }`}
                          >
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            Units 1 & 5 Notes Available (40 Topics)
                          </span>
                        )}
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 transition ${
                        isDarkMode
                          ? "text-slate-500 group-hover:text-emerald-400"
                          : "text-slate-400 group-hover:text-emerald-600"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: UNIT LISTING FOR SUBJECT & GRADE                                   */}
        {/* ========================================================================= */}
        {currentView === "units" && selectedSubject && selectedGrade !== null && (
          <div className="space-y-4 animate-fadeIn">
            {/* Subject / Grade Banner */}
            <div
              className={`rounded-3xl p-5 border ${selectedSubject.borderClass} bg-gradient-to-r ${selectedSubject.bgGradient} text-slate-950 shadow-lg flex items-center justify-between`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">
                  {selectedSubject.hasGrades ? `Grade ${selectedGrade}` : "All Units"} • Rebira's Notes
                </span>
                <h2 className="text-2xl font-black mt-0.5">{selectedSubject.name}</h2>
                <p className="text-xs font-bold text-slate-800/80 mt-0.5">
                  Select a unit to study short notes and take exam practice
                </p>
              </div>
              <div className="w-16 h-14 flex items-center justify-center">
                <SubjectIllustrations subjectId={selectedSubject.id} />
              </div>
            </div>

            {/* Units list */}
            <div className="space-y-2.5">
              {currentUnits.map((unit) => {
                const hasFull =
                  selectedSubject.id === "chemistry" &&
                  selectedGrade === 12 &&
                  (unit.unitNumber === 1 || unit.unitNumber === 5);

                return (
                  <div
                    key={unit.id}
                    onClick={() => handleSelectUnit(unit)}
                    className={`rounded-2xl p-4 border transition cursor-pointer shadow-xs hover:shadow-md ${
                      isDarkMode
                        ? hasFull
                          ? "border-emerald-500/80 bg-gradient-to-r from-emerald-950/40 to-[#111814] text-white"
                          : "bg-[#111814] border-emerald-900/30 text-white hover:border-slate-600"
                        : hasFull
                        ? "border-emerald-400 bg-emerald-50/40 text-slate-900 hover:border-emerald-600"
                        : "bg-white border-slate-200 text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3.5">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shrink-0 shadow-xs ${
                            hasFull
                              ? "bg-emerald-500 text-black shadow-emerald-500/20"
                              : isDarkMode
                              ? "bg-slate-800 text-slate-300"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          U{unit.unitNumber}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3
                              className={`text-sm sm:text-base font-black ${
                                isDarkMode ? "text-white" : "text-slate-900"
                              }`}
                            >
                              Unit {unit.unitNumber}: {unit.title}
                            </h3>
                            {hasFull && (
                              <span
                                className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                                  isDarkMode
                                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                    : "bg-emerald-100 text-emerald-800 border-emerald-200"
                                }`}
                              >
                                Full Notes & MCQs
                              </span>
                            )}
                          </div>
                          <p
                            className={`text-xs font-medium mt-1 leading-snug ${
                              isDarkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                          >
                            {unit.subtitle}
                          </p>
                          <div
                            className={`flex items-center space-x-2 mt-2 text-[11px] font-bold ${
                              isDarkMode ? "text-slate-500" : "text-slate-400"
                            }`}
                          >
                            <span>{unit.topicsCount} Key Topics</span>
                            <span>•</span>
                            <span>Exam Assessment Questions</span>
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 shrink-0 mt-1 ${
                          isDarkMode ? "text-slate-500" : "text-slate-400"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: TOPIC DETAIL (VERTICAL SCROLL UP AND DOWN - NO SWIPE)             */}
        {/* ========================================================================= */}
        {currentView === "topic_detail" && selectedSubject && (
          <div className="space-y-4 animate-fadeIn">
            {/* Top Unit Banner */}
            <div
              className={`rounded-3xl p-5 border ${selectedSubject.borderClass} bg-gradient-to-r ${selectedSubject.bgGradient} text-slate-950 shadow-lg flex items-center justify-between`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">
                  {selectedSubject.name}{" "}
                  {selectedGrade && selectedGrade > 0 ? `Grade ${selectedGrade}` : ""}{" "}
                  • Unit {selectedUnit?.unitNumber}
                </span>
                <h2 className="text-xl sm:text-2xl font-black mt-0.5">
                  {selectedUnit?.title}
                </h2>
                <p className="text-xs font-bold text-slate-800/80 mt-1 line-clamp-1">
                  {selectedUnit?.subtitle}
                </p>
              </div>
            </div>

            {/* If Full Notes (Unit 1 or Unit 5): Render All 20 Topics in a Smooth Vertical Stream */}
            {hasFullNotes && activeNotes && (
              <div className="space-y-4">
                {/* Sticky Quick-Bar for Jump & Controls */}
                <div
                  className={`sticky top-14 z-20 backdrop-blur-md rounded-2xl p-3 border shadow-md space-y-2 transition-colors ${
                    isDarkMode
                      ? "bg-[#0f1713]/95 border-emerald-900/60"
                      : "bg-white/95 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    {/* Jump to topic dropdown */}
                    <div className="relative flex-1">
                      <select
                        onChange={(e) => {
                          if (e.target.value) {
                            scrollToTopic(e.target.value);
                          }
                        }}
                        defaultValue=""
                        className={`w-full rounded-xl py-2 px-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer border ${
                          isDarkMode
                            ? "bg-[#18241e] border-emerald-900/60 text-emerald-300"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      >
                        <option value="" disabled className="text-slate-400">
                          Scroll to a Topic ({activeNotes.topics[0]?.topicNumber} – {activeNotes.topics[activeNotes.topics.length - 1]?.topicNumber})...
                        </option>
                        {activeNotes.topics.map((top) => (
                          <option key={top.id} value={top.id} className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                            Topic {top.topicNumber}: {top.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Expand/Collapse All */}
                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={() => setAllCollapsed(false)}
                        className={`p-2 rounded-xl text-[10px] font-bold cursor-pointer transition ${
                          isDarkMode
                            ? "bg-slate-800 hover:bg-slate-700 text-slate-200"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                        title="Expand all topics"
                      >
                        Expand All
                      </button>
                      <button
                        onClick={() => setAllCollapsed(true)}
                        className={`p-2 rounded-xl text-[10px] font-bold cursor-pointer transition ${
                          isDarkMode
                            ? "bg-slate-800 hover:bg-slate-700 text-slate-200"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                        title="Collapse all topics"
                      >
                        Collapse All
                      </button>
                    </div>
                  </div>

                  {/* Filter inside unit */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Filter topics in this unit..."
                      value={notesFilter}
                      onChange={(e) => setNotesFilter(e.target.value)}
                      className={`w-full pl-8 pr-3 py-1.5 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        isDarkMode
                          ? "bg-[#18241e] text-white border-emerald-900/60"
                          : "bg-slate-50 text-slate-900 border-slate-200"
                      }`}
                    />
                  </div>

                  <div
                    className={`flex items-center justify-between text-[11px] font-bold px-1 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <span>
                      Showing {visibleTopics.length} of {activeNotes.topics.length} Topics (Scroll down to read)
                    </span>
                    <span className={isDarkMode ? "text-emerald-400 font-extrabold" : "text-emerald-700 font-extrabold"}>
                      {Object.keys(userAnswers).length} Questions Answered
                    </span>
                  </div>
                </div>

                {/* Vertical Stream of Topics (Scroll Up and Down) */}
                <div className="space-y-5">
                  {visibleTopics.map((topic) => {
                    const isCollapsed = !!collapsedTopics[topic.id];

                    return (
                      <div
                        key={topic.id}
                        id={`topic-${topic.id}`}
                        className={`rounded-2xl border shadow-sm overflow-hidden scroll-mt-40 transition-all ${
                          isDarkMode
                            ? "bg-[#111814] border-emerald-900/40 text-white"
                            : "bg-white border-slate-200 text-slate-900"
                        }`}
                      >
                        {/* Topic Header with Collapse Toggle */}
                        <div
                          onClick={() => toggleTopicCollapse(topic.id)}
                          className={`p-4 border-b flex items-center justify-between cursor-pointer transition ${
                            isDarkMode
                              ? "bg-gradient-to-r from-[#14211a] via-[#111814] to-emerald-950/20 border-emerald-900/40 hover:bg-emerald-950/30"
                              : "bg-gradient-to-r from-slate-50 via-white to-emerald-50/20 border-slate-100 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="w-9 h-9 rounded-xl bg-emerald-500 text-black font-mono font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                              {topic.topicNumber}
                            </span>
                            <div>
                              <span
                                className={`text-[10px] font-black uppercase tracking-wider ${
                                  isDarkMode ? "text-emerald-400" : "text-emerald-700"
                                }`}
                              >
                                Topic {topic.topicNumber}
                              </span>
                              <h3
                                className={`text-base font-black leading-tight ${
                                  isDarkMode ? "text-white" : "text-slate-900"
                                }`}
                              >
                                {topic.title}
                              </h3>
                            </div>
                          </div>

                          <button className="p-1 text-slate-400 hover:text-slate-700 transition">
                            {isCollapsed ? (
                              <ChevronDown className="w-5 h-5" />
                            ) : (
                              <ChevronUp className="w-5 h-5" />
                            )}
                          </button>
                        </div>

                        {/* Collapsible Content */}
                        {!isCollapsed && (
                          <div className="p-4 sm:p-5 space-y-4">
                            {/* Core Concepts */}
                            <div className="space-y-2">
                              <h4
                                className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                                  isDarkMode ? "text-emerald-300" : "text-slate-700"
                                }`}
                              >
                                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                                Core Notes & Concepts
                              </h4>
                              <div className="space-y-2">
                                {topic.coreConcepts.map((concept, i) => (
                                  <div
                                    key={i}
                                    className={`p-3 rounded-xl border text-xs sm:text-sm leading-relaxed font-medium ${
                                      isDarkMode
                                        ? "bg-[#17221b] border-emerald-900/30 text-slate-200"
                                        : "bg-slate-50 border-slate-100 text-slate-800"
                                    }`}
                                  >
                                    {concept}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Must Remember Rules */}
                            <div
                              className={`p-3.5 rounded-xl border space-y-1.5 ${
                                isDarkMode
                                  ? "bg-amber-950/40 border-amber-600/40 text-amber-100"
                                  : "bg-amber-50 border-amber-200 text-amber-950"
                              }`}
                            >
                              <h4
                                className={`text-[11px] font-black uppercase tracking-wider flex items-center gap-1 ${
                                  isDarkMode ? "text-amber-300" : "text-amber-900"
                                }`}
                              >
                                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                Must Remember For Matric Exam
                              </h4>
                              <ul className="space-y-1">
                                {topic.rememberPoints.map((pt, i) => (
                                  <li key={i} className="text-xs font-medium flex items-start gap-1.5">
                                    <span className="text-amber-500 font-bold">•</span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Examiner's Secret Tip */}
                            {topic.examTips && topic.examTips.length > 0 && (
                              <div
                                className={`p-3 rounded-xl border space-y-1 ${
                                  isDarkMode
                                    ? "bg-emerald-950/40 border-emerald-600/40 text-emerald-100"
                                    : "bg-emerald-50 border-emerald-200 text-emerald-950"
                                }`}
                              >
                                <h4
                                  className={`text-[11px] font-black uppercase tracking-wider flex items-center gap-1 ${
                                    isDarkMode ? "text-emerald-300" : "text-emerald-900"
                                  }`}
                                >
                                  <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
                                  Examiner's Secret Tip
                                </h4>
                                {topic.examTips.map((tip, i) => (
                                  <p key={i} className="text-xs font-medium">
                                    {tip}
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* ========================================================= */}
                            {/* ASSESSMENT QUESTIONS SECTION WITH INSTANT FEEDBACK       */}
                            {/* GREEN FOR CORRECT, RED FOR MISSED + DETAILED EXPLANATION */}
                            {/* ========================================================= */}
                            <div
                              className={`pt-3 border-t space-y-3 ${
                                isDarkMode ? "border-emerald-900/40" : "border-slate-100"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-xs font-black uppercase tracking-wider ${
                                    isDarkMode ? "text-white" : "text-slate-800"
                                  }`}
                                >
                                  Topic {topic.topicNumber} Exam Questions
                                </span>
                                <button
                                  onClick={() => handleResetTopicQuiz(topic)}
                                  className={`text-[11px] font-bold inline-flex items-center gap-1 cursor-pointer transition ${
                                    isDarkMode
                                      ? "text-slate-400 hover:text-white"
                                      : "text-slate-500 hover:text-slate-800"
                                  }`}
                                >
                                  <RefreshCw className="w-3 h-3" />
                                  <span>Reset</span>
                                </button>
                              </div>

                              <div className="space-y-3.5">
                                {topic.practiceQuestions.map((q, qIndex) => {
                                  const userAnswer = userAnswers[q.id];
                                  const isAnswered = userAnswer !== undefined;
                                  const isCorrect = isAnswered && userAnswer === q.correctAnswer;

                                  return (
                                    <div
                                      key={q.id}
                                      className={`p-3.5 rounded-xl border transition-all ${
                                        !isAnswered
                                          ? isDarkMode
                                            ? "bg-[#18231c] border-emerald-900/40"
                                            : "bg-slate-50/70 border-slate-200"
                                          : isCorrect
                                          ? isDarkMode
                                            ? "bg-emerald-950/60 border-emerald-500"
                                            : "bg-emerald-50/60 border-emerald-300"
                                          : isDarkMode
                                          ? "bg-rose-950/60 border-rose-500"
                                          : "bg-rose-50/60 border-rose-300"
                                      }`}
                                    >
                                      {/* Question Text */}
                                      <div className="flex items-start justify-between gap-2 mb-2.5">
                                        <div className="flex items-start space-x-2">
                                          <span
                                            className={`shrink-0 w-5 h-5 rounded-md text-[11px] font-black flex items-center justify-center mt-0.5 border ${
                                              isDarkMode
                                                ? "bg-slate-800 text-emerald-400 border-emerald-900"
                                                : "bg-slate-200 text-slate-800 border-slate-300"
                                            }`}
                                          >
                                            {qIndex + 1}
                                          </span>
                                          <p
                                            className={`text-xs sm:text-sm font-bold leading-snug ${
                                              isDarkMode ? "text-white" : "text-slate-900"
                                            }`}
                                          >
                                            {q.question}
                                          </p>
                                        </div>

                                        {isAnswered && (
                                          <span
                                            className={`shrink-0 inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full ${
                                              isCorrect
                                                ? "bg-emerald-500 text-black shadow-xs"
                                                : "bg-rose-500 text-white shadow-xs"
                                            }`}
                                          >
                                            {isCorrect ? (
                                              <>
                                                <CheckCircle2 className="w-3 h-3" />
                                                <span>Correct</span>
                                              </>
                                            ) : (
                                              <>
                                                <XCircle className="w-3 h-3" />
                                                <span>Missed</span>
                                              </>
                                            )}
                                          </span>
                                        )}
                                      </div>

                                      {/* Options */}
                                      <div className="space-y-1.5 mt-3">
                                        {q.options.map((option, optIdx) => {
                                          const isSelected = userAnswer === optIdx;
                                          const isOptionCorrect = optIdx === q.correctAnswer;

                                          let optionClasses = isDarkMode
                                            ? "bg-[#111a14] border-emerald-900/40 text-slate-200 hover:border-emerald-500"
                                            : "bg-white border-slate-200 text-slate-800 hover:border-emerald-500";

                                          if (isAnswered) {
                                            if (isOptionCorrect) {
                                              // GREEN for correct answer
                                              optionClasses =
                                                "bg-emerald-500 border-emerald-400 text-black font-black shadow-md";
                                            } else if (isSelected && !isOptionCorrect) {
                                              // RED for missed selection
                                              optionClasses =
                                                "bg-rose-600 border-rose-500 text-white font-bold shadow-md";
                                            } else {
                                              optionClasses = isDarkMode
                                                ? "bg-[#0e1610] border-slate-800 text-slate-500 opacity-50"
                                                : "bg-white/60 border-slate-200 text-slate-400 opacity-60";
                                            }
                                          }

                                          const letter = ["A", "B", "C", "D"][optIdx];

                                          return (
                                            <button
                                              key={optIdx}
                                              disabled={isAnswered}
                                              onClick={() =>
                                                handleAnswerQuestion(q.id, optIdx)
                                              }
                                              className={`w-full text-left p-2.5 rounded-xl border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${optionClasses}`}
                                            >
                                              <div className="flex items-center space-x-2.5">
                                                <span
                                                  className={`w-5 h-5 rounded text-[10px] font-black flex items-center justify-center shrink-0 ${
                                                    isAnswered && isOptionCorrect
                                                      ? "bg-black text-white"
                                                      : isAnswered && isSelected
                                                      ? "bg-white/20 text-white"
                                                      : isDarkMode
                                                      ? "bg-slate-800 text-slate-300"
                                                      : "bg-slate-100 text-slate-700"
                                                  }`}
                                                >
                                                  {letter}
                                                </span>
                                                <span className="leading-tight">{option}</span>
                                              </div>

                                              {isAnswered && isOptionCorrect && (
                                                <Check className="w-4 h-4 shrink-0 text-black ml-2" />
                                              )}
                                            </button>
                                          );
                                        })}
                                      </div>

                                      {/* Step-by-step explanation revealed when answered */}
                                      {isAnswered && (
                                        <div
                                          className={`mt-3 p-3 rounded-xl border shadow-2xs ${
                                            isDarkMode
                                              ? "bg-[#0d1410] border-emerald-900/60"
                                              : "bg-white border-slate-200"
                                          }`}
                                        >
                                          <div className="flex items-center space-x-1 text-[10px] font-black uppercase text-emerald-500 mb-1">
                                            <HelpCircle className="w-3 h-3" />
                                            <span>Explanation</span>
                                          </div>
                                          <p
                                            className={`text-xs font-medium leading-relaxed ${
                                              isDarkMode ? "text-slate-300" : "text-slate-700"
                                            }`}
                                          >
                                            {q.explanation}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Back to top button */}
                <div className="pt-4 text-center">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition shadow-md border cursor-pointer ${
                      isDarkMode
                        ? "bg-slate-800 hover:bg-slate-700 text-emerald-400 border-emerald-900/60"
                        : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200"
                    }`}
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>Back to Top of Notes</span>
                  </button>
                </div>
              </div>
            )}

            {/* If other unit without full notes yet */}
            {!hasFullNotes && (
              <div
                className={`rounded-2xl p-5 border shadow-md space-y-4 ${
                  isDarkMode
                    ? "bg-[#111814] border-emerald-900/40 text-white"
                    : "bg-white border-slate-200 text-slate-900"
                }`}
              >
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode
                      ? "bg-slate-900/80 border-slate-800"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <h3 className="text-base font-black">
                    Unit {selectedUnit?.unitNumber}: {selectedUnit?.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {selectedUnit?.subtitle}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4
                    className={`text-xs font-black uppercase tracking-wider ${
                      isDarkMode ? "text-emerald-400" : "text-emerald-700"
                    }`}
                  >
                    Unit Key Topics
                  </h4>
                  <div className="space-y-1.5">
                    {Array.from({ length: selectedUnit?.topicsCount || 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center space-x-2.5 ${
                          isDarkMode
                            ? "bg-[#17221b] border-emerald-900/30 text-slate-300"
                            : "bg-slate-50 border-slate-100 text-slate-800"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded text-[11px] font-bold flex items-center justify-center shrink-0 border ${
                            isDarkMode
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                              : "bg-emerald-100 text-emerald-800 border-emerald-200"
                          }`}
                        >
                          {selectedUnit?.unitNumber}.{i + 1}
                        </span>
                        <span>Key Principles & Matric Focus Topic {i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isDarkMode
                      ? "bg-amber-950/40 border-amber-600/40 text-amber-200"
                      : "bg-amber-50 border-amber-200 text-amber-950"
                  }`}
                >
                  <p className="text-xs font-medium">
                    Rebira is adding full detailed notes and exam questions for this unit. You can also touch the AI button at the top to ask questions or review problems for this unit.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
