import { WorkspaceErrorModel } from "./../../../../workspace/model/errorModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter, reject } from "ramda";
import { getStore } from "../store";
import { AuthenticationErrorModel } from "./../../../../authentication/model/errorModel";

export type SnackbarErrors = Array<
  AuthenticationErrorModel | WorkspaceErrorModel
>;
export type Errors = Array<AuthenticationErrorModel | WorkspaceErrorModel>;

type ErrorIds = AuthenticationErrorModel["id"] | WorkspaceErrorModel["id"];

type ErrorsStateType = {
  errors: Errors;
  snackbarErrors: SnackbarErrors;
};

const initialState: ErrorsStateType = {
  errors: [],
  snackbarErrors: [],
};

export const errorsReducer = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrors(state, { payload }: PayloadAction<{ errors: Errors }>) {
      state.errors = payload.errors;
    },
    removeErrorById(state, { payload }: PayloadAction<{ id: ErrorIds }>) {
      state.errors = filter(({ id }) => id !== payload.id, state.errors);
    },
    setSnackbarErrors(state, { payload }: PayloadAction<{ errors: Errors }>) {
      state.snackbarErrors = payload.errors;
    },
    clearSnackbarErrors(state) {
      state.snackbarErrors = [];
    },
  },
});

export const {
  setErrors,
  setSnackbarErrors,
  removeErrorById,
  clearSnackbarErrors,
} = errorsReducer.actions;
export const errors = errorsReducer.reducer;

// SELECTORS
export const getErrorState = () => getStore().errors || [];
export const getErrors = () => getErrorState()?.errors || [];
export const getSnackbarErrors = () => getErrorState()?.snackbarErrors;
