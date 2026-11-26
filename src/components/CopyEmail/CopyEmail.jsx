import { Copy, Check, LoaderCircle, AlertCircle } from "lucide-react";

import useClipboard from "../../hooks/useClipboard";

import "./CopyEmail.css";

const feedback = {
  idle: {
    label: "Copiar e-mail",
    message: "",
    icon: Copy,
  },

  copying: {
    label: "Copiando...",
    message: "Copiando endereço de e-mail.",
    icon: LoaderCircle,
  },

  success: {
    label: "E-mail copiado!",
    message: "E-mail copiado com sucesso.",
    icon: Check,
  },

  error: {
    label: "Tentar novamente",
    message:
      "Não foi possível copiar. Selecione o endereço e copie manualmente.",
    icon: AlertCircle,
  },
};

function CopyEmail({ email }) {
  const { status, copy } = useClipboard();

  if (!email) {
    return null;
  }

  const currentFeedback = feedback[status];

  const Icon = currentFeedback.icon;

  function handleCopy() {
    void copy(email);
  }

  return (
    <div className="copy-email">
      <span className="copy-email__label">E-mail profissional</span>

      <div className="copy-email__content">
        <span className="copy-email__address">{email}</span>

        <button
          type="button"
          className={`copy-email__button copy-email__button--${status}`}
          onClick={handleCopy}
          disabled={status === "copying" || status === "success"}
        >
          <Icon size={18} aria-hidden="true" />

          <span>{currentFeedback.label}</span>
        </button>
      </div>

      <p
        className="copy-email__feedback"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {currentFeedback.message}
      </p>
    </div>
  );
}

export default CopyEmail;
