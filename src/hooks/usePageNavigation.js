import { useEffect, useState } from "react";

import { navigationSectionIds } from "../Data/navigation";

function usePageNavigation() {
  const [activeSection, setActiveSection] = useState("inicio");

  const [progress, setProgress] = useState(0);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let frameId = null;

    const sections = navigationSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const header = document.querySelector(".site-header");

    const main = document.querySelector("main");

    function updateNavigation() {
      const scrollY = Math.max(0, window.scrollY);

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );

      // Calcula o progresso da página
      const nextProgress =
        maxScroll > 0 ? Math.min(100, (scrollY / maxScroll) * 100) : 0;

      setProgress(nextProgress);

      // Exibe o botão após 500px de rolagem
      setShowBackToTop(scrollY > 500);

      // Considera a altura atual do Header
      const headerHeight = header?.getBoundingClientRect().height ?? 0;

      const activationLine = headerHeight + 24;

      let currentSection = "inicio";

      // Identifica a última seção que passou
      // pela linha de ativação
      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();

        if (top <= activationLine) {
          currentSection = section.id;
        }
      });

      // Garante a identificação do contato
      // quando o visitante chega ao fim
      if (maxScroll > 0 && scrollY >= maxScroll - 2 && sections.length > 0) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    }

    // Agrupa atualizações em um quadro
    // de renderização do navegador
    function scheduleUpdate() {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;

        updateNavigation();
      });
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });

    window.addEventListener("resize", scheduleUpdate);

    // Observa mudanças de visibilidade
    const intersectionObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(scheduleUpdate, {
            threshold: [0, 0.25, 0.5, 0.75, 1],
          })
        : null;

    sections.forEach((section) => {
      intersectionObserver?.observe(section);
    });

    // Observa alterações nas dimensões
    // causadas por filtros e mudanças de layout
    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(scheduleUpdate)
        : null;

    if (header) {
      resizeObserver?.observe(header);
    }

    if (main) {
      resizeObserver?.observe(main);
    }

    // Atualização inicial
    scheduleUpdate();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);

      window.removeEventListener("resize", scheduleUpdate);

      intersectionObserver?.disconnect();

      resizeObserver?.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return {
    activeSection,
    progress,
    showBackToTop,
  };
}

export default usePageNavigation;
