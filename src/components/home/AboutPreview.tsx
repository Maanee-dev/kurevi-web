import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section className="py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] flex items-center">
              <span className="mr-2 text-[10px]">●</span> ABOUT
            </span>
          </div>
          
          <div className="md:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase text-[var(--foreground)]/90 mb-16"
            >
              KUREVI IS A SPECIALIZED DIGITAL PRODUCTION UNIT. WE OPERATE AT THE INTERSECTION OF <span className="font-serif italic normal-case font-normal tracking-normal text-[var(--foreground)]">Advanced Technology</span> AND CREATIVE EXPRESSION, ENGINEERING BESPOKE DIGITAL ARCHITECTURES THAT <span className="underline decoration-2 underline-offset-8">REDEFINE</span> THE BOUNDARIES OF THE SOCIAL WEB.
            </motion.h2>
            
            <div className="grid grid-cols-3 gap-10 mb-16 border-t border-[var(--border)] pt-12">
              {[
                { val: "100+", label: "deployments" },
                { val: "32", label: "nodes" },
                { val: "3", label: "hubs" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl md:text-5xl font-black mb-2 tracking-tighter">{stat.val}</div>
                  <div className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="pill-button-secondary group inline-flex items-center">
              Read Manifest
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
