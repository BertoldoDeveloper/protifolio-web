import { useState, useRef } from "react";

import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Header.css";

function Header({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

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

      <div className="header__actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />

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
      </div>

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
