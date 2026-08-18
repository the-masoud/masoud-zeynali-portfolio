import React from "react";
import { developmentScopeTags } from "./infraForgeData";

export const DevelopmentScope: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider uppercase">
            DEVELOPMENT SCOPE
          </span>
          <span className="text-border-panel">/</span>
          <span className="font-mono text-[11px] text-fg-muted tracking-wider uppercase">
            VERIFIED TECHNOLOGIES
          </span>
        </div>
        <span className="font-mono text-[10px] text-fg-subtle uppercase tracking-widest">
          SCOPE BOUNDARY
        </span>
      </div>

      <ul
        aria-label="Verified Development Technologies and Focus Areas"
        className="flex flex-wrap gap-2"
      >
        {developmentScopeTags.map((tag) => (
          <li
            key={tag}
            className="inline-flex items-center px-3 py-1 rounded bg-canvas-950/90 border border-border-subtle text-xs font-mono text-fg-secondary hover:text-fg-primary hover:border-accent-cyan/40 transition-colors"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
