import { ThemeTypes, DefaultThemeTypes, Theme, ThemeColorsBase } from '@invenio/theme';

const defaultTheme: DefaultThemeTypes = {
  spacings: {
    sm: 0.5,
    md: 1,
    lg: 2,
    xl: 3,
  },
  borderRadius: {
    sm: 0,
    md: 0.25,
    lg: 0.5,
    xl: 1,
  },
  heights: {
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },
  fontSize: {
    sm: 0.75,
    md: 1,
    lg: 1.25,
    xl: 1.75,
  },
  fontWeight: {
    light: 200,
    medium: 400,
    bold: 700,
  },
};

const colors: ThemeColorsBase = {
  primary: 'rgba(229, 152, 155, 1)',
  secondary: 'rgba(109, 104, 117, 1)',
  accent: 'rgba(181, 131, 141, 1)',
  bg: {
    base: 'rgba(250, 250, 255, 1)',
    optional: 'rgba(245, 245, 250, 1)',
  },
  text: {
    base: 'rgba(33, 37, 41, 1)',
    optional: 'rgba(250, 250, 255, 1)',
  },
  error: {
    bg: 'rgba(178, 58, 72, 1)',
    text: 'rgba(245, 245, 250, 1)',
  },
  disabled: {
    bg: '#8091B3',
    text: '#FFF6F4',
  },
  shadow: {
    base: 'rgba(218, 221, 216, 0.5)',
    optional: 'rgba(218, 221, 216, 0.75)',
  },
};

export const light: ThemeTypes = {
  units: {
    spacings: 'rem',
    fontSize: 'rem',
    border: 'em',
    height: 'rem',
    width: '%',
  },
  colors,
  buttons: {
    primary: {
      colors: {
        base: {
          bg: colors.primary,
          text: colors.text.optional,
          border: colors.primary,
        },
        hover: {
          bg: colors.secondary,
          text: colors.text.optional,
          border: colors.secondary,
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
          text: colors.text.optional,
          border: colors.secondary,
        },
        hover: {
          bg: colors.accent,
          text: colors.text.optional,
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
          text: colors.text.optional,
          border: colors.accent,
        },
        hover: {
          bg: colors.secondary,
          text: colors.text.optional,
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
      '2-3': 150,
      '21-9': 42.7,
      '30-9': 30,
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

export const lightTheme: Theme = { ...defaultTheme, ...light };
