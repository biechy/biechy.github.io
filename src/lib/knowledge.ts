import { getCollection, type CollectionEntry } from "astro:content";

// The /knowledge folder is a tree: folders may carry a `_category_.json`
// ({ label, position, link: { description } }) and an optional `index.md`.

export type Note = CollectionEntry<"knowledge">;

export interface NoteNode {
  kind: "note";
  slug: string;
  title: string;
  position: number;
  entry: Note;
}

export interface FolderNode {
  kind: "folder";
  slug: string;
  label: string;
  position: number;
  description?: string;
  index?: Note;
  children: TreeNode[];
}

export type TreeNode = NoteNode | FolderNode;

interface Category {
  label?: string;
  position?: number;
  link?: { description?: string };
}

const categories = import.meta.glob<Category>("/knowledge/**/_category_.json", {
  eager: true,
  import: "default",
});

const humanize = (s: string) => s.replace(/[-_]/g, " ").replace(/^\w/, (c) => c.toUpperCase());

function noteSlug(entry: Note): string {
  return (entry.filePath ?? entry.id).replace(/^\.?\/?knowledge\//, "").replace(/\.md$/, "").replace(/\/?index$/, "");
}

function sortTree(node: FolderNode) {
  node.children.sort((a, b) => a.position - b.position || label(a).localeCompare(label(b)));
  node.children.forEach((child) => child.kind === "folder" && sortTree(child));
}

const label = (node: TreeNode) => (node.kind === "note" ? node.title : node.label);

function prune(node: FolderNode): boolean {
  node.children = node.children.filter((child) => child.kind === "note" || prune(child));
  return node.children.length > 0 || node.index !== undefined;
}

let cache: Promise<Knowledge> | undefined;

export interface Knowledge {
  root: FolderNode;
  notes: NoteNode[];
  folders: FolderNode[];
}

export function getKnowledge(): Promise<Knowledge> {
  cache ??= build();
  return cache;
}

async function build(): Promise<Knowledge> {
  const entries = (await getCollection("knowledge")).filter((e) => !e.data.draft);
  const root: FolderNode = { kind: "folder", slug: "", label: "Knowledge", position: 0, children: [] };
  const folders = new Map<string, FolderNode>([["", root]]);

  const folder = (slug: string): FolderNode => {
    const existing = folders.get(slug);
    if (existing) return existing;
    const parentSlug = slug.includes("/") ? slug.slice(0, slug.lastIndexOf("/")) : "";
    const meta = categories[`/knowledge/${slug}/_category_.json`] ?? {};
    const node: FolderNode = {
      kind: "folder",
      slug,
      label: meta.label ?? humanize(slug.split("/").pop()!),
      position: meta.position ?? 99,
      description: meta.link?.description,
      children: [],
    };
    folders.set(slug, node);
    folder(parentSlug).children.push(node);
    return node;
  };

  for (const entry of entries) {
    const slug = noteSlug(entry);
    const isIndex = /(^|\/)index\.md$/.test(entry.filePath ?? "");
    if (isIndex) {
      const node = folder(slug);
      node.index = entry;
      node.label = entry.data.title;
      node.position = entry.data.sidebar_position;
      continue;
    }
    const parentSlug = slug.includes("/") ? slug.slice(0, slug.lastIndexOf("/")) : "";
    folder(parentSlug).children.push({
      kind: "note",
      slug,
      title: entry.data.title,
      position: entry.data.sidebar_position,
      entry,
    });
  }

  prune(root);
  sortTree(root);

  const notes: NoteNode[] = [];
  const ordered: FolderNode[] = [];
  const walk = (node: FolderNode) => {
    for (const child of node.children) {
      if (child.kind === "note") notes.push(child);
      else {
        ordered.push(child);
        walk(child);
      }
    }
  };
  walk(root);

  return { root, notes, folders: ordered };
}

/** Folders from the root down to (and including) the folder holding `slug`. */
export function breadcrumbs(root: FolderNode, slug: string): FolderNode[] {
  const parts = slug.split("/");
  const trail: FolderNode[] = [];
  let node: FolderNode | undefined = root;
  for (let i = 1; i < parts.length + 1 && node; i++) {
    const target = parts.slice(0, i).join("/");
    node = node.children.find((c): c is FolderNode => c.kind === "folder" && c.slug === target);
    if (node) trail.push(node);
  }
  return trail;
}

export function countNotes(node: FolderNode): number {
  return node.children.reduce((n, c) => n + (c.kind === "note" ? 1 : countNotes(c)), 0);
}
