import { ArrowUpRight, Activity, Bot, Box, Calculator, FileCheck2, Printer, Ruler, ScanLine } from "lucide-react";
import type { InfraForgeData, Locale } from "@/lib/i18n/types";
import { getProjectPortfolio } from "./projectPortfolioData";

const icons = [Bot, Box, Activity, Ruler, FileCheck2, ScanLine, Calculator, Printer];

export function FeaturedProjects({ featured, locale }: { featured: InfraForgeData; locale: Locale }) {
  const isPersian = locale === "fa";
  const projects = [
    { id: "infraforge", name: featured.projectName, domain: featured.descriptor, status: featured.developmentState, href: "#work" },
    ...getProjectPortfolio(locale).projects.map((project) => ({ id: project.id, name: project.name, domain: project.tagline, status: project.status, href: `#${project.id}` })),
  ];

  return (
    <section aria-labelledby="featured-projects-heading" className="pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 id="featured-projects-heading" className="font-sans text-2xl font-semibold text-white">{isPersian ? "پروژه‌های منتخب" : "Featured projects"}</h2>
          <a href="#work" className="nav-item rounded-lg border border-transparent px-3 py-2 text-xs text-accent-cyan font-sans">{isPersian ? "مشاهده همه جزئیات پروژه‌ها" : "Explore all project details"}<ArrowUpRight size={15} className="inline-block ms-2" aria-hidden="true" /></a>
        </div>
        <ul className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {projects.map((project, index) => {
            const Icon = icons[index];
            return (
              <li key={project.id} className="min-w-0">
                <a href={project.href} className="project-card project-preview block h-full rounded-xl border border-border-subtle overflow-hidden">
                  <div className="project-preview-art" aria-hidden="true">
                    <svg viewBox="0 0 240 90" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full"><g fill="none" stroke="currentColor" strokeWidth="0.7"><path d="M0 45 H65 V20 H115 M240 45 H175 V70 H125 M65 45 H175 M120 0 V90" /><circle cx="65" cy="45" r="6" /><circle cx="175" cy="45" r="6" /><rect x="97" y="23" width="46" height="44" rx="10" /></g></svg>
                    <Icon size={23} strokeWidth={1.5} className="relative" />
                  </div>
                  <div className="p-4">
                    <h3 className="interaction-title font-sans font-semibold text-base text-slate-200 break-words" dir="ltr">{project.name}</h3>
                    <p className="mt-2 text-xs leading-6 text-fg-secondary font-sans">{project.domain}</p>
                    <div className="mt-4 flex items-start justify-between gap-2 border-t border-white/5 pt-3">
                      <span className="text-[10px] leading-5 text-accent-cyan font-sans">{project.status}</span>
                      <ArrowUpRight size={14} className="shrink-0 text-accent-cyan mt-0.5" aria-hidden="true" />
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
