import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    title: "PhD researcher in AI safety & privacy",
    company: {
      name: "Inria, PETSCRAFT team",
      link: "https://team.inria.fr/petscraft/",
      logo: "/img/logo/inria.png",
    },
    date: { start: "2024", end: null },
    location: "Palaiseau, France",
    description:
      "Auditing LLMs and agents from the outside: calibrated uncertainty for black-box reasoning models (via jailbreaks), detecting biased self-grading agents and biased users from behaviour, and measuring how agents handle personal data. Four first-author papers, three under review (ICLR 2027, AISTATS 2027).",
    tags: ["LLMs", "Oversight", "Uncertainty", "Agents", "Privacy"],
  },
  {
    title: "AI research intern",
    company: {
      name: "NARLabs, National Center for High-performance Computing",
      link: "https://www.nchc.org.tw/",
      logo: "/img/logo/nchc.png",
    },
    date: { start: "2024", end: "2024", information: "5 months" },
    location: "Hsinchu, Taiwan",
    description:
      "Designed and implemented xGRU, inspired by xLSTM, doubling traffic forecasting accuracy and halving model parameters. Published in IEEE OJ-ITS.",
    tags: ["Deep Learning", "Time Series"],
  },
  {
    title: "Data engineer intern",
    company: {
      name: "Exotrail",
      link: "https://www.exotrail.com/",
      logo: "/img/logo/exotrail.png",
    },
    date: { start: "2023", end: "2023", information: "5 months" },
    location: "Massy, France",
    description:
      "Built from scratch a full data pipeline for physics experiments, from raw data to automated analysis in minutes.",
    tags: ["Data", "Pipelines", "MLOps"],
  },
  {
    title: "Research intern",
    company: {
      name: "CNRS, Laboratoire de Mathématiques d'Orsay",
      link: "https://www.imo.universite-paris-saclay.fr/fr/la-recherche/",
      logo: "",
    },
    date: { start: "2022", end: "2022", information: "2 months" },
    location: "Orsay, France",
    description: "Enhanced numerical Fast Marching methods and improved statistical density estimation techniques.",
    tags: ["Numerical methods", "Statistics"],
  },
];
