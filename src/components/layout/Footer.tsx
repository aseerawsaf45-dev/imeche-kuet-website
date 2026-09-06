import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { chapterInfo } from "@/data/mock";

export function Footer() {
  return (
    <footer className="bg-[#101010] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Background Subtle Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Top */}
        <div className="mb-20 max-w-4xl">
          <div className="relative h-16 w-72 mb-10 bg-white rounded-xl p-4 shadow-sm inline-block">
            <Image 
              src="/logo.png" 
              alt="IMechE Logo" 
              fill
              className="object-contain p-3"
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight">
            Engineering the future starts with a <span className="text-primary italic">community.</span>
          </h2>
          <p className="text-neutral mt-4 text-base max-w-2xl">
            Affiliated with IMechE Bangladesh Group & South Asia Region. Department of Mechanical Engineering, Khulna University of Engineering & Technology (KUET), Khulna-9203, Bangladesh.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/10 pt-16">
          <div>
            <h3 className="text-neutral-gray text-xs font-mono font-semibold tracking-widest uppercase mb-6 text-primary">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-neutral hover:text-white transition-colors">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/sofe" className="text-white hover:text-primary transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> SOfE 2026 Heats</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Chapter Events</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">High Committee & Team</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-gray text-xs font-mono font-semibold tracking-widest uppercase mb-6 text-primary">
              Connect With Us
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <a 
                  href={chapterInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-neutral hover:text-primary transition-colors"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a 
                  href={chapterInfo.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-neutral hover:text-primary transition-colors"
                >
                  Facebook <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${chapterInfo.email}`} 
                  className="flex items-center gap-1.5 text-neutral hover:text-primary transition-colors"
                >
                  Email Us <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-gray text-xs font-mono font-semibold tracking-widest uppercase mb-6 text-primary">
              Membership & Support
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-neutral">
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc_2IW3r4Puhv0D0273WoyeV53JMxprDV3IGy5WsXbDErFXPQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Join Chapter
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Sponsorship & Collaborations</Link></li>
              <li>
                <a 
                  href="https://www.imeche.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Global IMechE HQ <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-gray text-xs font-mono font-semibold tracking-widest uppercase mb-6 text-primary">
              Secretariat
            </h3>
            <div className="space-y-3 text-xs text-neutral leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>Department of Mechanical Engineering, KUET, Khulna-9203</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <span>{chapterInfo.email}</span>
              </p>
              <div className="pt-2">
                <span className="px-2 py-0.5 border border-white/20 rounded font-mono text-[10px] text-white/70">
                  EST. 2015 &middot; 50+ ACTIVE MEMBERS &middot; 200+ ALUMNI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral">
          <p className="font-mono text-white/90">
            IMechE Khulna University of Engineering & Technology Student Chapter
          </p>
          <div className="flex items-center gap-6">
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
