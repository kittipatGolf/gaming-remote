import { apiClient } from "@/lib/apiClient";
import type { ApiResponse } from "@/types/api";
import type { LeaderboardEntry } from "@/types/event";

export const leaderboardApi = {
  getAll: async (): Promise<LeaderboardEntry[]> => {
    const { data } = await apiClient.get<ApiResponse<LeaderboardEntry[]>>("/api/v1/event/leaderboard");
    return data.data;
  },
};
