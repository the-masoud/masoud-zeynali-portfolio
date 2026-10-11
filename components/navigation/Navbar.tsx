"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, Globe } from "lucide-react";
import { NavbarData } from "@/lib/i18n/types";
import { CommandPalette } from "./CommandPalette";

interface NavbarProps {
  data: NavbarData;
}

export const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    navLinks,
    resumeLabel,
    resumeAriaLabel,
    mobileMenuOpenAriaLabel,
    mobileMenuCloseAriaLabel,
    currentLocale,
    langSwitch,
    commandPalette,
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

  // Global Ctrl+K / Meta+K keyboard listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || e.isComposing) return;
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const homeHref = currentLocale === "fa" ? "/fa" : "/";
  const isPersian = currentLocale === "fa";

  return (
    <>
      <header
        className={`site-header sticky top-0 z-40 w-full py-4 ${
          scrolled
            ? "bg-canvas-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-canvas-950/65 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label={isPersian ? "ناوبری اصلی" : "Main Navigation"}
            className="flex items-center justify-between gap-2 sm:gap-4"
          >
            {/* Brand / Name (Anchored start/right in RTL, start/left in LTR) */}
            <Link
              href={homeHref}
              className="nav-brand group flex min-w-0 items-center gap-2 sm:gap-3 focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-lg px-1 py-0.5"
            >
              <div className="w-8 h-8 shrink-0 rounded-lg bg-canvas-900 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
                  <path d="M4 25 11 7l5 11 5-11 7 18M10 25l6-12 6 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={`text-xs sm:text-base font-bold text-fg-primary group-hover:text-accent-cyan transition-colors leading-tight truncate ${
                    isPersian ? "font-sans font-bold" : "font-mono font-bold tracking-wider"
                  }`}
                >
                  {isPersian ? "مسعود زینالی" : "MASOUD ZEYNALI"}
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] text-fg-muted uppercase mt-0.5 truncate ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-widest"
                  }`}
                >
                  {isPersian ? "مهندسی سیستم‌ها" : "SYSTEMS ENGINEERING"}
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation Links */}
            <div className="hidden xl:flex items-center gap-6 lg:gap-8">
              <ul
                className={`flex items-center gap-5 lg:gap-7 text-sm text-fg-secondary ${
                  isPersian ? "font-sans font-normal" : "font-mono"
                }`}
              >
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="nav-item py-2 px-2.5 relative group border border-transparent rounded-lg"
                    >
                      <span>{link.label}</span>
                      <span className="nav-underline absolute bottom-0 start-2.5 end-2.5 h-px bg-accent-cyan" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Secondary Controls (Agent Console + Language Switch + Resume) */}
            <div className="hidden xl:flex items-center gap-2.5 shrink-0">
              {/* Agent Console Trigger (Desktop) */}
              <button
                type="button"
                onClick={() => setPaletteOpen(true)}
                className="nav-control h-9 inline-flex items-center gap-2 text-xs px-2.5 rounded border border-border-panel bg-canvas-900/90 text-fg-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-canvas-850 transition-all focus-visible:ring-2 focus-visible:ring-accent-cyan font-mono select-none"
                aria-label={commandPalette.triggerAriaLabel}
              >
                <span className="text-accent-cyan font-bold">&gt;_</span>
                <span className="tracking-wider">{commandPalette.triggerLabel}</span>
                <kbd className="ms-1 text-[10px] px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-fg-muted font-mono">
                  Ctrl K
                </kbd>
              </button>

              {/* Language Switcher (Desktop) */}
              <div
                role="group"
                aria-label={isPersian ? "انتخاب زبان" : "Language selection"}
                className="nav-control h-9 flex items-center font-mono text-xs rounded border border-border-panel bg-canvas-900/90 px-2 text-fg-secondary select-none"
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
                className={`nav-control h-9 inline-flex items-center gap-1.5 text-xs px-3 rounded border border-border-panel bg-canvas-900/90 text-fg-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-canvas-850 transition-all focus-visible:ring-2 focus-visible:ring-accent-cyan ${
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

            {/* Mobile Controls: Agent Console + Language Switch + Resume + Menu Button */}
            <div className="flex xl:hidden items-center gap-1.5 shrink-0">
              {/* Agent Console Trigger (Mobile) */}
              <button
                type="button"
                onClick={() => setPaletteOpen(true)}
                className="nav-control h-9 px-2 inline-flex items-center justify-center gap-1 text-xs rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan font-mono"
                aria-label={commandPalette.triggerAriaLabel}
              >
                <span className="text-accent-cyan font-bold text-xs">&gt;_</span>
              </button>

              {/* Language Switcher (Mobile Header) */}
              <div
                role="group"
                aria-label={isPersian ? "انتخاب زبان" : "Language selection"}
                className="nav-control h-9 flex items-center font-mono text-[11px] rounded border border-border-subtle bg-canvas-900 px-1.5 text-fg-secondary"
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
                className="nav-control h-9 w-8 inline-flex items-center justify-center text-xs rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label={resumeAriaLabel}
              >
                <FileText className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="nav-control h-9 w-8 inline-flex items-center justify-center rounded border border-border-subtle bg-canvas-900 text-fg-secondary hover:text-fg-primary focus-visible:ring-2 focus-visible:ring-accent-cyan"
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
            className="xl:hidden border-b border-border-subtle bg-canvas-950/95 backdrop-blur-xl px-6 py-6 transition-all"
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
                    className="nav-item block py-3 px-3 text-fg-primary border border-transparent rounded-lg"
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
                className={`action-button w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs rounded border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 transition-all ${
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

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        paletteData={commandPalette}
        locale={currentLocale}
      />
    </>
  );
};
