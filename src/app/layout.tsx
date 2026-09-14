import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "One Beer — Special Beer, Better People",
  description: "แอปกิจกรรม One Beer สำหรับร่วมสนุก เก็บคะแนน และแชร์โมเมนต์",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${notoSansThai.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
