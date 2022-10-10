import { Button } from "@invenio/core";
import { useSignInUser } from "../../hooks/auth/useSignInUser";
import { Wrapper } from "./authenticationStyle";
import { GenerateAuthInput } from "./generateInput";

export const SignIn = () => {
  const { onSignIn } = useSignInUser();

  return (
    <Wrapper>
      <li>
        <GenerateAuthInput
          id="email"
          label="Your email"
          placeholder="Your email"
          type="email"
          autoComplete="email"
        />
      </li>
      <li>
        <GenerateAuthInput
          id="password"
          label="Your password"
          placeholder="Your password"
          type="password"
          autoComplete="current-password"
        />
      </li>
      <Button label="Sign in" size="md" onClick={() => onSignIn()} />
    </Wrapper>
  );
};
