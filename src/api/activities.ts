import { apiClient } from "@/lib/apiClient";
import type { ApiResponse } from "@/types/api";
import type { ActivityItem } from "@/types/event";

export const activityApi = {
  getAll: async (): Promise<ActivityItem[]> => {
    const { data } = await apiClient.get<ApiResponse<ActivityItem[]>>("/api/v1/event/activities");
    return data.data;
  },
};
