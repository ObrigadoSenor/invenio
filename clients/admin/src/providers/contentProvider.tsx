import { Loading } from "@invenio/system";
import { ThemeProvider } from "@invenio/theme";
import { cloneElement } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { getSystemLoading, getSystemTheme } from "../../redux/slices/system";
import { Header } from "../../src/organisms/header/header";
import { Snackbar } from "../../src/organisms/snackbar";
import { device } from "../../styles/mediaQueries/mediaQueries";
import { darkTheme, lightTheme } from "../../styles/theme";

const GlobalStyle = createGlobalStyle<any>`
  html, body {
    background-color: ${({ theme }) => theme.colors.bg.base};
    padding: 0;
    margin: 0;
    font-family: Ubuntu;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  * {
      box-sizing: border-box;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const ComponentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) =>
    `${theme.spacings.md}${theme.units.spacings} ${theme.spacings.lg}${theme.units.spacings}`};
  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacings.lg}${theme.units.spacings}`};
  }
  @media ${device.laptop} {
    max-width: 1170px;
  }
`;

export const ContentProvider = ({ children, ...rest }: any) => {
  const systemTheme = getSystemTheme();
  const systemLoading = getSystemLoading();
  const theme = systemTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Container>
        <Header />
        <ComponentContainer>
          {cloneElement(children, { ...rest })}
        </ComponentContainer>
      </Container>
      <Snackbar />
      <Loading loading={systemLoading} />
    </ThemeProvider>
  );
};
