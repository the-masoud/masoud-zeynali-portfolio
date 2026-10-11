import React from "react";
import type { ArchitectureNodeData, Locale } from "@/lib/i18n/types";
import { ArrowRight, ArrowDown } from "lucide-react";

interface InfraForgeArchitectureProps {
  heading: string;
  flowLabel: string;
  subLabel: string;
  nodes: ArchitectureNodeData[];
  ariaLabel: string;
  locale?: Locale;
}

export const InfraForgeArchitecture: React.FC<InfraForgeArchitectureProps> = ({ heading, flowLabel, subLabel, nodes, ariaLabel, locale = "en" }) => {
  const isPersian = locale === "fa";

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-white/5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-sans text-xs font-semibold text-accent-cyan">{heading}</span>
          <span className="text-border-panel" aria-hidden="true">/</span>
          <span className="font-sans text-xs text-fg-secondary">{flowLabel}</span>
        </div>
        <span className="font-sans text-xs text-fg-secondary">{subLabel}</span>
      </div>
      <ol aria-label={ariaLabel} className="flex flex-col lg:grid lg:grid-cols-5 gap-3">
        {nodes.map((node, index) => (
          <li key={node.id} className="flow-item relative">
            <div tabIndex={0} className="architecture-node h-full flex flex-col gap-2 p-4 rounded-xl bg-canvas-950/80 border border-border-subtle text-start">
              <span className="font-mono text-[10px] text-accent-cyan" dir="ltr">NODE {node.step}</span>
              <span className={`interaction-title text-sm font-semibold text-fg-primary leading-6 ${isPersian ? "font-sans" : "font-mono"}`}>{node.primaryLabel}</span>
              <span className="text-xs text-fg-secondary leading-6 font-sans">{node.supportingLabel}</span>
            </div>
            {index < nodes.length - 1 && (
              <span aria-hidden="true" className="architecture-connection flex justify-center pt-3 lg:absolute lg:-end-3 lg:top-1/2 lg:-translate-y-1/2 lg:pt-0 text-fg-muted">
                <ArrowRight size={15} className="hidden lg:block rtl:rotate-180" />
                <ArrowDown size={15} className="lg:hidden" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
