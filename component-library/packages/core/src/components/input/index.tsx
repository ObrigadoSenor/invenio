import React from 'react';
import styled from 'styled-components';
import { Text } from '..';
import { InputProps } from '../../models';

const Wrapper = styled.span<Partial<InputProps>>`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
`;

const InpWrapper = styled.span<Partial<InputProps>>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;

  height: ${({ size = 'md', theme }) => `${theme.heights[size]}${theme.units.height}`};
  border: ${({ variant = 'primary', disabled, error, hideBorder, theme }) =>
    `${hideBorder && !error ? 0 : 1}px solid ${
      error && !disabled ? theme.colors.error.bg : theme.inputs[variant].colors[disabled ? 'disabled' : 'base'].border
    }`};
  background-color: ${({ variant = 'primary', disabled, theme }) =>
    theme.inputs[variant].colors[disabled ? 'disabled' : 'base'].bg};
  border-radius: ${({ theme }) => `${theme.borderRadius.md}${theme.units.border}`};
  border-bottom-left-radius: ${({ theme, error, disabled }) =>
    `${error && !disabled ? 0 : theme.borderRadius.md}${theme.units.border}`};
  border-bottom-right-radius: ${({ theme, error, disabled }) =>
    `${error && !disabled ? 0 : theme.borderRadius.md}${theme.units.border}`};
`;

const Inp = styled.input<Partial<InputProps>>`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  border: none;
  font-size: ${({ fontSize = 'md', theme }) => `${theme.fontSize[fontSize]}${theme.units.fontSize}`};
  color: ${({ variant = 'primary', disabled, theme }) =>
    theme.inputs[variant].colors[disabled ? 'disabled' : 'base'].text};
  padding: ${({ theme }) => `0 ${theme.spacings.md}${theme.units.spacings}`};
`;

const Icon = styled.span<Partial<InputProps> & { pos: 'start' | 'end' }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${({ theme, size = 'md' }) =>
    `${theme.spacings[size]}${theme.units.spacings} ${theme.spacings.md}${theme.units.spacings}`};
`;

const Error = styled.div<Partial<InputProps>>`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.spacings.sm}${theme.units.spacings} ${theme.spacings.md}${theme.units.spacings}`};
  background-color: ${({ theme }) => theme.colors.error.bg};
  border: ${({ hideBorder, theme }) => `${hideBorder ? 0 : 1}px solid ${theme.colors.error.bg}`};
  border-bottom-left-radius: ${({ theme }) => `${theme.borderRadius.md}${theme.units.border}`};
  border-bottom-right-radius: ${({ theme }) => `${theme.borderRadius.md}${theme.units.border}`};
  > span {
    color: ${({ theme }) => theme.colors.error.text};
  }
`;

export const Input = ({ label, onBlur, onChange, id, innerRef, ...rest }: InputProps): JSX.Element => (
  <Wrapper {...rest}>
    <InpWrapper {...rest}>
      {rest?.icons?.start ? (
        <Icon pos="start" {...rest}>
          {rest?.icons.start}
        </Icon>
      ) : null}
      <Inp
        aria-label={label}
        data-testid="input"
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        name={id}
        ref={innerRef}
        {...rest}
        size={undefined}
      />
      {rest?.icons?.end ? (
        <Icon pos="end" {...rest}>
          {rest?.icons.end}
        </Icon>
      ) : null}
    </InpWrapper>

    {rest?.error && !rest.disabled ? (
      <Error>
        <Text>{rest.error}</Text>
      </Error>
    ) : null}
  </Wrapper>
);
