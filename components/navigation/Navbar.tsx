"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, FileText, Globe } from "lucide-react";
import { NavbarData } from "@/lib/i18n/types";

interface NavbarProps {
  data: NavbarData;
}

export const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    navLinks,
    resumeLabel,
    resumeAriaLabel,
    mobileMenuOpenAriaLabel,
    mobileMenuCloseAriaLabel,
    currentLocale,
    langSwitch,
  } = data;

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

  const homeHref = currentLocale === "fa" ? "/fa" : "/";
  const isPersian = currentLocale === "fa";

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-canvas-950/85 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/20"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label={isPersian ? "ناوبری اصلی" : "Main Navigation"}
            className="flex items-center justify-between gap-4"
          >
            {/* Brand / Name (Anchored start/right in RTL, start/left in LTR) */}
            <Link
              href={homeHref}
              className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-1 py-0.5 shrink-0"
            >
              <div className="w-8 h-8 rounded bg-canvas-900 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm sm:text-base font-bold text-fg-primary group-hover:text-accent-cyan transition-colors leading-tight ${
                    isPersian ? "font-sans font-bold" : "font-mono font-bold tracking-wider"
                  }`}
                >
                  {isPersian ? "مسعود زینالی" : "MASOUD ZEYNALI"}
                </span>
                <span
                  className={`text-[10px] text-fg-muted uppercase mt-0.5 ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-widest"
                  }`}
                >
                  {isPersian ? "مهندسی سیستم‌ها" : "SYSTEMS ENGINEERING"}
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <ul
                className={`flex items-center gap-5 lg:gap-7 text-sm text-fg-secondary ${
                  isPersian ? "font-sans font-normal" : "font-mono"
                }`}
              >
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-accent-cyan transition-colors duration-150 py-1 relative group focus-visible:ring-2 focus-visible:ring-accent-cyan rounded"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 start-0 w-0 h-[1px] bg-accent-cyan transition-all duration-200 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Secondary Controls (Language Switch + Resume) */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              {/* Language Switcher (Desktop) */}
              <div
                role="group"
                aria-label={isPersian ? "انتخاب زبان" : "Language selection"}
                className="h-8 flex items-center font-mono text-xs rounded border border-border-panel bg-canvas-900/90 px-2 text-fg-secondary select-none"
              >
                <Globe className="w-3.5 h-3.5 text-accent-cyan me-1.5" aria-hidden="true" />
                {currentLocale === "en" ? (
                  <div className="flex items-center gap-1">
                    <span
                      aria-current="page"
                      className="font-bold text-accent-cyan px-1.5 py-0.5 rounded bg-accent-cyan/10"
                    >
                      EN
                    </span>
                    <span className="text-border-panel select-none">|</span>
                    <a
                      href={langSwitch.faHref}
                      hrefLang="fa"
                      lang="fa"
                      className="px-1.5 py-0.5 rounded hover:text-accent-cyan transition-colors focus-visible:ring-2 focus-visible:ring-accent-cyan"
                      aria-label="تغییر به زبان فارسی"
                    >
                      FA
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-1" dir="ltr">
                    <a
                      href={langSwitch.enHref}
                      hrefLang="en"
                      lang="en"
                      className="px-1.5 py-0.5 rounded hover:text-accent-cyan transition-colors focus-visible:ring-2 focus-visible:ring-accent-cyan"
                      aria-label="Switch to English"
                    >
                      EN
                    </a>
                    <span className="text-border-panel select-none">|</span>
                    <span
                      aria-current="page"
                      className="font-bold text-accent-cyan px-1.5 py-0.5 rounded bg-accent-cyan/10"
                    >
                      FA
                    </span>
                  </div>
                )}
              </div>

              {/* Resume Action */}
              <a
                href="/resume/Masoud_Zeynali_Professional_CV_EN.pdf"
                download="Masoud_Zeynali_Professional_CV_EN.pdf"
                className={`h-8 inline-flex items-center gap-1.5 text-xs px-3 rounded border border-border-panel bg-canvas-900/90 text-fg-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-canvas-850 transition-all focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                  isPersian ? "font-sans font-normal" : "font-mono"
                }`}
                aria-label={resumeAriaLabel}
              >
                <FileText className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                {isPersian ? (
                  <span className="flex items-center gap-1">
                    <span>رزومه</span>
                    <bdi dir="ltr">(EN)</bdi>
                  </span>
                ) : (
                  <span>{resumeLabel}</span>
                )}
              </a>
            </div>

            {/* Mobile Controls: Language Switch + Resume + Menu Button */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              {/* Language Switcher (Mobile Header) */}
              <div
                role="group"
                aria-label={isPersian ? "انتخاب زبان" : "Language selection"}
                className="h-8 flex items-center font-mono text-[11px] rounded border border-border-subtle bg-canvas-900 px-1.5 text-fg-secondary"
              >
                {currentLocale === "en" ? (
                  <div className="flex items-center gap-1">
                    <span
                      aria-current="page"
                      className="font-bold text-accent-cyan px-1 py-0.5 rounded bg-accent-cyan/10"
                    >
                      EN
                    </span>
                    <span className="text-border-panel select-none">|</span>
                    <a
                      href={langSwitch.faHref}
                      hrefLang="fa"
                      lang="fa"
                      className="px-1 py-0.5 rounded hover:text-accent-cyan transition-colors"
                      aria-label="تغییر به زبان فارسی"
                    >
                      FA
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-1" dir="ltr">
                    <a
                      href={langSwitch.enHref}
                      hrefLang="en"
                      lang="en"
                      className="px-1 py-0.5 rounded hover:text-accent-cyan transition-colors"
                      aria-label="Switch to English"
                    >
                      EN
                    </a>
                    <span className="text-border-panel select-none">|</span>
                    <span
                      aria-current="page"
                      className="font-bold text-accent-cyan px-1 py-0.5 rounded bg-accent-cyan/10"
                    >
                      FA
                    </span>
                  </div>
                )}
              </div>

              <a
                href="/resume/Masoud_Zeynali_Professional_CV_EN.pdf"
                download="Masoud_Zeynali_Professional_CV_EN.pdf"
                className="h-8 w-8 inline-flex items-center justify-center text-xs rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label={resumeAriaLabel}
              >
                <FileText className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-8 w-8 inline-flex items-center justify-center rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-fg-primary focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? mobileMenuCloseAriaLabel : mobileMenuOpenAriaLabel}
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
            <ul
              className={`flex flex-col gap-4 text-sm text-fg-secondary mb-6 ${
                isPersian ? "font-sans font-normal" : "font-mono"
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-fg-primary hover:text-accent-cyan hover:ps-2 transition-all border-b border-white/5"
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
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs rounded border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 transition-all ${
                  isPersian ? "font-sans font-normal" : "font-mono"
                }`}
              >
                <FileText className="w-4 h-4" />
                {isPersian ? (
                  <span className="flex items-center gap-1">
                    <span>رزومه</span>
                    <bdi dir="ltr">(EN)</bdi>
                  </span>
                ) : (
                  <span>{resumeLabel}</span>
                )}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
