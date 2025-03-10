export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      {children}
    </button>
  );
}
