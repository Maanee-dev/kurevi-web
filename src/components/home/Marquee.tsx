import { motion } from 'motion/react';

export default function Marquee() {
  const keywords = [
    "DIGITAL MARKETING MALDIVES",
    "SEO OPTIMIZATION",
    "CUSTOM WEB DEVELOPMENT",
    "SOCIAL MEDIA STRATEGY",
    "BRAND IDENTITY",
    "CONVERSION OPTIMIZATION",
    "PAID ADVERTISING"
  ];

  return (
    <div className="w-full overflow-hidden border-y border-[var(--border)] bg-[var(--foreground)] text-[var(--background)] py-4 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate content for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {keywords.map((keyword, j) => (
              <div key={j} className="flex items-center">
                <span className="text-xl font-black uppercase tracking-widest mx-8">{keyword}</span>
                <span className="text-xl font-black opacity-30 mx-8">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
