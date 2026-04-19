import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Info, Loader2 } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import SEO from '@/src/components/SEO';
import { supabase } from '@/src/lib/supabase';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const pkgFromUrl = searchParams.get('pkg') || '';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    package: pkgFromUrl,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (pkgFromUrl) {
      setFormState((prev) => ({ ...prev, package: pkgFromUrl }));
    }
  }, [pkgFromUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([
          { 
            email: formState.email, 
            phone: formState.phone, 
            package: formState.package, 
            message: formState.message 
          }
        ]);

      if (error) throw error;
      
      setSubmitStatus('success');
      setFormState({ name: '', email: '', phone: '', package: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err: any) {
      console.error("Error submitting contact request", err.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--background)] relative z-20">
      <SEO 
        title="Contact Us"
        description="Get in touch with Kurevi. We are ready to initiate your next big project. Request a package, reach out via email, or WhatsApp us."
        keywords="contact marketing agency Maldives, hire web developer Maldives, Kurevi contact number, request package"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">Contact <br /> Us.</h1>
            <p className="text-sm text-[var(--muted)] mb-12 max-w-md leading-relaxed">
              Ready to take your brand to the next level? Select your desired package and fill out the details below. We'll get back to you within 24 hours.
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
            className="cursor-panel p-8 md:p-12 bg-[var(--border)]/5 border border-[var(--border)] min-h-[500px] flex flex-col justify-center"
          >
            {submitStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-8 py-12"
              >
                <div className="w-20 h-20 rounded-full border border-[var(--foreground)]/20 flex items-center justify-center relative">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center"
                  >
                    <Send size={24} className="ml-1" />
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Request Received.</h3>
                  <p className="text-[var(--muted)] text-sm max-w-[300px] mx-auto leading-relaxed">
                    Thank you for reaching out. A strategy director will review your request and get back to you at <span className="text-[var(--foreground)] font-medium">{formState.email}</span> within 24 hours.
                  </p>
                </div>
                
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-8 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-colors border-b border-transparent hover:border-[var(--foreground)] pb-1"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Select Package (Optional)</label>
                    <Link to="/pricing" className="text-[10px] font-bold uppercase tracking-widest text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity border-b border-[var(--foreground)]/20 hover:border-[var(--foreground)] pb-0.5">
                      Check Packages
                    </Link>
                  </div>
                  <select 
                    className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:outline-none focus:border-[var(--foreground)] transition-colors appearance-none cursor-pointer"
                    value={formState.package}
                    onChange={(e) => setFormState({...formState, package: e.target.value})}
                    disabled={isSubmitting}
                  >
                    <option value="" className="text-black">- I'm not sure yet / Custom -</option>
                    <optgroup label="Web Development" className="text-black font-bold">
                      <option value="web-feshun" className="text-black font-normal">Web: Feshun (Start)</option>
                      <option value="web-kurevi" className="text-black font-normal">Web: Kurevi (Business)</option>
                      <option value="web-kurimagu" className="text-black font-normal">Web: Kurimagu (Enterprise)</option>
                    </optgroup>
                    <optgroup label="Social Media" className="text-black font-bold">
                      <option value="social-feshun" className="text-black font-normal">Social: Feshun (Start)</option>
                      <option value="social-kurevi" className="text-black font-normal">Social: Kurevi (Business)</option>
                      <option value="social-kurimagu" className="text-black font-normal">Social: Kurimagu (Enterprise)</option>
                    </optgroup>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Email *</label>
                  <input 
                    type="email" 
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:outline-none focus:border-[var(--foreground)] transition-colors disabled:opacity-50"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:outline-none focus:border-[var(--foreground)] transition-colors disabled:opacity-50"
                    placeholder="+960 7XXXXXX"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">Note (Optional)</label>
                  <textarea 
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us a bit about your business or goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="text-xs font-mono tracking-widest text-red-500 uppercase">
                    An error occurred. Please try again.
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="pill-button-primary w-full py-4 group disabled:opacity-50 disabled:cursor-not-allowed">
                  <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                  <div className="w-6 h-6 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    {isSubmitting ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                  </div>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
