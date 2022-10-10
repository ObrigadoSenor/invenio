import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ProgressBarProps } from '../../models';

const slide = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const animation = ({ intervalMS }: ProgressBarProps) =>
  css`
    ${slide} ${intervalMS}ms linear forwards;
  `;

const Container = styled.div<Partial<ProgressBarProps>>`
  background-color: transparent;
  width: 100%;
`;

const Progress = styled.div<Partial<ProgressBarProps>>`
  background-color: ${({ variant = 'secondary', theme }) => theme.colors[variant]};
  height: ${({ theme, size = 'md' }) => `${theme.heights[size] / 3}${theme.units.height}`};
  animation: ${animation};
  border-radius: ${({ theme }) => `${theme.spacings.sm}${theme.units.spacings}`};
`;

export const ProgressBar = ({ innerRef, ...rest }: ProgressBarProps): JSX.Element => {
  return (
    <Container ref={innerRef} {...rest}>
      <Progress {...rest} />
    </Container>
  );
};
