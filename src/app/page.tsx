"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Users, BookOpen, Compass, Briefcase, Sparkles, Mail, MapPin, Building2, CheckCircle2, ExternalLink } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import HeroEngineeringLogo from "@/components/ui/HeroEngineeringLogo";
import { EngineeringDivider } from "@/components/ui/EngineeringDivider";
import { events, chapterInfo } from "@/data/mock";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [homeName, setHomeName] = useState("");
  const [homeEmail, setHomeEmail] = useState("");
  const [homeCategory, setHomeCategory] = useState("Corporate Sponsorship & Collaboration");
  const [homeMessage, setHomeMessage] = useState("");
  // Highlight only recent or current active events
  const currentEvents = events.filter((e) => e.registrationStatus === "OPEN");
  const highlightedEvents = currentEvents.length > 0 ? currentEvents : events.slice(0, 1);

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
                  Based at the Department of Mechanical Engineering, Khulna University of Engineering & Technology. Empowering student engineers through technical excellence, CAD innovation, robotics, and global career pathways.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link href="/about" className="group relative px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all overflow-hidden flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
                  Explore Our Chapter 
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/5 transition-all"
                >
                  Explore Events
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
            <span className="font-display text-5xl md:text-7xl mb-2 text-white">2015</span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-gray">First Student Chapter Formed</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col border-l border-primary/60 pl-6">
            <span className="font-display text-5xl md:text-7xl mb-2 text-white">200+</span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-gray">Alumni</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col border-l border-primary/60 pl-6">
            <span className="font-display text-5xl md:text-7xl mb-2 text-white">50+</span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-gray">Active Members</span>
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
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://www.facebook.com/IMechE.KUET/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1877F2]/40 bg-[#1877F2]/10 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white hover:bg-[#1877F2]/20 hover:border-[#1877F2]/60 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse" />
                <span>Facebook Events</span>
                <ExternalLink size={13} className="text-[#1877F2]" />
              </a>
              <Link href="/events" className="inline-flex items-center gap-2 font-medium text-white/90 hover:text-primary transition-colors pb-1 border-b border-white/30 hover:border-primary">
                View all initiatives <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-col gap-4">
            {highlightedEvents.map((event) => (
              <StaggerItem key={event.id}>
                <Link 
                  href={`/events/${event.id}`} 
                  className="group block p-7 sm:p-9 border border-primary/30 hover:border-primary/70 rounded-2xl bg-gradient-to-br from-[#181818] via-[#141414] to-[#121212] transition-all reticle-corner shadow-2xl hover:shadow-primary/10 relative overflow-hidden text-white"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    <div className="lg:col-span-2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6">
                      <span className="font-display text-2xl sm:text-3xl text-white tracking-tight">{event.date}</span>
                      <span className="font-mono text-xs text-neutral tracking-widest uppercase">{event.year}</span>
                    </div>
                    
                    <div className="lg:col-span-8 flex flex-col justify-center space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xs uppercase tracking-widest font-semibold text-primary font-mono px-2.5 py-0.5 rounded bg-primary/10 border border-primary/25">
                          {event.category}
                        </span>
                        <span className="text-[11px] uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Event &middot; Registration Open
                        </span>
                      </div>
                      
                      <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-neutral line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral/80 pt-1 font-mono">
                        {event.venue && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-primary" />
                            {event.venue}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-2 flex items-center justify-start lg:justify-end">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-mono uppercase tracking-wider font-semibold group-hover:bg-[#a60d26] transition-colors shadow-lg shadow-primary/20">
                        <span>Details</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Prompt to view historical archives */}
          <div className="mt-8 flex items-center justify-end">
            <Link 
              href="/events" 
              className="text-xs font-mono text-neutral hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Looking for past symposiums and technical workshops?</span>
              <span className="text-primary underline ml-1">Browse Past Archives &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Calibrated Divider */}
      <EngineeringDivider label="COMMUNICATION 05 // DIRECT TRANSMISSION & SECRETARIAT" />

      {/* 6. CONTACT US SECTION */}
      <section id="contact" className="py-28 px-6 md:px-12 lg:px-20 bg-[#151515] text-white border-t border-white/10 bg-cad-grid relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info & Secretariat */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded text-xs font-mono tracking-widest uppercase text-[#FF4D6D] font-semibold mb-4">
                  <Building2 size={14} />
                  Communication Hub &middot; KUET Chapter
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-neutral text-base md:text-lg leading-relaxed">
                  Have inquiries regarding corporate sponsorships, industrial excursions, technical seminars, or student chapter activities? Connect directly with our executive committee.
                </p>
              </div>

              {/* Physical Secretariat Card */}
              <div className="p-6 sm:p-8 bg-[#1a1a1a] border border-white/10 rounded-2xl reticle-corner shadow-xl">
                <h3 className="font-display text-xl text-white mb-4 flex items-center gap-2">
                  <MapPin className="text-primary shrink-0" size={20} />
                  Chapter Secretariat
                </h3>
                <p className="text-sm text-neutral leading-relaxed mb-6">
                  Department of Mechanical Engineering<br />
                  Mechanical Engineering Complex, KUET<br />
                  Khulna-9203, Bangladesh
                </p>
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <a href={`mailto:${chapterInfo.email}`} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <Mail size={14} className="text-primary" />
                    {chapterInfo.email}
                  </a>
                  <span className="text-neutral/70">22.8998° N, 89.5024° E</span>
                </div>
              </div>

              {/* Direct Leadership Contact */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral block">
                  Chapter Leadership
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {chapterInfo.contacts.map((c) => (
                    <div key={c.name} className="p-5 bg-[#1a1a1a] border border-white/10 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white text-base">{c.name}</p>
                        <p className="text-primary text-xs font-mono uppercase mt-0.5">{c.role}</p>
                      </div>
                      <div className="text-xs font-mono space-y-1 sm:text-right">
                        <p className="text-white font-medium">{c.phone}</p>
                        <a href={`mailto:${c.email}`} className="text-primary hover:underline block text-xs">
                          {c.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick External Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#C8102E] text-white hover:bg-[#A00D24] text-xs font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#C8102E]/25"
                >
                  Full Directory & Partnerships <ArrowRight size={14} />
                </Link>
                <a
                  href={chapterInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-white/5 border border-white/15 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider rounded transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={chapterInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-white/5 border border-white/15 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider rounded transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Quick Transmission Form */}
            <div className="lg:col-span-6 bg-[#1a1a1a] p-8 sm:p-12 rounded-2xl border border-white/15 shadow-2xl reticle-corner engineering-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
                  Inquiry Dispatch // Direct Route
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Target: Chair's Inbox
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">Send a Direct Message</h3>
              <p className="text-sm text-neutral mb-6 leading-relaxed">
                Transmitted directly to <strong className="text-white">Tahsin Hossain (Chair, IMechE KUET)</strong> at <a href="mailto:tahsin.kuetme@gmail.com" className="text-primary hover:underline font-mono">tahsin.kuetme@gmail.com</a>.
              </p>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-8">
                  <CheckCircle2 size={44} className="text-emerald-400 mx-auto" />
                  <h4 className="font-display text-2xl text-white">Dispatched to Chair's Email</h4>
                  <p className="text-xs text-neutral max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been addressed to <strong className="text-white">tahsin.kuetme@gmail.com</strong> (Tahsin Hossain, Chair).
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=tahsin.kuetme@gmail.com&su=${encodeURIComponent(`[IMechE KUET] ${homeCategory} - ${homeName}`)}&body=${encodeURIComponent(`Sender Name: ${homeName}\nSender Email: ${homeEmail}\nCategory: ${homeCategory}\n\nMessage:\n${homeMessage}\n\n---\nDispatched via IMechE KUET Portal`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-primary hover:bg-[#a60d26] text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30"
                    >
                      <span>Open in Gmail</span>
                      <ExternalLink size={13} />
                    </a>
                    <a
                      href={`mailto:tahsin.kuetme@gmail.com?subject=${encodeURIComponent(`[IMechE KUET] ${homeCategory} - ${homeName}`)}&body=${encodeURIComponent(`Sender Name: ${homeName}\nSender Email: ${homeEmail}\nCategory: ${homeCategory}\n\nMessage:\n${homeMessage}\n\n---\nDispatched via IMechE KUET Portal`)}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all border border-white/15"
                    >
                      <Mail size={13} />
                      <span>Mail Client</span>
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setHomeName("");
                      setHomeEmail("");
                      setHomeMessage("");
                    }}
                    className="text-xs font-mono text-neutral hover:text-white underline pt-3 block mx-auto transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const emailSubject = encodeURIComponent(`[IMechE KUET] ${homeCategory} - ${homeName}`);
                    const emailBody = encodeURIComponent(
                      `Sender Name: ${homeName}\nSender Email: ${homeEmail}\nCategory: ${homeCategory}\n\nMessage:\n${homeMessage}\n\n---\nTransmitted via IMechE KUET Website Homepage`
                    );
                    const mailtoUrl = `mailto:tahsin.kuetme@gmail.com?subject=${emailSubject}&body=${emailBody}`;
                    window.location.href = mailtoUrl;
                    setFormSubmitted(true);
                  }} 
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral mb-1.5">Full Name</label>
                      <input
                        required
                        type="text"
                        value={homeName}
                        onChange={(e) => setHomeName(e.target.value)}
                        placeholder="e.g. Engr. Tanvir Hasan"
                        className="w-full px-4 py-3 bg-[#242424] border border-white/10 text-white rounded text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral mb-1.5">Your Email</label>
                      <input
                        required
                        type="email"
                        value={homeEmail}
                        onChange={(e) => setHomeEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-[#242424] border border-white/10 text-white rounded text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral mb-1.5">Inquiry Category</label>
                    <select
                      value={homeCategory}
                      onChange={(e) => setHomeCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-[#242424] border border-white/10 text-white rounded text-sm focus:outline-none focus:border-primary transition-colors"
                    >
                      <option>Corporate Sponsorship & Collaboration</option>
                      <option>Technical Seminar / Workshop Collaboration</option>
                      <option>Industrial Excursion & Tour Partnership</option>
                      <option>Student Membership Assistance</option>
                      <option>General Inquiries</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral mb-1.5">Message Content</label>
                    <textarea
                      required
                      rows={4}
                      value={homeMessage}
                      onChange={(e) => setHomeMessage(e.target.value)}
                      placeholder="Outline your inquiry or proposal..."
                      className="w-full px-4 py-3 bg-[#242424] border border-white/10 text-white rounded text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-white font-medium hover:bg-[#a60d26] transition-all uppercase tracking-widest text-xs rounded shadow-lg shadow-primary/30 font-mono flex items-center justify-center gap-2"
                    >
                      <Mail size={15} />
                      <span>Transmit Directly to Chair (tahsin.kuetme@gmail.com)</span>
                    </button>
                    <span className="text-[11px] font-mono text-neutral/70 block text-center mt-2">
                      Recipient: Tahsin Hossain (Chair, IMechE KUET) &middot; tahsin.kuetme@gmail.com
                    </span>
                  </div>
                </form>
              )}
            </div>

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
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 font-medium hover:bg-primary/90 transition-all text-lg shadow-xl shadow-primary/30"
            >
              Learn about our heritage <ChevronRight size={18} />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-white hover:text-primary transition-colors font-medium text-lg"
            >
              Contact Chapter Secretariat
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
