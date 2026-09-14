import { Medal, Trophy } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { Sticker } from "@/components/ui/Sticker";
import { leaderboard } from "@/mock-data/event";

export default function LeaderboardPage() {
  return (
    <MobileShell title="คะแนนแบบสด" backHref="/">
      <section className="leaderboard-screen paper-texture">
        <div className="title-lockup"><Trophy size={43} /><div><small>คะแนนแบบสด</small><h1>LEADERBOARD</h1></div></div>
        <div className="score-tabs"><button className="active">Longest Drive</button><button>Nearest to Pin</button><button>Putting</button></div>
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
        <Sticker tone="yellow" className="play-more">PLAY MORE<br />BEER MORE!<br /><strong>MORE!</strong></Sticker>
        <div className="golfer-art">🏌</div>
      </section>
    </MobileShell>
  );
}
