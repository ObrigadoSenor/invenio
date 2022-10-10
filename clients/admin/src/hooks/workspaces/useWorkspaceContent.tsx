import { useDispatch } from "react-redux";
import {
  ContentImageTypes,
  ContentTextTypes,
} from "../../../../../workspace/model/contentModel";
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

type OnChangeContentOrder = {
  content: WorkspaceContentType["children"];
};

type OnChangeContentImage = ContentImageTypes & {};

type OnChangeContentText = ContentTextTypes & {};

type AddWorkspaceBannerContentFetch = {
  success: boolean;
  content: WorkspaceContentType;
};

export const useWorkspaceContent = ({ ...props }: UseWorkspaceContent) => {
  const dispatch = useDispatch();
  const { fetch } = useDataFetch();

  const onChangeContentText = async ({ ...rest }: OnChangeContentText) => {
    const { success, content } = await fetch<AddWorkspaceBannerContentFetch>({
      url: "http://localhost:3003/content/updateWorkspaceContent",
      method: "post",
      headers: {
        token: props.token,
      },
      data: {
        ...props,
        ...rest,
      },
    });

    if (success && content) {
      dispatch(
        addWorkspaceContent({ content, workspaceId: props.workspaceId })
      );
    }
  };

  const onChangeContentImage = async ({ ...rest }: OnChangeContentImage) => {
    const { success, content } = await fetch<AddWorkspaceBannerContentFetch>({
      url: "http://localhost:3003/content/updateWorkspaceContent",
      method: "post",
      headers: {
        token: props.token,
      },
      data: {
        ...props,
        ...rest,
      },
    });
    if (success) {
      dispatch(
        addWorkspaceContent({ content, workspaceId: props.workspaceId })
      );
    }
  };

  const onChangeContentOrder = async ({ ...rest }: OnChangeContentOrder) => {
    const { success, content } = await fetch<AddWorkspaceBannerContentFetch>({
      url: "http://localhost:3003/content/updateWorkspaceContentOrder",
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
        addWorkspaceContent({
          content,
          workspaceId: props.workspaceId,
        })
      );
    }
  };

  return { onChangeContentText, onChangeContentImage, onChangeContentOrder };
};
