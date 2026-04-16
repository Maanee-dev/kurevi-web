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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cursor-panel p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[450px]"
            >
              <div>
                <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center mb-8">
                  <service.icon size={24} />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">{service.title}</h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {service.features.map((feature, j) => (
                  <div key={j} className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] flex items-center">
                    <div className="w-1 h-1 rounded-full bg-[var(--foreground)] mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
