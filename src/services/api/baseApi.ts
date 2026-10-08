import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiConfig } from "@/config/api";

/**
 * Base RTK Query API service.
 * Feature-specific endpoints should be injected into this service via `baseApi.injectEndpoints(...)`.
 * This avoids circular dependencies and maintains a single unified API cache and middleware.
 */
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.baseUrl,
    timeout: apiConfig.timeoutMs,
    prepareHeaders: (headers) => {
      // Set default content and acceptance headers
      headers.set("Accept", "application/json");

      // Note: Future authentication tokens (e.g., Bearer token or HttpOnly cookie handling)
      // can be cleanly hooked in here without exposing secrets.
      return headers;
    },
  }),
  tagTypes: [
    "Auth",
    "User",
    "Destination",
    "Tour",
    "Booking",
    "Review",
    "Wishlist",
  ] as const,
  endpoints: () => ({}),
});
