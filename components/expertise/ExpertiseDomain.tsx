import React from "react";
import { ShieldCheck } from "lucide-react";
import { ExpertiseDomainData, Locale } from "@/lib/i18n/types";

interface ExpertiseDomainProps {
  domain: ExpertiseDomainData;
  isLast?: boolean;
  verifiedScaleLabel: string;
  locale?: Locale;
}

export const ExpertiseDomain: React.FC<ExpertiseDomainProps> = ({
  domain,
  isLast = false,
  verifiedScaleLabel,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <article
      aria-labelledby={`domain-title-${domain.id}`}
      className={`py-5 sm:py-6 lg:py-7 transition-all duration-200 group text-start ${
        !isLast ? "border-b border-white/5" : ""
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
        {/* Domain Index & Title */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="flex items-baseline gap-2 mb-1">
            <span
              className={`text-xs font-bold text-accent-cyan uppercase ${
                isPersian ? "font-mono" : "font-mono tracking-widest"
              }`}
            >
              {domain.index}
            </span>
            <span
              className={`text-[10px] text-fg-subtle uppercase ${
                isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
              }`}
            >
              DOMAIN
            </span>
          </div>
          <h3
            id={`domain-title-${domain.id}`}
            className={`text-base sm:text-lg font-bold text-fg-primary leading-snug group-hover:text-white transition-colors ${
              isPersian ? "font-sans tracking-normal" : "font-mono uppercase tracking-tight"
            }`}
          >
            {domain.title}
          </h3>
        </div>

        {/* Capability Statement */}
        <div className="lg:col-span-4">
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
            {domain.capability}
          </p>
        </div>

        {/* Technology Labels & Scale */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <ul
            aria-label={`${domain.title} technologies`}
            className="flex flex-wrap gap-1.5"
          >
            {domain.technologies.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center px-2 py-0.5 rounded bg-canvas-950/70 border border-white/5 text-[11px] sm:text-xs font-mono text-fg-secondary group-hover:text-fg-primary group-hover:border-white/15 transition-colors"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Domain 05 Verified Scale Marker */}
          {domain.scaleMarker && (
            <div className="flex items-center gap-2 pt-0.5 text-xs text-accent-cyan">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
              <span
                className={`text-fg-subtle text-[11px] uppercase ${
                  isPersian ? "font-sans font-normal" : "font-mono"
                }`}
              >
                {verifiedScaleLabel}
              </span>
              <span className={`font-semibold text-[11px] ${isPersian ? "font-sans" : "font-mono tracking-wider"}`}>
                {domain.scaleMarker}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
