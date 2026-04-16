import Hero from '@/src/components/home/Hero';
import Marquee from '@/src/components/home/Marquee';
import AboutPreview from '@/src/components/home/AboutPreview';
import ServicesGrid from '@/src/components/home/ServicesGrid';
import Booking from '@/src/components/Booking';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Marquee />
      <AboutPreview />
      <ServicesGrid />
      <Booking />
      
      {/* Final CTA / Contact Link */}
      <section className="py-24 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-8">Ready to start?</h2>
          <div className="flex justify-center">
            <button className="pill-button-primary px-12 py-4 text-lg group">
              <span>Let's collaborate</span>
              <div className="w-8 h-8 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
