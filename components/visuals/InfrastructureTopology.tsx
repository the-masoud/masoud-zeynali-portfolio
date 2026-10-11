"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Network, Search, ArrowUpRight, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

export interface EcosystemProject {
  id: string;
  name: string;
  domain: string;
  overview: string;
  technologies: string[];
  href: string;
}

interface InfrastructureTopologyProps {
  projects: EcosystemProject[];
  locale: Locale;
}

const positions = [
  { x: 120, y: 110 }, { x: 275, y: 40 }, { x: 430, y: 115 }, { x: 70, y: 250 },
  { x: 455, y: 265 }, { x: 125, y: 395 }, { x: 400, y: 400 }, { x: 270, y: 465 },
];

export function InfrastructureTopology({ projects, locale }: InfrastructureTopologyProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selected = projects[selectedIndex];
  const selectedImageSlug = selected.id === "oasisops" ? "ops" : selected.id;
  const isPersian = locale === "fa";
  const openProjectPreview = (index: number) => {
    setSelectedIndex(index);
    dialogRef.current?.showModal();
  };

  return (
    <div className="ecosystem-panel" dir="ltr">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-accent-cyan">
          <Network size={14} aria-hidden="true" /> AI / MCP
        </span>
        <span className="text-[11px] text-fg-secondary font-sans" dir={isPersian ? "rtl" : "ltr"}>
          {isPersian ? "نقشه مفهومی پروژه‌ها" : "Conceptual portfolio map"}
        </span>
      </div>
      <div className="ecosystem-stage">
        <svg className="ecosystem-globe" viewBox="0 0 540 510" aria-hidden="true">
          <defs>
            <radialGradient id={`globe-light-${locale}`} cx="32%" cy="30%">
              <stop offset="0" stopColor="#38bdf8" stopOpacity="0.19" />
              <stop offset="0.6" stopColor="#164379" stopOpacity="0.13" />
              <stop offset="1" stopColor="#020617" stopOpacity="0.75" />
            </radialGradient>
          </defs>
          <circle cx="270" cy="255" r="185" fill={`url(#globe-light-${locale})`} className="globe-shell" />
          <g className="globe-grid">
            <ellipse cx="270" cy="255" rx="100" ry="185" />
            <ellipse cx="270" cy="255" rx="45" ry="185" />
            <ellipse cx="270" cy="255" rx="185" ry="65" />
            <ellipse cx="270" cy="255" rx="185" ry="125" />
            <path d="M85 255 H455 M270 70 V440" />
          </g>
          <g className="globe-orbits">
            <ellipse cx="270" cy="255" rx="238" ry="114" transform="rotate(-27 270 255)" />
            <ellipse cx="270" cy="255" rx="210" ry="135" transform="rotate(42 270 255)" />
          </g>
          {positions.map((point, index) => (
            <path key={index} className={`ecosystem-edge ${selectedIndex === index ? "is-connected" : ""}`} data-edge={index} d={`M270 255 Q${point.x} 255 ${point.x} ${point.y}`} />
          ))}
          <g className="globe-stars">
            <circle cx="95" cy="200" r="3" /><circle cx="375" cy="105" r="3" />
            <circle cx="410" cy="330" r="3" /><circle cx="200" cy="415" r="2" />
          </g>
        </svg>
        <div className="ecosystem-core" aria-hidden="true">
          <span className="text-lg sm:text-xl font-semibold text-white">AI / MCP</span>
          <span className="text-[9px] tracking-[0.2em] text-sky-200 mt-2">ENGINEERING</span>
          <span className="text-[9px] tracking-[0.2em] text-fg-secondary mt-1">ECOSYSTEM</span>
        </div>
        <ol aria-label={isPersian ? "هشت پروژه مهندسی" : "Eight engineering projects"} className="ecosystem-nodes">
          {projects.map((project, index) => {
            const imageSlug = project.id === "oasisops" ? "ops" : project.id;
            return (
              <li key={project.id} data-node={index} style={{ left: `${positions[index].x / 5.4}%`, top: `${positions[index].y / 5.1}%` }}>
                <button type="button" className="ecosystem-node" aria-pressed={selectedIndex === index} aria-haspopup="dialog" aria-controls={`ecosystem-preview-${locale}`} onClick={() => openProjectPreview(index)}>
                  <span className="ecosystem-icon" aria-hidden="true">
                    <Image
                      src={`/images/projects/${imageSlug}.webp`}
                      alt=""
                      width={96}
                      height={96}
                      unoptimized
                      className="ecosystem-thumbnail"
                    />
                  </span>
                  <span className="interaction-title text-[11px] sm:text-xs font-semibold font-sans">{project.name}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <dialog
        ref={dialogRef}
        id={`ecosystem-preview-${locale}`}
        aria-labelledby={`ecosystem-preview-title-${locale}`}
        aria-describedby={`ecosystem-preview-description-${locale}`}
        className="ecosystem-preview-dialog"
        dir={isPersian ? "rtl" : "ltr"}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="ecosystem-preview-content">
          <button
            type="button"
            className="ecosystem-preview-close"
            aria-label={isPersian ? "بستن پیش‌نمایش پروژه" : "Close project preview"}
            onClick={() => dialogRef.current?.close()}
          >
            <X size={18} aria-hidden="true" />
          </button>
          <a
            href={selected.href}
            className="ecosystem-preview-image-link"
            aria-label={isPersian ? `مشاهده جزئیات کامل ${selected.name}` : `Explore ${selected.name} in detail`}
            onClick={() => dialogRef.current?.close()}
          >
            <span className="ecosystem-preview-image">
              <Image
                src={`/images/projects/${selectedImageSlug}.webp`}
                alt=""
                width={432}
                height={432}
                unoptimized
                className="ecosystem-thumbnail"
              />
            </span>
          </a>
          <h3 id={`ecosystem-preview-title-${locale}`} className="ecosystem-preview-title" dir="ltr">
            {selected.name}
          </h3>
          <p className="ecosystem-preview-domain">{selected.domain}</p>
          <p id={`ecosystem-preview-description-${locale}`} className="ecosystem-preview-description">
            {selected.overview}
          </p>
          <p className="ecosystem-preview-hint">
            {isPersian ? "برای اطلاعات بیشتر روی تصویر کلیک کنید" : "Click the image for more information"}
          </p>
          <a href={selected.href} className="ecosystem-preview-cta" onClick={() => dialogRef.current?.close()}>
            <span>{isPersian ? "مشاهده جزئیات کامل پروژه" : "Explore full project details"}</span>
            <ArrowUpRight size={17} className="shrink-0" aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </div>
  );
}

export function PortfolioExplorer({ projects, locale }: InfrastructureTopologyProps) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const isPersian = locale === "fa";
  const search = query.trim().toLocaleLowerCase();
  const matches = projects.filter((project) => [project.name, project.domain, project.overview, ...project.technologies].join(" ").toLocaleLowerCase().includes(search));
  const selected = matches.find((project) => project.id === selectedId);

  return (
    <div className="portfolio-explorer rounded-2xl border border-border-panel p-4 text-start">
      <h2 className="text-sm font-semibold text-white mb-3">{isPersian ? "درباره کارهایم بیشتر بدانید" : "Explore my work"}</h2>
      <label className="relative block">
        <span className="sr-only">{isPersian ? "جستجوی پروژه یا فناوری" : "Find a project or technology"}</span>
        <Search className="absolute start-3 top-3.5 text-accent-cyan" size={15} aria-hidden="true" />
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isPersian ? "جستجوی پروژه یا فناوری…" : "Project or technology…"} className="w-full rounded-lg border border-border-panel bg-canvas-950/60 ps-9 pe-3 py-3 text-xs text-fg-primary placeholder:text-fg-secondary font-sans" aria-controls={`project-search-${locale}`} />
      </label>
      <div id={`project-search-${locale}`} className="mt-3 flex flex-wrap gap-2">
        {matches.map((project) => <button type="button" key={project.id} onClick={() => setSelectedId(project.id === selectedId ? null : project.id)} aria-pressed={selectedId === project.id} className="technology-badge rounded-full border border-border-panel px-2.5 py-2 text-[11px] text-fg-secondary">{project.name}</button>)}
        {matches.length === 0 && <p role="status" className="text-xs text-fg-secondary font-sans">{isPersian ? "پروژه‌ای پیدا نشد." : "No matching projects."}</p>}
      </div>
      {selected && <div className="mt-4 text-xs leading-6 font-sans text-fg-secondary"><p>{selected.overview}</p><a href={selected.href} className="action-button inline-flex mt-3 rounded-lg border border-accent-cyan/30 px-3 py-2 text-accent-cyan">{isPersian ? "مشاهده جزئیات" : "View project details"}<ArrowUpRight size={14} className="ms-2" aria-hidden="true" /></a></div>}
    </div>
  );
}
