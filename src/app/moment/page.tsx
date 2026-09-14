import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileShell } from "@/components/layout/MobileShell";
import { Wordmark } from "@/components/ui/Wordmark";

export default function MomentPage() {
  return (
    <MobileShell showNav={false} dark>
      <section className="moment-screen">
        <Link href="/profile" className="moment-close" aria-label="กลับไปโปรไฟล์">×</Link>
        <h1>YOUR MOMENT<br /><strong>GOES LIVE!</strong></h1>
        <div className="moment-card">
          <div className="moment-photo"><Image src="/images/festival-friends.png" alt="โมเมนต์ของ Mint" fill sizes="380px" priority /></div>
          <div className="moment-caption"><span className="mini-avatar" /> <strong>@Mint</strong><small>BAY 07</small><Heart size={24} fill="#e5242a" /></div>
        </div>
        <div className="moment-rays" />
        <Wordmark compact />
        <div className="crowd">♩ ＼o/ \o/ ＼o/ \o/ 🍺</div>
      </section>
    </MobileShell>
  );
}
