export interface CertificationRecord {
  id: string;
  name: string;
  qualification: string;
  issuer: string;
  year: string;
}

export interface EducationRecord {
  id: string;
  program: string;
  institution: string;
  status?: string;
}

export interface ProfessionalContactInfo {
  name: string;
  title: string;
  specialization: string;
  location: string;
  email: string;
  github: {
    display: string;
    url: string;
  };
}

export interface ResumeData {
  heading: string;
  supportingCopy: string;
  formatBadge: string;
  downloadUrl: string;
  fileName: string;
  actionLabel: string;
}

export interface MicrosoftTranscriptData {
  actionLabel: string;
  url: string;
}

export const professionalRecordMeta = {
  sectionMarker: "06 / CREDENTIALS & CONTACT",
  technicalLabel: "VERIFIED PROFESSIONAL RECORD",
  sectionHeading: "RESUME, CREDENTIALS & DIRECT CONTACT",
  supportingStatement:
    "A concise professional record combining verified credentials, education, and direct contact channels.",
};

export const resumeData: ResumeData = {
  heading: "PROFESSIONAL RESUME",
  supportingCopy:
    "Download the verified English professional CV used as a factual source for this portfolio.",
  formatBadge: "PDF / ENGLISH",
  downloadUrl: "/resume/Masoud_Zeynali_Professional_CV_EN.pdf",
  fileName: "Masoud_Zeynali_Professional_CV_EN.pdf",
  actionLabel: "DOWNLOAD RESUME",
};

export const microsoftTranscriptData: MicrosoftTranscriptData = {
  actionLabel: "VIEW VERIFIED TRANSCRIPT",
  url: "https://learn.microsoft.com/en-us/users/masoudzeynali-0702/transcript/d5exjsjlkjywp48?source=docs",
};

export const certificationsData: CertificationRecord[] = [
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
];

export const educationData: EducationRecord[] = [
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
];

export const contactInfo: ProfessionalContactInfo = {
  name: "Masoud Zeynali",
  title: "IT Manager | Network Infrastructure & Security Specialist",
  specialization: "Senior AI Engineer — Agents, MCP & Infrastructure",
  location: "Tehran, Iran",
  email: "zeynali@outlook.com",
  github: {
    display: "github.com/the-masoud",
    url: "https://github.com/the-masoud",
  },
};
