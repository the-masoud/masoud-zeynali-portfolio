import React from "react";
import { Badge } from "@/components/ui/Badge";
import { professionalRecordMeta } from "./professionalRecordData";
import { ResumeAccess } from "./ResumeAccess";
import { CredentialsEducation } from "./CredentialsEducation";
import { DirectContact } from "./DirectContact";

export const ProfessionalRecord: React.FC = () => {
  const {
    sectionMarker,
    technicalLabel,
    sectionHeading,
    supportingStatement,
  } = professionalRecordMeta;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              {sectionMarker}
            </Badge>
            <span className="text-border-panel">|</span>
            <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
              {technicalLabel}
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight mb-3"
            >
              {sectionHeading}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary font-sans leading-relaxed max-w-3xl">
              {supportingStatement}
            </p>
          </div>
        </div>

        {/* Professional Record Dossier Container */}
        <div className="rounded bg-canvas-900/40 border border-border-subtle p-6 sm:p-8 lg:p-10 telemetry-corners">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column on Desktop / Top and Bottom on Mobile */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-1">
              <ResumeAccess />
              <div className="hidden lg:block">
                <DirectContact />
              </div>
            </div>

            {/* Right Column on Desktop / Middle on Mobile */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-2">
              <CredentialsEducation />
            </div>

            {/* Mobile Only: Direct Contact placed after Education */}
            <div className="lg:hidden flex flex-col gap-6 order-3">
              <DirectContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
