import { FolderSearch } from "lucide-react";

import Button from "../Button/Button";

import "./EmptyState.css";

function EmptyState({
  title = "Nenhum resultado encontrado",
  description,
  icon: Icon = FolderSearch,
  actionLabel,
  actionIcon,
  onAction,
}) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
      </div>

      <h3 className="empty-state__title">{title}</h3>

      {description && <p className="empty-state__description">{description}</p>}

      {actionLabel && onAction && (
        <Button icon={actionIcon} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
