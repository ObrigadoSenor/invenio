import { defaultTheme } from "./defaultTheme";
import { darkTheme as dark } from "./darkTheme";
import { lightTheme as light } from "./lightTheme";

export const darkTheme = { ...defaultTheme, ...dark };
export const lightTheme = { ...defaultTheme, ...light };
