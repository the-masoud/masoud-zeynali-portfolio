import React from "react";
import { ArrowRight, ChevronRight, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroMetrics } from "./HeroMetrics";
import { InfrastructureTopology, PortfolioExplorer } from "@/components/visuals/InfrastructureTopology";
import { getProjectPortfolio } from "@/components/work/projectPortfolioData";
import type { ArchitectureNodeData, HeroData, Locale } from "@/lib/i18n/types";

interface HeroProps {
  data: HeroData;
  architectureNodes: ArchitectureNodeData[];
  locale?: Locale;
}

export const Hero: React.FC<HeroProps> = ({ data, architectureNodes, locale = "en" }) => {
  const isPersian = locale === "fa";
  const projects = [
    { id: "infraforge", name: "InfraForge", domain: architectureNodes[1].supportingLabel, overview: architectureNodes.map((node) => node.supportingLabel).join(" · "), technologies: ["Go", "MCP", "SSH", "Linux"], href: "#work" },
    ...getProjectPortfolio(locale).projects.map((project) => ({ id: project.id, name: project.name, domain: project.domain, overview: project.overview, technologies: project.technologies, href: `#${project.id}` })),
  ];

  return (
    <section id="hero" aria-labelledby="hero-title" className="hero-section relative py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 xl:grid-cols-[1fr_1.35fr_0.85fr] items-center gap-10 xl:gap-6">
          <div className="min-w-0 text-start">
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <Badge variant="cyan">{data.badgeText}</Badge>
              <span className="inline-flex items-center gap-1.5 text-xs text-fg-secondary font-sans">
                <Shield size={13} className="text-accent-cyan" aria-hidden="true" />{data.securityText}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-fg-secondary font-sans">
                <Cpu size={13} className="text-accent-cyan" aria-hidden="true" />{data.aiAgentsText}
              </span>
            </div>

            <h1 id="hero-title" className={`hero-name font-sans font-bold text-white ${isPersian ? "text-4xl sm:text-5xl xl:text-5xl leading-[1.5]" : "text-5xl sm:text-6xl xl:text-5xl leading-[1.08] tracking-tight"}`}>
              {data.nameLine1}
              {!isPersian && <><br /><span className="hero-name-accent">{data.nameLine2}</span></>}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-6 text-sm sm:text-base font-sans font-medium text-accent-cyan">
              <span>{data.specialtyAi}</span><span className="text-fg-muted" aria-hidden="true">/</span>
              <span>{data.specialtyInfra}</span><span className="text-fg-muted" aria-hidden="true">/</span>
              <span>{data.specialtySecurity}</span>
            </div>
            <p className="mt-4 text-sm sm:text-base text-fg-primary font-sans leading-7">
              {data.specializationRole}
            </p>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-8 text-fg-secondary font-sans">
              {data.statement}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Button href={data.ctaPrimary.href} size="lg" aria-label={data.ctaPrimary.ariaLabel} className="font-sans">
                <span>{data.ctaPrimary.label}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </Button>
              <Button href={data.ctaSecondary.href} variant="secondary" size="lg" aria-label={data.ctaSecondary.ariaLabel} className="font-sans">
                <span>{data.ctaSecondary.label}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </Button>
            </div>
          </div>
          <InfrastructureTopology projects={projects} locale={locale} />
          <div className="lg:col-span-2 xl:col-span-1 flex flex-col gap-5 self-center">
            <HeroMetrics header={data.metricsHeader} subheader={data.metricsSubheader} metrics={data.metrics} locale={locale} compact />
            <PortfolioExplorer projects={projects} locale={locale} />
          </div>
        </div>
        <div className="technology-strip mt-12 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-border-subtle px-5 py-4">
          <span className="text-xs text-accent-cyan font-sans">{isPersian ? "فناوری‌های منتخب" : "Featured technologies"}</span>
          <ul className="flex flex-wrap gap-2" aria-label={isPersian ? "فناوری‌های منتخب" : "Featured technologies"}>
            {["Go", ".NET", "Next.js", "PostgreSQL", "Linux", "MCP", "OpenFlows Sewer", "AutoCAD 2021", "WPF"].map((technology) => <li key={technology} className="technology-badge rounded-md border border-transparent px-2 py-1 text-xs text-fg-secondary font-mono" dir="ltr">{technology}</li>)}
          </ul>
          <a href="#expertise" className="action-button inline-flex items-center gap-2 border border-accent-cyan/25 px-3 py-2 rounded-lg text-xs text-accent-cyan font-sans">{isPersian ? "همه فناوری‌ها" : "All technologies"}<ArrowRight size={14} className="rtl:rotate-180" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
};
