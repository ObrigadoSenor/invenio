import { Button, Text } from "@invenio/core";
import React from "react";
import styled from "styled-components";
import { useWorkspaceBanner } from "../../hooks/workspaces/useWorkspaceBanner";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacings.sm}${theme.units.spacings}`};
  min-height: ${({ theme }) => `${theme.spacings.lg}${theme.units.spacings}`};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.md}${theme.units.border}`};
  background-color: ${({ theme }) => theme.colors.bg.optional};
  margin-bottom: ${({ theme }) =>
    `${theme.spacings.lg}${theme.units.spacings}`};
`;

type WorkspaceBanner = {
  token: string;
  userId: string;
  workspaceId: string;
};

export const WorkspaceBanner = ({ ...props }: WorkspaceBanner) => {
  const { onAddWorkspaceBannerContent } = useWorkspaceBanner();
  return (
    <Container>
      <Button
        variant="accent"
        label="Add text"
        onClick={() =>
          onAddWorkspaceBannerContent({ ...props, variant: "text" })
        }
      />
      <Button
        variant="accent"
        label="Add image"
        onClick={() =>
          onAddWorkspaceBannerContent({ ...props, variant: "image" })
        }
      />
    </Container>
  );
};
