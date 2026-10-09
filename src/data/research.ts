import type { CollectionEntry } from "astro:content";

/** The research agenda, shown on the home page. Each paper points to one theme. */
export const themes = {
  calibration: {
    label: "Calibration & oversight",
    question: "Can we trust what a model says about itself?",
    blurb: "Getting honest uncertainty out of black-box reasoning models, and auditing agents that grade their own work.",
  },
  alignment: {
    label: "Human-AI alignment",
    question: "Does the user's behaviour show what they really want?",
    blurb: "Telling real preferences apart from cognitive biases, before alignment turns them into feedback loops.",
  },
  privacy: {
    label: "Privacy in agents",
    question: "What do agents do with our personal data?",
    blurb: "How agents pick where they get information from, and which kind of privacy guidance actually changes that.",
  },
} as const;

export type Theme = keyof typeof themes;

export const statusLabel: Record<CollectionEntry<"publications">["data"]["status"], string> = {
  published: "Published",
  "under-review": "Under review",
  workshop: "Workshop",
  preprint: "Preprint",
};

const statusRank = { "under-review": 0, workshop: 1, preprint: 2, published: 3 };

/** Safety papers first (newest, most advanced status), then the rest. */
export function sortPapers(papers: CollectionEntry<"publications">[]) {
  return [...papers].sort(
    (a, b) =>
      Number(a.data.theme === "other") - Number(b.data.theme === "other") ||
      b.data.date.getFullYear() - a.data.date.getFullYear() ||
      statusRank[a.data.status] - statusRank[b.data.status] ||
      +b.data.date - +a.data.date,
  );
}
