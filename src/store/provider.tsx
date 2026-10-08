"use client";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "./index";

interface StoreProviderProps {
  children: ReactNode;
}

/**
 * Isolated Redux Provider Client Component.
 * Initializes the store once per client tree using lazy state initialization.
 * This guarantees the store is never shared across SSR requests and adheres to React 19 rules.
 * Server Components passed via `children` remain pure Server Components.
 */
export function StoreProvider({ children }: StoreProviderProps) {
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
