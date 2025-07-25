export default function Button({ className, handler, children }) {
  return (
    <button className={`${className} submit-button`} onClick={handler}>
      {children}
    </button>
  );
}
