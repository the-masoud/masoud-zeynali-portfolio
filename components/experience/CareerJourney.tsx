import React from "react";
import { Badge } from "@/components/ui/Badge";
import { careerStages, employerData } from "./careerData";
import { CareerStage } from "./CareerStage";
import { Building2, Calendar, MapPin } from "lucide-react";

export const CareerJourney: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="career-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header & Employer Context */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              02 / CAREER
            </Badge>
            <span className="text-border-panel">|</span>
            <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
              PROFESSIONAL TRAJECTORY
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2
                id="career-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight mb-3"
              >
                CAREER JOURNEY &amp; LEADERSHIP PROGRESSION
              </h2>
              <p className="text-sm sm:text-base text-fg-secondary font-sans max-w-2xl">
                Continuous progression across nearly two decades of professional IT experience,
                advancing from hands-on IT support and network operations to infrastructure ownership
                and departmental leadership.
              </p>
            </div>

            {/* Employer Dossier Card */}
            <div className="p-4 rounded bg-canvas-900/60 border border-border-panel telemetry-corners font-mono text-xs flex-shrink-0">
              <div className="flex items-center gap-2 text-fg-primary font-semibold mb-2">
                <Building2 className="w-4 h-4 text-accent-cyan" />
                <span>{employerData.name}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-fg-muted">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-steel" />
                  <span>{employerData.overallTenure}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-steel" />
                  <span>{employerData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline Progression Rail */}
        <div className="relative">
          {careerStages.map((stage, index) => (
            <CareerStage
              key={stage.id}
              stage={stage}
              isLast={index === careerStages.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
