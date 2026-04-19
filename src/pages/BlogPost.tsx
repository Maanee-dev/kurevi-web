import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const { theme } = useTheme();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 pb-32 bg-[var(--background)] min-h-screen">
      <SEO 
        title={post.title}
        description={post.content.substring(0, 160).replace(/[#*_`]/g, '')}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] mb-12 transition-colors"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-12 border-b border-[var(--border)] pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest mb-6 text-[var(--muted)]"
          >
            <span className="flex items-center gap-2 text-[var(--foreground)] bg-[var(--border)] px-3 py-1 rounded-sm">
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8"
          >
            {post.title}
          </motion.h1>
          
          {post.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full h-64 md:h-96 relative overflow-hidden mt-8"
            >
               <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 border border-[var(--border)] pointer-events-none"></div>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* We ensure all prose elements strictly use our CSS variables so they adapt precisely to both Light and Dark mode without tailwind defaults overriding them */}
          <div className="prose prose-lg 
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-[var(--foreground)]
            prose-p:text-[var(--muted)] prose-p:leading-relaxed
            prose-li:text-[var(--muted)] prose-strong:text-[var(--foreground)]
            prose-a:text-[var(--foreground)] prose-a:underline-offset-4 hover:prose-a:opacity-70 
            prose-strong:font-bold prose-code:font-mono prose-code:text-xs prose-code:text-[var(--foreground)]
            max-w-none
            
            /* Custom Table Overrides */
            prose-table:w-full prose-table:border-collapse prose-table:text-sm prose-table:font-mono prose-table:m-0
            prose-th:bg-[var(--border)]/30 prose-th:p-4 prose-th:text-left prose-th:uppercase prose-th:tracking-widest prose-th:text-xs prose-th:whitespace-nowrap prose-th:text-[var(--foreground)]
            prose-td:p-4 prose-td:border-b prose-td:border-[var(--border)] sm:prose-td:whitespace-normal prose-td:whitespace-nowrap prose-td:text-[var(--muted)]
            dark:prose-td:border-white/10 prose-td:border-black/10
            dark:prose-th:border-white/10 prose-th:border-black/10
            ">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ node, ...props }) => (
                  <div className="w-full overflow-x-auto my-8 border border-[var(--border)] rounded-sm [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <table {...props} />
                  </div>
                ),
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={theme === 'dark' ? vscDarkPlus : vs}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{
                        background: 'transparent',
                        padding: '1.5rem',
                        margin: '2rem 0',
                        border: '1px solid var(--border)',
                        borderRadius: '0.25rem',
                        fontSize: '0.875rem',
                      }}
                      {...props}
                    >
                      {String(children).replace(/\\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
