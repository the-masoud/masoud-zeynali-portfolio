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
    id: "ai-operations-automation",
    index: "06",
    title: "AI-ASSISTED OPERATIONS & AUTOMATION",
    capability:
      "Use of Large Language Models for log analysis, network troubleshooting, and technical problem-solving, with familiarity in Model Context Protocol (MCP) and scripting for recurring infrastructure workflows.",
    technologies: [
      "Large Language Models",
      "Log Analysis",
      "Network Troubleshooting",
      "Model Context Protocol",
      "Scripting",
      "Automation",
    ],
  },
];
