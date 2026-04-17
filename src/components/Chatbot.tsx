import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', text: 'Hello! How can we assist your digital growth today?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chatHistory, isOpen]);

  const handleOptionClick = (opt: string) => {
    setChatHistory(prev => [...prev, { role: 'user', text: opt }]);
    setTimeout(() => {
      let reply = "Thank you. A human agent will be in touch.";
      if (opt.includes("website")) {
        reply = "We build lightning-fast, high-converting websites. Check out our Web Packages on the Pricing page!";
      } else if (opt.includes("Social")) {
        reply = "We create content that converts. Our Social Media packages start from MVR 2,999/month.";
      } else if (opt.includes("scale")) {
        reply = "For aggressive scaling, our Kurimagu package provides end-to-end digital architecture.";
      } else if (opt.includes("browsing")) {
        reply = "Take your time! Exploring our Capabilities or Services pages is a great place to start.";
      }
      setChatHistory(prev => [...prev, { role: 'bot', text: reply }]);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory(prev => [...prev, { role: 'user', text: message }]);
    setMessage('');

    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { role: 'bot', text: "Thank you for reaching out. We will process your request shortly. You can also submit a formal inquiry via our Contact page." }
      ]);
    }, 1000);
  };

  const options = [
    "I need a new website",
    "Social media marketing",
    "I want to scale my business",
    "Just browsing around"
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 sm:bottom-28 sm:right-10 w-80 md:w-96 bg-[var(--background)] border border-[var(--border)] shadow-2xl rounded-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[var(--foreground)] text-[var(--background)] p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[var(--background)]/20 p-2 rounded-full">
                  <MessageSquare size={16} />
                </div>
                <span className="font-bold text-sm tracking-wide">Support Chat</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-[var(--background)]/20 p-1.5 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-6 bg-[var(--background)] h-[340px] overflow-y-auto flex flex-col space-y-4 font-sans text-[14px]">
              {chatHistory.map((chat, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "max-w-[85%] px-4 py-3 leading-relaxed",
                    chat.role === 'user' 
                      ? "bg-[var(--foreground)] text-[var(--background)] self-end ml-auto rounded-2xl rounded-tr-sm" 
                      : "bg-[var(--foreground)]/5 text-[var(--foreground)] self-start rounded-2xl rounded-tl-sm border border-[var(--border)]"
                  )}
                >
                  <p>{chat.text}</p>
                </div>
              ))}

              {/* Quick Reply Options */}
              {chatHistory.length === 1 && (
                <div className="flex flex-col gap-2 mt-4 pt-2 items-end">
                  {options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(opt)}
                      className="text-[13px] font-medium border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] rounded-full px-5 py-2.5 hover:bg-[var(--foreground)]/5 transition-colors max-w-full text-left shadow-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* CTA Option */}
            {chatHistory.length > 2 && (
              <div className="px-6 py-4 text-center bg-gradient-to-t from-[var(--background)] via-[var(--background)] to-transparent absolute bottom-[76px] w-full pb-6">
                 <Link to="/contact" onClick={() => setIsOpen(false)} className="inline-flex items-center text-[12px] font-semibold bg-[var(--foreground)] text-[var(--background)] px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform">
                   Formal Inquiry <ArrowRight size={14} className="ml-2" />
                 </Link>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-[var(--background)] border-t border-[var(--border)] z-10">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-[var(--foreground)]/5 text-sm p-3.5 pr-12 rounded-full focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]/30 transition-all placeholder:text-[var(--muted)] font-sans border border-transparent focus:border-[var(--foreground)]/20"
                />
                <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="absolute right-1.5 p-2 bg-[var(--foreground)] text-[var(--background)] rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 sm:bottom-10 sm:right-10 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-105 transition-transform duration-300",
          isOpen 
            ? "bg-[var(--foreground)] text-[var(--background)] rotate-90" 
            : "bg-[var(--foreground)] text-[var(--background)] rotate-0"
        )}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </>
  );
}
