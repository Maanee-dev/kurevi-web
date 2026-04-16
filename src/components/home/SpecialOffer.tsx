import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background Image Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img 
          src="https://picsum.photos/seed/offer/800/1200" 
          alt="Offer" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.85] uppercase mb-12 max-w-4xl mx-auto">
            Special Offer <br />
            For <br />
            New Clients
          </h2>
          
          <div className="max-w-md mx-auto">
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-8">
              We're excited to offer a special discount on our comprehensive e-commerce 
              website packages. Elevate your online store with our expert solutions tailored to 
              your needs, and let's embark on a journey of digital success together.
            </p>
            
            <div className="flex justify-center">
              <button className="pill-button-primary group">
                <span>I want</span>
                <div className="w-6 h-6 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
