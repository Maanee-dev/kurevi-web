import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "01",
    title: "E-COMMERCE",
    headline: "Build your online store, make selling easy.",
    description: "What if we told you that we could have a digital store up and running for you in just 2 weeks? All we need to do is blend your brand's look with our existing eCommerce solution, and voila! You're ready to sell online. While we cover all the major eCommerce features, we also offer some great payment plans, and you'll get to work with a fun team. So this one's definitely a win-win for you.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "HUMANLOT",
    headline: "For productive teams & happier employees",
    description: "We believe that teams are only as strong as their people. And having a well built HR software in place can facilitate growth, it can turn out to be a game-changer. These HR tools have been put together to fix our team's personal problems & we hope it's of great use for yours.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "NEXUS",
    headline: "Next-generation web platforms.",
    description: "A complete overhaul of the digital experience. We focused on creating a seamless, intuitive interface that guides users through complex data with ease. The result is a platform that not only looks stunning but performs flawlessly under heavy load.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function FeaturedWork() {
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
            SELECTED <br /> ARCHIVES
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
              <div className="w-full md:w-1/2 relative bg-[#111] min-h-[40vh] md:min-h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
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
