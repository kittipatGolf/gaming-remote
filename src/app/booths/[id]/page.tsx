"use client";

import { MapPin, QrCode, ScanLine } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { boothApi } from "@/api/booths";
import { MobileShell } from "@/components/layout/MobileShell";
import { ErrorState, LoadingState } from "@/components/ui/DataState";
import { useAsyncData } from "@/hooks/useAsyncData";

export default function BoothDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: booth, loading, errorMessage, refetch } = useAsyncData(
    () => boothApi.getById(id),
    id,
  );

  return (
    <MobileShell title="รายละเอียดบูธ" backHref="/booths">
      <article className="booth-detail paper-texture">
        {loading ? <LoadingState label="กำลังโหลดรายละเอียดบูธ" /> : errorMessage || !booth ? (
          <ErrorState message={errorMessage ?? "ไม่พบข้อมูลบูธ"} onRetry={() => void refetch()} />
        ) : (
          <>
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
          </>
        )}
      </article>
    </MobileShell>
  );
}
