import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter, find } from "ramda";

import { getStore } from "../store";
import { WorkspaceModelTypes } from "./../../../../workspace/model/workspaceModel";
import { ContentModelTypes } from "./../../../../workspace/model/contentModel";

export type WorkspaceContentType = ContentModelTypes;
export type WorkspacesType = WorkspaceModelTypes;

export type WorkspacesStateType = {
  workspaces: WorkspacesType[];
  contents: {
    [workspaceId in string]: WorkspaceContentType;
  };
};

const initialState: WorkspacesStateType = {
  workspaces: [],
  contents: {},
};

export const workspacesReducer = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    dropWorkspace(state, { payload }: PayloadAction<{ _id: string }>) {
      state.workspaces = filter(
        (workspace) => workspace._id !== payload._id,
        state.workspaces
      );
    },
    addWorkspace(
      state,
      { payload }: PayloadAction<{ workspace: WorkspacesType }>
    ) {
      state.workspaces = [...state.workspaces, payload.workspace];
    },
    addWorkspaceContent(
      state,
      {
        payload,
      }: PayloadAction<{ content: WorkspaceContentType; workspaceId: string }>
    ) {
      state.contents[payload.workspaceId] = payload.content;
    },
    setWorkspaces(
      state,
      { payload }: PayloadAction<{ workspaces: WorkspacesType[] }>
    ) {
      state.workspaces = payload.workspaces;
    },
  },
});

export const {
  setWorkspaces,
  addWorkspace,
  dropWorkspace,
  addWorkspaceContent,
} = workspacesReducer.actions;
export const workspaces = workspacesReducer.reducer;

// SELECTORS
export const getWorkspaces = () => getStore()?.workspaces;

export const getAllWorkspaces = () => getWorkspaces()?.workspaces;
export const getAllContents = () => getWorkspaces()?.contents;

export const getContentById = (workspaceId: string) =>
  getAllContents()[workspaceId] || {};

export const getWorkspaceById = (_id: string) =>
  find((workspace) => workspace._id === _id, getAllWorkspaces());
