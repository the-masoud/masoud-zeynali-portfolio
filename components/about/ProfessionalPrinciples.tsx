import React from "react";
import { Shield, Activity, Cpu, Layers } from "lucide-react";

interface PrincipleItem {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const principles: PrincipleItem[] = [
  {
    id: "reliability",
    label: "RELIABILITY",
    description: "Infrastructure should remain stable and operational.",
    icon: Activity,
    tag: "INFRA::RELIABILITY",
  },
  {
    id: "security",
    label: "SECURITY",
    description: "Infrastructure and network decisions should be security-conscious.",
    icon: Shield,
    tag: "SECURITY::DESIGN",
  },
  {
    id: "automation",
    label: "AUTOMATION",
    description: "Recurring operational processes should be automated where appropriate.",
    icon: Cpu,
    tag: "OPS::AUTOMATION",
  },
  {
    id: "leadership",
    label: "LEADERSHIP",
    description: "Technical decisions should translate into practical organizational outcomes.",
    icon: Layers,
    tag: "LEADERSHIP::OUTCOMES",
  },
];

export const ProfessionalPrinciples: React.FC = () => {
  return (
    <div className="w-full mt-10 pt-8 border-t border-white/10">
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
          ENGINEERING DISCIPLINES & PRINCIPLES
        </span>
        <span className="font-mono text-[11px] text-accent-cyan/80 tracking-widest uppercase">
          CORE TENETS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="relative p-4 rounded bg-canvas-900/60 border border-border-subtle hover:border-accent-cyan/40 hover:bg-canvas-900 transition-all duration-200 group telemetry-corners flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-fg-subtle group-hover:text-accent-cyan/70 transition-colors">
                    {item.tag}
                  </span>
                  <div className="w-5 h-5 rounded bg-canvas-950 border border-border-subtle flex items-center justify-center text-fg-muted group-hover:text-accent-cyan transition-colors">
                    <Icon className="w-3 h-3" />
                  </div>
                </div>

                <div className="font-mono text-xs sm:text-sm font-bold text-fg-primary tracking-wider uppercase mb-1.5 group-hover:text-accent-cyan transition-colors">
                  {item.label}
                </div>

                <p className="text-xs text-fg-secondary leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
