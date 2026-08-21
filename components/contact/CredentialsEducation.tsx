import React from "react";
import { Award, GraduationCap, ExternalLink } from "lucide-react";
import {
  CertificationRecordData,
  EducationRecordData,
} from "@/lib/i18n/types";

interface CredentialsEducationProps {
  transcript: {
    heading: string;
    actionLabel: string;
    ariaLabel: string;
    url: string;
  };
  educationHeading: string;
  certifications: CertificationRecordData[];
  education: EducationRecordData[];
}

export const CredentialsEducation: React.FC<CredentialsEducationProps> = ({
  transcript,
  educationHeading,
  certifications,
  education,
}) => {
  return (
    <div className="space-y-6 text-start">
      {/* Microsoft Credentials Block */}
      <div className="rounded bg-canvas-950/80 border border-border-subtle p-5 sm:p-6 group hover:border-border-panel transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent-cyan shrink-0" aria-hidden="true" />
            <h3 className="text-sm sm:text-base font-bold font-sans text-fg-primary">
              {transcript.heading}
            </h3>
          </div>
          <a
            href={transcript.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-accent-cyan hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-1 py-0.5 font-sans font-medium"
            aria-label={transcript.ariaLabel}
          >
            <span>{transcript.actionLabel}</span>
            <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li
              key={cert.id}
              className="p-3 rounded bg-canvas-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex flex-col text-start">
                <span className="text-xs sm:text-sm font-semibold text-fg-primary font-mono" lang="en" dir="ltr">
                  {cert.name}
                </span>
                <span className="font-sans text-xs text-fg-muted mt-0.5">
                  <span lang="en">{cert.qualification}</span> · <span>{cert.issuer}</span>
                </span>
              </div>
              <div className="self-start sm:self-center">
                <bdi dir="ltr" className="font-mono text-xs text-fg-secondary px-2 py-0.5 rounded bg-canvas-850 border border-border-subtle inline-block">
                  {cert.year}
                </bdi>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Verified Education Block */}
      <div className="rounded bg-canvas-950/80 border border-border-subtle p-5 sm:p-6 group hover:border-border-panel transition-colors">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
          <GraduationCap className="w-4 h-4 text-accent-cyan shrink-0" aria-hidden="true" />
          <h3 className="text-sm sm:text-base font-bold font-sans text-fg-primary">
            {educationHeading}
          </h3>
        </div>

        <ul className="space-y-3">
          {education.map((edu) => (
            <li
              key={edu.id}
              className="p-3 rounded bg-canvas-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex flex-col text-start">
                <span className="text-xs sm:text-sm font-semibold text-fg-primary font-sans">
                  {edu.program}
                </span>
                <span className="font-sans text-xs text-fg-muted mt-0.5">
                  {edu.institution}
                </span>
              </div>
              {edu.status && (
                <div className="self-start sm:self-center">
                  <span className="text-[10px] font-semibold text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 uppercase font-sans">
                    {edu.status}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
