import { motion } from 'motion/react';

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden border-y border-[var(--border)] bg-[var(--foreground)] text-[var(--background)] py-4 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate content for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-xl font-black uppercase tracking-widest mx-8">DIGITAL PRODUCTION UNIT</span>
            <span className="text-xl font-black mx-8">✦</span>
            <span className="text-xl font-black uppercase tracking-widest mx-8">KUREVI</span>
            <span className="text-xl font-black mx-8">✦</span>
            <span className="text-xl font-black uppercase tracking-widest mx-8">BESPOKE ARCHITECTURE</span>
            <span className="text-xl font-black mx-8">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
