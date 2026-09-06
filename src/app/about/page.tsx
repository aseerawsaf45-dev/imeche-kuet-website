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
              Based at the renowned Department of Mechanical Engineering at KUET, the IMechE KUET Student Chapter unites over <strong className="text-foreground font-semibold">500 active student members</strong>. We are a non-profit, student-administered technical society operating in close collaboration with faculty professors and industry professionals.
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

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="font-display text-4xl text-primary block mb-1">1967</span>
                <span className="text-xs font-mono uppercase text-neutral">ME Dept Founded</span>
              </div>
              <div>
                <span className="font-display text-4xl text-white block mb-1">500+</span>
                <span className="text-xs font-mono uppercase text-neutral">Active KUET Members</span>
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
        <div className="mb-32 p-8 md:p-16 bg-[#181818] border border-secondary/25 rounded-xl text-white shadow-xl reticle-corner bg-cad-grid">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-primary font-semibold mb-2">Academic Excellence</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6 text-white">Department of Mechanical Engineering, KUET</h2>
            <p className="text-neutral leading-relaxed text-lg">
              The Department of Mechanical Engineering at Khulna University of Engineering & Technology (KUET) was established in 1967 and stands as one of the most distinguished engineering faculties in the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-10">
            <div>
              <h3 className="font-display text-2xl mb-3 text-white">Advanced Labs & Research</h3>
              <p className="text-neutral text-sm md:text-base leading-relaxed mb-4">
                The department houses state-of-the-art research laboratories in Heat Engines, Fluid Dynamics, Material Testing, Machine Tools, CAD/CAM, and Robotics.
              </p>
              <p className="text-neutral text-sm md:text-base leading-relaxed">
                Our chapter works hand-in-hand with departmental laboratory instructors and researchers to provide students with extracurricular access to computational clusters and prototyping equipment.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3 text-white">Distinguished Global Alumni</h3>
              <p className="text-neutral text-sm md:text-base leading-relaxed mb-4">
                KUET mechanical engineering graduates lead major multinational energy conglomerates, automotive design firms, aerospace research agencies, and academic faculties worldwide.
              </p>
              <ul className="space-y-2 text-sm text-neutral">
                {["Chartered Engineers (CEng) & IEB Professional Fellows", "Thermal Power Plant & Energy Grid Specialists", "Automotive & Aerospace R&D Engineers", "Computational Fluid Dynamics (CFD) Researchers"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" />
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
              Join over 500 fellow mechanical engineering students at KUET taking their technical capability and leadership beyond textbook boundaries.
            </p>
            <Link href="/join" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-medium hover:bg-primary/90 transition-all text-sm uppercase tracking-widest">
              Join IMechE KUET Chapter <ArrowRight size={16} />
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
