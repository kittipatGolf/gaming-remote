export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`wordmark ${compact ? "wordmark-compact" : ""}`} aria-label="One Beer">
      <span>ON</span><span className="wordmark-blue">E</span>
      <strong><span>B</span><span className="wordmark-red">E</span><span>E</span><span className="wordmark-blue">R</span></strong>
    </div>
  );
}
