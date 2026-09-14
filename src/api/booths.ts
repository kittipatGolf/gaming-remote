import { apiClient } from "@/lib/apiClient";
import type { ApiResponse } from "@/types/api";
import type { Booth } from "@/types/event";

export const boothApi = {
  getAll: async (): Promise<Booth[]> => {
    const { data } = await apiClient.get<ApiResponse<Booth[]>>("/api/v1/event/booths");
    return data.data;
  },
  getById: async (id: string): Promise<Booth> => {
    const { data } = await apiClient.get<ApiResponse<Booth>>(`/api/v1/event/booths/${id}`);
    return data.data;
  },
};
