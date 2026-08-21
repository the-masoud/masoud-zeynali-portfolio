import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ProfessionalPrinciples } from "./ProfessionalPrinciples";
import { Terminal, Shield, Network } from "lucide-react";
import { ProfessionalStoryData, Locale } from "@/lib/i18n/types";

interface ProfessionalStoryProps {
  data: ProfessionalStoryData;
  locale?: Locale;
}

export const ProfessionalStory: React.FC<ProfessionalStoryProps> = ({
  data,
  locale = "en",
}) => {
  const {
    sectionMarker,
    technicalMarker,
    heading,
    subheading,
    domainMarker,
    governanceMarker,
    focusMarker,
    paragraphs,
    principlesHeader,
    principlesSubheader,
    principles,
  } = data;

  const isPersian = locale === "fa";

  return (
    <section
      id="about"
      aria-labelledby="profile-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Editorial Two-Column Layout: Portrait Rail (4 cols) + Unified Content Column (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-start">
          {/* Desktop Portrait Rail (Right on RTL, Left on LTR) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-start">
            <div className="relative w-full max-w-[290px] sm:max-w-[310px] aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-canvas-900/80 shadow-md shadow-black/60 group transition-colors duration-300 hover:border-accent-cyan/30">
              <Image
                src="/images/masoud-zeynali-portrait.png"
                alt={isPersian ? "تصویر مسعود زینالی" : "Portrait of Masoud Zeynali"}
                fill
                sizes="310px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg pointer-events-none" />
            </div>

            {/* Technical Marker / Domain Coordinates below portrait */}
            <div className="flex flex-col gap-2.5 p-3.5 rounded bg-canvas-900/30 border border-border-subtle text-xs text-fg-muted w-full max-w-[310px] mt-5">
              <div className="flex items-center gap-2 text-fg-secondary">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <span dir="ltr" className="font-mono text-[11px]">{domainMarker}</span>
              </div>
              <div className="flex items-center gap-2 text-fg-secondary">
                <Network className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span dir="ltr" className="font-mono text-[11px]">{governanceMarker}</span>
              </div>
              <div className="flex items-center gap-2 text-fg-secondary">
                <Shield className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                <span dir="ltr" className="font-mono text-[11px]">{focusMarker}</span>
              </div>
            </div>
          </div>

          {/* Unified Content Column: Marker → Heading → Subheading → (Mobile Portrait) → Narrative */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Section Index Marker */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Badge variant="cyan" dot={false}>
                {sectionMarker}
              </Badge>
              <span className="text-border-panel">|</span>
              <span
                className={`text-xs uppercase ${
                  isPersian
                    ? "font-sans font-medium text-fg-muted"
                    : "font-mono tracking-wider text-fg-muted"
                }`}
              >
                {technicalMarker}
              </span>
            </div>

            {/* Editorial Heading */}
            <h2
              id="profile-heading"
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-2 sm:mb-3 ${
                isPersian
                  ? "font-sans tracking-normal"
                  : "font-mono font-black tracking-tight"
              }`}
            >
              {heading}
            </h2>

            <p
              className={`mb-5 sm:mb-6 text-accent-cyan ${
                isPersian
                  ? "font-sans text-xs sm:text-sm font-medium"
                  : "font-mono text-xs sm:text-sm tracking-wide"
              }`}
            >
              {subheading}
            </p>

            {/* Mobile / Tablet Portrait (< lg) */}
            <div className="lg:hidden relative w-full max-w-[240px] sm:max-w-[280px] aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-canvas-900/80 shadow-md shadow-black/60 mb-6 group transition-colors duration-300 hover:border-accent-cyan/30">
              <Image
                src="/images/masoud-zeynali-portrait.png"
                alt={isPersian ? "تصویر مسعود زینالی" : "Portrait of Masoud Zeynali"}
                fill
                sizes="(max-width: 640px) 240px, 280px"
                className="object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg pointer-events-none" />
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed font-sans font-normal max-w-2xl">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated Professional Principles Rail */}
        <ProfessionalPrinciples
          header={principlesHeader}
          subheader={principlesSubheader}
          principles={principles}
          locale={locale}
        />
      </div>
    </section>
  );
};
