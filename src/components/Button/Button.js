import './Button.css';

export default function Button({ type, className, ariaLabel, onClick, children }) {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
