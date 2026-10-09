import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    title: "AI Researcher (PhD)",
    company: {
      name: "Institut National de Recherche en Informatique et en Automatique",
      link: "https://www.inria.fr/",
      logo: "/img/logo/inria.png",
    },
    date: {
      start: "2024",
      end: null,
      information: null,
    },
    location: "Palaiseau, France",
    description: "Research on the sanitization of textual data using inference attributes from large language models.",
    tags: ["LLMs", "NLP", "Privacy", "Red Teaming"],
  },
  {
    title: "AI Researcher (internship)",
    company: {
      name: "National Center of High-performance Computing",
      link: "https://www.nchc.org.tw/",
      logo: "/img/logo/nchc.png",
    },
    date: {
      start: "2024",
      end: "2024",
      information: "5 months",
    },
    location: "Hsinchu, Taiwan",
    description:
      "Designed and implemented xGRU, inspired by xLSTM, doubling traffic forecasting accuracy and halving model parameters.",
    tags: [
      "Time Series Forecasting",
      "Deep Learning",
    ],
  },
  {
    title: "Data Engineer (internship)",
    company: {
      name: "Exotrail",
      link: "https://www.exotrail.com/",
      logo: "/img/logo/exotrail.png",
    },
    date: {
      start: "2023",
      end: "2023",
      information: "6 months",
    },
    location: "Massy, France",
    description:
      "Designed and built entirely from scratch a full data pipeline for physics experiments, from raw data to automated analysis in minutes.",
    tags: ["Data", "Pipeline", "MLOps"],
  },
];
