import "./TechnologyCard.css";

function TechnologyCard({ name, icon: Icon, color }) {
  return (
    <li className="technology-card">
      <div
        className="technology-card__icon"
        style={{
          "--technology-color": color,
        }}
      >
        <Icon size={32} aria-hidden="true" />
      </div>

      <span className="technology-card__name">{name}</span>
    </li>
  );
}

export default TechnologyCard;
