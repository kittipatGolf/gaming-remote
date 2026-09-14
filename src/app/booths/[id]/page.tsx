import { MapPin, QrCode, ScanLine } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MobileShell } from "@/components/layout/MobileShell";
import { booths } from "@/mock-data/event";

export default async function BoothDetailPage({ params }: PageProps<"/booths/[id]">) {
  const { id } = await params;
  const booth = booths.find((item) => item.id.toLowerCase() === id.toLowerCase());
  if (!booth) notFound();

  return (
    <MobileShell title="รายละเอียดบูธ" backHref="/booths">
      <article className="booth-detail paper-texture">
        <div className="booth-cover"><Image src={booth.image} alt={booth.name} fill sizes="430px" priority /><span>HAPPY<br />DRINK</span></div>
        <div className="booth-heading"><div><span>{booth.id}</span><h1>{booth.name}</h1></div><ScanLine size={42} /></div>
        <p>{booth.description} แวะมาชิมเมนูพิเศษประจำงานและสนุกกับกิจกรรมที่เตรียมไว้สำหรับคุณ</p>
        <div className="activity-card">
          <h2>กิจกรรมของบูธนี้</h2>
          <ol><li>สั่งเครื่องดื่มเมนูพิเศษ</li><li>ถ่ายรูปคู่เมนู</li><li>สแกน QR กับพนักงานเพื่อรับคะแนน</li></ol>
        </div>
        <button className="scan-button"><QrCode size={22} /> สแกนรับคะแนนที่บูธนี้</button>
        <div className="location-row"><MapPin size={24} fill="currentColor" /><span>ตำแหน่งบูธ<strong>โซน A · บูธ {booth.id}</strong></span></div>
        <div className="cheers-note">CHEERS! 🍺</div>
      </article>
    </MobileShell>
  );
}
