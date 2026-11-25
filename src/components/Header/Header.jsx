import { useState, useRef } from "react";

import { ArrowUpRight, Menu, X } from "lucide-react";

import "./Header.css";

function Header() {
  // Estado responsável pela abertura do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Referência ao botão de navegação mobile
  const menuButtonRef = useRef(null);

  // Alterna entre aberto e fechado
  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState);
  }

  // Fecha o menu
  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Fecha o menu utilizando Escape
  function handleKeyDown(event) {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();

      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className="header container" onKeyDown={handleKeyDown}>
      <a
        href="#inicio"
        className="header__logo"
        aria-label="LB — Página inicial"
        onClick={closeMenu}
      >
        LB<span>.</span>
      </a>

      <button
        ref={menuButtonRef}
        type="button"
        className="header__toggle"
        onClick={toggleMenu}
        aria-label={
          isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
        }
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        {isMenuOpen ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>

      <nav
        id="primary-navigation"
        className={`header__nav ${
          isMenuOpen ? "header__nav--open" : ""
        }`.trim()}
        aria-label="Navegação principal"
      >
        <a href="#sobre" onClick={closeMenu}>
          Sobre
        </a>

        <a href="#projetos" onClick={closeMenu}>
          Projetos
        </a>

        <a href="#contato" className="header__contact" onClick={closeMenu}>
          Contato
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
