import { reverse, slice, uniq } from 'ramda';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SnackbarProps } from '../../models';
import { ProgressBar } from '../progressBar';

const Container = styled.ul<Partial<SnackbarProps>>`
  position: fixed;
  bottom: ${({ theme }) => `${theme.spacings.lg}${theme.units.spacings}`};
  right: ${({ theme }) => `${theme.spacings.lg}${theme.units.spacings}`};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  z-index: 100;
`;

const Snack = styled.li<Partial<SnackbarProps>>`
  position: relative;
  width: fit-content;
  list-style: none;
  margin-left: auto;
  padding: ${({ size = 'md', theme }) => `${theme.spacings[size]}${theme.units.spacings}`};
  background-color: ${({ variant = 'primary', theme }) => theme.colors[variant]};
  border-radius: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  color: ${({ theme }) => theme.colors.text.optional};
  overflow: hidden;
  :not(:last-of-type) {
    margin-bottom: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  }
`;

const Progress = styled.span<Partial<SnackbarProps>>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Snackbar = ({ snacks = [], innerRef, intervalMS = 3000, ...rest }: SnackbarProps): JSX.Element => {
  const [allSnacks, setAllSnacks] = useState<SnackbarProps['snacks']>(snacks);

  useEffect(() => {
    setAllSnacks(snacks);
  }, [snacks]);

  useEffect(() => {
    const interval = setInterval(() => setAllSnacks(slice(1, allSnacks.length, allSnacks)), intervalMS);
    if (allSnacks.length <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [allSnacks]);

  const getSnacks = () =>
    reverse(uniq(allSnacks)).map(({ id, value }, index) => (
      <Snack key={id} {...rest}>
        <span>{value}</span>
        {index === allSnacks?.length - 1 ? (
          <Progress>
            <ProgressBar variant="accent" intervalMS={intervalMS} />
          </Progress>
        ) : null}
      </Snack>
    ));
  return (
    <Container ref={innerRef} {...rest}>
      {getSnacks()}
    </Container>
  );
};
