import React from "react";
import { ReasoningScenario } from "./reasoningLabData";

interface ScenarioSelectorProps {
  scenarios: ReasoningScenario[];
  selectedScenarioId: string;
  onSelectScenario: (id: string) => void;
}

export const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({
  scenarios,
  selectedScenarioId,
  onSelectScenario,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
          Select Scenario
        </span>
        <span className="font-mono text-[10px] text-fg-subtle">
          3 Scenarios Available
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {scenarios.map((scenario) => {
          const isSelected = scenario.id === selectedScenarioId;

          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => onSelectScenario(scenario.id)}
              aria-pressed={isSelected}
              className={`w-full text-left p-3.5 sm:p-4 rounded transition-colors text-left relative flex flex-col gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                isSelected
                  ? "bg-canvas-950 border border-accent-cyan/60 shadow-sm border-l-2 border-l-accent-cyan"
                  : "bg-canvas-950/40 border border-border-subtle hover:border-border-panel hover:bg-canvas-900/60"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase ${
                    isSelected ? "text-accent-cyan" : "text-fg-muted"
                  }`}
                >
                  {scenario.scenarioNumber}
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase ${
                    isSelected
                      ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30"
                      : "bg-canvas-900 text-fg-subtle border border-border-subtle"
                  }`}
                >
                  {scenario.category}
                </span>
              </div>

              <span
                className={`font-mono text-xs sm:text-sm font-semibold tracking-tight uppercase leading-snug ${
                  isSelected ? "text-white" : "text-fg-secondary"
                }`}
              >
                {scenario.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
