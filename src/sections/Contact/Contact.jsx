import { MessageCircle } from "lucide-react";

import Card from "../../components/Card/Card";
import SocialLink from "../../components/SocialLink/SocialLink";
import CopyEmail from "../../components/CopyEmail/CopyEmail";

import { socialLinks } from "../../data/socialLinks";
import { profile } from "../../data/profile";

import "./Contact.css";

function Contact() {
  const availableLinks = socialLinks.filter((social) => Boolean(social.url));

  return (
    <Card className="contact" id="contato" aria-labelledby="contact-title">
      <div className="contact__header">
        <span className="contact__label">06 / CONTATO</span>

        <MessageCircle
          className="contact__icon"
          size={32}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <h2 className="contact__title" id="contact-title">
        Vamos criar algo juntos?
      </h2>

      <p className="contact__description">
        Estou em busca de novas oportunidades, conexões e desafios no universo
        da tecnologia. Entre em contato e vamos conversar sobre como posso
        contribuir com seu próximo projeto.
      </p>

      {availableLinks.length > 0 ? (
        <div className="contact__links">
          {availableLinks.map((social) => (
            <SocialLink
              key={social.id}
              name={social.name}
              icon={social.icon}
              url={social.url}
              external={social.external}
            />
          ))}
        </div>
      ) : (
        <p className="contact__empty">Canais de contato.</p>
      )}

      <CopyEmail email={profile.email} />
    </Card>
  );
}

export default Contact;
