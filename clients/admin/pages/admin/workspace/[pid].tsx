import { Text } from "@invenio/core";
import { NextPageContext } from "next";
import { is } from "ramda";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import {
  addWorkspaceContent,
  WorkspaceContentType,
  WorkspacesType,
} from "../../../redux/slices/workspaces";
import PIDContent from "../../../src/organisms/content/pid";
import { WorkspaceBanner } from "../../../src/organisms/workspace/workspaceBanner";
import { parseCookie } from "../../../src/utils/cookies";
import {
  getWorkspaceByIdFromServerSide,
  getWorkspaceContentByIdFromServerSide,
} from "../../../src/utils/fetch/workspaces";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleStyling = css`
  margin-bottom: ${({ theme }) =>
    `${theme.spacings.lg}${theme.units.spacings}`};
`;

type WorkspaceIdType = {
  workspace: WorkspacesType;
  content: WorkspaceContentType;
  token: string;
  userId: string;
  workspaceId: string;
};

const WorkspaceId = ({
  workspace,
  content,
  token,
  userId,
  workspaceId,
}: WorkspaceIdType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addWorkspaceContent({ content, workspaceId }));
  }, []);

  return (
    <Container>
      <Text styling={TitleStyling} textVariant="h1" fontSize="lg">
        {workspace.title}
      </Text>
      <WorkspaceBanner
        token={token}
        userId={userId}
        workspaceId={workspaceId}
      />
      <PIDContent token={token} userId={userId} workspaceId={workspaceId} />
    </Container>
  );
};

export default WorkspaceId;

export async function getServerSideProps({ req, query }: NextPageContext) {
  let workspace = {} as WorkspacesType;
  let content = {} as WorkspaceContentType;
  const parsedCookie = parseCookie({ cookie: req?.headers?.cookie || "" });
  const { token, userId } = parsedCookie;
  const { pid } = query;

  if (is(String, pid)) {
    workspace =
      (await getWorkspaceByIdFromServerSide({ token, _id: pid })) || {};
    content =
      (await getWorkspaceContentByIdFromServerSide({
        token,
        workspaceId: pid,
        userId,
      })) || {};
  }

  return {
    props: { workspace, content, token, userId, workspaceId: pid },
  };
}
