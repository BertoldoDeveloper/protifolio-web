import { ArrowUpRight } from "lucide-react";

import "./Header.css";

function Header() {
  return (
    <header className="header container">
      <a
        href="#inicio"
        className="header__logo"
        aria-label="LB — Página inicial"
      >
        LB<span>.</span>
      </a>

      <nav className="header__nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>

        <a href="#projetos">Projetos</a>

        <a href="#contato" className="header__contact">
          Contato
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
