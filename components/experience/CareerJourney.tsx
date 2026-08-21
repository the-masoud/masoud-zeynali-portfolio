import React from "react";
import { Badge } from "@/components/ui/Badge";
import { CareerStage } from "./CareerStage";
import { Building2, Calendar, MapPin } from "lucide-react";
import { CareerJourneyData, Locale } from "@/lib/i18n/types";
import { SHARED_FACTS } from "@/lib/i18n/constants";

interface CareerJourneyProps {
  data: CareerJourneyData;
  locale?: Locale;
}

export const CareerJourney: React.FC<CareerJourneyProps> = ({
  data,
  locale = "en",
}) => {
  const {
    sectionMarker,
    technicalMarker,
    heading,
    subheading,
    employer,
    stages,
    verifiedScaleLabel,
    verifiedContextLabel,
  } = data;

  const isPersian = locale === "fa";

  return (
    <section
      id="experience"
      aria-labelledby="career-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header & Employer Context */}
        <div className="mb-12 sm:mb-16 text-start">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="cyan" dot={false}>
              {sectionMarker}
            </Badge>
            <span className="text-border-panel">|</span>
            <span
              className={`text-xs uppercase ${
                isPersian
                  ? "font-sans font-medium text-fg-muted"
                  : "font-mono tracking-wider text-fg-muted"
              }`}
            >
              {technicalMarker}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2
                id="career-heading"
                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-3 ${
                  isPersian
                    ? "font-sans tracking-normal"
                    : "font-mono font-black tracking-tight"
                }`}
              >
                {heading}
              </h2>
              <p className="text-sm sm:text-base text-fg-secondary font-sans max-w-2xl">
                {subheading}
              </p>
            </div>

            {/* Employer Dossier Card */}
            <div className="p-4 rounded bg-canvas-900/60 border border-border-panel telemetry-corners text-xs shrink-0 font-sans">
              <div className="flex items-center gap-2 text-fg-primary font-semibold mb-2">
                <Building2 className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>{employer.name}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-fg-muted">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-steel shrink-0" />
                  {isPersian ? (
                    <span className="flex items-center gap-1">
                      <bdi dir="ltr" className="font-mono">{SHARED_FACTS.career.startYear}</bdi>
                      <span>—</span>
                      <span>تاکنون</span>
                    </span>
                  ) : (
                    <span>{employer.tenure}</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-steel shrink-0" />
                  <span>{employer.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline Progression Rail */}
        <div className="relative">
          {stages.map((stage, index) => (
            <CareerStage
              key={stage.id}
              stage={stage}
              isLast={index === stages.length - 1}
              verifiedScaleLabel={verifiedScaleLabel}
              verifiedContextLabel={verifiedContextLabel}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
