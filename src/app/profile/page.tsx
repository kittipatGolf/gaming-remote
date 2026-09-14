"use client";

import { Camera, Crown, Play, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { activityApi } from "@/api/activities";
import { MobileShell } from "@/components/layout/MobileShell";
import { ErrorState, LoadingState } from "@/components/ui/DataState";
import { useAsyncData } from "@/hooks/useAsyncData";

const statusClass = {
  "รอการอนุมัติ": "pending",
  "อนุมัติแล้ว": "approved",
  "ไม่อนุมัติ": "rejected",
};

export default function ProfilePage() {
  const { data: activities = [], loading, errorMessage, refetch } = useAsyncData(activityApi.getAll);

  return (
    <MobileShell title="โปรไฟล์ / ประวัติ" backHref="/">
      <section className="profile-screen paper-texture">
        <div className="profile-title"><Crown size={34} fill="#f3d53d" /><h1>MY ACTIVITY</h1></div>
        <div className="profile-avatar"><Image src="/images/festival-friends.png" alt="Mint" fill sizes="110px" /></div>
        <h2>Mint</h2>
        <div className="profile-ticket"><Ticket size={20} fill="#f0ca2d" /><strong>8</strong> สิทธิ์ลุ้นรางวัล</div>
        <button className="edit-profile">แก้ไขชื่อเล่น</button>
        <div className="profile-tabs"><button className="active">ประวัติการส่ง</button><button>ภารกิจ</button><button>สิทธิ์ลุ้นรางวัล</button></div>
        {loading ? <LoadingState label="กำลังโหลดประวัติ" /> : errorMessage ? (
          <ErrorState message={errorMessage} onRetry={() => void refetch()} />
        ) : (
          <div className="activity-list">
            {activities.map((activity, index) => (
              <Link href={index === 1 ? "/moment" : "/share/status"} className="activity-row" key={`${activity.type}-${activity.date}`}>
                <div className="activity-thumb"><Image src={activity.image} alt={activity.type} fill sizes="66px" />{activity.type === "วิดีโอ" && <Play size={20} fill="white" />}</div>
                <div><strong>{activity.type}</strong><span>{activity.date}</span><small className={statusClass[activity.status]}>{activity.status}</small></div>
                <Camera size={19} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </MobileShell>
  );
}
