import "./TechTag.css";

function TechTag({ name, icon: Icon }) {
  return (
    <span className="tech-tag">
      {Icon && <Icon size={16} aria-hidden="true" />}

      {name}
    </span>
  );
}

export default TechTag;
