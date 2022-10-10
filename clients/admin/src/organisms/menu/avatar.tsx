import { Avatar, Box, List, ListItemProps, ListProps } from "@invenio/system";
import { useRouter } from "next/router";
import { head, split, tail } from "ramda";
import React, { useEffect, useState } from "react";
import { getAuthUser } from "../../../redux/slices/authentication";
import dayjs from "dayjs";
import { getTokenFromCookie } from "../../utils/cookies";
import { useSignOutUser } from "../../hooks/auth/useSignOutUser";

const signedInListContent: ListProps["list"] = [
  {
    label: "Profile",
    id: "profile",
    pathname: "/admin/profile",
  },
  {
    label: "Sign out",
    id: "signout",
    action: "signout",
  },
];

const signedOutListContent: ListProps["list"] = [
  {
    label: "Sign up",
    id: "signup",
    pathname: "/auth?signUp=true",
  },
  {
    label: "Sign in",
    id: "signin",
    pathname: "/auth?signIn=true",
  },
];

export const AvatarBlob = () => {
  const token = getTokenFromCookie();
  const user = getAuthUser();
  const { onSignOut } = useSignOutUser();
  const [open, setOpen] = useState(false);
  const { push, pathname, query } = useRouter();

  const onNavigate = ({ pathname, action }: Partial<ListItemProps>) => {
    if (action === "signout") {
      onSignOut();
    }
    if (pathname) {
      const splitPathname = split("?", pathname);
      const query = tail(splitPathname).join();
      const path = head(splitPathname);
      push({ pathname: path, query });
    }
  };

  useEffect(() => {
    open && setOpen(false);
  }, [pathname, query]);

  return user ? (
    <Avatar
      variant="accent"
      size="sm"
      user={{ ...user, createdAt: dayjs(user?.createdAt).toString() }}
      open={open}
      setOpen={() => setOpen(!open)}
      childs={
        <Box>
          <List
            list={token ? signedInListContent : signedOutListContent}
            onNavigate={(props) => onNavigate({ ...props })}
          />
        </Box>
      }
    />
  ) : null;
};
