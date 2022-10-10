import React from 'react';
import styled from 'styled-components';
import { TextProps } from '../../models';

const Element = styled.span<Partial<TextProps>>`
  padding: 0;
  margin: 0;
  color: ${({ color = 'base', theme }) => theme.colors.text[color]};
  font-size: ${({ fontSize = 'md', theme }) => `${theme.fontSize[fontSize]}${theme.units.fontSize}`};
  font-weight: ${({ weight = 'medium', theme }) => theme.fontWeight[weight]};
  white-space: ${({ wrap = 'nowrap' }) => wrap};
  cursor: ${({ textVariant = 'span' }) => (textVariant === 'a' ? 'pointer' : 'inherit')};
  ${({ styling }) => styling};
`;

export const Text = ({ children, textVariant = 'span', ...rest }: TextProps): JSX.Element => {
  return (
    <Element as={textVariant} data-testid="text" textVariant={textVariant} {...rest}>
      {children}
    </Element>
  );
};
