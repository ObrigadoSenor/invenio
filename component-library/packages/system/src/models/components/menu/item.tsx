import { ThemeSize, ThemeVariant } from '@invenio/theme';

export type ItemProps = {
  open: boolean;
  setOpen: () => void;
  label?: JSX.Element;
  icon?: JSX.Element;
  variant?: ThemeVariant;
  size?: ThemeSize;
  childs?: JSX.Element;
};
