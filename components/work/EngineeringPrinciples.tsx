import React from "react";
import { engineeringPrinciples } from "./infraForgeData";
import { KeyRound, Lock, UserCheck, ShieldAlert } from "lucide-react";

const principleIcons = {
  "least-privilege": Lock,
  "credential-hygiene": KeyRound,
  "controlled-onboarding": UserCheck,
  "automation-with-guardrails": ShieldAlert,
};

export const EngineeringPrinciples: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider uppercase">
            ENGINEERING PRINCIPLES
          </span>
          <span className="text-border-panel">/</span>
          <span className="font-mono text-[11px] text-fg-muted tracking-wider uppercase">
            OPERATIONAL BOUNDARIES
          </span>
        </div>
        <span className="font-mono text-[10px] text-fg-subtle uppercase tracking-widest">
          FOUR PROJECT TENETS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {engineeringPrinciples.map((principle) => {
          const Icon = principleIcons[principle.id as keyof typeof principleIcons] || Lock;
          return (
            <div
              key={principle.id}
              className="relative p-4 rounded bg-canvas-950/90 border border-border-subtle hover:border-accent-cyan/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-accent-cyan/80 font-bold tracking-wider">
                    {principle.tag}
                  </span>
                  <div className="w-5 h-5 rounded bg-canvas-900 border border-border-subtle flex items-center justify-center text-fg-muted group-hover:text-accent-cyan transition-colors">
                    <Icon className="w-3 h-3" />
                  </div>
                </div>

                <h4 className="font-mono text-xs font-bold text-fg-primary tracking-wider uppercase leading-snug mb-2 group-hover:text-accent-cyan transition-colors">
                  {principle.title}
                </h4>

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
