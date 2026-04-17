import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '@/src/components/SEO';
import { useTheme } from '../contexts/ThemeContext';

export default function Work() {
  const { theme } = useTheme();

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Our Work"
        description="View our selected projects and recent work. See how Kurevi delivers exceptional digital products and marketing campaigns."
        keywords="Kurevi portfolios, web development portfolio, marketing campaigns Maldives, digital products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16">Selected <br /> Projects.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Luminal AI", category: "Web Development" },
            { title: "Vortex Gear", category: "Digital Marketing" },
            { title: "Aether Labs", category: "Creative Design" },
            { title: "Zenith Store", category: "E-commerce" },
          ].map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="cosmic-card aspect-[16/10] mb-6 overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <img 
                  src={`https://picsum.photos/seed/${project.title}/1200/800`} 
                  alt={project.title}
                  className={`w-full h-full object-cover ${theme === 'dark' ? 'grayscale group-hover:grayscale-0' : ''} group-hover:scale-110 transition-all duration-1000`}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-2 group-hover:text-white/60 transition-colors">{project.category}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight gradient-text group-hover:tracking-widest transition-all duration-500">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl border border-[var(--border)] flex items-center justify-center group-hover:border-white/40 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
                  <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
