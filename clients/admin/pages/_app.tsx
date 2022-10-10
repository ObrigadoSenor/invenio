import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import { store } from "../redux/store";
import { ContentProvider } from "../src/providers/contentProvider";
import { InitFetchProvider } from "../src/providers/initDataProvider";
import { GetInitialPropsContext } from "../src/utils/commonTypes";
import {
  getUserFromServerSide,
  verifyTokenFromServerSide,
} from "../src/utils/fetch/fetch";
import { serverNavigation } from "../src/utils/functions";

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <InitFetchProvider {...pageProps}>
        <ContentProvider {...pageProps}>
          <Component {...pageProps} />
        </ContentProvider>
      </InitFetchProvider>
    </StoreProvider>
  );
}

export default App;

App.getInitialProps = async ({ ctx }: GetInitialPropsContext) => {
  let user = null;
  const { req, res, pathname } = ctx;
  if (!req) {
    return { pageProps: {} };
  }
  const { cookies } = req || {};
  const { token, theme } = cookies || {};

  const { success: verifiedToken } = await verifyTokenFromServerSide({ token });

  if (verifiedToken) {
    user = await getUserFromServerSide({ token });
  } else if (pathname.includes("/admin") || pathname.includes("/_error")) {
    serverNavigation({ res, Location: "/" });
  }

  return { pageProps: { token, theme, user, verifiedToken, firstLoad: true } };
};
