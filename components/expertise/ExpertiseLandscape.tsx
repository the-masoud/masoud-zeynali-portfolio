import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ExpertiseDomain } from "./ExpertiseDomain";
import { ExpertiseLandscapeData, Locale } from "@/lib/i18n/types";

interface ExpertiseLandscapeProps {
  data: ExpertiseLandscapeData;
  locale?: Locale;
}

export const ExpertiseLandscape: React.FC<ExpertiseLandscapeProps> = ({
  data,
  locale = "en",
}) => {
  const {
    sectionMarker,
    technicalMarker,
    heading,
    subheading,
    matrixHeaders,
    domains,
    verifiedScaleLabel,
  } = data;

  const isPersian = locale === "fa";

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-11 text-start">
          <div className="flex items-center gap-3 mb-3.5 sm:mb-5">
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

          <div className="max-w-4xl">
            <h2
              id="expertise-heading"
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-2.5 sm:mb-3 ${
                isPersian ? "font-sans tracking-normal" : "font-mono font-black tracking-tight"
              }`}
            >
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary font-sans leading-relaxed max-w-3xl">
              {subheading}
            </p>
          </div>
        </div>

        {/* Technical Landscape Matrix Container */}
        <div className="rounded bg-canvas-900/40 border border-white/10 p-5 sm:p-7 lg:p-8 telemetry-corners">
          {/* Matrix Column Header (Desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:grid grid-cols-12 gap-6 pb-3 mb-1 border-b border-white/10 text-start"
          >
            <div
              className={`col-span-4 ${
                isPersian
                  ? "font-sans text-xs font-medium text-slate-300/80 tracking-normal"
                  : "font-mono text-xs text-fg-muted uppercase tracking-wider"
              }`}
            >
              {matrixHeaders.domain}
            </div>
            <div
              className={`col-span-4 ${
                isPersian
                  ? "font-sans text-xs font-medium text-slate-300/80 tracking-normal"
                  : "font-mono text-xs text-fg-muted uppercase tracking-wider"
              }`}
            >
              {matrixHeaders.capability}
            </div>
            <div
              className={`col-span-4 ${
                isPersian
                  ? "font-sans text-xs font-medium text-slate-300/80 tracking-normal"
                  : "font-mono text-xs text-fg-muted uppercase tracking-wider"
              }`}
            >
              {matrixHeaders.technologies}
            </div>
          </div>

          {/* Matrix Domain Rows */}
          <div className="divide-y divide-transparent">
            {domains.map((domain, index) => (
              <ExpertiseDomain
                key={domain.id}
                domain={domain}
                isLast={index === domains.length - 1}
                verifiedScaleLabel={verifiedScaleLabel}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
