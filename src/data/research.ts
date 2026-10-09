import type { CollectionEntry } from "astro:content";

/** The research agenda, shown on the home page. Each paper points to one theme. */
export const themes = {
  privacy: {
    label: "Privacy in LLM agents",
    focus: true,
    question: "What do agents do with our personal data?",
    blurb: "Where agents go looking for information, what they do with it, and which kind of privacy guidance actually changes that. Most of my upcoming work is here.",
  },
  uncertainty: {
    label: "Black-box uncertainty",
    focus: false,
    question: "How sure is the model, really?",
    blurb: "Getting calibrated uncertainty out of reasoning models when you have no access to logits, only to what they answer.",
  },
  evals: {
    label: "Behavioural evaluations",
    focus: false,
    question: "What can behaviour alone tell us?",
    blurb: "A biased agent or a biased user can look perfectly normal from the outside. I work out when watching isn't enough, and which tests give them away.",
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
