"use client";

import { Gift, Home, MapPinned, Target, Trophy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { label: "Rewards", href: "/rewards", icon: Gift },
  { label: "Mission", href: "/missions", icon: Target },
  { label: "Booths", href: "/booths", icon: MapPinned },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="เมนูหลัก">
      {items.map(({ label, href, icon: Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={active ? "active" : ""}>
            <span className="nav-icon"><Icon size={18} strokeWidth={active ? 2.8 : 2} /></span>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
