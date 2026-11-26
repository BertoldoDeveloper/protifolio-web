import { useState, useRef } from "react";

import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import { navigationLinks } from "../../data/navigation";

import "./Header.css";

function Header({ theme, onToggleTheme, activeSection }) {
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

  function handleNavigation(event, id) {
    closeMenu();

    const section = document.getElementById(id);

    if (section) {
      section.setAttribute("tabindex", "-1");

      section.focus({
        preventScroll: true,
      });
    }
  }

  return (
    <header className="header container" onKeyDown={handleKeyDown}>
      <a
        href="#inicio"
        className="header__logo"
        aria-label="LB — Página inicial"
        aria-current={activeSection === "inicio" ? "location" : undefined}
        onClick={(event) => handleNavigation(event, "inicio")}
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
        {navigationLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <a
              key={link.id}
              href={link.href}
              className={[
                link.id === "contato" ? "header__contact" : "",

                isActive ? "header__nav-link--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={isActive ? "location" : undefined}
              onClick={(event) => handleNavigation(event, link.id)}
            >
              {link.label}

              {link.id === "contato" && (
                <ArrowUpRight size={16} aria-hidden="true" />
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
