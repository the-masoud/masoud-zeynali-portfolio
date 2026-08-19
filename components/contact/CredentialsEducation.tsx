import React from "react";
import { Award, GraduationCap, ExternalLink } from "lucide-react";
import {
  certificationsData,
  educationData,
  microsoftTranscriptData,
} from "./professionalRecordData";

export const CredentialsEducation: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Microsoft Credentials Block */}
      <div className="rounded bg-canvas-950/80 border border-border-subtle p-5 sm:p-6 group hover:border-border-panel transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
            <h3 className="text-sm sm:text-base font-mono font-bold text-fg-primary tracking-wide">
              MICROSOFT CERTIFICATIONS
            </h3>
          </div>
          <a
            href={microsoftTranscriptData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-cyan hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-1 py-0.5"
            aria-label="View verified transcript on Microsoft Learn (opens in new tab)"
          >
            <span>{microsoftTranscriptData.actionLabel}</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>

        <ul className="space-y-3">
          {certificationsData.map((cert) => (
            <li
              key={cert.id}
              className="p-3 rounded bg-canvas-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xs sm:text-sm font-semibold text-fg-primary">
                  {cert.name}
                </span>
                <span className="font-sans text-xs text-fg-muted">
                  {cert.qualification} · {cert.issuer}
                </span>
              </div>
              <div className="self-start sm:self-center">
                <span className="font-mono text-xs text-fg-secondary px-2 py-0.5 rounded bg-canvas-850 border border-border-subtle">
                  {cert.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Verified Education Block */}
      <div className="rounded bg-canvas-950/80 border border-border-subtle p-5 sm:p-6 group hover:border-border-panel transition-colors">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
          <GraduationCap className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
          <h3 className="text-sm sm:text-base font-mono font-bold text-fg-primary tracking-wide">
            EDUCATION
          </h3>
        </div>

        <ul className="space-y-3">
          {educationData.map((edu) => (
            <li
              key={edu.id}
              className="p-3 rounded bg-canvas-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xs sm:text-sm font-semibold text-fg-primary">
                  {edu.program}
                </span>
                <span className="font-sans text-xs text-fg-muted">
                  {edu.institution}
                </span>
              </div>
              {edu.status && (
                <div className="self-start sm:self-center">
                  <span className="font-mono text-[10px] font-semibold text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 tracking-wider uppercase">
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
