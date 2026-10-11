import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { InfraForgeData, Locale } from "@/lib/i18n/types";
import { getProjectPortfolio } from "./projectPortfolioData";


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
          {projects.map((project) => {
            return (
              <li key={project.id} className="min-w-0">
                <a href={project.href} className="project-card project-preview block h-full rounded-xl border border-border-subtle overflow-hidden">
                  <div className="project-preview-art">
                    <Image
                      src={`/images/projects/${project.id === "oasisops" ? "ops" : project.id}.webp`}
                      alt={isPersian
                        ? `تصویر مفهومی مرتبط با ${project.name}: ${project.domain}`
                        : `Conceptual illustration of ${project.name}: ${project.domain}`}
                      width={800}
                      height={360}
                      unoptimized
                      className="project-preview-image h-full w-full object-cover"
                    />
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
