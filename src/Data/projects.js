import { Package, ChartNoAxesCombined, Palette } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "PharmaStock",
    description:
      "Sistema de gerenciamento de estoque de farmácia, inspirado em experiências profissionais anteriores.",
    technologies: ["Python", "Django", "SQL"],
    status: "planned",
    icon: Package,
    color: "#DCD6EB",
    image: null,
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "SocialMetrics",
    description:
      "Dashboard para análise e visualização de métricas de mídias sociais.",
    technologies: ["React", "JavaScript", "APIs"],
    status: "planned",
    icon: ChartNoAxesCombined,
    color: "#DFE7DE",
    image: null,
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "Creative Studio",
    description:
      "Landing page responsiva para um estúdio criativo, com foco em design e experiência do usuário.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "planned",
    icon: Palette,
    color: "#EDE0D6",
    image: null,
    github: null,
    demo: null,
  },
];
