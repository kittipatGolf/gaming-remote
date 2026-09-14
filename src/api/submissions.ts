import { apiClient } from "@/lib/apiClient";
import type { ApiResponse } from "@/types/api";
import type { SubmissionPayload, SubmissionResult } from "@/types/event";

export const submissionApi = {
  create: async (payload: SubmissionPayload): Promise<SubmissionResult> => {
    const { data } = await apiClient.post<ApiResponse<SubmissionResult>>("/api/v1/event/submissions", payload);
    return data.data;
  },
};
