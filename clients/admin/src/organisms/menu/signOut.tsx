import React from "react";
import { Icon, IconType } from "../../atoms/icon";
import { useSignOutUser } from "../../hooks/auth/useSignOutUser";

type SignOutProps = Partial<IconType>;

export const SignOut = (props: SignOutProps) => {
  const { onSignOut } = useSignOutUser();
  return (
    <Icon
      onClick={() => onSignOut()}
      icon="sign-out-alt"
      label="Sign out"
      {...props}
    />
  );
};
