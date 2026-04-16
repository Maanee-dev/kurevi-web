import { motion } from 'motion/react';

const cases = [
  {
    client: "Luminal AI",
    metric: "+240%",
    label: "Growth in Monthly Active Users",
    category: "SaaS Marketing",
  },
  {
    client: "Vortex Gear",
    metric: "$1.2M",
    label: "Revenue from Paid Search in 6 Months",
    category: "E-commerce",
  },
  {
    client: "Aether Labs",
    metric: "15ms",
    label: "Average Conversion Path Speed",
    category: "Web Performance",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-[var(--background)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Proven Results for High-Growth Teams</h3>
          </div>
          <button className="cursor-button-secondary">View All Work</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cursor-panel p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] px-2 py-1 border border-[var(--border)] rounded">
                  {item.category}
                </span>
                <h4 className="text-2xl font-bold mt-6">{item.client}</h4>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">{item.metric}</div>
                <p className="text-[var(--muted)] text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
