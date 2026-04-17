import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const projects = [
  {
    id: "01",
    title: "E-COMMERCE",
    headline: "Build your online store securely.",
    description: "We can have your very own digital store up and running quickly. We blend your brand's unique look with a powerful online shopping system. You get all the features you need to sell online safely, along with payment plans that make sense for your business.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "HUMANLOT",
    headline: "Better tools for happier teams.",
    description: "A business is only as strong as its people. We built HR software that actually makes managing a team easier. These tools clear up confusion, save time, and help your employees do their best work without the usual stress.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "NEXUS",
    headline: "A faster, cleaner web platform.",
    description: "We completely rebuilt their digital platform from the ground up. The focus was on making a simple, easy-to-use website that handles big amounts of data without slowing down. The final product looks great and runs perfectly even on heavy traffic days.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function FeaturedWork() {
  const { theme } = useTheme();

  return (
    <section className="py-32 bg-[var(--background)] border-t border-[var(--border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            OUR RECENT <br /> WORK
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
            <Link to="/work" className="pill-button-secondary group">
              View All Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="relative w-full pb-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="sticky w-full min-h-[60vh] bg-[var(--background)] border border-[var(--border)] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
              style={{ 
                marginTop: i === 0 ? '0' : '40px',
                zIndex: i,
                top: `calc(8rem + ${i * 2}rem)`
              }}
            >
              {/* Left Content */}
              <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[var(--background)] relative z-10">
                <span className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-6">
                  {project.title}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 text-[var(--foreground)] tracking-tight">
                  {project.headline}
                </h3>
                <p className="text-lg text-[var(--foreground)]/70 leading-relaxed max-w-xl font-medium">
                  {project.description}
                </p>
              </div>
              
              {/* Right Image */}
              <div className="w-full md:w-1/2 relative bg-[var(--background)] min-h-[40vh] md:min-h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`absolute inset-0 w-full h-full object-cover ${theme === 'dark' ? 'grayscale opacity-80 hover:grayscale-0 hover:opacity-100' : 'opacity-100'} transition-all duration-700`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
