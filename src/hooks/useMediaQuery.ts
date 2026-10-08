import { useSyncExternalStore } from "react";

/**
 * Responsive media query hook for client-side viewport matching.
 * Implemented using `useSyncExternalStore` to ensure tearing-free, SSR-safe execution.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") {
        return () => {};
      }
      const media = window.matchMedia(query);
      media.addEventListener("change", callback);
      return () => {
        media.removeEventListener("change", callback);
      };
    },
    () => {
      if (typeof window === "undefined") {
        return false;
      }
      return window.matchMedia(query).matches;
    },
    () => false // Server snapshot
  );
}
