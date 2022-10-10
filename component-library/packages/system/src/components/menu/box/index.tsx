import React from 'react';
import styled from 'styled-components';
import { BoxProps } from '../../../models/components';

const Container = styled.div<Partial<BoxProps>>`
  display: flex;
  position: absolute;
  min-width: 40vw;
  top: 130%;
  right: ${({ theme }) => `-${theme.spacings.md}${theme.units.spacings}`};
  background-color: ${({ theme }) => theme.colors.bg.optional};
  border-radius: ${({ theme }) => `${theme.borderRadius.md}${theme.units.border}`};
  padding: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  box-shadow: ${({ theme }) => `5px 5px 5px ${theme.colors.shadow.base}`};
  z-index: 10;
  @media (min-width: 768px) {
    min-width: 15vw;
  }
`;

export const Box = ({ children }: BoxProps): JSX.Element => {
  return <Container>{children}</Container>;
};
