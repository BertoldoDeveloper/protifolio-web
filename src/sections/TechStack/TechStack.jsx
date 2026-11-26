import { Code2, BookOpen } from "lucide-react";

import Card from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TechnologyCard from "../../components/TechnologyCard/TechnologyCard";

import { technologies } from "../../data/technologies";

import "./TechStack.css";

function TechStack() {
  return (
    <Card className="tech-stack" id="tecnologias">
      <div className="tech-stack__header">
        <SectionHeading
          label="02 / Tech Stack"
          title="Tecnologias."
          description="Ferramentas que estudo e utilizo nos meus projetos."
        />

        <Code2
          className="tech-stack__icon"
          size={24}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <ul className="tech-stack__grid">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            name={technology.name}
            icon={technology.icon}
            color={technology.color}
          />
        ))}
      </ul>

      <div className="tech-stack__note">
        <BookOpen size={16} aria-hidden="true" />

        <span>Em constante aprendizado.</span>
      </div>
    </Card>
  );
}

export default TechStack;
