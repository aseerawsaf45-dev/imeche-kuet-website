"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Building2, ExternalLink, CheckCircle2, HeartHandshake } from "lucide-react";
import { chapterInfo } from "@/data/mock";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Industry Sponsorship & Partnerships");
  const [message, setMessage] = useState("");

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

            {/* Direct Chair Contact */}
            <div className="p-8 border border-secondary/25 bg-[#181818] rounded-lg reticle-corner text-white shadow-lg">
              <h2 className="font-display text-2xl mb-4 text-white">Direct Chapter Contact</h2>
              <p className="text-sm text-neutral mb-6">
                For corporate event partnerships, factory tours, placement inquiries, or official chapter representation, reach out directly to the Chair:
              </p>
              <div className="space-y-4">
                {chapterInfo.contacts.map((c) => (
                  <div key={c.name} className="p-5 bg-[#202020] border border-white/10 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                    <div>
                      <h4 className="font-medium text-white text-lg">{c.name}</h4>
                      <p className="text-xs text-primary font-mono uppercase tracking-wider">{c.role}</p>
                    </div>
                    <div className="text-xs font-mono space-y-1 sm:text-right">
                      <p className="text-white font-medium">{c.phone}</p>
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
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
                  Inquiry Dispatch // Chair Secretariat
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Destination: Chair's Inbox
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">Send a Direct Message</h2>
              <p className="text-neutral text-sm mb-6 leading-relaxed">
                Directly addressed to <strong className="text-white">Tahsin Hossain (Chair)</strong> at <a href="mailto:tahsin.kuetme@gmail.com" className="text-primary hover:underline font-mono">tahsin.kuetme@gmail.com</a>.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center space-y-4">
                  <CheckCircle2 size={44} className="text-emerald-400 mx-auto" />
                  <h3 className="font-display text-2xl text-white">Dispatched to Chair's Email</h3>
                  <p className="text-sm text-neutral max-w-md mx-auto leading-relaxed">
                    Your transmission has been formatted and routed to <strong className="text-white">tahsin.kuetme@gmail.com</strong> (Tahsin Hossain, Chair, IMechE KUET).
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=tahsin.kuetme@gmail.com&su=${encodeURIComponent(`[IMechE KUET] ${category} - ${name}`)}&body=${encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\nCategory: ${category}\n\nMessage:\n${message}\n\n---\nDispatched via IMechE KUET Portal`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-lg bg-primary hover:bg-[#a60d26] text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30"
                    >
                      <span>Open in Gmail</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={`mailto:tahsin.kuetme@gmail.com?subject=${encodeURIComponent(`[IMechE KUET] ${category} - ${name}`)}&body=${encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\nCategory: ${category}\n\nMessage:\n${message}\n\n---\nDispatched via IMechE KUET Portal`)}`}
                      className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all border border-white/15"
                    >
                      <Mail size={14} />
                      <span>Default Mail Client</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="text-xs font-mono text-neutral hover:text-white underline pt-4 block mx-auto transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const emailSubject = encodeURIComponent(`[IMechE KUET] ${category} - ${name}`);
                    const emailBody = encodeURIComponent(
                      `Sender Name: ${name}\nSender Email: ${email}\nInquiry Category: ${category}\n\nMessage:\n${message}\n\n---\nTransmitted via IMechE KUET Official Website`
                    );
                    const mailtoUrl = `mailto:tahsin.kuetme@gmail.com?subject=${emailSubject}&body=${emailBody}`;
                    window.location.href = mailtoUrl;
                    setSubmitted(true);
                  }} 
                  className="space-y-4 text-sm"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-1.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g. Engr. Tanvir Rahman"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-1.5" htmlFor="email">
                      Your Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option>Industry Sponsorship & Partnerships</option>
                      <option>Technical Seminar / Keynote Proposal</option>
                      <option>Student Recruitment & Internship Opportunity</option>
                      <option>Competition Inquiry & Mentorship</option>
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Outline your proposal or question..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-white font-medium hover:bg-[#a60d26] transition-all uppercase tracking-widest text-xs rounded shadow-lg shadow-primary/30 flex items-center justify-center gap-2 font-mono"
                    >
                      <Mail size={16} />
                      <span>Transmit Directly to Chair (tahsin.kuetme@gmail.com)</span>
                    </button>
                    <span className="text-[11px] font-mono text-neutral/70 block text-center mt-2">
                      Routing target: Tahsin Hossain (Chair, IMechE KUET)
                    </span>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 text-xs font-mono text-neutral flex items-center justify-between">
              <span>SYS.ID: KUET-IMechE-2026</span>
              <span className="text-primary font-semibold">RECIPIENT: CHAIR</span>
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
