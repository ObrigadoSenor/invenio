import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  getSystemTheme,
  setSystemTheme,
  SystemThemeVariant,
} from "../../redux/slices/system";
import { setCookie } from "../utils/cookies";

type OnSwitchTheme = {
  theme: SystemThemeVariant;
};

export const useSwitchTheme = () => {
  const theme = getSystemTheme();
  const dispatch = useDispatch();

  const onSwitchTheme = useCallback(
    ({ theme }: OnSwitchTheme) => {
      dispatch(setSystemTheme({ theme }));
      setCookie({ key: "theme", value: theme });
    },
    [theme]
  );

  return { onSwitchTheme, theme };
};
