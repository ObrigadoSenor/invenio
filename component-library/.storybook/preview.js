import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from '@invenio/theme';
import { lightTheme } from './theme';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Story />
      </Container>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
