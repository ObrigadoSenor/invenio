import { useDispatch } from "react-redux";
import {
  addWorkspaceContent,
  WorkspaceContentType,
} from "../../../redux/slices/workspaces";
import { useDataFetch } from "../fetch/useDataFetch";

type UseWorkspaceContent = {
  token: string;
  userId: string;
  workspaceId: string;
};

type OnDropContent = {
  _id: string;
};

type DropWorkspaceContentFetch = {
  success: boolean;
  droppedId: string;
  content: WorkspaceContentType;
};

export const useDropWorkspaceContent = ({ ...props }: UseWorkspaceContent) => {
  const dispatch = useDispatch();
  const { fetch } = useDataFetch();

  const onDropContent = async ({ ...rest }: OnDropContent) => {
    console.log("rest", rest);

    const { success, content } = await fetch<DropWorkspaceContentFetch>({
      url: "http://localhost:3003/content/dropWorkspaceContentById",
      method: "post",
      headers: {
        token: props.token,
      },
      data: {
        ...props,
        ...rest,
      },
    });
    console.log("content", content);

    if (success && content) {
      dispatch(
        addWorkspaceContent({ content, workspaceId: props.workspaceId })
      );
    }
  };

  return { onDropContent };
};
