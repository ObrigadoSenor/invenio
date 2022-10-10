// UNITS
type ThemeUnitsBase = {
  units: {
    spacings: string;
    fontSize: string;
    border: string;
    height: string;
    width: string;
  };
};

type ThemeUnits = ThemeUnitsBase;

//COLORS
export type ThemeColorsBase = {
  primary: string;
  secondary: string;
  accent: string;
  bg: {
    base: string;
    optional: string;
  };
  text: {
    base: string;
    optional: string;
  };
  error: {
    bg: string;
    text: string;
  };
  disabled: {
    bg: string;
    text: string;
  };
  shadow: {
    base: string;
    optional: string;
  };
};

type ThemeColors = {
  colors: ThemeColorsBase;
};

type ThemeInnerColors = {
  text: string;
  bg: string;
  border: string;
};

type ThemeColor = ThemeColors;

//SIZES
type ThemeSpacings = {
  spacings: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

type ThemeBorderRadius = {
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

type ThemeHeights = {
  heights: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

type ThemeSizes = ThemeSpacings & ThemeBorderRadius & ThemeHeights;

// FONTS
type ThemeFontSizes = {
  fontSize: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

type ThemeFontWeights = {
  fontWeight: {
    light: number;
    medium: number;
    bold: number;
  };
};

type ThemeFonts = ThemeFontSizes & ThemeFontWeights;

// BUTTONS
type ThemeInnerButtonProps = {
  colors: {
    base: ThemeInnerColors;
    hover: ThemeInnerColors;
    disabled: ThemeInnerColors;
  };
};

type ThemeButtons = {
  buttons: {
    primary: ThemeInnerButtonProps;
    secondary: ThemeInnerButtonProps;
    accent: ThemeInnerButtonProps;
  };
};

// IMAGES
type ThemeInnerImageProps = {
  aspectRatio: {
    '2-3': number;
    '21-9': number;
    '30-9': number;
  };
};
type ThemeImages = {
  images: ThemeInnerImageProps;
};

// INPUTS
type ThemeInnerInputProps = {
  colors: {
    base: ThemeInnerColors;
    disabled: ThemeInnerColors;
  };
};
type ThemeInputs = {
  inputs: {
    primary: ThemeInnerInputProps;
    secondary: ThemeInnerInputProps;
    accent: ThemeInnerInputProps;
  };
};

// ALL
export type ThemeTextVariants = 'p' | 'span' | 'label' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ThemeWeightVariants = 'light' | 'medium' | 'bold';

export type ThemeSize = 'sm' | 'md' | 'lg' | 'xl';

export type ThemeVariant = 'primary' | 'secondary' | 'accent';

export type DefaultThemeTypes = ThemeSizes & ThemeFonts;

export type ThemeTypes = ThemeUnits & ThemeColor & ThemeButtons & ThemeImages & ThemeInputs;

export type Theme = DefaultThemeTypes & ThemeTypes;
