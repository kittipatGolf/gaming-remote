import type { ApiErrorResponse, ApiResponse } from "@/types/api";

export async function simulateLatency(milliseconds = 120) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function mockSuccess<T>(data: T, status = 200) {
  return Response.json({ success: true, data } satisfies ApiResponse<T>, { status });
}

export function mockError(message: string, status = 400) {
  return Response.json({ success: false, message } satisfies ApiErrorResponse, { status });
}
