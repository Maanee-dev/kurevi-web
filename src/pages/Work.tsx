import { ArrowRight } from 'lucide-react';

export default function Work() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16">Selected <br /> Projects.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Luminal AI", category: "Web Development" },
            { title: "Vortex Gear", category: "Digital Marketing" },
            { title: "Aether Labs", category: "Creative Design" },
            { title: "Zenith Store", category: "E-commerce" },
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="cursor-panel aspect-[16/10] bg-[var(--border)]/10 mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors">
                  <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
