export type ErrorUserIds = "user.invalidToken" | "user.authenticationError";

export type ErrorAddContentIds =
  | "addWorkspaceContent.noVariant"
  | "addWorkspaceContent.noWorkspaceId"
  | "addWorkspaceContent.noUserId"
  | "addWorkspaceContent.failedInSavingToDb";

export type ErrorDropContentIds =
  | "dropWorkspaceContent.noId"
  | "dropWorkspaceContent.noWorkspaceId"
  | "dropWorkspaceContent.noUserId"
  | "dropWorkspaceContent.failedInSavingToDb";

export type ContentErrorIds =
  | ErrorUserIds
  | ErrorAddContentIds
  | ErrorDropContentIds;

export interface ContentErrorModel {
  id: ContentErrorIds;
  msg: string;
  status: number;
}
