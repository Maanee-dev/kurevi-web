import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-[var(--background)] pt-32 pb-12 overflow-hidden relative z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={theme === 'dark' 
            ? "https://i.pinimg.com/736x/8e/2b/de/8e2bde03e3296e23d74e619f12d97af4.jpg" 
            : "https://images.kurevi.com/light-mode.png"
          } 
          alt="Background" 
          className="w-full h-full object-cover opacity-70 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] from-0% via-[var(--background)]/80 via-30% to-transparent to-100% pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-6">
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">Ready to initiate <br/> your next project?</h3>
            <Link to="/contact" className="pill-button-primary inline-flex group">
              <span>Start the dialogue</span>
              <div className="w-6 h-6 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform ml-2">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">Home</Link></li>
              <li><Link to="/work" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">Work</Link></li>
              <li><Link to="/services" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-6">Socials</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/9607222966" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm font-medium hover:text-[var(--muted)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Massive Footer Logo */}
        <div className="w-full flex justify-center items-center border-b border-[var(--border)] pb-12 mb-12">
          <span className="text-[18vw] font-black tracking-tighter leading-none uppercase text-[var(--foreground)] w-full text-center">
            KUREVI.<span className="text-[4vw] align-top"></span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Kurevi</p>
        </div>
      </div>
    </footer>
  );
}
