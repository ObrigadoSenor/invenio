import { includes, map, uniq, without } from 'ramda';
import React, { useState, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { ListProps, ListItemProps } from '../../../models/components';

const Container = styled.ul<Partial<ListProps>>`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ListItem = styled.li<Partial<ListProps> & { isChild?: boolean }>`
  position: relative;
  width: 100%;
  margin: 0;
  list-style: none;
  ${({ isChild = false }) =>
    isChild
      ? css<Partial<ListProps>>`
          padding-left: ${({ theme }) => `${theme.spacings.sm}${theme.units.spacings}`};
        `
      : undefined}
`;

const ListItemBtn = styled.button<Partial<ListProps> & { hideArrow?: boolean; open?: boolean; active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  padding: ${({ theme }) => `${theme.spacings.sm}${theme.units.spacings}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.md}${theme.units.border}`};
  white-space: nowrap;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  margin-right: ${({ theme }) => `${theme.spacings.md}${theme.units.spacings}`};
  font-weight: ${({ active, theme }) => theme.fontWeight[active ? 'bold' : 'medium']};
  color: ${({ theme }) => theme.colors.text.base};

  :hover:not(:disabled) {
    color: ${({ theme }) => theme.buttons.accent.colors.hover.text};
    background-color: ${({ theme }) => theme.buttons.accent.colors.hover.bg};
    opacity: 1;
  }

  :disabled {
    color: ${({ theme }) => theme.buttons.accent.colors.disabled.text};
    background-color: ${({ theme }) => theme.buttons.accent.colors.disabled.bg};
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
  ${({ hideArrow = false }) =>
    !hideArrow
      ? css<Partial<ListProps> & { hideArrow?: boolean; open?: boolean }>`
          &:after {
            position: relative;
            display: flex;
            margin-left: auto;
            transform: ${({ open }) => ` rotate(${open ? -90 : 90}deg)`};
            content: '\\2039';
          }
        `
      : undefined}
`;

type RenderItemChilds = {
  childs: ListItemProps['childs'];
  onNavigate: ListProps['onNavigate'];
};

type OpenProps = {
  open: string[];
  setOpen: (id: string) => void;
};

const renderItemChilds = ({ childs = [], onNavigate }: RenderItemChilds) => {
  const itemChilds = map(({ label, id, pathname, action, disabled }) => {
    return (
      <ListItem isChild key={id}>
        <ListItemBtn disabled={disabled} hideArrow onClick={() => onNavigate({ pathname, action })}>
          {label}
        </ListItemBtn>
      </ListItem>
    );
  }, childs);
  return itemChilds;
};

const renderItems = ({ list = [], onNavigate, setOpen, open }: ListProps & OpenProps) => {
  const items = map(({ label, id, pathname, action, childs, disabled }) => {
    const isOpen = includes(id, open);
    const showChildren = isOpen && childs !== undefined;
    return (
      <Fragment key={id}>
        <ListItem>
          <ListItemBtn
            disabled={disabled}
            active={isOpen}
            hideArrow={childs === undefined}
            open={isOpen}
            onClick={() => (childs ? setOpen(id) : onNavigate({ pathname, action }))}
          >
            {label}
          </ListItemBtn>
        </ListItem>
        {showChildren ? <Container>{renderItemChilds({ childs, onNavigate })}</Container> : null}
      </Fragment>
    );
  }, list);
  return items;
};

export const List = ({ openIds = [], ...rest }: ListProps): JSX.Element => {
  const [open, setOpen] = useState<string[]>(openIds);

  return (
    <Container>
      {renderItems({
        ...rest,
        open,
        setOpen: (id) => setOpen(includes(id, open) ? without([id], open) : uniq([...open, id])),
      })}
    </Container>
  );
};
