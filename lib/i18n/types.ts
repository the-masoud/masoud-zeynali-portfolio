export type Locale = "en" | "fa";

export interface NavLinkData {
  label: string;
  href: string;
}

export interface CommandItemPresentation {
  label: string;
  description?: string;
  keywords: readonly string[];
}

export interface CommandPaletteI18n {
  triggerLabel: string;
  triggerAriaLabel: string;
  title: string;
  subtitle: string;
  badge: string;
  placeholder: string;
  noResultsText: string;
  quickAccessHeading: string;
  actionsHeading: string;
  footerLegend: {
    navigate: string;
    open: string;
    close: string;
  };
  commands: Record<string, CommandItemPresentation>;
}

export interface NavbarData {
  navLinks: NavLinkData[];
  resumeLabel: string;
  resumeAriaLabel: string;
  mobileMenuOpenAriaLabel: string;
  mobileMenuCloseAriaLabel: string;
  currentLocale: Locale;
  langSwitch: {
    enHref: string;
    faHref: string;
    enAriaLabel: string;
    faAriaLabel: string;
  };
  commandPalette: CommandPaletteI18n;
}

export interface HeroMetricItem {
  id: string;
  value: string;
  label: string;
  annotation: string;
  tag: string;
}

export interface HeroData {
  badgeText: string;
  securityText: string;
  aiAgentsText: string;
  nameLine1: string;
  nameLine2: string;
  specialtyAi: string;
  specialtyInfra: string;
  specialtySecurity: string;
  specializationRole: string;
  statement: string;
  ctaPrimary: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  metricsHeader: string;
  metricsSubheader: string;
  metrics: HeroMetricItem[];
}

export interface PrincipleItem {
  id: string;
  label: string;
  description: string;
  tag: string;
}

export interface ProfessionalStoryData {
  sectionMarker: string;
  technicalMarker: string;
  heading: string;
  subheading: string;
  domainMarker: string;
  governanceMarker: string;
  focusMarker: string;
  paragraphs: string[];
  principlesHeader: string;
  principlesSubheader: string;
  principles: PrincipleItem[];
}

export interface CareerStageData {
  id: string;
  stageNumber: string;
  stageCategory: string;
  title: string;
  duration: string;
  narrative: string;
  responsibilitiesHeader: string;
  responsibilities: string[];
  scaleHighlight?: string;
  tag: string;
}

export interface CareerJourneyData {
  sectionMarker: string;
  technicalMarker: string;
  heading: string;
  subheading: string;
  employer: {
    name: string;
    tenure: string;
    location: string;
  };
  stages: CareerStageData[];
  verifiedScaleLabel: string;
  verifiedContextLabel: string;
}

export interface ExpertiseDomainData {
  id: string;
  index: string;
  title: string;
  capability: string;
  technologies: string[];
  scaleMarker?: string;
}

export interface ExpertiseLandscapeData {
  sectionMarker: string;
  technicalMarker: string;
  heading: string;
  subheading: string;
  matrixHeaders: {
    domain: string;
    capability: string;
    technologies: string;
  };
  domains: ExpertiseDomainData[];
  verifiedScaleLabel: string;
}

export interface ArchitectureNodeData {
  id: string;
  step: string;
  primaryLabel: string;
  supportingLabel: string;
}

export interface InfraPrincipleData {
  id: string;
  number: string;
  title: string;
  titleLtr?: string;
  statement: string;
  tag: string;
}

export interface InfraForgeData {
  sectionMarker: string;
  sectionCategory: string;
  sectionHeading: string;
  sectionSupporting: string;
  projectMarker: string;
  caseDossierLabel: string;
  projectName: string;
  descriptor: string;
  classification: string;
  developmentState: string;
  repositoryAction: string;
  repositoryUrl: string;
  repositoryAriaLabel: string;
  problem: {
    heading: string;
    copy: string;
  };
  systemIntent: {
    heading: string;
    copy: string;
  };
  architecture: {
    heading: string;
    flowLabel: string;
    subLabel: string;
    nodes: ArchitectureNodeData[];
    ariaLabel: string;
  };
  principles: {
    heading: string;
    flowLabel: string;
    subLabel: string;
    items: InfraPrincipleData[];
  };
  developmentScope: {
    heading: string;
    flowLabel: string;
    subLabel: string;
    tags: string[];
    ariaLabel: string;
  };
  engineeringNotes: {
    heading: string;
    flowLabel: string;
    subLabel: string;
    serverOnboarding: {
      heading: string;
      copy: string;
    };
    inventoryReconciliation: {
      heading: string;
      copy: string;
    };
    securityConstraints: {
      heading: string;
      items: string[];
      governanceLabel: string;
      ariaLabel: string;
    };
  };
}

export interface ReasoningScenarioData {
  id: string;
  scenarioNumber: string;
  title: string;
  category: string;
  request: string;
  boundary: string;
  expectedBehavior: string;
}

export interface ReasoningLabData {
  sectionMarker: string;
  technicalLabel: string;
  sectionHeading: string;
  supportingStatement: string;
  simulationDisclosureLabel: string;
  simulationDisclosureCopy: string;
  selector: {
    header: string;
    countLabel: string;
  };
  workflow: {
    headerSubLabel: string;
    stage1Label: string;
    stage2Label: string;
    stage3Label: string;
  };
  scenarios: ReasoningScenarioData[];
}

export interface CertificationRecordData {
  id: string;
  name: string;
  qualification: string;
  issuer: string;
  year: string;
}

export interface EducationRecordData {
  id: string;
  program: string;
  institution: string;
  status?: string;
}

export interface ProfessionalRecordData {
  sectionMarker: string;
  technicalLabel: string;
  sectionHeading: string;
  supportingStatement: string;
  resume: {
    heading: string;
    supportingCopy: string;
    formatBadge: string;
    downloadUrl: string;
    fileName: string;
    actionLabel: string;
  };
  transcript: {
    heading: string;
    actionLabel: string;
    ariaLabel: string;
    url: string;
  };
  educationHeading: string;
  certifications: CertificationRecordData[];
  education: EducationRecordData[];
  contact: {
    heading: string;
    name: string;
    title: string;
    specialization: string;
    location: string;
    email: string;
    emailActionLabel: string;
    githubDisplay: string;
    githubUrl: string;
    githubActionLabel: string;
    githubAriaLabel: string;
  };
}

export interface FooterData {
  brandName: string;
  brandTag: string;
  phaseLabel: string;
  domainSummary: string;
  copyrightYear: number;
}

export interface SiteMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogLocale: string;
  siteName: string;
  skipLinkText: string;
}

export interface StructuredDataPresentation {
  personJobTitle: string;
  personDescription?: string;
  knowsAbout: string[];
  infraForgeDescription: string;
  credentialDescriptions: { [id: string]: string };
}

export interface PortfolioDictionary {
  locale: Locale;
  dir: "ltr" | "rtl";
  metadata: SiteMetadata;
  navbar: NavbarData;
  hero: HeroData;
  story: ProfessionalStoryData;
  career: CareerJourneyData;
  expertise: ExpertiseLandscapeData;
  infraForge: InfraForgeData;
  lab: ReasoningLabData;
  professionalRecord: ProfessionalRecordData;
  footer: FooterData;
  schema: StructuredDataPresentation;
}
