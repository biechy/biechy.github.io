import type { Education } from "./types";

export const educations: Education[] = [
  {
    degree: {
      title: "PhD in Artificial Intelligence",
      link: "https://edips.lisn.upsaclay.fr/",
    },
    school: [
      {
        name: "University of Paris-Saclay",
        link: "https://www.universite-paris-saclay.fr/",
        logo: "/img/logo/upsaclay.png",
      },
    ],
    date: {
      start: "2024",
      end: "2027",
    },
    location: "Palaiseau, France",
    description:
      "Advisors: Nicolas Anciaux, Cédric Eichler, Adrien Boiret. Thesis expected September 2027.",
    tags: ["AI Safety", "LLMs", "Privacy"],
    honors: "none",
  },
  {
    degree: {
      title: "MSc in Mathematics (spec. in Artificial Intelligence)",
      link: "https://www.imo.universite-paris-saclay.fr/fr/etudiants/masters/mathematiques-et-applications/m2/m2-mathematique-et-intelligence-artificielle/",
    },
    school: [
      {
        name: "University of Paris-Saclay",
        link: "https://www.universite-paris-saclay.fr/",
        logo: "/img/logo/upsaclay.png",
      },
      {
        name: "CentraleSupélec",
        link: "https://www.centralesupelec.fr/",
        logo: "/img/logo/centralesupelec.png",
      },
    ],
    date: {
      start: "2022",
      end: "2024",
    },
    location: "Orsay, France",
    description:
      "Joint program with CentraleSupélec and École Polytechnique. GPA 4.00/4.00.",
    tags: ["Machine Learning", "Statistics", "Optimization", "Probability"],
    honors: "High Honors",
  },
  {
    degree: {
      title: "Double BSc in Mathematics and Physics",
      link: "https://www.universite-paris-saclay.fr/formation/licence-double-diplome/mathematiques-physique-et-sciences-pour-lingenieur",
    },
    school: [
      {
        name: "University of Paris-Saclay",
        link: "https://www.universite-paris-saclay.fr/",
        logo: "/img/logo/upsaclay.png",
      },
    ],
    date: {
      start: "2019",
      end: "2022",
    },
    location: "Gif-sur-Yvette, France",
    description:
      "Physics track joint with École Normale Supérieure Paris-Saclay. Mathematics GPA 4.00/4.00, Physics GPA 3.33/4.00.",
    tags: ["Mathematics", "Theoretical Physics"],
    honors: "Honors",
  },
];
