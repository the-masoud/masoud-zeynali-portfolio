import React from "react";
import { Badge } from "@/components/ui/Badge";
import { expertiseDomains } from "./expertiseData";
import { ExpertiseDomain } from "./ExpertiseDomain";

export const ExpertiseLandscape: React.FC = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              03 / EXPERTISE
            </Badge>
            <span className="text-border-panel">|</span>
            <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
              TECHNICAL MATRIX
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              id="expertise-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight mb-3"
            >
              TECHNOLOGY LANDSCAPE
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary font-sans leading-relaxed max-w-3xl">
              A technical landscape spanning enterprise systems, network security,
              messaging, web and cloud services, endpoint operations, and modern
              AI-assisted automation.
            </p>
          </div>
        </div>

        {/* Technical Landscape Matrix Container */}
        <div className="rounded bg-canvas-900/40 border border-border-subtle p-6 sm:p-8 lg:p-10 telemetry-corners">
          {/* Matrix Column Header (Desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:grid grid-cols-12 gap-8 pb-4 mb-2 border-b border-white/10 text-[11px] font-mono text-fg-muted tracking-wider uppercase"
          >
            <div className="col-span-3">DOMAIN / DISCIPLINE</div>
            <div className="col-span-4">CAPABILITY FOCUS</div>
            <div className="col-span-5">VERIFIED TECHNOLOGIES</div>
          </div>

          {/* Matrix Domain Rows */}
          <div className="divide-y divide-transparent">
            {expertiseDomains.map((domain, index) => (
              <ExpertiseDomain
                key={domain.id}
                domain={domain}
                isLast={index === expertiseDomains.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
