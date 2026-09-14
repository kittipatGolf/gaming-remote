import type {
  ActivityItem,
  Booth,
  LeaderboardEntry,
  MissionItem,
  Reward,
} from "@/types/event";

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Ploy", bay: "Bay 08", score: 238, avatarTone: "#ead8b6" },
  { rank: 2, name: "Mark", bay: "Bay 12", score: 231, avatarTone: "#d9c2a6" },
  { rank: 3, name: "Beam", bay: "Bay 04", score: 225, avatarTone: "#ecd0bd" },
  { rank: 4, name: "Jane", bay: "Bay 07", score: 221, avatarTone: "#d6c5b6" },
  { rank: 5, name: "Golfie", bay: "Bay 03", score: 218, avatarTone: "#e4c8a8" },
];

export const missions: MissionItem[] = [
  { id: 1, title: "เล่นเกมกอล์ฟ", points: 2, completed: true },
  { id: 2, title: "ส่งรูปขึ้นจอใหญ่", points: 1, completed: true },
  { id: 3, title: "เช็กอิน Booth A", points: 1, completed: true },
  { id: 4, title: "ลองสินค้าที่ Booth B", points: 1, completed: false },
  { id: 5, title: "ค้นหา QR ลับ", points: 2, completed: false },
];

export const booths: Booth[] = [
  {
    id: "A01",
    name: "Happy Drink",
    description: "เครื่องดื่มผลไม้ สดชื่น รับแก้วฟรี",
    category: "เครื่องดื่ม",
    image: "/images/craft-drinks.png",
    points: 1,
  },
  {
    id: "A02",
    name: "Golf Pro Shop",
    description: "ทดลองไม้กอล์ฟรุ่นใหม่และอุปกรณ์พรีเมียม",
    category: "กิจกรรม",
    image: "/images/golf-booth.png",
    points: 1,
  },
  {
    id: "B12",
    name: "Style On",
    description: "แต่งลุคใหม่ สนุกกับแฟชั่นสีสันสดใส",
    category: "แฟชั่น",
    image: "/images/festival-friends.png",
    points: 1,
  },
  {
    id: "C08",
    name: "Tech & Gadget",
    description: "ทดลองไอเท็มสุดล้ำภายในงาน",
    category: "กิจกรรม",
    image: "/images/golf-booth.png",
    points: 1,
  },
];

export const rewards: Reward[] = [
  { name: "iPhone 15", amount: 1, visual: "▯", tone: "#ece7df" },
  { name: "Golf Bag", amount: 1, visual: "♟", tone: "#e8e6e0" },
  { name: "Gift Voucher", amount: 5, visual: "TICKET", tone: "#191919" },
  { name: "Premium Cap", amount: 10, visual: "◒", tone: "#f3d743" },
];

export const activities: ActivityItem[] = [
  { type: "รูปภาพ", date: "12 ก.ย. 2026 14:32", status: "รอการอนุมัติ", image: "/images/festival-friends.png" },
  { type: "วิดีโอ", date: "12 ก.ย. 2026 13:11", status: "อนุมัติแล้ว", image: "/images/craft-drinks.png" },
  { type: "รูปภาพ", date: "12 ก.ย. 2026 11:05", status: "ไม่อนุมัติ", image: "/images/golf-booth.png" },
];
