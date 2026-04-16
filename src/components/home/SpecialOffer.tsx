import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <section className="py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Cosmic Accents */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[2px] border-dashed border-[var(--border)]/10 rounded-full pointer-events-none"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-[var(--muted)] glow-text relative">
              <motion.span 
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -left-8 text-white"
              >
                ●
              </motion.span>
              Transmission Received // Priority Alpha
            </span>
          </div>
          
          <h2 className="text-6xl md:text-[140px] font-bold tracking-tighter leading-[0.8] uppercase mb-12 max-w-5xl mx-auto gradient-text">
            Special Offer <br />
            For <br />
            New Clients
          </h2>
          
          <div className="max-w-lg mx-auto">
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-12 font-mono tracking-tight">
              [ INITIATING ONBOARDING PROTOCOL ] <br />
              Secure your position in the digital frontier. 
              We are currently accepting a limited number of new nodes for the next cycle. 
              Access premium architecture with priority initialization.
            </p>
            
            <div className="flex justify-center">
              <button className="pill-button-primary group px-14 py-6 cosmic-border relative overflow-hidden">
                <motion.div 
                  animate={{ 
                    x: ['-100%', '200%'],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10">Secure Access Protocol</span>
                <div className="w-6 h-6 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform relative z-10">
                  <ArrowRight size={14} />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Grid Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-30"></div>
    </section>
  );
}
