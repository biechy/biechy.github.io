import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: {
      en: "My personal portfolio website, showcasing my projects, skills, professionnal experience, and even more!",
    },
    tag: ["web", "main"],
    date: {
      start: 2024,
      end: 2024,
    },
    technos: ["React", "TailwindCSS", "TypeScript"],
    link: "https://biechy.github.io/",
    repo_link: "https://github.com/Biechy/biechy.github.io",
    img: "/img/projects/portfolio.webp",
  },
];
