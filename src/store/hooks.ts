"use client";

import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./index";

/**
 * Use throughout your client components instead of plain `useDispatch` and `useSelector`.
 * These hooks are pre-typed with your Application state and dispatch types.
 */
export const useAppDispatch: () => AppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector.withTypes<RootState>();
export const useAppStore: () => AppStore = useStore.withTypes<AppStore>();
