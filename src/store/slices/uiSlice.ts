import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CurrencyCode } from "@/types/common";

export interface UiState {
  isSidebarOpen: boolean;
  isSearchModalOpen: boolean;
  isFiltersDrawerOpen: boolean;
  currency: CurrencyCode;
}

const initialState: UiState = {
  isSidebarOpen: false,
  isSearchModalOpen: false,
  isFiltersDrawerOpen: false,
  currency: "USD",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    toggleSearchModal: (state) => {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },
    setSearchModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchModalOpen = action.payload;
    },
    toggleFiltersDrawer: (state) => {
      state.isFiltersDrawerOpen = !state.isFiltersDrawerOpen;
    },
    setFiltersDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isFiltersDrawerOpen = action.payload;
    },
    setCurrency: (state, action: PayloadAction<CurrencyCode>) => {
      state.currency = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  toggleSearchModal,
  setSearchModalOpen,
  toggleFiltersDrawer,
  setFiltersDrawerOpen,
  setCurrency,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
