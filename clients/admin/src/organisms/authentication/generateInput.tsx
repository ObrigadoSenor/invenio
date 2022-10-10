import { Input, InputProps } from "@invenio/core";
import { useRouter } from "next/router";
import { find } from "ramda";
import { useDispatch } from "react-redux";
import {
  ErrorSignInIds,
  ErrorSignUpIds,
} from "../../../../../authentication/model/errorModel";
import {
  setAuthenticationInputs,
  AuthenticationInputValueKeys,
  getAuthInputs,
} from "../../../redux/slices/authentication";
import {
  clearSnackbarErrors,
  getErrors,
  getSnackbarErrors,
  removeErrorById,
} from "../../../redux/slices/errors";

export const GenerateAuthInput = ({
  id,
  ...rest
}: Omit<InputProps, "id" | "onBlur"> & {
  id: AuthenticationInputValueKeys;
}) => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const isSignUp = !!query?.signUp;
  const errors = getErrors();
  const snackbarErrors = getSnackbarErrors();

  const signUpData = getAuthInputs();
  const errorId = `${isSignUp ? "signUp" : "signIn"}.${id}` as
    | ErrorSignInIds
    | ErrorSignUpIds;
  const error = find(({ id }) => id === errorId, errors)?.msg;

  return (
    <Input
      type="text"
      {...rest}
      id={id}
      onBlur={({ target }) =>
        dispatch(setAuthenticationInputs({ id, value: target.value }))
      }
      onChange={() => {
        error !== undefined && dispatch(removeErrorById({ id: errorId }));
        snackbarErrors.length > 0 && dispatch(clearSnackbarErrors());
      }}
      defaultValue={signUpData[id]?.value}
      error={error}
    />
  );
};
