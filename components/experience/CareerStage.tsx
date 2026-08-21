import React from "react";
import { ChevronRight, ShieldCheck, Users } from "lucide-react";
import { CareerStageData, Locale } from "@/lib/i18n/types";

interface CareerStageProps {
  stage: CareerStageData;
  isLast?: boolean;
  verifiedScaleLabel: string;
  verifiedContextLabel: string;
  locale?: Locale;
}

export const CareerStage: React.FC<CareerStageProps> = ({
  stage,
  isLast = false,
  verifiedScaleLabel,
  verifiedContextLabel,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <article
      className="relative flex flex-col md:flex-row gap-6 md:gap-10 pb-12 md:pb-16 last:pb-0 group"
      aria-labelledby={`role-title-${stage.id}`}
    >
      {/* Column (Desktop/Tablet): Rail, Node, Duration, Stage Category */}
      <div className="relative md:w-64 shrink-0 flex md:flex-col items-start md:items-end md:text-end pe-0 md:pe-8">
        {/* Continuous Vertical Rail Line */}
        {!isLast && (
          <div
            aria-hidden="true"
            className="absolute start-[11px] md:start-auto md:end-[-1px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-accent-cyan/40 via-border-panel to-border-subtle group-hover:from-accent-cyan/60 transition-colors"
          />
        )}

        {/* Timeline Node Beacon */}
        <div
          aria-hidden="true"
          className="absolute start-0 md:start-auto md:end-[-9px] top-1.5 w-6 h-6 rounded-full bg-canvas-950 border border-border-panel flex items-center justify-center group-hover:border-accent-cyan/60 transition-all duration-300 z-10"
        >
          <div className="w-2 h-2 rounded-full bg-accent-cyan group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </div>

        {/* Stage Metadata */}
        <div className={`ps-9 md:ps-0 w-full flex flex-col md:items-end ${isPersian ? "font-sans" : "font-mono"}`}>
          <span
            className={`text-[10px] text-accent-cyan font-semibold uppercase mb-1 ${
              isPersian ? "tracking-normal" : "tracking-widest"
            }`}
          >
            STAGE {stage.stageNumber} · {stage.stageCategory}
          </span>
          <div className="inline-flex items-center px-2.5 py-1 rounded bg-canvas-900 border border-border-subtle text-xs font-medium text-fg-primary">
            {stage.duration}
          </div>
          <span dir="ltr" className="hidden md:inline-block font-mono text-[10px] text-fg-subtle mt-1.5">
            {stage.tag}
          </span>
        </div>
      </div>

      {/* Content Column: Role Title, Narrative, Responsibilities, Scale Highlights */}
      <div className="flex-1 ps-9 md:ps-0">
        <div className="p-5 sm:p-6 rounded bg-canvas-900/50 border border-border-subtle hover:border-accent-cyan/30 hover:bg-canvas-900/80 transition-all duration-200 telemetry-corners text-start">
          {/* Role Title */}
          <h3
            id={`role-title-${stage.id}`}
            className={`text-lg sm:text-xl font-bold text-fg-primary uppercase mb-2 group-hover:text-white transition-colors ${
              isPersian ? "font-sans tracking-normal" : "font-mono tracking-tight"
            }`}
          >
            {stage.title}
          </h3>

          {/* Role Narrative */}
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-sans mb-5 font-normal">
            {stage.narrative}
          </p>

          {/* Responsibilities */}
          <div className="space-y-2.5 mb-5">
            <div
              className={`text-[11px] text-fg-muted uppercase mb-2 ${
                isPersian ? "font-sans font-medium" : "font-mono tracking-wider"
              }`}
            >
              {stage.responsibilitiesHeader}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-fg-secondary font-sans leading-relaxed">
              {stage.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5 rtl:rotate-180" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Scale Highlight */}
          {stage.scaleHighlight && (
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-canvas-950 border border-border-subtle text-xs font-sans text-fg-primary">
                {stage.id === "deputy-head" ? (
                  <Users className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                )}
                <span className="text-fg-secondary">{verifiedScaleLabel}</span>
                <span className="text-accent-cyan font-semibold">
                  {stage.scaleHighlight}
                </span>
              </div>
              <span
                className={`hidden sm:inline-block text-[10px] text-fg-subtle uppercase ${
                  isPersian ? "font-sans" : "font-mono tracking-wider"
                }`}
              >
                {verifiedContextLabel}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
