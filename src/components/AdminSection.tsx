import React, { useState, useEffect } from 'react';
import {
  Lock,
  LogOut,
  ArrowLeft,
  Search,
  Download,
  Users,
  Layers,
  BookOpen,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  XCircle,
  HelpCircle,
  Filter,
  Check,
  Award,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Megaphone,
  Send,
} from 'lucide-react';
import { AdminStudentSummary, Question, SubjectId } from '../types';
import { SUBJECT_CONFIGS } from '../data/subjectConfig';
import { ALL_QUESTIONS } from '../data/allQuestions';

interface AdminSectionProps {
  onBackToHome: () => void;
}

export const AdminSection: React.FC<AdminSectionProps> = ({ onBackToHome }) => {
  const [authToken, setAuthToken] = useState<string | null>(() => {
    return sessionStorage.getItem('3rm_admin_token');
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Admin tabs
  const [activeTab, setActiveTab] = useState<'students' | 'questions' | 'broadcast'>('students');

  // Broadcast state
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastText, setBroadcastText] = useState('');
  const [broadcastRecipient, setBroadcastRecipient] = useState('all');
  const [broadcastSuccessMessage, setBroadcastSuccessMessage] = useState<string | null>(null);
  const [broadcastErrorMessage, setBroadcastErrorMessage] = useState<string | null>(null);
  const [isSendingBroadcast, setIsSendingBroadcast] = useState(false);

  // Students state - initialized with cached students to prevent blank displays during reloads
  const [students, setStudents] = useState<AdminStudentSummary[]>(() => {
    try {
      const cached = localStorage.getItem('3rm_admin_cached_students');
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'score' | 'attempts'>('date');
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);
  const [expandedStudentEmail, setExpandedStudentEmail] = useState<string | null>(null);

  // Questions Manager state
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('biology');
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<string>('all');
  const [isEditingQuestion, setIsEditingQuestion] = useState<Partial<Question> | null>(null);

  // Check existing token on mount
  useEffect(() => {
    if (authToken) {
      verifyTokenAndFetch(authToken);
    }
  }, [authToken]);

  const verifyTokenAndFetch = async (token: string) => {
    try {
      const res = await fetch('/api/admin/verify', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.valid) {
        fetchStudents(token);
      } else {
        handleLogout();
      }
    } catch {
      // If network transient failure, don't automatically wipe out credentials
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim()) return;

    setIsLoggingIn(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput.trim() }),
      });
      const data = await res.json();

      if (res.ok && data.success && data.token) {
        sessionStorage.setItem('3rm_admin_token', data.token);
        setAuthToken(data.token);
        setPasswordInput('');
        fetchStudents(data.token);
      } else {
        setLoginError(data.error || 'Invalid administrator password');
      }
    } catch (err) {
      setLoginError('Server error while authenticating. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    if (authToken) {
      try {
        await fetch('/api/admin/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${authToken}` },
        });
      } catch {}
    }
    sessionStorage.removeItem('3rm_admin_token');
    setAuthToken(null);
  };

  const fetchStudents = async (token: string) => {
    setIsLoadingStudents(true);
    try {
      const res = await fetch('/api/admin/students', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.students)) {
        setStudents(data.students);
        try {
          localStorage.setItem('3rm_admin_cached_students', JSON.stringify(data.students));
        } catch {}
      }
    } catch (e) {
      console.error('Failed to load students', e);
    } finally {
      setIsLoadingStudents(false);
    }
  };

  // CSV Export
  const handleExportCSV = () => {
    if (students.length === 0) {
      return;
    }

    const headers = [
      'Full Name',
      'Phone Number',
      'Gmail Address',
      'Grade',
      'School',
      'Registration Date',
      'Exams Taken',
      'Average Score (%)',
      'Best Score (%)',
    ];

    const rows = students.map((st) => [
      `"${st.fullName.replace(/"/g, '""')}"`,
      `"${st.phoneNumber}"`,
      `"${st.email}"`,
      `"${st.grade || 'Grade 12'}"`,
      `"${st.school || 'AIBSBSS'}"`,
      `"${new Date(st.registeredAt).toLocaleDateString()}"`,
      st.attemptsCount || 0,
      st.avgScore || 0,
      st.bestScore !== null ? st.bestScore : 'N/A',
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `AIBSBSS_Students_Records_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastText.trim()) return;

    setIsSendingBroadcast(true);
    setBroadcastSuccessMessage(null);
    setBroadcastErrorMessage(null);

    const selectedStudent = students.find(
      (s) => s.email === broadcastRecipient || s.fullName.toLowerCase() === broadcastRecipient.toLowerCase()
    );
    const recipientName = selectedStudent
      ? selectedStudent.fullName
      : broadcastRecipient === 'all'
      ? 'All Registered Students'
      : broadcastRecipient;

    try {
      const res = await fetch('/api/admin/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          title: broadcastTitle.trim() || 'Notice from Admin',
          text: broadcastText.trim(),
          recipient: broadcastRecipient,
          recipientName,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setBroadcastSuccessMessage('Message sent successfully! It is now visible to students as a notification next to the Telegram icon.');
        setBroadcastTitle('');
        setBroadcastText('');
        setTimeout(() => setBroadcastSuccessMessage(null), 5000);
      } else {
        setBroadcastErrorMessage(data.error || 'Failed to send message');
      }
    } catch {
      setBroadcastErrorMessage('Network error while dispatching message.');
    } finally {
      setIsSendingBroadcast(false);
    }
  };

  // Filter and sort students
  const filteredStudents = students.filter((st) => {
    const q = searchQuery.toLowerCase();
    return (
      st.fullName.toLowerCase().includes(q) ||
      st.email.toLowerCase().includes(q) ||
      st.phoneNumber.includes(q)
    );
  }).sort((a, b) => {
    if (sortBy === 'name') return a.fullName.localeCompare(b.fullName);
    if (sortBy === 'score') return (b.avgScore || 0) - (a.avgScore || 0);
    if (sortBy === 'attempts') return (b.attemptsCount || 0) - (a.attemptsCount || 0);
    return new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime();
  });

  // Filter questions for Question Manager
  const displayedQuestions = ALL_QUESTIONS.filter((q) => {
    const matchSub = q.subject === selectedSubject;
    const matchGrade = selectedGradeFilter === 'all' ? true : q.grade.toString() === selectedGradeFilter;
    return matchSub && matchGrade;
  });

  // If not logged in, show Password Login Screen
  if (!authToken) {
    return (
      <div className="pb-24 pt-6 px-4 max-w-md mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 text-[#00897b] mb-4">
            <Lock className="w-8 h-8" />
          </div>

          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Administrator Portal
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
            Authorized access for Ambo Ifa Boru Special Boarding Secondary School administration.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setLoginError(null);
                }}
                placeholder="Enter admin password..."
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
              />
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-[#00897b] hover:bg-[#00796b] text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isLoggingIn ? 'Verifying Password...' : 'LOGIN TO ADMIN'}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onBackToHome}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to HOME
            </button>
            <span className="text-[11px] text-slate-400">Secure Server Auth</span>
          </div>
        </div>
      </div>
    );
  }

  // Logged-in Admin Dashboard
  return (
    <div className="pb-24 pt-3 px-4 max-w-4xl mx-auto">
      {/* Top Admin App Bar */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-2xl p-4 sm:p-5 text-white shadow-md mb-4 border border-teal-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="p-1.5 rounded-lg bg-teal-700 hover:bg-teal-600 transition text-white cursor-pointer"
            title="Return to Home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-base sm:text-lg">AIBSBSS Admin Console</h2>
              <span className="bg-teal-700 text-teal-200 text-[10px] font-bold px-2 py-0.5 rounded">
                Authorized
              </span>
            </div>
            <p className="text-[11px] text-teal-200">
              Developer: REBIRA SISAY GITI (3RM) • rarb368@gmail.com
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-3 py-1.5 rounded-xl bg-rose-600/90 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95 cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Admin Tab Switcher */}
      <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center gap-1 mb-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab('students')}
          className={`flex-1 py-2 px-2 text-xs sm:text-sm font-bold rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'students'
              ? 'bg-[#00897b] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Students ({students.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('questions')}
          className={`flex-1 py-2 px-2 text-xs sm:text-sm font-bold rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'questions'
              ? 'bg-[#00897b] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Questions</span>
        </button>
        <button
          onClick={() => setActiveTab('broadcast')}
          className={`flex-1 py-2 px-2 text-xs sm:text-sm font-bold rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'broadcast'
              ? 'bg-[#00897b] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Megaphone className="w-4 h-4" />
          <span>Send Message</span>
        </button>
      </div>

      {/* TAB 1: REGISTERED STUDENTS & SCORES */}
      {activeTab === 'students' && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
          {/* Controls: Search, Sort, Export */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student name, phone, or Gmail..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-300 outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
              />
            </div>

            {/* Sort Dropdown & CSV Export */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs p-2 rounded-xl border border-slate-300 bg-white outline-none"
              >
                <option value="date">Sort: Latest Registered</option>
                <option value="name">Sort: Student Name (A-Z)</option>
                <option value="score">Sort: Highest Average Score</option>
                <option value="attempts">Sort: Most Exams Taken</option>
              </select>

              <button
                onClick={handleExportCSV}
                className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition active:scale-95 cursor-pointer shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Student Records List */}
          {filteredStudents.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              <Users className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p>No student records found matching your search.</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Students who register and take exams will automatically sync to this database.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredStudents.map((st) => {
                const isExpanded = expandedStudentEmail === st.email;

                return (
                  <div
                    key={st.email}
                    className="border border-slate-200 rounded-xl p-3.5 hover:shadow-xs transition bg-slate-50/50"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">
                            {st.fullName}
                          </span>
                          <span className="text-[10px] bg-teal-100 text-teal-800 font-semibold px-2 py-0.5 rounded">
                            {st.grade || 'Grade 12'}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span>Phone: <strong>{st.phoneNumber}</strong></span>
                          <span>•</span>
                          <span>Gmail: <a href={`mailto:${st.email}`} className="text-teal-700 underline">{st.email}</a></span>
                          <span>•</span>
                          <span>Registered: {new Date(st.registeredAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-[11px] text-slate-500 font-medium">Avg Score</div>
                          <div className="text-base font-extrabold text-[#00897b]">
                            {st.avgScore}%
                          </div>
                        </div>

                        <button
                          onClick={() => setExpandedStudentEmail(isExpanded ? null : st.email)}
                          className="px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1 cursor-pointer"
                        >
                          <span>{st.attemptsCount || 0} Exams</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Exam History */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-slate-200 space-y-1.5 animate-fade-in">
                        <div className="text-xs font-bold text-slate-700 mb-1">
                          Completed Examination History:
                        </div>
                        {st.attempts.length === 0 ? (
                          <p className="text-xs text-slate-400 italic">No exams attempted yet.</p>
                        ) : (
                          <div className="space-y-1 max-h-40 overflow-y-auto">
                            {st.attempts.map((att, i) => (
                              <div
                                key={att.id || i}
                                className="flex items-center justify-between text-xs p-2 bg-white rounded-lg border border-slate-200"
                              >
                                <span>
                                  {att.subject.toUpperCase()} {att.isUnitPractice ? `(${att.unitTitle})` : `(${att.year} E.C.)`}
                                </span>
                                <div className="flex items-center gap-3">
                                  <span className="text-slate-500">
                                    {att.correctCount}/{att.totalQuestions}
                                  </span>
                                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                    {att.scorePercentage}%
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: QUESTION & CURRICULUM MANAGEMENT */}
      {activeTab === 'questions' && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Question Bank & Curriculum Classification
              </h3>
              <p className="text-[11px] text-slate-500">
                Organize questions by Subject → Grade → Unit → Topic → Year
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value as SubjectId)}
                className="text-xs p-2 rounded-xl border border-slate-300 bg-white font-bold"
              >
                {Object.values(SUBJECT_CONFIGS).map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>

              <select
                value={selectedGradeFilter}
                onChange={(e) => setSelectedGradeFilter(e.target.value)}
                className="text-xs p-2 rounded-xl border border-slate-300 bg-white"
              >
                <option value="all">All Grades</option>
                <option value="12">Grade 12</option>
                <option value="11">Grade 11</option>
                <option value="10">Grade 10</option>
                <option value="9">Grade 9</option>
                <option value="unclassified">Unclassified</option>
              </select>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-3 max-h-[60vh] overflow-y-auto">
            {displayedQuestions.map((q) => (
              <div
                key={q.id}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                      Grade {q.grade} • Unit {q.unitNumber}
                    </span>
                    <span className="font-semibold text-slate-700">{q.unit}</span>
                    {q.topic && (
                      <span className="text-slate-500">→ {q.topic}</span>
                    )}
                  </div>
                  <span className="font-bold text-slate-500">{q.year} E.C.</span>
                </div>

                <p className="font-medium text-slate-900 leading-relaxed">
                  #{q.questionNumber}: {q.question}
                </p>

                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600">
                  {q.options.map((opt, i) => (
                    <div
                      key={i}
                      className={`p-1.5 rounded border ${
                        i === q.correctAnswer
                          ? 'bg-emerald-50 border-emerald-400 font-bold text-emerald-950'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      {['A', 'B', 'C', 'D'][i]}. {opt}
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-slate-500 bg-white p-2 rounded border border-slate-200/80">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SEND ANNOUNCEMENT / MESSAGE TO STUDENTS */}
      {activeTab === 'broadcast' && (
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-teal-50 text-[#00897b] flex items-center justify-center">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                Send Notification to Students
              </h3>
              <p className="text-xs text-slate-500">
                Broadcast official updates or send a message to a specific registered candidate.
              </p>
            </div>
          </div>

          {broadcastSuccessMessage && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{broadcastSuccessMessage}</span>
            </div>
          )}

          {broadcastErrorMessage && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{broadcastErrorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSendBroadcast} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Recipient (All Registered Students or Individual by Name)
              </label>
              <select
                value={broadcastRecipient}
                onChange={(e) => setBroadcastRecipient(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#00897b] bg-slate-50/50"
              >
                <option value="all">📢 All Registered Students (Broadcast to All)</option>
                {students.length > 0 && (
                  <optgroup label="Individual Student by Name">
                    {students.map((st) => (
                      <option key={st.email} value={st.email}>
                        👤 {st.fullName} (Grade {st.grade} • {st.school || 'AIBSBSS'})
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Notice Title
              </label>
              <input
                type="text"
                value={broadcastTitle}
                onChange={(e) => setBroadcastTitle(e.target.value)}
                placeholder="e.g. 2017 & 2016 Aptitude Exams Digitized"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#00897b] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Message Body <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={4}
                value={broadcastText}
                onChange={(e) => setBroadcastText(e.target.value)}
                placeholder="Type your official announcement here for AIBSBSS students..."
                className="w-full rounded-xl border border-slate-300 p-3.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#00897b] bg-slate-50/50 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={!broadcastText.trim() || isSendingBroadcast}
              className="w-full py-3 rounded-xl bg-[#00897b] hover:bg-[#00796b] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{isSendingBroadcast ? 'Sending Notice...' : 'Send Message to Students'}</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
