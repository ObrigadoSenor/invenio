import { RefObject, ChangeEvent } from 'react';
import { ThemeVariant, ThemeSize } from '@invenio/theme';

export type InputProps = {
  label: string;
  placeholder: string;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  variant?: ThemeVariant;
  size?: ThemeSize;
  fontSize?: ThemeSize;
  innerRef?: RefObject<HTMLInputElement>;
  disabled?: boolean;
  type?: 'email' | 'text' | 'password';
  autoComplete?: 'given-name' | 'family-name' | 'email' | 'current-password' | 'new-password';
  icons?: {
    start?: JSX.Element;
    end?: JSX.Element;
  };
  hideBorder?: boolean;
  error?: string;
  defaultValue?: string;
};
