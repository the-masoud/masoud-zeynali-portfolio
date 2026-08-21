import React from "react";
import { InfraPrincipleData, Locale } from "@/lib/i18n/types";
import { KeyRound, Lock, UserCheck, ShieldAlert } from "lucide-react";

interface EngineeringPrinciplesProps {
  heading: string;
  flowLabel: string;
  subLabel: string;
  items: InfraPrincipleData[];
  locale?: Locale;
}

const principleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "least-privilege": Lock,
  "credential-hygiene": KeyRound,
  "controlled-onboarding": UserCheck,
  "automation-with-guardrails": ShieldAlert,
};

export const EngineeringPrinciples: React.FC<EngineeringPrinciplesProps> = ({
  heading,
  flowLabel,
  subLabel,
  items,
  locale = "en",
}) => {
  const isPersian = locale === "fa";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start">
        {items.map((principle) => {
          const Icon = principleIcons[principle.id] || Lock;
          return (
            <div
              key={principle.id}
              className="relative p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                {/* PRINCIPLE::NN machine tag — remains mono/cyan/tracked */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-accent-cyan/80 font-bold tracking-wider">
                    {principle.tag}
                  </span>
                  <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-fg-muted group-hover:text-accent-cyan transition-colors">
                    <Icon className="w-3 h-3" />
                  </div>
                </div>

                {/* Principle title — Persian: IRANSansX Bold 700, natural; English: mono uppercase tracked */}
                <h4
                  className={`leading-snug mb-2 group-hover:text-accent-cyan transition-colors ${
                    isPersian
                      ? "font-sans font-bold text-sm sm:text-base text-fg-primary tracking-normal"
                      : "font-mono text-xs font-bold text-fg-primary tracking-wider uppercase"
                  }`}
                >
                  <span>{principle.title}</span>
                  {principle.titleLtr && (
                    <>
                      {" "}
                      <bdi dir="ltr">({principle.titleLtr})</bdi>
                    </>
                  )}
                </h4>

                {/* Principle body description — unchanged (already readable) */}
                <p className="text-xs text-fg-secondary leading-relaxed font-sans font-normal">
                  {principle.statement}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
