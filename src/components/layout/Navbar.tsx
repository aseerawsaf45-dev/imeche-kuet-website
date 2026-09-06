"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { GlobalSearch } from "./GlobalSearch";

import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "SOfE 2026", href: "/sofe", highlight: true },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-neutral/20 py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center relative z-50">
            <div className="relative h-12 w-64 md:h-14 md:w-72 transition-transform group-hover:scale-[1.02]">
              <Image 
                src="/logo.png" 
                alt="IMechE Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-foreground/80 hover:text-foreground transition-colors overflow-hidden group py-1 flex items-center gap-1.5"
                  >
                    {link.highlight && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                    )}
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-secondary/20 pl-4">
              <GlobalSearch />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_2IW3r4Puhv0D0273WoyeV53JMxprDV3IGy5WsXbDErFXPQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90 hover:-translate-y-0.5"
              >
                Join Us
              </a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
            <GlobalSearch />
            <button
              className="text-foreground p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0, pointerEvents: "auto" },
          closed: { opacity: 0, x: "100%", pointerEvents: "none" },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
      >
        <div className="absolute top-8 left-6">
          <div className="relative h-12 w-64">
            <Image 
              src="/logo.png" 
              alt="IMechE Logo" 
              fill
              className="object-contain object-left"
            />
          </div>
        </div>
        <ul className="flex flex-col items-center gap-8 text-3xl font-display">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_2IW3r4Puhv0D0273WoyeV53JMxprDV3IGy5WsXbDErFXPQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mt-8 inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
