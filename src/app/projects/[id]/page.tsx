import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/mock";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-gray hover:text-primary transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-gray">
              {project.year}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        <div className="w-full aspect-[21/9] bg-[#111] mb-24 flex flex-col items-center justify-center border border-secondary/20 reticle-corner relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(200, 16, 46, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 16, 46, 0.25) 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />
          <div className="relative z-10 text-center space-y-2">
            <span className="text-primary text-xs tracking-widest uppercase font-mono block">KUET MECHANICAL ENGINEERING INITIATIVE</span>
            <span className="text-white text-2xl font-display">{project.title}</span>
            <span className="text-neutral text-xs font-mono block">CAD TELEMETRY &middot; STATUS: {project.status}</span>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-lg max-w-none prose-p:text-foreground/80 prose-headings:font-display">
            
            <div className="mb-16 bg-[#151515] p-8 border border-secondary/20 rounded-lg reticle-corner text-white">
              <h2 className="text-xs tracking-widest uppercase font-mono font-semibold text-primary mb-2">01 — The Challenge</h2>
              <h3 className="text-2xl md:text-3xl font-display mb-4 text-white">Problem Statement</h3>
              <p className="text-neutral leading-relaxed text-base">{project.problem}</p>
            </div>

            <div className="mb-16 bg-[#151515] p-8 border border-secondary/20 rounded-lg reticle-corner text-white">
              <h2 className="text-xs tracking-widest uppercase font-mono font-semibold text-primary mb-2">02 — Our Approach</h2>
              <h3 className="text-2xl md:text-3xl font-display mb-4 text-white">Engineering Solution</h3>
              <p className="text-neutral leading-relaxed text-base">{project.solution}</p>
            </div>

            <div className="mb-16 bg-[#151515] p-8 border border-secondary/20 rounded-lg reticle-corner text-white">
              <h2 className="text-xs tracking-widest uppercase font-mono font-semibold text-primary mb-2">03 — Results</h2>
              <h3 className="text-2xl md:text-3xl font-display mb-4 text-white">Impact & Outcome</h3>
              <p className="text-neutral leading-relaxed text-base">{project.outcome}</p>
            </div>

          </div>

          <div className="lg:col-span-4">
            <div className="bg-[#151515] text-white p-8 border border-secondary/20 reticle-corner rounded-lg sticky top-32 shadow-xl">
              <h4 className="font-display text-2xl mb-6 border-b border-white/10 pb-4 text-white">Project Specs</h4>
              
              <div className="mb-8">
                <span className="text-xs font-semibold text-neutral uppercase tracking-widest font-mono block mb-3">Status</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-white rounded">
                  <span className={`w-2 h-2 rounded-full ${project.status === 'COMPLETED' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                  {project.status}
                </span>
              </div>

              <div className="mb-8">
                <span className="text-xs font-semibold text-neutral uppercase tracking-widest font-mono block mb-3">Core Engineering Team</span>
                <ul className="space-y-2">
                  {project.team.map((member, i) => (
                    <li key={i} className="text-white text-sm font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-semibold text-neutral uppercase tracking-widest font-mono block mb-3">Tech Stack & Tools</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-mono text-neutral rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
