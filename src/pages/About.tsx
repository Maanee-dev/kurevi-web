import { motion } from 'motion/react';
import { Linkedin, Mail, Phone } from 'lucide-react';

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
    name: "Sarah Chen",
    role: "Executive Director Finance",
    description: "The analytical backbone of Kurevi. Sarah manages our global operations, ensuring sustainable growth and operational excellence across all our hubs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    email: "sarah@kurevi.com",
    phone: "+1234567893"
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
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
              WE ARE A SPECIALIZED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--muted)]">DIGITAL PRODUCTION UNIT.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-3xl"
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-[var(--foreground)]/90 mb-8">
                We operate at the intersection of <span className="font-serif italic font-normal">Advanced Technology</span> and creative expression, engineering bespoke digital architectures that redefine the boundaries of the social web.
              </p>
              
              <div className="h-px w-full bg-[var(--border)] my-12"></div>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Our Main Goal</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                At Kurevi, our primary objective is to strip away the unnecessary. We believe that the most powerful digital experiences are born from constraint and brutal honesty. We don't just build websites or apps; we architect digital ecosystems that are highly performant, visually striking, and completely uncompromising.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                We partner with brands that are willing to take risks. Brands that want to stand out in a sea of templates. Our goal is to elevate your digital presence from a mere utility to a memorable, high-impact brand asset that drives real business results.
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

        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-24 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center flex-shrink-0"
            >
              <div className="aspect-[4/5] w-full overflow-hidden border border-[var(--border)] mb-8 relative bg-[#111]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">{member.name}</h3>
                <span className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest mb-6 block pb-6 border-b border-[var(--border)]">
                  {member.role}
                </span>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {member.description}
                </p>
                
                {/* Contact Links */}
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[var(--border)]">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors" aria-label={`Email ${member.name}`}>
                    <Mail size={20} />
                  </a>
                  <a href={`tel:${member.phone}`} className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors" aria-label={`Call ${member.name}`}>
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
