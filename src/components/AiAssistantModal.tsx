import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  Trash2,
  Loader2,
  BookOpen,
  Lightbulb,
  Maximize2,
  Minimize2,
  RotateCw,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { Question } from '../types';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestion?: Question | null;
  currentQuestionNumber?: number;
  subjectTitle?: string;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const NEXA_AI_URL = 'https://nexaibot.lovable.app';

const formatInlineBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-slate-950">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const renderFormattedAiText = (text: string) => {
  const lines = text.split('\n');
  return (
    <div className="space-y-1.5 text-xs sm:text-sm">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        if (trimmed.startsWith('###')) {
          const content = trimmed.replace(/^#+\s*/, '');
          return (
            <h4 key={idx} className="font-bold text-teal-800 text-xs sm:text-sm mt-2 mb-0.5">
              {content}
            </h4>
          );
        }

        if (trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
          const content = trimmed.replace(/^[*•-]\s+/, '');
          return (
            <div key={idx} className="flex items-start gap-1.5 ml-1">
              <span className="text-[#00897b] font-bold shrink-0">•</span>
              <span className="flex-1">{formatInlineBold(content)}</span>
            </div>
          );
        }

        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-1.5 ml-1">
              <span className="font-bold text-[#00897b] shrink-0">{numMatch[1]}.</span>
              <span className="flex-1">{formatInlineBold(numMatch[2])}</span>
            </div>
          );
        }

        return <p key={idx}>{formatInlineBold(trimmed)}</p>;
      })}
    </div>
  );
};

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  currentQuestion,
  currentQuestionNumber,
  subjectTitle,
}) => {
  const [activeTab, setActiveTab] = useState<'nexa' | 'solver'>('nexa');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [copiedQuestion, setCopiedQuestion] = useState(false);

  // Solver chat state
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am your 3RM AI Study Assistant for Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS). 
I'm here to explain exam questions, break down formulas, clarify vocabulary, and guide you through EUEE problem-solving. You can also chat directly with Nexa AI in the tab above!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && activeTab === 'solver') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, activeTab, messages]);

  if (!isOpen) return null;

  const handleCopyQuestion = () => {
    if (!currentQuestion) return;
    const optionsText = currentQuestion.options
      .map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`)
      .join('\n');
    const fullText = `[${subjectTitle || currentQuestion.subject.toUpperCase()} Question #${currentQuestionNumber || currentQuestion.questionNumber}]:\n${currentQuestion.question}\n\nOptions:\n${optionsText}\n\nPlease explain step-by-step and determine the correct answer.`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedQuestion(true);
      setTimeout(() => setCopiedQuestion(false), 2000);
    });
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          subject: subjectTitle,
          history: messages.slice(-6).map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
          questionContext: currentQuestion
            ? {
                subject: currentQuestion.subject,
                question: currentQuestion.question,
                options: currentQuestion.options,
                explanation: currentQuestion.explanation,
                number: currentQuestionNumber,
              }
            : undefined,
        }),
      });

      const data = await response.json();
      const replyText =
        data.reply ||
        data.error ||
        'I could not generate an answer right now. Please try again.';

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: 'Connection error while communicating with AI assistant. Please verify network or try asking again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    setActiveTab('solver');
    handleSendMessage(prompt);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-2 sm:p-4 backdrop-blur-xs transition-all ${
        isFullScreen ? 'p-0' : ''
      }`}
    >
      <div
        className={`w-full bg-white flex flex-col border border-slate-200 overflow-hidden shadow-2xl transition-all ${
          isFullScreen
            ? 'h-full max-h-screen rounded-none'
            : 'max-w-2xl h-[90vh] max-h-[720px] rounded-2xl'
        }`}
      >
        {/* Header */}
        <div className="bg-[#00897b] p-3 sm:p-3.5 text-white flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
              <Sparkles className="w-5 h-5 fill-amber-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-bold text-sm sm:text-base leading-tight truncate">
                  Nexa AI & 3RM Assistant
                </h3>
                <span className="bg-teal-900/60 text-teal-100 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-teal-700/50 shrink-0">
                  AIBSBSS
                </span>
              </div>
              <p className="text-[11px] text-teal-100/90 font-medium truncate">
                Running in-app at <span className="font-mono text-amber-200">nexaibot.lovable.app</span>
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 shrink-0">
            {activeTab === 'nexa' && (
              <button
                onClick={() => {
                  setIframeLoading(true);
                  setIframeKey((k) => k + 1);
                }}
                title="Reload Nexa AI Bot"
                className="p-1.5 rounded-lg hover:bg-white/15 text-teal-100 hover:text-white transition cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            )}

            {activeTab === 'solver' && (
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: 'welcome',
                      sender: 'assistant',
                      text: 'Chat history cleared. How can I assist you with your exam preparation?',
                      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ])
                }
                title="Clear conversation"
                className="p-1.5 rounded-lg hover:bg-white/15 text-teal-100 hover:text-white transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setIsFullScreen((prev) => !prev)}
              title={isFullScreen ? 'Exit Fullscreen' : 'Fullscreen View'}
              className="p-1.5 rounded-lg hover:bg-white/15 text-teal-100 hover:text-white transition cursor-pointer"
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <a
              href={NEXA_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Nexa AI in new window"
              className="p-1.5 rounded-lg hover:bg-white/15 text-teal-100 hover:text-white transition cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              title="Close Assistant"
              className="p-1.5 rounded-lg hover:bg-white/15 text-teal-100 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center bg-slate-100 border-b border-slate-200 px-3 pt-2 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('nexa')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-t-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'nexa'
                ? 'bg-white text-teal-900 border-t-2 border-[#00897b] shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00897b]" />
            <span>Nexa AI Bot (Live In-App)</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.2 rounded-full">
              Online
            </span>
          </button>

          <button
            onClick={() => setActiveTab('solver')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-t-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'solver'
                ? 'bg-white text-teal-900 border-t-2 border-[#00897b] shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-teal-700" />
            <span>3RM Question Solver</span>
            {currentQuestion && (
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            )}
          </button>
        </div>

        {/* Current Question Banner if active in Exam */}
        {currentQuestion && (
          <div className="bg-amber-50/95 border-b border-amber-200/80 px-3 py-2 flex items-center justify-between text-xs text-amber-900 shrink-0 gap-2">
            <div className="font-semibold truncate flex items-center gap-1.5 min-w-0">
              <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span className="shrink-0">Question #{currentQuestionNumber || currentQuestion.questionNumber}</span>
              <span className="text-amber-700 font-normal truncate hidden sm:inline">
                - {currentQuestion.question.slice(0, 50)}...
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleCopyQuestion}
                className="text-[11px] font-bold bg-amber-200/80 hover:bg-amber-300/80 text-amber-950 px-2.5 py-1 rounded-md transition flex items-center gap-1 cursor-pointer shadow-2xs"
                title="Copy Question and Options to clipboard for Nexa AI"
              >
                {copiedQuestion ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-800" />
                    <span>Copy Question</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Tab 1: Nexa AI Bot In-App Embed */}
        {activeTab === 'nexa' && (
          <div className="relative flex-1 w-full bg-slate-900 overflow-hidden flex flex-col">
            {iframeLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 text-slate-600 p-4">
                <Loader2 className="w-8 h-8 animate-spin text-[#00897b] mb-2" />
                <p className="text-sm font-bold text-slate-800">Connecting to Nexa AI Bot...</p>
                <p className="text-xs text-slate-500 mt-1">Running in-app from nexaibot.lovable.app</p>
              </div>
            )}
            <iframe
              key={iframeKey}
              src={NEXA_AI_URL}
              title="Nexa AI Study Assistant"
              className="w-full flex-1 border-0 bg-white"
              allow="clipboard-read; clipboard-write; microphone; camera; display-capture; autoplay"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              onLoad={() => setIframeLoading(false)}
            />
          </div>
        )}

        {/* Tab 2: 3RM Step-by-Step Question Solver */}
        {activeTab === 'solver' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-slate-50/60">
            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 text-xs sm:text-sm">
              {messages.map((m) => {
                const isUser = m.sender === 'user';
                return (
                  <div
                    key={m.id}
                    className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-full bg-[#00897b] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3 shadow-2xs whitespace-pre-line leading-relaxed break-words [overflow-wrap:anywhere] ${
                        isUser
                          ? 'bg-[#00897b] text-white rounded-br-xs font-medium'
                          : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                      }`}
                    >
                      {isUser ? <p>{m.text}</p> : renderFormattedAiText(m.text)}
                      <span
                        className={`block text-[10px] mt-1 text-right ${
                          isUser ? 'text-teal-200' : 'text-slate-400'
                        }`}
                      >
                        {m.timestamp}
                      </span>
                    </div>

                    {isUser && (
                      <div className="w-7 h-7 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-full bg-[#00897b] text-white flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs p-3 flex items-center gap-2 text-slate-500 shadow-2xs">
                    <Loader2 className="w-4 h-4 animate-spin text-[#00897b]" />
                    <span className="text-xs font-medium">3RM AI is thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Prompt Chips */}
            {currentQuestion && (
              <div className="px-3 py-1.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
                <button
                  onClick={() =>
                    handleQuickPrompt(
                      `Explain question ${currentQuestionNumber || currentQuestion.questionNumber} and why the correct answer is right.`
                    )
                  }
                  className="text-[11px] font-semibold bg-teal-50 hover:bg-teal-100 text-teal-800 px-2.5 py-1 rounded-full border border-teal-200 whitespace-nowrap transition cursor-pointer flex items-center gap-1 shrink-0"
                >
                  <Lightbulb className="w-3 h-3 text-teal-700" />
                  <span>Explain this question</span>
                </button>
                <button
                  onClick={() =>
                    handleQuickPrompt(
                      `Give me a hint for this question without giving away the direct answer.`
                    )
                  }
                  className="text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition cursor-pointer shrink-0"
                >
                  <span>Give hint</span>
                </button>
                <button
                  onClick={() =>
                    handleQuickPrompt(
                      `What key scientific formulas, vocabulary, or rules are required here?`
                    )
                  }
                  className="text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition cursor-pointer shrink-0"
                >
                  <span>Key rules & formulas</span>
                </button>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  currentQuestion
                    ? `Ask about Question #${currentQuestionNumber || currentQuestion.questionNumber}...`
                    : 'Ask 3RM AI about any subject or concept...'
                }
                className="flex-1 rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] bg-slate-50/50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2.5 rounded-xl bg-[#00897b] text-white hover:bg-[#00796b] disabled:opacity-50 disabled:cursor-not-allowed transition shadow-xs cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
