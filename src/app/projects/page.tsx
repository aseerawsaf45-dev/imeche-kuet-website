import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { projects } from "@/data/mock";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-20 max-w-3xl">
          <p className="font-sans text-xs tracking-widest uppercase font-semibold text-neutral-gray mb-4">Engineering in Action</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Featured Projects</h1>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Explore the innovative solutions, research, and technical challenges our members have tackled to bridge the gap between theory and reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className="group flex flex-col border border-secondary/20 bg-[#151515] text-white hover:border-primary/50 transition-all reticle-corner engineering-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="w-full aspect-[16/9] bg-[#0c0c0c] overflow-hidden relative border-b border-secondary/20 flex items-center justify-center">
                {/* CAD Grid in background */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(rgba(200, 16, 46, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 16, 46, 0.3) 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10 text-primary">
                    <Wrench size={22} />
                  </div>
                  <span className="text-neutral text-xs tracking-widest uppercase font-mono">
                    SYS.SPEC // {project.category}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-primary font-mono">{project.category}</span>
                  <span className="font-mono text-xs text-neutral">{project.year}</span>
                </div>
                <h3 className="font-display text-3xl mb-4 group-hover:text-primary transition-colors text-white">{project.title}</h3>
                <p className="text-neutral text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 border border-white/10 bg-white/5 text-[11px] font-mono text-neutral rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm font-medium text-primary group-hover:text-white transition-colors gap-2 font-mono uppercase text-xs tracking-wider">
                  View Technical Spec <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

