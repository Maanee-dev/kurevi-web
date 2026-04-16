import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/736x/8e/2b/de/8e2bde03e3296e23d74e619f12d97af4.jpg" 
          alt="Background" 
          className="w-full h-full object-cover  opacity-70 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/20 to-[var(--background)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
       
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12vw] md:text-[8.5vw] font-black tracking-tighter leading-none uppercase text-[var(--foreground)] relative"
        >
          For <span className="relative inline-block">
            <span className="relative z-10">Brands</span>
            <svg className="absolute -inset-2 md:-inset-4 w-[calc(100%+16px)] md:w-[calc(100%+32px)] h-[calc(100%+16px)] md:h-[calc(100%+32px)] z-0 text-white opacity-80" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M100,5 C150,5 195,25 195,50 C195,75 150,95 100,95 C50,95 5,75 5,50 C5,25 50,5 100,5 Z" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
          </span> <br /> 
          That Want <span className="font-serif italic normal-case font-normal tracking-normal">More</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link to="/services" className="pill-button-primary group">
            <span className="relative z-10">Start a Project</span>
          </Link>
          <Link to="/work" className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-all group flex items-center gap-2">
            View Our Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
