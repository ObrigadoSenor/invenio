import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { ItemProps } from '../../..';
import { Item as ItemComp } from './index';

export default {
  title: 'System/Menu/Item',
  component: ItemComp,
} as Meta;

const defaultArgs: Partial<ItemProps> = {
  childs: <div>CHILD</div>,
  label: <span>Item in menu</span>,
};

const Template: Story<ItemProps> = (args) => {
  const [open, setOpen] = useState(false);
  return <ItemComp {...args} open={open} setOpen={() => setOpen(!open)} />;
};

export const Item = Template.bind({});
Item.args = {
  ...defaultArgs,
};
