import React from "react";
import { Mail, MapPin, Github, ExternalLink } from "lucide-react";

interface DirectContactProps {
  heading: string;
  name: string;
  title: string;
  specialization: string;
  location: string;
  email: string;
  emailActionLabel: string;
  githubDisplay: string;
  githubUrl: string;
  githubActionLabel: string;
  githubAriaLabel: string;
}

export const DirectContact: React.FC<DirectContactProps> = ({
  heading,
  name,
  title,
  specialization,
  location,
  email,
  emailActionLabel,
  githubDisplay,
  githubUrl,
  githubActionLabel,
  githubAriaLabel,
}) => {
  return (
    <div className="rounded bg-canvas-950/80 border border-border-subtle p-5 sm:p-6 flex flex-col justify-between group hover:border-border-panel transition-colors text-start">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
          <Mail className="w-4 h-4 text-accent-cyan shrink-0" aria-hidden="true" />
          <h3 className="text-sm sm:text-base font-bold font-sans text-fg-primary">
            {heading}
          </h3>
        </div>

        {/* Identity & Details */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-base font-bold font-sans text-fg-primary">
              {name}
            </h4>
            <p className="text-xs sm:text-sm text-accent-cyan font-semibold mt-0.5 font-sans">
              {specialization}
            </p>
            <p className="text-[11px] font-sans text-fg-muted mt-0.5">
              {title}
            </p>
          </div>

          <address className="not-italic space-y-2.5 text-xs sm:text-sm font-sans text-fg-muted">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-accent-cyan shrink-0" aria-hidden="true" />
              <span className="text-fg-secondary">{location}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-accent-cyan shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${email}`}
                dir="ltr"
                className="text-fg-secondary hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-0.5 font-mono text-xs"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Github className="w-3.5 h-3.5 text-accent-cyan shrink-0" aria-hidden="true" />
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="text-fg-secondary hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-0.5 inline-flex items-center gap-1 font-mono text-xs"
              >
                <span>{githubDisplay}</span>
                <ExternalLink className="w-3 h-3 text-fg-muted shrink-0" aria-hidden="true" />
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan/20 hover:border-accent-cyan shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan active:scale-[0.99] font-sans"
        >
          <Mail className="w-3.5 h-3.5 text-accent-cyan shrink-0" aria-hidden="true" />
          <span>{emailActionLabel}</span>
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded bg-canvas-900 text-fg-primary border border-border-panel hover:bg-canvas-850 hover:border-fg-muted transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan active:scale-[0.99] font-sans"
          aria-label={githubAriaLabel}
        >
          <Github className="w-3.5 h-3.5 text-fg-secondary shrink-0" aria-hidden="true" />
          <span>{githubActionLabel}</span>
        </a>
      </div>
    </div>
  );
};
