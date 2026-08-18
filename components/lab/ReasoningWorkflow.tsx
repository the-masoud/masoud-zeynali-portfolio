import React from "react";
import { ArrowRight } from "lucide-react";
import { ReasoningScenario } from "./reasoningLabData";

interface ReasoningWorkflowProps {
  scenario: ReasoningScenario;
}

export const ReasoningWorkflow: React.FC<ReasoningWorkflowProps> = ({
  scenario,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Selected Scenario Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase">
              {scenario.scenarioNumber}
            </span>
            <span className="text-border-panel">/</span>
            <span className="font-mono text-[10px] text-fg-subtle tracking-wider uppercase">
              STRUCTURED REASONING
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black font-mono tracking-tight text-white uppercase leading-snug">
            {scenario.title}
          </h3>
        </div>

        <div className="self-start sm:self-center">
          <span className="px-2.5 py-1 rounded bg-canvas-950 border border-border-subtle font-mono text-[10px] sm:text-xs text-fg-secondary uppercase tracking-wider">
            {scenario.category}
          </span>
        </div>
      </div>

      {/* 3-Stage Reasoning Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 relative">
        {/* Stage 1: REQUEST */}
        <div className="flex flex-col p-5 rounded bg-canvas-950/80 border border-border-subtle relative">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-fg-primary tracking-wider uppercase">
              01 / REQUEST
            </span>
            <span className="hidden lg:inline-flex text-fg-subtle">
              <ArrowRight className="w-3.5 h-3.5 text-fg-muted" aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {scenario.request}
          </p>
        </div>

        {/* Stage 2: OPERATIONAL BOUNDARY */}
        <div className="flex flex-col p-5 rounded bg-canvas-950/80 border border-border-subtle relative">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider uppercase">
              02 / OPERATIONAL BOUNDARY
            </span>
            <span className="hidden lg:inline-flex text-fg-subtle">
              <ArrowRight className="w-3.5 h-3.5 text-fg-muted" aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {scenario.boundary}
          </p>
        </div>

        {/* Stage 3: EXPECTED SYSTEM BEHAVIOR */}
        <div className="flex flex-col p-5 rounded bg-canvas-950/80 border border-border-subtle">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-fg-primary tracking-wider uppercase">
              03 / EXPECTED SYSTEM BEHAVIOR
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {scenario.expectedBehavior}
          </p>
        </div>
      </div>
    </div>
  );
};
