import React from "react";
import { ArrowRight, ArrowDownRight, CheckCircle2, CircleDashed, AlertTriangle, Layers3, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { getProjectPortfolio, type ProjectStatus } from "./projectPortfolioData";

interface ProjectPortfolioProps {
  locale: Locale;
}

const statusStyles: Record<ProjectStatus, string> = {
  verified: "border-emerald-500/25 bg-emerald-400/5 text-emerald-300",
  "in-progress": "border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan",
  blocked: "border-amber-400/30 bg-amber-400/5 text-amber-300",
};

function StatusIcon({ tone }: { tone: ProjectStatus }) {
  if (tone === "verified") return <CheckCircle2 size={13} aria-hidden="true" />;
  if (tone === "blocked") return <AlertTriangle size={13} aria-hidden="true" />;
  return <CircleDashed size={13} aria-hidden="true" />;
}

export function ProjectPortfolio({ locale }: ProjectPortfolioProps) {
  const copy = getProjectPortfolio(locale);
  const isPersian = locale === "fa";

  return (
    <div className="mt-14 sm:mt-20">
      <div className="mb-8 sm:mb-10 border-b border-white/10 pb-7 text-start">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className={isPersian
            ? "text-xs font-semibold text-accent-cyan font-sans"
            : "text-[11px] font-mono font-semibold tracking-[0.18em] text-accent-cyan uppercase"}
          >
            {copy.eyebrow}
          </span>
          <span className="h-px w-8 bg-border-panel" aria-hidden="true" />
          <span className={isPersian
            ? "text-xs text-fg-muted font-sans"
            : "text-[10px] text-fg-muted font-mono tracking-wider uppercase"}
          >
            {copy.countLabel}
          </span>
        </div>
        <h3 className={isPersian
          ? "max-w-4xl text-2xl sm:text-3xl font-bold font-sans leading-relaxed text-white"
          : "max-w-4xl text-xl sm:text-2xl md:text-3xl font-black font-mono tracking-tight leading-tight text-white uppercase"}
        >
          {copy.heading}
        </h3>
        <p className="mt-3 max-w-3xl text-sm sm:text-base leading-7 text-fg-secondary font-sans">
          {copy.introduction}
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
        {copy.projects.map((project, index) => (
          <article
            id={project.id}
            key={project.id}
            aria-labelledby={project.id + "-title"}
            className="group flex flex-col scroll-mt-24 rounded-lg border border-border-subtle bg-canvas-900/40 p-5 sm:p-7 text-start transition-colors duration-200 hover:border-accent-cyan/25"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <span className="font-mono text-[11px] font-bold text-accent-cyan tracking-[0.15em]" dir="ltr">
                PROJECT / {String(index + 2).padStart(2, "0")}
              </span>
              {!["oasisops", "sewerpilot", "plotwise"].includes(project.id) && (
                <span
                  className={"inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium " + statusStyles[project.statusTone] + (isPersian ? " font-sans" : " font-mono")}
                >
                  <StatusIcon tone={project.statusTone} />
                  {project.status}
                </span>
              )}
            </div>

            <p className={isPersian
              ? "mb-2 text-[11px] text-fg-muted font-sans"
              : "mb-2 text-[10px] text-fg-muted font-mono uppercase tracking-widest"}
            >
              {project.domain}
            </p>
            <h4
              id={project.id + "-title"}
              className="text-2xl sm:text-[28px] leading-none font-mono font-extrabold tracking-tight text-white"
              dir="ltr"
            >
              {project.name}
            </h4>
            <p className="mt-3 text-base sm:text-lg font-semibold leading-snug text-fg-primary font-sans">
              {project.tagline}
            </p>
            <p className="mt-3 text-sm leading-7 text-fg-secondary font-sans">
              {project.overview}
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="mb-3 flex items-center gap-2 text-fg-muted">
                <Layers3 size={14} className="text-accent-cyan" aria-hidden="true" />
                <h5 className={isPersian ? "text-xs font-semibold font-sans" : "text-[11px] font-mono font-semibold uppercase tracking-widest"}>
                  {copy.architectureLabel}
                </h5>
              </div>
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-2.5" aria-label={copy.architectureLabel}>
                {project.architecture.map((node, nodeIndex) => (
                  <li key={node} className="inline-flex items-center gap-2">
                    <span className="rounded border border-border-subtle bg-canvas-950/70 px-2.5 py-2 text-[11px] sm:text-xs text-fg-primary leading-snug font-sans">
                      {node}
                    </span>
                    {nodeIndex < project.architecture.length - 1 && (
                      <ArrowRight
                        size={12}
                        aria-hidden="true"
                        className={"shrink-0 text-accent-cyan/60 " + (isPersian ? "rotate-180" : "")}
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-5 border-t border-white/5 pt-5">
              <h5 className={isPersian
                ? "mb-3 text-xs font-semibold text-fg-muted font-sans"
                : "mb-3 text-[11px] font-mono uppercase tracking-widest text-fg-muted"}
              >
                {copy.stackLabel}
              </h5>
              <ul className="flex flex-wrap gap-2" aria-label={copy.stackLabel}>
                {project.technologies.map((technology) => (
                  <li key={technology} dir="ltr" className="rounded bg-canvas-950 px-2.5 py-1.5 border border-border-subtle font-mono text-[11px] text-slate-300">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <details className="mt-6 border-t border-white/10 pt-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded py-1 text-accent-cyan hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan">
                <span className={isPersian
                  ? "text-xs sm:text-sm font-bold font-sans"
                  : "text-[11px] sm:text-xs font-bold font-mono uppercase tracking-wider"}
                >
                  {isPersian ? "جزئیات مطالعه موردی" : "EXPLORE ENGINEERING DOSSIER"}
                </span>
                <ArrowDownRight size={17} aria-hidden="true" className="transition-transform duration-200 [[open]>&]:rotate-90" />
              </summary>
              <div className="mt-5 space-y-4 text-start">
                <div className="rounded border border-border-subtle bg-canvas-950/70 p-4">
                  <h5 className="mb-2 text-xs font-bold text-accent-cyan font-sans">{copy.challengeLabel}</h5>
                  <p className="text-sm leading-7 text-fg-secondary font-sans">{project.challenge}</p>
                </div>
                <div className="rounded border border-border-subtle bg-canvas-950/70 p-4">
                  <h5 className="mb-2 text-xs font-bold text-accent-cyan font-sans">{copy.decisionLabel}</h5>
                  <p className="text-sm leading-7 text-fg-secondary font-sans">{project.engineering}</p>
                </div>
                <div className="rounded border border-border-subtle bg-canvas-950/70 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck size={14} className="shrink-0 text-accent-cyan" aria-hidden="true" />
                    <h5 className="text-xs font-bold text-fg-primary font-sans">{copy.evidenceLabel}</h5>
                  </div>
                  <p className="text-sm leading-7 text-fg-secondary font-sans">{project.evidence}</p>
                </div>
              </div>
            </details>
            {["oasisops", "sewerpilot", "plotwise"].includes(project.id) && (
              <div className="mt-6 flex flex-wrap items-center justify-end border-t border-white/10 pt-4">
                <span className={"inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium " + statusStyles[project.statusTone] + (isPersian ? " font-sans" : " font-mono")}>
                  <StatusIcon tone={project.statusTone} />
                  {project.status}
                </span>
              </div>
            )}
          </article>
        ))}
      </div>

      <p className="mt-6 max-w-4xl border-s-2 border-accent-cyan/30 ps-4 text-xs sm:text-sm leading-7 text-fg-muted font-sans text-start">
        {copy.disclosure}
      </p>
    </div>
  );
}
