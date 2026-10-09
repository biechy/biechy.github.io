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

const publications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./publications" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    link: z.url().optional(),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
  }),
});

export const collections = { knowledge, publications };
