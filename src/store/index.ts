import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "@/services/api/baseApi";
import { uiReducer } from "./slices/uiSlice";

/**
 * Factory function to create a new Redux store per SSR request or client session.
 * In Next.js App Router, creating a new store instance avoids cross-request state pollution.
 */
export const makeStore = () => {
  // During SSR/prerender in Next.js 16 (with cacheComponents), Redux's internal INIT action
  // invokes Math.random(). We provide a deterministic seed during SSR to prevent Next.js
  // prerender bailouts while restoring original behavior immediately.
  const isServer = typeof window === "undefined";
  const originalRandom = Math.random;

  if (isServer) {
    Math.random = () => 0.123456789;
  }

  try {
    const store = configureStore({
      reducer: {
        ui: uiReducer,
        [baseApi.reducerPath]: baseApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
      devTools: process.env.NODE_ENV !== "production",
    });

    setupListeners(store.dispatch);

    return store;
  } finally {
    if (isServer) {
      Math.random = originalRandom;
    }
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
