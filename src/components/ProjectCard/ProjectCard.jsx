import { Clock, Code2, ArrowUpRight } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Card from "../Card/Card";
import Button from "../Button/Button";
import TechTag from "../TechTag/TechTag";

import "./ProjectCard.css";

const statusLabels = {
  planned: "Planejado",
  "in-progress": "Em desenvolvimento",
  completed: "Concluído",
};

function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies,
    status,
    icon: Icon = Code2,
    color,
    image,
    github,
    demo,
  } = project;

  return (
    <Card as="article" className="project-card">
      <div
        className="project-card__preview"
        style={{
          "--project-color": color,
        }}
      >
        {image ? (
          <img
            src={image}
            alt={`Prévia do projeto ${title}`}
            loading="lazy"
            width="640"
            height="360"
          />
        ) : (
          <div className="project-card__placeholder">
            <Icon size={48} strokeWidth={1.5} aria-hidden="true" />

            <span>{title}</span>
          </div>
        )}
      </div>

      <span className={`project-card__status project-card__status--${status}`}>
        {statusLabels[status] || "Não informado"}
      </span>

      <h3 className="project-card__title">{title}</h3>

      <p className="project-card__description">{description}</p>

      <div className="project-card__technologies">
        {technologies.map((technology) => (
          <TechTag key={technology} name={technology} />
        ))}
      </div>

      <div className="project-card__actions">
        {github && (
          <Button
            variant="secondary"
            href={github}
            icon={FaGithub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Código-fonte de ${title}`}
          >
            Código
          </Button>
        )}

        {demo && (
          <Button
            href={demo}
            icon={ArrowUpRight}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Demonstração de ${title}`}
          >
            Demo
          </Button>
        )}

        {!github && !demo && (
          <span className="project-card__pending">
            <Clock size={16} aria-hidden="true" />

            {status === "planned"
              ? "Projeto ainda não iniciado."
              : "Links ainda indisponíveis."}
          </span>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;
