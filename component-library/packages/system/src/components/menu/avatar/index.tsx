import { slice } from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { AvatarProps } from '../../../models/components';

const Container = styled.div<Partial<AvatarProps>>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ClickableArea = styled.button<Partial<AvatarProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Initials = styled.span<Partial<AvatarProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${({ variant = 'secondary', theme }) => `1px solid ${theme.colors[variant]}`};
  height: ${({ size = 'sm', theme }) => `${theme.heights[size]}${theme.units.height}`};
  width: ${({ size = 'sm', theme }) => `${theme.heights[size]}${theme.units.height}`};

  white-space: nowrap;
  color: ${({ variant = 'secondary', theme }) => theme.colors[variant]};
  cursor: pointer;
  font-size: ${({ size = 'sm', theme }) => `${theme.fontSize[size]}${theme.units.fontSize}`};

  &:after {
    position: absolute;
    right: 0;
    transform: ${({ open = false }) => `scale(1.75) rotate(${open ? -90 : 90}deg)`};
    content: '›';
  }
`;

const FullName = styled.span<Partial<AvatarProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => `${theme.spacings.sm}${theme.units.spacings}`};
  color: ${({ variant = 'accent', theme }) => theme.colors[variant]};
  cursor: pointer;
  font-size: ${({ size = 'sm', theme }) => `${theme.fontSize[size]}${theme.units.fontSize}`};
  transition: all 2s;
`;

const getInitials = (user: AvatarProps['user']) => {
  const firstName = slice(0, 1, user?.firstName || '');
  const surName = slice(0, 1, user?.surName || '');
  return `${firstName} ${surName}`;
};

const getFullName = (user: AvatarProps['user']) => {
  return `${user?.firstName} ${user?.surName}`;
};

export const Avatar = ({ childs, user, ...rest }: AvatarProps): JSX.Element => {
  return (
    <Container {...rest}>
      <ClickableArea onClick={() => rest.setOpen()}>
        <Initials {...rest}>{user ? getInitials(user) : null}</Initials>
        <FullName {...rest}>{user ? getFullName(user) : null}</FullName>
      </ClickableArea>
      {rest.open ? childs : null}
    </Container>
  );
};
