"use client";

import { Medal, Trophy } from "lucide-react";
import Image from "next/image";
import { leaderboardApi } from "@/api/leaderboard";
import { MobileShell } from "@/components/layout/MobileShell";
import { ErrorState, LoadingState } from "@/components/ui/DataState";
import { useAsyncData } from "@/hooks/useAsyncData";

export default function LeaderboardPage() {
  const { data: leaderboard = [], loading, errorMessage, refetch } = useAsyncData(leaderboardApi.getAll);

  return (
    <MobileShell title="คะแนนแบบสด" backHref="/">
      <section className="leaderboard-screen paper-texture">
        <div className="title-lockup"><Trophy size={43} /><div><small>คะแนนแบบสด</small><h1>LEADERBOARD</h1></div></div>
        <div className="score-tabs"><button className="active">Longest Drive</button><button>Nearest to Pin</button><button>Putting</button></div>
        {loading ? <LoadingState label="กำลังโหลดคะแนน" /> : errorMessage ? (
          <ErrorState message={errorMessage} onRetry={() => void refetch()} />
        ) : (
          <div className="rank-list">
            {leaderboard.map((entry) => (
              <div className="rank-row" key={entry.name}>
                <div className={`rank-number rank-${entry.rank}`}>{entry.rank <= 3 ? <Medal size={31} fill="currentColor" /> : entry.rank}<b>{entry.rank <= 3 && entry.rank}</b></div>
                <div className="avatar" style={{ background: entry.avatarTone }}>{entry.name.slice(0, 1)}</div>
                <div className="rank-person"><strong>{entry.name}</strong><small>{entry.bay}</small></div>
                <div className="rank-score"><strong>{entry.score}</strong><small>YDS</small></div>
              </div>
            ))}
          </div>
        )}
        <div className="leaderboard-promo">
          <Image
            src="/images/leaderboard-play-more.png"
            alt="Play more, beer more, more"
            fill
            sizes="(min-width: 1024px) 760px, calc(100vw - 34px)"
          />
        </div>
      </section>
    </MobileShell>
  );
}
