import { useEffect } from "react";
import { batch } from "react-redux";
import {
  AuthenticationUser,
  setAuthenticationUser,
} from "../../../redux/slices/authentication";
import { setSnackbarErrors } from "../../../redux/slices/errors";
import { setSystemLoading } from "../../../redux/slices/system";
import { useDataFetch } from "../fetch/useDataFetch";

type UseGetUserFromToken = {
  user: AuthenticationUser;
};

export const useGetUserFromToken = <T,>(token: string) => {
  const { fetch, dispatch } = useDataFetch();

  useEffect(() => {
    const getUserFromToken = async () => {
      if (!token) {
        return;
      }
      dispatch(setSystemLoading({ loading: true }));

      const { user, error, status } = await fetch<UseGetUserFromToken>({
        url: "http://localhost:3002/auth/getUserFromToken",
        method: "get",
        headers: {
          token,
        },
      });

      dispatch(setSystemLoading({ loading: false }));
      batch(() => {
        user && dispatch(setAuthenticationUser({ user }));
        status !== 200 && dispatch(setSnackbarErrors({ errors: error || [] }));
      });
    };
    getUserFromToken();
  }, [token]);
};
