export interface LeaderboardEntry {
  rank: number;
  name: string;
  bay: string;
  score: number;
  avatarTone: string;
}

export interface MissionItem {
  id: number;
  title: string;
  points: number;
  completed: boolean;
}

export interface Booth {
  id: string;
  name: string;
  description: string;
  category: "อาหาร" | "เครื่องดื่ม" | "แฟชั่น" | "กิจกรรม";
  image: string;
  points: number;
}

export interface Reward {
  name: string;
  amount: number;
  image: string;
}

export interface ActivityItem {
  id: string;
  type: "รูปภาพ" | "วิดีโอ";
  date: string;
  status: "รอการอนุมัติ" | "อนุมัติแล้ว" | "ไม่อนุมัติ";
  image: string;
}

export interface SubmissionPayload {
  nickname: string;
  mediaType: "photo" | "video";
  fileName: string;
}

export interface SubmissionResult extends SubmissionPayload {
  id: string;
  status: "PENDING";
  createdAt: string;
}
