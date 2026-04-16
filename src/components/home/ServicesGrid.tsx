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
    case "01": // Development - Coding Animation
      return (
        <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 pointer-events-none">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full text-[var(--foreground)]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Floating binary particles */}
            <motion.text x="20" y="20" fontSize="8" fill="currentColor" stroke="none" animate={{ y: [0, -20], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>0</motion.text>
            <motion.text x="80" y="30" fontSize="8" fill="currentColor" stroke="none" animate={{ y: [0, -20], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "linear" }}>1</motion.text>
            <motion.text x="30" y="80" fontSize="8" fill="currentColor" stroke="none" animate={{ y: [0, -20], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: 1, ease: "linear" }}>1</motion.text>
            
            {/* Left bracket < */}
            <motion.polyline points="35,35 15,50 35,65" animate={{ x: [0, -5, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            {/* Slash / */}
            <motion.line x1="60" y1="20" x2="40" y2="80" animate={{ rotate: [0, 5, 0], transformOrigin: "50% 50%" }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            {/* Right bracket > */}
            <motion.polyline points="65,35 85,50 65,65" animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            {/* Blinking cursor _ */}
            <motion.rect x="30" y="85" width="40" height="4" fill="currentColor" stroke="none" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
          </motion.svg>
        </div>
      );
    case "02": // Marketing - Rising Graph
      return (
        <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 pointer-events-none">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full text-[var(--foreground)]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Grid lines */}
            <path d="M 10,70 L 90,70 M 10,50 L 90,50 M 10,30 L 90,30" strokeWidth="1" strokeDasharray="2 2" opacity="0.1" />
            {/* Axes */}
            <polyline points="10,90 90,90" opacity="0.3" />
            <polyline points="10,90 10,10" opacity="0.3" />
            {/* Area Fill */}
            <motion.path 
              d="M 10,90 L 10,80 Q 30,80 40,50 T 70,30 L 90,15 L 90,90 Z" 
              fill="currentColor" fillOpacity="0.05" stroke="none"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Trend line */}
            <motion.path 
              d="M 10,80 Q 30,80 40,50 T 70,30 L 90,15" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Data points */}
            <motion.circle cx="40" cy="50" r="3" fill="currentColor" stroke="none" animate={{ scale: [0, 1.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            <motion.circle cx="70" cy="30" r="3" fill="currentColor" stroke="none" animate={{ scale: [0, 1.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
            <motion.circle cx="90" cy="15" r="4" fill="currentColor" stroke="none" animate={{ scale: [0, 1.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
          </motion.svg>
        </div>
      );
    case "03": // Design - Pen Tool
      return (
        <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 pointer-events-none">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full text-[var(--foreground)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Rotating dashed circle background */}
            <motion.circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50px 50px" }} />
            
            {/* Bezier Curve */}
            <motion.path 
              d="M 20,80 C 20,80 50,10 80,50" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Path control points */}
            <motion.line x1="20" y1="80" x2="50" y2="10" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <motion.line x1="80" y1="50" x2="50" y2="10" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <motion.circle cx="50" cy="10" r="3" fill="currentColor" stroke="none" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="20" cy="80" r="3" fill="currentColor" stroke="none" />
            <motion.circle cx="80" cy="50" r="3" fill="currentColor" stroke="none" />
            
            {/* Pen Nib */}
            <motion.g
              animate={{
                x: [0, 30, 60, 0],
                y: [0, -70, -30, 0],
                rotate: [0, 45, 90, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M 15,85 L 25,60 L 40,75 Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M 25,60 L 60,25 L 75,40 L 40,75 Z" />
              <line x1="15" y1="85" x2="32" y2="67" />
            </motion.g>
          </motion.svg>
        </div>
      );
    case "04": // E-Commerce - Shopping Bag
      return (
        <div className="absolute -right-4 -bottom-4 w-64 h-64 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 pointer-events-none">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full text-[var(--foreground)]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.g animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              {/* Bag handle */}
              <path d="M 35,40 V 25 C 35,15 65,15 65,25 V 40" strokeWidth="4" />
              
              {/* Swinging Price Tag */}
              <motion.g animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "65px 25px" }}>
                <line x1="65" y1="25" x2="80" y2="35" strokeWidth="2" />
                <rect x="75" y="35" width="15" height="20" fill="currentColor" fillOpacity="0.2" strokeWidth="2" rx="2" />
                <circle cx="82.5" cy="40" r="2" fill="currentColor" stroke="none" />
              </motion.g>

              {/* Bag body */}
              <motion.path 
                d="M 20,40 H 80 L 75,90 H 25 Z" 
                fill="currentColor" fillOpacity="0.05" 
                strokeWidth="4"
              />
              {/* Bag details */}
              <motion.path d="M 40,60 Q 50,70 60,60" strokeWidth="3" strokeLinecap="round" />
            </motion.g>
            {/* Items dropping into bag */}
            <motion.circle 
              cx="50" cy="10" r="6" fill="currentColor" stroke="none" 
              animate={{ y: [-10, 40], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }} 
            />
            <motion.circle 
              cx="40" cy="0" r="4" fill="currentColor" stroke="none" 
              animate={{ y: [-10, 50], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 0.5 }} 
            />
            <motion.circle 
              cx="60" cy="-5" r="5" fill="currentColor" stroke="none" 
              animate={{ y: [-10, 45], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 1 }} 
            />
          </motion.svg>
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
                "brutalist-cell p-10 min-h-[350px] flex flex-col group overflow-hidden relative",
                "bg-gradient-to-br from-transparent to-[#4a2b32]/10 hover:to-[#4a2b32]/30 transition-all duration-500",
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
