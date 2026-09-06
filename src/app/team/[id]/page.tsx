import { notFound } from "next/navigation";
import { ArrowLeft, Mail, ExternalLink, ShieldCheck, Building2, User } from "lucide-react";
import Link from "next/link";
import { team } from "@/data/mock";

export function generateStaticParams() {
  return team.map((member) => ({
    id: member.id,
  }));
}

export default async function TeamDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = team.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#151515] text-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <Link 
          href="/team" 
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#C8102E] transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Executive Committee Directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Portrait Sidebar */}
          <div className="lg:col-span-4">
            <div className="w-full aspect-[3/4] bg-[#181818] rounded-xl border border-white/10 flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="w-24 h-24 rounded-full bg-[#242424] border border-white/15 flex items-center justify-center mb-6 text-neutral-300 shadow-inner">
                <User size={48} className="text-neutral-400" />
              </div>
              <div className="text-center relative z-10">
                <span className="px-3 py-1 bg-[#C8102E]/20 text-[#FF4D6D] border border-[#C8102E]/40 text-xs font-mono rounded-full uppercase tracking-wider font-semibold">
                  {member.deptCode} &middot; {member.roleType}
                </span>
                <p className="text-xs text-neutral-400 mt-3 font-mono">
                  IMechE KUET Student Chapter
                </p>
              </div>
            </div>
            
            <div className="mt-8 space-y-6 bg-[#181818] p-6 rounded-xl border border-white/10">
              <div>
                <h2 className="text-xs tracking-widest uppercase font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                  <Building2 size={14} className="text-[#C8102E]" /> Departmental Affiliation
                </h2>
                <p className="text-sm text-neutral-200 font-medium">
                  {member.department}
                </p>
                {member.batch && (
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    Batch: {member.batch}
                  </p>
                )}
              </div>

              <div className="border-t border-white/10 pt-4">
                <h2 className="text-xs tracking-widest uppercase font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#C8102E]" /> Committee Division
                </h2>
                <p className="text-sm text-neutral-200 font-medium">
                  {member.committee}
                </p>
              </div>

              {member.socials && (member.socials.linkedin || member.socials.email) && (
                <div className="border-t border-white/10 pt-4">
                  <h2 className="text-xs tracking-widest uppercase font-semibold text-neutral-400 mb-3">
                    Connect & Verification
                  </h2>
                  <div className="flex flex-col gap-2">
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#C8102E] transition-colors group"
                      >
                        <svg className="w-4 h-4 fill-current text-[#0A66C2] group-hover:text-[#C8102E]" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.67 1.66c0 .92.75 1.67 1.67 1.67a1.67 1.67 0 0 0 0-3.33Z" />
                        </svg>
                        <span>LinkedIn Profile</span>
                        <ExternalLink size={12} className="text-neutral-500" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a 
                        href={`mailto:${member.socials.email}`} 
                        className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#C8102E] transition-colors"
                      >
                        <Mail size={16} className="text-neutral-400" />
                        <span className="truncate">{member.socials.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-[#181818] p-8 md:p-12 rounded-xl border border-white/10 shadow-xl mb-8">
              <div className="border-b border-white/10 pb-8 mb-8">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#FF4D6D] bg-[#C8102E]/10 border border-[#C8102E]/30 px-3 py-1 rounded inline-block mb-4">
                  {member.position}
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {member.name}
                </h1>
                <p className="font-mono text-sm text-neutral-400">
                  {member.department} &middot; {member.committee}
                </p>
              </div>

              {member.bio && (
                <div className="mb-8">
                  <h2 className="text-xs uppercase tracking-widest font-semibold text-neutral-400 mb-3">
                    Mission & Focus
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-neutral-200 border-l-2 border-[#C8102E] pl-4 italic">
                    &quot;{member.bio}&quot;
                  </p>
                </div>
              )}

              <div className="space-y-6 text-neutral-300 leading-relaxed">
                <h2 className="text-xl font-display font-semibold text-white">
                  Role & Responsibilities at KUET Chapter
                </h2>
                <p>
                  As {member.position} within the {member.committee} of the IMechE KUET Student Chapter, {member.name} works to advance the chapter&apos;s strategic objectives at Khulna University of Engineering & Technology. This includes organizing flagship events such as Speak Out for Engineering (SOfE), coordinating industrial technical lectures, and fostering multidisciplinary engineering collaboration.
                </p>
                <p>
                  Representing the {member.department}, {member.name} actively bridges academic curriculum with global mechanical engineering standards set forth by the Institution of Mechanical Engineers (IMechE, UK).
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                <Link
                  href="/sofe"
                  className="px-5 py-2.5 bg-[#C8102E] hover:bg-[#A00D24] text-white text-sm font-semibold rounded transition-colors inline-flex items-center gap-2"
                >
                  Explore SOfE 2026 KUET
                </Link>
                <Link
                  href="/events"
                  className="px-5 py-2.5 bg-[#222222] hover:bg-[#2A2A2A] text-neutral-200 border border-white/15 text-sm font-semibold rounded transition-colors"
                >
                  Chapter Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
