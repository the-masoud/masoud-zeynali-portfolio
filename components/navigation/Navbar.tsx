"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, FileText, Info } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeNoticeOpen, setResumeNoticeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu or dialog on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setResumeNoticeOpen(false);
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
              aria-label="Masoud Zeynali Home"
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
              <button
                type="button"
                onClick={() => setResumeNoticeOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border border-border-panel bg-canvas-900/90 text-fg-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-canvas-850 transition-all focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label="View Resume Information"
              >
                <FileText className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setResumeNoticeOpen(true)}
                className="p-2 text-xs font-mono rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label="Resume Information"
              >
                <FileText className="w-4 h-4" />
              </button>

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
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeNoticeOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono rounded border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume Credentials</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Non-destructive Resume Modal Notice */}
      {resumeNoticeOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-notice-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md bg-canvas-900 border border-border-panel rounded-lg p-6 shadow-2xl telemetry-corners">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-accent-cyan font-mono text-sm font-semibold">
                <Info className="w-4 h-4" />
                <span id="resume-notice-title">CREDENTIALS & RESUME</span>
              </div>
              <button
                type="button"
                onClick={() => setResumeNoticeOpen(false)}
                className="text-fg-muted hover:text-fg-primary p-1 rounded focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed font-sans mb-5">
              The verified curriculum vitae, certifications, and technical credentials for{" "}
              <strong className="text-fg-primary">Masoud Zeynali</strong> are scheduled for release during Phase 6. For immediate professional inquiries, please reach out directly via the contact channel.
            </p>

            <div className="p-3 bg-canvas-950 border border-border-subtle rounded text-xs font-mono text-fg-muted mb-5">
              <div className="flex justify-between">
                <span>SECTION:</span>
                <span className="text-accent-cyan">VERIFIED CREDENTIALS</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>ROADMAP STAGE:</span>
                <span>PHASE 6 [CREDENTIALS & RESUME]</span>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setResumeNoticeOpen(false)}
                className="px-4 py-2 text-xs font-mono rounded bg-canvas-800 hover:bg-canvas-700 text-fg-primary border border-border-subtle transition-colors focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
