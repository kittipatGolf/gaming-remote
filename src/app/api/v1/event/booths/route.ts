import { booths } from "@/mock-data/event";
import { mockSuccess, simulateLatency } from "@/lib/mockApi";

export async function GET() {
  await simulateLatency();
  return mockSuccess(booths);
}
