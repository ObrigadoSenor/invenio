import { ThemeVariant } from '@invenio/theme';

export type LoadingProps = {
  variant?: ThemeVariant;
  intervalMS?: number;
  loading?: boolean;
  speedMS?: number;
};
