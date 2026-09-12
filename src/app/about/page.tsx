import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Award, BookOpen, Users, Compass } from "lucide-react";
import { chapterInfo } from "@/data/mock";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="font-sans text-xs tracking-widest uppercase font-semibold text-primary mb-4">
            Institutional Heritage & Identity
          </p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">About Our Chapter</h1>
          <p className="text-foreground/80 text-xl leading-relaxed">
            The official student branch of the Institution of Mechanical Engineers at Khulna University of Engineering & Technology (KUET), dedicated to cultivating world-class engineering leaders.
          </p>
        </div>

        {/* Core Narrative / Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-28 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl leading-snug">
              A student-run society advancing mechanical innovation at KUET.
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Based at the renowned Department of Mechanical Engineering at KUET, the IMechE KUET Student Chapter unites dedicated student engineers, over 200 alumni, and faculty mentors. We are a non-profit, student-administered technical society operating in close collaboration with professors and industry leaders.
            </p>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Operating under the global banner <strong className="text-primary font-semibold">&ldquo;Improving the world through engineering&rdquo;</strong>, our members actively participate in CAD design battles, robotics prototyping, research seminars, thermal plant visits, and leadership development.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#181818] p-8 md:p-12 text-white border border-white/10 rounded-lg shadow-xl space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <span className="text-xs uppercase font-mono text-neutral tracking-widest block mb-1">Global Institution</span>
              <h3 className="font-display text-2xl text-white mb-2">Institution of Mechanical Engineers</h3>
              <p className="text-neutral text-sm leading-relaxed">
                Founded in the United Kingdom in 1847 by George Stephenson, IMechE is one of the world&apos;s oldest and most prestigious professional engineering institutions, with over 120,000 members spanning 140 countries.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="font-display text-3xl text-primary block mb-1">2015</span>
                <span className="text-xs font-mono uppercase text-neutral">First Chapter Formed</span>
              </div>
              <div>
                <span className="font-display text-3xl text-white block mb-1">200+</span>
                <span className="text-xs font-mono uppercase text-neutral">Alumni</span>
              </div>
              <div>
                <span className="font-display text-3xl text-white block mb-1">50+</span>
                <span className="text-xs font-mono uppercase text-neutral">Active Members</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Missions */}
        <div className="mb-32">
          <div className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-primary font-semibold mb-2">Our Guiding Objectives</p>
            <h2 className="font-display text-4xl md:text-5xl">The Core Missions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chapterInfo.missions.map((mission) => (
              <div key={mission.num} className="p-8 md:p-10 border border-secondary/25 bg-[#181818] shadow-lg reticle-corner engineering-card text-white">
                <div className="w-12 h-12 rounded-full bg-primary/15 text-primary border border-primary/30 flex items-center justify-center font-display text-xl font-bold mb-6">
                  {mission.num}
                </div>
                <h3 className="font-display text-2xl mb-4 text-white">{mission.title}</h3>
                <p className="text-neutral leading-relaxed text-sm">{mission.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Section: KUET & Department */}
        <div className="mb-32 p-8 md:p-16 bg-[#181818] border border-secondary/25 rounded-xl text-white shadow-xl reticle-corner bg-cad-grid relative overflow-hidden">
          {/* Top Header Row with Logo Badge */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 pb-10 border-b border-white/10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded text-xs font-mono tracking-widest uppercase text-[#FF4D6D] font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Alma Mater & Host Institution
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                Khulna University of Engineering & Technology
              </h2>
              <p className="text-neutral text-base md:text-lg leading-relaxed">
                Founded in 1967 as Khulna Engineering College and elevated to an autonomous public university in 2003, KUET stands as one of Bangladesh&apos;s premier centers for engineering education, advanced technological research, and industrial innovation.
              </p>
            </div>

            {/* Official KUET Seal Telemetry Card */}
            <div className="shrink-0 flex items-center gap-5 p-5 bg-[#202020]/90 border border-white/15 rounded-xl shadow-2xl backdrop-blur-md reticle-corner">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-lg p-2.5 flex items-center justify-center border border-white/10 shrink-0">
                <img 
                  src="/kuet-logo.png" 
                  alt="Khulna University of Engineering & Technology (KUET) Official Seal" 
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">ACCREDITED PUBLIC UNIVERSITY</span>
                <h4 className="font-display text-xl text-white">KUET</h4>
                <span className="text-xs text-neutral block font-mono">Fulbarigate, Khulna-9203</span>
                <span className="text-[11px] font-mono text-neutral/70 block mt-1">22.8998° N, 89.5024° E</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/10">
            <div>
              <span className="font-display text-3xl sm:text-4xl text-primary block mb-1">1967</span>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral">Foundation Origin</span>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl text-white block mb-1">101 Acres</span>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral">Lush Green Campus</span>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl text-white block mb-1">20+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral">Depts & Institutes</span>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl text-white block mb-1">IEB / BAETE</span>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral">Washington Accord</span>
            </div>
          </div>

          {/* Detailed Content Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#202020]/70 border border-white/10 rounded-xl reticle-corner">
              <span className="text-xs font-mono text-primary font-bold block mb-2">01 // CAMPUS & HERITAGE</span>
              <h3 className="font-display text-xl mb-3 text-white">The University Landscape</h3>
              <p className="text-neutral text-sm leading-relaxed mb-3">
                Located on a picturesque 101-acre campus in the industrial hub of Khulna, KUET has evolved through three historical eras: Khulna Engineering College (1967), Bangladesh Institute of Technology (BIT) Khulna (1986), and finally an autonomous public engineering university in 2003.
              </p>
              <p className="text-neutral text-xs leading-relaxed font-mono text-neutral/80">
                Home to modern residential halls, computing centers, and interdisciplinary innovation hubs.
              </p>
            </div>

            <div className="p-6 bg-[#202020]/70 border border-white/10 rounded-xl reticle-corner">
              <span className="text-xs font-mono text-primary font-bold block mb-2">02 // FACULTY OF MECHANICAL ENG.</span>
              <h3 className="font-display text-xl mb-3 text-white">Academic Home</h3>
              <p className="text-neutral text-sm leading-relaxed mb-3">
                The Faculty of Mechanical Engineering (FME) is the academic powerhouse nurturing our chapter. It encompasses diverse mechanical disciplines: Mechanical (ME), Industrial Engineering & Management (IEM), Energy Science & Engineering (ESE), Mechatronics (MTE), Chemical (ChE), and Materials Science (MSE).
              </p>
              <p className="text-neutral text-xs leading-relaxed font-mono text-neutral/80">
                ME Dept (Est. 1967) serves as the official patron of IMechE KUET Student Chapter.
              </p>
            </div>

            <div className="p-6 bg-[#202020]/70 border border-white/10 rounded-xl reticle-corner">
              <span className="text-xs font-mono text-primary font-bold block mb-2">03 // RESEARCH & ALUMNI</span>
              <h3 className="font-display text-xl mb-3 text-white">Global Reach & Rigor</h3>
              <p className="text-neutral text-sm leading-relaxed mb-3">
                The department operates specialized laboratories in Heat Engines, Fluid Dynamics, Material Testing, Machine Tools, CAD/CAM, and Robotics.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral">
                {["Chartered Engineers (CEng) & IEB Professional Fellows", "Global Aerospace & Automotive R&D Leaders", "Supercritical Thermal Energy & CFD Specialists"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-primary shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ready to Make an Impact Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#121212] text-white p-10 md:p-16 rounded-xl border border-white/10">
          <div>
            <h2 className="font-display text-4xl mb-4">Ready to engineer the future?</h2>
            <p className="text-neutral text-lg mb-8 leading-relaxed">
              Join dedicated mechanical engineering students at KUET taking their technical capability and leadership beyond textbook boundaries.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-medium hover:bg-primary/90 transition-all text-sm uppercase tracking-widest"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="p-4 border-l border-primary/60 bg-white/5">
              <span className="font-mono text-xs text-primary block uppercase">CAD & Prototyping</span>
              <p className="text-sm text-white/90">Hands-on SolidWorks, ANSYS simulation, and 3D printing competitions.</p>
            </div>
            <div className="p-4 border-l border-primary/60 bg-white/5">
              <span className="font-mono text-xs text-primary block uppercase">Industry Plant Tours</span>
              <p className="text-sm text-white/90">Direct excursions to major thermal power stations, docks, and factories.</p>
            </div>
            <div className="p-4 border-l border-primary/60 bg-white/5">
              <span className="font-mono text-xs text-primary block uppercase">Professional Network</span>
              <p className="text-sm text-white/90">Direct mentoring from KUET ME alumni holding international CEng credentials.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
