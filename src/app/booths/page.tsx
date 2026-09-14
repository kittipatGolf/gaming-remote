"use client";

import { ChevronRight, MapPin, Search, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MobileShell } from "@/components/layout/MobileShell";
import { booths } from "@/mock-data/event";

const categories = ["ทั้งหมด", "อาหาร", "เครื่องดื่ม", "แฟชั่น", "กิจกรรม"] as const;

export default function BoothsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("ทั้งหมด");
  const filtered = useMemo(() => booths.filter((booth) => {
    const categoryMatches = category === "ทั้งหมด" || booth.category === category;
    const queryMatches = `${booth.id} ${booth.name} ${booth.description}`.toLowerCase().includes(query.toLowerCase());
    return categoryMatches && queryMatches;
  }), [category, query]);

  return (
    <MobileShell title="การเข้าร้าน / บูธ" backHref="/">
      <section className="booths-screen paper-texture">
        <div className="directory-title"><Store size={42} /><div><small>การเข้าร้าน / บูธ</small><h1>BOOTH DIRECTORY</h1></div></div>
        <label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหาร้าน / สินค้า / กิจกรรม" /></label>
        <div className="category-scroll">
          {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</button>)}
        </div>
        <div className="booth-list">
          {filtered.map((booth) => (
            <Link href={`/booths/${booth.id.toLowerCase()}`} className="booth-row" key={booth.id}>
              <div className="booth-thumb"><Image src={booth.image} alt={booth.name} fill sizes="76px" /></div>
              <div><span>{booth.id}</span><strong>{booth.name}</strong><p>{booth.description}</p><small>+{booth.points} คะแนน</small></div>
              <ChevronRight size={18} />
            </Link>
          ))}
          {filtered.length === 0 && <p className="empty-state">ไม่พบบูธที่ค้นหา ลองเปลี่ยนคำค้นดูนะ</p>}
        </div>
        <div className="map-scribble"><MapPin size={18} /> พบกันที่ลานกิจกรรมกลาง</div>
      </section>
    </MobileShell>
  );
}
