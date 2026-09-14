"use client";

import { CircleAlert, LoaderCircle, RotateCcw } from "lucide-react";

export function LoadingState({ label = "กำลังโหลดข้อมูล" }: { label?: string }) {
  return <div className="data-state"><LoaderCircle className="spin" size={30} /><strong>{label}</strong></div>;
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="data-state data-error">
      <CircleAlert size={30} />
      <strong>{message}</strong>
      <button type="button" onClick={onRetry}><RotateCcw size={15} /> ลองใหม่</button>
    </div>
  );
}
