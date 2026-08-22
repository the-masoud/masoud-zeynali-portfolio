"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  ExternalLink,
  Download,
  ArrowRight,
  Shield,
  FileCheck,
} from "lucide-react";
import {
  EvidenceLayerData,
  EvidenceId,
  EvidenceSource,
} from "@/lib/evidence/types";
import { isValidEvidenceId } from "@/lib/evidence/data";
import { Locale } from "@/lib/i18n/types";

interface EvidenceLayerProps {
  data: EvidenceLayerData;
  locale?: Locale;
}

export const EvidenceLayer: React.FC<EvidenceLayerProps> = ({
  data,
  locale = "en",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<EvidenceId>("career-tenure");

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openingTriggerRef = useRef<HTMLElement | null>(null);
  const recordRefs = useRef<Record<string, HTMLElement | null>>({});
  const savedBodyOverflowRef = useRef<string>("");

  const isPersian = locale === "fa";
  const { ui, records } = data;

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Open dialog with specified evidence ID
  const handleOpen = useCallback((id: EvidenceId, triggerEl?: HTMLElement | null) => {
    setActiveId(id);
    if (triggerEl) {
      openingTriggerRef.current = triggerEl;
    }
    setIsOpen(true);
  }, []);

  // Global delegated click listener for all contextual evidence triggers
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest('[data-evidence-trigger="true"]') as HTMLElement | null;
      if (!trigger || !document.contains(trigger)) return;

      const rawId = trigger.getAttribute("data-evidence-id");
      if (!rawId || !isValidEvidenceId(rawId)) return;

      e.preventDefault();
      handleOpen(rawId, trigger);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleOpen]);

  // Synchronize modal state with native <dialog>, manage focus and scroll locking
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      savedBodyOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      if (!dialog.open) {
        dialog.showModal();
      }

      // Initial focus on close button
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 20);

      // Scroll active record into view inside panel
      const targetCard = recordRefs.current[activeId];
      if (targetCard) {
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const isReduced = motionQuery.matches;
        targetCard.scrollIntoView({
          behavior: isReduced ? "auto" : "smooth",
          block: "nearest",
        });
      }

      return () => clearTimeout(timer);
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = savedBodyOverflowRef.current;

      // Restore focus to opening trigger
      if (
        openingTriggerRef.current &&
        document.contains(openingTriggerRef.current) &&
        typeof openingTriggerRef.current.focus === "function"
      ) {
        openingTriggerRef.current.focus();
      }
    }
  }, [isOpen, activeId]);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      if (savedBodyOverflowRef.current) {
        document.body.style.overflow = savedBodyOverflowRef.current;
      }
    };
  }, []);

  // Handle internal source anchor navigation
  const handleInternalSourceClick = (targetAnchor: string) => {
    handleClose();
    setTimeout(() => {
      const targetEl = document.querySelector(targetAnchor);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", targetAnchor);
      } else {
        window.location.hash = targetAnchor;
      }
    }, 100);
  };

  const getSourceIcon = (type: EvidenceSource["type"]) => {
    switch (type) {
      case "download":
        return <Download className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
      case "external":
        return <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
      default:
        return <ArrowRight className="w-3.5 h-3.5 shrink-0 rtl:rotate-180" aria-hidden="true" />;
    }
  };

  return (
    <dialog
      id="evidence-layer-dialog"
      ref={dialogRef}
      onCancel={(e) => {
        e.preventDefault();
        handleClose();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          handleClose();
        }
      }}
      aria-labelledby="evidence-layer-title"
      className="m-0 p-0 bg-transparent text-fg-primary border-0 outline-none w-screen h-screen max-w-none max-h-none backdrop:bg-canvas-950/80 backdrop:backdrop-blur-sm z-50 fixed inset-0 overflow-hidden"
    >
      {/* Outer backdrop click capture container for cross-browser stability */}
      <div
        className="w-full h-full relative"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed bottom-0 lg:top-0 ${
            isPersian ? "left-0 right-auto lg:border-r lg:border-l-0" : "right-0 left-auto lg:border-l lg:border-r-0"
          } w-full lg:w-[480px] xl:w-[500px] h-[85dvh] lg:h-full bg-canvas-950/98 border-t lg:border-t-0 border-border-panel shadow-2xl shadow-black/95 flex flex-col telemetry-corners evidence-layer-panel transition-transform duration-200 ease-out`}
        >
        {/* Header telemetry / title bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-canvas-900/90 border-b border-border-subtle shrink-0 select-none">
          <div className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-accent-cyan shrink-0" aria-hidden="true" />
            <h2
              id="evidence-layer-title"
              className={`text-sm font-bold tracking-wider text-fg-primary ${
                isPersian ? "font-sans font-bold" : "font-mono uppercase"
              }`}
            >
              {ui.mainTitle}
            </h2>
            <span className="text-border-panel select-none">/</span>
            <span className="text-[11px] text-fg-muted font-mono uppercase tracking-widest hidden sm:inline">
              {ui.secondaryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 font-mono font-semibold tracking-wider">
              {ui.countLabel}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              className="text-fg-muted hover:text-fg-primary rounded-md p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan cursor-pointer"
              aria-label={ui.closeAccessibleLabel}
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Scrollable Records Container */}
        <div
          role="region"
          aria-label={ui.mainTitle}
          className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-5 evidence-layer-scroll"
        >
          {records.map((record) => {
            const isSelected = record.id === activeId;

            return (
              <article
                key={record.id}
                ref={(el) => {
                  recordRefs.current[record.id] = el;
                }}
                id={`evidence-record-${record.id}`}
                tabIndex={-1}
                className={`p-4 sm:p-5 rounded-lg border transition-all text-start flex flex-col gap-3 ${
                  isSelected
                    ? "bg-canvas-900/95 border-accent-cyan/60 shadow-[0_0_20px_rgba(56,189,248,0.12)] ring-1 ring-accent-cyan/30"
                    : "bg-canvas-900/40 border-border-subtle/80 hover:border-border-panel hover:bg-canvas-900/60"
                }`}
              >
                {/* Record Metadata Top Line */}
                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-accent-cyan tracking-wider">
                      {record.ordinal}
                    </span>
                    <span className="text-border-panel text-xs select-none">·</span>
                    <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-canvas-950 border border-border-subtle text-fg-secondary uppercase tracking-wider">
                      {record.classificationDisplay}
                    </span>
                  </div>

                  {isSelected && ui.activeMarker && (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-accent-cyan px-1.5 py-0.5 rounded bg-accent-cyan/15 border border-accent-cyan/30 uppercase font-semibold tracking-wider shrink-0">
                      <FileCheck className="w-3 h-3" aria-hidden="true" />
                      <span>{ui.activeMarker}</span>
                    </span>
                  )}
                </div>

                {/* Record Title */}
                <h3
                  className={`text-base sm:text-lg font-bold text-white leading-snug ${
                    isPersian ? "font-sans font-bold tracking-normal" : "font-mono uppercase tracking-tight"
                  }`}
                >
                  {record.title}
                </h3>

                {/* Claim Section */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-accent-cyan/90 uppercase tracking-widest">
                    {ui.recordSectionLabels.claim}
                  </div>
                  <p
                    className={`text-xs sm:text-sm text-fg-primary leading-relaxed ${
                      isPersian ? "font-sans font-medium" : "font-sans font-normal"
                    }`}
                  >
                    {record.id === "microsoft-credentials" && isPersian ? (
                      <bdi dir="ltr" className="inline-block font-mono text-xs font-semibold text-fg-primary">
                        {record.claim}
                      </bdi>
                    ) : (
                      record.claim
                    )}
                  </p>
                </div>

                {/* Evidence Basis Section */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-fg-muted uppercase tracking-widest">
                    {ui.recordSectionLabels.evidenceBasis}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans font-normal">
                    {record.evidenceBasis}
                  </p>
                </div>

                {/* Disclosure Section */}
                <div className="space-y-1 pt-1">
                  <div className="text-[10px] font-mono font-bold text-fg-subtle uppercase tracking-widest">
                    {ui.recordSectionLabels.disclosure}
                  </div>
                  <p className="text-[11px] sm:text-xs text-fg-muted leading-relaxed font-sans font-normal italic bg-canvas-950/60 p-2.5 rounded border border-white/5">
                    {record.disclosure}
                  </p>
                </div>

                {/* Sources Section */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono font-bold text-fg-muted uppercase tracking-widest">
                    {ui.recordSectionLabels.sources}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {record.sources.map((src, sIdx) => {
                      if (src.type === "internal") {
                        return (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => handleInternalSourceClick(src.target)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-canvas-950 border border-border-panel hover:border-accent-cyan hover:text-accent-cyan text-xs font-medium text-fg-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan cursor-pointer ${
                              isPersian ? "font-sans" : "font-mono"
                            }`}
                          >
                            <span>{src.label}</span>
                            {getSourceIcon(src.type)}
                          </button>
                        );
                      }

                      if (src.type === "download") {
                        return (
                          <a
                            key={sIdx}
                            href={src.target}
                            download="Masoud_Zeynali_Professional_CV_EN.pdf"
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-canvas-950 border border-border-panel hover:border-accent-cyan hover:text-accent-cyan text-xs font-medium text-fg-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                              isPersian ? "font-sans" : "font-mono"
                            }`}
                          >
                            <span>{src.label}</span>
                            {getSourceIcon(src.type)}
                          </a>
                        );
                      }

                      return (
                        <a
                          key={sIdx}
                          href={src.target}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-canvas-950 border border-border-panel hover:border-accent-cyan hover:text-accent-cyan text-xs font-medium text-fg-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                            isPersian ? "font-sans" : "font-mono"
                          }`}
                        >
                          <span>{src.label}</span>
                          {getSourceIcon(src.type)}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </dialog>
  );
};
