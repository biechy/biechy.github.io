import type { CollectionEntry } from "astro:content";

/** The research agenda, shown on the home page. Each paper points to one theme. */
export const themes = {
  calibration: {
    label: "Honesty & calibration",
    question: "Can we trust what a model says about itself?",
    blurb: "Uncertainty quantification for black-box reasoning models, and detecting biased self-evaluation from behaviour.",
  },
  alignment: {
    label: "Human–AI alignment",
    question: "What do humans and models bias in each other?",
    blurb: "Identifying latent user bias in human–AI interaction, and how much trust people place in LLMs.",
  },
  privacy: {
    label: "Privacy as a safety property",
    question: "What do models infer and leak about us?",
    blurb: "How LLMs and agents infer, select and expose sensitive information — and whether guidance changes it.",
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

export const hasAbstract = (paper: CollectionEntry<"publications">) => Boolean(paper.body?.trim());
