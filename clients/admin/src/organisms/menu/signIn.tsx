import { useRouter } from "next/router";
import React from "react";
import { Icon } from "../../atoms/icon";

export const SignIn = () => {
  const { push } = useRouter();
  return (
    <Icon
      onClick={() => push({ pathname: "auth", query: "signIn=true" })}
      icon="sign-in-alt"
      label="Sign in"
    />
  );
};
