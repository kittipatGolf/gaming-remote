import { BellRing, Check, Clock3, PartyPopper } from "lucide-react";
import Link from "next/link";
import { MobileShell } from "@/components/layout/MobileShell";
import { Sticker } from "@/components/ui/Sticker";

export default function ShareStatusPage() {
  return (
    <MobileShell title="ส่งรูป / วิดีโอ" backHref="/share" showNav={false}>
      <section className="status-screen paper-texture">
        <div className="success-seal"><Check size={58} strokeWidth={4} /></div>
        <PartyPopper className="confetti confetti-left" />
        <PartyPopper className="confetti confetti-right" />
        <h1>ส่งเรียบร้อยแล้ว!</h1>
        <p>รูปของคุณอยู่ในคิวรอการอนุมัติ<br />จากทีมงาน</p>
        <p className="status-note">ถ้าไม่ผ่านการอนุมัติ<br />ทีมงานจะแจ้งเหตุผลของคุณบนจอใหญ่นะ 🎉</p>

        <div className="pending-card">
          <Clock3 size={34} />
          <span>สถานะ<strong>รอการอนุมัติ</strong></span>
        </div>

        <Link className="black-brush-button" href="/">กลับสู่หน้าหลัก</Link>

        <Sticker tone="yellow" className="notify-sticker"><BellRing size={23} /><span>อย่าลืมเช็กหน้าจอใหญ่<br />แล้วเจอกับโมเมนต์ของคุณ!</span></Sticker>
        <div className="life-note">ONE GLASS<br />CHANGE<br />YOUR LIFE <span>♡</span></div>
      </section>
    </MobileShell>
  );
}
