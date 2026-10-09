// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import rehypeKatex from "rehype-katex";
import remarkCallouts from "./src/lib/remark-callouts.mjs";

export default defineConfig({
  site: "https://biechy.github.io",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkCallouts],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark-dimmed" },
    },
  },
});
