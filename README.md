# biechy.github.io

Personal website of Lucas Biéchy, built with [Astro](https://astro.build).

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
pnpm check      # type-check .astro / .ts files
pnpm run deploy # build and push dist/ to the gh-pages branch
```

## Where things live

| What | Where |
| --- | --- |
| News, experience, education, projects | `src/data/*.ts` |
| Name, links, topics, navigation | `src/data/site.ts` |
| Knowledge notes | `knowledge/**.md` (`_category_.json` gives a folder its label, order and description; files starting with `_` are ignored) |
| Publications | `publications/*.md` (frontmatter: `title`, `date`, `venue`, `link`, `tags`, `summary`; body = abstract) |
| Images | `public/img/` (a `-dark` variant of a logo or screenshot is used in dark mode) |
| Design tokens (colours, fonts) | `src/styles/global.css` |

### Writing notes

Notes are plain Markdown with KaTeX math (`$...$`, `$$...$$`) and callout blocks:

```md
:::definition[Random variable]
A **random variable** is a measurable function...
:::

:::proof[Proof]
Collapsed by default, with a "show" toggle.
:::

::::tabs
:::exercise[Example 1]
...
:::

:::exercise[Example 2]
...
:::
::::
```

Kinds: `definition`, `proposition`, `theorem`, `proof`, `exercise`, `tips`, `note`, `info`.
