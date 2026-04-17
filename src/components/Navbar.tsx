import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-xl font-black tracking-tighter uppercase transition-all duration-500">KUREVI.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-xs font-medium transition-all duration-300 flex items-center",
                  location.pathname === link.path ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                {location.pathname === link.path && <span className="mr-2 text-[10px]">●</span>}
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="text-xs font-bold bg-[var(--foreground)] text-[var(--background)] px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 flex items-center">
              <span className="mr-2 text-[10px]"></span> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-[var(--border)]/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-b border-[var(--border)] bg-[var(--background)]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path ? "bg-[var(--border)]/10 text-[var(--foreground)]" : "text-[var(--muted)] hover:bg-[var(--border)]/5 hover:text-[var(--foreground)]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center cursor-button-primary mt-4"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
