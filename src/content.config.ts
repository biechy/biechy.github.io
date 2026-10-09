import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Notes live in /knowledge. Files starting with "_" are drafts and are ignored.
const knowledge = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./knowledge" }),
  schema: z.object({
    title: z.string(),
    sidebar_position: z.number().default(99),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// One file per paper, frontmatter only. `link` points to the official page.
const publications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./publications" }),
  schema: z.object({
    title: z.string(),
    /** Optional nickname shown as a badge, e.g. "J4U". */
    short: z.string().optional(),
    /** Only the year is displayed; the full date orders papers within a year. */
    date: z.coerce.date(),
    authors: z.array(z.string()),
    venue: z.string(),
    status: z.enum(["published", "under-review", "workshop", "preprint"]),
    link: z.url().optional(),
    code: z.url().optional(),
    theme: z.enum(["calibration", "alignment", "privacy", "other"]),
    featured: z.boolean().default(false),
    tldr: z.string(),
  }),
});

export const collections = { knowledge, publications };
