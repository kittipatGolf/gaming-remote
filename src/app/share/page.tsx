"use client";

import { Check, ImageIcon, Sparkles, Upload, Video } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { submissionApi } from "@/api/submissions";
import { MobileShell } from "@/components/layout/MobileShell";

interface MediaPreview {
  url: string;
  type: "image" | "video";
  fileName: string;
}

export default function SharePage() {
  const router = useRouter();
  const [mode, setMode] = useState<"photo" | "video">("photo");
  const [nickname, setNickname] = useState("Mint");
  const [accepted, setAccepted] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [photoPreview, setPhotoPreview] = useState<MediaPreview>({
    url: "/images/festival-friends.png",
    type: "image",
    fileName: "festival-friends.png",
  });
  const [videoPreview, setVideoPreview] = useState<MediaPreview | null>(null);
  const objectUrlsRef = useRef<Record<"photo" | "video", string | null>>({
    photo: null,
    video: null,
  });
  const activePreview = mode === "photo" ? photoPreview : videoPreview;

  useEffect(() => {
    const objectUrls = objectUrlsRef.current;
    return () => {
      Object.values(objectUrls).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, []);

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const nextMode = file.type.startsWith("video/") ? "video" : "photo";
    const previousUrl = objectUrlsRef.current[nextMode];
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    const objectUrl = URL.createObjectURL(file);
    objectUrlsRef.current[nextMode] = objectUrl;

    if (nextMode === "video") {
      setVideoPreview({ url: objectUrl, type: "video", fileName: file.name });
    } else {
      setPhotoPreview({ url: objectUrl, type: "image", fileName: file.name });
    }
    setMode(nextMode);
  };

  const canSubmit = accepted && Boolean(nickname.trim()) && Boolean(activePreview);

  const handleSubmit = async () => {
    if (!canSubmit || !activePreview || submitting) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await submissionApi.create({
        nickname: nickname.trim(),
        mediaType: mode,
        fileName: activePreview.fileName,
      });
      router.push("/share/status");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "ส่งโมเมนต์ไม่สำเร็จ");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MobileShell title="ส่งรูป / วิดีโอ" backHref="/" showNav={false}>
      <section className="form-screen paper-texture">
        <div className="headline-block">
          <Sparkles size={25} className="spark-left" />
          <h1>GET ON<br />THE BIG SCREEN!</h1>
          <span className="paint-underline" />
          <p>แชร์โมเมนต์ของคุณ ขึ้นจอใหญ่<br />ให้ทุกคนในงานได้เห็น!</p>
        </div>

        <div className="segmented-control" role="tablist" aria-label="ประเภทสื่อ">
          <button type="button" role="tab" aria-selected={mode === "photo"} className={mode === "photo" ? "selected" : ""} onClick={() => setMode("photo")}><ImageIcon size={17} /> รูปภาพ</button>
          <button type="button" role="tab" aria-selected={mode === "video"} className={mode === "video" ? "selected" : ""} onClick={() => setMode("video")}><Video size={17} /> วิดีโอ</button>
        </div>

        <div className={`upload-preview ${activePreview ? "" : "upload-empty"}`} role="tabpanel">
          {activePreview?.type === "image" ? (
            <Image
              src={activePreview.url}
              alt="ตัวอย่างรูปที่เลือก"
              fill
              sizes="390px"
              priority
              unoptimized={activePreview.url.startsWith("blob:")}
            />
          ) : activePreview?.type === "video" ? (
            <video src={activePreview.url} controls muted playsInline />
          ) : (
            <div className="upload-empty-state">
              <Video size={38} />
              <strong>เพิ่มวิดีโอของคุณ</strong>
              <small>เลือกคลิปสนุก ๆ จากเครื่องของคุณ</small>
            </div>
          )}
          <label className={`preview-action ${activePreview ? "" : "preview-action-empty"}`}>
            <Upload size={17} /> {activePreview ? "เปลี่ยน" : "เลือก"}{mode === "photo" ? "รูป" : "วิดีโอ"}
            <input
              key={mode}
              type="file"
              accept={mode === "photo" ? "image/*" : "video/*"}
              onChange={handleMediaChange}
            />
          </label>
        </div>

        <label className="field-label">
          ชื่อที่ใช้แสดงบนจอ
          <input value={nickname} onChange={(event) => setNickname(event.target.value)} maxLength={20} />
        </label>

        <label className="consent-row">
          <button type="button" className={accepted ? "check-box checked" : "check-box"} onClick={() => setAccepted(!accepted)} aria-label="ยอมรับเงื่อนไข">
            {accepted && <Check size={14} strokeWidth={4} />}
          </button>
          <span>ยอมรับเงื่อนไขการใช้งาน<br /><small>(ห้ามส่งภาพที่ไม่เหมาะสม)</small></span>
        </label>

        {submitError && <p className="submit-error" role="alert">{submitError}</p>}
        <button type="button" disabled={!canSubmit || submitting} className="primary-brush-button" onClick={() => void handleSubmit()}>
          <Upload size={20} /> {submitting ? "กำลังส่ง..." : "ส่งขึ้นจอใหญ่"}
        </button>

        <div className="footer-saying">GOOD BEER<br /><strong>BETTER PEOPLE</strong><span>♢♢</span></div>
      </section>
    </MobileShell>
  );
}
