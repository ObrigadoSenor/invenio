import { useEffect } from "react";
import { batch } from "react-redux";
import {
  setAuthenticationLoggedIn,
  setAuthenticationUser,
} from "../../redux/slices/authentication";
import { setSystemTheme } from "../../redux/slices/system";
import { store } from "../../redux/store";

export const InitFetchProvider = ({
  children,
  theme,
  verifiedToken,
  user,
  firstLoad,
}: any) => {
  useEffect(() => {
    if (firstLoad) {
      batch(() => {
        store.dispatch(setSystemTheme({ theme }));
        store.dispatch(setAuthenticationUser({ user }));
        store.dispatch(setAuthenticationLoggedIn({ loggedIn: verifiedToken }));
      });
    }
  }, [firstLoad]);

  return children;
};
