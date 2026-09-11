import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, ExternalLink, Video, CheckCircle2, BookOpen, Download } from "lucide-react";
import { EngineeringDivider } from "@/components/ui/EngineeringDivider";

export default function SofeResourcesPage() {
  const previousWinners = [
    {
      year: "2019",
      name: "SOfE 2019 Global Final: Day One",
      topic: "International Presentations",
      competition: "Global Finals",
      embedUrl: "https://www.youtube.com/embed/QH8XCecNPSY",
      type: "Global"
    },
    {
      year: "2019",
      name: "SOfE 2019 Global Final: Day Two",
      topic: "International Presentations & Q&A",
      competition: "Global Finals",
      embedUrl: "https://www.youtube.com/embed/Zr4PdF1gPpw",
      type: "Global"
    },
    {
      year: "2020",
      name: "European Regional SOfE Final 2020",
      topic: "Regional Winning Pitches",
      competition: "Regional Finals",
      embedUrl: "https://www.youtube.com/embed/ayTty7Tp_84",
      type: "Regional"
    },
    {
      year: "2025",
      name: "SOfE 2025 European Region Final",
      topic: "Regional Winning Pitches",
      competition: "Regional Finals",
      embedUrl: "https://www.youtube.com/embed/1a39BQ8zls0",
      type: "Regional"
    }
  ];

  const prepMaterials = [
    {
      title: "Keep it Simple",
      desc: "Focus on clarity. Avoid excessive jargon. Remember that judges are assessing your ability to explain complex mechanical engineering subjects to a mixed audience, not just your technical prowess."
    },
    {
      title: "Structure Your Presentation",
      desc: "Ensure a logical flow. Start with a clear introduction stating the problem, develop your work systematically, and end with key findings and future scope."
    },
    {
      title: "Don't Memorize a Script",
      desc: "Memorized speeches often sound unnatural. Be a 'bullet point speaker'—know your core points and speak naturally with enthusiasm."
    },
    {
      title: "Master the Q&A",
      desc: "10 minutes of the competition is dedicated to Q&A. Practice answering unexpected questions from non-engineers to prove you truly understand the subject."
    }
  ];

  const officialDownloads = [
    {
      title: "Official Judges Marking Scheme",
      desc: "The 2024 standardized grading rubric used globally for SOfE competitions. (90% Presentation, 10% Technical Content)",
      link: "https://www.imeche.org/docs/default-source/1-oscar/Get-involved/young-members/sofe/apr-24/sofe-judges-marking-scheme-2024.pdf",
      icon: <FileText size={18} />
    },
    {
      title: "Entrant's Pack & Guidelines",
      desc: "Comprehensive guide for participants including competition rules, format constraints (20 min pitch + 10 min Q&A), and eligibility.",
      link: "https://www.imeche.org/get-involved/young-members-network/speak-out-for-engineering",
      icon: <BookOpen size={18} />
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-28 bg-[#151515] text-[#FAFAFA] selection:bg-[#C8102E] selection:text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link href="/" className="hover:text-[#C8102E] transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-[#C8102E] transition-colors">EVENTS</Link>
            <span>/</span>
            <Link href="/sofe" className="hover:text-[#C8102E] transition-colors">SOFE 2026</Link>
            <span>/</span>
            <span className="text-[#C8102E] font-semibold">RESOURCES</span>
          </div>
          <Link href="/sofe" className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft size={14} />
            BACK TO SOFE PAGE
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded text-[#FF4D6D] text-xs font-mono tracking-widest uppercase font-semibold mb-6">
            <BookOpen size={14} />
            Preparation Hub
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white mb-6">
            SOfE Resource <span className="text-[#C8102E] italic">Center</span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
            Everything you need to craft a winning presentation. Access official guidelines, study previous global champions, and review the judging criteria.
          </p>
        </div>

        <EngineeringDivider />

        {/* Downloads & Guidelines */}
        <div className="mt-16 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Download className="text-[#C8102E]" size={24} />
            <h2 className="text-3xl font-display text-white">Official Guidelines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officialDownloads.map((doc, idx) => (
              <a 
                key={idx} 
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-[#181818] border border-white/10 hover:border-[#C8102E]/50 rounded-xl transition-all group flex items-start gap-5"
              >
                <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-neutral-400 group-hover:text-[#C8102E] group-hover:bg-[#C8102E]/10 transition-colors">
                  {doc.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#C8102E] transition-colors flex items-center gap-2">
                    {doc.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Preparation Tips */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="text-[#C8102E]" size={24} />
            <h2 className="text-3xl font-display text-white">Preparation Materials & Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prepMaterials.map((tip, idx) => (
              <div key={idx} className="p-6 bg-[#181818]/50 border border-white/5 rounded-xl border-l-4 border-l-[#C8102E]">
                <h3 className="text-xl font-display text-white mb-3 flex items-center gap-3">
                  <span className="text-[#C8102E] font-mono text-sm">0{idx + 1}</span>
                  {tip.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <EngineeringDivider />

        {/* Previous Winners Grid */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Video className="text-[#C8102E]" size={24} />
            <h2 className="text-3xl font-display text-white">Watch Previous Pitches</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {previousWinners.map((winner, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#181818] border border-white/10 relative">
                  <iframe
                    src={winner.embedUrl}
                    title={winner.name}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF4D6D] bg-[#C8102E]/10 px-2 py-0.5 rounded border border-[#C8102E]/20">
                      {winner.type}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">{winner.year}</span>
                  </div>
                  <h3 className="text-lg font-display text-white leading-snug">{winner.name}</h3>
                  <p className="text-neutral-400 text-sm mt-1">{winner.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
