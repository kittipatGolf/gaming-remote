"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useAsyncData<T>(queryFn: () => Promise<T>, queryKey = "default") {
  const queryFnRef = useRef(queryFn);
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    queryFnRef.current = queryFn;
  }, [queryFn]);

  const refetch = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      setData(await queryFnRef.current());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "โหลดข้อมูลไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => void refetch(), 0);
    return () => window.clearTimeout(timer);
  }, [queryKey, refetch]);

  return { data, loading, errorMessage, refetch };
}
