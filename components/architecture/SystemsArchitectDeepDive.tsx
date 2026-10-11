import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ArrowDown, Shield, KeyRound, Split, FileSearch, Scale } from "lucide-react";
import { SystemsArchitectData, Locale } from "@/lib/i18n/types";
import { EvidenceTrigger } from "@/components/evidence/EvidenceTrigger";

interface SystemsArchitectDeepDiveProps {
  data: SystemsArchitectData;
  locale?: Locale;
}

export const SystemsArchitectDeepDive: React.FC<SystemsArchitectDeepDiveProps> = ({
  data,
  locale = "en",
}) => {
  const {
    sectionMarker,
    sectionCategory,
    sectionHeading,
    sectionSupporting,
    evidenceTriggerAriaLabel,
    pipeline,
    invariants,
    decisions,
  } = data;

  const isPersian = locale === "fa";

  const invariantIcons = [
    <Shield key="structured-tools" className="w-3.5 h-3.5" aria-hidden="true" />,
    <KeyRound key="credential-isolation" className="w-3.5 h-3.5" aria-hidden="true" />,
    <Split key="plane-separation" className="w-3.5 h-3.5" aria-hidden="true" />,
    <FileSearch key="telemetry-handling" className="w-3.5 h-3.5" aria-hidden="true" />,
  ];

  return (
    <section
      id="systems-architect"
      aria-labelledby="systems-architect-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20 content-visibility-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-start">
          <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              {sectionMarker}
            </Badge>
            <span className="text-border-panel select-none">|</span>
            <span
              className={`text-xs uppercase ${
                isPersian
                  ? "font-sans font-medium text-fg-muted"
                  : "font-mono tracking-wider text-fg-muted"
              }`}
            >
              {sectionCategory}
            </span>
            <span className="text-border-panel select-none">|</span>
            <EvidenceTrigger
              evidenceId="ai-agents-mcp"
              ariaLabel={evidenceTriggerAriaLabel}
              locale={locale}
              size="sm"
            />
          </div>

          <div className="max-w-4xl">
            <h2
              id="systems-architect-heading"
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-3 ${
                isPersian ? "font-sans tracking-normal" : "font-mono font-black tracking-tight"
              }`}
            >
              {sectionHeading}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary font-sans leading-relaxed max-w-3xl">
              {sectionSupporting}
            </p>
          </div>
        </div>

        {/* Structured Engineering Dossier Container */}
        <div className="rounded bg-canvas-900/40 border border-border-subtle p-5 sm:p-7 lg:p-8 telemetry-corners space-y-8 sm:space-y-10">
          {/* Module A: Operational Control Flow (4-Stage Pipeline) */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5 text-start">
              <div className="flex items-center gap-2.5">
                <span
                  className={`text-xs font-bold text-accent-cyan uppercase ${
                    isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {pipeline.heading}
                </span>
                <span className="text-border-panel select-none">/</span>
                <span
                  className={`text-[11px] text-fg-muted uppercase ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {pipeline.subLabel}
                </span>
              </div>
            </div>

            {/* Desktop Pipeline Flow (>=1024px) */}
            <ol
              aria-label={pipeline.ariaLabel}
              className="hidden lg:grid lg:grid-cols-4 gap-3 relative"
            >
              {pipeline.nodes.map((node, index) => {
                const isLast = index === pipeline.nodes.length - 1;
                return (
                  <li
                    key={node.step}
                    tabIndex={0} className="architecture-node flow-item relative flex flex-col justify-between p-4 rounded-xl bg-canvas-950/90 border border-border-subtle group text-start"
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] font-bold text-accent-cyan tracking-widest">
                          {node.step}
                        </span>
                        <span
                          className={`text-[10px] text-fg-subtle uppercase ${
                            isPersian ? "font-sans" : "font-mono tracking-wider"
                          }`}
                        >
                          {node.subtitle}
                        </span>
                      </div>

                      {/* Primary Node Title */}
                      <h3
                        className={`interaction-title text-xs sm:text-sm font-bold text-fg-primary leading-snug mb-2 group-hover:text-white transition-colors ${
                          isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase"
                        }`}
                      >
                        {node.title}
                      </h3>

                      {/* Node Description */}
                      <p className="text-xs text-slate-300/90 leading-relaxed font-sans font-normal">
                        {node.description}
                      </p>
                    </div>

                    {/* Horizontal Connector Arrow */}
                    {!isLast && (
                      <div
                        aria-hidden="true"
                        className="architecture-connection absolute -end-3 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-canvas-900 border border-border-subtle text-fg-subtle group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors"
                      >
                        <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>

            {/* Mobile / Tablet Pipeline Flow (<1024px) */}
            <ol
              aria-label={pipeline.ariaLabel}
              className="lg:hidden flex flex-col gap-2 relative"
            >
              {pipeline.nodes.map((node, index) => {
                const isLast = index === pipeline.nodes.length - 1;
                return (
                  <li key={node.step} className="flex flex-col">
                    <div tabIndex={0} className="architecture-node flow-item relative flex flex-col p-4 rounded-xl bg-canvas-950/90 border border-border-subtle group text-start">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[10px] font-bold text-accent-cyan tracking-widest">
                          {node.step}
                        </span>
                        <span
                          className={`text-[10px] text-fg-subtle uppercase ${
                            isPersian ? "font-sans" : "font-mono tracking-wider"
                          }`}
                        >
                          {node.subtitle}
                        </span>
                      </div>

                      <h3
                        className={`interaction-title text-xs sm:text-sm font-bold text-fg-primary leading-snug mb-1.5 group-hover:text-white transition-colors ${
                          isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase"
                        }`}
                      >
                        {node.title}
                      </h3>

                      <p className="text-xs text-slate-300/90 leading-relaxed font-sans font-normal">
                        {node.description}
                      </p>
                    </div>

                    {/* Vertical Connector Arrow */}
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
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Module B: Security & Operational Boundaries (2x2 Grid) */}
          <div className="pt-6 border-t border-white/5 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5 text-start">
              <div className="flex items-center gap-2.5">
                <span
                  className={`text-xs font-bold text-accent-cyan uppercase ${
                    isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {invariants.heading}
                </span>
                <span className="text-border-panel select-none">/</span>
                <span
                  className={`text-[11px] text-fg-muted uppercase ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {invariants.subLabel}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-start">
              {invariants.items.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan shrink-0">
                          {invariantIcons[idx % invariantIcons.length]}
                        </div>
                        <h3
                          className={`interaction-title text-xs sm:text-sm font-bold text-fg-primary group-hover:text-accent-cyan transition-colors leading-snug ${
                            isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <span
                        className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-canvas-900 border border-border-subtle text-fg-muted shrink-0 uppercase ${
                          isPersian ? "font-sans" : "font-mono tracking-wider"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Module C: Architectural Design Decisions (2-Column Comparative Cards) */}
          <div className="pt-6 border-t border-white/5 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5 text-start">
              <div className="flex items-center gap-2.5">
                <span
                  className={`text-xs font-bold text-accent-cyan uppercase ${
                    isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {decisions.heading}
                </span>
                <span className="text-border-panel select-none">/</span>
                <span
                  className={`text-[11px] text-fg-muted uppercase ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {decisions.subLabel}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 text-start">
              {decisions.items.map((decision, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors group flex flex-col justify-start"
                >
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan shrink-0 mt-0.5">
                      <Scale className="w-3 h-3" aria-hidden="true" />
                    </div>
                    <h3
                      className={`interaction-title text-xs sm:text-sm font-bold text-fg-primary group-hover:text-accent-cyan transition-colors leading-snug ${
                        isPersian ? "font-sans tracking-normal" : "font-mono tracking-wider uppercase"
                      }`}
                    >
                      {decision.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal ps-7">
                    {decision.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
