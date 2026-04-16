import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Nexus transformed our brand from a generic startup to a premium market leader. Their attention to detail is unmatched.",
    author: "Sarah Chen",
    role: "CEO, Luminal AI",
  },
  {
    quote: "The most technical marketing agency I've ever worked with. They actually understand the product they are selling.",
    author: "Marcus Thorne",
    role: "CTO, Vortex Gear",
  },
  {
    quote: "Working with Nexus felt like adding a high-performance marketing department to our team overnight.",
    author: "Elena Rodriguez",
    role: "Head of Growth, Aether Labs",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cursor-panel p-8 bg-[var(--border)]/5"
            >
              <p className="text-lg italic mb-8 text-[var(--foreground)]">"{t.quote}"</p>
              <div>
                <div className="font-bold">{t.author}</div>
                <div className="text-sm text-[var(--muted)]">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
