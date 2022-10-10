/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { IThemeProvider } from '../models';
import { Theme } from '..';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const ThemeProvider = ({ theme, children }: IThemeProvider): JSX.Element => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
