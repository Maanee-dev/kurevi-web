import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-8">
              The Social is a forward-thinking web development company dedicated to transforming 
              your digital vision into reality. With a focus on creativity and innovation, we specialize in 
              creating bespoke websites that captivate audiences and drive results. Whether you're 
              a startup or an established business, we're here to elevate your online presence and 
              help you succeed in the digital world.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { val: "100+", label: "projects" },
                { val: "32", label: "partners" },
                { val: "3", label: "offices" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold mb-1 tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="text-xs font-bold uppercase tracking-widest flex items-center group">
              More
              <div className="ml-2 w-5 h-5 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors">
                <ArrowRight size={10} />
              </div>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-video"
          >
            <div className="absolute inset-0 cursor-panel overflow-hidden">
              <img 
                src="https://picsum.photos/seed/team/1200/800" 
                alt="Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--foreground)] -z-10 rounded-2xl opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
