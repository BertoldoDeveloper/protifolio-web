import { projectFilters } from "../../data/projectFilters";

import "./ProjectFilters.css";

function ProjectFilters({
  activeFilter,
  onFilterChange,
  counts,
  allButtonRef,
}) {
  return (
    <div
      className="project-filters"
      role="group"
      aria-label="Filtrar projetos por status"
    >
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            ref={filter.id === "all" ? allButtonRef : undefined}
            type="button"
            className={`project-filters__button ${
              isActive ? "project-filters__button--active" : ""
            }`.trim()}
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter.id)}
          >
            <span>{filter.label}</span>

            <span className="project-filters__count">
              {counts[filter.id] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilters;
