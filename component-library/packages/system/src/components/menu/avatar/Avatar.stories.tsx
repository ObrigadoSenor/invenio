import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { AvatarProps } from '../../..';
import { Avatar as AvatarComp } from './index';

export default {
  title: 'System/Menu/Avatar',
  component: AvatarComp,
} as Meta;

const defaultArgs: Partial<AvatarProps> = {
  childs: <div>CHILD</div>,
  user: {
    firstName: 'Ted',
    surName: 'Nilsson',
    email: 'ted@nilsson.com',
    createdAt: new Date().toString(),
  },
};

const Template: Story<AvatarProps> = (args) => {
  const [open, setOpen] = useState(false);
  return <AvatarComp {...args} open={open} setOpen={() => setOpen(!open)} />;
};

export const Avatar = Template.bind({});
Avatar.args = {
  ...defaultArgs,
};
