/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from 'styled-components';
import { Theme } from './themeTypes'; // Import type from above file
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}
