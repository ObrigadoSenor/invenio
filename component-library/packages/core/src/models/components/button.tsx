import { RefObject, FormEvent } from 'react';
import { ThemeVariant, ThemeSize } from '@invenio/theme';

export type ButtonProps = {
  label: string;
  onClick: (event: FormEvent<HTMLButtonElement>) => void;
  variant?: ThemeVariant;
  size?: ThemeSize;
  fontSize?: ThemeSize;
  innerRef?: RefObject<HTMLButtonElement>;
  disabled?: boolean;
  hideBorder?: boolean;
};
