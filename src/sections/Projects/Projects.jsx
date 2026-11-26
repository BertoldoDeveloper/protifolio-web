import { useState, useRef } from "react";

import { Layers, RotateCcw } from "lucide-react";

import Card from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectFilters from "../../components/ProjectFilters/ProjectFilters";
import EmptyState from "../../components/EmptyState/EmptyState";

import { projects } from "../../data/projects";

import "./Projects.css";

function Projects() {
  // Estado do filtro selecionado
  const [activeFilter, setActiveFilter] = useState("all");

  // Referência para restaurar o foco
  const allButtonRef = useRef(null);

  // Contagem de projetos por status
  const counts = projects.reduce(
    (accumulator, project) => {
      const status = project.status;

      accumulator[status] = (accumulator[status] || 0) + 1;

      return accumulator;
    },
    {
      all: projects.length,
      planned: 0,
      "in-progress": 0,
      completed: 0,
    },
  );

  // Dados derivados do filtro selecionado
  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.status === activeFilter,
  );

  // Restaura o filtro e o foco do teclado
  function resetFilters() {
    setActiveFilter("all");

    allButtonRef.current?.focus();
  }

  const resultLabel =
    filteredProjects.length === 1
      ? "projeto encontrado"
      : "projetos encontrados";

  return (
    <Card
      className="projects"
      id="projetos"
      aria-label="Projetos profissionais"
    >
      <div className="projects__header">
        <SectionHeading
          label="03 / Projetos"
          title="Ideias em construção."
          description="Explore meus projetos e acompanhe minha evolução."
        />

        <Layers
          className="projects__icon"
          size={24}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        counts={counts}
        allButtonRef={allButtonRef}
      />

      <p
        className="projects__results"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {filteredProjects.length} de {projects.length} {resultLabel}
      </p>

      {filteredProjects.length > 0 ? (
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Nenhum projeto encontrado"
          description="Ainda não existem projetos com o status selecionado."
          actionLabel="Visualizar todos os projetos"
          actionIcon={RotateCcw}
          onAction={resetFilters}
        />
      )}
    </Card>
  );
}

export default Projects;
