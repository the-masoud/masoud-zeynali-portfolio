import React from "react";
import { CareerStageItem } from "./careerData";
import { ChevronRight, ShieldCheck, Users } from "lucide-react";

interface CareerStageProps {
  stage: CareerStageItem;
  isLast?: boolean;
}

export const CareerStage: React.FC<CareerStageProps> = ({
  stage,
  isLast = false,
}) => {
  return (
    <article
      className="relative flex flex-col md:flex-row gap-6 md:gap-10 pb-12 md:pb-16 last:pb-0 group"
      aria-labelledby={`role-title-${stage.id}`}
    >
      {/* Left Column (Desktop/Tablet): Rail, Node, Duration, Stage Category */}
      <div className="relative md:w-64 flex-shrink-0 flex md:flex-col items-start md:items-end md:text-right pr-0 md:pr-8">
        {/* Continuous Vertical Rail Line */}
        {!isLast && (
          <div
            aria-hidden="true"
            className="absolute left-[11px] md:left-auto md:right-[-1px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-accent-cyan/40 via-border-panel to-border-subtle group-hover:from-accent-cyan/60 transition-colors"
          />
        )}

        {/* Timeline Node Beacon */}
        <div
          aria-hidden="true"
          className="absolute left-0 md:left-auto md:right-[-9px] top-1.5 w-6 h-6 rounded-full bg-canvas-950 border border-border-panel flex items-center justify-center group-hover:border-accent-cyan/60 transition-all duration-300 z-10"
        >
          <div className="w-2 h-2 rounded-full bg-accent-cyan group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </div>

        {/* Stage Metadata (Mobile: offset to right of node; Desktop: aligned to right of column) */}
        <div className="pl-9 md:pl-0 w-full flex flex-col md:items-end">
          <span className="font-mono text-[10px] tracking-widest text-accent-cyan font-semibold uppercase mb-1">
            STAGE {stage.stageNumber} · {stage.stageCategory}
          </span>
          <div className="inline-flex items-center px-2.5 py-1 rounded bg-canvas-900 border border-border-subtle font-mono text-xs font-medium text-fg-primary tracking-wide">
            {stage.duration}
          </div>
          <span className="hidden md:inline-block font-mono text-[10px] text-fg-subtle mt-1.5">
            {stage.tag}
          </span>
        </div>
      </div>

      {/* Right Column: Role Title, Narrative, Responsibilities, Scale Highlights */}
      <div className="flex-1 pl-9 md:pl-0">
        <div className="p-5 sm:p-6 rounded bg-canvas-900/50 border border-border-subtle hover:border-accent-cyan/30 hover:bg-canvas-900/80 transition-all duration-200 telemetry-corners">
          {/* Role Title */}
          <h3
            id={`role-title-${stage.id}`}
            className="text-lg sm:text-xl font-mono font-bold text-fg-primary tracking-tight uppercase mb-2 group-hover:text-white transition-colors"
          >
            {stage.title}
          </h3>

          {/* Role Narrative */}
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-sans mb-5 font-normal">
            {stage.narrative}
          </p>

          {/* Responsibilities */}
          <div className="space-y-2.5 mb-5">
            <div className="font-mono text-[11px] text-fg-muted tracking-wider uppercase mb-2">
              KEY RESPONSIBILITIES &amp; SCOPE:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-fg-secondary font-sans leading-relaxed">
              {stage.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Scale Highlight */}
          {stage.scaleHighlight && (
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-canvas-950 border border-border-subtle text-xs font-mono text-fg-primary">
                {stage.id === "deputy-head" ? (
                  <Users className="w-3.5 h-3.5 text-accent-cyan" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
                )}
                <span className="text-fg-secondary">VERIFIED SCALE:</span>
                <span className="text-accent-cyan font-semibold">
                  {stage.scaleHighlight}
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-[10px] text-fg-subtle uppercase">
                VERIFIED CONTEXT
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
