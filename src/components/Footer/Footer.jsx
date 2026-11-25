import { ArrowUp } from "lucide-react";

import { profile } from "../../data/profile";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container">
      <div className="footer__info">
        <p className="footer__copyright">
          © {currentYear} {profile.firstName} {profile.lastName}.
        </p>

        <p className="footer__credits">Desenvolvido com React.</p>
      </div>

      <a href="#inicio" className="footer__back-top">
        <span>Voltar ao topo</span>

        <ArrowUp size={18} aria-hidden="true" />
      </a>
    </footer>
  );
}

export default Footer;
