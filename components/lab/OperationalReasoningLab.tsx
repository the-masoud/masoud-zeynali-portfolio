"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Info } from "lucide-react";
import { ScenarioSelector } from "./ScenarioSelector";
import { ReasoningWorkflow } from "./ReasoningWorkflow";
import { ReasoningLabData, Locale } from "@/lib/i18n/types";

interface OperationalReasoningLabProps {
  data: ReasoningLabData;
  locale?: Locale;
}

export const OperationalReasoningLab: React.FC<OperationalReasoningLabProps> = ({
  data,
  locale = "en",
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("scenario-01");

  const {
    sectionMarker,
    technicalLabel,
    sectionHeading,
    supportingStatement,
    simulationDisclosureLabel,
    simulationDisclosureCopy,
    selector,
    workflow,
    scenarios,
  } = data;

  const currentScenario =
    scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];

  const isPersian = locale === "fa";

  return (
    <section
      id="lab"
      aria-labelledby="lab-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-start">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              {sectionMarker}
            </Badge>
            <span className="text-border-panel">|</span>
            <span
              className={`text-xs uppercase ${
                isPersian
                  ? "font-sans font-medium text-fg-muted"
                  : "font-mono tracking-wider text-fg-muted"
              }`}
            >
              {technicalLabel}
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              id="lab-heading"
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-3 ${
                isPersian ? "font-sans tracking-normal" : "font-mono font-black tracking-tight"
              }`}
            >
              {sectionHeading}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary font-sans leading-relaxed max-w-3xl">
              {supportingStatement}
            </p>
          </div>
        </div>

        {/* Structured Operational Workbench Container */}
        <div className="rounded bg-canvas-900/40 border border-border-subtle p-5 sm:p-7 lg:p-8 telemetry-corners space-y-6 sm:space-y-7">
          {/* Simulation Disclosure */}
          <div
            role="note"
            aria-label="Simulation disclosure"
            className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded bg-canvas-950/90 border border-border-panel text-xs text-start"
          >
            <div className="flex items-center gap-2 shrink-0">
              <Info className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
              <span
                className={`font-bold text-accent-cyan uppercase ${
                  isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider"
                }`}
              >
                {simulationDisclosureLabel}
              </span>
            </div>
            <span className="hidden sm:inline text-border-panel select-none">|</span>
            <p className="text-fg-secondary font-sans leading-relaxed">
              {simulationDisclosureCopy}
            </p>
          </div>

          {/* Workbench Two-Region Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Region: Scenario Selector (approx. 30%) */}
            <div className="lg:col-span-4 w-full">
              <ScenarioSelector
                scenarios={scenarios}
                selectedScenarioId={selectedScenarioId}
                onSelectScenario={setSelectedScenarioId}
                header={selector.header}
                countLabel={selector.countLabel}
                locale={locale}
              />
            </div>

            {/* Region: Selected Scenario & Structured Workflow (approx. 70%) */}
            <div className="lg:col-span-8 w-full">
              <ReasoningWorkflow
                scenario={currentScenario}
                headerSubLabel={workflow.headerSubLabel}
                stage1Label={workflow.stage1Label}
                stage2Label={workflow.stage2Label}
                stage3Label={workflow.stage3Label}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
