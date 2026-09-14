import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10_000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      error.message = "ไม่สามารถเชื่อมต่อระบบได้ กรุณาลองใหม่อีกครั้ง";
    } else if (error.response.status >= 500) {
      error.message = "ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง";
    } else if (error.response.data?.message) {
      error.message = error.response.data.message;
    }
    return Promise.reject(error);
  },
);
