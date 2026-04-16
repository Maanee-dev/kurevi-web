import { motion } from 'motion/react';

export default function Showcase() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cursor-panel bg-gradient-to-b from-[var(--border)]/10 to-transparent p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Data-Driven <br />
                Growth Engines.
              </h2>
              <p className="text-[var(--muted)] mb-8 leading-relaxed">
                We don't just run ads. We build integrated marketing systems that learn and adapt. 
                Our dashboard-first approach gives you total transparency into every metric that matters.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time performance tracking",
                  "AI-optimized ad spend",
                  "Predictive customer modeling",
                  "Automated reporting suites"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mock Dashboard UI */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-video cursor-panel bg-[var(--background)] p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6 border-b border-[var(--border)] pb-4">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Nexus Analytics v4.0</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 rounded-lg bg-[var(--border)]/5 border border-[var(--border)]/20 animate-pulse"></div>
                ))}
              </div>
              <div className="h-40 rounded-lg bg-[var(--border)]/5 border border-[var(--border)]/20 relative overflow-hidden">
                {/* Simple SVG Chart */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path 
                    d="M0,100 Q100,20 200,80 T400,40 T600,90 T800,20 T1000,60 L1000,160 L0,160 Z" 
                    fill="url(#gradient)" 
                    className="opacity-20"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
