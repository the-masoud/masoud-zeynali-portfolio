export interface ReasoningScenario {
  id: string;
  scenarioNumber: string;
  title: string;
  category: string;
  request: string;
  boundary: string;
  expectedBehavior: string;
}

export interface ReasoningLabMetadata {
  sectionMarker: string;
  technicalLabel: string;
  sectionHeading: string;
  supportingStatement: string;
  simulationDisclosureLabel: string;
  simulationDisclosureCopy: string;
}

export const reasoningLabMetadata: ReasoningLabMetadata = {
  sectionMarker: "05 / INTERACTIVE EXPERIENCE",
  technicalLabel: "BROWSER-ONLY SIMULATION",
  sectionHeading: "OPERATIONAL REASONING LAB",
  supportingStatement:
    "Explore how agentic requests translate into explicit operational boundaries, predictable system behavior, and safe AI-assisted infrastructure workflows.",
  simulationDisclosureLabel: "SIMULATED INTERACTIVE DEMO",
  simulationDisclosureCopy:
    "Browser-only demonstration. No live infrastructure connection, remote execution, application-level data request, or real server data is involved.",
};

export const reasoningScenarios: ReasoningScenario[] = [
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
];
