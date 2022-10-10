import { Button } from "@invenio/core";
import { useSignUpUser } from "../../hooks/auth/useSignUpUser";
import { Wrapper } from "./authenticationStyle";
import { GenerateAuthInput } from "./generateInput";

export const SignUp = () => {
  const { onSignUp } = useSignUpUser();

  return (
    <Wrapper>
      <li>
        <GenerateAuthInput
          id="firstName"
          label="Your first name"
          placeholder="Your first name"
          autoComplete="given-name"
        />
      </li>
      <li>
        <GenerateAuthInput
          id="surName"
          label="Your surname"
          placeholder="Your surname"
          autoComplete="family-name"
        />
      </li>
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
          autoComplete="new-password"
        />
      </li>
      <Button label="Sign up" size="md" onClick={() => onSignUp()} />
    </Wrapper>
  );
};
