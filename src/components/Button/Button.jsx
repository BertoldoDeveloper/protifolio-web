import "./Button.css";

function Button({
  children,
  variant = "primary",
  href,
  icon: Icon,
  className = "",
  ...props
}) {
  const buttonClasses = `button button--${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>

      {Icon && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a className={buttonClasses} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={buttonClasses} {...props}>
      {content}
    </button>
  );
}

export default Button;
