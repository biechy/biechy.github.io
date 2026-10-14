import type { CollectionEntry } from "astro:content";

/** Research topics shown on the home page. Each paper points to one theme. */
export const themes = {
  privacy: {
    label: "Privacy",
    focus: true,
    question: "How LLMs deal with our privacy",
    blurb: "Where agents go looking for information, what they do with it, and which privacy guidance actually changes that, from benchmarks to theory.",
  },
  alignment: {
    label: "Alignment",
    focus: false,
    question: "When models drift from what we want",
    blurb: "A biased agent or a biased user can look perfectly normal from the outside. I work out when behaviour is enough to catch them, and which tests give them away.",
  },
  capabilities: {
    label: "Capabilities",
    focus: false,
    question: "How far a model can go",
    blurb: "Getting calibrated uncertainty out of reasoning models with only API access, by borrowing ideas from jailbreaks.",
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
