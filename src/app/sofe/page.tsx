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
  MessageSquare,
  ExternalLink,
  Download
} from "lucide-react";
import { EngineeringDivider } from "@/components/ui/EngineeringDivider";

export default function Sofe2026Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const competitionPhases = [
    {
      step: "01",
      level: "KUET Chapter Heats",
      date: "21 SEPT 2026",
      venue: "ME Seminar Hall, KUET",
      desc: "Preliminary presentations before a distinguished jury of KUET mechanical professors and chartered engineers. The top 2 finalists qualify for the national stage.",
      badge: "CURRENT STAGE"
    },
    {
      step: "02",
      level: "Bangladesh National Finals",
      date: "TBA",
      venue: "Dhaka, Bangladesh",
      desc: "Heats champions from student chapters across Bangladesh (KUET, BUET, RUET, CUET, IUT) compete for the national champion title and South Asia berth.",
      badge: "NATIONAL"
    },
    {
      step: "03",
      level: "South Asia Regional (SAR) Finals",
      date: "TBA",
      venue: "Rotational Host (South Asia)",
      desc: "Winners from Bangladesh, India, Pakistan, and Sri Lanka contend for the continental title and an all-expenses-paid trip to London.",
      badge: "REGIONAL"
    },
    {
      step: "04",
      level: "Global London Finals",
      date: "TBA",
      venue: "IMechE HQ, One Birdcage Walk, London, UK",
      desc: "The world's top 7 regional champions deliver their keynote before the global IMechE Trustee Board and international industry leaders.",
      badge: "WORLD FINALS"
    }
  ];

  const officialRubricPdfUrl = "https://www.imeche.org/docs/default-source/1-oscar/Get-involved/young-members/sofe/apr-24/sofe-judges-marking-scheme-2024.pdf?sfvrsn=2";
  const abstractFormUrl = "https://forms.gle/YcVCi8GGXUBEMSDY6";

  const presentationRubric = [
    {
      id: "01",
      category: "Structure and Content of Presentation",
      marks: "30 Marks",
      percentage: "30%",
      subCriteria: [
        { title: "Introduction & Understanding of Need", desc: "Does the contestant introduce the topic clearly and simply state the project purpose/objective? Does the entrant show a clear understanding of the need for the project?", points: "10" },
        { title: "Logical Development of Work", desc: "Does the entrant clearly state and logically develop the detailed description of his/her work?", points: "10" },
        { title: "Key Messages & Future Scope", desc: "Are key messages communicated effectively (including summary/findings)? Does the entrant explain how the work could be exploited or developed further?", points: "10" }
      ]
    },
    {
      id: "02",
      category: "Quality of Preparation & Handling of Questions",
      marks: "20 Marks",
      percentage: "20%",
      subCriteria: [
        { title: "Presentation Planning & Rehearsal", desc: "How well planned, paced, and rehearsed was the verbal presentation?", points: "10" },
        { title: "10-Minute Question Defense", desc: "How well does the entrant handle and defend the 10-minute question session from the judging panel?", points: "10" }
      ]
    },
    {
      id: "03",
      category: "Effective Use of Presentation Aids",
      marks: "15 Marks",
      percentage: "15%",
      subCriteria: [
        { title: "Support to Oral Delivery", desc: "Is the supporting presentation material used effectively in support of the oral presentation rather than acting as a distraction?", points: "15" }
      ]
    },
    {
      id: "04",
      category: "Quality of Presentation",
      marks: "15 Marks",
      percentage: "15%",
      subCriteria: [
        { title: "Clarity, Neatness & Working Order", desc: "Are slides, videos, simulations, physical models, or prototypes clear, neat, and in good working order?", points: "15" }
      ]
    },
    {
      id: "05",
      category: "Presentation Style",
      marks: "10 Marks",
      percentage: "10%",
      subCriteria: [
        { title: "Engaging Delivery & Poise", desc: "Does the competitor give an engaging presentation? (Quality of delivery, vocal modulation, eye contact, body language, and audience connection)", points: "10" }
      ]
    }
  ];

  const technicalRubric = [
    {
      id: "06",
      category: "Complexity of Technical Content",
      marks: "10 Marks",
      percentage: "10%",
      subCriteria: [
        { title: "Technical Mechanical Rigor", desc: "Complexity, novelty, and interest of the technical mechanical engineering problem attempted.", points: "10" }
      ]
    }
  ];

  const qnaList = [
    {
      category: "General",
      q: "WHAT IS SOfE ABOUT?",
      a: "SOfE (Speak Out for Engineering) is an engineering presentation competition where participants choose an engineering-related topic, develop a clear technical idea around it, and communicate it effectively to an audience and judging panel."
    },
    {
      category: "Timeline",
      q: "What is the abstract submission deadline?",
      a: "The abstract submission deadline is 18 September 2026 (11:59 PM BST). Competitors must submit their 100-word engineering abstract before this cutoff. Faculty evaluation results and shortlisted speaker selections will follow."
    },
    {
      category: "Eligibility",
      q: "WHO CAN PARTICIPATE?",
      a: "SOfE is an individual presentation competition. Each participant will present their own topic. Only for the 2K21–2K25 batches."
    },
    {
      category: "Format",
      q: "WHAT DO I NEED TO PREPARE?",
      a: "It consists of two rounds: Abstract Submission and Final Pitch. In the Final Pitch prepare a presentation slide to show in 15 minutes timeframe."
    },
    {
      category: "Preparation",
      q: "What kinds of preparation should one take to participate in SOfE?",
      a: "Competitors should prepare by structuring their presentation clearly and avoiding overly complex jargon. Focus on communicating your engineering idea effectively to a mixed audience. Practicing your delivery, preparing visual aids like slides, and reviewing previous winning pitches in the Resources Hub are excellent ways to prepare for both the presentation and the Q&A session."
    },
    {
      category: "Judging",
      q: "How will the presentations be scored?",
      a: "In strict accordance with the official IMechE SOfE 2024 Judges Marking Scheme: 90% of total marks evaluate Presentation Excellence (30% Structure & Content, 20% Preparation & Question Handling, 15% Effective Use of Aids, 15% Quality of Slides/Simulations/Models, 10% Presentation Style) and 10% evaluates Technical Content complexity. This ensures presentations across diverse mechanical fields compete on an equal footing."
    },
    {
      category: "Topics",
      q: "What subject topics are accepted?",
      a: "Any mechanical or multidisciplinary engineering subject is eligible. Examples include renewable energy, robotics & automation, automotive aerodynamics, computational fluid dynamics, biomedical mechanics, advanced materials, and manufacturing systems. The presentation may be based on your thesis, term project, or an original technical passion."
    },
    {
      category: "Prizes",
      q: "What are the prizes for the KUET Chapter Heats?",
      a: "The Chapter Winner receives 2500 BDT and automatic advancement to the Bangladesh National Finals. The Chapter Runner-Up receives 1500 BDT."
    },
    {
      category: "Venue",
      q: "When and where will the KUET Heats take place?",
      a: "The KUET Chapter Heats are scheduled for 21 September 2026 at the Mechanical Engineering Seminar Hall, Mechanical Engineering Complex, KUET, starting at 2.30 PM."
    },
    {
      category: "Support",
      q: "Who can I contact for queries regarding SOfE 2026?",
      a: "For questions, clarifications, or mentorship regarding SOfE 2026, reach out directly to the IMechE KUET Student Chapter executive committee or email the chapter secretariat at imeche.kuetchapter@gmail.com."
    }
  ];

  const categories = ["ALL", "General", "Timeline", "Eligibility", "Format", "Preparation", "Judging", "Prizes", "Support"];

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
                <span className="text-2xl sm:text-3xl font-display text-[#C8102E] block">4000 BDT</span>
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
                href={abstractFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C8102E] text-white font-medium hover:bg-[#A00D24] transition-all font-mono text-xs uppercase tracking-widest rounded shadow-xl shadow-[#C8102E]/30 flex items-center gap-2 group"
              >
                <FileText size={16} />
                <span>Submit 100-Word Abstract</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a 
                href="#rubric"
                className="px-6 py-4 bg-white/5 border border-white/15 text-neutral-200 hover:bg-white/10 hover:text-white transition-all font-mono text-xs uppercase tracking-widest rounded flex items-center gap-2"
              >
                Judging Criteria
              </a>
              <a 
                href="#qna"
                className="px-6 py-4 bg-white/5 border border-white/15 text-neutral-200 hover:bg-white/10 hover:text-white transition-all font-mono text-xs uppercase tracking-widest rounded flex items-center gap-2"
              >
                Q&A Guidelines
              </a>
              <a 
                href={officialRubricPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 bg-white/5 border border-[#C8102E]/30 text-[#FF4D6D] hover:bg-[#C8102E]/10 transition-all font-mono text-xs uppercase tracking-widest rounded flex items-center gap-2 group"
              >
                <FileText size={15} />
                <span>Marking Scheme (PDF)</span>
                <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/sofe/resources"
                className="px-6 py-4 bg-[#C8102E]/10 border border-[#C8102E]/30 text-[#FF4D6D] hover:bg-[#C8102E]/20 hover:text-[#FF4D6D] transition-all font-mono text-xs uppercase tracking-widest rounded flex items-center gap-2"
              >
                Previous Pitches
              </Link>
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
                    <span className="text-white font-medium">21 September 2026</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#C8102E] mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs font-mono uppercase text-neutral-400 block">Schedule & Time</span>
                    <span className="text-white font-medium">2.30 PM</span>
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
                    <span className="text-amber-400 font-medium">18 September 2026 &middot; 11:59 PM BST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="text-[#C8102E] mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs font-mono uppercase text-neutral-400 block">Official Assessment Scheme</span>
                    <a 
                      href={officialRubricPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF4D6D] transition-colors font-medium inline-flex items-center gap-1.5"
                    >
                      Official 2024 Marking Scheme <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Abstract Submission CTA */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                <a
                  href={abstractFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#C8102E] hover:bg-[#A00D24] text-white font-mono text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#C8102E]/25 transition-all group"
                >
                  <FileText size={15} />
                  <span>Submit 100-Word Abstract</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-[11px] font-mono text-neutral-400 block text-center">
                  Registration Cutoff: 18 September 2026 &middot; 11:59 PM BST
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
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
        <EngineeringDivider label="OFFICIAL ASSESSMENT CRITERIA // 2024 IMechE MARKING SCHEME" />

        {/* Judging Rubric Section */}
        <div id="rubric" className="my-28 scroll-mt-32">
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 md:p-14 shadow-2xl reticle-corner text-white bg-cad-grid relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 pb-8 border-b border-white/10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/15 border border-[#C8102E]/30 rounded text-[#FF4D6D] text-xs font-mono tracking-widest uppercase font-semibold mb-4">
                  <Award size={14} />
                  Official 2024 IMechE Criteria &middot; 90% Presentation / 10% Technical
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                  Official SOfE Judges Marking Scheme
                </h2>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  90% of total marks are given for presentation with only 10% for technical content. This ensures all presentations have the same chance of success across diverse mechanical fields, emphasizing how effectively engineering concepts are communicated.
                </p>
              </div>

              {/* Direct PDF Download / Link Action */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={officialRubricPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#A00D24] text-white font-mono text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-lg shadow-[#C8102E]/25 transition-all group"
                >
                  <FileText size={16} />
                  <span>Download Scheme (PDF)</span>
                  <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-[11px] font-mono text-neutral-400 text-center">
                  Official IMechE UK Ref: apr-24/2024
                </span>
              </div>
            </div>

            {/* PART 1: PRESENTATION (90 MARKS) */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#FF4D6D] font-mono text-xs font-bold uppercase">
                    Part A
                  </span>
                  <h3 className="font-display text-2xl text-white">Presentation Evaluation</h3>
                </div>
                <span className="font-mono text-lg font-bold text-[#FF4D6D]">90 Marks (90%)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {presentationRubric.map((item) => (
                  <div 
                    key={item.id}
                    className="p-6 bg-[#202020] border border-white/10 rounded-xl reticle-corner hover:border-[#C8102E]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-neutral-400">CRITERION {item.id}</span>
                        <span className="font-mono text-base font-bold text-white bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                          {item.marks}
                        </span>
                      </div>
                      <h4 className="font-display text-lg text-white mb-4">
                        {item.category}
                      </h4>
                      <div className="space-y-3 pt-3 border-t border-white/10">
                        {item.subCriteria.map((sub, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <div className="flex items-center justify-between text-neutral-200 font-medium mb-1">
                              <span className="text-white font-semibold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                                {sub.title}
                              </span>
                              <span className="font-mono text-[#FF4D6D]">{sub.points} pts</span>
                            </div>
                            <p className="text-neutral-400 leading-relaxed text-[11px] pl-3">
                              {sub.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PART 2: TECHNICAL CONTENT (10 MARKS) */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase">
                    Part B
                  </span>
                  <h3 className="font-display text-2xl text-white">Technical Content Evaluation</h3>
                </div>
                <span className="font-mono text-lg font-bold text-amber-400">10 Marks (10%)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalRubric.map((item) => (
                  <div 
                    key={item.id}
                    className="p-6 bg-[#202020] border border-white/10 rounded-xl reticle-corner hover:border-amber-400/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-neutral-400">CRITERION {item.id}</span>
                        <span className="font-mono text-base font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                          {item.marks}
                        </span>
                      </div>
                      <h4 className="font-display text-lg text-white mb-4">
                        {item.category}
                      </h4>
                      <div className="space-y-3 pt-3 border-t border-white/10">
                        {item.subCriteria.map((sub, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <div className="flex items-center justify-between text-neutral-200 font-medium mb-1">
                              <span className="text-white font-semibold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                {sub.title}
                              </span>
                              <span className="font-mono text-amber-400">{sub.points} pts</span>
                            </div>
                            <p className="text-neutral-400 leading-relaxed text-[11px] pl-3">
                              {sub.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Important Assessment Notice Card */}
                <div className="p-6 bg-[#1a1a1a] border border-white/10 rounded-xl reticle-corner flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FF4D6D] block mb-2 font-semibold">
                      OFFICIAL IMechE REGULATIONS
                    </span>
                    <h4 className="font-display text-lg text-white mb-2">Equal Opportunity Rationale</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      All presentations must contain mechanical engineering content in its broadest sense (e.g. purpose, research, design, feasibility, practicality). The 90/10 weighting guarantees that participants from undergraduate freshmen to graduating researchers compete purely on communication mastery.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>Judges&apos; Decision Final</span>
                    <span className="text-white/60">Total Score: 100</span>
                  </div>
                </div>
              </div>
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

          {/* High-Impact Abstract Submission Callout Banner */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-[#C8102E]/25 via-[#1a1a1a] to-[#141414] border border-[#C8102E]/40 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl reticle-corner">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/20 border border-[#C8102E]/40 rounded text-xs font-mono tracking-widest uppercase text-[#FF4D6D] font-semibold">
                <Timer size={13} /> Cutoff: 18 September 2026 &middot; 11:59 PM BST
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white">
                Ready to Enter SOfE 2026?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Submit your 100-word engineering synopsis through the official submission form to secure your entry in the KUET chapter heats.
              </p>
            </div>
            <a
              href={abstractFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C8102E] hover:bg-[#A00D24] text-white font-mono text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center gap-2 shadow-xl shadow-[#C8102E]/30 transition-all shrink-0 group"
            >
              <FileText size={16} />
              <span>Submit Abstract (Google Form)</span>
              <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Support Bar */}
          <div className="mt-8 p-6 bg-[#181818] border border-white/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-[#C8102E] shrink-0" size={20} />
              <div>
                <p className="text-sm font-semibold text-white">Have additional questions about SOfE 2026?</p>
                <p className="text-xs text-neutral-400">Reach out directly to the IMechE KUET Student Chapter Secretariat</p>
              </div>
            </div>
            <a 
              href="mailto:imeche.kuetchapter@gmail.com?subject=[SOfE%202026%20Inquiry]" 
              className="px-5 py-2.5 bg-[#202020] hover:bg-[#2A2A2A] text-neutral-200 border border-white/15 text-xs font-mono uppercase tracking-wider rounded transition-colors whitespace-nowrap"
            >
              imeche.kuetchapter@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
