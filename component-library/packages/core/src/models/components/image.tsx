import { ThemeSize } from '@invenio/theme';
import { RefObject } from 'react';

export type ImageProps = {
  src: string;
  lowResSrc: string;
  alt: string;
  aspectRatio?: '2-3' | '21-9' | '30-9';
  borderRadius?: ThemeSize;
  transitionSpeedMultiplierS?: number;
  innerRef?: RefObject<HTMLImageElement>;
};
