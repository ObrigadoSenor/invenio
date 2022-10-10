import styled from "styled-components";
import { Icon } from "../../atoms/icon";

type WorkspaceContentWrapper = {
  children: JSX.Element | JSX.Element[];
  id: string;
  draggingTo?: boolean;
  dragging?: boolean;
  onDropContent: () => void;
};

const Container = styled.li<Partial<WorkspaceContentWrapper>>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  margin-bottom: ${({ theme }) =>
    `${theme.spacings.md}${theme.units.spacings}`};
  border: ${({ draggingTo, theme }) =>
    `1px solid ${draggingTo ? theme.colors.accent : "transparent"}`};
  background-color: ${({ dragging, theme }) =>
    `${dragging ? theme.colors.accent : theme.colors.bg.optional}`};
  opacity: ${({ dragging }) => `${dragging ? 0.5 : 1}`};
`;

export const WorkspaceContentWrapper = ({
  children,
  id,
  onDropContent,
  ...rest
}: WorkspaceContentWrapper) => {
  const edit = false;
  return (
    <Container draggable id={id} {...rest}>
      <div>{children}</div>
      <Icon icon="trash-alt" onClick={() => onDropContent()} />
    </Container>
  );
};
