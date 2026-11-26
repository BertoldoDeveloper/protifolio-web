import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import { Mail } from "lucide-react";

import { profile } from "./profile";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: FaGithub,
    url: profile.social.github,
    external: true,
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedin,
    url: profile.social.linkedin,
    external: true,
  },
  {
    id: 3,
    name: "E-mail",
    icon: Mail,
    url: profile.email ? `mailto:${profile.email}` : null,
    external: false,
  },
  {
    id: 4,
    name: "YouTube",
    icon: FaYoutube,
    url: profile.social.youtube,
    external: true,
  },
];
