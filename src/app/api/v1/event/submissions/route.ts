import { mockError, mockSuccess, simulateLatency } from "@/lib/mockApi";
import type { SubmissionPayload, SubmissionResult } from "@/types/event";

export async function POST(request: Request) {
  await simulateLatency(250);
  const payload = await request.json() as Partial<SubmissionPayload>;

  if (!payload.nickname || !payload.mediaType || !payload.fileName) {
    return mockError("ข้อมูลการส่งโมเมนต์ไม่ครบถ้วน", 422);
  }

  const submission: SubmissionResult = {
    nickname: payload.nickname,
    mediaType: payload.mediaType,
    fileName: payload.fileName,
    id: `mock-${Date.now()}`,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };

  return mockSuccess(submission, 201);
}
