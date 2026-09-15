"use client";

import { Heart, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { activityApi } from "@/api/activities";
import { MobileShell } from "@/components/layout/MobileShell";
import { Wordmark } from "@/components/ui/Wordmark";
import { useAsyncData } from "@/hooks/useAsyncData";

interface MomentContentProps {
  activityId?: string;
}

export function MomentContent({ activityId }: MomentContentProps) {
  const { data: activity, loading, errorMessage, refetch } = useAsyncData(
    async () => {
      if (activityId) return activityApi.getById(activityId);
      const items = await activityApi.getAll();
      if (!items[0]) throw new Error("ไม่พบข้อมูลโมเมนต์");
      return items[0];
    },
    activityId ?? "latest",
  );

  const image = activity?.image ?? "/images/festival-friends.png";

  return (
    <MobileShell showNav={false} dark>
      <section className="moment-screen">
        <Image
          src="/images/moment-live-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="moment-background"
        />
        <Link href="/profile" className="moment-close" aria-label="กลับไปโปรไฟล์">×</Link>
        <h1>YOUR MOMENT<br /><strong>GOES LIVE!</strong></h1>
        <div className="moment-card">
          <div className="moment-photo">
            <Image src={image} alt={`${activity?.type ?? "รูปภาพ"}ของ Mint`} fill sizes="380px" priority />
            {activity?.type === "วิดีโอ" && <span className="moment-video-badge"><Play size={18} fill="currentColor" /> วิดีโอ</span>}
            {loading && <span className="moment-media-state">กำลังโหลด...</span>}
            {errorMessage && (
              <span className="moment-media-state moment-media-error">
                โหลดโมเมนต์ไม่สำเร็จ
                <button type="button" onClick={() => void refetch()}>ลองใหม่</button>
              </span>
            )}
          </div>
          <div className="moment-caption"><span className="mini-avatar" /> <strong>@Mint</strong><small>BAY 07</small><Heart size={24} fill="#e5242a" /></div>
        </div>
        <Wordmark />
      </section>
    </MobileShell>
  );
}
