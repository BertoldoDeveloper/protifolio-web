import { ArrowUpRight } from "lucide-react";

import "./SocialLink.css";

function SocialLink({ name, icon: Icon, url, external = true }) {
  if (!url) {
    return null;
  }

  return (
    <a
      className="social-link"
      href={url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {Icon && <Icon size={20} aria-hidden="true" />}

      <span>{name}</span>

      {external && (
        <ArrowUpRight
          size={14}
          className="social-link__arrow"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

export default SocialLink;
