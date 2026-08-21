import React from "react";
import { FooterData } from "@/lib/i18n/types";

interface FooterProps {
  data: FooterData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { brandName, brandTag, phaseLabel, domainSummary, copyrightYear } = data;

  return (
    <footer
      aria-label="Site Footer"
      className="w-full border-t border-white/5 bg-canvas-950/90 py-8 px-4 sm:px-6 lg:px-8 mt-auto"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-fg-muted">
        {/* Left side: Professional domain & Phase marker */}
        <div className="flex items-center gap-3">
          <span className="text-fg-secondary">
            {brandName} <span className="text-fg-subtle">::</span> {brandTag}
          </span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded bg-canvas-900 border border-border-subtle text-[10px] text-accent-cyan">
            {phaseLabel}
          </span>
        </div>

        {/* Right side: Copyright & Domain summary */}
        <div className="flex items-center gap-4 text-fg-subtle">
          <span>{domainSummary}</span>
          <span>© {copyrightYear}</span>
        </div>
      </div>
    </footer>
  );
};
