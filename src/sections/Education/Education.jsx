import { GraduationCap } from "lucide-react";

import Card from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Timeline from "../../components/Timeline/Timeline";

import { education } from "../../data/education";

import "./Education.css";

function Education() {
  return (
    <Card className="education" id="formacao">
      <div className="education__header">
        <SectionHeading
          label="04 / Formação"
          title="Aprendizado."
          description="Minha jornada acadêmica e formação técnica."
        />

        <GraduationCap
          className="education__icon"
          size={24}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <Timeline items={education} />
    </Card>
  );
}

export default Education;
