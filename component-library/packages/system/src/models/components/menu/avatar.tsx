import { ThemeSize, ThemeVariant } from '@invenio/theme';

export type AvatarProps = {
  open: boolean;
  setOpen: () => void;
  variant?: ThemeVariant;
  size?: ThemeSize;
  user?: {
    firstName?: string;
    surName?: string;
    email?: string;
    createdAt?: string;
    id?: string;
  };
  childs?: JSX.Element;
};
