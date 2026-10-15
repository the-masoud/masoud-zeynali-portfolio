import Image from "next/image";
import { ArrowDownRight, BrainCircuit, Gamepad2, Layers3, Monitor, ShieldCheck, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { getGamePortfolio } from "./gamePortfolioData";

export function GameDevelopment({ locale }: { locale: Locale }) {
  const data = getGamePortfolio(locale);

  return (
    <section id="games" aria-labelledby="game-development-heading" className="scroll-mt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan">
            <Gamepad2 size={21} aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-accent-cyan tracking-wide font-sans">{data.eyebrow}</p>
            <h2 id="game-development-heading" className="text-2xl sm:text-3xl font-bold text-white font-sans">{data.heading}</h2>
          </div>
        </div>

        <p className="mb-5 max-w-3xl text-sm sm:text-base leading-7 text-fg-secondary font-sans">
          {data.introduction}
        </p>

        <div className="mb-7 sm:mb-9 rounded-xl border border-accent-cyan/30 bg-gradient-to-r from-accent-cyan/10 via-canvas-900 to-canvas-900 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <Sparkles size={18} className="text-accent-cyan" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-bold text-white font-sans">{data.processTitle}</h3>
            <span dir="ltr" className="rounded-md border border-accent-cyan/40 bg-canvas-950 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent-cyan font-mono">
              {data.processBadge}
            </span>
          </div>
          <p className="mt-3 max-w-5xl text-sm leading-7 text-fg-secondary font-sans">
            {data.processDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {data.games.map((game) => (
            <article
              id={game.id}
              key={game.id}
              aria-labelledby={game.id + "-heading"}
              className="project-card group overflow-hidden rounded-2xl border border-border-subtle bg-canvas-900/75 scroll-mt-28"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-canvas-850">
                <Image
                  src={game.image}
                  alt={game.imageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[220ms] ease-out motion-reduce:transform-none group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080a0f]/90 to-transparent pointer-events-none" aria-hidden="true" />
                <span className="absolute bottom-3 start-4 rounded-md border border-accent-cyan/35 bg-canvas-950/80 px-2.5 py-1 text-[11px] font-medium text-accent-cyan backdrop-blur font-sans">
                  {data.conceptArtLabel}
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-xs text-accent-cyan font-sans">{game.genre}</span>
                  <span className="ms-auto inline-flex items-center gap-1.5 rounded-md border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-1 text-[10px] font-bold text-accent-cyan" dir="ltr">
                    <BrainCircuit size={13} aria-hidden="true" /> AI + MCP
                  </span>
                </div>
                <h3 id={game.id + "-heading"} className="text-2xl font-bold text-white font-sans" dir="auto">
                  {game.title}
                </h3>
                <p className="mt-2 font-semibold text-base leading-7 text-fg-primary font-sans">
                  {game.headline}
                </p>
                <p className="mt-3 text-sm leading-7 text-fg-secondary font-sans">
                  {game.description}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-bold text-accent-cyan font-sans">
                    <Layers3 size={15} aria-hidden="true" /> {data.gameplayLabel}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {game.gameplay.map((item) => (
                      <li key={item} className="rounded-md border border-border-subtle bg-canvas-950 px-2.5 py-1.5 text-xs text-fg-primary font-sans">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <details className="mt-5 border-t border-white/10 pt-3 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="dossier-action flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg p-3 text-accent-cyan border border-transparent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan">
                    <span className="text-sm font-bold font-sans">{data.detailsLabel}</span>
                    <ArrowDownRight size={17} aria-hidden="true" />
                  </summary>
                  <div className="mt-3 space-y-5 rounded-xl border border-border-subtle bg-canvas-950/60 p-4 text-start">
                    <div className="flex flex-wrap gap-2">
                      {game.technologies.map((technology) => (
                        <span key={technology} dir="ltr" className="rounded-md border border-border-subtle bg-canvas-900 px-2.5 py-1.5 text-[11px] font-mono text-slate-300">
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Preserved Actual Development Screenshot */}
                    <div className="rounded-xl border border-border-subtle bg-canvas-900/80 p-3.5 sm:p-4">
                      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                        <h4 className="flex items-center gap-2 text-xs font-bold text-accent-cyan font-sans">
                          <Monitor size={14} aria-hidden="true" /> {data.screenshotLabel}
                        </h4>
                        <span dir="ltr" className="rounded border border-white/10 bg-canvas-950 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                          BUILD CAPTURE
                        </span>
                      </div>
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-canvas-950">
                        <Image
                          src={game.devScreenshot}
                          alt={game.devScreenshotAlt}
                          fill
                          unoptimized
                          sizes="(min-width: 1024px) 45vw, 90vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2.5 text-xs text-fg-secondary font-sans leading-5">
                        {game.devScreenshotCaption}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400 font-sans italic">
                        {data.visualStatusNote}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-accent-cyan font-sans">{data.engineeringLabel}</h4>
                      <p className="mt-2 text-sm leading-7 text-fg-secondary font-sans">{game.engineering}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold text-accent-cyan font-sans">
                        <ShieldCheck size={14} aria-hidden="true" /> {data.evidenceLabel}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-fg-secondary font-sans">{game.currentEvidence}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-accent-cyan font-sans">{data.limitationsLabel}</h4>
                      <p className="mt-2 text-sm leading-7 text-fg-secondary font-sans">{game.limitation}</p>
                    </div>
                  </div>
                </details>

                <div className="mt-5 flex items-center justify-end border-t border-white/10 pt-4">
                  <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/5 px-3 py-1.5 text-xs text-accent-cyan font-sans">
                    {data.statusLabel}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
