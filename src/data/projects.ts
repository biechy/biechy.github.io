import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "AgentsAlignmentBox",
    description: {
      en: "A sandbox for Claude Code and Codex that logs every model call, tool call and web request at the network level, flags agents that drift from their own task (rules, TabPFN and a Claude reviewer), and stops any agent or sub-agent with a network kill switch.",
    },
    tag: ["agents", "monitoring", "open source"],
    date: { start: 2026 },
    technos: ["Python", "Docker", "mitmproxy", "PostgreSQL", "TabPFN", "Claude Code", "Codex"],
    link: "https://github.com/biechy/AgentsAlignmentBox",
    repo_link: "https://github.com/biechy/AgentsAlignmentBox",
    img: "/img/projects/aab.webp",
  },
];
