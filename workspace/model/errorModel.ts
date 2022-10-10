export type ErrorUserIds = "user.invalidToken" | "user.authenticationError";

export type ErrorAddWorkspaceIds =
  | "addWorkspace.noTitle"
  | "addWorkspace.noUserId"
  | "addWorkspace.failedInSavingToDb";

export type ErrorGetWorkspacesIds =
  | "getWorkspaces.noUserId"
  | "getWorkspaces.failedInSavingToDb";

export type ErrorDropWorkspaceIds =
  | "dropWorkspace.noId"
  | "dropWorkspace.failedInSavingToDb";

export type ErrorGetWorkspaceByIdIds =
  | "getWorkspaceById.noId"
  | "getWorkspaceById.failedInSavingToDb";

export type ErrorGetWorkspaceContentByIdIds =
  | "getWorkspaceContentById.noId"
  | "getWorkspaceContentById.noUserId"
  | "getWorkspaceContentById.failedInSavingToDb";

export type WorkspaceErrorIds =
  | ErrorUserIds
  | ErrorAddWorkspaceIds
  | ErrorGetWorkspacesIds
  | ErrorDropWorkspaceIds
  | ErrorGetWorkspaceByIdIds
  | ErrorGetWorkspaceContentByIdIds;

export interface WorkspaceErrorModel {
  id: WorkspaceErrorIds;
  msg: string;
  status: number;
}
