import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

const services = [
  {
    id: "01",
    title: "WEB DEVELOPMENT",
    description: "Our expert team crafts bespoke websites tailored to your brand's needs, ensuring seamless functionality and stunning design to captivate your audience.",
  },
  {
    id: "02",
    title: "DIGITAL MARKETING",
    description: "Harness the power of targeted digital campaigns designed to maximize your online reach and drive conversions, with our data-driven approach delivering measurable results every time.",
  },
  {
    id: "03",
    title: "CREATIVE DESIGN",
    description: "From eye-catching visuals to intuitive user experiences, our creative design services breathe life into your brand, ensuring memorable interactions that resonate with your audience.",
  },
  {
    id: "04",
    title: "E-COMMERCE",
    description: "Elevate your online retail experience with our comprehensive e-commerce solutions, from user-friendly interfaces to secure payment gateways, we empower businesses to thrive in the digital marketplace.",
  },
];

const renderAnimation = (id: string) => {
  switch (id) {
    case "01":
      return (
        <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 pointer-events-none">
          <div className="grid grid-cols-3 gap-4 w-full h-full">
            {[...Array(9)].map((_, j) => (
              <motion.div 
                key={j} 
                className="bg-[var(--foreground)] w-full h-full"
                animate={{ scale: [1, 0.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: j * 0.2, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      );
    case "02":
      return (
        <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 flex items-end gap-4 pointer-events-none">
          {[40, 80, 60, 100].map((h, j) => (
            <motion.div 
              key={j} 
              className="w-full bg-[var(--foreground)]"
              initial={{ height: "10%" }}
              animate={{ height: [`10%`, `${h}%`, `10%`] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: j * 0.2, ease: "easeInOut" }}
            />
          ))}
        </div>
      );
    case "03":
      return (
        <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 pointer-events-none">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full stroke-[var(--foreground)] stroke-[2] fill-none">
            <motion.path
              d="M 50,5 L 95,95 L 5,95 Z"
              animate={{
                d: [
                  "M 50,5 L 95,95 L 5,95 Z",
                  "M 5,5 L 95,5 L 95,95 L 5,95 Z",
                  "M 50,5 C 90,5 95,50 95,50 C 95,90 50,95 50,95 C 10,95 5,50 5,50 C 5,10 10,5 50,5 Z",
                  "M 50,5 L 95,95 L 5,95 Z"
                ],
                rotate: [0, 90, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      );
    case "04":
      return (
        <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 flex flex-col justify-between py-8 pointer-events-none">
          {[...Array(7)].map((_, j) => (
            <motion.div 
              key={j} 
              className="h-4 bg-[var(--foreground)] w-full origin-right"
              animate={{ scaleX: [1, Math.random() * 0.4 + 0.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: j * 0.15, ease: "easeInOut" }}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
};

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
            See how our proven process transforms your brand with custom design solutions that deliver measurable impact from day one.
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
                "brutalist-cell p-10 min-h-[350px] flex flex-col group overflow-hidden",
                i % 2 !== 0 ? "md:mt-16" : ""
              )}
            >
              {renderAnimation(service.id)}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="number-box mb-8">
                  {service.id}
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
