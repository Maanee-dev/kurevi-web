import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';
import SEO from '@/src/components/SEO';

const serviceDetails = {
  "social-media-marketing": {
    title: "Social Media Marketing",
    description: "Build a Following That Actually Buys. We transform passive scrollers into active customers, cultivating digital communities that drive measurable revenue across the Maldives.",
    details: "Whether you're a café building a community of regulars in Malé, an online store shipping reef-safe sunscreen nationwide, or a luxury resort filling overwater villas—your social media needs to convert. We create platform-specific strategies that turn your digital presence into a measurable growth engine.\n\nWe go beyond vanity metrics like likes and follows. Our team dives deep into your business model to understand your target audience, designing content that resonates with Maldivians and international visitors alike. By leveraging data-driven insights and creative storytelling, we ensure your brand remains top-of-mind.",
    features: [
      { title: "Platform Strategy", text: "Different businesses, different channels. Instagram and TikTok for cafés showcasing latte art and ambiance. Facebook for reaching local Maldivian customers across all atolls. LinkedIn for B2B suppliers and corporate partnerships. Pinterest for e-commerce products with visual appeal. We match your business to the platforms where your customers actually spend time." },
      { title: "Content Calendars", text: "Strategic posting rhythms aligned with your business cycles: Ramadan promotions, holiday shipping deadlines, weekend brunch rushes, or tourism seasonality. Never miss a moment when your customers are ready to buy—whether they're Malé locals planning Friday lunch or European tourists booking six months out." },
      { title: "Community Management", text: "Reply to DMs about your café's halal options. Respond to comments asking if you ship to Thaa Atoll. Handle reviews on Google Business and Facebook with the cultural sensitivity and speed that Maldivian customers expect. We turn casual engagement into loyal relationships." },
      { title: "Influencer Outreach", text: "From Maldivian food bloggers reviewing your new café menu to travel influencers showcasing your resort's sustainability initiatives to micro-influencers demonstrating your e-commerce products—we connect you with voices your target audience already trusts." }
    ],
    faq: [
      { question: "Do you handle both Dhivehi and English content?", answer: "Yes, our team is fluent in crafting culturally relevant, engaging copy in both Dhivehi and English, ensuring your message lands perfectly with your exact target audience." },
      { question: "How often will you post on our accounts?", answer: "Posting frequency is determined by the selected package and strategy. Typically, we range from 3-5 high-quality, impactful posts a week rather than spamming feeds with low-value content." },
      { question: "Do we need to respond to comments and DMs ourselves?", answer: "We offer full community management as a service, including responding to standard inquiries, moderating comments, and escalating complex questions directly to your team." }
    ]
  },
  "paid-advertising": {
    title: "Paid Advertising",
    description: "Every Rufiyaa Working Harder. Maximize your return on ad spend with precision-targeted campaigns that reach local Maldivian customers and high-value international tourists perfectly timed.",
    details: "The Maldivian market is uniquely complex: a dispersed geography across 26 atolls, a dynamic mix of local customers and international tourists, and intense competition in hospitality and retail. Our paid campaigns are precision-engineered for your specific business model, ensuring no advertising budget is wasted.\n\nWe continuously monitor, test, and adapt our strategies. By analyzing conversion data and audience behavior, we allocate your budget to the highest-performing channels. From Google Search to Meta platforms, we position your offers directly in front of the people actively seeking your products and services.",
    features: [
      { title: "Search Ads", text: `Capture high-intent searches: "best coffee in Malé," "online gift delivery Maldives," "speedboat transfer booking," or "Maldives resort packages." We bid on the keywords that indicate buying intent, write copy that speaks to local and international audiences, and build landing pages that convert.` },
      { title: "Social Ads", text: `Meta advertising optimized for Maldivian realities: carousel ads for your café's new menu items, collection ads for your e-commerce product range, lead generation ads for B2B services. Targeted by location (Malé, Addu, specific atolls), demographics, and interests—ensuring your budget reaches actual potential customers.` },
      { title: "Retargeting", text: `The customer journey is rarely instant. We build retargeting sequences for: website visitors who didn't purchase, cart abandoners from your online store, Instagram engagers who haven't visited yet, past customers who haven't returned. Different messages, same goal—conversion.` },
      { title: "A/B Testing", text: `Continuous optimization of creative (product photography vs. lifestyle shots), copy (price-focused vs. quality-focused), and audience segments (Malé professionals vs. resort workers vs. international tourists). Every campaign teaches us how to improve your return on ad spend.` }
    ],
    faq: [
      { question: "What budget do you recommend for paid ads?", answer: "Budgets vary wildly based on your industry and competition. We generally recommend starting with at least $300-$500/month dedicated strictly to ad spend (separate from management fees) to generate statistically significant results." },
      { question: "How do you track if the ads are actually working?", answer: "We install tracking pixels (like the Meta Pixel) and set up Google Analytics conversions before spending a single Rufiyaa. You will receive transparent, metric-driven reports showing exact return on ad spend." }
    ]
  },
  "branding": {
    title: "Branding",
    description: "Stand Out in a Sea of Sameness. We forge striking, unforgettable brand identities that resonate deeply with local communities while competing flawlessly on the global stage.",
    details: "From a bustling café on Chaandhanee Magu to an e-commerce brand shipping nationwide, or a luxury resort on a private island—every Maldivian business needs a potent, distinct identity. We build brands that not only attract attention but stand the test of time.\n\nOur branding process strips away the generic fluff to discover your core narrative. We develop comprehensive visual identities, cohesive brand voices, and strict design systems that ensure your company looks, sounds, and feels premium across every physical and digital touchpoint.",
    features: [
      { title: "Logo Design", text: `Marks that work everywhere your business appears: Instagram profile pictures, coffee cup sleeves, delivery vehicle decals, product packaging, and international trade show banners. Scalable, memorable, and meaningful—whether you're serving dhoni captains or honeymooners.` },
      { title: "Visual Identity", text: `Color palettes inspired by Maldivian context: the turquoise of resort lagoons, the vibrant hues of local market produce, the sophisticated neutrals of urban Malé cafés. Typography that balances Dhivehi script compatibility with international aesthetics. Photography direction that captures your specific reality.` },
      { title: "Brand Voice", text: `How does your café speak to morning regulars? How does your e-commerce brand describe products to customers who've never touched them? How does your resort welcome guests from Tokyo, London, and Malé in the same week? We define tone, vocabulary, and messaging that adapts across contexts while remaining unmistakably you.` },
      { title: "Style Guides", text: `Comprehensive brand documentation for consistency across touchpoints: social media templates, email newsletters, packaging design, staff uniforms, signage, and delivery app profiles. Your brand stays coherent whether a customer encounters you on Instagram, in person, or unboxing a delivery.` }
    ],
    faq: [
      { question: "What deliverables do we actually receive?", answer: "At project completion, you receive a comprehensive Brand Guidelines document, all original vector files (.Ai/.SVG), logo variations, typography files, and a toolkit of color codes ready for print and digital use." },
      { question: "Do you also do the physical printing for packaging or signs?", answer: "While we manage all the creative design and prepare print-ready files, we partner with trusted local printing houses perfectly suited for local logistics to handle the physical production." }
    ]
  },
  "content-creation": {
    title: "Content Creation",
    description: "Content That Sells, Not Just Looks Good. Beautiful aesthetics are expected; we produce high-fidelity media that actively drives reservations, purchases, and inquiries.",
    details: "Beautiful visuals are expected in the Maldives. However, we create content designed specifically to drive action: café reservations, online purchases, booking inquiries, and long-term brand loyalty. We provide premium production tailored precisely to your operational reality.\n\nOur in-house creatives know how to translate a brand's essence into compelling narratives. Whether it is a cinematic drone shot of your property, mouth-watering menu photography, or persuasive product copywriting, every piece of media we generate serves a specific psychological purpose in the buyer's journey.",
    features: [
      { title: "Video Production", text: `Cinematic resort films and drone footage, yes—but also: quick-turn TikToks showing your café's barista at work, product demonstration videos for your e-commerce site, customer testimonial captures, and Reels showcasing your restaurant's busiest (and most tempting) service moments.` },
      { title: "Photography", text: `Menu photography that increases average order value. Product shots with consistent lighting for your online store. Lifestyle imagery showing real Maldivian customers using your products. Architectural photography for your space. Every image optimized for its platform and purpose.` },
      { title: "Copywriting", text: `Website copy that ranks in search and converts visitors. Product descriptions that reduce return rates. Social captions that drive engagement. Email sequences that recover abandoned carts and encourage repeat purchases. Menu descriptions that justify premium pricing. Every word working for your business goals.` },
      { title: "Motion Graphics", text: `Animated logos for video intros. Infographic explainers for your delivery process or sustainability practices. Dynamic social ads. Presentation templates for investor pitches or B2B partnerships. Motion that catches attention in crowded feeds.` }
    ],
    faq: [
      { question: "Do you offer drone and aerial videography?", answer: "Yes. Our team includes experienced, registered drone operators capable of capturing breathtaking aerial perspectives vital for resorts, guesthouses, and architectural projects." },
      { question: "Do we own the master files and raw footage?", answer: "Unless negotiated otherwise, you own full commercial rights to the finished, edited deliverables. Raw project files and unedited footage can be handed over upon request subject to specific licensing agreements." }
    ]
  },
  "web-design": {
    title: "Web Design",
    description: "Websites That Work as Hard as You Do. We architect lightning-fast, highly-converting digital storefronts tailored specifically to your customers' habits.",
    details: "Your website is your 24/7 salesperson: taking café reservations while you sleep, processing e-commerce orders across time zones, or converting resort inquiries into confirmed bookings. We build digital experiences optimized entirely for your specific business model and revenue goals.\n\nWe combine striking minimalist aesthetics with rigorous performance standards. Our sites are engineered for flawless mobile responsiveness on varying network speeds, robust e-commerce capabilities bridging local and international gateways, and seamless user experiences ensuring zero friction between your visitor and their transaction.",
    features: [
      { title: "UI/UX Design", text: `User flows designed around actual customer behavior: quick menu browsing and reservation for cafés. Filtered product discovery and streamlined checkout for e-commerce. Inspiration-heavy browsing to detailed comparison to booking for hospitality. Every click mapped, every friction point eliminated.` },
      { title: "Responsive Web", text: `Flawless performance on the devices Maldivian customers actually use: smartphones on 4G connections, tablets in cafés, desktops in offices. Fast loading despite infrastructure challenges. Touch-friendly interfaces for on-the-go browsing. Your site works perfectly whether accessed from Hulhumalé or Hamburg.` },
      { title: "E-commerce", text: `Online stores built for Maldivian realities: inventory management across multiple locations, payment integration handling local cards and international options, shipping rate calculation across atolls, and abandoned cart recovery. Whether you're selling to Malé or Miami, the experience is seamless.` },
      { title: "Performance Optimization", text: `Speed that satisfies impatient customers and search algorithms. Image optimization for visual products without crushing load times. Reliable hosting that stays up during sales peaks. Technical foundations that support your marketing investments.` }
    ],
    faq: [
      { question: "Can you integrate the BML (Bank of Maldives) payment gateway?", answer: "Absolutely. We have extensive experience integrating BML, Maldives Islamic Bank (MIB), and international gateways like Stripe directly into custom e-commerce flows and booking engines." },
      { question: "Will I be able to update the website myself?", answer: "Yes. We build primarily on headless CMS (Content Management System) architectures or customized robust platforms, providing your team with an easy, intuitive dashboard to change text, add products, or update images without needing code." },
      { question: "Do you provide hosting and maintenance?", answer: "Yes, we offer monthly retainers for high-performance cloud hosting, daily backups, security patching, and priority support to ensure your digital storefront never goes down." }
    ]
  },
  "seo": {
    title: "SEO",
    description: "Be Found When Customers Are Searching. Dominate search rankings and capture high-intent traffic with sustainable organic visibility.",
    details: "When someone searches 'best breakfast Malé,' 'buy skincare online Maldives,' or 'luxury resort booking'—you need to appear first. Our deep-rooted SEO strategies build sustainable organic visibility that secures long-term digital real estate for your brand, reducing dependency on competitive paid ads over time.\n\nWe tackle SEO from every angle: technical site architecture, localized keyword mapping, high-quality content production, and authoritative backlinking. By aligning your website perfectly with how your distinct audience searches locally or globally, we turn search engines into your most reliable source of inbound leads.",
    features: [
      { title: "Technical SEO", text: `Site architecture that search engines understand and users navigate easily. Schema markup for local businesses (opening hours, location, reviews) and e-commerce (products, prices, availability). Fast loading despite image-heavy content. Mobile-first optimization for Maldivian browsing habits.` },
      { title: "Keyword Research", text: `Analysis of how your customers actually search: local terms ("near me," "in Malé"), product-specific queries, comparison searches ("vs" keywords), and intent-based terms (informational, commercial, transactional). We identify where you can compete and win.` },
      { title: "On-page Optimization", text: `Title tags and meta descriptions that earn clicks from search results. Content structured for featured snippets. Internal linking that distributes authority. Product page optimization that ranks and converts. Blog content that captures research-phase customers and nurtures them toward purchase.` },
      { title: "Backlink Strategy", text: `Local citations in Maldivian business directories. Features in travel and lifestyle publications for hospitality businesses. Product reviews and unboxing content for e-commerce brands. Supplier and partner link exchanges. Building the authority signals that push you up the rankings.` }
    ],
    faq: [
      { question: "How long does it take to see results on Google?", answer: "SEO is a long-term strategy. While technical fixes can yield quick bumps, meaningful ranking improvements for competitive keywords (like 'resort Maldives') typically take 3 to 6 months of sustained effort." },
      { question: "Do you guarantee a page 1 ranking?", answer: "No ethical agency can guarantee a #1 spot due to Google's constantly changing algorithmic nature. However, we guarantee that our structural and content strategies are strictly white-hat and designed for maximum sustainable visibility." }
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Basic validation to check if standard service exists
  const service = slug && serviceDetails[slug as keyof typeof serviceDetails] 
    ? serviceDetails[slug as keyof typeof serviceDetails] 
    : {
        title: slug?.replace('-', ' ').toUpperCase() || "SERVICE",
        description: "Specialized digital service offering customized for our clients.",
        details: "This service provides advanced digital tooling and solutions tailored to brand-specific requirements. Our process guarantees high fidelity, scalable outputs that match your vision.",
        features: [
          { title: "Strategic Planning", text: "Discovery phase targeting business objectives." },
          { title: "Custom Execution", text: "High quality deliverables built to scale." }
        ],
        faq: [
          { question: "What is the typical timeline for this service?", answer: "Timelines are customized based on the scale and complexity of the project. We provide a detailed roadmap during our initial discovery call." },
          { question: "How is pricing structured?", answer: "Pricing varies by project scope. We offer transparent, milestone-based quotes after thoroughly understanding your specific requirements." }
        ]
      } as any;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
          className="max-w-none"
        >
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[var(--foreground)] mb-12 max-w-4xl">
            {service.description}
          </p>

          <div className="mt-20">
            <div className="mb-20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-6">Overview</h3>
              <p className="text-[var(--foreground)]/80 leading-relaxed font-medium text-xl max-w-4xl whitespace-pre-wrap">
                {service.details}
              </p>
            </div>
            
            <div className="border-t border-[var(--border)] pt-16">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">What We Deliver</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {service.features.map((feature: any, idx: number) => (
                  <div key={idx} className="bg-[var(--border)]/5 p-8 border border-[var(--border)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-500 group">
                    <div className="flex items-center text-lg uppercase tracking-tight font-bold mb-4">
                       <span className="w-1.5 h-1.5 bg-[var(--border)] group-hover:bg-[var(--background)] transition-colors duration-500 mr-3"></span>
                       {feature.title}
                    </div>
                    <p className="text-[var(--foreground)]/70 group-hover:text-[var(--background)]/80 transition-colors duration-500 leading-relaxed text-sm">
                       {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            {service.faq && service.faq.length > 0 && (
              <div className="border-t border-[var(--border)] pt-16 mt-16">
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">Frequently Asked</h3>
                <div className="max-w-4xl">
                  {service.faq.map((item: any, idx: number) => (
                    <div key={idx} className="border-b border-[var(--border)]">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full text-left py-6 flex items-center justify-between focus:outline-none group"
                      >
                        <span className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-[var(--muted)] transition-colors pr-8">
                          {item.question}
                        </span>
                        <div className="shrink-0 text-[var(--foreground)] transition-transform duration-300">
                          {openFaqIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="pb-8 text-[var(--foreground)]/70 text-lg font-medium leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </div>
  );
}
