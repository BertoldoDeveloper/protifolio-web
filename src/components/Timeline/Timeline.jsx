import "./Timeline.css";

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li
          key={item.id}
          className={`timeline__item ${
            item.current ? "timeline__item--current" : ""
          }`.trim()}
        >
          <span className="timeline__period">{item.period}</span>

          <h3 className="timeline__title">{item.title}</h3>

          <p className="timeline__subtitle">{item.subtitle}</p>

          {item.description && (
            <p className="timeline__description">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
