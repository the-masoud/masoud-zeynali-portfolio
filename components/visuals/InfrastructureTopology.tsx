import React from "react";

export const InfrastructureTopology: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Ambient Illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-cyan/[0.035] rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[250px] bg-accent-blue/[0.025] rounded-full blur-3xl" />

      {/* SVG Topology Vectors & Conceptual Domain Nodes */}
      <svg
        className="w-full h-full opacity-40 sm:opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Targeted Title Clean-Zone Mask: attenuates lines to ~4-8% directly behind MASOUD ZEYNALI */}
          <radialGradient
            id="title-clean-attenuation"
            cx="370"
            cy="270"
            r="320"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#101010" />
            <stop offset="45%" stopColor="#141414" />
            <stop offset="72%" stopColor="#707070" />
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

        <g mask="url(#topology-title-mask)">
          {/* Conceptual Infrastructure Interconnects */}
          <g stroke="url(#line-grad-1)" strokeWidth="1.2" fill="none">
            {/* Edge to Core Path (routed cleanly above title zone) */}
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
          <g stroke="#38bdf8" strokeWidth="1.8" fill="none" className="opacity-60">
            <path
              d="M 150,200 L 340,105 L 620,180 L 880,240"
              strokeDasharray="12 180"
              strokeDashoffset="0"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-192"
                dur="6s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 500,420 L 780,390 L 880,240"
              strokeDasharray="8 120"
              strokeDashoffset="0"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-128"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Conceptual Infrastructure Domain Nodes */}
          {/* Node 1: Edge & Ingress */}
          <g transform="translate(150, 200)">
            <circle r="12" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle r="4" fill="#38bdf8" />
            <circle r="18" fill="none" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="3 3" />
            <text x="18" y="-10" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">EDGE</text>
            <text x="18" y="4" fill="#38bdf8" fontSize="9" fontFamily="monospace">INGRESS & PROXY</text>
          </g>

          {/* Node 2: Security & Access (relocated outside & above MASOUD ZEYNALI heading) */}
          <g transform="translate(340, 105)">
            <circle r="14" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle r="4.5" fill="#38bdf8" filter="url(#glow)" />
            <text x="18" y="-4" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">SECURITY</text>
            <text x="18" y="10" fill="#94a3b8" fontSize="9" fontFamily="monospace">FIREWALL & ACCESS</text>
          </g>

          {/* Node 3: Core Enterprise Infrastructure */}
          <g transform="translate(620, 180)">
            <rect x="-14" y="-14" width="28" height="28" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" rx="4" />
            <circle r="4" fill="#38bdf8" />
            <text x="20" y="-8" fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="bold">CORE</text>
            <text x="20" y="6" fill="#38bdf8" fontSize="9" fontFamily="monospace">ENTERPRISE SYSTEMS</text>
          </g>

          {/* Node 4: AI & MCP Automation */}
          <g transform="translate(880, 240)">
            <polygon points="0,-12 11,8 -11,8" fill="#080a0f" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.7" />
            <circle r="3" fill="#3b82f6" />
            <text x="18" y="-4" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">AUTOMATION</text>
            <text x="18" y="10" fill="#38bdf8" fontSize="9" fontFamily="monospace">AI & MCP RUNTIME</text>
          </g>

          {/* Node 5: Enterprise Services */}
          <g transform="translate(1050, 150)">
            <circle r="10" fill="#080a0f" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
            <circle r="3.5" fill="#94a3b8" />
            <text x="-95" y="-12" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">SERVICES</text>
            <text x="-95" y="2" fill="#94a3b8" fontSize="9" fontFamily="monospace">COMMUNICATIONS</text>
          </g>

          {/* Node 6: Endpoint Governance */}
          <g transform="translate(500, 420)">
            <circle r="11" fill="#080a0f" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.45" />
            <circle r="4" fill="#10b981" />
            <text x="16" y="2" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">ENDPOINTS</text>
            <text x="16" y="16" fill="#10b981" fontSize="9" fontFamily="monospace">CENTRALIZED FLEET</text>
          </g>

          {/* Node 7: Observability & Telemetry */}
          <g transform="translate(780, 390)">
            <circle r="10" fill="#080a0f" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
            <circle r="3" fill="#38bdf8" />
            <text x="16" y="-4" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="500">OBSERVABILITY</text>
            <text x="16" y="10" fill="#94a3b8" fontSize="9" fontFamily="monospace">LOGS & AUDIT</text>
          </g>

          {/* Conceptual Architecture Markers */}
          <g fill="#64748b" fontSize="9" fontFamily="monospace" className="opacity-70">
            <text x="1000" y="720" textAnchor="end">+ ARCHITECTURE: MODULAR CONCEPT</text>
            <text x="1000" y="738" textAnchor="end">+ PROTOCOLS: ENCRYPTED CHANNELS</text>
            <text x="1000" y="756" textAnchor="end">+ DISCIPLINE: SYSTEMS ENGINEERING</text>
          </g>
        </g>
      </svg>
    </div>
  );
};
