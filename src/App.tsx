/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  StudentProfile,
  SubjectId,
  ExamYear,
  AnswerFeedbackMode,
  ExamAttempt,
  Question,
} from './types';
import { StorageService } from './utils/storage';
import { TopHeader, RealTelegramIcon } from './components/TopHeader';
import { BottomNav } from './components/BottomNav';
import { RegistrationModal } from './components/RegistrationModal';
import { Dashboard } from './components/Dashboard';
import { SubjectExamPage } from './components/SubjectExamPage';
import { ExamScreen } from './components/ExamScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { ContactUsPage } from './components/ContactUsPage';
import { ProfileModal } from './components/ProfileModal';
import { AdminSection } from './components/AdminSection';
import { NotificationsModal, AdminNotice } from './components/NotificationsModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { getQuestionsForExam, getQuestionsForUnit } from './data/allQuestions';
import { SCHOOL_INFO } from './data/subjectConfig';
import { BookOpen, GraduationCap, School, User, Sparkles } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile | null>(() =>
    StorageService.getProfile()
  );
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(() => {
    return !StorageService.getProfile();
  });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  // Admin Announcements / Notices
  const [adminNotices, setAdminNotices] = useState<AdminNotice[]>([]);
  const [readMessageIds, setReadMessageIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('3rm_read_message_ids') || '[]');
    } catch {
      return [];
    }
  });

  // Navigation states: 'home' | 'contact' | 'admin'
  const [currentBottomTab, setCurrentBottomTab] = useState<'home' | 'contact' | 'admin'>('home');
  const [currentView, setCurrentView] = useState<
    'dashboard' | 'subject' | 'exam' | 'results' | 'contact' | 'admin'
  >('dashboard');

  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('biology');
  const [selectedYear, setSelectedYear] = useState<ExamYear | 'all'>('all');

  // Active exam state
  const [activeExamData, setActiveExamData] = useState<{
    subjectId: SubjectId;
    year?: ExamYear;
    unitTitle?: string;
    grade?: string;
    topicTitle?: string;
    isUnitPractice: boolean;
    mode: AnswerFeedbackMode;
    questions: Question[];
    timeSeconds?: number;
  } | null>(null);

  // Active result state
  const [activeResultData, setActiveResultData] = useState<{
    attempt: ExamAttempt;
    questions: Question[];
  } | null>(null);

  // Fetch admin messages
  const fetchAdminMessages = async () => {
    try {
      const email = profile?.email || '';
      const name = profile?.fullName || '';
      const res = await fetch(
        `/api/messages?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`
      );
      const data = await res.json();
      if (data.success && data.messages) {
        setAdminNotices(data.messages);
      }
    } catch {}
  };

  useEffect(() => {
    fetchAdminMessages();
    const interval = setInterval(fetchAdminMessages, 30000);
    return () => clearInterval(interval);
  }, [profile?.email, profile?.fullName]);

  // Ensure registered student profile and past attempts are automatically synced to the central server
  useEffect(() => {
    StorageService.syncCurrentStateToBackend();
  }, [profile]);

  const unreadCount = adminNotices.filter((m) => !readMessageIds.includes(m.id)).length;

  const handleMarkAllRead = () => {
    const allIds = adminNotices.map((m) => m.id);
    setReadMessageIds(allIds);
    localStorage.setItem('3rm_read_message_ids', JSON.stringify(allIds));
  };

  const handleRegistered = (newProfile: StudentProfile) => {
    setProfile(newProfile);
    setIsRegistrationOpen(false);
  };

  const handleSelectSubject = (subjectId: SubjectId) => {
    setSelectedSubject(subjectId);
    setCurrentView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Exam: Always clears stale session so student starts fresh
  const handleStartExam = (params: {
    subjectId: SubjectId;
    year?: ExamYear;
    unitTitle?: string;
    grade?: string;
    topicTitle?: string;
    isUnitPractice: boolean;
    mode: AnswerFeedbackMode;
    timeSeconds?: number;
  }) => {
    StorageService.clearActiveSession();

    let questions: Question[] = [];
    if (params.isUnitPractice && params.unitTitle) {
      questions = getQuestionsForUnit(params.subjectId, params.unitTitle);
    } else {
      questions = getQuestionsForExam(params.subjectId, params.year);
    }

    if (questions.length === 0) {
      alert('This examination paper is currently awaiting digitization. Please select another year or category.');
      return;
    }

    setActiveExamData({
      ...params,
      questions,
    });
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishExam = (attempt: ExamAttempt) => {
    if (activeExamData) {
      setActiveResultData({
        attempt,
        questions: activeExamData.questions,
      });
      setActiveExamData(null);
      setCurrentView('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTryAgain = () => {
    if (activeResultData) {
      const q = activeResultData.questions;
      const att = activeResultData.attempt;
      StorageService.clearActiveSession();
      setActiveExamData({
        subjectId: att.subject,
        year: att.year,
        unitTitle: att.unitTitle,
        grade: att.grade,
        topicTitle: att.topicTitle,
        isUnitPractice: att.isUnitPractice,
        mode: att.feedbackMode,
        questions: q,
        timeSeconds: att.totalDurationSeconds,
      });
      setActiveResultData(null);
      setCurrentView('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // When quitting or returning from exam / category practice, return to category if it was unit practice!
  const handleReturnHome = () => {
    const wasUnit = activeResultData?.attempt.isUnitPractice;
    const sub = activeResultData?.attempt.subject;
    setActiveResultData(null);
    setActiveExamData(null);
    if (wasUnit && sub) {
      setSelectedSubject(sub);
      setCurrentView('subject');
    } else {
      setCurrentBottomTab('home');
      setCurrentView('dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBottomTab = (tab: 'home' | 'contact' | 'admin') => {
    setCurrentBottomTab(tab);
    if (tab === 'home') {
      setCurrentView('dashboard');
    } else if (tab === 'contact') {
      setCurrentView('contact');
    } else if (tab === 'admin') {
      setCurrentView('admin');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans antialiased flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Top Application Bar - hidden during active full examination */}
      {currentView !== 'exam' && currentView !== 'subject' && (
        <TopHeader
          studentProfile={profile}
          unreadCount={unreadCount}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenMenu={() => setIsMenuDrawerOpen(true)}
          onOpenProfile={() => setIsProfileModalOpen(true)}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'dashboard' && (
          <Dashboard
            studentProfile={profile}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
            onSelectSubject={handleSelectSubject}
            onOpenAdmin={() => handleSelectBottomTab('admin')}
          />
        )}

        {currentView === 'subject' && (
          <SubjectExamPage
            subjectId={selectedSubject}
            onBack={() => setCurrentView('dashboard')}
            onStartExam={handleStartExam}
          />
        )}

        {currentView === 'exam' && activeExamData && (
          <ExamScreen
            subjectId={activeExamData.subjectId}
            year={activeExamData.year}
            unitTitle={activeExamData.unitTitle}
            grade={activeExamData.grade}
            topicTitle={activeExamData.topicTitle}
            isUnitPractice={activeExamData.isUnitPractice}
            feedbackMode={activeExamData.mode}
            questions={activeExamData.questions}
            studentProfile={profile}
            timeSeconds={activeExamData.timeSeconds}
            onFinishExam={handleFinishExam}
            onExitExam={() => {
              const wasUnit = activeExamData.isUnitPractice;
              const subId = activeExamData.subjectId;
              StorageService.clearActiveSession();
              setActiveExamData(null);
              if (wasUnit) {
                setSelectedSubject(subId);
                setCurrentView('subject');
              } else {
                setCurrentView('dashboard');
              }
            }}
          />
        )}

        {currentView === 'results' && activeResultData && (
          <ResultsScreen
            attempt={activeResultData.attempt}
            questions={activeResultData.questions}
            onTryAgain={handleTryAgain}
            onReturnHome={handleReturnHome}
          />
        )}

        {currentView === 'contact' && <ContactUsPage />}

        {currentView === 'admin' && (
          <AdminSection onBackToHome={handleReturnHome} />
        )}
      </main>

      {/* Floating 3RM AI Assistant Trigger Button on Home/Category screens */}
      {currentView !== 'exam' && currentView !== 'admin' && (
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          title="Ask 3RM AI Assistant"
          aria-label="3RM AI Assistant"
          className="fixed right-3 sm:right-5 bottom-20 z-40 w-12 h-12 rounded-full bg-[#00897b] hover:bg-[#00796b] text-white shadow-xl flex items-center justify-center border-2 border-white/90 active:scale-95 transition-all cursor-pointer group hover:ring-4 hover:ring-teal-200"
        >
          <Sparkles className="w-6 h-6 text-amber-300 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* 3RM AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        subjectTitle={selectedSubject ? SCHOOL_INFO.examName : undefined}
      />

      {/* Admin Notifications Modal */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={adminNotices}
        onMarkAllRead={handleMarkAllRead}
      />

      {/* Fixed Bottom Navigation: exactly HOME | CONTACT US */}
      {currentView !== 'exam' && (
        <BottomNav
          currentTab={currentBottomTab}
          onSelectTab={handleSelectBottomTab}
        />
      )}

      {/* Registration Modal for first-time students */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onRegistered={handleRegistered}
      />

      {/* Student Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onProfileUpdated={(updated) => setProfile(updated)}
      />

      {/* Slide-out Menu Drawer */}
      {isMenuDrawerOpen && (
        <div className="fixed inset-0 z-50 flex bg-slate-900/60 backdrop-blur-xs">
          <div className="w-80 max-w-[85%] bg-white h-full shadow-2xl flex flex-col animate-slide-right">
            {/* Drawer Header */}
            <div className="bg-[#00897b] p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xl">
                  {profile ? profile.fullName.charAt(0).toUpperCase() : '3'}
                </div>
                <div>
                  <h3 className="font-bold text-base line-clamp-1">
                    {profile ? profile.fullName : 'AIBSBSS Student'}
                  </h3>
                  <p className="text-teal-100 text-xs">{SCHOOL_INFO.shortName}</p>
                </div>
              </div>
            </div>

            {/* Drawer Links */}
            <div className="p-4 space-y-1 flex-1 overflow-y-auto text-sm">
              <button
                onClick={() => {
                  setIsMenuDrawerOpen(false);
                  setCurrentBottomTab('home');
                  setCurrentView('dashboard');
                }}
                className="w-full p-3 rounded-xl hover:bg-slate-100 text-slate-800 flex items-center gap-3 font-medium transition cursor-pointer text-left"
              >
                <BookOpen className="w-5 h-5 text-[#00897b]" />
                <span>Exam Dashboard</span>
              </button>

              <button
                onClick={() => {
                  setIsMenuDrawerOpen(false);
                  setIsProfileModalOpen(true);
                }}
                className="w-full p-3 rounded-xl hover:bg-slate-100 text-slate-800 flex items-center gap-3 font-medium transition cursor-pointer text-left"
              >
                <User className="w-5 h-5 text-[#00897b]" />
                <span>Student Profile & History</span>
              </button>

              <button
                onClick={() => {
                  setIsMenuDrawerOpen(false);
                  setCurrentBottomTab('contact');
                  setCurrentView('contact');
                }}
                className="w-full p-3 rounded-xl hover:bg-slate-100 text-slate-800 flex items-center gap-3 font-medium transition cursor-pointer text-left"
              >
                <School className="w-5 h-5 text-[#00897b]" />
                <span>Contact Developer & School</span>
              </button>

              {/* Join Us on Telegram (Replaced Admin Console as requested) */}
              <a
                href="https://t.me/rebiraentranceexam"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuDrawerOpen(false)}
                className="w-full p-3 rounded-xl hover:bg-sky-50 text-sky-900 flex items-center gap-3 font-semibold transition cursor-pointer text-left"
              >
                <RealTelegramIcon className="w-5 h-5 text-[#229ED9]" />
                <span>Join Us on Telegram</span>
              </a>

              <div className="pt-4 border-t my-4 text-xs text-slate-500 space-y-2">
                <div className="font-bold text-slate-700">Platform Credentials:</div>
                <div>Developer: <strong>{SCHOOL_INFO.developer}</strong></div>
                <div>Email: <a href={`mailto:${SCHOOL_INFO.contactEmail}`} className="text-teal-700 underline">{SCHOOL_INFO.contactEmail}</a></div>
                <div>Telegram: <a href="https://t.me/rebiraentranceexam" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">@rebiraentranceexam</a></div>
                <div>School: {SCHOOL_INFO.fullName}</div>
              </div>
            </div>

            <div className="p-4 border-t text-center">
              <button
                onClick={() => setIsMenuDrawerOpen(false)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Close Menu
              </button>
            </div>
          </div>

          <div
            className="flex-1 cursor-pointer"
            onClick={() => setIsMenuDrawerOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
