import axios from "axios";
import { useDispatch } from "react-redux";
import { Errors } from "../../../redux/slices/errors";

type Fetch = {
  url: string;
  data?: any;
  method?: "get" | "post";
  headers?: {
    [key in string]: string;
  };
};

export const useDataFetch = () => {
  const dispatch = useDispatch();
  const fetch = async <FetchProps,>({
    url,
    method = "get",
    headers,
    data,
  }: Fetch): Promise<FetchProps & { error?: Errors; status: number }> => {
    return axios[method](url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...data,
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
  };

  return {
    fetch,
    dispatch,
  };
};
