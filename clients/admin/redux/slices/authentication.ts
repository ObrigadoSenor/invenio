import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from "dayjs";
import { WritableDraft } from "immer/dist/internal";
import { getStore } from "../store";
import { UserModelTypes } from "./../../../../authentication/model/userModel";

export type AuthenticationInputValueKeys =
  | "email"
  | "password"
  | "firstName"
  | "surName";

type AuthenticationInputValues = {
  [id in AuthenticationInputValueKeys]?: {
    value: string;
  };
};

export type AuthenticationUser = Partial<
  Pick<UserModelTypes, "id" | "firstName" | "surName" | "createdAt" | "email">
>;

type AuthenticationStateType = {
  inputValues: AuthenticationInputValues;
  user: AuthenticationUser;
  loggedIn?: boolean;
};

const initialState: AuthenticationStateType = {
  inputValues: {},
  user: {},
};

export const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthenticationInputs(
      state,
      {
        payload,
      }: PayloadAction<{ id: AuthenticationInputValueKeys; value: string }>
    ) {
      state.inputValues[payload.id] = {
        value: payload.value,
      };
    },
    setAuthenticationUser(
      state,
      { payload }: PayloadAction<{ user: AuthenticationUser }>
    ) {
      state.user = payload.user;
    },
    setAuthenticationLoggedIn(
      state,
      { payload }: PayloadAction<{ loggedIn: boolean }>
    ) {
      state.loggedIn = payload.loggedIn;
    },
    setAuthenticationUserInputs(
      state,
      {
        payload,
      }: PayloadAction<{
        id: keyof Required<AuthenticationUser>;
        value: string | Dayjs;
      }>
    ) {
      state.user[payload.id] = payload.value as string & WritableDraft<Dayjs>;
    },
  },
});

export const {
  setAuthenticationInputs,
  setAuthenticationUser,
  setAuthenticationLoggedIn,
  setAuthenticationUserInputs,
} = authenticationReducer.actions;
export const authentication = authenticationReducer.reducer;

// SELECTORS
export const getAuthentication = () => getStore()?.authentication;
export const getAuthInputs = () => getAuthentication()?.inputValues;
export const getAuthLoggedIn = () => getAuthentication()?.loggedIn;

export const getAuthInputById = (id: AuthenticationInputValueKeys) =>
  getAuthInputs()[id];
export const getAuthUser = () => getAuthentication()?.user;
