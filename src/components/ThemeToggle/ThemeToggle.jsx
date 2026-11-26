import { Moon, Sun } from "lucide-react";

import "./ThemeToggle.css";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  const label = isDark ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun size={20} aria-hidden="true" />
      ) : (
        <Moon size={20} aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;
