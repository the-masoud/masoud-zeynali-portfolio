import React from "react";
import { ReasoningScenarioData, Locale } from "@/lib/i18n/types";

interface ScenarioSelectorProps {
  scenarios: ReasoningScenarioData[];
  selectedScenarioId: string;
  onSelectScenario: (id: string) => void;
  header: string;
  countLabel: string;
  locale?: Locale;
}

export const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({
  scenarios,
  selectedScenarioId,
  onSelectScenario,
  header,
  countLabel,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <div className="flex flex-col gap-2.5 text-start">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span
          className={`text-xs uppercase ${
            isPersian ? "font-sans font-medium text-fg-muted" : "font-mono tracking-wider text-fg-muted"
          }`}
        >
          {header}
        </span>
        <span
          className={`text-[10px] text-fg-subtle ${
            isPersian ? "font-sans font-normal" : "font-mono"
          }`}
        >
          {countLabel}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {scenarios.map((scenario) => {
          const isSelected = scenario.id === selectedScenarioId;

          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => onSelectScenario(scenario.id)}
              aria-pressed={isSelected}
              className={`w-full text-start p-3 sm:p-3.5 rounded transition-colors relative flex flex-col gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                isSelected
                  ? "bg-canvas-950 border border-accent-cyan/60 shadow-sm border-s-2 border-s-accent-cyan"
                  : "bg-canvas-950/40 border border-border-subtle hover:border-border-panel hover:bg-canvas-900/60"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] sm:text-xs font-bold uppercase ${
                    isSelected ? "text-accent-cyan" : "text-fg-muted"
                  } ${isPersian ? "font-sans tracking-normal" : "font-mono tracking-widest"}`}
                >
                  {scenario.scenarioNumber}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                    isSelected
                      ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30"
                      : "bg-canvas-900 text-fg-secondary border border-border-subtle"
                  } ${isPersian ? "font-sans font-normal" : "font-mono tracking-wider"}`}
                >
                  {scenario.category}
                </span>
              </div>

              <span
                className={`text-xs sm:text-sm font-semibold leading-snug ${
                  isSelected ? "text-white" : "text-fg-secondary"
                } ${isPersian ? "font-sans tracking-normal" : "font-mono tracking-tight uppercase"}`}
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
