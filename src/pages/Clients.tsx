import { motion } from 'motion/react';

const clients = [
  "Luminal AI", "Vortex Gear", "Aether Labs", "Zenith Store", 
  "Nexus Systems", "Quantum Flow", "Nova Dynamics", "Echo Media"
];

export default function Clients() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16">Our <br /> Clients.</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[var(--background)] h-40 flex items-center justify-center p-8 text-center"
            >
              <span className="text-xl font-bold uppercase tracking-tighter opacity-50 hover:opacity-100 transition-opacity cursor-default">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
