"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Building2, ExternalLink, CheckCircle2, HeartHandshake } from "lucide-react";
import { chapterInfo } from "@/data/mock";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="font-sans text-xs tracking-widest uppercase font-semibold text-primary mb-4">
            Connect & Collaborate
          </p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Contact Us</h1>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Reach out to the IMechE KUET Student Chapter for industrial collaborations, competition sponsorships, guest lectures, or student membership inquiries.
          </p>
        </div>

        {/* 1. Core Contact Information & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Column: Office & PR Representatives */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 border border-secondary/25 bg-[#181818] shadow-lg rounded-lg reticle-corner text-white">
              <h2 className="font-display text-2xl mb-6 flex items-center gap-2 text-white">
                <Building2 className="text-primary" size={22} />
                Chapter Secretariat
              </h2>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3 text-neutral">
                  <MapPin className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    IMechE KUET Student Chapter<br />
                    Department of Mechanical Engineering<br />
                    Khulna University of Engineering & Technology (KUET)<br />
                    Khulna-9203, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3 text-neutral">
                  <Mail className="text-primary shrink-0" size={18} />
                  <a href={`mailto:${chapterInfo.email}`} className="text-white hover:text-primary transition-colors">
                    {chapterInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Corporate Liaison Contacts */}
            <div className="p-8 border border-secondary/25 bg-[#181818] rounded-lg reticle-corner text-white shadow-lg">
              <h2 className="font-display text-2xl mb-4 text-white">Corporate & PR Coordinators</h2>
              <p className="text-sm text-neutral mb-6">
                For corporate event partnerships, factory tours, or placement inquiries, reach out to our team leads:
              </p>
              <div className="space-y-4">
                {chapterInfo.contacts.map((c) => (
                  <div key={c.name} className="p-4 bg-[#202020] border border-white/10 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
                    <div>
                      <h4 className="font-medium text-white">{c.name}</h4>
                      <p className="text-xs text-neutral">{c.role}</p>
                    </div>
                    <div className="text-xs font-mono space-y-1 sm:text-right">
                      <p className="text-neutral">{c.phone}</p>
                      <a href={`mailto:${c.email}`} className="text-primary hover:underline block">
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Social Media Links */}
            <div className="p-8 border border-secondary/25 bg-[#181818] rounded-lg reticle-corner text-white shadow-lg">
              <h2 className="font-display text-2xl mb-4 text-white">Official Channels</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <a
                  href={chapterInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 rounded hover:border-primary hover:text-primary transition-all text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/90 font-mono"
                >
                  Facebook Page
                </a>
                <a
                  href={chapterInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 rounded hover:border-primary hover:text-primary transition-all text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/90 font-mono"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6 bg-[#151515] text-white p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl flex flex-col justify-between engineering-card bg-cad-grid">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-2">
                Inquiry Dispatch
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">Send a Direct Message</h2>
              <p className="text-neutral text-sm mb-8 leading-relaxed">
                Whether you represent an industrial partner, an engineering speaker, or an alumnus, get in touch with our executive committee.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-950/40 border border-emerald-500/40 rounded-lg text-center space-y-3">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
                  <h3 className="font-display text-2xl text-white">Message Transmitted</h3>
                  <p className="text-sm text-neutral max-w-md mx-auto">
                    Thank you for contacting IMechE KUET. A member of our executive committee will follow up with you promptly.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }} 
                  className="space-y-5 text-sm"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-1.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g. Engr. Tanvir Rahman"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-1.5" htmlFor="subject">
                      Inquiry Category
                    </label>
                    <select
                      id="subject"
                      className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option>Industry Sponsorship & Partnerships</option>
                      <option>Technical Seminar / Keynote Proposal</option>
                      <option>Student Recruitment & Internship Opportunity</option>
                      <option>General Chapter Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-1.5" htmlFor="message">
                      Message Content
                    </label>
                    <textarea
                      required
                      id="message"
                      rows={4}
                      className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Outline your proposal or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all uppercase tracking-widest text-xs rounded shadow-lg shadow-primary/30 mt-2"
                  >
                    Transmit Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 text-xs font-mono text-neutral">
              SYS.ID: KUET-IMechE-2026 &middot; RESPONSE TIME: &le; 24 HOURS
            </div>
          </div>
        </div>

        {/* 2. SPONSORSHIP & PROTOTYPING SUPPORT */}
        <div className="p-8 md:p-14 bg-[#181818] border border-secondary/25 rounded-xl text-white shadow-xl reticle-corner bg-cad-grid">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-widest mb-2 font-semibold">
              <HeartHandshake size={18} />
              <span>Industry Partnerships</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-4 text-white">Support KUET Student Engineering</h2>
            <p className="text-neutral leading-relaxed text-base">
              Corporate sponsorships empower KUET student teams to build autonomous rovers, attend national competitions, access cutting-edge simulation tools, and receive hands-on machine shop materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div className="p-6 bg-[#202020] border border-white/10 rounded-lg shadow-md space-y-3 reticle-corner text-white">
              <h3 className="font-display text-xl text-white">Sponsorship Inquiries</h3>
              <p className="text-xs text-neutral leading-relaxed">
                We welcome corporate partners interested in branding opportunities, title event sponsorships, and talent pipeline access during our annual CAD battles and tech festivals.
              </p>
              <div className="pt-2 text-xs font-mono text-neutral space-y-1">
                <p>Email: <span className="text-primary">{chapterInfo.email}</span></p>
                <p>Secretariat: Department of Mechanical Engineering, KUET</p>
              </div>
            </div>

            <div className="p-6 bg-[#202020] border border-white/10 rounded-lg shadow-md reticle-corner text-white">
              <h3 className="font-display text-xl text-white mb-3">Where Funds Are Expended</h3>
              <ul className="text-xs text-neutral space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span><strong className="text-white">Student Engineering Competitions:</strong> Hardware components, sensors, machining raw materials, and team travel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span><strong className="text-white">Technical Workshops:</strong> High-performance computing labs, simulation training licenses, and workshop kits.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
