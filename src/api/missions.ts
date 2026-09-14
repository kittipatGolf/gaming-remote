import { apiClient } from "@/lib/apiClient";
import type { ApiResponse } from "@/types/api";
import type { MissionItem } from "@/types/event";

export const missionApi = {
  getAll: async (): Promise<MissionItem[]> => {
    const { data } = await apiClient.get<ApiResponse<MissionItem[]>>("/api/v1/event/missions");
    return data.data;
  },
};
