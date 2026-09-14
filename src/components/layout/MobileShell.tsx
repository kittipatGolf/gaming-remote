"use client";

import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BottomNav } from "./BottomNav";

interface MobileShellProps {
  children: React.ReactNode;
  title?: string;
  eyebrow?: string;
  backHref?: string;
  showNav?: boolean;
  dark?: boolean;
}

const menuLinks = [
  ["หน้าหลัก", "/"],
  ["ส่งรูป / วิดีโอ", "/share"],
  ["คะแนนแบบสด", "/leaderboard"],
  ["ภารกิจในงาน", "/missions"],
  ["ค้นหาร้าน / บูธ", "/booths"],
  ["ลุ้นรับรางวัล", "/rewards"],
  ["โปรไฟล์ / ประวัติ", "/profile"],
];

export function MobileShell({ children, title, eyebrow, backHref, showNav = true, dark = false }: MobileShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`app-stage ${dark ? "stage-dark" : ""}`}>
      <div className={`phone-shell ${dark ? "phone-dark" : ""}`}>
        {!dark && (
          <header className="top-bar">
            {backHref ? (
              <Link href={backHref} aria-label="ย้อนกลับ"><ArrowLeft size={22} /></Link>
            ) : <span className="top-spacer" />}
            <div className="top-copy">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <strong>{title}</strong>}
            </div>
            <button type="button" aria-label="เปิดเมนู" onClick={() => setMenuOpen(true)}><Menu size={23} /></button>
          </header>
        )}

        <main className={showNav ? "screen-content with-nav" : "screen-content"}>{children}</main>
        {showNav && !dark && <BottomNav />}

        {menuOpen && (
          <div className="menu-scrim" onClick={() => setMenuOpen(false)}>
            <aside className="menu-panel" onClick={(event) => event.stopPropagation()}>
              <div className="menu-heading">
                <div><span>ONE BEER</span><strong>เลือกไปสนุกกัน</strong></div>
                <button type="button" aria-label="ปิดเมนู" onClick={() => setMenuOpen(false)}><X size={22} /></button>
              </div>
              <div className="menu-links">
                {menuLinks.map(([label, href], index) => (
                  <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{label}
                  </Link>
                ))}
              </div>
              <p>GOOD BEER • GOOD PEOPLE • GOOD TIMES</p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
