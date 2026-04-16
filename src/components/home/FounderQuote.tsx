import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FounderQuote() {
  const [showDhivehi, setShowDhivehi] = useState(false);
  const [hasStartedReading, setHasStartedReading] = useState(false);

  useEffect(() => {
    if (!hasStartedReading) return;
    
    // Switch to Dhivehi after 10 seconds of the viewport triggering read start
    const timer = setTimeout(() => {
      setShowDhivehi(true);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [hasStartedReading]);

  const englishQuote = "We keep things simple. We don't use confusing jargon or build things you don't need. A great digital product should look amazing, be incredibly easy to use, and actually help your business grow. That's exactly what we focus on here.";
  const dhivehiQuote = "އަހަރެމެން ކަންތައްތައް ބަހައްޓަނީ ވަރަށް ސާދާކޮށެވެ. އޮޅޭފަދަ ބަސްތައް ބޭނުންކޮށް، ބޭނުންނުވާ އެއްޗެހި އަހަރެމެން ނުހަދަމެވެ. ރަނގަޅު ޑިޖިޓަލް އުފެއްދުމެއް ވާންވާނީ ބަލާލަން ރީތި، ބޭނުންކުރަން ފަސޭހަ އަދި ވިޔަފާރި ކުރިއަރުވަން އެހީވެދޭ އެއްޗަކަށެވެ. އަހަރެމެންގެ މައިގަނޑު އަމާޒަކީ ހަމަ މިއީއެވެ.";

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
            <div className="aspect-[4/5] border border-[var(--border)] overflow-hidden bg-[#111] relative group">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQF9gtFajlniMw/profile-displayphoto-crop_800_800/B56Z1qQv62KAAI-/0/1775604273773?e=1778112000&v=beta&t=wI7R29Hw3rtvj_sv2mIwv2hAaL6qiMbhlXKrMAAL-vA" 
                alt="Maanee Ali - Founder" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Quote Side (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setHasStartedReading(true)}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 lg:col-span-8"
          >
            <div className="mb-6">
              <span className="text-6xl md:text-8xl text-[var(--muted)] opacity-20 font-serif leading-none select-none">"</span>
            </div>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                {!showDhivehi ? (
                  <motion.h2 
                    key="en"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.5 } }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-serif text-[var(--foreground)] leading-relaxed md:leading-relaxed relative font-normal mb-10 max-w-3xl"
                  >
                    {englishQuote}
                  </motion.h2>
                ) : (
                  <motion.h2 
                    key="dv"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                    dir="rtl"
                    className="text-2xl md:text-3xl lg:text-4xl font-serif text-[var(--foreground)] leading-relaxed md:leading-relaxed relative font-normal mb-10 max-w-3xl"
                  >
                    {dhivehiQuote}
                  </motion.h2>
                )}
              </AnimatePresence>
            </div>
            
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
