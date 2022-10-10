import { ThemeSize, ThemeVariant } from '@invenio/theme';
import { RefObject } from 'react';

export type ProgressBarProps = {
  variant?: ThemeVariant;
  size?: ThemeSize;
  innerRef?: RefObject<HTMLDivElement>;
  intervalMS?: number;
};
