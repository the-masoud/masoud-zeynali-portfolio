import React from "react";
import { FileText, Mail, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { RecruiterDossierData, Locale } from "@/lib/i18n/types";

interface RecruiterDossierProps {
  data: RecruiterDossierData;
  locale?: Locale;
}

export const RecruiterDossier: React.FC<RecruiterDossierProps> = ({
  data,
  locale = "en",
}) => {
  const isPersian = locale === "fa";
  const {
    sectionMarker,
    role,
    focusLabel,
    focusValue,
    foundationLabel,
    foundationValue,
    scaleLabel,
    scaleValue,
    currentRoleLabel,
    currentRoleValue,
    locationLabel,
    locationValue,
    actions,
  } = data;

  return (
    <section
      id="recruiter-fast-scan"
      aria-label={sectionMarker}
      className="relative py-8 sm:py-10 border-t border-white/5 bg-canvas-950/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="rounded-lg bg-canvas-900/60 border border-border-subtle p-5 sm:p-6 lg:p-7 telemetry-corners shadow-lg shadow-black/40 text-start">
          {/* Header Bar: Section Marker & Primary Target Role */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Badge variant="cyan" dot={false}>
                {sectionMarker}
              </Badge>
            </div>

            <div
              className={`text-xs sm:text-sm font-semibold text-accent-cyan ${
                isPersian ? "font-sans tracking-normal" : "font-mono tracking-wide uppercase"
              }`}
            >
              {role}
            </div>
          </div>

          {/* High-Density Fact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-6">
            {/* Left Column: Core Technical Positioning */}
            <div className="space-y-4">
              {/* Focus */}
              <div className="space-y-1">
                <div
                  className={`text-[10px] sm:text-[11px] font-bold text-accent-cyan/90 uppercase ${
                    isPersian ? "font-sans" : "font-mono tracking-wider"
                  }`}
                >
                  {focusLabel}
                </div>
                <div
                  className={`text-xs sm:text-sm font-semibold text-fg-primary leading-relaxed ${
                    isPersian ? "font-sans" : "font-mono"
                  }`}
                >
                  {focusValue}
                </div>
              </div>

              {/* Foundation */}
              <div className="space-y-1">
                <div
                  className={`text-[10px] sm:text-[11px] font-bold text-fg-muted uppercase ${
                    isPersian ? "font-sans" : "font-mono tracking-wider"
                  }`}
                >
                  {foundationLabel}
                </div>
                <div className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
                  {foundationValue}
                </div>
              </div>
            </div>

            {/* Right Column: Scale, Governance & Organizational Context */}
            <div className="space-y-4">
              {/* Operating Scale */}
              <div className="space-y-1">
                <div
                  className={`text-[10px] sm:text-[11px] font-bold text-fg-muted uppercase ${
                    isPersian ? "font-sans" : "font-mono tracking-wider"
                  }`}
                >
                  {scaleLabel}
                </div>
                <div className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
                  {scaleValue}
                </div>
              </div>

              {/* Current Role & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="space-y-1">
                  <div
                    className={`text-[10px] sm:text-[11px] font-bold text-fg-muted uppercase ${
                      isPersian ? "font-sans" : "font-mono tracking-wider"
                    }`}
                  >
                    {currentRoleLabel}
                  </div>
                  <div className="text-xs sm:text-sm text-fg-primary font-sans font-medium">
                    {currentRoleValue}
                  </div>
                </div>

                <div className="space-y-1">
                  <div
                    className={`text-[10px] sm:text-[11px] font-bold text-fg-muted uppercase ${
                      isPersian ? "font-sans" : "font-mono tracking-wider"
                    }`}
                  >
                    {locationLabel}
                  </div>
                  <div className="text-xs sm:text-sm text-fg-secondary font-sans font-normal">
                    {locationValue}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
            <a
              href={actions.downloadCv.href}
              download={actions.downloadCv.downloadName}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded bg-accent-cyan/10 border border-accent-cyan/40 hover:bg-accent-cyan/20 hover:border-accent-cyan hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] text-accent-cyan text-xs font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan shadow-[0_0_12px_rgba(56,189,248,0.12)] min-h-[38px] ${
                isPersian ? "font-sans font-medium" : "font-mono"
              }`}
              aria-label={actions.downloadCv.ariaLabel}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{actions.downloadCv.label}</span>
            </a>

            <a
              href={actions.contact.href}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded bg-canvas-950 border border-border-panel hover:border-accent-cyan/50 hover:text-accent-cyan hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] text-fg-primary text-xs font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan min-h-[38px] ${
                isPersian ? "font-sans font-normal" : "font-mono"
              }`}
              aria-label={actions.contact.ariaLabel}
            >
              <Mail className="w-3.5 h-3.5 text-accent-cyan shrink-0" aria-hidden="true" />
              <span>{actions.contact.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-fg-muted rtl:rotate-[-90deg] shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
