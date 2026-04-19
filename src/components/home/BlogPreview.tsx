import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/src/data/blogPosts';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../lib/utils';

export default function BlogPreview() {
  // Taking just the latest 2 posts for the homepage preview
  const recentPosts = blogPosts.slice(0, 2);
  const { theme } = useTheme();

  return (
    <section className="py-32 bg-[var(--background)] border-t border-[var(--border)] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-[var(--muted)] mb-4 block">Insights</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              LATEST <br /> UPDATES.
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="mt-8 md:mt-0 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold hover:text-[var(--primary)] transition-colors group"
          >
            Explore All Insights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="brutalist-grid flex overflow-x-auto md:grid md:grid-cols-2 gap-0 border-t border-b border-l border-r sm:border-r-0 md:border-b-0 border-[var(--border)] snap-x snap-mandatory md:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {recentPosts.map((post, index) => (
            <Link 
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block flex-none w-[85vw] md:w-auto snap-center md:snap-align-none border-r border-[var(--border)]"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="brutalist-cell h-full flex flex-col hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-500 overflow-hidden relative"
              >
                {/* Image layout above the text */}
                {post.image && (
                  <div className="w-full aspect-[16/9] border-b border-[var(--border)] overflow-hidden shrink-0 group-hover:border-[var(--background)]/20 transition-colors">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className={cn(
                        "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                        theme === 'dark' ? "grayscale group-hover:grayscale-0" : ""
                      )} 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col h-full p-8 md:p-10 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest border border-current px-3 py-1 text-[var(--muted)] group-hover:text-inherit">
                      {post.category}
                    </span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] group-hover:text-[var(--background)]/80 line-clamp-2 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {post.content.replace(/[#*_`]/g, '').substring(0, 100)}...
                  </p>

                  <div className="mt-auto pt-6 border-t border-[var(--border)] group-hover:border-current/20 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="font-bold inline-flex items-center">Read <ArrowRight size={14} className="ml-1" /></span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
