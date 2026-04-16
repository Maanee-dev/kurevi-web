import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const services = [
  {
    id: "01",
    title: "WEB DEVELOPMENT",
    description: "Our expert team crafts bespoke websites tailored to your brand's needs, ensuring seamless functionality and stunning design to captivate your audience.",
    dark: true,
  },
  {
    id: "02",
    title: "DIGITAL MARKETING STRATEGIES",
    description: "Harness the power of targeted digital campaigns designed to maximize your online reach and drive conversions, with our data-driven approach delivering measurable results every time.",
    dark: false,
  },
  {
    id: "03",
    title: "CREATIVE DESIGN SERVICE",
    description: "From eye-catching visuals to intuitive user experiences, our creative design services breathe life into your brand, ensuring memorable interactions that resonate with your audience.",
    dark: false,
  },
  {
    id: "04",
    title: "E-COMMERCE",
    description: "Elevate your online retail experience with our comprehensive e-commerce solutions, from user-friendly interfaces to secure payment gateways, we empower businesses to thrive in the digital marketplace.",
    dark: true,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="section-title">Our Services</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Explore our array of services, from web development to e-commerce 
              solutions, designed to elevate your online presence and drive success in 
              the digital landscape.
            </p>
          </div>
          <Link to="/contact" className="pill-button-primary group">
            <span>Contact us</span>
            <div className="w-5 h-5 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={12} />
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "cursor-panel p-10 min-h-[300px] flex flex-col justify-between transition-all duration-500 group relative overflow-hidden",
                service.dark 
                  ? "bg-[var(--foreground)] text-[var(--background)] border-transparent" 
                  : "bg-transparent text-[var(--foreground)] border-[var(--border)]"
              )}
            >
              {/* Hover Image Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0">
                <img 
                  src={`https://picsum.photos/seed/${service.title}/1200/800`} 
                  alt={service.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex justify-between items-start relative z-10">
                <div className={cn(
                  "w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold",
                  service.dark ? "border-white/20" : "border-[var(--border)]"
                )}>
                  {service.id}
                </div>
              </div>
              
              <div className="mt-12 relative z-10">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h4>
                <p className={cn(
                  "text-sm leading-relaxed max-w-sm",
                  service.dark ? "text-white/70" : "text-[var(--muted)]"
                )}>
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
