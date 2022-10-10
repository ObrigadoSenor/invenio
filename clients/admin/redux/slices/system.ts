import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStore } from "../store";

export type SystemThemeVariant = "dark" | "light";

export type SystemStateType = {
  loading?: boolean;
  theme?: SystemThemeVariant;
};

const initialState: SystemStateType = {};

export const systemReducer = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSystemLoading(
      state,
      { payload }: PayloadAction<{ loading: SystemStateType["loading"] }>
    ) {
      state.loading = payload.loading;
    },
    setSystemTheme(
      state,
      { payload }: PayloadAction<{ theme: SystemStateType["theme"] }>
    ) {
      state.theme = payload.theme;
    },
  },
});

export const { setSystemLoading, setSystemTheme } = systemReducer.actions;
export const system = systemReducer.reducer;

// SELECTORS
export const getSystem = () => getStore().system;
export const getSystemLoading = () => getSystem()?.loading;
export const getSystemTheme = () => getSystem()?.theme;
