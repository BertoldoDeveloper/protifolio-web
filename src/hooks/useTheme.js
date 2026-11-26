import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio-theme";

// Recupera a preferencia salva pelo visitante
function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // O armazenamento pode estar indisponível
  }

  // Tema padrao da nossa identidade visual
  return "light";
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Sincroniza o tema com o navegador
  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // O tema continua funcionando sem persistencia
    }
  }, [theme]);

  // Alterna entre os dois temas
  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  }

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
