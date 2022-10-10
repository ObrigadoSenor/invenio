import { useRouter } from "next/router";
import { batch } from "react-redux";
import {
  getAuthUser,
  setAuthenticationLoggedIn,
  setAuthenticationUser,
} from "../../../redux/slices/authentication";
import { setErrors, setSnackbarErrors } from "../../../redux/slices/errors";
import { getTokenFromCookie, removeCookie } from "../../utils/cookies";
import { useDataFetch } from "../fetch/useDataFetch";

type UseRouteAuthentication = {
  success: boolean;
};

export const useDropUser = <T,>() => {
  const user = getAuthUser();
  const { push } = useRouter();
  const { fetch, dispatch } = useDataFetch();

  const onDropUser = async () => {
    const token = getTokenFromCookie();

    if (!token || !user.id) {
      return;
    }
    console.log("dropping: ", user);
    const { success, error } = await fetch<UseRouteAuthentication>({
      url: "http://localhost:3002/auth/dropUser",
      method: "post",
      headers: {
        token,
      },
      data: {
        id: user?.id,
      },
    });

    if (success) {
      console.log("success in removing user", `${success}: ${user}`);

      removeCookie({ key: "token" });
      batch(() => {
        dispatch(setAuthenticationUser({ user: {} }));
        dispatch(setAuthenticationLoggedIn({ loggedIn: false }));
        dispatch(setErrors({ errors: [] }));
        dispatch(setSnackbarErrors({ errors: [] }));
      });
      push({ pathname: "/" });
    } else {
      dispatch(setSnackbarErrors({ errors: error || [] }));
    }
  };
  return { onDropUser };
};
