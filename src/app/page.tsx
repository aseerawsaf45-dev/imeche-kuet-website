"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Users, BookOpen, Compass, Briefcase, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import HeroEngineeringLogo from "@/components/ui/HeroEngineeringLogo";
import { EngineeringDivider } from "@/components/ui/EngineeringDivider";
import { events } from "@/data/mock";

export default function Home() {
  const featuredEvents = events.slice(0, 4);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-[#111] text-white pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-blueprint-dark">
        {/* Ambient Subtle Background Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Ambient Background Watermark Gear (Left) */}
        <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] opacity-[0.04] pointer-events-none animate-spin-counterclockwise-slow svg-origin-center">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-white">
            <circle cx="100" cy="100" r="90" strokeWidth="2" strokeDasharray="8 4" />
            <circle cx="100" cy="100" r="70" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="30" strokeWidth="2" />
          </svg>
        </div>

        <div className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <StaggerContainer className="lg:col-span-7 flex flex-col justify-center">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/50 rounded-full backdrop-blur-sm bg-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-primary font-sans font-semibold tracking-[0.2em] uppercase text-xs">
                  IMechE KUET Student Chapter
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
                Engineering the <br />
                <span className="text-primary italic">Future,</span> One <br />
                Idea at a Time.
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <div className="max-w-xl mb-10">
                <p className="text-base sm:text-lg md:text-xl text-light-gray/80 font-sans leading-relaxed">
                  Based at the Department of Mechanical Engineering, Khulna University of Engineering & Technology. Empowering 500+ student engineers through technical excellence, CAD innovation, robotics, and global career pathways.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link href="/about" className="group relative px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all overflow-hidden flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
                  Explore Our Chapter 
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/join" className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/5 transition-all">
                  Join the Community
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Column: Prominent Animated Engineering Logo & HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroEngineeringLogo className="w-[320px] sm:w-[420px] lg:w-[460px] xl:w-[500px]" />
          </div>
        </div>
        
        <ScrollReveal delay={0.6} className="absolute bottom-6 right-12 text-xs text-neutral-gray font-mono hidden lg:block tracking-widest z-20">
          KUET &middot; KHULNA, BANGLADESH &middot; 22.8998° N, 89.5024° E
        </ScrollReveal>
      </section>

      {/* Technical Calibrated Divider */}
      <EngineeringDivider label="TELEMETRY 01 // HERITAGE & ORIGIN" />

      {/* 2. INTRODUCTION */}
      <section className="py-28 px-6 md:px-12 lg:px-20 bg-background text-foreground overflow-hidden">
        <ScrollReveal className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs tracking-widest uppercase font-semibold text-primary mb-4">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A student community built around engineering, curiosity, and impact.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6 max-w-2xl">
              We foster a culture of mechanical engineering excellence, professional development, and collaborative innovation among students at Khulna University of Engineering & Technology (KUET). Our goal is to bridge the gap between academic theory and industry reality.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8 max-w-2xl">
              Guided by the global institutional vision <span className="text-primary font-semibold">&ldquo;Improving the world through engineering&rdquo;</span>, our members spearhead technical workshops, competitive robotics prototypes, industrial plant tours, and professional networking forums.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 w-fit">
              Discover our mission & heritage <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Technical Calibrated Divider */}
      <EngineeringDivider label="METRICS 02 // CHAPTER BENCHMARKS" />

      {/* 3. IMPACT STATISTICS */}
      <section className="py-24 bg-[#101010] text-white bg-cad-grid relative overflow-hidden">
        <StaggerContainer className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 relative z-10">
          <StaggerItem className="flex flex-col border-l border-primary/60 pl-6">
            <span className="font-display text-5xl md:text-7xl mb-2 text-white">500+</span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-gray">Active Members</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col border-l border-primary/60 pl-6">
            <span className="font-display text-5xl md:text-7xl mb-2 text-white">1967</span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-gray">ME Dept Heritage</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col border-l border-primary/60 pl-6">
            <span className="font-display text-5xl md:text-7xl mb-2 text-white">20+</span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-gray">Annual Initiatives</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col border-l border-primary/60 pl-6">
            <span className="font-display text-5xl md:text-7xl mb-2 text-white">120K+</span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-gray">Global IMechE Network</span>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Technical Calibrated Divider */}
      <EngineeringDivider label="ARCHITECTURE 03 // CORE MISSIONS" />

      {/* 4. WHAT WE DO (OUR MISSION PILLARS) */}
      <section className="py-28 px-6 md:px-12 lg:px-20 bg-background text-foreground overflow-hidden">
        <div className="container mx-auto">
          <ScrollReveal className="mb-20">
            <h2 className="font-display text-4xl md:text-6xl mb-6">Our Core Missions</h2>
            <div className="w-24 h-1 bg-primary" />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                num: "01", 
                title: "Technical Mastery & CAD", 
                desc: "Equipping KUET mechanical engineers with hands-on proficiency in CAD, FEA simulations, robotics, and advanced machine shop manufacturing.", 
                icon: <BookOpen className="text-primary mb-6" size={32} strokeWidth={1.5} /> 
              },
              { 
                num: "02", 
                title: "Corporate & Industry Link", 
                desc: "Connecting KUET undergraduates directly with premier national and multinational industries for factory internships, placement, and technical site visits.", 
                icon: <Briefcase className="text-primary mb-6" size={32} strokeWidth={1.5} /> 
              },
              { 
                num: "03", 
                title: "Faculty & Lab Research", 
                desc: "Fostering collaboration between departmental labs, faculty researchers, and student engineering teams in thermofluids and applied mechanics.", 
                icon: <Users className="text-primary mb-6" size={32} strokeWidth={1.5} /> 
              },
              { 
                num: "04", 
                title: "Global CEng Pathway", 
                desc: "Mentoring student engineers along the international IMechE UK-SPEC accreditation framework toward Chartered Engineer (CEng) standing.", 
                icon: <Compass className="text-primary mb-6" size={32} strokeWidth={1.5} /> 
              },
            ].map((item) => (
              <StaggerItem key={item.num} className="group relative border border-secondary/25 bg-[#181818] p-8 hover:bg-[#202020] hover:border-primary/50 transition-all cursor-pointer reticle-corner engineering-card shadow-lg text-white">
                {item.icon}
                <span className="text-xs font-mono text-primary mb-4 block font-semibold">{item.num}</span>
                <h3 className="font-display text-2xl mb-4 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-neutral text-sm leading-relaxed">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Calibrated Divider */}
      <EngineeringDivider label="OPERATIONS 04 // INITIATIVES & WORKSHOPS" />

      {/* 5. FEATURED CHAPTER EVENTS */}
      <section className="py-28 px-6 md:px-12 lg:px-20 bg-[#101010] text-white border-t border-white/10 bg-cad-grid overflow-hidden">
        <div className="container mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-primary mb-4">Activities & Forums</p>
              <h2 className="font-display text-4xl md:text-6xl text-white">Chapter Highlights</h2>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 font-medium text-white/90 hover:text-primary transition-colors pb-2 border-b border-white/30 hover:border-primary">
              View all initiatives <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <StaggerContainer className="flex flex-col gap-0 border-y border-white/10">
            {featuredEvents.map((event) => (
              <StaggerItem key={event.id}>
                <Link href={`/events/${event.id}`} className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors px-6 reticle-corner bg-[#141414] text-white">
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <span className="font-display text-2xl md:text-3xl text-white">{event.date}</span>
                    <span className="font-mono text-sm text-neutral">{event.year}</span>
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <span className="text-xs uppercase tracking-widest font-semibold text-primary font-mono">{event.category}</span>
                    <span className="text-xs text-neutral mt-1">{event.venue}</span>
                  </div>
                  <div className="md:col-span-6 flex flex-col justify-center">
                    <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-primary transition-colors mb-2">{event.title}</h3>
                    <p className="text-sm text-neutral line-clamp-1">{event.description}</p>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-end">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Calibrated Divider */}
      <EngineeringDivider label="EDITORIAL 05 // KUET MECHANICAL DIGEST" />

      {/* 6. NEWSLETTER / TECHNICAL SPOTLIGHT */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#151515] text-white border-t border-white/10 bg-cad-grid relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-widest uppercase text-primary font-semibold block mb-3">
              KUET Student Publication
            </span>
            <h2 className="font-display text-3xl sm:text-5xl mb-6 text-white">
              Where KUET Engineers Get Their News.
            </h2>
            <p className="text-neutral text-lg leading-relaxed mb-6 max-w-xl">
              Curated by mechanical engineering students at KUET for a crisp weekly read. Covering CAD modeling tips, lab discoveries, thermal plant insights, and career updates from top alumni.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1 font-mono">🔥 Tech Insights</h4>
                <p className="text-xs text-neutral">SolidWorks, ANSYS simulation, and robotics design blueprints.</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1 font-mono">🎫 Exclusive Events</h4>
                <p className="text-xs text-neutral">Never miss industrial excursions, seminars, and CAD challenges.</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1 font-mono">🏛️ Around Campus</h4>
                <p className="text-xs text-neutral">Stay updated with research projects and mechanical lab news.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#1a1a1a] p-8 sm:p-10 rounded-xl text-white shadow-2xl border border-white/15 engineering-card">
            <h3 className="font-display text-2xl mb-2 text-white">Subscribe to the Digest</h3>
            <p className="text-sm text-neutral mb-6">Join hundreds of KUET engineers advancing their technical career.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name (e.g. Tanvir Hasan)"
                className="w-full px-4 py-3 bg-[#242424] border border-white/10 text-white rounded text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Student Email (e.g. roll@stud.kuet.ac.bd)"
                className="w-full px-4 py-3 bg-[#242424] border border-white/10 text-white rounded text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-primary text-white font-medium hover:bg-primary/90 transition-all uppercase tracking-widest text-xs rounded shadow-lg shadow-primary/25"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. JOIN US CTA */}
      <section className="py-32 bg-[#111] text-white overflow-hidden relative bg-blueprint-dark">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <ScrollReveal className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8">
            Build. Learn. <span className="text-primary italic">Lead.</span>
          </h2>
          <p className="text-xl md:text-2xl text-light-gray/70 max-w-2xl mx-auto mb-12 font-sans">
            Become part of a premier community where mechanical engineering meets opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/join" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 font-medium hover:bg-primary/90 transition-all text-lg shadow-xl shadow-primary/30">
              Join IMechE KUET Student Chapter
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 text-white hover:text-primary transition-colors font-medium">
              Learn about our heritage <ChevronRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
