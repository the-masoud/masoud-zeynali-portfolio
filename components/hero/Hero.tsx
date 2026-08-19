import React from "react";
import { ArrowRight, ChevronRight, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroMetrics } from "./HeroMetrics";
import { InfrastructureTopology } from "@/components/visuals/InfrastructureTopology";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pt-8 pb-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Infrastructure Topology Visual Layer */}
      <InfrastructureTopology />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Technical Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 animate-fade-in">
          <Badge variant="cyan" dot={false}>
            ENTERPRISE ARCHITECTURE
          </Badge>
          <span className="hidden sm:inline-block text-border-panel">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-fg-muted">
            <Shield className="w-3.5 h-3.5 text-accent-cyan" />
            <span>SECURITY-FOCUSED SYSTEMS</span>
          </span>
          <span className="hidden sm:inline-block text-border-panel">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-xs font-mono text-fg-secondary">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            <span>AI AGENTS &amp; MCP</span>
          </span>
        </div>

        {/* Hero Title & Primary Identity */}
        <div className="max-w-4xl mb-8">
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono tracking-tight text-white mb-4 sm:mb-6 uppercase leading-none"
          >
            MASOUD <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-accent-cyan">
              ZEYNALI
            </span>
          </h1>

          {/* Primary Professional Positioning */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl md:text-3xl font-mono font-medium text-accent-cyan mb-3">
            <span>IT Infrastructure</span>
            <span className="text-fg-subtle font-sans">·</span>
            <span>Security</span>
            <span className="text-fg-subtle font-sans">·</span>
            <span className="text-fg-primary">AI Engineering</span>
          </div>

          {/* User-Authorized Senior AI Engineer Specialization */}
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-mono text-slate-200 font-semibold mb-6">
            <span className="text-accent-cyan">::</span>
            <span className="tracking-wide">Senior AI Engineer — Agents, MCP &amp; Infrastructure</span>
          </div>

          {/* Mature Professional Supporting Statement */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl font-normal">
            Nearly two decades of enterprise IT and infrastructure engineering experience,
            combined with senior AI engineering focused on AI agents, Model Context Protocol (MCP),
            infrastructure automation, and secure AI-assisted operations.
          </p>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
          <Button
            href="#work"
            variant="primary"
            size="lg"
            className="group"
            aria-label="Explore My Work"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            href="#about"
            variant="secondary"
            size="lg"
            className="group"
            aria-label="About Me"
          >
            <span>About Me</span>
            <ChevronRight className="w-4 h-4 text-fg-muted group-hover:text-fg-primary group-hover:translate-x-0.5 transition-all" />
          </Button>
        </div>

        {/* Professional Metrics */}
        <HeroMetrics />
      </div>
    </section>
  );
};
