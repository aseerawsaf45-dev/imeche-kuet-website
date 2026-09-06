import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-36 pb-28 bg-[#151515] text-[#FAFAFA] flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#C8102E]/10 border border-[#C8102E]/30 flex items-center justify-center text-[#FF4D6D]">
          <Wrench size={28} />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D6D] mb-3">
          SYSTEM NOTICE // ARCHIVE UNDER PREPARATION
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-white mb-6">
          Projects Coming Soon
        </h1>
        <p className="text-neutral-400 text-base leading-relaxed mb-8">
          The chapter&apos;s project showcase and technical initiatives are currently undergoing documentation and review for the upcoming session.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8102E] text-white font-mono text-xs uppercase tracking-wider rounded hover:bg-[#A00D24] transition-colors shadow-lg shadow-[#C8102E]/25"
          >
            <ArrowLeft size={16} /> Return to Home
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/15 text-neutral-300 font-mono text-xs uppercase tracking-wider rounded hover:bg-white/10 hover:text-white transition-colors"
          >
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
}

