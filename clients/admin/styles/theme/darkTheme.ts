import { ThemeColorsBase, ThemeTypes } from "@invenio/theme";

const colors: ThemeColorsBase = {
  primary: "rgba(206, 212, 218)",
  secondary: "rgba(233, 236, 239, 1)",
  accent: "rgba(180, 180, 180, 1)",
  bg: {
    base: "rgba(33, 37, 41, 1)",
    optional: "rgba(52, 58, 64, 1)",
  },
  text: {
    base: "rgba(248, 249, 250, 1)",
    optional: "rgba(206, 212, 218, 1)",
  },
  error: {
    bg: "rgba(140, 47, 57, 1)",
    text: "rgba(206, 212, 218, 1)",
  },
  disabled: {
    bg: "rgba(23, 27, 31, 0.25)",
    text: "rgba(52, 58, 64, 1)",
  },
  shadow: {
    base: "rgba(73, 80, 87, 0.65)",
    optional: "rgba(73, 80, 87, 0.85)",
  },
};

export const darkTheme: ThemeTypes = {
  units: {
    spacings: "rem",
    fontSize: "rem",
    border: "em",
    height: "rem",
    width: "%",
  },
  colors,
  buttons: {
    primary: {
      colors: {
        base: {
          bg: colors.bg.optional,
          text: colors.text.base,
          border: colors.bg.optional,
        },
        hover: {
          bg: colors.bg.base,
          text: colors.text.optional,
          border: colors.shadow.optional,
        },
        disabled: {
          bg: colors.disabled.bg,
          text: colors.disabled.text,
          border: colors.disabled.bg,
        },
      },
    },
    secondary: {
      colors: {
        base: {
          bg: colors.secondary,
          text: colors.text.base,
          border: colors.secondary,
        },
        hover: {
          bg: colors.accent,
          text: colors.text.base,
          border: colors.accent,
        },
        disabled: {
          bg: colors.disabled.bg,
          text: colors.disabled.text,
          border: colors.disabled.bg,
        },
      },
    },
    accent: {
      colors: {
        base: {
          bg: colors.accent,
          text: colors.text.base,
          border: colors.accent,
        },
        hover: {
          bg: colors.secondary,
          text: colors.text.base,
          border: colors.secondary,
        },
        disabled: {
          bg: colors.disabled.bg,
          text: colors.disabled.text,
          border: colors.disabled.bg,
        },
      },
    },
  },
  images: {
    aspectRatio: {
      "2-3": 150,
      "21-9": 42.7,
      "30-9": 30,
    },
  },
  inputs: {
    primary: {
      colors: {
        base: {
          bg: colors.bg.base,
          text: colors.text.base,
          border: colors.text.base,
        },
        disabled: {
          bg: colors.disabled.bg,
          text: colors.disabled.text,
          border: colors.disabled.bg,
        },
      },
    },
    secondary: {
      colors: {
        base: {
          bg: colors.secondary,
          text: colors.text.base,
          border: colors.secondary,
        },
        disabled: {
          bg: colors.disabled.bg,
          text: colors.disabled.text,
          border: colors.disabled.bg,
        },
      },
    },
    accent: {
      colors: {
        base: {
          bg: colors.accent,
          text: colors.text.base,
          border: colors.accent,
        },
        disabled: {
          bg: colors.disabled.bg,
          text: colors.disabled.text,
          border: colors.disabled.bg,
        },
      },
    },
  },
};
