"use client";

import { Check, ChevronRight, Circle, Gift, Target } from "lucide-react";
import { useMemo, useState } from "react";
import { missionApi } from "@/api/missions";
import { MobileShell } from "@/components/layout/MobileShell";
import { ErrorState, LoadingState } from "@/components/ui/DataState";
import { useAsyncData } from "@/hooks/useAsyncData";

export default function MissionsPage() {
  const { data = [], loading, errorMessage, refetch } = useAsyncData(missionApi.getAll);
  const [overrides, setOverrides] = useState<Record<number, boolean>>({});
  const missions = useMemo(() => data.map((item) => ({
    ...item,
    completed: overrides[item.id] ?? item.completed,
  })), [data, overrides]);
  const completed = useMemo(() => missions.filter((item) => item.completed).length, [missions]);

  const toggle = (id: number) => {
    const mission = missions.find((item) => item.id === id);
    if (mission) setOverrides((current) => ({ ...current, [id]: !mission.completed }));
  };

  return (
    <MobileShell title="คะแนนในงาน" backHref="/">
      <section className="missions-screen paper-texture">
        <div className="mission-title"><Target size={47} /><div><small>คะแนนในงาน</small><h1>EVENT MISSION</h1></div></div>
        <p className="mission-intro">ทำภารกิจให้ครบ ลุ้นรับรางวัลพิเศษ!</p>
        {loading ? <LoadingState label="กำลังโหลดภารกิจ" /> : errorMessage ? (
          <ErrorState message={errorMessage} onRetry={() => void refetch()} />
        ) : (
          <>
            <div className="progress-label"><span>ความคืบหน้า</span><strong>{completed} / {missions.length} ภารกิจ</strong></div>
            <div className="progress-track"><i style={{ width: `${missions.length ? completed / missions.length * 100 : 0}%` }} /></div>

            <div className="mission-list">
              {missions.map((mission) => (
                <button key={mission.id} onClick={() => toggle(mission.id)} className={mission.completed ? "mission-row done" : "mission-row"}>
                  <span className="mission-check">{mission.completed ? <Check size={17} /> : <Circle size={21} />}</span>
                  <span><strong>{mission.title}</strong><small>+{mission.points} คะแนน</small></span>
                  <ChevronRight size={18} />
                </button>
              ))}
            </div>

            <div className={completed === missions.length ? "mission-reward ready" : "mission-reward"}><Gift size={18} />{completed === missions.length ? "รับรางวัลได้แล้ว!" : "ทำภารกิจให้ครบเพื่อรับสิทธิ์ลุ้นรางวัล"}</div>
          </>
        )}
        <div className="mission-footer">GOOD BEER<br />GOOD PEOPLE<br /><strong>GOOD TIMES</strong> ⚑</div>
      </section>
    </MobileShell>
  );
}
