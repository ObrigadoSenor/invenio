import { useDispatch } from "react-redux";
import {
  addWorkspaceContent,
  WorkspaceContentType,
} from "../../../redux/slices/workspaces";
import { useDataFetch } from "../fetch/useDataFetch";

type WorkspaceBannerVariant = "text" | "image" | "audio";

type OnAddWorkspaceBannerContent = {
  token: string;
  variant: WorkspaceBannerVariant;
  userId: string;
  workspaceId: string;
};

type AddWorkspaceBannerContentFetch = {
  success: boolean;
  content: WorkspaceContentType;
};

export const useWorkspaceBanner = () => {
  const dispatch = useDispatch();
  const { fetch } = useDataFetch();

  const onAddWorkspaceBannerContent = async ({
    token,
    variant,
    userId,
    workspaceId,
  }: OnAddWorkspaceBannerContent) => {
    const { success, content } = await fetch<AddWorkspaceBannerContentFetch>({
      url: "http://localhost:3003/content/addWorkspaceContent",
      method: "post",
      headers: {
        token,
      },
      data: {
        variant,
        userId,
        workspaceId,
      },
    });
    if (success) {
      dispatch(addWorkspaceContent({ content, workspaceId }));
    }
  };

  return { onAddWorkspaceBannerContent };
};
