export default function Button({ onClick, typeButton, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn  ${typeButton && "btn--secondary"}`}
    >
      {children}
    </button>
  );
}
