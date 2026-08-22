"use client";

import React, { useRef, useEffect } from "react";

interface InfrastructureTopologyProps {
  locale?: "en" | "fa";
}

export const InfrastructureTopology: React.FC<InfrastructureTopologyProps> = ({
  locale = "en",
}) => {
  const isPersian = locale === "fa";
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const heroSection = wrapper.closest("section") as HTMLElement | null;
    if (!heroSection) return;

    /* ── Capability detection ── */
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    let reducedMotion = motionQuery.matches;
    let finePointer = pointerQuery.matches;

    let scrollRafId: number | null = null;
    let pointerRafId: number | null = null;

    /* ── Layer B: Hero Scroll Reactivity ── */
    const updateScrollProgress = () => {
      scrollRafId = null;
      if (reducedMotion) {
        wrapper.style.removeProperty("--topology-progress");
        return;
      }
      const rect = heroSection.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      wrapper.style.setProperty("--topology-progress", progress.toFixed(4));
    };

    const onScroll = () => {
      if (reducedMotion || scrollRafId !== null) return;
      scrollRafId = requestAnimationFrame(updateScrollProgress);
    };

    const onResize = () => {
      if (reducedMotion || scrollRafId !== null) return;
      scrollRafId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    if (!reducedMotion) {
      updateScrollProgress();
    }

    /* ── Layer C: Fine-Pointer Micro-Response ── */
    let ptrX = 0;
    let ptrY = 0;

    const updatePointerVars = () => {
      pointerRafId = null;
      if (reducedMotion) {
        wrapper.style.removeProperty("--topology-pointer-x");
        wrapper.style.removeProperty("--topology-pointer-y");
        return;
      }
      wrapper.style.setProperty("--topology-pointer-x", ptrX.toFixed(4));
      wrapper.style.setProperty("--topology-pointer-y", ptrY.toFixed(4));
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!finePointer || reducedMotion) return;
      const rect = heroSection.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      ptrX = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
      ptrY = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));
      if (pointerRafId === null) {
        pointerRafId = requestAnimationFrame(updatePointerVars);
      }
    };

    const onPointerLeave = () => {
      ptrX = 0;
      ptrY = 0;
      if (pointerRafId !== null) {
        cancelAnimationFrame(pointerRafId);
        pointerRafId = null;
      }
      wrapper.style.setProperty("--topology-pointer-x", "0");
      wrapper.style.setProperty("--topology-pointer-y", "0");
    };

    heroSection.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    heroSection.addEventListener("pointerleave", onPointerLeave);

    /* ── Media query change handlers ── */
    const onMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
      if (reducedMotion) {
        if (scrollRafId !== null) {
          cancelAnimationFrame(scrollRafId);
          scrollRafId = null;
        }
        if (pointerRafId !== null) {
          cancelAnimationFrame(pointerRafId);
          pointerRafId = null;
        }
        wrapper.style.removeProperty("--topology-progress");
        wrapper.style.removeProperty("--topology-pointer-x");
        wrapper.style.removeProperty("--topology-pointer-y");
      } else {
        updateScrollProgress();
      }
    };

    const onPointerChange = (e: MediaQueryListEvent) => {
      finePointer = e.matches;
      if (!finePointer) onPointerLeave();
    };

    motionQuery.addEventListener("change", onMotionChange);
    pointerQuery.addEventListener("change", onPointerChange);

    return () => {
      if (scrollRafId !== null) cancelAnimationFrame(scrollRafId);
      if (pointerRafId !== null) cancelAnimationFrame(pointerRafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      heroSection.removeEventListener("pointermove", onPointerMove);
      heroSection.removeEventListener("pointerleave", onPointerLeave);
      motionQuery.removeEventListener("change", onMotionChange);
      pointerQuery.removeEventListener("change", onPointerChange);
    };
  }, [locale]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      data-locale={locale}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 topology-motion"
    >
      {/* Ambient Illumination */}
      <div className={`absolute top-1/4 ${isPersian ? "left-1/3" : "left-1/2"} -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-cyan/[0.035] rounded-full blur-3xl`} />
      <div className={`absolute top-1/3 ${isPersian ? "left-10" : "right-10"} w-[450px] h-[250px] bg-accent-blue/[0.025] rounded-full blur-3xl`} />

      {/* SVG Topology Vectors & Conceptual Domain Nodes */}
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Targeted Clean-Zone Mask: attenuates lines directly behind text */}
          <radialGradient
            id="title-clean-attenuation"
            cx={isPersian ? "820" : "370"}
            cy="270"
            r={isPersian ? "450" : "320"}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#050505" />
            <stop offset="55%" stopColor="#141414" />
            <stop offset="85%" stopColor="#707070" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>

          <mask id="topology-title-mask">
            <rect width="1200" height="800" fill="url(#title-clean-attenuation)" />
          </mask>

          {/* Subtle line gradients */}
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="line-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.04" />
          </linearGradient>

          {/* Node Glow Filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g mask="url(#topology-title-mask)" className="topology-pointer-layer">
          {/* Conceptual Infrastructure Interconnects */}
          <g stroke="url(#line-grad-1)" strokeWidth="1.2" fill="none">
            {/* Edge to Core Path */}
            <path d="M 150,200 L 340,105 L 620,180 L 880,240 L 1050,150" />
            {/* Core to Distribution Path */}
            <path d="M 340,105 L 500,420 L 780,390 L 880,240" />
            {/* Mesh Structural Link */}
            <path
              d="M 150,200 L 280,480 L 500,420 L 680,560 L 980,500 L 1050,150"
              strokeDasharray="4 6"
              className="opacity-35"
            />
            {/* Security & Observability Channel */}
            <path d="M 620,180 L 780,390 L 680,560" stroke="url(#line-grad-2)" strokeWidth="1" />
          </g>

          {/* Subtle Signal Flows */}
          <g stroke="#38bdf8" strokeWidth="1.8" fill="none" className="topology-signals">
            <path
              d="M 150,200 L 340,105 L 620,180 L 880,240"
              strokeDasharray="12 180"
              strokeDashoffset="0"
              className="topology-pulse-1"
            />
            <path
              d="M 500,420 L 780,390 L 880,240"
              strokeDasharray="8 120"
              strokeDashoffset="0"
              className="topology-pulse-2"
            />
            {/* Mesh backbone signal — M2 ambient layer */}
            <path
              d="M 150,200 L 280,480 L 500,420 L 680,560 L 980,500 L 1050,150"
              strokeDasharray="6 220"
              strokeDashoffset="0"
              strokeWidth="1.2"
              className="opacity-50 topology-pulse-3"
            />
          </g>

          {/* Conceptual Infrastructure Domain Nodes */}
          {/* Node 1: Edge & Ingress (Safely inside with text positioned rightwards) */}
          <g transform="translate(180, 200)">
            <circle r="12" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle r="4" fill="#38bdf8" />
            <circle r="18" fill="none" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="3 3" />
            <text x="24" y="-8" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">EDGE</text>
            <text x="24" y="6" fill="#38bdf8" fontSize="9" fontFamily="monospace">INGRESS & PROXY</text>
          </g>

          {/* Node 2: Security & Access */}
          <g transform="translate(360, 110)">
            <circle r="14" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle r="4.5" fill="#38bdf8" filter="url(#glow)" />
            <text x="20" y="-4" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">SECURITY</text>
            <text x="20" y="10" fill="#94a3b8" fontSize="9" fontFamily="monospace">FIREWALL & ACCESS</text>
          </g>

          {/* Node 3: Core Enterprise Infrastructure */}
          <g transform="translate(620, 180)">
            <rect x="-14" y="-14" width="28" height="28" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" rx="4" />
            <circle r="4" fill="#38bdf8" />
            <text x="20" y="-8" fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="bold">CORE</text>
            <text x="20" y="6" fill="#38bdf8" fontSize="9" fontFamily="monospace">ENTERPRISE SYSTEMS</text>
          </g>

          {/* Node 4: AI & MCP Automation (Hidden on Persian to avoid competing with text) */}
          <g transform="translate(880, 240)" className={isPersian ? "hidden" : ""}>
            <polygon points="0,-12 11,8 -11,8" fill="#080a0f" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.7" />
            <circle r="3" fill="#3b82f6" />
            <text x="18" y="-4" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">AUTOMATION</text>
            <text x="18" y="10" fill="#38bdf8" fontSize="9" fontFamily="monospace">AI & MCP RUNTIME</text>
          </g>

          {/* Node 5: Enterprise Services (Hidden on Persian to avoid text collision) */}
          <g transform="translate(1050, 150)" className={isPersian ? "hidden" : ""}>
            <circle r="10" fill="#080a0f" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
            <circle r="3.5" fill="#94a3b8" />
            <text x="-95" y="-12" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">SERVICES</text>
            <text x="-95" y="2" fill="#94a3b8" fontSize="9" fontFamily="monospace">COMMUNICATIONS</text>
          </g>

          {/* Node 6: Endpoint Governance */}
          <g transform="translate(480, 420)">
            <circle r="11" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.45" />
            <circle r="4" fill="#10b981" />
            <text x="16" y="2" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">ENDPOINTS</text>
            <text x="16" y="16" fill="#10b981" fontSize="9" fontFamily="monospace">CENTRALIZED FLEET</text>
          </g>

          {/* Node 7: Observability & Telemetry (Hidden on Persian) */}
          <g transform="translate(780, 390)" className={isPersian ? "hidden" : ""}>
            <circle r="10" fill="#080a0f" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
            <circle r="3" fill="#38bdf8" />
            <text x="16" y="-4" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">OBSERVABILITY</text>
            <text x="16" y="10" fill="#94a3b8" fontSize="9" fontFamily="monospace">LOGS & AUDIT</text>
          </g>

          {/* Conceptual Architecture Markers */}
          <g fill="#64748b" fontSize="9" fontFamily="monospace" className={isPersian ? "opacity-30" : "opacity-70"}>
            <text x={isPersian ? "180" : "1000"} y="720" textAnchor={isPersian ? "start" : "end"}>+ ARCHITECTURE: MODULAR CONCEPT</text>
            <text x={isPersian ? "180" : "1000"} y="738" textAnchor={isPersian ? "start" : "end"}>+ PROTOCOLS: ENCRYPTED CHANNELS</text>
            <text x={isPersian ? "180" : "1000"} y="756" textAnchor={isPersian ? "start" : "end"}>+ DISCIPLINE: SYSTEMS ENGINEERING</text>
          </g>
        </g>
      </svg>
    </div>
  );
};
