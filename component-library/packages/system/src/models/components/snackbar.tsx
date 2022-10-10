import { ThemeSize, ThemeVariant } from '@invenio/theme';
import { RefObject } from 'react';

type SnacksProps = {
  id: string;
  value: string;
};

export type SnackbarProps = {
  snacks: SnacksProps[];
  variant?: ThemeVariant;
  size?: ThemeSize;
  fontSize?: ThemeSize;
  innerRef?: RefObject<HTMLUListElement>;
  intervalMS?: number;
};
