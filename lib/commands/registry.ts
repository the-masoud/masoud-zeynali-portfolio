import { SHARED_FACTS } from "../i18n/constants";
import { CommandPaletteI18n } from "../i18n/types";

export type CommandId =
  | "about"
  | "experience"
  | "expertise"
  | "ai-engineering"
  | "infrastructure"
  | "security"
  | "infraforge"
  | "reasoning-lab"
  | "resume"
  | "contact"
  | "github"
  | "microsoft-transcript"
  | "email"
  | "language-en"
  | "language-fa";

export type CommandAction =
  | "navigate"
  | "external"
  | "download"
  | "email"
  | "locale";

export type CommandCategory = "SECTION" | "ACTION" | "EXTERNAL" | "LANG";

export interface CommandDefinition {
  id: CommandId;
  action: CommandAction;
  target: string;
  category: CommandCategory;
  categoryTag: string;
  aliases: readonly string[];
}

export const COMMAND_DEFINITIONS: readonly CommandDefinition[] = [
  {
    id: "about",
    action: "navigate",
    target: "#about",
    category: "SECTION",
    categoryTag: "SECTION::ABOUT",
    aliases: [],
  },
  {
    id: "experience",
    action: "navigate",
    target: "#experience",
    category: "SECTION",
    categoryTag: "SECTION::EXPERIENCE",
    aliases: [],
  },
  {
    id: "expertise",
    action: "navigate",
    target: "#expertise",
    category: "SECTION",
    categoryTag: "SECTION::EXPERTISE",
    aliases: [],
  },
  {
    id: "ai-engineering",
    action: "navigate",
    target: "#expertise",
    category: "SECTION",
    categoryTag: "SECTION::AI",
    aliases: ["/ai", "/mcp"],
  },
  {
    id: "infrastructure",
    action: "navigate",
    target: "#expertise",
    category: "SECTION",
    categoryTag: "SECTION::INFRA",
    aliases: ["/infra"],
  },
  {
    id: "security",
    action: "navigate",
    target: "#expertise",
    category: "SECTION",
    categoryTag: "SECTION::SECURITY",
    aliases: ["/security"],
  },
  {
    id: "infraforge",
    action: "navigate",
    target: "#work",
    category: "SECTION",
    categoryTag: "SECTION::WORK",
    aliases: ["/work"],
  },
  {
    id: "reasoning-lab",
    action: "navigate",
    target: "#lab",
    category: "SECTION",
    categoryTag: "SECTION::LAB",
    aliases: ["/lab"],
  },
  {
    id: "resume",
    action: "download",
    target: SHARED_FACTS.person.resumeUrl,
    category: "ACTION",
    categoryTag: "ACTION::RESUME",
    aliases: ["/cv"],
  },
  {
    id: "contact",
    action: "navigate",
    target: "#contact",
    category: "SECTION",
    categoryTag: "SECTION::CONTACT",
    aliases: ["/contact"],
  },
  {
    id: "github",
    action: "external",
    target: SHARED_FACTS.person.githubUrl,
    category: "EXTERNAL",
    categoryTag: "EXTERNAL::GITHUB",
    aliases: ["/github"],
  },
  {
    id: "microsoft-transcript",
    action: "external",
    target: SHARED_FACTS.person.microsoftTranscriptUrl,
    category: "EXTERNAL",
    categoryTag: "EXTERNAL::TRANSCRIPT",
    aliases: [],
  },
  {
    id: "email",
    action: "email",
    target: `mailto:${SHARED_FACTS.person.email}`,
    category: "ACTION",
    categoryTag: "ACTION::EMAIL",
    aliases: [],
  },
  {
    id: "language-en",
    action: "locale",
    target: "/",
    category: "LANG",
    categoryTag: "LANG::EN",
    aliases: ["/en"],
  },
  {
    id: "language-fa",
    action: "locale",
    target: "/fa",
    category: "LANG",
    categoryTag: "LANG::FA",
    aliases: ["/fa"],
  },
] as const;

export const DEFAULT_QUICK_ACCESS_IDS: readonly CommandId[] = [
  "ai-engineering",
  "infraforge",
  "experience",
  "about",
];

export const DEFAULT_ACTION_IDS_EN: readonly CommandId[] = [
  "resume",
  "contact",
  "language-fa",
];

export const DEFAULT_ACTION_IDS_FA: readonly CommandId[] = [
  "resume",
  "contact",
  "language-en",
];

/**
 * Normalizes a string for search matching according to Phase M1 specs:
 * 1. Trim leading/trailing whitespace
 * 2. Lowercase Latin characters
 * 3. Convert Arabic Yeh (ي) to Persian Yeh (ی)
 * 4. Convert Arabic Kaf (ك) to Persian Kaf (ک)
 * 5. Convert ZWNJ (U+200C) to normal space
 * 6. Remove standard Arabic/Persian diacritics
 * 7. Collapse repeated whitespace
 */
export function normalizeSearchString(str: string): string {
  if (!str) return "";
  return str
    .trim()
    .toLowerCase()
    .replace(/\u200c/g, " ")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export interface MatchedCommand {
  definition: CommandDefinition;
  label: string;
  description?: string;
  rank: number;
  originalIndex: number;
}

/**
 * Filters and ranks commands based on the normalized query:
 * Priority ranks:
 * 1: Exact slash alias (e.g. /ai, /mcp)
 * 2: Exact normalized label
 * 3: Normalized label starts with query
 * 4: Exact keyword match
 * 5: All query tokens exist across label/keywords
 * 6: Label substring match
 * 7: Keyword substring match
 * Stable tie-break: Original registry index.
 */
export function filterAndRankCommands(
  query: string,
  paletteData: CommandPaletteI18n
): MatchedCommand[] {
  const normQuery = normalizeSearchString(query);
  if (!normQuery) return [];

  const queryTokens = normQuery.split(" ").filter(Boolean);
  const matched: MatchedCommand[] = [];

  COMMAND_DEFINITIONS.forEach((def, index) => {
    const presentation = paletteData.commands[def.id];
    if (!presentation) return;

    const normLabel = normalizeSearchString(presentation.label);
    const normKeywords = presentation.keywords.map(normalizeSearchString);
    const normAliases = def.aliases.map((a) => a.toLowerCase().trim());

    let rank = Infinity;

    // 1. Exact slash alias
    if (normAliases.some((alias) => alias === normQuery)) {
      rank = 1;
    }
    // 2. Exact normalized label
    else if (normLabel === normQuery) {
      rank = 2;
    }
    // 3. Normalized label starts with query
    else if (normLabel.startsWith(normQuery)) {
      rank = 3;
    }
    // 4. Exact keyword match
    else if (normKeywords.some((kw) => kw === normQuery)) {
      rank = 4;
    }
    // 5. All query tokens exist across label/keywords
    else if (
      queryTokens.length > 1 &&
      queryTokens.every(
        (token) =>
          normLabel.includes(token) ||
          normKeywords.some((kw) => kw.includes(token))
      )
    ) {
      rank = 5;
    }
    // 6. Label substring match
    else if (normLabel.includes(normQuery)) {
      rank = 6;
    }
    // 7. Keyword substring match
    else if (normKeywords.some((kw) => kw.includes(normQuery))) {
      rank = 7;
    }

    if (rank !== Infinity) {
      matched.push({
        definition: def,
        label: presentation.label,
        description: presentation.description,
        rank,
        originalIndex: index,
      });
    }
  });

  return matched.sort((a, b) => {
    if (a.rank !== b.rank) {
      return a.rank - b.rank;
    }
    return a.originalIndex - b.originalIndex;
  });
}
