import { useState, useEffect } from "react";

function useClipboard(resetDelay = 2500) {
  const [status, setStatus] = useState("idle");

  // Restaura o estado após uma cópia bem-sucedida
  useEffect(() => {
    if (status !== "success") {
      return;
    }

    const timeoutId = setTimeout(() => {
      setStatus("idle");
    }, resetDelay);

    // Limpeza do temporizador
    return () => {
      clearTimeout(timeoutId);
    };
  }, [status, resetDelay]);

  // Solicita a cópia de um texto
  async function copy(text) {
    if (status === "copying") {
      return false;
    }

    setStatus("copying");

    try {
      if (typeof text !== "string" || !text.trim()) {
        throw new Error("Texto inválido.");
      }

      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API indisponível.");
      }

      await navigator.clipboard.writeText(text);

      setStatus("success");

      return true;
    } catch (error) {
      console.warn("Não foi possível copiar o texto:", error);

      setStatus("error");

      return false;
    }
  }

  return {
    status,
    copy,
  };
}

export default useClipboard;
