import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';

export default function FounderQuote() {
  const { theme } = useTheme();
  const englishQuote = "Marketing shouldn't be expensive. We help our local entrepreneurs grow by providing seamless workflows at affordable prices. You handle your daily operations, and we handle the marketing. We partner with you from day one to ensure you stand out in the market and increase conversions.";

  return (
    <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)] overflow-hidden relative">
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Image Side (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="aspect-[4/5] border border-[var(--border)] overflow-hidden bg-[var(--background)] relative group">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQF9gtFajlniMw/profile-displayphoto-crop_800_800/B56Z1qQv62KAAI-/0/1775604273773?e=1778112000&v=beta&t=wI7R29Hw3rtvj_sv2mIwv2hAaL6qiMbhlXKrMAAL-vA" 
                alt="Maanee Ali - Founder" 
                className={`w-full h-full object-cover ${theme === 'dark' ? 'grayscale opacity-90' : 'opacity-100'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Quote Side (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 lg:col-span-8"
          >
            <div className="mb-6">
              <span className="text-6xl md:text-8xl text-[var(--muted)] opacity-20 font-serif leading-none select-none">"</span>
            </div>
            
            <h2 className="text-xl md:text-2xl xl:text-4xl font-serif text-[var(--foreground)] leading-relaxed lg:leading-[1.6] relative font-normal mb-8 lg:mb-10 max-w-3xl pr-0 md:pr-4 lg:pr-12 xl:pr-0">
              {englishQuote}
            </h2>
            
            <div className="flex flex-col items-start mt-8">
              <div className="w-12 h-px bg-[var(--muted)] mb-6"></div>
              <p className="text-lg font-bold uppercase tracking-widest text-[var(--foreground)] mb-1">Maanee Ali</p>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Founder & CEO</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
