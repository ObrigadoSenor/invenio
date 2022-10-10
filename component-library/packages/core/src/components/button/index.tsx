import React from 'react';
import { ButtonProps } from '../../models';
import { Text } from '../text';
import styled from 'styled-components';

const Btn = styled.button<Partial<ButtonProps>>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  border: ${({ variant = 'primary', hideBorder, theme }) =>
    `${hideBorder ? 0 : 1}px solid ${theme.buttons[variant].colors.base.border}`};
  background-color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.base.bg};
  border-radius: ${({ theme }) => `${theme.borderRadius.md}${theme.units.border}`};
  height: ${({ size = 'md', theme }) => `${theme.heights[size]}${theme.units.height}`};
  font-size: ${({ fontSize = 'md', theme }) => `${theme.fontSize[fontSize]}${theme.units.fontSize}`};
  padding: ${({ theme }) => `0 ${theme.spacings.md}${theme.units.spacings}`};

  > span {
    color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.base.text};
  }
  :disabled {
    cursor: default;
    pointer-events: none;
    border: ${({ variant = 'primary', theme }) => `1px solid ${theme.buttons[variant].colors.disabled.border}`};
    background-color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.disabled.bg};
    color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.disabled.text};
    > span {
      color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.disabled.text};
    }
  }
  :hover:not(:disabled) {
    border: ${({ variant = 'primary', theme }) => `1px solid ${theme.buttons[variant].colors.hover.border}`};
    background-color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.hover.bg};
    color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.hover.text};
    > span {
      color: ${({ variant = 'primary', theme }) => theme.buttons[variant].colors.hover.text};
    }
  }
`;

export const Button = ({ label, fontSize, ...rest }: ButtonProps): JSX.Element => (
  <Btn data-testid="button" {...rest}>
    <Text textVariant="span" fontSize={fontSize}>
      {label}
    </Text>
  </Btn>
);
