import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone } from 'lucide-react';
import SEO from '@/src/components/SEO';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    businessType: '',
    services: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your request has been received.');
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Contact Us"
        description="Get in touch with Kurevi. We are ready to initiate your next big project. Reach out via email, or WhatsApp us."
        keywords="contact marketing agency Maldives, hire web developer Maldives, Kurevi contact number"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">Contact <br /> Us.</h1>
            <p className="text-sm text-[var(--muted)] mb-12 max-w-md leading-relaxed">
              Ready to take your brand to the next level? Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-2">Email Us</h4>
                <p className="text-lg font-medium">hello@kurevi.com</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-2">WhatsApp / Call</h4>
                <a href="https://wa.me/9607222966" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-[var(--muted)] transition-colors">
                  <Phone size={18} /> +960 7222966
                </a>
              </div>
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-2">Based In</h4>
                <p className="text-lg font-medium">Maldives</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-panel p-8 md:p-12 bg-[var(--border)]/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:outline-none focus:border-[var(--foreground)] transition-colors"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:outline-none focus:border-[var(--foreground)] transition-colors"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button type="submit" className="pill-button-primary w-full py-4 group">
                <span>Send Message</span>
                <div className="w-6 h-6 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <Send size={12} />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
