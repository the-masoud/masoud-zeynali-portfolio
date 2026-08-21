import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ResumeAccess } from "./ResumeAccess";
import { CredentialsEducation } from "./CredentialsEducation";
import { DirectContact } from "./DirectContact";
import { ProfessionalRecordData, Locale } from "@/lib/i18n/types";

interface ProfessionalRecordProps {
  data: ProfessionalRecordData;
  locale?: Locale;
}

export const ProfessionalRecord: React.FC<ProfessionalRecordProps> = ({
  data,
  locale = "en",
}) => {
  const {
    sectionMarker,
    technicalLabel,
    sectionHeading,
    supportingStatement,
    resume,
    transcript,
    educationHeading,
    certifications,
    education,
    contact,
  } = data;

  const isPersian = locale === "fa";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-start">
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
              {technicalLabel}
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              id="contact-heading"
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-3 ${
                isPersian ? "font-sans tracking-normal" : "font-mono font-black tracking-tight"
              }`}
            >
              {sectionHeading}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary font-sans leading-relaxed max-w-3xl">
              {supportingStatement}
            </p>
          </div>
        </div>

        {/* Professional Record Dossier Container */}
        <div className="rounded bg-canvas-900/40 border border-border-subtle p-5 sm:p-7 lg:p-8 telemetry-corners">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column on Desktop / Top and Bottom on Mobile */}
            <div className="lg:col-span-6 flex flex-col gap-5 order-1 lg:order-1">
              <ResumeAccess
                heading={resume.heading}
                supportingCopy={resume.supportingCopy}
                formatBadge={resume.formatBadge}
                downloadUrl={resume.downloadUrl}
                fileName={resume.fileName}
                actionLabel={resume.actionLabel}
              />
              <div className="hidden lg:block">
                <DirectContact
                  heading={contact.heading}
                  name={contact.name}
                  title={contact.title}
                  specialization={contact.specialization}
                  location={contact.location}
                  email={contact.email}
                  emailActionLabel={contact.emailActionLabel}
                  githubDisplay={contact.githubDisplay}
                  githubUrl={contact.githubUrl}
                  githubActionLabel={contact.githubActionLabel}
                  githubAriaLabel={contact.githubAriaLabel}
                />
              </div>
            </div>

            {/* Right Column on Desktop / Middle on Mobile */}
            <div className="lg:col-span-6 flex flex-col gap-5 order-2 lg:order-2">
              <CredentialsEducation
                transcript={transcript}
                educationHeading={educationHeading}
                certifications={certifications}
                education={education}
              />
            </div>

            {/* Mobile Only: Direct Contact placed after Education */}
            <div className="lg:hidden flex flex-col gap-5 order-3">
              <DirectContact
                heading={contact.heading}
                name={contact.name}
                title={contact.title}
                specialization={contact.specialization}
                location={contact.location}
                email={contact.email}
                emailActionLabel={contact.emailActionLabel}
                githubDisplay={contact.githubDisplay}
                githubUrl={contact.githubUrl}
                githubActionLabel={contact.githubActionLabel}
                githubAriaLabel={contact.githubAriaLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
