export type EvidenceId =
  | "career-tenure"
  | "team-leadership"
  | "managed-endpoints"
  | "ai-agents-mcp"
  | "infraforge"
  | "microsoft-credentials";

export type EvidenceClassification =
  | "professional-record"
  | "project-evidence"
  | "public-project-source"
  | "official-transcript";

export type EvidenceSourceType = "internal" | "external" | "download";

export interface EvidenceSource {
  label: string;
  target: string;
  type: EvidenceSourceType;
  ariaLabel?: string;
}

export interface EvidenceRecord {
  id: EvidenceId;
  ordinal: string; // e.g. "01 / 06"
  classificationKey: EvidenceClassification;
  classificationDisplay: string;
  title: string;
  claim: string;
  evidenceBasis: string;
  disclosure: string;
  sources: EvidenceSource[];
}

export interface EvidenceLayerUiLabels {
  mainTitle: string; // EN: "EVIDENCE LAYER" | FA: "لایه شواهد"
  secondaryLabel: string; // EN: "SOURCE TRACE" | FA: "ردیابی منبع"
  countLabel: string; // EN: "06 RECORDS" | FA: "06 مورد"
  recordSectionLabels: {
    claim: string; // EN: "CLAIM" | FA: "ادعا"
    evidenceBasis: string; // EN: "EVIDENCE BASIS" | FA: "مبنای شواهد"
    disclosure: string; // EN: "DISCLOSURE" | FA: "توضیح"
    sources: string; // EN: "SOURCES" | FA: "منابع"
  };
  contextualTriggerLabel: string; // EN: "EVIDENCE" | FA: "مشاهده شواهد"
  closeAccessibleLabel: string; // EN: "Close evidence layer" | FA: "بستن لایه شواهد"
  activeMarker?: string; // EN: "SELECTED" | FA: "انتخاب‌شده"
}

export interface EvidenceLayerData {
  ui: EvidenceLayerUiLabels;
  records: EvidenceRecord[];
}
