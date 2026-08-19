export interface ExpertiseDomainItem {
  id: string;
  index: string;
  title: string;
  capability: string;
  technologies: string[];
  scaleMarker?: string;
}

export const expertiseDomains: ExpertiseDomainItem[] = [
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
];
