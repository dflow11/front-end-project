export default function EmptyState({ title = "No results", message }) {
  return (
    <div className="empty-state">
      <div className="empty-emoji">🔎</div>
      <h2>{title}</h2>
      {message && <p>{message}</p>}
    </div>
  );
}
