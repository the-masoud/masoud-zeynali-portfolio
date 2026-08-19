export interface ArchitectureNode {
  id: string;
  step: string;
  primaryLabel: string;
  supportingLabel: string;
}

export interface EngineeringPrinciple {
  id: string;
  number: string;
  title: string;
  statement: string;
  tag: string;
}

export interface SecurityRequirement {
  id: string;
  label: string;
  detail: string;
}

export const infraForgeMetadata = {
  sectionMarker: "04 / SELECTED WORK",
  sectionCategory: "CASE STUDY",
  sectionHeading: "ENGINEERING IN PRACTICE",
  sectionSupporting:
    "Selected engineering work illustrating AI engineering at the infrastructure boundary—where systems operations, security controls, and agentic workflows converge.",
  projectMarker: "PROJECT 01 / FEATURED",
  projectName: "INFRAFORGE",
  descriptor: "Agentic Infrastructure Operations via Model Context Protocol (MCP)",
  classification: "PERSONAL ENGINEERING PROJECT",
  developmentState: "ACTIVE DEVELOPMENT",
  repositoryAction: "VIEW REPOSITORY",
  repositoryUrl: "https://github.com/the-masoud/InfraForge",
  problem: {
    heading: "THE PROBLEM",
    copy: "AI-assisted infrastructure tooling becomes significantly more useful when it can understand real server environments, but direct and unrestricted infrastructure access introduces serious security and operational concerns. InfraForge explores a controlled interface between AI-assisted workflows and Linux infrastructure, with an emphasis on least privilege, structured discovery, and explicit operational boundaries.",
  },
  systemIntent: {
    heading: "SYSTEM INTENT",
    copy: "InfraForge is designed as an MCP-oriented infrastructure server/tool that can represent servers, support controlled discovery and inventory workflows, and provide a foundation for AI-assisted infrastructure interaction without treating unrestricted shell access as the default operating model.",
  },
};

export const conceptualArchitectureNodes: ArchitectureNode[] = [
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
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
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
];

export const developmentScopeTags: string[] = [
  "Go",
  "Model Context Protocol",
  "SSH",
  "Linux",
  "PowerShell",
  "Infrastructure Inventory",
  "Inventory Reconciliation",
  "Server Onboarding",
  "Automation",
];

export const engineeringNotes = {
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
    items: [
      "Administrative and MCP client authentication boundaries",
      "Protection of SSH credentials and private key material",
      "Treatment of sensitive access material outside operational logs",
      "Restrictive least-privilege server access model",
      "Network access restrictions and operational boundaries",
      "Controlled server onboarding and lifecycle behavior",
    ],
  },
};
