import { motion } from 'motion/react';
import { Share2, Zap, Palette, PenTool, Layout, Search, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import SEO from '@/src/components/SEO';

const services = [
  {
    title: "Social Media Marketing",
    description: "Strategic content and community management across all major platforms. We build presence that converts followers into fans.",
    icon: Share2,
    features: ["Platform Strategy", "Content Calendars", "Community Management", "Influencer Outreach"],
    slug: "/services/digital-marketing"
  },
  {
    title: "Paid Advertising",
    description: "High-ROI campaigns on Google, Meta, and LinkedIn with AI optimization. We focus on CAC and LTV metrics.",
    icon: Zap,
    features: ["Search Ads", "Social Ads", "Retargeting", "A/B Testing"],
    slug: "/services/digital-marketing"
  },
  {
    title: "Branding",
    description: "Identity design that captures your vision and resonates with your audience. We build brands that stand the test of time.",
    icon: Palette,
    features: ["Logo Design", "Visual Identity", "Brand Voice", "Style Guides"],
    slug: "/services/creative-design"
  },
  {
    title: "Content Creation",
    description: "Premium video, photo, and copy that tells your brand's unique story. High-quality production for high-quality brands.",
    icon: PenTool,
    features: ["Video Production", "Photography", "Copywriting", "Motion Graphics"],
    slug: "/services/creative-design"
  },
  {
    title: "Web Design",
    description: "Modern, high-converting websites built with a product-first mindset. Fast, responsive, and beautiful.",
    icon: Layout,
    features: ["UI/UX Design", "Responsive Web", "E-commerce", "Performance Optimization"],
    slug: "/services/web-development"
  },
  {
    title: "SEO",
    description: "Technical and content optimization to dominate search rankings. Long-term growth through organic visibility.",
    icon: Search,
    features: ["Technical SEO", "Keyword Research", "On-page Optimization", "Backlink Strategy"],
    slug: "/services/digital-marketing"
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
      <SEO 
        title="Our Services"
        description="Comprehensive digital services by Kurevi Maldives: Social Media Marketing, SEO, Paid Ads, Web Development, and Creative Design."
        keywords="marketing services Maldives, SEO Maldives, web design Maldives, social media marketing Maldives"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none mb-6"
          >
            OUR <br /> CAPABILITIES.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--muted)] max-w-2xl font-medium"
          >
            Specialized solutions designed to build, scale, and define your brand in a crowded digital landscape.
          </motion.p>
        </div>

        <div className="border border-[var(--border)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] [&>*:nth-child(n+4)]:border-t [&>*:nth-child(n+4)]:border-[var(--border)]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={cn(
                "p-10 flex flex-col group relative overflow-hidden bg-[var(--background)]",
                "transition-colors duration-700"
              )}
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

              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-500">
                    <service.icon size={24} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] opacity-50 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </div>
                </div>
                
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                  {service.title}
                </h2>
                
                <p className="text-[var(--foreground)]/70 leading-relaxed font-medium mb-12 min-h-[4.5rem]">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-auto relative z-10 pt-8 border-t border-[var(--border)]/50">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] flex items-center">
                      <span className="w-1 h-1 bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors duration-500 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.slug} className="inline-flex items-center text-xs font-bold uppercase tracking-widest mt-4 group-hover:text-[#ff8a9f] transition-colors">
                  Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
