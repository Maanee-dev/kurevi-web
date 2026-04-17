import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export default function AboutPreview() {
  const { theme } = useTheme();

  return (
    <section className="py-32 border-t border-[var(--border)] relative overflow-hidden">
      {/* Soft Blurred Background Image (Light Mode Only) */}
      {theme === 'light' && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2500&auto=format&fit=crop" 
            alt="About Background" 
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110"
          />
          {/* Soft edge fading to blend into the rest of the page */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] opacity-90"></div>
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] flex items-center">
              <span className="mr-2 text-[10px]">●</span> ABOUT
            </span>
          </div>
          
          <div className="md:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase text-[var(--foreground)]/90 mb-16"
            >
              KUREVI IS A DIGITAL CREATIVE AGENCY. WE MIX BOLD <span className="font-serif italic normal-case font-normal tracking-normal text-[var(--foreground)]">Technology</span> AND SHARP DESIGN TO BUILD EXPERIENCES THAT <span className="underline decoration-2 underline-offset-8">STAND OUT</span> AND DRIVE REAL BUSINESS GROWTH.
            </motion.h2>
            
            <div className="grid grid-cols-3 gap-10 mb-16 border-t border-[var(--border)] pt-12">
              {[
                { val: "100+", label: "projects" },
                { val: "32", label: "clients" },
                { val: "3", label: "locations" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl md:text-5xl font-black mb-2 tracking-tighter">{stat.val}</div>
                  <div className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="pill-button-secondary group inline-flex items-center">
              Read Manifest
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
