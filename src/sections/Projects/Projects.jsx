import { Layers } from "lucide-react";

import Card from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projects } from "../../Data/projects";

import "./Projects.css";

function Projects() {
  return (
    <Card className="projects" id="projetos">
      <div className="projects__header">
        <SectionHeading
          label="03 / Projetos"
          title="Ideias em construção."
          description="Projetos que conectam aprendizado técnico e necessidades reais."
        />

        <Layers
          className="projects__icon"
          size={24}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Card>
  );
}

export default Projects;
