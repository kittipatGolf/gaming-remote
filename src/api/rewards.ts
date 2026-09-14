import { apiClient } from "@/lib/apiClient";
import type { ApiResponse } from "@/types/api";
import type { Reward } from "@/types/event";

export const rewardApi = {
  getAll: async (): Promise<Reward[]> => {
    const { data } = await apiClient.get<ApiResponse<Reward[]>>("/api/v1/event/rewards");
    return data.data;
  },
};
