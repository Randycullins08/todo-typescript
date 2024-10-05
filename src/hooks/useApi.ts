import { useCallback, useState } from "react";
import { ApiOptions, ApiResponse } from "../interfaces/interfaces";

export const useApi = <T>(): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const BASE_URL = "http://127.0.0.1:5000";

  const fetchData = useCallback(
    async (endpoint: string, options: ApiOptions = {}): Promise<T | null> => {
      setLoading(true);

      const { method = "GET", body } = options;
      const defaultHeaders = {
        "Content-Type": "application/json",
      };

      const fetchOptions: RequestInit = {
        method,
        headers: defaultHeaders,
      };

      if (body) {
        fetchOptions.body = JSON.stringify(body);
      }

      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();

        setData(result);
        return result;
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
        setData(null);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, error, loading, fetchData };
};
