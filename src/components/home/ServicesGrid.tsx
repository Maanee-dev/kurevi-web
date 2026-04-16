import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

const services = [
  {
    id: "01",
    slug: "/services/web-development",
    title: "WEB DEVELOPMENT",
    description: "We build custom websites that are fast, secure, and easy to manage. We focus on writing clean code so your site works perfectly for all your visitors.",
  },
  {
    id: "02",
    slug: "/services/digital-marketing",
    title: "DIGITAL MARKETING",
    description: "We help you reach the right people online. From social media to search engines, our campaigns are designed to get you real customers and clear results.",
  },
  {
    id: "03",
    slug: "/services/creative-design",
    title: "CREATIVE DESIGN",
    description: "We make your brand look amazing. We design logos, graphics, and websites that catch the eye and clearly speak to your target audience.",
  },
  {
    id: "04",
    slug: "/services/e-commerce",
    title: "E-COMMERCE",
    description: "Start selling online the easy way. We create digital stores that look great and make the buying process fast and secure for your customers.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            WORK <br /> PROCESS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xs text-sm text-[var(--muted)] leading-relaxed mt-8 md:mt-0"
          >
            See how our simple, proven process helps your brand grow. We deliver high-quality custom work that brings real value from day one.
          </motion.p>
        </div>

        <div className="brutalist-grid grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "brutalist-cell p-10 min-h-[350px] flex flex-col group overflow-hidden relative cursor-pointer",
                "transition-colors duration-700",
                i % 2 !== 0 ? "md:mt-16" : ""
              )}
              onClick={() => window.location.href = service.slug}
            >
              {/* Thermal Aura Background */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                <div 
                  className="absolute top-1/2 left-1/2 w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2 scale-90 group-hover:scale-100 opacity-90 transition-transform duration-1000 ease-out blur-3xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse 60% 80% at center, #000000 15%, #ff3b00 45%, #ff1ea0 65%, #100bdf 85%, transparent 100%)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                  }}
                ></div>
              </div>

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex justify-end items-start mb-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors opacity-50 group-hover:opacity-100">
                    {service.slug}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight group-hover:tracking-widest transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[var(--muted)] leading-relaxed mt-auto">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
