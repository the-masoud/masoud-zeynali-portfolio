import React from "react";
import { FileText, Download } from "lucide-react";
import { resumeData } from "./professionalRecordData";

export const ResumeAccess: React.FC = () => {
  const {
    heading,
    supportingCopy,
    formatBadge,
    downloadUrl,
    fileName,
    actionLabel,
  } = resumeData;

  return (
    <div className="rounded bg-canvas-950/80 border border-border-subtle p-5 sm:p-6 flex flex-col justify-between relative group hover:border-border-panel transition-colors">
      <div>
        {/* Header with Title and Format Metadata */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
            <h3 className="text-sm sm:text-base font-mono font-bold text-fg-primary tracking-wide">
              {heading}
            </h3>
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
            {formatBadge}
          </span>
        </div>

        {/* Supporting Narrative */}
        <p className="text-xs sm:text-sm text-fg-secondary font-sans leading-relaxed mb-6">
          {supportingCopy}
        </p>
      </div>

      {/* Native Direct Download Anchor */}
      <div>
        <a
          href={downloadUrl}
          download={fileName}
          className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold px-4 py-3 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan/20 hover:border-accent-cyan shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan active:scale-[0.99]"
        >
          <Download className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
          <span>{actionLabel}</span>
        </a>
      </div>
    </div>
  );
};
