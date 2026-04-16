import { motion } from 'motion/react';
import { Share2, Zap, Palette, PenTool, Layout, Search } from 'lucide-react';

const services = [
  {
    title: "Social Media Marketing",
    description: "Strategic content and community management across all major platforms. We build presence that converts followers into fans.",
    icon: Share2,
    features: ["Platform Strategy", "Content Calendars", "Community Management", "Influencer Outreach"]
  },
  {
    title: "Paid Advertising",
    description: "High-ROI campaigns on Google, Meta, and LinkedIn with AI optimization. We focus on CAC and LTV metrics.",
    icon: Zap,
    features: ["Search Ads", "Social Ads", "Retargeting", "A/B Testing"]
  },
  {
    title: "Branding",
    description: "Identity design that captures your vision and resonates with your audience. We build brands that stand the test of time.",
    icon: Palette,
    features: ["Logo Design", "Visual Identity", "Brand Voice", "Style Guides"]
  },
  {
    title: "Content Creation",
    description: "Premium video, photo, and copy that tells your brand's unique story. High-quality production for high-quality brands.",
    icon: PenTool,
    features: ["Video Production", "Photography", "Copywriting", "Motion Graphics"]
  },
  {
    title: "Web Design",
    description: "Modern, high-converting websites built with a product-first mindset. Fast, responsive, and beautiful.",
    icon: Layout,
    features: ["UI/UX Design", "Responsive Web", "E-commerce", "Performance Optimization"]
  },
  {
    title: "SEO",
    description: "Technical and content optimization to dominate search rankings. Long-term growth through organic visibility.",
    icon: Search,
    features: ["Technical SEO", "Keyword Research", "On-page Optimization", "Backlink Strategy"]
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16">Our <br /> Services.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="cosmic-card p-12 flex flex-col justify-between aspect-square md:aspect-auto md:h-[500px] group"
            >
              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl border border-[var(--border)] flex items-center justify-center mb-10 group-hover:border-white/40 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500"
                >
                  <service.icon size={28} />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                  className="text-4xl font-bold uppercase tracking-tighter mb-6 gradient-text group-hover:tracking-widest transition-all duration-500"
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.6, duration: 0.5 }}
                  className="text-sm text-[var(--muted)] leading-relaxed max-w-sm font-mono tracking-tight"
                >
                  {service.description}
                </motion.p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-12 relative z-10">
                {service.features.map((feature, j) => (
                  <motion.div 
                    key={j} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.6 + (j * 0.1), duration: 0.5 }}
                    className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] flex items-center group-hover:text-white/80 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] mr-3 group-hover:bg-white transition-colors"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
