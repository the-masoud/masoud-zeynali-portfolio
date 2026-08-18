import React from "react";
import { engineeringNotes } from "./infraForgeData";
import { UserCheck, RefreshCw, ShieldCheck } from "lucide-react";

export const EngineeringNotes: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider uppercase">
            ENGINEERING NOTES & SECURITY CONSTRAINTS
          </span>
          <span className="text-border-panel">/</span>
          <span className="font-mono text-[11px] text-fg-muted tracking-wider uppercase">
            IMPLEMENTATION FOCUS
          </span>
        </div>
        <span className="font-mono text-[10px] text-fg-subtle uppercase tracking-widest">
          SAFE ARCHITECTURAL SCOPE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (lg:col-span-7): Server Onboarding & Inventory Reconciliation */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Server Onboarding */}
          <div className="p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan">
                <UserCheck className="w-3 h-3" />
              </div>
              <h4 className="font-mono text-xs font-bold text-fg-primary tracking-wider uppercase group-hover:text-accent-cyan transition-colors">
                {engineeringNotes.serverOnboarding.heading}
              </h4>
            </div>
            <p className="text-xs text-fg-secondary font-sans leading-relaxed">
              {engineeringNotes.serverOnboarding.copy}
            </p>
          </div>

          {/* Inventory Reconciliation */}
          <div className="p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan">
                <RefreshCw className="w-3 h-3" />
              </div>
              <h4 className="font-mono text-xs font-bold text-fg-primary tracking-wider uppercase group-hover:text-accent-cyan transition-colors">
                {engineeringNotes.inventoryReconciliation.heading}
              </h4>
            </div>
            <p className="text-xs text-fg-secondary font-sans leading-relaxed">
              {engineeringNotes.inventoryReconciliation.copy}
            </p>
          </div>
        </div>

        {/* Right Column (lg:col-span-5): Security Design Requirements / Constraints */}
        <div className="lg:col-span-5">
          <div className="h-full p-4 rounded bg-canvas-950/90 border border-border-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-white/5">
                <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-fg-primary tracking-wider uppercase">
                    {engineeringNotes.securityConstraints.heading}
                  </h4>
                </div>
              </div>

              <ul
                aria-label="Security design requirements and constraints"
                className="flex flex-col gap-2 font-sans text-xs text-fg-secondary"
              >
                {engineeringNotes.securityConstraints.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[10px] text-accent-cyan/80 mt-0.5 select-none font-bold">
                      ›
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="font-mono text-[10px] text-fg-subtle tracking-wider uppercase block">
                GOVERNANCE: DESIGN CONSTRAINTS & REQUIREMENTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
