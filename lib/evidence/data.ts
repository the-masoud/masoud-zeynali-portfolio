import { EvidenceId, EvidenceClassification, EvidenceSourceType } from "./types";

export interface StaticEvidenceMetadata {
  id: EvidenceId;
  ordinal: string;
  classificationKey: EvidenceClassification;
  sources: {
    target: string;
    type: EvidenceSourceType;
  }[];
}

export const EVIDENCE_RECORD_IDS: readonly EvidenceId[] = [
  "career-tenure",
  "team-leadership",
  "managed-endpoints",
  "ai-agents-mcp",
  "infraforge",
  "microsoft-credentials",
] as const;

export const STATIC_EVIDENCE_REGISTRY: Record<EvidenceId, StaticEvidenceMetadata> = {
  "career-tenure": {
    id: "career-tenure",
    ordinal: "01 / 06",
    classificationKey: "professional-record",
    sources: [
      {
        target: "#experience",
        type: "internal",
      },
      {
        target: "/resume/Masoud_Zeynali_Professional_CV_EN.pdf",
        type: "download",
      },
    ],
  },
  "team-leadership": {
    id: "team-leadership",
    ordinal: "02 / 06",
    classificationKey: "professional-record",
    sources: [
      {
        target: "#experience",
        type: "internal",
      },
      {
        target: "/resume/Masoud_Zeynali_Professional_CV_EN.pdf",
        type: "download",
      },
    ],
  },
  "managed-endpoints": {
    id: "managed-endpoints",
    ordinal: "03 / 06",
    classificationKey: "professional-record",
    sources: [
      {
        target: "#experience",
        type: "internal",
      },
      {
        target: "/resume/Masoud_Zeynali_Professional_CV_EN.pdf",
        type: "download",
      },
    ],
  },
  "ai-agents-mcp": {
    id: "ai-agents-mcp",
    ordinal: "04 / 06",
    classificationKey: "project-evidence",
    sources: [
      {
        target: "#work",
        type: "internal",
      },
      {
        target: "https://github.com/the-masoud/InfraForge",
        type: "external",
      },
    ],
  },
  infraforge: {
    id: "infraforge",
    ordinal: "05 / 06",
    classificationKey: "public-project-source",
    sources: [
      {
        target: "#work",
        type: "internal",
      },
      {
        target: "https://github.com/the-masoud/InfraForge",
        type: "external",
      },
    ],
  },
  "microsoft-credentials": {
    id: "microsoft-credentials",
    ordinal: "06 / 06",
    classificationKey: "official-transcript",
    sources: [
      {
        target:
          "https://learn.microsoft.com/en-us/users/masoudzeynali-0702/transcript/d5exjsjlkjywp48?source=docs",
        type: "external",
      },
    ],
  },
};

export function isValidEvidenceId(id: string): id is EvidenceId {
  return (EVIDENCE_RECORD_IDS as readonly string[]).includes(id);
}
