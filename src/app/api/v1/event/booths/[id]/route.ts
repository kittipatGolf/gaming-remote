import { booths } from "@/mock-data/event";
import { mockError, mockSuccess, simulateLatency } from "@/lib/mockApi";

export async function GET(_request: Request, context: RouteContext<"/api/v1/event/booths/[id]">) {
  await simulateLatency();
  const { id } = await context.params;
  const booth = booths.find((item) => item.id.toLowerCase() === id.toLowerCase());
  return booth ? mockSuccess(booth) : mockError("ไม่พบข้อมูลบูธ", 404);
}
