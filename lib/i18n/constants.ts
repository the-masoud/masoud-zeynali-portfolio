export const SHARED_FACTS = {
  person: {
    canonicalName: "Masoud Zeynali",
    email: "zeynali@outlook.com",
    githubUrl: "https://github.com/the-masoud",
    githubDisplay: "github.com/the-masoud",
    location: "Tehran, Iran",
    microsoftTranscriptUrl:
      "https://learn.microsoft.com/en-us/users/masoudzeynali-0702/transcript/d5exjsjlkjywp48?source=docs",
    resumeUrl: "/resume/Masoud_Zeynali_Professional_CV_EN.pdf",
    resumeFileName: "Masoud_Zeynali_Professional_CV_EN.pdf",
  },
  metrics: {
    itExperienceYears: "~20",
    teamSupervisedCount: "15+",
    endpointsCount: "300+",
  },
  career: {
    employer: "Tehran Raymand Consulting Engineers",
    startYear: 2007,
    overallTenureLatin: "2007 — Present",
    location: "Tehran, Iran",
    stages: [
      {
        id: "help-desk-specialist",
        stageNumber: "01",
        tag: "ROLE::SUPPORT_FOUNDATION",
        durationYears: "6 years",
      },
      {
        id: "network-manager",
        stageNumber: "02",
        tag: "ROLE::NETWORK_INFRA",
        durationYears: "7 years",
        scaleHighlightRaw: "300+ Windows endpoints",
      },
      {
        id: "deputy-head",
        stageNumber: "03",
        tag: "ROLE::IT_LEADERSHIP",
        durationYears: "Last 5 years — Present",
        scaleHighlightRaw: "15+ technical staff and specialists",
      },
    ],
  },
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
      programEn: "Master of Business Administration (MBA)",
      institutionEn: "University of Tehran",
      isInProgress: true,
    },
    {
      id: "edu-associate-it",
      programEn: "Associate Degree in Information Technology (IT)",
      institutionEn: "Karaj University",
      isInProgress: false,
    },
  ],
  projects: {
    infraForge: {
      id: "infraforge",
      name: "InfraForge",
      repositoryUrl: "https://github.com/the-masoud/InfraForge",
      programmingLanguage: "Go",
    },
  },
} as const;
