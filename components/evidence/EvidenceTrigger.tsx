import React from "react";
import { FileText } from "lucide-react";
import { EvidenceId } from "@/lib/evidence/types";
import { Locale } from "@/lib/i18n/types";

interface EvidenceTriggerProps {
  evidenceId: EvidenceId;
  label?: string;
  ariaLabel: string;
  locale?: Locale;
  className?: string;
  size?: "sm" | "md";
}

export const EvidenceTrigger: React.FC<EvidenceTriggerProps> = ({
  evidenceId,
  label,
  ariaLabel,
  locale = "en",
  className = "",
  size = "sm",
}) => {
  const isPersian = locale === "fa";
  const defaultLabel = isPersian ? "مشاهده شواهد" : "EVIDENCE";
  const displayLabel = label || defaultLabel;

  const sizeClasses =
    size === "sm"
      ? "px-2 py-1 text-[10px] sm:text-[11px]"
      : "px-2.5 py-1.5 text-xs";

  return (
    <button
      type="button"
      data-evidence-id={evidenceId}
      data-evidence-trigger="true"
      aria-haspopup="dialog"
      aria-controls="evidence-layer-dialog"
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-1.5 rounded bg-canvas-950/80 border border-border-subtle hover:border-accent-cyan/60 hover:bg-canvas-900 text-fg-secondary hover:text-accent-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan cursor-pointer shrink-0 ${sizeClasses} ${
        isPersian ? "font-sans font-medium tracking-normal" : "font-mono font-medium tracking-wider uppercase"
      } ${className}`}
    >
      <FileText className="w-3 h-3 text-accent-cyan/80 shrink-0" aria-hidden="true" />
      <span>{displayLabel}</span>
    </button>
  );
};
