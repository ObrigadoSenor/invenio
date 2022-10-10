import { useRouter } from "next/router";
import { batch, useDispatch } from "react-redux";
import {
  AuthenticationUser,
  getAuthInputs,
  setAuthenticationLoggedIn,
} from "../../../redux/slices/authentication";
import { setErrors, setSnackbarErrors } from "../../../redux/slices/errors";
import { useDataFetch } from "../fetch/useDataFetch";
import { setCookie } from "../../utils/cookies";
import { getUserFromServerSide } from "../../utils/fetch/fetch";

type DataFetch = {
  token: string;
  user?: AuthenticationUser;
};

export const useSignUpUser = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { fetch } = useDataFetch();
  const signUpData = getAuthInputs();
  const onSignUp = async () => {
    const { firstName, surName, password, email } = signUpData;

    const {
      error = [],
      status,
      token,
    } = await fetch<DataFetch>({
      url: "http://localhost:3002/auth/signup",
      method: "post",
      data: {
        firstName: firstName?.value,
        surName: surName?.value,
        password: password?.value,
        email: email?.value,
      },
    });

    const success = token && status === 200;

    batch(() => {
      dispatch(setErrors({ errors: error }));
      success && dispatch(setAuthenticationLoggedIn({ loggedIn: true }));
      status !== 400 && dispatch(setSnackbarErrors({ errors: error }));
    });

    if (success) {
      const user = await getUserFromServerSide({ token });
      setCookie({ key: "token", value: token });
      setCookie({ key: "userId", value: user.id || "" });
      push({ pathname: "/admin" });
    }
  };
  return { onSignUp };
};
