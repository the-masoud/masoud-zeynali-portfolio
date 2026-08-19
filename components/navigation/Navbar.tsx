"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, FileText } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-canvas-950/85 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between"
          >
            {/* Brand / Name */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-1 py-0.5"
            >
              <div className="w-8 h-8 rounded bg-canvas-900 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-fg-primary group-hover:text-accent-cyan transition-colors">
                  MASOUD ZEYNALI
                </span>
                <span className="font-mono text-[10px] tracking-widest text-fg-muted uppercase">
                  SYSTEMS ENGINEERING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-7">
              <ul className="flex items-center gap-6 text-sm font-mono text-fg-secondary">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-accent-cyan transition-colors duration-150 py-1 relative group focus-visible:ring-2 focus-visible:ring-accent-cyan rounded"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-cyan transition-all duration-200 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Resume Action */}
              <a
                href="/resume/Masoud_Zeynali_Professional_CV_EN.pdf"
                download="Masoud_Zeynali_Professional_CV_EN.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border border-border-panel bg-canvas-900/90 text-fg-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-canvas-850 transition-all focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label="Download Resume (PDF)"
              >
                <FileText className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="/resume/Masoud_Zeynali_Professional_CV_EN.pdf"
                download="Masoud_Zeynali_Professional_CV_EN.pdf"
                className="p-2 text-xs font-mono rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label="Download Resume (PDF)"
              >
                <FileText className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-fg-primary focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-accent-cyan" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-b border-border-subtle bg-canvas-950/95 backdrop-blur-xl px-6 py-6 transition-all"
          >
            <ul className="flex flex-col gap-4 font-mono text-sm text-fg-secondary mb-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-fg-primary hover:text-accent-cyan hover:pl-2 transition-all border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="/resume/Masoud_Zeynali_Professional_CV_EN.pdf"
                download="Masoud_Zeynali_Professional_CV_EN.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono rounded border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
