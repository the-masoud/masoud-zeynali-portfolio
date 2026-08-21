import React from "react";
import { ArchitectureNodeData, Locale } from "@/lib/i18n/types";
import { ArrowRight, ArrowDown } from "lucide-react";

interface InfraForgeArchitectureProps {
  heading: string;
  flowLabel: string;
  subLabel: string;
  nodes: ArchitectureNodeData[];
  ariaLabel: string;
  locale?: Locale;
}

export const InfraForgeArchitecture: React.FC<InfraForgeArchitectureProps> = ({
  heading,
  flowLabel,
  subLabel,
  nodes,
  ariaLabel,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  // Human-readable description class — matched to EngineeringPrinciples benchmark (text-xs text-fg-secondary leading-relaxed font-sans font-normal)
  // Persian: IRANSansX, natural sizing, readable foreground, natural line-height, normal tracking
  // English: preserves original monospace uppercase telemetry styling
  const descriptionClass = isPersian
    ? "text-xs text-fg-secondary leading-relaxed font-sans font-normal"
    : "font-mono text-[10px] text-fg-muted uppercase tracking-wider leading-relaxed";

  const descriptionMobileClass = isPersian
    ? "text-xs text-fg-secondary leading-relaxed font-sans font-normal"
    : "font-mono text-[11px] text-fg-muted uppercase tracking-wider";

  // Primary node label: Persian gets IRANSansX Bold 700 at human scale; English keeps mono uppercase
  const primaryLabelClass = isPersian
    ? "font-sans font-bold text-sm text-fg-primary leading-snug mb-1.5 group-hover:text-white transition-colors"
    : "font-mono text-xs font-bold text-fg-primary tracking-wider uppercase leading-snug mb-1.5 group-hover:text-white transition-colors";

  const primaryLabelMobileClass = isPersian
    ? "font-sans font-bold text-sm text-fg-primary leading-snug mb-1 group-hover:text-white transition-colors"
    : "font-mono text-xs sm:text-sm font-bold text-fg-primary tracking-wider uppercase leading-snug mb-1 group-hover:text-white transition-colors";

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider uppercase">
            {heading}
          </span>
          <span className="text-border-panel">/</span>
          <span className="font-mono text-[11px] text-fg-muted tracking-wider uppercase">
            {flowLabel}
          </span>
        </div>
        <span className="font-mono text-[10px] text-fg-subtle uppercase tracking-widest">
          {subLabel}
        </span>
      </div>

      {/* Semantic DOM container for Screen Readers & Visual Layout */}
      <ol
        aria-label={ariaLabel}
        className="hidden lg:grid lg:grid-cols-5 gap-3 relative"
      >
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;
          return (
            <li
              key={node.id}
              className="relative flex flex-col justify-between p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group text-start"
            >
              <div>
                {/* NODE telemetry ID — remains monospace/cyan/tracked */}
                <div className="mb-2">
                  <span className="font-mono text-[10px] font-bold text-accent-cyan tracking-widest">
                    NODE {node.step}
                  </span>
                </div>

                {/* Primary node label */}
                <div className={primaryLabelClass}>
                  {node.primaryLabel}
                </div>

                {/* Human-readable description — Persian: IRANSansX readable; English: original telemetry */}
                <div className={descriptionClass}>
                  {node.supportingLabel}
                </div>
              </div>

              {/* Horizontal connector arrow to next node */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="absolute -end-3 top-1/2 -translate-y-1/2 z-10 hidden xl:flex items-center justify-center w-5 h-5 rounded-full bg-canvas-900 border border-border-subtle text-fg-subtle group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Vertical / Mobile & Tablet Flow (<1024px) */}
      <ol
        aria-label={ariaLabel}
        className="lg:hidden flex flex-col gap-2 relative"
      >
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;
          return (
            <React.Fragment key={node.id}>
              <li className="relative flex flex-col p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group text-start">
                {/* NODE telemetry ID */}
                <div className="mb-1.5">
                  <span className="font-mono text-[10px] font-bold text-accent-cyan tracking-widest">
                    NODE {node.step}
                  </span>
                </div>

                {/* Primary node label */}
                <div className={primaryLabelMobileClass}>
                  {node.primaryLabel}
                </div>

                {/* Human-readable description */}
                <div className={descriptionMobileClass}>
                  {node.supportingLabel}
                </div>
              </li>

              {/* Vertical connector to next node */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center py-0.5 text-fg-subtle"
                >
                  <div className="flex items-center gap-1">
                    <span className="w-px h-3 bg-white/10" />
                    <ArrowDown className="w-3.5 h-3.5 text-fg-subtle" />
                    <span className="w-px h-3 bg-white/10" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
};
