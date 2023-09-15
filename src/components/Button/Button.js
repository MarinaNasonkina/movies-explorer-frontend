import './Button.css';

export default function Button({
  type,
  className,
  isDisabled,
  ariaLabel,
  onClick,
  children,
}) {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      disabled={isDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
