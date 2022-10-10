import React from "react";
import { Icon, IconType } from "../../atoms/icon";
import { useSwitchTheme } from "../../hooks/useSwitchTheme";

type ThemeSwitchProps = Partial<IconType>;

export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const { onSwitchTheme, theme } = useSwitchTheme();
  const isDark = theme === "dark";

  return (
    <Icon
      onClick={() => onSwitchTheme({ theme: isDark ? "light" : "dark" })}
      icon={isDark ? "moon" : "sun"}
      label="Theme"
      {...props}
    />
  );
};
