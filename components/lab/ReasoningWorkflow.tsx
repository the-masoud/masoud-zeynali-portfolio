import React from "react";
import { ArrowRight } from "lucide-react";
import { ReasoningScenarioData, Locale } from "@/lib/i18n/types";

interface ReasoningWorkflowProps {
  scenario: ReasoningScenarioData;
  headerSubLabel: string;
  stage1Label: string;
  stage2Label: string;
  stage3Label: string;
  locale?: Locale;
}

export const ReasoningWorkflow: React.FC<ReasoningWorkflowProps> = ({
  scenario,
  headerSubLabel,
  stage1Label,
  stage2Label,
  stage3Label,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <div className="flex flex-col gap-5 text-start">
      {/* Selected Scenario Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold text-accent-cyan uppercase ${
                isPersian ? "font-sans tracking-normal" : "font-mono tracking-widest"
              }`}
            >
              {scenario.scenarioNumber}
            </span>
            <span className="text-border-panel select-none">/</span>
            <span
              className={`text-[10px] text-fg-subtle uppercase ${
                isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
              }`}
            >
              {headerSubLabel}
            </span>
          </div>
          <h3
            className={`text-lg sm:text-xl font-bold text-white leading-snug ${
              isPersian ? "font-sans tracking-normal" : "font-mono tracking-tight uppercase"
            }`}
          >
            {scenario.title}
          </h3>
        </div>

        <div className="self-start sm:self-center">
          <span
            className={`px-2.5 py-1 rounded bg-canvas-950 border border-border-subtle text-[10px] sm:text-xs text-fg-secondary uppercase ${
              isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
            }`}
          >
            {scenario.category}
          </span>
        </div>
      </div>

      {/* 3-Stage Reasoning Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
        {/* Stage 1: REQUEST */}
        <div className="flex flex-col p-4 sm:p-5 rounded bg-canvas-950/80 border border-border-subtle relative">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`text-xs font-bold text-fg-primary ${
                isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase"
              }`}
            >
              {stage1Label}
            </span>
            <span className="hidden lg:inline-flex text-fg-subtle">
              <ArrowRight className="w-3.5 h-3.5 text-fg-muted rtl:rotate-180" aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300/90 font-sans leading-relaxed font-normal">
            {scenario.request}
          </p>
        </div>

        {/* Stage 2: OPERATIONAL BOUNDARY */}
        <div className="flex flex-col p-4 sm:p-5 rounded bg-canvas-950/80 border border-border-subtle relative">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`text-xs font-bold text-accent-cyan ${
                isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase"
              }`}
            >
              {stage2Label}
            </span>
            <span className="hidden lg:inline-flex text-fg-subtle">
              <ArrowRight className="w-3.5 h-3.5 text-fg-muted rtl:rotate-180" aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300/90 font-sans leading-relaxed font-normal">
            {scenario.boundary}
          </p>
        </div>

        {/* Stage 3: EXPECTED SYSTEM BEHAVIOR */}
        <div className="flex flex-col p-4 sm:p-5 rounded bg-canvas-950/80 border border-border-subtle">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`text-xs font-bold text-fg-primary ${
                isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase"
              }`}
            >
              {stage3Label}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300/90 font-sans leading-relaxed font-normal">
            {scenario.expectedBehavior}
          </p>
        </div>
      </div>
    </div>
  );
};
