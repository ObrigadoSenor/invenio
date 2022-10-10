import { ThemeSize, ThemeWeightVariants, ThemeTextVariants, ThemeColorsBase } from '@invenio/theme';

export type TextProps = {
  children: string | JSX.Element;
  fontSize?: ThemeSize;
  weight?: ThemeWeightVariants;
  color?: keyof ThemeColorsBase['text'];
  textVariant?: ThemeTextVariants;
  wrap?: 'wrap' | 'nowrap';
  innerRef?: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
  styling?: any;
};
