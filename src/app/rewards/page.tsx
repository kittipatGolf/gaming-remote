import { Gift, Ticket } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { rewards } from "@/mock-data/event";

export default function RewardsPage() {
  return (
    <MobileShell title="ลุ้นรางวัล" backHref="/">
      <section className="rewards-screen paper-texture">
        <div className="rewards-title"><Gift size={43} fill="#f2d339" /><div><small>ลุ้นรางวัล</small><h1>LUCKY DRAW</h1></div></div>
        <p>สิทธิ์ลุ้นรางวัลของคุณ</p>
        <div className="ticket-count"><Ticket size={30} fill="#f5d33b" /><strong>8</strong><span>สิทธิ์</span></div>
        <button className="reward-button">ดูของรางวัลทั้งหมด</button>
        <h2>ตัวอย่างของรางวัล</h2>
        <div className="reward-grid">
          {rewards.map((reward) => (
            <div className="reward-item" key={reward.name}>
              <div style={{ background: reward.tone }} className="reward-visual">{reward.visual}</div>
              <strong>{reward.name}</strong><span>{reward.amount} รางวัล</span>
            </div>
          ))}
        </div>
        <div className="good-luck">GOOD LUCK! <span>♧</span></div>
      </section>
    </MobileShell>
  );
}
