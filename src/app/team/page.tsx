"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Shield, 
  Users, 
  Award, 
  Briefcase, 
  Compass, 
  Mail, 
  ChevronRight, 
  Sparkles,
  Layers,
  GraduationCap
} from "lucide-react";
import { team, boardsArchive } from "@/data/mock";
import { EngineeringDivider } from "@/components/ui/EngineeringDivider";

export default function TeamPage() {
  const [selectedDept, setSelectedDept] = useState<string>("ALL");

  const executiveBoard = team.filter((m) => m.roleType === "High Committee");

  const departmentsList = ["ALL", "ME", "MTE", "TE", "MSE", "ChE", "IEM"];

  const filteredTeam = selectedDept === "ALL" 
    ? team 
    : team.filter(m => m.deptCode === selectedDept);

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
        </div>

        {/* Quick Department Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-6 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral mr-2">
            Filter By Dept:
          </span>
          {departmentsList.map((dept) => {
            const count = dept === "ALL" ? team.length : team.filter(t => t.deptCode === dept).length;
            const isSelected = selectedDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  isSelected 
                    ? "bg-primary text-white font-semibold shadow-lg shadow-primary/20" 
                    : "bg-white/5 text-neutral hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{dept}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${isSelected ? "bg-black/30 text-white" : "bg-white/10 text-neutral"}`}>
                  {count}
                </span>
              </button>
            );
          })}
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
            {executiveBoard
              .filter(m => selectedDept === "ALL" || m.deptCode === selectedDept)
              .map((member) => (
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
              const activeMembers = selectedDept === "ALL" 
                ? group.members 
                : group.members.filter(m => m.deptCode === selectedDept);

              if (activeMembers.length === 0) return null;

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
                      {activeMembers.map((member) => (
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
                    <span>{activeMembers.length} Appointed Member{activeMembers.length > 1 ? "s" : ""}</span>
                    <span className="text-white/60">IMechE KUET</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Caliper Divider */}
        <EngineeringDivider label="HERITAGE 03 // PAST EXECUTIVE BOARDS" />

        {/* 3. HISTORICAL BOARD ARCHIVE */}
        <div className="my-28 p-8 md:p-16 bg-[#181818] text-white rounded-2xl border border-secondary/25 bg-cad-grid reticle-corner shadow-2xl">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-widest mb-2 font-semibold">
              <Award size={18} />
              <span>Institutional Legacy</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-4 text-white">Honorary Boards Archive</h2>
            <p className="text-neutral text-sm md:text-base leading-relaxed">
              Every executive board of the IMechE KUET Student Chapter has laid vital foundations of technical rigor, professional CEng roadmaps, and international prestige since 2018.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardsArchive.map((board) => (
              <div 
                key={board.year} 
                className="p-6 bg-[#202020] border border-white/10 rounded-xl hover:border-primary/50 transition-colors engineering-card text-white"
              >
                <span className="font-display text-3xl text-primary block mb-2">{board.year}</span>
                <h4 className="font-sans text-sm font-semibold text-white/90 mb-1">{board.theme}</h4>
                <p className="text-xs font-mono text-neutral">IMechE KUET Student Chapter</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
