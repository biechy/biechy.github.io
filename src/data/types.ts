export interface News {
  description: string;
  category: "scholar" | "publications" | "projects" | "career" | "personal";
  emoji: string;
  /** "MM/YYYY" */
  date: string;
}

interface Organisation {
  name: string;
  link: string;
  /** Path under /public. A "-dark" variant next to it is used in dark mode when it exists. */
  logo: string;
}

export interface Experience {
  title: string;
  company: Organisation;
  date: { start: string; end?: string | null; information?: string | null };
  location: string;
  description: string;
  tags: string[];
}

export interface Education {
  degree: { title: string; link: string };
  school: Organisation[];
  date: { start: string; end: string; information?: string };
  location: string;
  description?: string;
  tags?: string[];
  honors: "Very High Honors" | "High Honors" | "Honors" | "none";
}

export interface Project {
  name: string;
  description: { en: string; fr?: string };
  tag: string[];
  date: { start: number; end?: number };
  technos: string[];
  link: string;
  repo_link: string;
  img: string;
}
