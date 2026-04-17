import { motion } from 'motion/react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import SEO from '@/src/components/SEO';
import { useTheme } from '../contexts/ThemeContext';

const team = [
  {
  "name": "Maanee Ali",
  "role": "Founder & CEO",
  "description": "Building ideas into real businesses across travel, marketing, and tech — with a focus on simplicity, speed, and impact. Maanee leads Kurevi and multiple ventures shaping the Maldives’ digital future.",
  "image": "https://media.licdn.com/dms/image/v2/D5603AQF9gtFajlniMw/profile-displayphoto-crop_800_800/B56Z1qQv62KAAI-/0/1775604273773?e=1778112000&v=beta&t=wI7R29Hw3rtvj_sv2mIwv2hAaL6qiMbhlXKrMAAL-vA",
  "linkedin": "https://www.linkedin.com/in/hussain-maanee-ali-1057a2382/",
  "email": "maanee@kurevi.com",
  "phone": "+9607259060"
},
{
  "name": "Ahmed Shaihaan Shiyam",
  "role": "Chief Sales Officer",
  "description": "Driving revenue and building strong client relationships with a sharp focus on results. Shaihaan leads sales with a practical, people-first approach, turning opportunities into consistent growth.",
  "image": "https://media.licdn.com/dms/image/v2/D5603AQG1cy7O0mA5ZA/profile-displayphoto-crop_800_800/B56Zs6B9nHHAAI-/0/1766205153030?e=1778112000&v=beta&t=RD3im3RTopS4SLBmNIfhjKp0m13VLBrAZK97TxhdLmY",
  "linkedin": "https://www.linkedin.com/in/ahmed-shaihaan-shiyam-70a490356/",
  "email": "shaihaan@kurevi.com",
  "phone": "+9607466222"
},
{
  "name": "Ismail Adham",
  "role": "Creative Director",
  "description": "Shaping visual direction and brand identity through clean, intentional design. Adham focuses on turning ideas into compelling creative experiences that connect, stand out, and leave a lasting impression.",
  "image": "https://media.licdn.com/dms/image/v2/D5603AQGv2fR67kW7tA/profile-displayphoto-crop_800_800/B56Z1pHzM8KEBQ-/0/1775585147527?e=1778112000&v=beta&t=2PlXgmXknCv1RdKqWxpprs9XOmvNjKPpDir_2mcRccc",
  "linkedin": "https://www.linkedin.com/in/ismail-adham-5b84b6135",
  "email": "adham@kurevi.com",
  "phone": ""
},
{
  "name": "Farih Faiz",
  "role": "Executive Director - Finance",
  "description": "Leads financial strategy, planning, and operational oversight to ensure sustainable growth and profitability. Farih focuses on budgeting, forecasting, and optimizing financial performance, supporting data-driven decisions across the organization.",
  "image": "https://media.licdn.com/dms/image/v2/C5603AQFxSa384Ut1bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1608218735571?e=1778112000&v=beta&t=y0yzmN2-55wulMSrK5QigASa_8o9vKDme4tlXV6pwqU",
  "linkedin": "https://www.linkedin.com/in/farih-faiz-667a11193/",
  "email": "farih@kurevi.com",
  "phone": ""
}
];

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <SEO 
        title="About Us"
        description="Learn about Kurevi, the top digital production unit in the Maldives. Meet our team of experts in web development, design, and digital marketing."
      />
      {/* Header & Goals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] flex items-center">
              <span className="mr-2 text-[10px]">●</span> ABOUT KUREVI
            </span>
          </div>
          
          <div className="md:col-span-9">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-none uppercase tracking-tighter mb-12"
            >
              WE BUILD POWERFUL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--muted)]">DIGITAL PRODUCTS.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-3xl"
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-[var(--foreground)]/90 mb-8">
                We mix modern <span className="font-serif italic font-normal">Technology</span> with bold creative design to build websites and apps that actually stand out and get results.
              </p>
              
              <div className="h-px w-full bg-[var(--border)] my-12"></div>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Our Main Goal</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                At Kurevi, we keep things simple and direct. We remove the clutter to create websites that are fast, easy to use, and beautiful. We don't just write code—we build connected digital systems that work perfectly and look amazing.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                We work with ambitious brands that want to stand out from boring templates. Our goal is to turn your digital presence into a powerful tool that brings real value and growth to your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] pt-32">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            MEET OUR <br /> TEAM
          </motion.h2>
        </div>

        {/* Editorial Brutalism Team Layout */}
        <div className="flex flex-col gap-32 md:gap-40 pt-10">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                {/* Main Image */}
                <div className={`aspect-[4/5] overflow-hidden ${theme === 'dark' ? 'grayscale group-hover:grayscale-0' : ''} transition-all duration-700 relative z-10 border border-[var(--border)] bg-[var(--background)]`}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {theme === 'dark' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
                  )}
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-20 mt-8 lg:mt-0">
                <div className="mb-6 lg:mb-8 flex items-center gap-4">
                  <span className="w-12 lg:w-16 h-px bg-[var(--foreground)]"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)]">{member.role}</span>
                </div>
                
                <h3 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 lg:mb-12">
                  {member.name.trim().split(' ').map((n, idx) => (
                    <span 
                      key={idx} 
                      className="block group-hover:translate-x-4 transition-transform duration-500 ease-out" 
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      {n}
                    </span>
                  ))}
                </h3>
                
                <p className="text-[var(--foreground)]/70 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-xl mb-12 lg:mb-16">
                  {member.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[var(--border)] pt-8">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group/link uppercase text-[10px] sm:text-xs font-mono tracking-widest">
                      <span className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center group-hover/link:bg-[var(--foreground)] group-hover/link:text-[var(--background)] transition-colors">
                        <Linkedin size={16} />
                      </span>
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group/link uppercase text-[10px] sm:text-xs font-mono tracking-widest">
                      <span className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center group-hover/link:bg-[var(--foreground)] group-hover/link:text-[var(--background)] transition-colors">
                        <Mail size={16} />
                      </span>
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  )}
                  {member.phone && (
                    <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group/link uppercase text-[10px] sm:text-xs font-mono tracking-widest">
                      <span className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center group-hover/link:bg-[var(--foreground)] group-hover/link:text-[var(--background)] transition-colors">
                        <Phone size={16} />
                      </span>
                      <span className="hidden sm:inline">Call</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
