import { useRouter } from "next/router";
import { batch, useDispatch } from "react-redux";
import {
  setAuthenticationLoggedIn,
  setAuthenticationUser,
} from "../../../redux/slices/authentication";
import { setErrors, setSnackbarErrors } from "../../../redux/slices/errors";
import { removeCookie } from "../../utils/cookies";

export const useSignOutUser = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const onSignOut = async () => {
    push({ pathname: "/" });
    removeCookie({ key: "token" });
    batch(() => {
      dispatch(setAuthenticationUser({ user: {} }));
      dispatch(setAuthenticationLoggedIn({ loggedIn: false }));
      dispatch(setErrors({ errors: [] }));
      dispatch(setSnackbarErrors({ errors: [] }));
    });
  };
  return { onSignOut };
};
