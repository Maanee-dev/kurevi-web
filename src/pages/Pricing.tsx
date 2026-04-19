import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import SEO from '@/src/components/SEO';

const webPlans = [
  {
    name: "Feshun",
    price: "3,999",
    prefix: "MVR",
    suffix: "flat",
    duration: "1-2 Weeks",
    description: "Perfect for fast validation. We design and build a high-converting landing page or simple MVP to get your startup off the ground.",
    features: [
      "Custom Landing Page Design",
      "Responsive Web & Mobile Dev",
      "Basic On-Page SEO Setup",
      "Contact Forms & Lead Capture",
      "Google Analytics Integration",
      "Social Media Pixel Setup",
      "1 Dedicated Revision Round",
      "SSL & Basic Security Architecture"
    ],
    highlight: false,
  },
  {
    name: "Kurevi",
    price: "15,000",
    prefix: "MVR",
    suffix: "minimum",
    duration: "4-8 Weeks",
    description: "End-to-end digital product design. Full scale websites, applications, and e-commerce platforms tailored exactly to your business logic.",
    features: [
      "Complete UI/UX Design System",
      "Full Stack Application Development",
      "Headless CMS (Sanity/Strapi)",
      "E-Commerce & Payment Gateway",
      "Advanced Web Animations (Framer)",
      "Technical SEO & Speed Optimization",
      "3 Dedicated Revision Rounds",
      "1 Month Priority Launch Support"
    ],
    highlight: true,
  },
  {
    name: "Kurimagu",
    price: "25k+",
    prefix: "MVR",
    suffix: "per project",
    duration: "Custom Timeline",
    description: "For high-complexity digital architectures and aggressive scaling. Dedicated resources mapped precisely to your extreme requirements.",
    features: [
      "Scalable Custom Cloud Architecture",
      "Bespoke Backend Solutions (Node/Python)",
      "Complex API & 3rd-Party Integrations",
      "Mobile App Deployment (iOS/Android)",
      "Unlimited Design & Dev Support Requests",
      "Dedicated Project Manager & Channel",
      "Weekly Strategy & KPI Review Calls",
      "24/7 Priority Issue Resolution"
    ],
    highlight: false,
  }
];

const socialPlans = [
  {
    name: "Feshun",
    price: "6,950",
    prefix: "MVR",
    suffix: "month",
    duration: "Monthly",
    description: "Solidify your digital presence. Essential content scheduling and brand development to establish a professional foundation.",
    features: [
      "16 Posts/Mo (LinkedIn, X, FB, IG)",
      "Daily Stories (30/Mo)",
      "1 Photography & Videography Session",
      "Conceptual Brand Development Ideas",
      "Persistent Cross-Platform Uploads",
      "Full Profile Operations (FB, IG, X, LI)",
      "Detailed Monthly Marketing Report",
      "20% Discount on Additional Services"
    ],
    highlight: false,
  },
  {
    name: "Kurevi",
    price: "9,950",
    prefix: "MVR",
    suffix: "month",
    duration: "Monthly",
    description: "Aggressive growth focused. High volume output, targeted vertical video loops, and active community management across your funnels.",
    features: [
      "20 Posts/Mo (LinkedIn, X, FB, IG, TT)",
      "Daily Stories (60/Mo)",
      "2 TikTok/Reel Videos / Mo",
      "1 Photo & Video Session + 1 Video Ad",
      "Responding to Customer Inquiries",
      "Active Paid Ad Campaign Execution",
      "Printable Designing (2/Mo)",
      "25% Discount on Additional Services"
    ],
    highlight: true,
  },
  {
    name: "Kurimagu",
    price: "13,950",
    prefix: "MVR",
    suffix: "month",
    duration: "Monthly",
    description: "Complete marketing takeover. Full funnel ad strategy, high-fidelity mass output, and an entirely managed omnichannel digital footprint.",
    features: [
      "28 Posts/Mo & Daily Stories (90/Mo)",
      "4 TikTok/Reel Videos / Mo",
      "2 Photo & Video Recording Sessions",
      "Development & Maintenance of 1-Page Site",
      "Social Media & TV 30s Video Ad",
      "Printable Design (Menus/Banners up to 5)",
      "Full Profile Operations & Inquiry Response",
      "30% Discount on Additional Services"
    ],
    highlight: false,
  }
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'web' | 'social'>('web');
  const plans = activeTab === 'web' ? webPlans : socialPlans;

  return (
    <div className="pt-32 pb-32 bg-[var(--background)] min-h-screen">
      <SEO 
        title="Pricing"
        description="Transparent and straightforward pricing models for web development, design, social media marketing, and enterprise solutions by Kurevi Maldives."
        keywords="web design price Maldives, marketing agency pricing Maldives, setup web development Maldives cost"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none mb-6"
          >
            OUR <br /> PRICING.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--muted)] max-w-2xl mx-auto font-medium"
          >
            Transparent, straightforward pricing models built for modern companies. No hidden fees, no unnecessary complexity.
          </motion.p>
        </div>

        {/* Pricing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center p-1 bg-[var(--border)] rounded-full backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('web')}
              className={cn(
                "px-6 md:px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300",
                activeTab === 'web' 
                  ? "bg-[var(--foreground)] text-[var(--background)] shadow-xl" 
                  : "text-[var(--foreground)] hover:bg-black/5 dark:hover:bg-white/5"
              )}
            >
              Web Packages
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={cn(
                "px-6 md:px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300",
                activeTab === 'social' 
                  ? "bg-[var(--foreground)] text-[var(--background)] shadow-xl" 
                  : "text-[var(--foreground)] hover:bg-black/5 dark:hover:bg-white/5"
              )}
            >
              Social Media
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 min-h-[800px] md:min-h-0">
          <AnimatePresence mode="wait">
            {plans.map((plan, i) => (
              <motion.div
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={cn(
                  "border border-[var(--border)] p-8 md:p-12 flex flex-col relative overflow-hidden group",
                  plan.highlight ? "bg-[var(--foreground)] text-[var(--background)] transform lg:-translate-y-4 shadow-2xl" : "bg-[var(--background)]"
                )}
              >
                {/* Highlight subtle aura */}
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--background)] to-transparent opacity-30"></div>
                )}

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight">{plan.name}</h3>
                    <div className={cn(
                      "text-[10px] font-bold tracking-widest uppercase px-3 py-1 border",
                      plan.highlight ? "border-[var(--background)] text-[var(--background)]" : "border-[var(--border)] text-[var(--muted)]"
                    )}>
                      {plan.duration}
                    </div>
                  </div>

                  <div className="mb-6 flex flex-wrap items-baseline gap-1">
                    <span className={cn("text-sm font-mono tracking-widest", plan.highlight ? "text-[var(--background)]/70" : "text-[var(--muted)]")}>{plan.prefix}</span>
                    <span className="text-4xl lg:text-5xl font-black tracking-tighter">{plan.price}</span>
                    <span className={cn("text-[10px] font-mono uppercase tracking-widest ml-1", plan.highlight ? "text-[var(--background)]/70" : "text-[var(--muted)]")}>/{plan.suffix}</span>
                  </div>

                  <p className={cn("text-sm leading-relaxed min-h-[5rem]", plan.highlight ? "text-[var(--background)]/80" : "text-[var(--muted)]")}>
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start">
                      <Check size={16} className={cn("mt-0.5 mr-3 shrink-0", plan.highlight ? "text-[var(--background)]" : "text-[var(--foreground)]")} />
                      <span className={cn("text-sm font-medium", plan.highlight ? "text-[var(--background)]" : "text-[var(--foreground)]")}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    to={`/contact?pkg=${activeTab}-${plan.name.toLowerCase()}`}
                    className={cn(
                      "w-full flex items-center justify-center py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-4",
                      plan.highlight 
                        ? "bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--background)]/90" 
                        : "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
                    )}
                  >
                    <span className="mr-2">Get Started</span>
                    <ArrowRight size={14} className={cn("transition-transform", plan.highlight ? "text-[var(--foreground)]" : "text-[var(--background)]")} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FAQ Teaser / Footer Section for Pricing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center border-t border-[var(--border)] pt-20"
        >
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Need a Custom Team?</h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto mb-8 leading-relaxed">
            For enterprise scale architectures, embedded contractor partnerships, and high-complexity long-term builds. 
            We map custom strategies and dedicated resource allocations precisely to your requirements.
          </p>
          <Link to="/contact" className="pill-button-secondary inline-flex group">
            Contact Enterprise Sales <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
