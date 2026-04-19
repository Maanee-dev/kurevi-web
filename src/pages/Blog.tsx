import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';
import { useTheme } from '../contexts/ThemeContext';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const { theme } = useTheme();

  // Filter posts based on search query (searching titles and content)
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="pt-32 pb-32 bg-[var(--background)] min-h-screen">
      <SEO 
        title="Insights & Guides"
        description="Read Kurevi's insights, guides, and updates on doing business digitally in the Maldives."
        keywords="maldives digital marketing blog, register .mv domain, web development costs maldives, dhiraagu domain"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12vw] sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-6"
            >
              THE <br /> INSIGHTS.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--muted)] max-w-2xl font-medium mt-8 leading-relaxed"
            >
              Guides, deep dives, and essential pricing breakdowns for dominating the digital landscape in the Maldives.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-80 relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
            <input 
              type="text" 
              placeholder="Search insights..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to page 1 on new search
              }}
              className="w-full bg-[var(--background)] border-2 border-[var(--border)] text-[var(--foreground)] pl-12 pr-4 py-4 focus:outline-none focus:border-[var(--foreground)] transition-colors font-mono text-sm placeholder:text-[var(--muted)]"
            />
          </motion.div>
        </div>

        {currentPosts.length > 0 ? (
          <div className="brutalist-grid grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[var(--border)]">
            {currentPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="brutalist-cell h-full flex flex-col group hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-500 overflow-hidden relative border-r border-b border-[var(--border)]"
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
                
                <div className="relative z-10 flex flex-col h-full p-8 md:p-12 flex-grow">
                  <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest mb-8 text-[var(--muted)] group-hover:text-[var(--background)]/70 transition-colors">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    <span>{post.category}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-[var(--muted)] group-hover:text-[var(--background)]/80 line-clamp-3 mb-10 text-sm md:text-base leading-relaxed flex-grow">
                    {post.content.replace(/[#*_`]/g, '').substring(0, 160)}...
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-widest transition-transform group-hover:translate-x-2 w-max"
                  >
                    Read Article <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-[var(--border)]">
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">No insights found</h3>
            <p className="text-[var(--muted)]">Try adjusting your search terms to find what you're looking for.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-8 mt-20">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:text-[var(--primary)] transition-colors"
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <div className="font-mono text-sm font-bold opacity-50">
              {currentPage} / {totalPages}
            </div>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:text-[var(--primary)] transition-colors"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
