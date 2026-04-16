import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] py-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tighter">kurevi.</Link>
            <p className="mt-4 text-[var(--muted)] max-w-xs text-sm">
              The Social Web Production Agency. Elevating your online presence with bespoke digital solutions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Agency</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">About</Link></li>
              <li><Link to="/work" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Work</Link></li>
              <li><Link to="/services" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Nexus Digital Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]">Privacy Policy</a>
            <a href="#" className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
