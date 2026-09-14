import { Camera, Store, Target, Trophy } from "lucide-react";
import Image from "next/image";
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
    <MobileShell eyebrow="SPECIAL BEER | BETTER PEOPLE" title="CRAFT BEER | FOOD | GOLF" showNav={false}>
      <section className="home-screen paper-texture">
        <div className="hero-doodle hero-doodle-left">✎</div>
        <div className="hero-doodle hero-doodle-right">☄</div>
        <Wordmark />
        <h1>เชียร์ดี คนดี กอล์ฟดี วันเดียวจบ</h1>

        <div className="home-stage">
          <div
            className="home-hero-art"
            role="img"
            aria-label="แก้วเครื่องดื่มสีทองกับลูกกอล์ฟและบรรยากาศงานเทศกาล"
          >
            <Image
              src="/images/one-beer-hero.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 1128px, 100vw"
              className="home-hero-image"
            />
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
        </div>
      </section>
    </MobileShell>
  );
}
