export const navigationLinks = [
  {
    id: "sobre",
    label: "Sobre",
    href: "#sobre",
  },
  {
    id: "projetos",
    label: "Projetos",
    href: "#projetos",
  },
  {
    id: "contato",
    label: "Contato",
    href: "#contato",
  },
];

export const navigationSectionIds = [
  "inicio",
  ...navigationLinks.map((link) => link.id),
];
