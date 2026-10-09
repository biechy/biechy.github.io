import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "../../data/site";

export async function GET(context: APIContext) {
  const publications = (await getCollection("publications")).sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: `${site.name}: papers`,
    description: "Research papers by Lucas Biéchy.",
    site: context.site!,
    items: publications.map((pub) => ({
      title: pub.data.title,
      description: pub.data.tldr,
      pubDate: pub.data.date,
      link: pub.data.link ?? "/publications/",
    })),
  });
}
