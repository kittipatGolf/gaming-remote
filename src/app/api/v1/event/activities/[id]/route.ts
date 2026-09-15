import { mockError, mockSuccess, simulateLatency } from "@/lib/mockApi";
import { activities } from "@/mock-data/event";

export async function GET(_request: Request, context: RouteContext<"/api/v1/event/activities/[id]">) {
  await simulateLatency();
  const { id } = await context.params;
  const activity = activities.find((item) => item.id === id);

  return activity ? mockSuccess(activity) : mockError("ไม่พบข้อมูลโมเมนต์", 404);
}
