export default function Button({ type, children }) {
  return (
    <button className={`btn  ${type && "btn--secondary"}`}>{children}</button>
  );
}
