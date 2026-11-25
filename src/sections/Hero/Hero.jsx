import { ArrowUpRight, Download } from "lucide-react";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import { profile } from "../../Data/profile";

import "./Hero.css";

function Hero() {
  return (
    <Card className="hero" id="inicio" aria-labelledby="hero-title">
      {profile.available && (
        <div className="hero__status">
          <span className="hero__status-dot" aria-hidden="true" />
          Disponível para oportunidades
        </div>
      )}

      <div className="hero__intro">
        <p className="hero__greeting">Olá, eu sou</p>

        <h1 className="hero__name" id="hero-title">
          {profile.firstName}

          <span>{profile.lastName}.</span>
        </h1>
      </div>

      <p className="hero__role">{profile.role}</p>

      <p className="hero__description">{profile.description}</p>

      <div className="hero__actions">
        <Button href="#projetos" icon={ArrowUpRight}>
          Ver projetos
        </Button>

        {profile.resume ? (
          <Button
            variant="secondary"
            href={profile.resume}
            icon={Download}
            download="Curriculo-Ladislau-Bertoldo.pdf"
          >
            Baixar CV
          </Button>
        ) : (
          <Button variant="secondary" icon={Download} disabled>
            Baixar CV
          </Button>
        )}
      </div>
    </Card>
  );
}

export default Hero;
