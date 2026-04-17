import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Direct to WhatsApp
    const whatsappUrl = `https://wa.me/9607259060?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 bg-[var(--background)] border border-[var(--border)] shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[var(--foreground)] text-[var(--background)] p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--background)]/20 flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest">Kurevi Support</h3>
                  <p className="text-[10px] opacity-70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 block"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-[var(--background)]/20 p-1 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-6 bg-black/5 dark:bg-white/5 min-h-[160px] flex flex-col justify-end">
              <div className="bg-[var(--background)] p-4 border border-[var(--border)] rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[90%] mb-4">
                <p className="text-sm font-medium">Hello! Welcome to Kurevi. How can we assist you with our digital services today?</p>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[var(--background)] border-t border-[var(--border)]">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm p-3 border border-[var(--border)] rounded-none focus:outline-none focus:border-[var(--foreground)] transition-colors placeholder:text-[var(--muted)]"
                  required
                />
                <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="bg-[var(--foreground)] text-[var(--background)] p-3 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="text-[9px] text-center text-[var(--muted)] mt-3 uppercase tracking-widest font-mono">
                Redirects to WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 bg-[var(--foreground)] text-[var(--background)] shadow-2xl flex items-center justify-center z-50 hover:scale-105 transition-transform duration-300",
          isOpen ? "rotate-90" : "rotate-0"
        )}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
