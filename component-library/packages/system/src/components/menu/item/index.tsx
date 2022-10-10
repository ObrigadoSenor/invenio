import React from 'react';
import styled from 'styled-components';
import { ItemProps } from '../../../models/components';

const Container = styled.div<Partial<ItemProps>>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ClickableArea = styled.button<Partial<ItemProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.base};
`;

export const Item = ({ childs, label, icon, ...rest }: ItemProps): JSX.Element => {
  return (
    <Container {...rest}>
      <ClickableArea onClick={() => rest.setOpen()}>
        {label}
        {icon}
      </ClickableArea>
      {rest.open ? childs : null}
    </Container>
  );
};
