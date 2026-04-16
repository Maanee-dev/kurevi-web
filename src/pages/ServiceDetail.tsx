import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import SEO from '@/src/components/SEO';

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    description: "We build custom websites that are fast, secure, and easy to manage. We focus on writing clean code so your site works perfectly for all your visitors.",
    details: "Your website is your digital storefront. We meticulously craft web experiences that are not only visually striking but architected for peak performance. From simple landing pages to complex web applications, our engineering standards ensure load times are minimal, SEO is optimized, and backend systems are scalable.",
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "Performance Optimization",
      "Responsive & Mobile-First Design",
      "Technical SEO Implementation",
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "We help you reach the right people online. From social media to search engines, our campaigns are designed to get you real customers and clear results.",
    details: "Visibility is nothing without conversion. Our digital marketing strategies bypass vanity metrics and focus entirely on return on investment. We analyze audience behaviors to deploy targeted, data-backed campaigns across search engines and social platforms, adapting in real time to what actually moves the needle.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Ad Campaigns",
      "Social Media Strategy",
      "Conversion Rate Optimization",
      "Growth Analytics & Reporting",
    ]
  },
  "creative-design": {
    title: "Creative Design",
    description: "We make your brand look amazing. We design logos, graphics, and websites that catch the eye and clearly speak to your target audience.",
    details: "In a noisy digital world, strict and purposeful aesthetic direction is your biggest advantage. We develop brand identities and user interfaces rooted in brutalist and minimalist principles—stripping away fluff to communicate your core message with absolute clarity and unforgettable visual impact.",
    features: [
      "Visual Brand Identity",
      "UI/UX Design Systems",
      "Creative Direction",
      "Motion Graphics & Animation",
      "Marketing Collateral",
    ]
  },
  "e-commerce": {
    title: "E-Commerce Solutions",
    description: "Start selling online the easy way. We create digital stores that look great and make the buying process fast and secure for your customers.",
    details: "The bridge between a browser and a buyer is frictionless design. We architect e-commerce platforms that prioritize speed, security, and intuitive navigation. By integrating robust payment gateways and creating seamless checkout experiences, we turn your store into a high-converting digital retail environment.",
    features: [
      "Custom Storefront Development",
      "Shopify & WooCommerce Integration",
      "Secure Payment Solutions",
      "Inventory Management Systems",
      "Frictionless Checkout Flows",
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  
  // Basic validation to check if standard service exists
  const service = slug && serviceDetails[slug as keyof typeof serviceDetails] 
    ? serviceDetails[slug as keyof typeof serviceDetails] 
    : {
        title: slug?.replace('-', ' ').toUpperCase() || "SERVICE",
        description: "Specialized digital service offering customized for our clients.",
        details: "This service provides advanced digital tooling and solutions tailored to brand-specific requirements. Our process guarantees high fidelity, scalable outputs that match your vision.",
        features: ["Strategic Planning", "Custom Execution", "Quality Assurance", "Ongoing Support"]
      };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--background)]">
      <SEO 
        title={`${service.title} Services`}
        description={service.description}
        keywords={`${service.title.toLowerCase()} service Maldives, Kurevi ${service.title.toLowerCase()}, digital marketing Maldives, bespoke tech architecture`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/services" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-20 group">
          <ArrowLeft size={14} className="mr-3 group-hover:-translate-x-1 transition-transform" />
          Back to all services
        </Link>
        
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] flex items-center">
            <span className="mr-2 text-[10px]">●</span> /SERVICES/{slug}
          </span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-12"
        >
          {service.title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="h-px w-full bg-[var(--border)] mb-12"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[var(--foreground)] mb-12">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="md:col-span-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-6">Overview</h3>
              <p className="text-[var(--foreground)]/80 leading-relaxed font-medium">
                {service.details}
              </p>
            </div>
            
            <div className="md:col-span-1 bg-[var(--border)]/10 p-8 border border-[var(--border)]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-8">Capabilities</h3>
              <ul className="space-y-4 m-0 p-0 list-none">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm uppercase tracking-wider font-medium">
                    <span className="text-[var(--muted)] mr-3 mt-1">●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
