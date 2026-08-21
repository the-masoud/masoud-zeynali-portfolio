"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  Search,
  X,
  ExternalLink,
  Download,
  Mail,
  Compass,
  Globe,
  ArrowRight,
} from "lucide-react";
import { CommandPaletteI18n, Locale } from "@/lib/i18n/types";
import {
  COMMAND_DEFINITIONS,
  DEFAULT_QUICK_ACCESS_IDS,
  DEFAULT_ACTION_IDS_EN,
  DEFAULT_ACTION_IDS_FA,
  filterAndRankCommands,
  CommandDefinition,
} from "@/lib/commands/registry";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  paletteData: CommandPaletteI18n;
  locale: Locale;
}

interface DisplayCommand {
  definition: CommandDefinition;
  label: string;
  description?: string;
  group?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  paletteData,
  locale,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const savedBodyOverflowRef = useRef<string>("");

  const isPersian = locale === "fa";

  // Build the list of display items based on query
  const displayItems = useMemo<DisplayCommand[]>(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      const quickAccessDefs = DEFAULT_QUICK_ACCESS_IDS.map((id) =>
        COMMAND_DEFINITIONS.find((def) => def.id === id)
      ).filter((def): def is CommandDefinition => Boolean(def));

      const actionIds =
        locale === "fa" ? DEFAULT_ACTION_IDS_FA : DEFAULT_ACTION_IDS_EN;
      const actionDefs = actionIds
        .map((id) => COMMAND_DEFINITIONS.find((def) => def.id === id))
        .filter((def): def is CommandDefinition => Boolean(def));

      const items: DisplayCommand[] = [];

      quickAccessDefs.forEach((def) => {
        const pres = paletteData.commands[def.id];
        if (pres) {
          items.push({
            definition: def,
            label: pres.label,
            description: pres.description,
            group: paletteData.quickAccessHeading,
          });
        }
      });

      actionDefs.forEach((def) => {
        const pres = paletteData.commands[def.id];
        if (pres) {
          items.push({
            definition: def,
            label: pres.label,
            description: pres.description,
            group: paletteData.actionsHeading,
          });
        }
      });

      return items;
    }

    const matched = filterAndRankCommands(trimmed, paletteData);
    return matched.map((m) => ({
      definition: m.definition,
      label: m.label,
      description: m.description,
    }));
  }, [query, paletteData, locale]);

  const handleClose = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (isOpen && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex, isOpen]);

  // Execute a command action
  const handleExecute = useCallback(
    (cmd: CommandDefinition) => {
      handleClose();

      switch (cmd.action) {
        case "navigate": {
          const targetEl = document.querySelector(cmd.target);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", cmd.target);
          } else {
            window.location.hash = cmd.target;
          }
          break;
        }
        case "download": {
          const link = document.createElement("a");
          link.href = cmd.target;
          link.download = "Masoud_Zeynali_Professional_CV_EN.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          break;
        }
        case "external": {
          window.open(cmd.target, "_blank", "noopener,noreferrer");
          break;
        }
        case "email": {
          window.location.href = cmd.target;
          break;
        }
        case "locale": {
          window.location.href = cmd.target;
          break;
        }
      }
    },
    [handleClose]
  );

  // Synchronize modal state with native <dialog> and lock body scroll
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement | null;
      savedBodyOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      if (!dialog.open) {
        dialog.showModal();
      }

      // Focus input
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
      return () => clearTimeout(timer);
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = savedBodyOverflowRef.current;

      if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === "function") {
        previousActiveElementRef.current.focus();
      }
    }
  }, [isOpen]);

  // Clean up body overflow if unmounted while open
  useEffect(() => {
    return () => {
      if (savedBodyOverflowRef.current) {
        document.body.style.overflow = savedBodyOverflowRef.current;
      }
    };
  }, []);

  // Keyboard navigation inside search input
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (displayItems.length === 0) return;
      setSelectedIndex((prev) => (prev + 1) % displayItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (displayItems.length === 0) return;
      setSelectedIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (displayItems.length > 0 && selectedIndex >= 0 && selectedIndex < displayItems.length) {
        handleExecute(displayItems[selectedIndex].definition);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleClose();
    }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  };

  const handleClearQuery = () => {
    setQuery("");
    setSelectedIndex(0);
  };

  const getActionIcon = (action: CommandDefinition["action"]) => {
    switch (action) {
      case "external":
        return <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />;
      case "download":
        return <Download className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />;
      case "email":
        return <Mail className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />;
      case "locale":
        return <Globe className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />;
      default:
        return <Compass className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />;
    }
  };

  return (
    <dialog
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
      aria-label={paletteData.title}
      className="m-0 mx-auto mt-[10vh] sm:mt-[14vh] p-0 bg-transparent text-fg-primary border-0 outline-none w-[calc(100vw-24px)] max-w-2xl backdrop:bg-canvas-950/80 backdrop:backdrop-blur-md shadow-none z-50 fixed"
    >
      <div
        className="w-full bg-canvas-950/95 border border-border-panel rounded-xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[75vh] sm:max-h-[70vh] telemetry-corners transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header telemetry / status line */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-canvas-900/90 border-b border-border-subtle font-mono text-[11px] select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-fg-primary font-bold tracking-wider">{paletteData.title}</span>
            <span className="text-border-panel">/</span>
            <span className="text-fg-muted uppercase tracking-widest hidden sm:inline">
              {paletteData.subtitle}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 uppercase tracking-wider hidden xs:inline">
              {paletteData.badge}
            </span>
            <button
              type="button"
              onClick={handleClose}
              className="text-fg-muted hover:text-fg-primary rounded p-1 transition-colors focus-visible:ring-2 focus-visible:ring-accent-cyan"
              aria-label="Close Agent Console"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search input field */}
        <div className="relative flex items-center px-4 py-3 border-b border-border-subtle bg-canvas-950">
          <Search className="w-4 h-4 text-accent-cyan shrink-0 me-3" />
          <input
            ref={inputRef}
            type="text"
            dir="auto"
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleInputKeyDown}
            placeholder={paletteData.placeholder}
            autoComplete="off"
            spellCheck={false}
            className={`w-full bg-transparent text-fg-primary placeholder:text-fg-muted text-base outline-none border-none focus:ring-0 ${
              isPersian ? "font-sans font-normal" : "font-mono"
            }`}
          />
          {query && (
            <button
              type="button"
              onClick={handleClearQuery}
              className="text-fg-muted hover:text-fg-primary text-xs px-1.5 py-0.5 rounded transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Command list results */}
        <div
          role="listbox"
          aria-label="Command suggestions"
          className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-transparent min-h-[140px] max-h-[360px]"
        >
          {displayItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <span className="font-mono text-xs text-accent-cyan/70 mb-1">&gt;_ NO_MATCH</span>
              <p
                className={`text-sm text-fg-secondary ${
                  isPersian ? "font-sans font-normal" : "font-mono"
                }`}
              >
                {paletteData.noResultsText}
              </p>
            </div>
          ) : (
            displayItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              const showGroupHeader =
                item.group &&
                (index === 0 || displayItems[index - 1].group !== item.group);

              return (
                <React.Fragment key={item.definition.id}>
                  {showGroupHeader && (
                    <div className="px-3 pt-2.5 pb-1 text-[10px] font-mono uppercase tracking-widest text-fg-muted select-none">
                      {item.group}
                    </div>
                  )}
                  <button
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleExecute(item.definition)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`group w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-start transition-all cursor-pointer ${
                      isSelected
                        ? "bg-canvas-850/95 border border-accent-cyan/40 shadow-[0_0_12px_rgba(56,189,248,0.1)] text-fg-primary"
                        : "bg-transparent border border-transparent text-fg-secondary hover:bg-canvas-900/60 hover:text-fg-primary"
                    }`}
                  >
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-sm font-semibold truncate ${
                            isSelected ? "text-accent-cyan" : "text-fg-primary"
                          } ${isPersian ? "font-sans font-medium" : "font-mono"}`}
                        >
                          {item.label}
                        </span>
                        <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-fg-muted uppercase tracking-wider">
                          {item.definition.categoryTag}
                        </span>
                      </div>
                      {item.description && (
                        <span
                          className={`text-xs text-fg-muted mt-0.5 line-clamp-1 ${
                            isPersian ? "font-sans font-normal" : "font-mono"
                          }`}
                        >
                          {item.description}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0 text-fg-muted group-hover:text-accent-cyan">
                      {getActionIcon(item.definition.action)}
                      {isSelected && (
                        <ArrowRight className="w-3.5 h-3.5 text-accent-cyan hidden sm:inline" />
                      )}
                    </div>
                  </button>
                </React.Fragment>
              );
            })
          )}
        </div>

        {/* Footer legend */}
        <div className="px-4 py-2 bg-canvas-900/80 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-fg-muted select-none">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                ↑↓
              </kbd>
              <span className={isPersian ? "font-sans text-xs font-normal" : ""}>
                {paletteData.footerLegend.navigate}
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                ↵
              </kbd>
              <span className={isPersian ? "font-sans text-xs font-normal" : ""}>
                {paletteData.footerLegend.open}
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                Esc
              </kbd>
              <span className={isPersian ? "font-sans text-xs font-normal" : ""}>
                {paletteData.footerLegend.close}
              </span>
            </span>
          </div>
          <div className="hidden xs:inline text-[10px] text-fg-subtle uppercase tracking-wider">
            {COMMAND_DEFINITIONS.length} COMMANDS
          </div>
        </div>
      </div>
    </dialog>
  );
};
