import React from "react";
import { UserCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { Locale } from "@/lib/i18n/types";

interface EngineeringNotesProps {
  heading: string;
  flowLabel: string;
  subLabel: string;
  serverOnboarding: {
    heading: string;
    copy: string;
  };
  inventoryReconciliation: {
    heading: string;
    copy: string;
  };
  securityConstraints: {
    heading: string;
    items: string[];
    governanceLabel: string;
    ariaLabel: string;
  };
  locale?: Locale;
}

export const EngineeringNotes: React.FC<EngineeringNotesProps> = ({
  heading,
  flowLabel,
  subLabel,
  serverOnboarding,
  inventoryReconciliation,
  securityConstraints,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span
            className={`text-xs font-bold text-accent-cyan uppercase ${
              isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider"
            }`}
          >
            {heading}
          </span>
          <span className="text-border-panel select-none">/</span>
          <span
            className={`text-[11px] text-fg-muted uppercase ${
              isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
            }`}
          >
            {flowLabel}
          </span>
        </div>
        <span
          className={`text-[10px] text-fg-subtle uppercase ${
            isPersian ? "font-sans font-normal" : "font-mono tracking-widest"
          }`}
        >
          {subLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start text-start">
        {/* Left Column (lg:col-span-7): Server Onboarding & Inventory Reconciliation */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Server Onboarding */}
          <div className="p-4 sm:p-5 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan shrink-0">
                <UserCheck className="w-3 h-3" />
              </div>
              <h4
                className={`text-sm sm:text-base font-bold text-fg-primary group-hover:text-accent-cyan transition-colors leading-snug ${
                  isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase text-xs"
                }`}
              >
                {serverOnboarding.heading}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300/90 font-sans leading-relaxed">
              {serverOnboarding.copy}
            </p>
          </div>

          {/* Inventory Reconciliation */}
          <div className="p-4 sm:p-5 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan shrink-0">
                <RefreshCw className="w-3 h-3" />
              </div>
              <h4
                className={`text-sm sm:text-base font-bold text-fg-primary group-hover:text-accent-cyan transition-colors leading-snug ${
                  isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase text-xs"
                }`}
              >
                {inventoryReconciliation.heading}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300/90 font-sans leading-relaxed">
              {inventoryReconciliation.copy}
            </p>
          </div>
        </div>

        {/* Right Column (lg:col-span-5): Security Design Requirements / Constraints */}
        <div className="lg:col-span-5">
          <div className="p-4 sm:p-5 rounded bg-canvas-950/90 border border-border-subtle flex flex-col justify-start">
            <div>
              <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-white/5">
                <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <div>
                  <h4
                    className={`text-sm sm:text-base font-bold text-fg-primary leading-snug ${
                      isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase text-xs"
                    }`}
                  >
                    {securityConstraints.heading}
                  </h4>
                </div>
              </div>

              <ul
                aria-label={securityConstraints.ariaLabel}
                className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-slate-300/90"
              >
                {securityConstraints.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-[11px] text-accent-cyan mt-0.5 select-none font-bold shrink-0">
                      ›
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span
                className={`text-[10px] text-fg-subtle block ${
                  isPersian ? "font-sans font-normal" : "font-mono tracking-wider uppercase"
                }`}
              >
                {securityConstraints.governanceLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
