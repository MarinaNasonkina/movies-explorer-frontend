export default function Button({ className, ariaLabel, onClick, children }) {
  return (
    <button
      className={`btn ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
