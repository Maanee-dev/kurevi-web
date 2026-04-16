import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const plans = [
  {
    name: "SPRINT",
    price: "3,500",
    prefix: "$",
    suffix: "flat",
    duration: "1-2 Weeks",
    description: "Perfect for fast validation. We design and build a high-converting landing page or simple MVP to get your startup off the ground.",
    features: [
      "Landing Page Design",
      "Responsive Web Development",
      "Basic SEO Setup",
      "Contact Forms & Integrations",
      "1 Revision Round"
    ],
    highlight: false,
  },
  {
    name: "FULL BUILD",
    price: "8,500",
    prefix: "from $",
    suffix: "per project",
    duration: "4-8 Weeks",
    description: "End-to-end digital product design. Full scale websites, applications, and e-commerce platforms tailored to your exact needs.",
    features: [
      "Complete UI/UX Design System",
      "Full Stack Development",
      "Headless CMS Integration",
      "Advanced Web Animations",
      "3 Revision Rounds",
      "Priority Launch Support"
    ],
    highlight: true,
  },
  {
    name: "RETAINER",
    price: "4,000",
    prefix: "$",
    suffix: "per month",
    duration: "Ongoing",
    description: "Continuous design and development support. Think of us as your own dedicated internal product team on standby.",
    features: [
      "Unlimited Design Requests",
      "Continuous Dev Implementations",
      "Weekly Strategy Calls",
      "Priority Turnaround Times",
      "Pause or Cancel Anytime",
      "Dedicated Project Manager"
    ],
    highlight: false,
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-32 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              className={cn(
                "border border-[var(--border)] p-8 md:p-12 flex flex-col relative overflow-hidden group",
                plan.highlight ? "bg-[var(--foreground)] text-[var(--background)] transform lg:-translate-y-4 shadow-2xl" : "bg-[var(--background)]"
              )}
            >
              {/* Highlight subtle aura */}
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 h-1bg-gradient-to-r from-transparent via-[var(--background)] to-transparent opacity-30"></div>
              )}

              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold uppercase tracking-tight">{plan.name}</h3>
                  <div className={cn(
                    "text-[10px] font-mono tracking-widest uppercase px-3 py-1 border",
                    plan.highlight ? "border-[var(--background)] text-[var(--background)]" : "border-[var(--border)] text-[var(--muted)]"
                  )}>
                    {plan.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <span className={cn("text-sm font-mono tracking-widest", plan.highlight ? "text-[var(--background)]/70" : "text-[var(--muted)]")}>{plan.prefix}</span>
                  <span className="text-5xl md:text-6xl font-black tracking-tighter mx-1">{plan.price}</span>
                  <span className={cn("text-xs font-mono uppercase tracking-widest", plan.highlight ? "text-[var(--background)]/70" : "text-[var(--muted)]")}>{plan.suffix}</span>
                </div>

                <p className={cn("text-sm leading-relaxed min-h-[4rem]", plan.highlight ? "text-[var(--background)]/80" : "text-[var(--muted)]")}>
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
                  to="/contact" 
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
