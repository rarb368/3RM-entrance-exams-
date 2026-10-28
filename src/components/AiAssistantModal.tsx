import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, Trash2, Loader2, BookOpen, Lightbulb } from 'lucide-react';
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

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  currentQuestion,
  currentQuestionNumber,
  subjectTitle,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am your 3RM AI Study Assistant for Ambo Ifa Boru Special Boarding Secondary School (AIBSBSS). 
I'm here to explain exam questions, break down formulas, clarify vocabulary, and guide you through EUEE problem-solving. How can I help you?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  if (!isOpen) return null;

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
    handleSendMessage(prompt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-3 sm:p-4 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col h-[85vh] max-h-[640px] border border-slate-200 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-[#00897b] p-3.5 sm:p-4 text-white flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5 fill-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm sm:text-base leading-tight">
                  3RM AI Study Assistant
                </h3>
                <span className="bg-teal-900/60 text-teal-100 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-teal-700/50">
                  AIBSBSS
                </span>
              </div>
              <p className="text-[11px] text-teal-100/90 font-medium">
                {subjectTitle ? `${subjectTitle} EUEE Tutor` : 'Ethiopian Entrance Exam AI'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
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
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/15 text-teal-100 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Current Question Badge if inside exam */}
        {currentQuestion && (
          <div className="bg-amber-50/90 border-b border-amber-200/80 px-3.5 py-2 flex items-center justify-between text-xs text-amber-900 shrink-0">
            <span className="font-semibold truncate flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Question {currentQuestionNumber || currentQuestion.questionNumber}</span>
              <span className="text-amber-700 font-normal truncate max-w-[220px]">
                - {currentQuestion.question.slice(0, 45)}...
              </span>
            </span>
          </div>
        )}

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 text-xs sm:text-sm bg-slate-50/60">
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
                  <p>{m.text}</p>
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
              onClick={() => handleQuickPrompt(`Explain question ${currentQuestionNumber || currentQuestion.questionNumber} and why the correct answer is right.`)}
              className="text-[11px] font-semibold bg-teal-50 hover:bg-teal-100 text-teal-800 px-2.5 py-1 rounded-full border border-teal-200 whitespace-nowrap transition cursor-pointer flex items-center gap-1 shrink-0"
            >
              <Lightbulb className="w-3 h-3 text-teal-700" />
              <span>Explain this question</span>
            </button>
            <button
              onClick={() => handleQuickPrompt(`Give me a hint for this question without telling me the answer directly.`)}
              className="text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition cursor-pointer shrink-0"
            >
              <span>Give hint</span>
            </button>
            <button
              onClick={() => handleQuickPrompt(`What are the key curriculum formulas or concepts needed here?`)}
              className="text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition cursor-pointer shrink-0"
            >
              <span>Key concepts</span>
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
                : 'Ask 3RM AI about any subject or question...'
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
    </div>
  );
};
