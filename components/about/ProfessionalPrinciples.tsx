import React from "react";
import { Shield, Activity, Cpu, Layers } from "lucide-react";
import { PrincipleItem, Locale } from "@/lib/i18n/types";

interface ProfessionalPrinciplesProps {
  header: string;
  subheader: string;
  principles: PrincipleItem[];
  locale?: Locale;
}

const principleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  reliability: Activity,
  security: Shield,
  automation: Cpu,
  leadership: Layers,
};

export const ProfessionalPrinciples: React.FC<ProfessionalPrinciplesProps> = ({
  header,
  subheader,
  principles,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <div className="w-full mt-10 pt-8 border-t border-white/10 text-start">
      <div className="flex items-center justify-between mb-5">
        <span
          className={`text-xs uppercase ${
            isPersian ? "font-sans font-medium text-fg-muted" : "font-mono tracking-wider text-fg-muted"
          }`}
        >
          {header}
        </span>
        <span
          className={`text-[11px] uppercase ${
            isPersian ? "font-sans font-medium text-accent-cyan/90" : "font-mono text-accent-cyan/80 tracking-widest"
          }`}
        >
          {subheader}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {principles.map((item) => {
          const Icon = principleIcons[item.id] || Activity;
          return (
            <div
              key={item.id}
              className="relative p-4 rounded bg-canvas-900/60 border border-border-subtle hover:border-accent-cyan/40 hover:bg-canvas-900 transition-all duration-200 group telemetry-corners flex flex-col justify-start"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    dir="ltr"
                    className="font-mono text-[10px] text-fg-subtle group-hover:text-accent-cyan/70 transition-colors"
                  >
                    {item.tag}
                  </span>
                  <div className="w-5 h-5 rounded bg-canvas-950 border border-border-subtle flex items-center justify-center text-fg-muted group-hover:text-accent-cyan transition-colors">
                    <Icon className="w-3 h-3" />
                  </div>
                </div>

                <div
                  className={`font-bold text-fg-primary mb-1.5 group-hover:text-accent-cyan transition-colors leading-snug ${
                    isPersian
                      ? "font-sans text-sm sm:text-base tracking-normal"
                      : "font-mono text-xs sm:text-sm tracking-wider uppercase"
                  }`}
                >
                  {item.label}
                </div>

                <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-sans font-normal">
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
