import { SystemThemeVariant } from "../../redux/slices/system";

export type localStorageKeys = "token" | "theme";

export type ISetLocalStorage = {
  key: localStorageKeys;
  value: string;
};

export const clearLocalStorage = () =>
  isWindowDefined ? window?.localStorage.clear() : null;

export const setLocalStorage = ({ key, value }: ISetLocalStorage) =>
  isWindowDefined ? window?.localStorage.setItem(key, value) : null;

export const getLocalStorage = ({ key }: Pick<ISetLocalStorage, "key">) => {
  return isWindowDefined ? window?.localStorage.getItem(key) : null;
};

export const removeLocalStorageKey = ({
  key,
}: Pick<ISetLocalStorage, "key">) => {
  return isWindowDefined ? window?.localStorage.removeItem(key) : null;
};

export const getThemeFromLocalStorage = (): SystemThemeVariant =>
  getLocalStorage({ key: "theme" }) as SystemThemeVariant;

const isWindowDefined = typeof window !== "undefined";
