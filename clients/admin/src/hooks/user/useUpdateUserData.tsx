import { isEmpty } from "ramda";
import { useEffect, useRef } from "react";
import {
  AuthenticationUser,
  getAuthUser,
} from "../../../redux/slices/authentication";
import { setSystemLoading } from "../../../redux/slices/system";
import { getTokenFromCookie } from "../../utils/cookies";
import { useDataFetch } from "../fetch/useDataFetch";

type UseRouteAuthentication = {
  success: boolean;
};

const usePreviousState = (state: AuthenticationUser) => {
  const ref = useRef<AuthenticationUser>(state);
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
};

export const useUpdateUserData = <T,>() => {
  const user = getAuthUser();
  const prevUserData = usePreviousState(user);
  const stateChange = user !== prevUserData;

  const { fetch, dispatch } = useDataFetch();

  useEffect(() => {
    const token = getTokenFromCookie();

    const updateUserData = async () => {
      if (!token || isEmpty(user) || !user.id || isEmpty(prevUserData)) {
        return;
      }

      dispatch(setSystemLoading({ loading: true }));
      const { success } = await fetch<UseRouteAuthentication>({
        url: "http://localhost:3002/auth/updateUser",
        method: "post",
        data: {
          ...user,
        },
      });
      dispatch(setSystemLoading({ loading: false }));
    };
    stateChange && updateUserData();
  }, [user, stateChange, prevUserData]);
};
