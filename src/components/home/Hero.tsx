import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/736x/16/59/1a/16591aeeb653e6eacdeb74e29d625160.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-7"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]"></div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-64 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[15%] w-80 h-80 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block">
            <span className="typing-effect text-xs font-mono uppercase tracking-[0.4em] text-[var(--muted)]">
              Est. 2024 / Digital Excellence
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-bold tracking-tighter leading-[0.9] uppercase mb-12 max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              The Social
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block"
            >
              Web
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block"
            >
              Production
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block"
            >
              Agency
            </motion.span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-lg mx-auto mb-12"
          >
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-8">
              Unlock your digital potential with The Social web production agency. We offer 
              bespoke solutions in web development, digital marketing, and creative design 
              to elevate your online presence and drive measurable results.
            </p>
            
            <div className="flex justify-center">
              <Link to="/services" className="pill-button-primary group">
                <span>Choose services</span>
                <div className="w-6 h-6 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--foreground)] to-transparent"></div>
      </motion.div>
    </section>
  );
}
