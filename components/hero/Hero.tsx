import React from "react";
import { ArrowRight, ChevronRight, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroMetrics } from "./HeroMetrics";
import { InfrastructureTopology } from "@/components/visuals/InfrastructureTopology";
import { HeroData, Locale } from "@/lib/i18n/types";

interface HeroProps {
  data: HeroData;
  locale?: Locale;
}

export const Hero: React.FC<HeroProps> = ({ data, locale = "en" }) => {
  const {
    badgeText,
    securityText,
    aiAgentsText,
    nameLine1,
    nameLine2,
    specialtyAi,
    specialtyInfra,
    specialtySecurity,
    specializationRole,
    statement,
    ctaPrimary,
    ctaSecondary,
    metricsHeader,
    metricsSubheader,
    metrics,
  } = data;

  const isPersian = locale === "fa";

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pt-8 pb-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Infrastructure Topology Visual Layer with explicit locale awareness */}
      <InfrastructureTopology locale={locale} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Persian Layout: Responsive centered-flex with max-w-4xl to prevent far-right jamming */}
        <div className={isPersian ? "w-full max-w-3xl lg:max-w-4xl ms-0 me-auto lg:me-12 text-start" : "max-w-4xl"}>
          {/* Subtle Technical Strip */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5 sm:mb-6 animate-fade-in bg-canvas-900/60 border border-border-subtle/60 rounded px-2.5 py-1.5 backdrop-blur-sm">
            <Badge variant="cyan" dot={false}>
              {badgeText}
            </Badge>
            <span className="hidden sm:inline-block text-border-panel select-none">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-[11px] text-fg-muted font-sans font-normal">
              <Shield className="w-3 h-3 text-accent-cyan shrink-0" />
              <span>{securityText}</span>
            </span>
            <span className="hidden sm:inline-block text-border-panel select-none">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[11px] text-fg-secondary font-sans font-normal">
              <Cpu className="w-3 h-3 text-accent-cyan shrink-0" />
              <span>{aiAgentsText}</span>
            </span>
          </div>

          {/* Hero Name / Identity */}
          <div className="mb-6 sm:mb-8">
            {isPersian ? (
              /* Persian Name: Authoritative, controlled size (3xl to 6xl), IRANSansX Bold 700 */
              <h1
                id="hero-title"
                className="text-3xl sm:text-5xl md:text-6xl font-bold font-sans tracking-normal text-white mb-3 sm:mb-4 leading-tight"
              >
                {nameLine1}
              </h1>
            ) : (
              /* English Name: Two lines, uppercase monospace with gradient surname */
              <h1
                id="hero-title"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono tracking-tight text-white mb-4 sm:mb-6 uppercase leading-none"
              >
                {nameLine1} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-accent-cyan">
                  {nameLine2}
                </span>
              </h1>
            )}

            {/* Specialty Row (Semantic priority: AI Engineering · IT Infrastructure · Security) */}
            <div
              className={`flex flex-wrap items-center gap-2 sm:gap-2.5 font-medium text-accent-cyan mb-2.5 ${
                isPersian
                  ? "text-base sm:text-xl md:text-2xl font-sans tracking-normal"
                  : "text-lg sm:text-2xl md:text-3xl font-mono"
              }`}
            >
              <span>{specialtyAi}</span>
              <span className="text-fg-subtle select-none px-0.5">·</span>
              <span>{specialtyInfra}</span>
              <span className="text-fg-subtle select-none px-0.5">·</span>
              <span>{specialtySecurity}</span>
            </div>

            {/* Senior Specialization Title (Restrained IRANSansX Regular 400 with cyan :: and Latin MCP) */}
            <div
              className={`flex items-center gap-2 text-slate-300 mb-5 ${
                isPersian
                  ? "text-xs sm:text-sm md:text-base font-sans font-normal"
                  : "text-sm sm:text-base md:text-lg font-mono font-semibold"
              }`}
            >
              <span className="text-accent-cyan font-mono select-none">::</span>
              <span className={isPersian ? "tracking-normal" : "tracking-wide"}>
                {specializationRole}
              </span>
            </div>

            {/* Supporting Statement Paragraph */}
            <p
              className={`text-slate-300/85 leading-relaxed font-sans font-normal ${
                isPersian
                  ? "text-sm sm:text-base md:text-lg max-w-2xl text-start"
                  : "text-base sm:text-lg md:text-xl max-w-3xl"
              }`}
            >
              {statement}
            </p>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            <Button
              href={ctaPrimary.href}
              variant="primary"
              size="lg"
              className={isPersian ? "font-sans font-normal shadow-[0_0_20px_rgba(56,189,248,0.2)]" : "font-mono font-medium"}
              aria-label={ctaPrimary.ariaLabel}
            >
              <span>{ctaPrimary.label}</span>
              <ArrowRight className="w-4 h-4 text-accent-cyan rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0" />
            </Button>

            <Button
              href={ctaSecondary.href}
              variant="secondary"
              size="lg"
              className={isPersian ? "font-sans font-normal" : "font-mono font-medium"}
              aria-label={ctaSecondary.ariaLabel}
            >
              <span>{ctaSecondary.label}</span>
              <ChevronRight className="w-4 h-4 text-fg-muted rtl:rotate-180 group-hover:text-fg-primary group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all shrink-0" />
            </Button>
          </div>
        </div>

        {/* Professional Metrics */}
        <HeroMetrics
          header={metricsHeader}
          subheader={metricsSubheader}
          metrics={metrics}
          locale={locale}
        />
      </div>
    </section>
  );
};
