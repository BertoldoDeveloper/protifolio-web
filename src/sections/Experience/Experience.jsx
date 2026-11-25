import { Briefcase } from "lucide-react";

import Card from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Timeline from "../../components/Timeline/Timeline";

import { experience } from "../../data/experience";

import "./Experience.css";

function Experience() {
  return (
    <Card className="experience" id="experiencia">
      <div className="experience__header">
        <SectionHeading
          label="05 / Experiência"
          title="Trajetória."
          description="Experiências que contribuíram para minha evolução profissional."
        />

        <Briefcase
          className="experience__icon"
          size={24}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <Timeline items={experience} />
    </Card>
  );
}

export default Experience;
