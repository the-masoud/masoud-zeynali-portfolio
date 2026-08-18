import React from "react";
import { conceptualArchitectureNodes } from "./infraForgeData";
import { ArrowRight, ArrowDown } from "lucide-react";

export const InfraForgeArchitecture: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider uppercase">
            CONCEPTUAL ARCHITECTURE
          </span>
          <span className="text-border-panel">/</span>
          <span className="font-mono text-[11px] text-fg-muted tracking-wider uppercase">
            INTEGRATION FLOW
          </span>
        </div>
        <span className="font-mono text-[10px] text-fg-subtle uppercase tracking-widest">
          FIVE-NODE CONCEPTUAL BOUNDARY
        </span>
      </div>

      {/* Semantic DOM container for Screen Readers & Visual Layout */}
      <ol
        aria-label="InfraForge Conceptual Architecture Flow"
        className="hidden lg:grid lg:grid-cols-5 gap-3 relative"
      >
        {conceptualArchitectureNodes.map((node, index) => {
          const isLast = index === conceptualArchitectureNodes.length - 1;
          return (
            <li
              key={node.id}
              className="relative flex flex-col justify-between p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group"
            >
              <div>
                <div className="mb-2">
                  <span className="font-mono text-[10px] font-bold text-accent-cyan tracking-widest">
                    NODE {node.step}
                  </span>
                </div>

                <div className="font-mono text-xs font-bold text-fg-primary tracking-wider uppercase leading-snug mb-1.5 group-hover:text-white transition-colors">
                  {node.primaryLabel}
                </div>

                <div className="font-mono text-[10px] text-fg-muted uppercase tracking-wider leading-relaxed">
                  {node.supportingLabel}
                </div>
              </div>

              {/* Horizontal connector arrow to next node */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden xl:flex items-center justify-center w-5 h-5 rounded-full bg-canvas-900 border border-border-subtle text-fg-subtle group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors"
                >
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Vertical / Mobile & Tablet Flow (<1024px) */}
      <ol
        aria-label="InfraForge Conceptual Architecture Flow"
        className="lg:hidden flex flex-col gap-2 relative"
      >
        {conceptualArchitectureNodes.map((node, index) => {
          const isLast = index === conceptualArchitectureNodes.length - 1;
          return (
            <React.Fragment key={node.id}>
              <li className="relative flex flex-col p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group">
                <div className="mb-1.5">
                  <span className="font-mono text-[10px] font-bold text-accent-cyan tracking-widest">
                    NODE {node.step}
                  </span>
                </div>

                <div className="font-mono text-xs sm:text-sm font-bold text-fg-primary tracking-wider uppercase leading-snug mb-1 group-hover:text-white transition-colors">
                  {node.primaryLabel}
                </div>

                <div className="font-mono text-[11px] text-fg-muted uppercase tracking-wider">
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
