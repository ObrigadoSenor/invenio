import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LoadingProps } from '../../models/components/loading';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 1rem; }
  100% { margin-bottom: 0 }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.shadow.base};
  top: 0;
  left: 0;
  z-index: 99;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  bottom: ${({ theme }) => `${theme.spacings.lg}${theme.units.spacings}`};
  left: 50%;
  box-sizing: border-box;
  z-index: 100;
`;

const Dot = styled.div<Partial<LoadingProps>>`
  background-color: ${({ variant = 'primary', theme }) => theme.colors[variant]};
  border-radius: ${({ theme }) => `${theme.borderRadius.xl}${theme.units.border}`};
  width: 1rem;
  height: 1rem;
  margin: 0.4rem;
  animation-delay: ${({ intervalMS }) => `${intervalMS}ms`};
  animation-name: ${BounceAnimation};
  animation-duration: ${({ speedMS = 500 }) => `${speedMS}ms`};
  animation-iteration-count: infinite;
`;

export const Loading = ({ loading = false, intervalMS = 500, ...rest }: LoadingProps): JSX.Element | null => {
  return loading ? (
    <Overlay>
      <Container>
        <Dot {...rest} intervalMS={intervalMS} />
        <Dot {...rest} intervalMS={intervalMS + 100} />
        <Dot {...rest} intervalMS={intervalMS + 200} />
      </Container>
    </Overlay>
  ) : null;
};
