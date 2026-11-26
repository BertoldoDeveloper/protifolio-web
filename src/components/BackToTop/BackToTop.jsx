import { ArrowUp } from "lucide-react";

import "./BackToTop.css";

function BackToTop({ visible }) {
  function handleBackToTop() {
    const hero = document.getElementById("inicio");

    // Restaura o foco para a região inicial
    hero?.focus({ preventScroll: true });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      onClick={handleBackToTop}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
