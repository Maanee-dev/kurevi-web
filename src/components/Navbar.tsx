import { motion } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/src/contexts/ThemeContext';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/work' },
  { name: 'Team', path: '/about' },
  { name: 'Clients', path: '/clients' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tighter">kurevi.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[13px] font-medium transition-colors hover:text-[var(--foreground)]",
                  location.pathname === link.path ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--border)]/10 transition-colors"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link to="/contact" className="pill-button-primary text-xs px-6 py-2">
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[var(--border)]/10 transition-colors"
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
