import { Theme } from '../..';

export type IThemeProvider = {
  theme: Theme;
  children: JSX.Element | JSX.Element[] | null;
};
