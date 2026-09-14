import { Camera, MapPinned, Store, Target, Trophy } from "lucide-react";
import Link from "next/link";
import { MobileShell } from "@/components/layout/MobileShell";
import { Sticker } from "@/components/ui/Sticker";
import { Wordmark } from "@/components/ui/Wordmark";

const actions = [
  { href: "/share", title: "ส่งรูป / วิดีโอ", subtitle: "Get on the Big Screen!", icon: Camera, tone: "red" },
  { href: "/leaderboard", title: "คะแนนแบบสด", subtitle: "Live Leaderboard", icon: Trophy, tone: "yellow" },
  { href: "/missions", title: "ภารกิจในงาน", subtitle: "Event Missions", icon: Target, tone: "blue" },
  { href: "/booths", title: "ค้นหาร้าน / บูธ", subtitle: "Booth Directory", icon: Store, tone: "ink" },
];

export default function HomePage() {
  return (
    <MobileShell eyebrow="SPECIAL BEER | BETTER PEOPLE" title="CRAFT BEER | FOOD | GOLF">
      <section className="home-screen paper-texture">
        <div className="hero-doodle hero-doodle-left">✎</div>
        <div className="hero-doodle hero-doodle-right">☄</div>
        <Wordmark />
        <h1>เชียร์ดี คนดี กอล์ฟดี วันเดียวจบ</h1>

        <div className="beer-hero" aria-label="แก้วเครื่องดื่มเย็นสดชื่น">
          <div className="foam"><i /><i /><i /></div>
          <div className="glass-shine" />
          <div className="beer-bubbles">· ° ·<br />° · ° ·</div>
        </div>

        <Sticker tone="yellow" className="hero-quote">LIFE IS<br />TOO SHORT<br />TO DRINK<br />BAD BEER</Sticker>

        <div className="home-actions">
          {actions.map(({ href, title, subtitle, icon: Icon, tone }) => (
            <Link href={href} key={href} className={`action-card action-${tone}`}>
              <span className="action-icon"><Icon size={29} strokeWidth={2.6} /></span>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </Link>
          ))}
        </div>

        <div className="home-footer-art"><MapPinned size={24} /><span>GOOD BEER<br />BETTER PEOPLE</span><b>♢♢</b></div>
      </section>
    </MobileShell>
  );
}
