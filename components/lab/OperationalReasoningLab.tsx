"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Info } from "lucide-react";
import {
  reasoningLabMetadata,
  reasoningScenarios,
} from "./reasoningLabData";
import { ScenarioSelector } from "./ScenarioSelector";
import { ReasoningWorkflow } from "./ReasoningWorkflow";

export const OperationalReasoningLab: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("scenario-01");

  const {
    sectionMarker,
    technicalLabel,
    sectionHeading,
    supportingStatement,
    simulationDisclosureLabel,
    simulationDisclosureCopy,
  } = reasoningLabMetadata;

  const currentScenario =
    reasoningScenarios.find((s) => s.id === selectedScenarioId) ||
    reasoningScenarios[0];

  return (
    <section
      id="lab"
      aria-labelledby="lab-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              {sectionMarker}
            </Badge>
            <span className="text-border-panel">|</span>
            <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
              {technicalLabel}
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              id="lab-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight mb-3"
            >
              {sectionHeading}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary font-sans leading-relaxed max-w-3xl">
              {supportingStatement}
            </p>
          </div>
        </div>

        {/* Structured Operational Workbench Container */}
        <div className="rounded bg-canvas-900/40 border border-border-subtle p-6 sm:p-8 lg:p-10 telemetry-corners space-y-8">
          {/* Simulation Disclosure */}
          <div
            role="note"
            aria-label="Simulation disclosure"
            className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded bg-canvas-950/90 border border-border-panel text-xs"
          >
            <div className="flex items-center gap-2 shrink-0">
              <Info className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
              <span className="font-mono font-bold text-accent-cyan tracking-wider uppercase">
                {simulationDisclosureLabel}
              </span>
            </div>
            <span className="hidden sm:inline text-border-panel">|</span>
            <p className="text-fg-secondary font-sans leading-relaxed">
              {simulationDisclosureCopy}
            </p>
          </div>

          {/* Workbench Two-Region Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Region: Scenario Selector (approx. 30%) */}
            <div className="lg:col-span-4 w-full">
              <ScenarioSelector
                scenarios={reasoningScenarios}
                selectedScenarioId={selectedScenarioId}
                onSelectScenario={setSelectedScenarioId}
              />
            </div>

            {/* Right Region: Selected Scenario & Structured Workflow (approx. 70%) */}
            <div className="lg:col-span-8 w-full">
              <ReasoningWorkflow scenario={currentScenario} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
