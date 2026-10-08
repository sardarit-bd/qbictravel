import { env } from "@/lib/env";

export const apiConfig = {
  baseUrl: env.NEXT_PUBLIC_API_URL,
  timeoutMs: 30000,
  defaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  retryCount: 2,
} as const;

export type ApiConfig = typeof apiConfig;
