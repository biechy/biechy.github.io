import type { CollectionEntry } from "astro:content";

/** Research topics shown on the home page. Each paper points to one theme. */
export const themes = {
  privacy: {
    label: "Privacy",
    focus: true,
    question: "How LLMs deal with our privacy",
    blurb: "How agents find, use and protect personal information.",
  },
  alignment: {
    label: "Alignment",
    focus: false,
    question: "When models drift from what we want",
    blurb: "Catching models that stray from what we intended.",
  },
  capabilities: {
    label: "Capabilities",
    focus: false,
    question: "How far a model can go",
    blurb: "Measuring what models can really do.",
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
