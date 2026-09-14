"use client";

import { Check, ImageIcon, Sparkles, Upload, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileShell } from "@/components/layout/MobileShell";

export default function SharePage() {
  const [mode, setMode] = useState<"photo" | "video">("photo");
  const [nickname, setNickname] = useState("Mint");
  const [accepted, setAccepted] = useState(true);

  return (
    <MobileShell title="ส่งรูป / วิดีโอ" backHref="/" showNav={false}>
      <section className="form-screen paper-texture">
        <div className="headline-block">
          <Sparkles size={25} className="spark-left" />
          <h1>GET ON<br />THE BIG SCREEN!</h1>
          <span className="paint-underline" />
          <p>แชร์โมเมนต์ของคุณ ขึ้นจอใหญ่<br />ให้ทุกคนในงานได้เห็น!</p>
        </div>

        <div className="segmented-control" role="tablist" aria-label="ประเภทสื่อ">
          <button className={mode === "photo" ? "selected" : ""} onClick={() => setMode("photo")}><ImageIcon size={17} /> รูปภาพ</button>
          <button className={mode === "video" ? "selected" : ""} onClick={() => setMode("video")}><Video size={17} /> วิดีโอ</button>
        </div>

        <label className="upload-preview">
          <Image src="/images/festival-friends.png" alt="ตัวอย่างโมเมนต์ในงาน" fill sizes="390px" priority />
          <span><Upload size={17} /> เปลี่ยน{mode === "photo" ? "รูป" : "วิดีโอ"}</span>
          <input type="file" accept={mode === "photo" ? "image/*" : "video/*"} />
        </label>

        <label className="field-label">
          ชื่อที่ใช้แสดงบนจอ
          <input value={nickname} onChange={(event) => setNickname(event.target.value)} maxLength={20} />
        </label>

        <label className="consent-row">
          <button type="button" className={accepted ? "check-box checked" : "check-box"} onClick={() => setAccepted(!accepted)} aria-label="ยอมรับเงื่อนไข">
            {accepted && <Check size={14} strokeWidth={4} />}
          </button>
          <span>ยอมรับเงื่อนไขการใช้งาน<br /><small>(ห้ามส่งภาพที่ไม่เหมาะสม)</small></span>
        </label>

        <Link href={accepted && nickname.trim() ? "/share/status" : "#"} aria-disabled={!accepted || !nickname.trim()} className="primary-brush-button">
          <Upload size={20} /> ส่งขึ้นจอใหญ่
        </Link>

        <div className="footer-saying">GOOD BEER<br /><strong>BETTER PEOPLE</strong><span>♢♢</span></div>
      </section>
    </MobileShell>
  );
}
