import { ReactElement } from 'react';

export type IIconProps = {
  icon: ReactElement | JSX.Element;
  size?: 's' | 'm' | 'l' | 'xl';
  color?: string;
  disabled?: boolean;
};
