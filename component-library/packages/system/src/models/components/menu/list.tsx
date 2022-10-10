type ItemProps = {
  label: string;
  id: string;
  pathname?: string;
  action?: string;
  disabled?: boolean;
};

export type ListItemProps = ItemProps & {
  childs?: ItemProps[];
};

export type ListProps = {
  list: ListItemProps[];
  onNavigate: ({ pathname, action }: Partial<ListItemProps>) => void;
  openIds?: string[];
};
