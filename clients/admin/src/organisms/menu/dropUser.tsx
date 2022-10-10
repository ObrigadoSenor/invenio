import React from "react";
import { Icon, IconType } from "../../atoms/icon";
import { useDropUser } from "../../hooks/user/useDropUser";

type DropUserType = Partial<IconType>;

export const DropUser = (props: DropUserType) => {
  const { onDropUser } = useDropUser();
  return (
    <Icon
      onClick={() => onDropUser()}
      icon="trash-alt"
      label="Delete account"
      {...props}
    />
  );
};
