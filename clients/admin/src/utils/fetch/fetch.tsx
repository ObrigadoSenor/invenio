import axios from "axios";
import { AuthenticationErrorModel } from "../../../../../authentication/model/errorModel";
import { AuthenticationUser } from "../../../redux/slices/authentication";

type FetchWithAxios = {
  url: string;
  data?: any;
  method?: "get" | "post";
  headers?: {
    [key in string]: string;
  };
};

type FetchWithAxiosReturn = {
  error?: AuthenticationErrorModel[];
  status: number;
};

export const fetchWithAxios = <T,>({
  url,
  method = "get",
  headers,
  data,
}: FetchWithAxios): Promise<T & FetchWithAxiosReturn> =>
  axios[method](url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    data: {
      ...data,
    },
  })
    .then(({ data, status }) => {
      return {
        ...data,
        status,
      };
    })
    .catch(({ response }) => {
      const { status, data } = response || {};
      return { ...data, status };
    });

type GetUserFromServerSide = {
  token: string;
};

export const getUserFromServerSide = ({ token }: GetUserFromServerSide) =>
  fetchWithAxios<{
    user: AuthenticationUser;
  }>({
    url: "http://localhost:3002/auth/getUserFromToken",
    method: "get",
    headers: {
      token,
    },
  }).then(({ user }) => user);
type VerifyTokenFromServerSide = {
  token: string;
};

export const verifyTokenFromServerSide = ({
  token,
}: VerifyTokenFromServerSide) =>
  fetchWithAxios<{
    success: boolean;
  }>({
    url: "http://localhost:3002/auth/verifyToken",
    method: "get",
    headers: {
      token,
    },
  }).then(({ success }) => ({
    success,
  }));
