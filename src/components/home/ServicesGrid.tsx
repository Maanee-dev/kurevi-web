import { useRef } from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTheme } from '../../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    slug: "/services/social-media-marketing",
    title: "SOCIAL MEDIA",
    description: "Build a following that actually buys. We create platform-specific strategies that turn scrollers into customers across the Maldives.",
  },
  {
    id: "02",
    slug: "/services/paid-advertising",
    title: "PAID ADS",
    description: "Every Rufiyaa working harder. Maximize return with precision-targeted campaigns reaching local customers and international tourists.",
  },
  {
    id: "03",
    slug: "/services/branding",
    title: "BRANDING",
    description: "Stand out in a sea of sameness. Forge striking, unforgettable brand identities that resonate deeply with local and global communities.",
  },
  {
    id: "04",
    slug: "/services/content-creation",
    title: "CONTENT",
    description: "Content that sells, not just looks good. We produce high-fidelity media that actively drives reservations, purchases, and inquiries.",
  },
  {
    id: "05",
    slug: "/services/web-design",
    title: "WEB DESIGN",
    description: "Websites that work as hard as you do. Architect lightning-fast, highly-converting digital storefronts tailored to your customers.",
  },
  {
    id: "06",
    slug: "/services/seo",
    title: "SEO",
    description: "Be found when customers search. Dominate search rankings and capture high-intent organic traffic for long-term growth.",
  },
];

export default function ServicesGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  useGSAP(() => {
    // Header Animation
    gsap.fromTo(".gsap-header-elem", 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Grid Cards Stagger Animation
    gsap.fromTo(".gsap-service-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".brutalist-grid",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="gsap-header-elem text-[12vw] md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
            OUR <br className="hidden md:block" /> CAPABILITIES
          </h2>
          <div className="gsap-header-elem flex flex-col items-start md:items-end mt-8 md:mt-0">
            <p className="max-w-xs text-sm text-[var(--muted)] leading-relaxed mb-6 text-left md:text-right">
              See how our tailored solutions help your brand grow. We deliver high-quality custom work that brings real value from day one.
            </p>
            <a 
              href="/services" 
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold hover:text-[var(--primary)] transition-colors group"
            >
              View Full Capabilities Index 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="brutalist-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, i) => (
            <div
              key={i}
              className={cn(
                "gsap-service-card brutalist-cell p-10 min-h-[300px] flex flex-col group overflow-hidden relative cursor-pointer",
                "transition-colors duration-700"
              )}
              onClick={() => window.location.href = service.slug}
            >
              {/* Thermal Aura Background */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                <div 
                  className="absolute top-1/2 left-1/2 w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2 scale-90 group-hover:scale-100 opacity-90 transition-transform duration-1000 ease-out blur-3xl pointer-events-none"
                  style={{
                    background: theme === 'dark' 
                      ? "radial-gradient(ellipse 60% 80% at center, #000000 15%, #ff3b00 45%, #ff1ea0 65%, #100bdf 85%, transparent 100%)"
                      : "radial-gradient(ellipse 60% 80% at center, #ffffff 15%, #ffbdaa 45%, #ff8ae0 65%, #8abeff 85%, transparent 100%)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                  }}
                ></div>
              </div>

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight group-hover:tracking-widest transition-all duration-300 mt-2">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-8 flex items-center justify-between">
                   <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Learn More
                   </span>
                   <ArrowRight className="w-5 h-5 text-[var(--foreground)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
