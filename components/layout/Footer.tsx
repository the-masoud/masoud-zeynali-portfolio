import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="w-full border-t border-white/5 bg-canvas-950/90 py-8 px-4 sm:px-6 lg:px-8 mt-auto"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-fg-muted">
        {/* Left side: Professional domain & Phase marker */}
        <div className="flex items-center gap-3">
          <span className="text-fg-secondary">
            MASOUD ZEYNALI <span className="text-fg-subtle">::</span> SYSTEMS ENGINEERING
          </span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded bg-canvas-900 border border-border-subtle text-[10px] text-accent-cyan">
            PHASE 1 FOUNDATION
          </span>
        </div>

        {/* Right side: Copyright & Domain summary */}
        <div className="flex items-center gap-4 text-fg-subtle">
          <span>IT INFRASTRUCTURE · SECURITY · AI AUTOMATION</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
