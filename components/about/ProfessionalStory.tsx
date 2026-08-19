import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ProfessionalPrinciples } from "./ProfessionalPrinciples";
import { Terminal, Shield, Network } from "lucide-react";

export const ProfessionalStory: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="profile-heading"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Editorial Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Index, Section Title, Technical Marker */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Section Index Marker */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Badge variant="cyan" dot={false}>
                01 / PROFILE
              </Badge>
              <span className="text-border-panel">|</span>
              <span className="font-mono text-xs text-fg-muted tracking-wider uppercase">
                SYSTEMS ARCHITECTURE
              </span>
            </div>

            {/* Editorial Heading */}
            <h2
              id="profile-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight mb-4"
            >
              ENGINEERING EVOLUTION &amp; TECHNICAL GOVERNANCE
            </h2>

            <p className="font-mono text-xs sm:text-sm text-accent-cyan tracking-wide mb-6">
              Hands-on operational roots to enterprise IT leadership.
            </p>

            {/* Restrained Technical Marker / Domain Coordinates */}
            <div className="hidden lg:flex flex-col gap-2.5 p-4 rounded bg-canvas-900/40 border border-border-subtle text-xs font-mono text-fg-muted">
              <div className="flex items-center gap-2 text-fg-secondary">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                <span>DOMAIN::SYSTEMS_ENGINEERING</span>
              </div>
              <div className="flex items-center gap-2 text-fg-secondary">
                <Network className="w-3.5 h-3.5 text-accent-blue" />
                <span>GOVERNANCE::ENTERPRISE_IT</span>
              </div>
              <div className="flex items-center gap-2 text-fg-secondary">
                <Shield className="w-3.5 h-3.5 text-accent-emerald" />
                <span>FOCUS::RESILIENT_OPERATIONS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed font-sans font-normal">
              <p>
                Masoud’s career began in hands-on IT support, troubleshooting, and network
                operations, building a practical foundation across Windows client environments,
                Active Directory support, Group Policy, and organization-wide incident resolution.
                His responsibilities later expanded into the design and management of enterprise
                network infrastructure, administration and security of enterprise server
                environments, and centralized endpoint operations across more than 300 Windows
                endpoints.
              </p>
              <p>
                As his responsibilities grew, Masoud moved into IT leadership and departmental
                responsibility, leading infrastructure development planning, defining the
                organization’s technology roadmap, supervising critical technology projects, and
                guiding more than 15 technical staff and specialists across network, security, help
                desk, and infrastructure functions. Today, nearly two decades of enterprise IT,
                infrastructure governance, and network security leadership serve as the foundation
                for his current engineering direction as a Senior AI Engineer—focused on AI agents,
                Model Context Protocol (MCP), infrastructure automation, and secure AI-assisted
                operational workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Integrated Professional Principles Rail */}
        <ProfessionalPrinciples />
      </div>
    </section>
  );
};
