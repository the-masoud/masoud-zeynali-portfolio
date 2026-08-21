import React from "react";

interface DevelopmentScopeProps {
  heading: string;
  flowLabel: string;
  subLabel: string;
  tags: string[];
  ariaLabel: string;
}

export const DevelopmentScope: React.FC<DevelopmentScopeProps> = ({
  heading,
  flowLabel,
  subLabel,
  tags,
  ariaLabel,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider uppercase">
            {heading}
          </span>
          <span className="text-border-panel">/</span>
          <span className="font-mono text-[11px] text-fg-muted tracking-wider uppercase">
            {flowLabel}
          </span>
        </div>
        <span className="font-mono text-[10px] text-fg-subtle uppercase tracking-widest">
          {subLabel}
        </span>
      </div>

      <ul
        aria-label={ariaLabel}
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
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
