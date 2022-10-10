import { isEmpty } from "ramda";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addWorkspace,
  dropWorkspace,
  getAllWorkspaces,
  setWorkspaces,
  WorkspacesType,
} from "../../../redux/slices/workspaces";
import { useDataFetch } from "../fetch/useDataFetch";

type UseWorkspaces = {
  workspaces: WorkspacesType[];
};

type OnAddWorkspace = {
  token: string;
  title: string;
  userId: string;
};

type OnDropWorkspace = {
  token: string;
  userId: string;
  _id: string;
};

type AddWorkspaceFetch = {
  success: boolean;
  workspace: WorkspacesType;
};

type DropWorkspaceFetch = {
  success: boolean;
  droppedId: string;
};

export const useWorkspaces = <T,>({ workspaces }: UseWorkspaces) => {
  const dispatch = useDispatch();
  const workspacesInState = getAllWorkspaces();
  const { fetch } = useDataFetch();

  useEffect(() => {
    dispatch(setWorkspaces({ workspaces }));
  }, [workspaces]);

  const onAddWorkspace = async ({ token, title, userId }: OnAddWorkspace) => {
    const { success, workspace } = await fetch<AddWorkspaceFetch>({
      url: "http://localhost:3003/workspaces/addWorkspace",
      method: "post",
      headers: {
        token,
      },
      data: {
        title,
        userId,
      },
    });
    if (success && !isEmpty(workspace)) {
      dispatch(addWorkspace({ workspace }));
    }
  };

  const onDropWorkspace = async ({ token, _id, userId }: OnDropWorkspace) => {
    const { success, droppedId } = await fetch<DropWorkspaceFetch>({
      url: "http://localhost:3003/workspaces/dropWorkspace",
      method: "post",
      headers: {
        token,
      },
      data: {
        _id,
        userId,
      },
    });
    if (success) {
      dispatch(dropWorkspace({ _id: droppedId }));
    }
  };
  return { workspacesInState, onAddWorkspace, onDropWorkspace };
};
