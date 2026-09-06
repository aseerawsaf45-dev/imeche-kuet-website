"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Trophy, 
  Mic, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Sparkles, 
  Globe2, 
  Layers, 
  FileText, 
  HelpCircle,
  Users,
  Timer,
  Mail,
  MessageSquare
} from "lucide-react";
import { EngineeringDivider } from "@/components/ui/EngineeringDivider";

export default function Sofe2026Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const competitionPhases = [
    {
      step: "01",
      level: "KUET Chapter Heats",
      date: "OCTOBER 15, 2026",
      venue: "ME Seminar Hall, KUET",
      desc: "Preliminary presentations before a distinguished jury of KUET mechanical professors and chartered engineers. The top 2 finalists qualify for the national stage.",
      badge: "CURRENT STAGE"
    },
    {
      step: "02",
      level: "Bangladesh National Finals",
      date: "NOVEMBER 2026",
      venue: "Dhaka, Bangladesh",
      desc: "Heats champions from student chapters across Bangladesh (KUET, BUET, RUET, CUET, IUT) compete for the national champion title and South Asia berth.",
      badge: "NATIONAL"
    },
    {
      step: "03",
      level: "South Asia Regional (SAR) Finals",
      date: "EARLY 2027",
      venue: "Rotational Host (South Asia)",
      desc: "Winners from Bangladesh, India, Pakistan, and Sri Lanka contend for the continental title and an all-expenses-paid trip to London.",
      badge: "REGIONAL"
    },
    {
      step: "04",
      level: "Global London Finals",
      date: "MID 2027",
      venue: "IMechE HQ, One Birdcage Walk, London, UK",
      desc: "The world's top 7 regional champions deliver their keynote before the global IMechE Trustee Board and international industry leaders.",
      badge: "WORLD FINALS"
    }
  ];

  const rubrics = [
    {
      category: "Structure & Logical Progression",
      percentage: "30%",
      desc: "Systematic problem statement, clear technical narrative, transition between ideas, and compelling conclusion."
    },
    {
      category: "Visual Aids & Prototyping Demo",
      percentage: "30%",
      desc: "Effective presentation slides, CAD animations, functional engineering prototypes, or multimedia demonstrations."
    },
    {
      category: "Verbal Delivery & Audience Rapport",
      percentage: "30%",
      desc: "Enunciation, pace, confident body posture, eye contact, and making complex engineering concepts universally understandable."
    },
    {
      category: "Technical Defense (10-Min Q&A)",
      percentage: "10%",
      desc: "Sound mechanical engineering principles demonstrated under spontaneous questioning from the academic panel."
    }
  ];

  const qnaList = [
    {
      category: "General",
      q: "What is Speak Out for Engineering (SOfE)?",
      a: "SOfE is the Institution of Mechanical Engineers' (IMechE) premier global public speaking competition established in 1964. It challenges young engineers to communicate technical mechanical concepts clearly, persuasively, and accessibly to audiences with varying technical backgrounds."
    },
    {
      category: "Timeline",
      q: "What is the abstract submission deadline?",
      a: "The abstract submission deadline is 13 September 2026 (11:59 PM BST). Competitors must submit their abstract before this cutoff. Faculty evaluation results and shortlisted speaker selections will be announced on 22 September 2026."
    },
    {
      category: "Eligibility",
      q: "Who is eligible to participate at KUET?",
      a: "Any undergraduate engineering student currently enrolled at KUET (Mechanical, Mechatronics, Textile, MSE, Chemical, IEM, etc.) or recent graduates within 10 years of graduation who are registered Affiliate or Associate members of IMechE."
    },
    {
      category: "Format",
      q: "What is the presentation format and duration?",
      a: "Each competitor is allotted exactly 20 minutes for their verbal presentation accompanied by visual aids (slides, simulations, or prototypes), immediately followed by 10 minutes of jury questioning and defense. Time limits are strictly enforced under official IMechE competition rules."
    },
    {
      category: "Judging",
      q: "How will the presentations be scored?",
      a: "In strict accordance with IMechE UK-SPEC assessment criteria: 90% of total points evaluate presentation excellence (30% structure & logic, 30% visual aids & demos, 30% verbal delivery & poise), and 10% evaluates technical soundness during the 10-minute Q&A."
    },
    {
      category: "Topics",
      q: "What subject topics are accepted?",
      a: "Any mechanical or multidisciplinary engineering subject is eligible. Examples include renewable energy, robotics & automation, automotive aerodynamics, computational fluid dynamics, biomedical mechanics, advanced materials, and manufacturing systems. The presentation may be based on your thesis, term project, or an original technical passion."
    },
    {
      category: "Prizes",
      q: "What are the prizes for the KUET Chapter Heats?",
      a: "The Chapter Winner receives a cash prize equivalent to £300, an official IMechE UK Certificate of Commendation, and automatic advancement to the Bangladesh National Finals. The Chapter Runner-Up receives £200 and an official IMechE certificate."
    },
    {
      category: "Venue",
      q: "When and where will the KUET Heats take place?",
      a: "The KUET Chapter Heats will be held live on Thursday, 15 October 2026, starting at 10:00 AM BST at the Mechanical Engineering Seminar Hall, Mechanical Engineering Complex, KUET."
    },
    {
      category: "Support",
      q: "Who can I contact for queries regarding SOfE 2026?",
      a: "For questions, clarifications, or mentorship regarding SOfE 2026, reach out directly to the IMechE KUET Student Chapter executive committee or email the chapter secretariat at imeche.kuet@gmail.com."
    }
  ];

  const categories = ["ALL", "General", "Timeline", "Eligibility", "Format", "Judging", "Prizes", "Support"];

  const filteredQnA = selectedCategory === "ALL" 
    ? qnaList 
    : qnaList.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-28 bg-[#151515] text-[#FAFAFA] selection:bg-[#C8102E] selection:text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top Breadcrumb & Telemetry Chip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link href="/" className="hover:text-[#C8102E] transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-[#C8102E] transition-colors">EVENTS</Link>
            <span>/</span>
            <span className="text-[#C8102E] font-semibold">SOFE 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded">
              REGISTRATION OPEN &middot; INTAKE 2026
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded text-[#FF4D6D] text-xs font-mono tracking-widest uppercase font-semibold">
              <Trophy size={14} />
              IMechE Global Flagship Competition
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-white">
              Speak Out for <span className="text-[#C8102E] italic">Engineering</span> 2026
            </h1>
            
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              The premier public speaking battleground for mechanical engineers at KUET. Master the art of technical storytelling, defend your engineering vision before international judges, and win a path to London.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-lg">
              <div>
                <span className="text-2xl sm:text-3xl font-display text-[#C8102E] block">£500+</span>
                <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">Prize Purse</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display text-white block">20+10</span>
                <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">Mins Pitch + Q&A</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display text-white block">London</span>
                <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">Global Finals</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a 
                href="#qna"
                className="px-8 py-4 bg-[#C8102E] text-white font-medium hover:bg-[#A00D24] transition-all font-mono text-xs uppercase tracking-widest rounded shadow-xl shadow-[#C8102E]/30 flex items-center gap-2"
              >
                Competition Q&A <ArrowRight size={16} />
              </a>
              <a 
                href="#rubric"
                className="px-6 py-4 bg-white/5 border border-white/15 text-neutral-200 hover:bg-white/10 hover:text-white transition-all font-mono text-xs uppercase tracking-widest rounded"
              >
                Judging Criteria
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Competition Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="p-8 md:p-10 bg-[#181818] border border-white/10 rounded-2xl shadow-2xl reticle-corner engineering-card bg-cad-grid relative overflow-hidden text-white">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF4D6D] block">SESSION 2026</span>
                  <h3 className="font-display text-2xl text-white">KUET Chapter Heats</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center text-[#FF4D6D]">
                  <Mic size={24} />
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="text-[#C8102E] mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs font-mono uppercase text-neutral-400 block">Keynote & Presentation Date</span>
                    <span className="text-white font-medium">Thursday, October 15, 2026</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#C8102E] mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs font-mono uppercase text-neutral-400 block">Schedule & Time</span>
                    <span className="text-white font-medium">10:00 AM &ndash; 04:00 PM BST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-[#C8102E] mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs font-mono uppercase text-neutral-400 block">Physical Venue</span>
                    <span className="text-white font-medium">Mechanical Engineering Seminar Hall, KUET</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Timer className="text-[#C8102E] mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs font-mono uppercase text-neutral-400 block">Abstract Submission Deadline</span>
                    <span className="text-amber-400 font-medium">September 13, 2026 &middot; 11:59 PM BST</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>COORD: 22.8998° N, 89.5024° E</span>
                <span className="text-[#FF4D6D] font-semibold">REF: SOfE-KUET-01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Caliper Divider */}
        <EngineeringDivider label="COMPETITION ROADMAP // 4-STAGE PATHWAY" />

        {/* 4-Stage Pathway */}
        <div className="my-28">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4D6D] font-semibold block mb-3">
              Progression Ladder
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              From KUET Seminar Hall to London Headquarters
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Speak Out for Engineering isn&apos;t just a university contest&mdash;it is an international pipeline connecting student engineers directly with the worldwide Institution of Mechanical Engineers governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitionPhases.map((phase) => (
              <div 
                key={phase.step}
                className="p-8 bg-[#181818] border border-white/10 rounded-2xl shadow-xl flex flex-col justify-between group hover:border-[#C8102E]/50 transition-all reticle-corner text-white relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="font-mono text-3xl text-neutral-500 font-bold group-hover:text-[#FF4D6D] transition-colors">
                      {phase.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C8102E]/15 border border-[#C8102E]/30 text-[#FF4D6D] font-bold">
                      {phase.badge}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-white mb-3 group-hover:text-[#FF4D6D] transition-colors">
                    {phase.level}
                  </h3>
                  
                  <div className="space-y-2 mb-6 text-xs font-mono text-neutral-400">
                    <p className="text-amber-300 font-semibold">{phase.date}</p>
                    <p>{phase.venue}</p>
                  </div>
                  
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caliper Divider */}
        <EngineeringDivider label="OFFICIAL ASSESSMENT CRITERIA // UK-SPEC RUBRIC" />

        {/* Judging Rubric Section */}
        <div id="rubric" className="my-28 scroll-mt-32">
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 md:p-14 shadow-2xl reticle-corner text-white bg-cad-grid">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/15 border border-[#C8102E]/30 rounded text-[#FF4D6D] text-xs font-mono tracking-widest uppercase font-semibold mb-4">
                <Award size={14} />
                90% Presentation &middot; 10% Technical Rigor
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                Official UK-SPEC Judging Rubric
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Unlike traditional academic symposiums, SOfE prioritizes verbal clarity, visual engagement, and communication authority. The primary goal is teaching mechanical engineers to express ideas clearly to non-specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rubrics.map((rubric, idx) => (
                <div 
                  key={idx}
                  className="p-6 md:p-8 bg-[#202020] border border-white/10 rounded-xl reticle-corner hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl text-white">
                      {rubric.category}
                    </h3>
                    <span className="font-mono text-2xl font-bold text-[#FF4D6D]">
                      {rubric.percentage}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-[#C8102E] rounded-full" 
                      style={{ width: rubric.percentage }}
                    />
                  </div>
                  <p className="text-neutral-300 text-xs md:text-sm leading-relaxed">
                    {rubric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Caliper Divider */}
        <EngineeringDivider label="KNOWLEDGE BASE // BASIC QUESTIONS & ANSWERS (Q&A)" />

        {/* Dedicated Basic Q&A Section */}
        <div id="qna" className="my-28 scroll-mt-32">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-2 text-[#FF4D6D] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
              <MessageSquare size={16} />
              <span>Everything You Need to Know</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">
              Questions & Answers
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Essential guidance, eligibility guidelines, time limits, and official protocol for participants of SOfE 2026 at Khulna University of Engineering & Technology.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mr-2">
              Topic:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                    isSelected 
                      ? "bg-[#C8102E] text-white font-semibold shadow-lg shadow-[#C8102E]/20" 
                      : "bg-[#202020] text-neutral-300 hover:text-white hover:bg-[#282828] border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Q&A Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredQnA.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 bg-[#181818] border border-white/10 rounded-xl reticle-corner shadow-xl hover:border-[#C8102E]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF4D6D] bg-[#C8102E]/10 border border-[#C8102E]/30 px-2.5 py-0.5 rounded font-bold">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Q#{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-white mb-3">
                    {item.q}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Support Bar */}
          <div className="mt-12 p-6 bg-[#181818] border border-white/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-[#C8102E] shrink-0" size={20} />
              <div>
                <p className="text-sm font-semibold text-white">Have additional questions about SOfE 2026?</p>
                <p className="text-xs text-neutral-400">Reach out directly to the IMechE KUET Student Chapter Secretariat</p>
              </div>
            </div>
            <a 
              href="mailto:imeche.kuet@gmail.com?subject=[SOfE%202026%20Inquiry]" 
              className="px-5 py-2.5 bg-[#202020] hover:bg-[#2A2A2A] text-neutral-200 border border-white/15 text-xs font-mono uppercase tracking-wider rounded transition-colors whitespace-nowrap"
            >
              imeche.kuet@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
