import { useRouter } from "next/router";
import { batch, useDispatch } from "react-redux";
import {
  getAuthInputs,
  setAuthenticationLoggedIn,
  setAuthenticationUser,
} from "../../../redux/slices/authentication";
import { setErrors, setSnackbarErrors } from "../../../redux/slices/errors";
import { useDataFetch } from "../../hooks/fetch/useDataFetch";
import { setCookie } from "../../utils/cookies";
import { getUserFromServerSide } from "../../utils/fetch/fetch";

type DataFetch = {
  token: string;
};

export const useSignInUser = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const { fetch } = useDataFetch();
  const signInData = getAuthInputs();
  const onSignIn = async () => {
    const { password, email } = signInData;

    const { error, token, status } = await fetch<DataFetch>({
      url: "http://localhost:3002/auth/signIn",
      method: "post",
      data: {
        password: password?.value,
        email: email?.value,
      },
    });

    const success = token && status === 200;

    batch(() => {
      dispatch(setErrors({ errors: error || [] }));
      success && dispatch(setAuthenticationLoggedIn({ loggedIn: true }));
      status !== 400 && dispatch(setSnackbarErrors({ errors: error || [] }));
    });
    const user = await getUserFromServerSide({ token });
    success && user && dispatch(setAuthenticationUser({ user }));

    if (success) {
      setCookie({ key: "token", value: token });
      setCookie({ key: "userId", value: user.id || "" });
      push({ pathname: "/admin" });
    }
  };
  return { onSignIn };
};
