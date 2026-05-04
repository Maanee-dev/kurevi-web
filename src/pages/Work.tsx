import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '@/src/components/SEO';
import { useTheme } from '../contexts/ThemeContext';

export default function Work() {
  const { theme } = useTheme();

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Our Work"
        description="View our selected projects and recent work. See how Kurevi delivers exceptional digital products and marketing campaigns."
        keywords="Kurevi portfolios, web development portfolio, marketing campaigns Maldives, digital products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16">Selected <br /> Projects.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { 
              title: "Maldives Serenity Travels", 
              category: "Travel & Tours Platform",
              image: "https://instagram.fmle2-2.fna.fbcdn.net/v/t51.82787-15/682393929_18089734655350105_3026831094901788585_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzg4ODA5Mjg0OTU5NzcwNzg5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE2MDh4MTI4Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=qW30pKfd8D0Q7kNvwH48niT&_nc_oc=Adrgv4Ae5FXPKUcb_IOPGnRowSFZ80Xa7WjtPiJ9pRB8MobYe6VuQi6woqS6J2zjn0k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmle2-2.fna&_nc_gid=kJPzNv2pt-Yy4wRrvbGUhg&_nc_ss=7a22e&oh=00_Af7GpkOPrZpYDJCYeJA3Gl4ahzn2DU_lotnlCF4y87-v2Q&oe=69FE77E0" 
            },
            { 
              title: "Fruteria", 
              category: "F&B Branding & Social",
              image: "https://instagram.fmle2-2.fna.fbcdn.net/v/t51.82787-15/684029150_18089731280350105_4962664463724736508_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzg4ODA3MTgyNDc1OTY4NjcyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIwNDh4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=6rOaaAsamDgQ7kNvwFfioob&_nc_oc=AdrJ4KlKvChnHzdbDgzuNpLDY9Xcqu-Np4-Oh0PJcvMPQSa2e2FEPFlCQhObRdi470U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmle2-2.fna&_nc_gid=cyV4vjPEQpnSMoXZipHk8g&_nc_ss=7a22e&oh=00_Af6L-px_7OvsJ2p0QRbgl0k4oJTsZRmsp8t27tSv__6sXg&oe=69FE8337" 
            },
            { 
              title: "Meritt", 
              category: "Corporate Identity & Web",
              image: "https://instagram.fmle2-2.fna.fbcdn.net/v/t51.82787-15/670852153_18089362337350105_3182831352540674318_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzg4NTQ4NzAwNzc2MjQ3NDc3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNzJ4MTcxOC5zZHIuQzMifQ%3D%3D&_nc_ohc=QPfWLPTPmQoQ7kNvwHnf-m7&_nc_oc=AdrDTFzHbb5djaHKDEOfKGkkvo24pkH9KNQ2v_-nWB9eZDTQb7j6qQ3ccCTzlx7g14s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmle2-2.fna&_nc_gid=5lsyZ2MnOdBmnUEhUF0QOg&_nc_ss=7a22e&oh=00_Af7ngTiaIrtROFkApg7XT7sRYvEOHmj6E3jIbEtr7TmF_Q&oe=69FE69E2" 
            },
            { 
              title: "Our Custom Designs", 
              category: "Premium UI/UX Portfolio",
              image: "https://instagram.fmle2-2.fna.fbcdn.net/v/t51.82787-15/689177067_18089846111350105_6548842047605544125_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg4ODg2MDQ4MTY5NTM2MzQzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE2MDJ4MTU3Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=hgzzP-lyhekQ7kNvwF3zcnY&_nc_oc=Ado73gnICKVrcpajt_iyIwCYLhiaXBlquHtN5G5I5d9-w48labo-6zap1TOyEkFf0oA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmle2-2.fna&_nc_gid=mZnebIr7QbILMNKo3bR5tg&_nc_ss=7a22e&oh=00_Af4VnsyzTsw0qid6FamL_Dy8KFdGWBhxlRZqX1ATI70Mbg&oe=69FE818A" 
            },
          ].map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer block relative z-10"
            >
              <div className="cosmic-card aspect-[16/10] mb-6 overflow-hidden p-0 rounded-none border-none bg-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover ${theme === 'dark' ? 'grayscale group-hover:grayscale-0' : ''} group-hover:scale-105 transition-transform duration-1000 ease-out`}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-2 group-hover:text-white/60 transition-colors">{project.category}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight gradient-text group-hover:tracking-widest transition-all duration-500">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl border border-[var(--border)] flex items-center justify-center group-hover:border-white/40 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
                  <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
