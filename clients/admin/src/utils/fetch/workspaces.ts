import { fetchWithAxios } from "./fetch";
import {
  WorkspaceContentType,
  WorkspacesStateType,
  WorkspacesType,
} from "../../../redux/slices/workspaces";
type GetWorkspacesFromServerSide = {
  token: string;
  userId: string;
};

export const getWorkspacesFromServerSide = ({
  token,
  userId,
}: GetWorkspacesFromServerSide) =>
  fetchWithAxios<WorkspacesStateType>({
    url: "http://localhost:3003/workspaces/getWorkspaces",
    method: "get",
    headers: {
      token,
    },
    data: {
      userId,
    },
  }).then(({ workspaces }) => workspaces);

type GetWorkspaceByIdFromServerSide = {
  token: string;
  _id: string;
};
export const getWorkspaceByIdFromServerSide = ({
  token,
  _id,
}: GetWorkspaceByIdFromServerSide) =>
  fetchWithAxios<{ workspace: WorkspacesType }>({
    url: "http://localhost:3003/workspaces/getWorkspaceById",
    method: "get",
    headers: {
      token,
    },
    data: {
      _id,
    },
  }).then(({ workspace }) => workspace);

type GetWorkspaceContentByIdFromServerSide = {
  token: string;
  workspaceId: string;
  userId: string;
};
export const getWorkspaceContentByIdFromServerSide = ({
  token,
  workspaceId,
  userId,
}: GetWorkspaceContentByIdFromServerSide) =>
  fetchWithAxios<{ workspaceContent: WorkspaceContentType }>({
    url: "http://localhost:3003/content/getWorkspaceContentById",
    method: "get",
    headers: {
      token,
    },
    data: {
      workspaceId,
      userId,
    },
  }).then(({ workspaceContent }) => workspaceContent);
