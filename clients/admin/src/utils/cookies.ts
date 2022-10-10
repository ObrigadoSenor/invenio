import Cookies from "js-cookie";
import { parse } from "cookie";

import { SystemThemeVariant } from "../../redux/slices/system";

type CookieKeys = "token" | "theme" | "userId";

type CookieGet = {
  key: CookieKeys;
};

type CookieSet = CookieGet & {
  value: string;
};

export const parseCookie = ({ cookie }: { cookie: string }) => parse(cookie);

export const getCookie = ({ key }: CookieGet) => Cookies?.get(key);

export const setCookie = ({ key, value }: CookieSet) =>
  Cookies?.set(key, value);

export const removeCookie = ({ key }: CookieGet) =>
  Cookies?.set(key, "", { expires: new Date(0) });

export const getTokenFromCookie = () => getCookie({ key: "token" });

export const getThemeFromCookie = () =>
  getCookie({ key: "theme" }) as SystemThemeVariant;
