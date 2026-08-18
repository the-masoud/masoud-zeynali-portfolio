import React from "react";
import { ExpertiseDomainItem } from "./expertiseData";
import { ShieldCheck } from "lucide-react";

interface ExpertiseDomainProps {
  domain: ExpertiseDomainItem;
  isLast?: boolean;
}

export const ExpertiseDomain: React.FC<ExpertiseDomainProps> = ({
  domain,
  isLast = false,
}) => {
  return (
    <article
      aria-labelledby={`domain-title-${domain.id}`}
      className={`py-8 sm:py-9 lg:py-10 transition-all duration-200 group ${
        !isLast ? "border-b border-white/5" : ""
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
        {/* Left Column (Desktop ~25% / 3 cols): Domain Index & Title */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="flex items-baseline gap-2.5 mb-1.5">
            <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase">
              {domain.index}
            </span>
            <span className="font-mono text-[10px] text-fg-subtle tracking-wider uppercase">
              DOMAIN
            </span>
          </div>
          <h3
            id={`domain-title-${domain.id}`}
            className="text-base sm:text-lg font-mono font-bold text-fg-primary tracking-tight uppercase leading-snug group-hover:text-white transition-colors"
          >
            {domain.title}
          </h3>
        </div>

        {/* Center Column (Desktop ~35% / 4-5 cols): Capability Statement */}
        <div className="lg:col-span-4">
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
            {domain.capability}
          </p>
        </div>

        {/* Right Column (Desktop ~40% / 5 cols): Technology Labels & Scale */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <ul
            aria-label={`${domain.title} technologies`}
            className="flex flex-wrap gap-2"
          >
            {domain.technologies.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded bg-canvas-900 border border-border-subtle text-xs font-mono text-fg-secondary group-hover:text-fg-primary group-hover:border-white/15 transition-colors"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Domain 05 Verified Scale Marker */}
          {domain.scaleMarker && (
            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-accent-cyan">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
              <span className="text-fg-subtle text-[11px] uppercase">
                VERIFIED SCALE:
              </span>
              <span className="font-semibold text-[11px] tracking-wider">
                {domain.scaleMarker}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
