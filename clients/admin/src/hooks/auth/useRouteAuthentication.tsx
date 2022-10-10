import { useRouter } from "next/router";
import { useEffect } from "react";
import { setSystemLoading } from "../../../redux/slices/system";
import { getTokenFromCookie, removeCookie } from "../../utils/cookies";
import { useDataFetch } from "./useDataFetch";

type UseRouteAuthentication = {
  success: boolean;
};

export const useRouteAuthentication = <T,>() => {
  const { push } = useRouter();
  const { fetch, dispatch } = useDataFetch();

  useEffect(() => {
    const token = getTokenFromCookie();
    const verifyToken = async () => {
      if (!token) {
        push({ pathname: "/" });
        return;
      }
      dispatch(setSystemLoading({ loading: true }));

      const { success } = await fetch<UseRouteAuthentication>({
        url: "http://localhost:3002/auth/verifyToken",
        method: "get",
        headers: {
          token,
        },
      });
      dispatch(setSystemLoading({ loading: false }));

      if (!token || !success) {
        push({ pathname: "/" });
        removeCookie({ key: "token" });
      }
    };
    verifyToken();
  }, []);
};
