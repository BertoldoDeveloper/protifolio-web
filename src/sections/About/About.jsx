import { ArrowUpRight, UserRound } from "lucide-react";

import Card from "../../components/Card/Card";
import TechTag from "../../components/TechTag/TechTag";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import { about } from "../../data/about";

import "./About.css";

function About() {
  return (
    <Card className="about" id="sobre">
      <div className="about__header">
        <SectionHeading label={about.label} title={about.title} />

        <UserRound
          className="about__icon"
          size={24}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div className="about__description">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about__strengths">
        {about.strengths.map((strength) => (
          <TechTag key={strength} name={strength} />
        ))}
      </div>

      <a href="#experiencia" className="about__link">
        Minha trajetória
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </Card>
  );
}

export default About;
