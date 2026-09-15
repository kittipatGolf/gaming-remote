import Image from "next/image";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`wordmark ${compact ? "wordmark-compact" : ""}`} aria-label="One Beer">
      <Image
        src="/images/logo-one-beer.webp"
        alt="One Beer"
        width={384}
        height={285}
        className="wordmark-image"
      />
    </div>
  );
}
