export function Sticker({ children, tone = "yellow", className = "" }: {
  children: React.ReactNode;
  tone?: "yellow" | "red" | "blue" | "black";
  className?: string;
}) {
  return <div className={`sticker sticker-${tone} ${className}`}>{children}</div>;
}
