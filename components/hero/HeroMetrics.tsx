import React from "react";
import { Server, Users, ShieldCheck, Activity } from "lucide-react";
import { HeroMetricItem, Locale } from "@/lib/i18n/types";
import { SHARED_FACTS } from "@/lib/i18n/constants";
import { EvidenceTrigger } from "@/components/evidence/EvidenceTrigger";
import { EvidenceId } from "@/lib/evidence/types";

interface HeroMetricsProps {
  header: string;
  subheader: string;
  metrics: HeroMetricItem[];
  locale?: Locale;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  exp: Server,
  team: Users,
  endpoints: ShieldCheck,
};

const rawNumericValues: Record<string, string> = {
  exp: SHARED_FACTS.metrics.itExperienceYears,
  team: SHARED_FACTS.metrics.teamSupervisedCount,
  endpoints: SHARED_FACTS.metrics.endpointsCount,
};

const evidenceIdMap: Record<string, EvidenceId> = {
  exp: "career-tenure",
  team: "team-leadership",
  endpoints: "managed-endpoints",
};

export const HeroMetrics: React.FC<HeroMetricsProps> = ({
  header,
  subheader,
  metrics,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <div className="w-full mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`flex items-center gap-2 uppercase ${
            isPersian
              ? "text-xs sm:text-[13px] font-sans font-bold text-slate-300 tracking-normal"
              : "text-xs sm:text-[13px] font-mono font-medium text-slate-300 tracking-wider"
          }`}
        >
          <Activity className="w-4 h-4 text-accent-cyan shrink-0" />
          <span>{header}</span>
        </div>
        <span
          className={`hidden sm:inline-block ${
            isPersian
              ? "font-sans text-xs text-fg-muted font-normal"
              : "font-mono text-xs text-fg-muted tracking-wide"
          }`}
        >
          {subheader}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {metrics.map((metric) => {
          const Icon = iconMap[metric.id] || Server;
          const rawNum = rawNumericValues[metric.id];
          const evidenceId = evidenceIdMap[metric.id];
          const hasSuffix = metric.value.includes(" ");
          const suffix = hasSuffix ? metric.value.split(" ").slice(1).join(" ") : "";

          const triggerAriaLabel = isPersian
            ? `مشاهده شواهد برای ${metric.label}`
            : `View evidence for ${metric.label}`;

          return (
            <div
              key={metric.id}
              className="relative p-5 rounded bg-canvas-900/80 border border-border-panel hover:border-accent-cyan/40 transition-all duration-200 group telemetry-corners text-start flex flex-col justify-between"
            >
              {/* Header coordinate tag + Trigger + Icon */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  dir="ltr"
                  className="font-mono text-[9px] text-fg-subtle group-hover:text-accent-cyan/60 transition-colors opacity-75"
                >
                  {metric.tag}
                </span>
                <div className="flex items-center gap-2">
                  {evidenceId && (
                    <EvidenceTrigger
                      evidenceId={evidenceId}
                      ariaLabel={triggerAriaLabel}
                      locale={locale}
                      size="sm"
                    />
                  )}
                  <div className="w-6 h-6 rounded bg-canvas-950 border border-border-subtle flex items-center justify-center text-fg-muted group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-all">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Metric Value: Bidi-isolated numeric Latin token (~20, 15+, 300+) */}
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-fg-primary group-hover:text-white mb-1.5 flex items-baseline gap-1.5">
                <bdi dir="ltr" className="font-mono font-bold tracking-tight">
                  {rawNum || metric.value}
                </bdi>
                {suffix && (
                  <span className="text-sm sm:text-base font-normal text-fg-secondary font-sans">
                    {suffix}
                  </span>
                )}
              </div>

              {/* Metric Label: Primary focus */}
              <div
                className={`mb-1 ${
                  isPersian
                    ? "text-xs font-bold text-accent-cyan font-sans tracking-normal leading-snug"
                    : "text-xs font-semibold text-accent-cyan font-mono tracking-wider uppercase"
                }`}
              >
                {metric.label}
              </div>

              {/* Metric Annotation */}
              <div className="text-xs text-fg-secondary leading-relaxed font-sans font-normal mt-auto pt-1">
                {metric.annotation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
