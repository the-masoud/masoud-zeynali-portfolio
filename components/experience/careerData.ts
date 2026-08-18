export interface CareerStageItem {
  id: string;
  stageNumber: string;
  stageCategory: string;
  title: string;
  duration: string;
  narrative: string;
  responsibilities: string[];
  scaleHighlight?: string;
  tag: string;
}

export const employerData = {
  name: "Tehran Raymand Consulting Engineers",
  overallTenure: "2007 — Present",
  location: "Tehran, Iran",
};

export const careerStages: CareerStageItem[] = [
  {
    id: "help-desk-specialist",
    stageNumber: "01",
    stageCategory: "OPERATIONAL FOUNDATION",
    title: "Help Desk and Network Support Specialist",
    duration: "6 years",
    narrative:
      "Built a hands-on support foundation through technical troubleshooting, network infrastructure support, Active Directory services, and Windows client environments.",
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
    responsibilities: [
      "Direct supervision, evaluation, and guidance of more than 15 employees, senior specialists, and technical professionals across network, security, help desk, and infrastructure functions.",
      "Infrastructure development planning, technology roadmap definition, and oversight of critical technology projects.",
      "Resource allocation, contribution to IT budgeting, technology asset lifecycle oversight, and development of the team’s technical capabilities.",
    ],
    scaleHighlight: "15+ technical staff and specialists",
    tag: "ROLE::IT_LEADERSHIP",
  },
];
