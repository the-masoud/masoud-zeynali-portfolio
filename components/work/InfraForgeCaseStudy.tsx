import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Terminal, AlertCircle } from "lucide-react";
import { infraForgeMetadata } from "./infraForgeData";
import { InfraForgeArchitecture } from "./InfraForgeArchitecture";
import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { DevelopmentScope } from "./DevelopmentScope";
import { EngineeringNotes } from "./EngineeringNotes";

export const InfraForgeCaseStudy: React.FC = () => {
  const {
    sectionMarker,
    sectionCategory,
    sectionHeading,
    sectionSupporting,
    projectMarker,
    projectName,
    descriptor,
    classification,
    developmentState,
    repositoryAction,
    repositoryUrl,
    problem,
    systemIntent,
  } = infraForgeMetadata;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              {sectionMarker}
            </Badge>
            <span className="text-border-panel">|</span>
            <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
              {sectionCategory}
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              id="work-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight mb-3"
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
          className="rounded bg-canvas-900/40 border border-border-subtle p-6 sm:p-8 lg:p-10 telemetry-corners space-y-10 sm:space-y-12"
        >
          {/* A. Project Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/10">
            {/* Left: Marker, Name, Descriptor */}
            <div className="flex flex-col max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase">
                  {projectMarker}
                </span>
                <span className="text-border-panel">/</span>
                <span className="font-mono text-[10px] text-fg-subtle tracking-wider uppercase">
                  CASE DOSSIER
                </span>
              </div>

              <h3
                id="project-title-infraforge"
                className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-tight text-white uppercase leading-none mb-2.5"
              >
                {projectName}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-accent-cyan/90 font-medium tracking-wide">
                {descriptor}
              </p>
            </div>

            {/* Right: Classification, Development State, Repository Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 sm:gap-4 lg:gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-canvas-950 border border-border-subtle font-mono text-[10px] sm:text-xs text-fg-secondary uppercase tracking-wider">
                  {classification}
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-950 border border-accent-cyan/40 font-mono text-[10px] sm:text-xs text-accent-cyan uppercase tracking-wider">
                  {developmentState}
                </span>
              </div>

              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded bg-canvas-950 border border-border-panel hover:border-accent-cyan text-xs font-mono font-semibold text-fg-primary hover:text-accent-cyan transition-all focus-visible:ring-2 focus-visible:ring-accent-cyan shadow-sm min-h-[40px]"
                aria-label={`View repository for ${projectName} on GitHub (opens in a new tab)`}
              >
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                <span>{repositoryAction}</span>
                <ExternalLink className="w-3.5 h-3.5 text-fg-muted ml-0.5" />
              </a>
            </div>
          </div>

          {/* B & C. The Problem & System Intent */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pb-8 border-b border-white/5">
            {/* The Problem */}
            <div className="flex flex-col p-5 sm:p-6 rounded bg-canvas-950/80 border border-border-subtle">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan">
                  <AlertCircle className="w-3 h-3" />
                </div>
                <h4 className="font-mono text-xs sm:text-sm font-bold text-fg-primary tracking-wider uppercase">
                  {problem.heading}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {problem.copy}
              </p>
            </div>

            {/* System Intent */}
            <div className="flex flex-col p-5 sm:p-6 rounded bg-canvas-950/80 border border-border-subtle">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-accent-cyan">
                  <Terminal className="w-3 h-3" />
                </div>
                <h4 className="font-mono text-xs sm:text-sm font-bold text-fg-primary tracking-wider uppercase">
                  {systemIntent.heading}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {systemIntent.copy}
              </p>
            </div>
          </div>

          {/* D. Conceptual Architecture Flow */}
          <div className="pb-8 border-b border-white/5">
            <InfraForgeArchitecture />
          </div>

          {/* E. Engineering Principles */}
          <div className="pb-8 border-b border-white/5">
            <EngineeringPrinciples />
          </div>

          {/* F. Development Scope */}
          <div className="pb-8 border-b border-white/5">
            <DevelopmentScope />
          </div>

          {/* G. Engineering Notes & Security Constraints */}
          <div>
            <EngineeringNotes />
          </div>
        </article>
      </div>
    </section>
  );
};
