import React from "react";
import { Server, Users, ShieldCheck, Activity } from "lucide-react";

interface MetricItem {
  id: string;
  value: string;
  label: string;
  annotation: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const metrics: MetricItem[] = [
  {
    id: "exp",
    value: "~20 YEARS",
    label: "IT & INFRASTRUCTURE",
    annotation: "Continuous enterprise systems engineering & operations",
    icon: Server,
    tag: "DOMAIN::INFRA_SYSTEMS",
  },
  {
    id: "team",
    value: "15+",
    label: "TECHNICAL TEAM SUPERVISED",
    annotation: "Direct supervision of engineers, administrators & IT specialists",
    icon: Users,
    tag: "LEADERSHIP::TEAM_GOV",
  },
  {
    id: "endpoints",
    value: "300+",
    label: "MANAGED WINDOWS ENDPOINTS",
    annotation: "Centralized Active Directory, Group Policy & endpoint management",
    icon: ShieldCheck,
    tag: "SCALE::ENDPOINT_OPS",
  },
];

export const HeroMetrics: React.FC = () => {
  return (
    <div className="w-full mt-12 sm:mt-16 pt-8 border-t border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono font-medium text-slate-300 uppercase tracking-wider">
          <Activity className="w-4 h-4 text-accent-cyan" />
          <span>VERIFIED SCALE & LEADERSHIP INDICATORS</span>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs text-fg-muted tracking-wide">
          ENTERPRISE SCALE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              className="relative p-5 rounded bg-canvas-900/80 border border-border-panel hover:border-accent-cyan/40 transition-all duration-200 group telemetry-corners"
            >
              {/* Header coordinate tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-fg-subtle group-hover:text-accent-cyan/70 transition-colors">
                  {metric.tag}
                </span>
                <div className="w-6 h-6 rounded bg-canvas-950 border border-border-subtle flex items-center justify-center text-fg-muted group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Metric Value */}
              <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-fg-primary group-hover:text-white mb-1.5 flex items-baseline gap-1">
                <span>{metric.value}</span>
              </div>

              {/* Metric Label */}
              <div className="font-mono text-xs font-semibold text-accent-cyan tracking-wider uppercase mb-1">
                {metric.label}
              </div>

              {/* Metric Annotation */}
              <div className="text-xs text-fg-secondary leading-relaxed font-sans">
                {metric.annotation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
