"use client";

import { useState } from "react";
import { 
  Shield, 
  Award, 
  Mail, 
  Layers,
  GraduationCap,
  ChevronDown
} from "lucide-react";
import { team, boardsArchive, alumniCommittees } from "@/data/mock";
import { EngineeringDivider } from "@/components/ui/EngineeringDivider";

export default function TeamPage() {
  const [selectedCommitteeId, setSelectedCommitteeId] = useState<string>("committee-2025-26");
  const activeCommittee = alumniCommittees.find(c => c.id === selectedCommitteeId) || alumniCommittees[0];
  const executiveBoard = team.filter((m) => m.roleType === "High Committee");

  const committeeGroups = [
    {
      title: "Organizing Secretaries",
      code: "ORG-SEC",
      desc: "Orchestrating chapter symposiums, SolidWorks CAD modeling hackathons, field excursions, and Freshers reception.",
      members: team.filter(m => m.position === "Organizing Secretary")
    },
    {
      title: "Chief of External Affairs",
      code: "EXT-AFF",
      desc: "Building corporate bridges with industrial power plants, Khulna Shipyard, and arranging technical sponsorship.",
      members: team.filter(m => m.position === "Chief of External Affairs")
    },
    {
      title: "Chief of Internal Affairs",
      code: "INT-AFF",
      desc: "Supervising intra-chapter operational logistics, student member registries, and technical committee coordination.",
      members: team.filter(m => m.position === "Chief of Internal Affairs")
    },
    {
      title: "Publication Managers",
      code: "PUB-MGR",
      desc: "Curating technical writeups, annual engineering digests, conference brochures, and research releases.",
      members: team.filter(m => m.position === "Publication Manager")
    },
    {
      title: "Public Relations Officers",
      code: "PRO-OFF",
      desc: "Fostering campus visibility, public statements, and multi-department student outreach across KUET.",
      members: team.filter(m => m.position === "Public Relations Officer")
    },
    {
      title: "Human Resource Managers",
      code: "HRM-MGR",
      desc: "Managing member talent acquisition, leadership mentorship, and volunteer team building programs.",
      members: team.filter(m => m.position === "Human Resource Manager")
    },
    {
      title: "Media Officers",
      code: "MED-OFF",
      desc: "Leading photographic documentation, cinematography, and digital visual assets across official chapter channels.",
      members: team.filter(m => m.position === "Media Officer")
    },
    {
      title: "Policy Analysts",
      code: "POL-ANL",
      desc: "Formulating chapter bylaws, institutional strategies, event governance protocols, and operational compliance.",
      members: team.filter(m => m.position === "Policy Analyst")
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-28 bg-background text-foreground selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-primary mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>SESSION 2025/2026 COUNCIL</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-[1.05]">
            Executive Committee
          </h1>
          <p className="text-neutral text-lg md:text-xl leading-relaxed">
            The dedicated student engineers steering the <strong className="text-white">IMechE KUET Student Chapter</strong>. Driving technical innovation, global accreditations, and community excellence across Khulna University of Engineering & Technology.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a 
              href="#alumni" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary text-xs font-mono uppercase tracking-wider font-semibold transition-all"
            >
              <GraduationCap size={15} />
              <span>Explore Alumni & Past Committees</span>
              <ChevronDown size={14} />
            </a>
          </div>
        </div>



        {/* 1. HIGH COMMITTEE / EXECUTIVE BOARD */}
        <div className="mb-28">
          <div className="flex items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Shield className="text-primary" size={26} />
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary block">TIER 01 // GOVERNANCE</span>
                <h2 className="font-display text-3xl md:text-4xl text-white">Executive Board</h2>
              </div>
            </div>
            <span className="hidden sm:block text-xs font-mono text-neutral">4 EXECUTIVE OFFICERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member) => (
                <div 
                  key={member.id} 
                  className="p-8 border border-secondary/25 bg-[#181818] shadow-2xl hover:border-primary/50 transition-all group reticle-corner engineering-card text-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                        {member.position}
                      </span>
                      <span className="text-[11px] font-mono text-white bg-primary/20 border border-primary/40 px-2 py-0.5 rounded font-bold">
                        {member.deptCode}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral mb-4">{member.department}</p>
                    {member.bio && (
                      <p className="text-xs text-neutral/90 leading-relaxed mb-6 border-t border-white/10 pt-4">
                        {member.bio}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral font-mono">
                    <span className="text-[11px] text-white/60">KUET CHAPTER</span>
                    {member.socials?.email && (
                      <a 
                        href={`mailto:${member.socials.email}`} 
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <Mail size={12} /> Contact
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Caliper Divider */}
        <EngineeringDivider label="TIER 02 // SECRETARIAT & DEPARTMENTAL OFFICERS" />

        {/* 2. OPERATIONAL COMMITTEES & MANAGERS */}
        <div className="my-28">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-widest mb-2 font-semibold">
              <Layers size={18} />
              <span>Functional Leadership</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
              Secretariat & Operational Chiefs
            </h2>
            <p className="text-neutral text-base leading-relaxed">
              Leading organizational execution, external industrial relations, member growth, technical publications, and media documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committeeGroups.map((group) => {
              return (
                <div 
                  key={group.code} 
                  className="p-8 md:p-10 border border-secondary/25 bg-[#181818] rounded-xl reticle-corner text-white shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-4">
                      <h3 className="font-display text-2xl md:text-3xl text-white">{group.title}</h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-white/15 bg-white/5 text-primary font-bold">
                        {group.code}
                      </span>
                    </div>
                    <p className="text-xs text-neutral leading-relaxed mb-6">
                      {group.desc}
                    </p>

                    <div className="space-y-3 mb-6">
                      {group.members.map((member) => (
                        <div 
                          key={member.id} 
                          className="p-4 bg-[#202020] border border-white/10 rounded-lg flex items-center justify-between gap-4 group hover:border-primary/40 transition-colors"
                        >
                          <div>
                            <h4 className="font-display text-lg text-white group-hover:text-primary transition-colors">
                              {member.name}
                            </h4>
                            <p className="text-xs font-mono text-neutral">{member.position}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 font-mono text-xs font-bold text-white">
                              {member.deptCode}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral">
                    <span>{group.members.length} Appointed Member{group.members.length > 1 ? "s" : ""}</span>
                    <span className="text-white/60">IMechE KUET</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Caliper Divider */}
        <div id="alumni">
          <EngineeringDivider label="HERITAGE 03 // ALUMNI & HONORARY PAST COMMITTEES" />
        </div>

        {/* 3. ALUMNI & PAST COMMITTEES ARCHIVE */}
        <div className="my-28 p-6 sm:p-10 md:p-14 bg-[#141414] text-white rounded-2xl border border-secondary/30 bg-cad-grid reticle-corner shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
                <GraduationCap size={20} className="text-primary" />
                <span>Alumni Legacy & Council Archives</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl text-white mb-3">
                Honorary Past Committees
              </h2>
              <p className="text-neutral text-sm md:text-base leading-relaxed">
                Celebrating the distinguished student leaders and committee executives of IMechE KUET Student Chapter across past tenures since 2017.
              </p>
            </div>

            {/* Quick Session Count Badge */}
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 self-start md:self-auto shrink-0">
              <span className="text-primary font-bold">5 Historic Sessions</span> Documented
            </div>
          </div>

          {/* Committee Session Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-6 border-b border-white/10">
            {alumniCommittees.map((comm) => {
              const isSelected = selectedCommitteeId === comm.id;
              return (
                <button
                  key={comm.id}
                  onClick={() => setSelectedCommitteeId(comm.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-primary text-white shadow-lg shadow-primary/30 border border-primary scale-[1.02]"
                      : "bg-[#1f1f1f] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{comm.title}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded ${isSelected ? "bg-black/30 text-white" : "bg-white/10 text-neutral-400"}`}>
                    {comm.batchBadge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Committee Display */}
          <div className="space-y-12">
            {/* Header of Active Committee */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl bg-gradient-to-r from-primary/15 via-white/5 to-transparent border border-primary/30">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-1">
                  IMechE KUET Council Roster
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  {activeCommittee.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-mono uppercase font-bold">
                  {activeCommittee.batchBadge}
                </span>
                <span className="text-xs font-mono text-neutral">
                  {activeCommittee.executiveBoard.length + activeCommittee.wings.reduce((acc, w) => acc + w.members.length, 0)} Appointed Leaders
                </span>
              </div>
            </div>

            {/* Executive Board of Selected Committee */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary font-bold mb-6">
                <Shield size={16} />
                <span>Executive Board &middot; {activeCommittee.session}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeCommittee.executiveBoard.map((exec, idx) => (
                  <div
                    key={`${exec.role}-${exec.name}-${idx}`}
                    className="p-6 bg-[#1a1a1a] border border-white/10 hover:border-primary/50 rounded-xl reticle-corner engineering-card transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold block mb-2">
                        {exec.role}
                      </span>
                      <h4 className="font-display text-xl text-white group-hover:text-primary transition-colors">
                        {exec.name}
                      </h4>
                    </div>
                    {exec.dept && (
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-400">Batch / Dept</span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-primary font-bold">
                          {exec.dept}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Wings & Officers Grid */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-300 font-bold mb-6">
                <Layers size={16} className="text-primary" />
                <span>Secretariat & Departmental Wings</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCommittee.wings.map((wing) => (
                  <div
                    key={wing.title}
                    className="p-6 bg-[#181818] border border-white/10 rounded-xl flex flex-col justify-between hover:border-white/20 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                        <h5 className="font-display text-lg text-white font-medium">{wing.title}</h5>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">
                          {wing.members.length} {wing.members.length > 1 ? "Members" : "Member"}
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {wing.members.map((member, mIdx) => (
                          <div
                            key={`${member.name}-${mIdx}`}
                            className="p-3 bg-[#202020] rounded-lg border border-white/5 flex items-center justify-between gap-3 text-xs"
                          >
                            <div className="min-w-0">
                              <span className="text-white font-medium block truncate">{member.name}</span>
                              {member.role && (
                                <span className="text-[10px] font-mono text-primary block truncate">{member.role}</span>
                              )}
                            </div>
                            {member.dept && (
                              <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-300 font-mono text-[10px] font-bold shrink-0">
                                {member.dept}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Boards Timeline Footnote */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral mb-4 flex items-center gap-2">
              <Award size={14} className="text-primary" />
              <span>Tenure Timeline Reference</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {boardsArchive.map((board) => (
                <div key={board.year} className="p-3 rounded-lg bg-black/40 border border-white/5 text-center">
                  <span className="text-xs font-mono text-primary font-bold block">{board.year}</span>
                  <span className="text-[10px] text-neutral-400 block truncate">{board.theme}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
