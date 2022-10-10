import { useRef, useEffect } from "react";
import styled from "styled-components";
import { getContentById } from "../../../redux/slices/workspaces";
import { useDropWorkspaceContent } from "../../../src/hooks/workspaces/useDropWorkspaceContent";
import { useWorkspaceContent } from "../../../src/hooks/workspaces/useWorkspaceContent";
import { WorkspaceContentImage } from "../../../src/organisms/workspace/workspaceContentImage";
import { WorkspaceContentText } from "../../../src/organisms/workspace/workspaceContentText";
import { useReOrderList } from "../../hooks/workspaces/useReOrderList";
import { WorkspaceContentWrapper } from "../workspace/workspaceContentWrapper";

const ContentContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

type PIDContentType = {
  token: string;
  userId: string;
  workspaceId: string;
};

const PIDContent = ({ token, userId, workspaceId }: PIDContentType) => {
  const contentContainerRef = useRef<HTMLUListElement>(null);
  const { children = [] } = getContentById(workspaceId);

  const { onReOrderList, reOrderedChildren, dragTo, dragFrom, dropped } =
    useReOrderList({
      containerRef: contentContainerRef,
      childrenToRender: children,
    });

  const { onChangeContentText, onChangeContentOrder } = useWorkspaceContent({
    token,
    userId,
    workspaceId,
  });

  useEffect(() => {
    dropped && onChangeContentOrder({ content: reOrderedChildren });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropped]);

  const { onDropContent } = useDropWorkspaceContent({
    token,
    userId,
    workspaceId,
  });

  const renderChildren = () =>
    reOrderedChildren.map(({ variant, ...rest }, index) => {
      const { _id } = rest;
      let content = <></>;
      switch (variant) {
        case "text":
          content = (
            <WorkspaceContentText
              key={_id}
              {...rest}
              onChangeContentText={({ title = "", description = "" }) =>
                onChangeContentText({
                  title,
                  description,
                  variant,
                  _id,
                })
              }
            />
          );
          break;
        case "image":
          content = <WorkspaceContentImage key={_id} {...rest} />;
          break;
        default:
          return <></>;
      }

      return (
        <WorkspaceContentWrapper
          key={_id}
          id={_id}
          draggingTo={dragTo?.index === index}
          dragging={dragFrom?.id === _id}
          onDropContent={() => onDropContent({ _id })}
          {...onReOrderList({ id: _id })}
        >
          {content}
        </WorkspaceContentWrapper>
      );
    });

  return (
    <ContentContainer ref={contentContainerRef}>
      {renderChildren()}
    </ContentContainer>
  );
};

export default PIDContent;
