"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Users, Compass } from "lucide-react";
import { chapterInfo } from "@/data/mock";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase font-semibold text-primary mb-4">
            Membership Intake &middot; 2025/2026 Session
          </p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Join IMechE KUET</h1>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Become part of over 500 active student engineers at the Faculty of Mechanical Engineering, Khulna University of Engineering & Technology (KUET). Connect with the global IMechE network, compete internationally, and gain professional CEng mentorship.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-[#151515] border border-secondary/20 rounded-lg shadow-sm reticle-corner engineering-card text-white">
            <Zap className="text-primary mb-3" size={24} />
            <h3 className="font-display text-lg mb-1">International Competitions</h3>
            <p className="text-xs text-neutral leading-relaxed">Participate in Formula Student, SOfE (Speak Out for Engineering), CAD Olympics, and robotics hackathons.</p>
          </div>
          <div className="p-6 bg-[#151515] border border-secondary/20 rounded-lg shadow-sm reticle-corner engineering-card text-white">
            <Compass className="text-primary mb-3" size={24} />
            <h3 className="font-display text-lg mb-1">CEng / IEng Mentorship</h3>
            <p className="text-xs text-neutral leading-relaxed">Direct guidance from KUET mechanical professors and chartered engineers on the UK-standard professional path.</p>
          </div>
          <div className="p-6 bg-[#151515] border border-secondary/20 rounded-lg shadow-sm reticle-corner engineering-card text-white">
            <Users className="text-primary mb-3" size={24} />
            <h3 className="font-display text-lg mb-1">Industrial Tours & Labs</h3>
            <p className="text-xs text-neutral leading-relaxed">Exclusive industrial site visits to Khulna Shipyard, power plants, and access to advanced ME computing labs.</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-[#151515] text-white p-8 md:p-14 border border-white/10 rounded-xl shadow-2xl reticle-corner">
          <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl text-white">Student Registration</h2>
              <p className="text-xs font-mono text-neutral mt-1">ACADEMIC SESSION 2025/2026 INTAKE &middot; FACULTY OF MECHANICAL ENGINEERING, KUET</p>
            </div>
            <div className="px-3 py-1 border border-primary/40 rounded bg-primary/10 text-primary font-mono text-xs w-fit">
              STATUS: REGISTRATION OPEN
            </div>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
              <h3 className="font-display text-3xl">Application Received</h3>
              <p className="text-neutral text-sm max-w-md mx-auto">
                Thank you for applying to join the IMechE KUET Student Chapter. Our Executive Committee will verify your student ID and send orientation details to your KUET webmail.
              </p>
              <div className="pt-4">
                <Link href="/" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                  Return to Homepage <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }} 
              className="space-y-6 text-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-2" htmlFor="fullName">
                    Full Name (As per KUET Records)
                  </label>
                  <input
                    required
                    type="text"
                    id="fullName"
                    className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. Ahmed Shahriar / Sadia Islam"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-2" htmlFor="matrix">
                    KUET Roll / Student ID
                  </label>
                  <input
                    required
                    type="text"
                    id="matrix"
                    className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. 2105024 / 2205089"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-2" htmlFor="kuetEmail">
                    KUET Student Webmail / Personal Email
                  </label>
                  <input
                    required
                    type="email"
                    id="kuetEmail"
                    className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. 2105024@stud.kuet.ac.bd"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-2" htmlFor="phone">
                    WhatsApp Contact Number
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="+880 17XX-XXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-2" htmlFor="department">
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option>Mechanical Engineering (ME)</option>
                    <option>Mechatronics Engineering (MTE)</option>
                    <option>Industrial Engineering & Management (IEM)</option>
                    <option>Energy Science & Engineering (ESE)</option>
                    <option>Chemical Engineering (ChE)</option>
                    <option>Materials Science & Engineering (MSE)</option>
                    <option>Electrical & Electronic Engineering (EEE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-2" htmlFor="year">
                    Current Batch / Academic Year
                  </label>
                  <select
                    id="year"
                    className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option>1st Year (Freshie - Batch &apos;23)</option>
                    <option>2nd Year (Batch &apos;22)</option>
                    <option>3rd Year (Batch &apos;21)</option>
                    <option>4th Year / Final Year (Batch &apos;20)</option>
                    <option>Postgraduate / M.Sc. Eng.</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-neutral mb-2" htmlFor="reason">
                  Why do you wish to join IMechE KUET Student Chapter?
                </label>
                <textarea
                  required
                  id="reason"
                  rows={4}
                  className="w-full bg-[#222] border border-white/15 px-4 py-3 rounded text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your interests in robotics, CAD/FEA design, event management, or competitions like Formula Student and SOfE..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all uppercase tracking-widest text-xs rounded shadow-lg shadow-primary/30 mt-4 font-mono"
              >
                Submit Registration &middot; Join Chapter
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
