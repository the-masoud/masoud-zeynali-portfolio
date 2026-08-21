import { PortfolioDictionary } from "../types";
import { SHARED_FACTS } from "../constants";

export const enDictionary: PortfolioDictionary = {
  locale: "en",
  dir: "ltr",
  metadata: {
    title: "Masoud Zeynali — Senior AI Engineer, Infrastructure & Security",
    description:
      "Personal technology portfolio of Masoud Zeynali, a Senior AI Engineer focused on AI Agents, Model Context Protocol (MCP), infrastructure automation, network security, and AI-assisted infrastructure operations.",
    ogTitle: "Masoud Zeynali — Senior AI Engineer, Infrastructure & Security",
    ogDescription:
      "Personal technology portfolio of Masoud Zeynali, a Senior AI Engineer focused on AI Agents, Model Context Protocol (MCP), infrastructure automation, network security, and AI-assisted infrastructure operations.",
    ogLocale: "en_US",
    siteName: "Masoud Zeynali",
    skipLinkText: "Skip to main content",
  },
  navbar: {
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Expertise", href: "#expertise" },
      { label: "Experience", href: "#experience" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
    resumeLabel: "Resume",
    resumeAriaLabel: "Download Resume (PDF)",
    mobileMenuOpenAriaLabel: "Open navigation menu",
    mobileMenuCloseAriaLabel: "Close navigation menu",
    currentLocale: "en",
    langSwitch: {
      enHref: "/",
      faHref: "/fa",
      enAriaLabel: "English language",
      faAriaLabel: "Switch to Persian language",
    },
    commandPalette: {
      triggerLabel: "COMMAND",
      triggerAriaLabel: "Open Agent Console",
      title: "AGENT CONSOLE",
      subtitle: "LOCAL COMMAND INDEX",
      badge: "NO EXTERNAL REQUESTS",
      placeholder: "Search portfolio or run a command...",
      noResultsText: "No matching command",
      quickAccessHeading: "QUICK ACCESS",
      actionsHeading: "ACTIONS",
      footerLegend: {
        navigate: "Navigate",
        open: "Open",
        close: "Close",
      },
      commands: {
        about: {
          label: "About",
          description: "Professional background and core engineering principles",
          keywords: ["about", "profile", "bio", "principles", "background", "story"],
        },
        experience: {
          label: "Experience",
          description: "Two decades of IT leadership and infrastructure career stages",
          keywords: ["experience", "career", "history", "timeline", "stages", "tenure", "leadership"],
        },
        expertise: {
          label: "Technical Expertise",
          description: "Architecture domains, systems engineering and capability matrix",
          keywords: ["expertise", "skills", "technologies", "architecture", "systems", "capabilities", "matrix"],
        },
        "ai-engineering": {
          label: "AI Engineering",
          description: "AI agents, MCP integration, LLM workflows and context engineering",
          keywords: ["AI", "AI Engineering", "AI Agents", "Agentic Workflows", "LLM", "MCP", "Model Context Protocol", "Context Engineering"],
        },
        infrastructure: {
          label: "Infrastructure",
          description: "Enterprise servers, virtualization, Active Directory and hybrid systems",
          keywords: ["Infrastructure", "IT Infrastructure", "Systems", "Windows Server", "Linux", "Active Directory", "Docker"],
        },
        security: {
          label: "Security",
          description: "Network security, firewall governance, SSH and secure tunneling",
          keywords: ["Security", "Network Security", "Sophos", "Firewall", "SSH", "VLESS", "V2Ray"],
        },
        infraforge: {
          label: "InfraForge",
          description: "Go-based MCP server for AI-assisted infrastructure operations",
          keywords: ["InfraForge", "MCP", "server", "automation", "infrastructure", "go", "tools", "project"],
        },
        "reasoning-lab": {
          label: "Operational Reasoning Lab",
          description: "Interactive simulation of deterministic AI boundary verification",
          keywords: ["lab", "reasoning", "simulation", "operational", "scenarios", "safety", "verification"],
        },
        resume: {
          label: "Download Resume",
          description: "Download verified professional CV in PDF format",
          keywords: ["resume", "cv", "pdf", "download", "curriculum vitae"],
        },
        contact: {
          label: "Contact",
          description: "Direct contact channels and official professional credentials",
          keywords: ["contact", "email", "credentials", "touch", "location"],
        },
        github: {
          label: "GitHub",
          description: "Open public GitHub repositories and open-source contributions",
          keywords: ["github", "code", "repositories", "open source", "the-masoud"],
        },
        "microsoft-transcript": {
          label: "Microsoft Transcript",
          description: "Official Microsoft Learn verified certification transcript",
          keywords: ["microsoft", "transcript", "certifications", "mcse", "learn", "credentials"],
        },
        email: {
          label: "Email",
          description: "Compose an email directly to zeynali@outlook.com",
          keywords: ["email", "mail", "send", "outlook", "message"],
        },
        "language-en": {
          label: "English",
          description: "Switch interface to English language",
          keywords: ["english", "en", "language", "locale"],
        },
        "language-fa": {
          label: "فارسی",
          description: "تغییر زبان به فارسی",
          keywords: ["persian", "farsi", "fa", "language", "locale", "فارسی"],
        },
      },
    },
  },
  hero: {
    badgeText: "ENTERPRISE ARCHITECTURE",
    securityText: "SECURITY-FOCUSED SYSTEMS",
    aiAgentsText: "AI AGENTS & MCP",
    nameLine1: "MASOUD",
    nameLine2: "ZEYNALI",
    specialtyAi: "AI Engineering",
    specialtyInfra: "IT Infrastructure",
    specialtySecurity: "Security",
    specializationRole: "Senior AI Engineer — Agents, MCP & Infrastructure",
    statement:
      "Nearly two decades of enterprise IT and infrastructure engineering experience, combined with senior AI engineering focused on AI agents, Model Context Protocol (MCP), infrastructure automation, and secure AI-assisted operations.",
    ctaPrimary: {
      label: "Explore My Work",
      href: "#work",
      ariaLabel: "Explore My Work",
    },
    ctaSecondary: {
      label: "About Me",
      href: "#about",
      ariaLabel: "About Me",
    },
    metricsHeader: "VERIFIED SCALE & LEADERSHIP INDICATORS",
    metricsSubheader: "ENTERPRISE SCALE",
    metrics: [
      {
        id: "exp",
        value: `${SHARED_FACTS.metrics.itExperienceYears} YEARS`,
        label: "IT & INFRASTRUCTURE",
        annotation: "Continuous enterprise systems engineering & operations",
        tag: "DOMAIN::INFRA_SYSTEMS",
      },
      {
        id: "team",
        value: SHARED_FACTS.metrics.teamSupervisedCount,
        label: "TECHNICAL TEAM SUPERVISED",
        annotation: "Direct supervision of engineers, administrators & IT specialists",
        tag: "LEADERSHIP::TEAM_GOV",
      },
      {
        id: "endpoints",
        value: SHARED_FACTS.metrics.endpointsCount,
        label: "MANAGED WINDOWS ENDPOINTS",
        annotation: "Centralized Active Directory, Group Policy & endpoint management",
        tag: "SCALE::ENDPOINT_OPS",
      },
    ],
  },
  story: {
    sectionMarker: "01 / PROFILE",
    technicalMarker: "SYSTEMS ARCHITECTURE",
    heading: "ENGINEERING EVOLUTION & TECHNICAL GOVERNANCE",
    subheading: "Hands-on operational roots to enterprise IT leadership.",
    domainMarker: "DOMAIN::SYSTEMS_ENGINEERING",
    governanceMarker: "GOVERNANCE::ENTERPRISE_IT",
    focusMarker: "FOCUS::RESILIENT_OPERATIONS",
    paragraphs: [
      "Masoud’s career began in hands-on IT support, troubleshooting, and network operations, building a practical foundation across Windows client environments, Active Directory support, Group Policy, and organization-wide incident resolution. His responsibilities later expanded into the design and management of enterprise network infrastructure, administration and security of enterprise server environments, and centralized endpoint operations across more than 300 Windows endpoints.",
      "As his responsibilities grew, Masoud moved into IT leadership and departmental responsibility, leading infrastructure development planning, defining the organization’s technology roadmap, supervising critical technology projects, and guiding more than 15 technical staff and specialists across network, security, help desk, and infrastructure functions. Today, nearly two decades of enterprise IT, infrastructure governance, and network security leadership serve as the foundation for his current engineering direction as a Senior AI Engineer—focused on AI agents, Model Context Protocol (MCP), infrastructure automation, and secure AI-assisted operational workflows.",
    ],
    principlesHeader: "ENGINEERING DISCIPLINES & PRINCIPLES",
    principlesSubheader: "CORE TENETS",
    principles: [
      {
        id: "reliability",
        label: "RELIABILITY",
        description: "Infrastructure should remain stable and operational.",
        tag: "INFRA::RELIABILITY",
      },
      {
        id: "security",
        label: "SECURITY",
        description: "Infrastructure and network decisions should be security-conscious.",
        tag: "SECURITY::DESIGN",
      },
      {
        id: "automation",
        label: "AUTOMATION",
        description: "Recurring operational processes should be automated where appropriate.",
        tag: "OPS::AUTOMATION",
      },
      {
        id: "leadership",
        label: "LEADERSHIP",
        description: "Technical decisions should translate into practical organizational outcomes.",
        tag: "LEADERSHIP::OUTCOMES",
      },
    ],
  },
  career: {
    sectionMarker: "02 / CAREER",
    technicalMarker: "PROFESSIONAL TRAJECTORY",
    heading: "CAREER JOURNEY & LEADERSHIP PROGRESSION",
    subheading:
      "Continuous progression across nearly two decades of professional IT experience, advancing from hands-on IT support and network operations to infrastructure ownership and departmental leadership.",
    employer: {
      name: SHARED_FACTS.career.employer,
      tenure: SHARED_FACTS.career.overallTenureLatin,
      location: SHARED_FACTS.career.location,
    },
    verifiedScaleLabel: "VERIFIED SCALE:",
    verifiedContextLabel: "VERIFIED CONTEXT",
    stages: [
      {
        id: "help-desk-specialist",
        stageNumber: "01",
        stageCategory: "OPERATIONAL FOUNDATION",
        title: "Help Desk and Network Support Specialist",
        duration: "6 years",
        narrative:
          "Built a hands-on support foundation through technical troubleshooting, network infrastructure support, Active Directory services, and Windows client environments.",
        responsibilitiesHeader: "KEY RESPONSIBILITIES & SCOPE:",
        responsibilities: [
          "Technical support and advanced troubleshooting for network infrastructure, Active Directory services, and Windows client environments.",
          "Implementation and management of centralized Group Policy Objects (GPO) and resolution of organization-wide hardware and software incidents.",
          "Handling user requests and support tickets while improving the consistency, response quality, and reliability of IT support services.",
        ],
        tag: "ROLE::SUPPORT_FOUNDATION",
      },
      {
        id: "network-manager",
        stageNumber: "02",
        stageCategory: "INFRASTRUCTURE OWNERSHIP",
        title: "Network Manager",
        duration: "7 years",
        narrative:
          "Designed, implemented, and managed the company’s network architecture while maintaining the availability, stability, and security of critical internal services.",
        responsibilitiesHeader: "KEY RESPONSIBILITIES & SCOPE:",
        responsibilities: [
          "Administration and security of enterprise server environments, including Microsoft Exchange and MDaemon.",
          "Sophos Firewall administration for traffic control, monitoring, NAT, policy enforcement, and perimeter protection.",
          "Centralized administration of more than 300 Windows endpoints, including patch management, software distribution, and automation through ManageEngine Endpoint Central.",
        ],
        scaleHighlight: "300+ Windows endpoints",
        tag: "ROLE::NETWORK_INFRA",
      },
      {
        id: "deputy-head",
        stageNumber: "03",
        stageCategory: "IT LEADERSHIP",
        title: "Deputy Head of Information Technology Department",
        duration: "Last 5 years — Present",
        narrative:
          "Leads the IT department, plans infrastructure development, defines the organization’s technology roadmap, and supervises critical technology projects while contributing to resource allocation, IT budgeting, and technology lifecycle oversight.",
        responsibilitiesHeader: "KEY RESPONSIBILITIES & SCOPE:",
        responsibilities: [
          "Direct supervision, evaluation, and guidance of more than 15 employees, senior specialists, and technical professionals across network, security, help desk, and infrastructure functions.",
          "Infrastructure development planning, technology roadmap definition, and oversight of critical technology projects.",
          "Resource allocation, contribution to IT budgeting, technology asset lifecycle oversight, and development of the team’s technical capabilities.",
        ],
        scaleHighlight: "15+ technical staff and specialists",
        tag: "ROLE::IT_LEADERSHIP",
      },
    ],
  },
  expertise: {
    sectionMarker: "03 / EXPERTISE",
    technicalMarker: "TECHNICAL MATRIX",
    heading: "TECHNOLOGY LANDSCAPE",
    subheading:
      "A structured engineering matrix spanning enterprise platforms, network security, messaging, edge and cloud infrastructure, endpoint governance, and senior AI engineering across agents and Model Context Protocol (MCP).",
    matrixHeaders: {
      domain: "DOMAIN / DISCIPLINE",
      capability: "CAPABILITY FOCUS",
      technologies: "VERIFIED TECHNOLOGIES",
    },
    verifiedScaleLabel: "VERIFIED SCALE:",
    domains: [
      {
        id: "infrastructure-platforms",
        index: "01",
        title: "INFRASTRUCTURE & PLATFORMS",
        capability:
          "Administration and operation of Windows Server and Linux environments, with Active Directory, Group Policy, Docker, and supporting enterprise services.",
        technologies: [
          "Windows Server",
          "Linux",
          "Active Directory",
          "Group Policy",
          "Docker",
        ],
      },
      {
        id: "networking-security",
        index: "02",
        title: "NETWORKING & SECURITY",
        capability:
          "Network security and traffic administration spanning firewall policy, NAT, DNS, SSH, defensive controls, network monitoring, and connectivity technologies.",
        technologies: [
          "Sophos Firewall",
          "NAT",
          "DNS",
          "SSH",
          "Fail2ban",
          "Network Monitoring",
          "V2Ray / VLESS",
        ],
      },
      {
        id: "messaging-collaboration",
        index: "03",
        title: "MESSAGING & COLLABORATION",
        capability:
          "Administration of enterprise messaging environments and secure mail infrastructure across Microsoft Exchange, MDaemon, Mailcow, and SSL/TLS certificate operations.",
        technologies: [
          "Microsoft Exchange",
          "MDaemon",
          "Mailcow",
          "SSL / TLS",
        ],
      },
      {
        id: "web-cloud",
        index: "04",
        title: "WEB & CLOUD",
        capability:
          "Linux web services and cloud-based traffic management using Nginx, Caddy, Cloudflare DNS, Cloudflare Workers, redirects, and domain forwarding.",
        technologies: [
          "Nginx",
          "Caddy",
          "Cloudflare DNS",
          "Cloudflare Workers",
          "Redirects",
          "Domain Forwarding",
        ],
      },
      {
        id: "endpoint-operations",
        index: "05",
        title: "ENDPOINT OPERATIONS",
        capability:
          "Centralized Windows endpoint administration at 300+ device scale, covering patch management, software distribution, automation, and operational control with ManageEngine Endpoint Central.",
        technologies: [
          "ManageEngine Endpoint Central",
          "Windows Endpoints",
          "Patch Management",
          "Software Distribution",
          "Endpoint Automation",
        ],
        scaleMarker: "300+ WINDOWS ENDPOINTS",
      },
      {
        id: "ai-engineering-agents-mcp",
        index: "06",
        title: "AI ENGINEERING, AGENTS & MCP",
        capability:
          "Senior AI engineering focused on agentic systems, Model Context Protocol (MCP), LLM-assisted infrastructure operations, operational reasoning, and automation across modern infrastructure workflows.",
        technologies: [
          "AI Agents",
          "Agentic Workflows",
          "Model Context Protocol (MCP)",
          "Large Language Models",
          "LLM Integration",
          "Infrastructure Automation",
          "Operational Reasoning",
          "Log Analysis",
          "AI-assisted Troubleshooting",
          "Tool Integration",
          "Context Engineering",
          "Scripting & Automation",
        ],
      },
    ],
  },
  infraForge: {
    sectionMarker: "04 / SELECTED WORK",
    sectionCategory: "CASE STUDY",
    sectionHeading: "ENGINEERING IN PRACTICE",
    sectionSupporting:
      "Selected engineering work illustrating AI engineering at the infrastructure boundary—where systems operations, security controls, and agentic workflows converge.",
    projectMarker: "PROJECT 01 / FEATURED",
    caseDossierLabel: "CASE DOSSIER",
    projectName: SHARED_FACTS.projects.infraForge.name,
    descriptor:
      "Agentic Infrastructure Operations via Model Context Protocol (MCP)",
    classification: "PERSONAL ENGINEERING PROJECT",
    developmentState: "ACTIVE DEVELOPMENT",
    repositoryAction: "VIEW REPOSITORY",
    repositoryUrl: SHARED_FACTS.projects.infraForge.repositoryUrl,
    repositoryAriaLabel: `View repository for ${SHARED_FACTS.projects.infraForge.name} on GitHub (opens in a new tab)`,
    problem: {
      heading: "THE PROBLEM",
      copy: "AI-assisted infrastructure tooling becomes significantly more useful when it can understand real server environments, but direct and unrestricted infrastructure access introduces serious security and operational concerns. InfraForge explores a controlled interface between AI-assisted workflows and Linux infrastructure, with an emphasis on least privilege, structured discovery, and explicit operational boundaries.",
    },
    systemIntent: {
      heading: "SYSTEM INTENT",
      copy: "InfraForge is designed as an MCP-oriented infrastructure server/tool that can represent servers, support controlled discovery and inventory workflows, and provide a foundation for AI-assisted infrastructure interaction without treating unrestricted shell access as the default operating model.",
    },
    architecture: {
      heading: "CONCEPTUAL ARCHITECTURE",
      flowLabel: "INTEGRATION FLOW",
      subLabel: "FIVE-NODE CONCEPTUAL BOUNDARY",
      ariaLabel: "InfraForge Conceptual Architecture Flow",
      nodes: [
        {
          id: "node-01",
          step: "01",
          primaryLabel: "AI / MCP CLIENT",
          supportingLabel: "ASSISTED WORKFLOW",
        },
        {
          id: "node-02",
          step: "02",
          primaryLabel: "INFRAFORGE",
          supportingLabel: "CONTROL & CONTEXT LAYER",
        },
        {
          id: "node-03",
          step: "03",
          primaryLabel: "SERVER ACCESS",
          supportingLabel: "RESTRICTED SSH INTERFACE",
        },
        {
          id: "node-04",
          step: "04",
          primaryLabel: "LINUX INFRASTRUCTURE",
          supportingLabel: "SERVER TARGETS",
        },
        {
          id: "node-05",
          step: "05",
          primaryLabel: "DISCOVERY & INVENTORY",
          supportingLabel: "STRUCTURED INFRASTRUCTURE CONTEXT",
        },
      ],
    },
    principles: {
      heading: "ENGINEERING PRINCIPLES",
      flowLabel: "OPERATIONAL BOUNDARIES",
      subLabel: "FOUR PROJECT TENETS",
      items: [
        {
          id: "least-privilege",
          number: "01",
          title: "LEAST PRIVILEGE",
          statement:
            "Infrastructure access should expose only the capabilities required for the intended operational task.",
          tag: "PRINCIPLE::01",
        },
        {
          id: "credential-hygiene",
          number: "02",
          title: "CREDENTIAL HYGIENE",
          statement:
            "Credentials, private keys, and sensitive access material are treated as protected data that should remain outside normal operational logs.",
          tag: "PRINCIPLE::02",
        },
        {
          id: "controlled-onboarding",
          number: "03",
          title: "CONTROLLED ONBOARDING",
          statement:
            "Server onboarding establishes explicit access boundaries and predictable monitoring behavior rather than relying on unrestricted administrative sessions.",
          tag: "PRINCIPLE::03",
        },
        {
          id: "automation-with-guardrails",
          number: "04",
          title: "AUTOMATION WITH GUARDRAILS",
          statement:
            "Repetitive infrastructure workflows can be automated while preserving explicit boundaries around access and operational scope.",
          tag: "PRINCIPLE::04",
        },
      ],
    },
    developmentScope: {
      heading: "DEVELOPMENT SCOPE",
      flowLabel: "VERIFIED TECHNOLOGIES",
      subLabel: "SCOPE BOUNDARY",
      ariaLabel: "Verified Development Technologies and Focus Areas",
      tags: [
        "Go",
        "Model Context Protocol",
        "SSH",
        "Linux",
        "PowerShell",
        "Infrastructure Inventory",
        "Inventory Reconciliation",
        "Server Onboarding",
        "Automation",
      ],
    },
    engineeringNotes: {
      heading: "ENGINEERING NOTES & SECURITY CONSTRAINTS",
      flowLabel: "IMPLEMENTATION FOCUS",
      subLabel: "SAFE ARCHITECTURAL SCOPE",
      serverOnboarding: {
        heading: "SERVER ONBOARDING",
        copy: "A dedicated `infra` monitoring account is configured with restrictive SSH controls as part of the project's least-privilege onboarding approach. Restrictive SSH controls reduce unnecessary session capabilities for the monitoring account.",
      },
      inventoryReconciliation: {
        heading: "INVENTORY RECONCILIATION",
        copy: "Structured reconciliation work focuses on maintaining a consistent representation of discovered infrastructure as server inventory changes over time.",
      },
      securityConstraints: {
        heading: "SECURITY DESIGN REQUIREMENTS",
        governanceLabel: "GOVERNANCE: DESIGN CONSTRAINTS & REQUIREMENTS",
        ariaLabel: "Security design requirements and constraints",
        items: [
          "Administrative and MCP client authentication boundaries",
          "Protection of SSH credentials and private key material",
          "Treatment of sensitive access material outside operational logs",
          "Restrictive least-privilege server access model",
          "Network access restrictions and operational boundaries",
          "Controlled server onboarding and lifecycle behavior",
        ],
      },
    },
  },
  lab: {
    sectionMarker: "05 / INTERACTIVE EXPERIENCE",
    technicalLabel: "BROWSER-ONLY SIMULATION",
    sectionHeading: "OPERATIONAL REASONING LAB",
    supportingStatement:
      "Explore how agentic requests translate into explicit operational boundaries, predictable system behavior, and safe AI-assisted infrastructure workflows.",
    simulationDisclosureLabel: "SIMULATED INTERACTIVE DEMO",
    simulationDisclosureCopy:
      "Browser-only demonstration. No live infrastructure connection, remote execution, application-level data request, or real server data is involved.",
    selector: {
      header: "Select Scenario",
      countLabel: "3 Scenarios Available",
    },
    workflow: {
      headerSubLabel: "STRUCTURED REASONING",
      stage1Label: "01 / REQUEST",
      stage2Label: "02 / OPERATIONAL BOUNDARY",
      stage3Label: "03 / EXPECTED SYSTEM BEHAVIOR",
    },
    scenarios: [
      {
        id: "scenario-01",
        scenarioNumber: "SCENARIO 01",
        title: "DISCOVER INVENTORY",
        category: "DISCOVERY",
        request:
          "Represent Linux infrastructure context as a structured inventory view.",
        boundary:
          "Remain within discovery and inventory scope. Do not treat unrestricted shell access as the default interaction model.",
        expectedBehavior:
          "Represent infrastructure information as structured context that can be reviewed before any broader operational action is considered.",
      },
      {
        id: "scenario-02",
        scenarioNumber: "SCENARIO 02",
        title: "REVIEW ACCESS BOUNDARY",
        category: "ACCESS CONTROL",
        request:
          "Evaluate the intended access boundary for a monitoring workflow targeting Linux infrastructure.",
        boundary:
          "Prefer the dedicated infra monitoring account and restrictive SSH controls rather than unrestricted administrative access.",
        expectedBehavior:
          "Keep the monitoring workflow within an explicit least-privilege access boundary.",
      },
      {
        id: "scenario-03",
        scenarioNumber: "SCENARIO 03",
        title: "RECONCILE INVENTORY",
        category: "STATE CONSISTENCY",
        request:
          "The structured inventory representation no longer matches the latest known inventory information.",
        boundary:
          "Reconcile the inventory representation without implying autonomous remediation or unrestricted infrastructure changes.",
        expectedBehavior:
          "Surface the difference as a controlled reconciliation concern and maintain a consistent structured representation.",
      },
    ],
  },
  professionalRecord: {
    sectionMarker: "06 / CREDENTIALS & CONTACT",
    technicalLabel: "VERIFIED PROFESSIONAL RECORD",
    sectionHeading: "RESUME, CREDENTIALS & DIRECT CONTACT",
    supportingStatement:
      "A concise professional record combining verified credentials, education, and direct contact channels.",
    resume: {
      heading: "PROFESSIONAL RESUME",
      supportingCopy:
        "Download the verified English professional CV used as a factual source for this portfolio.",
      formatBadge: "PDF / ENGLISH",
      downloadUrl: SHARED_FACTS.person.resumeUrl,
      fileName: SHARED_FACTS.person.resumeFileName,
      actionLabel: "DOWNLOAD RESUME",
    },
    transcript: {
      heading: "MICROSOFT CERTIFICATIONS",
      actionLabel: "VIEW VERIFIED TRANSCRIPT",
      ariaLabel: "View verified transcript on Microsoft Learn (opens in new tab)",
      url: SHARED_FACTS.person.microsoftTranscriptUrl,
    },
    educationHeading: "EDUCATION",
    certifications: [
      {
        id: "mcse-server-infra",
        name: "MCSE: Server Infrastructure",
        qualification: "Microsoft Certified Solutions Expert",
        issuer: "Microsoft",
        year: "2012",
      },
      {
        id: "mcse-cloud-infra",
        name: "MCSE: Cloud Platform and Infrastructure",
        qualification: "Microsoft Certified Solutions Expert",
        issuer: "Microsoft",
        year: "2016",
      },
    ],
    education: [
      {
        id: "edu-mba",
        program: "Master of Business Administration (MBA)",
        institution: "University of Tehran",
        status: "IN PROGRESS",
      },
      {
        id: "edu-associate-it",
        program: "Associate Degree in Information Technology (IT)",
        institution: "Karaj University",
      },
    ],
    contact: {
      heading: "DIRECT CONTACT",
      name: SHARED_FACTS.person.canonicalName,
      title: "IT Manager | Network Infrastructure & Security Specialist",
      specialization: "Senior AI Engineer — Agents, MCP & Infrastructure",
      location: SHARED_FACTS.person.location,
      email: SHARED_FACTS.person.email,
      emailActionLabel: "EMAIL MASOUD",
      githubDisplay: SHARED_FACTS.person.githubDisplay,
      githubUrl: SHARED_FACTS.person.githubUrl,
      githubActionLabel: "VIEW GITHUB",
      githubAriaLabel: "View GitHub profile (opens in new tab)",
    },
  },
  footer: {
    brandName: "MASOUD ZEYNALI",
    brandTag: "SYSTEMS ENGINEERING",
    phaseLabel: "PHASE 1 FOUNDATION",
    domainSummary: "IT INFRASTRUCTURE · SECURITY · AI AUTOMATION",
    copyrightYear: 2026,
  },
  schema: {
    personJobTitle: "IT Manager | Network Infrastructure & Security Specialist",
    knowsAbout: [
      "Artificial Intelligence Engineering",
      "AI Agents",
      "Model Context Protocol (MCP)",
      "Infrastructure Automation",
      "AI-assisted Infrastructure Operations",
    ],
    infraForgeDescription:
      "Personal engineering project exploring controlled AI-assisted infrastructure operations via Model Context Protocol.",
    credentialDescriptions: {
      "mcse-server-infra": "Microsoft Certified Solutions Expert — 2012",
      "mcse-cloud-infra": "Microsoft Certified Solutions Expert — 2016",
    },
  },
};
