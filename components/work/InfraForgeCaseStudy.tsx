import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Terminal, AlertCircle } from "lucide-react";
import { InfraForgeArchitecture } from "./InfraForgeArchitecture";
import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { DevelopmentScope } from "./DevelopmentScope";
import { EngineeringNotes } from "./EngineeringNotes";
import { InfraForgeData, Locale } from "@/lib/i18n/types";
import { EvidenceTrigger } from "@/components/evidence/EvidenceTrigger";

interface InfraForgeCaseStudyProps {
  data: InfraForgeData;
  locale?: Locale;
}

export const InfraForgeCaseStudy: React.FC<InfraForgeCaseStudyProps> = ({
  data,
  locale = "en",
}) => {
  const {
    sectionMarker,
    sectionCategory,
    sectionHeading,
    sectionSupporting,
    projectMarker,
    caseDossierLabel,
    projectName,
    descriptor,
    classification,
    developmentState,
    repositoryAction,
    repositoryUrl,
    repositoryAriaLabel,
    problem,
    systemIntent,
    architecture,
    principles,
    developmentScope,
    engineeringNotes,
  } = data;

  const isPersian = locale === "fa";

  const triggerAriaLabel = isPersian
    ? "مشاهده شواهد برای پروژه InfraForge"
    : "View evidence for InfraForge project";

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
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
              {sectionCategory}
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              id="work-heading"
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

        {/* Featured Engineering Dossier Container */}
        <article
          aria-labelledby="project-title-infraforge"
          className="rounded bg-canvas-900/40 border border-border-subtle p-5 sm:p-7 lg:p-8 telemetry-corners space-y-8 sm:space-y-10"
        >
          {/* A. Project Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10 text-start">
            {/* Left: Marker, Name, Descriptor */}
            <div className="flex flex-col max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-bold text-accent-cyan uppercase ${
                    isPersian ? "font-sans tracking-normal" : "font-mono tracking-widest"
                  }`}
                >
                  {projectMarker}
                </span>
                <span className="text-border-panel select-none">/</span>
                <span
                  className={`text-[10px] text-fg-subtle uppercase ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {caseDossierLabel}
                </span>
              </div>

              <h3
                id="project-title-infraforge"
                className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-tight text-white uppercase leading-none mb-2.5"
              >
                {projectName}
              </h3>

              <p
                className={`text-xs sm:text-sm text-accent-cyan/90 font-medium ${
                  isPersian ? "font-sans tracking-normal" : "font-mono tracking-wide"
                }`}
              >
                {descriptor}
              </p>
            </div>

            {/* Right: Classification, Development State, Evidence Trigger, Repository Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 sm:gap-4 lg:gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-2.5 py-1 rounded bg-canvas-950 border border-border-subtle text-[10px] sm:text-xs text-fg-secondary uppercase ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {classification}
                </span>
                <span
                  className={`px-2.5 py-1 rounded bg-canvas-950 border border-accent-cyan/40 text-[10px] sm:text-xs text-accent-cyan uppercase ${
                    isPersian ? "font-sans font-normal" : "font-mono tracking-wider"
                  }`}
                >
                  {developmentState}
                </span>
                <EvidenceTrigger
                  evidenceId="infraforge"
                  ariaLabel={triggerAriaLabel}
                  locale={locale}
                  size="sm"
                />
              </div>

              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded bg-canvas-950 border border-border-panel hover:border-accent-cyan text-xs font-semibold text-fg-primary hover:text-accent-cyan transition-all focus-visible:ring-2 focus-visible:ring-accent-cyan shadow-sm min-h-[38px] ${
                  isPersian ? "font-sans" : "font-mono"
                }`}
                aria-label={repositoryAriaLabel}
              >
                <Terminal className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <span>{repositoryAction}</span>
                <ExternalLink className="w-3.5 h-3.5 text-fg-muted ms-0.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* B & C. The Problem & System Intent */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 pb-6 border-b border-white/5 text-start">
            {/* The Problem */}
            <div className="flex flex-col p-4 sm:p-5 rounded bg-canvas-950/80 border border-border-subtle">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan shrink-0">
                  <AlertCircle className="w-3 h-3" />
                </div>
                <h4
                  className={`text-sm sm:text-base font-bold text-fg-primary ${
                    isPersian ? "font-sans tracking-normal" : "font-mono text-xs sm:text-sm tracking-wider uppercase"
                  }`}
                >
                  {problem.heading}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
                {problem.copy}
              </p>
            </div>

            {/* System Intent */}
            <div className="flex flex-col p-4 sm:p-5 rounded bg-canvas-950/80 border border-border-subtle">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan shrink-0">
                  <Terminal className="w-3 h-3" />
                </div>
                <h4
                  className={`text-sm sm:text-base font-bold text-fg-primary ${
                    isPersian ? "font-sans tracking-normal" : "font-mono text-xs sm:text-sm tracking-wider uppercase"
                  }`}
                >
                  {systemIntent.heading}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
                {systemIntent.copy}
              </p>
            </div>
          </div>

          {/* D. Conceptual Architecture Flow */}
          <div className="pb-6 border-b border-white/5">
            <InfraForgeArchitecture
              heading={architecture.heading}
              flowLabel={architecture.flowLabel}
              subLabel={architecture.subLabel}
              nodes={architecture.nodes}
              ariaLabel={architecture.ariaLabel}
              locale={locale}
            />
          </div>

          {/* E. Engineering Principles */}
          <div className="pb-6 border-b border-white/5">
            <EngineeringPrinciples
              heading={principles.heading}
              flowLabel={principles.flowLabel}
              subLabel={principles.subLabel}
              items={principles.items}
              locale={locale}
            />
          </div>

          {/* F. Development Scope */}
          <div className="pb-6 border-b border-white/5">
            <DevelopmentScope
              heading={developmentScope.heading}
              flowLabel={developmentScope.flowLabel}
              subLabel={developmentScope.subLabel}
              tags={developmentScope.tags}
              ariaLabel={developmentScope.ariaLabel}
            />
          </div>

          {/* G. Engineering Notes & Security Constraints */}
          <div>
            <EngineeringNotes
              heading={engineeringNotes.heading}
              flowLabel={engineeringNotes.flowLabel}
              subLabel={engineeringNotes.subLabel}
              serverOnboarding={engineeringNotes.serverOnboarding}
              inventoryReconciliation={engineeringNotes.inventoryReconciliation}
              securityConstraints={engineeringNotes.securityConstraints}
              locale={locale}
            />
          </div>
        </article>
      </div>
    </section>
  );
};
