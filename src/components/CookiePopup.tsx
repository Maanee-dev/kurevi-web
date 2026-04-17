import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or rejected cookies
    const cookieConsent = localStorage.getItem('kurevi-cookie-consent');
    if (!cookieConsent) {
      // Delay popup slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kurevi-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kurevi-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 max-w-sm w-[calc(100%-3rem)] bg-[var(--background)] border border-[var(--border)] shadow-2xl z-[100] p-6 lg:ml-0 md:max-w-md"
        >
          <div className="flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--foreground)]"></span>
              Cookie Policy
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-6 font-medium">
              We use cookies to improve your experience on our site and deliver personalized marketing. By continuing, you agree to our use of cookies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <button 
                onClick={handleAccept}
                className="w-full sm:w-auto px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
              <button 
                onClick={handleDecline}
                className="w-full sm:w-auto px-5 py-2.5 bg-transparent text-[var(--foreground)] border border-[var(--border)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
