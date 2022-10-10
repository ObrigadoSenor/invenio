import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { AvatarProps, BoxProps, ListProps } from '../..';
import { List as ListComp } from './index';
import { Avatar as AvatarComp } from './index';
import { Box as BoxComp } from './index';

export default {
  title: 'System/Menu',
} as Meta;

const listArgs: Partial<ListProps> = {
  openIds: ['thirdItem'],
  onNavigate: (href) => console.log(href),
  list: [
    {
      id: 'firstItem',
      label: 'First item',
      pathname: '/',
    },
    {
      id: 'secondItem',
      label: 'Second item',
      pathname: '/',
      childs: [
        {
          id: 'secondItemFirstChild',
          label: 'First child',
          pathname: '/somewhere',
        },
        {
          id: 'secondItemSecondChild',
          label: 'Second child',
          pathname: '/somewhere/else',
        },
      ],
    },
    {
      id: 'thirdItem',
      label: 'third item',
      pathname: '/',
      childs: [
        {
          id: 'thirdItemFirstChild',
          label: 'First child',
          pathname: '/somewhere',
        },
        {
          id: 'thirdItemSecondChild',
          label: 'third child',
          pathname: '/somewhere/else',
        },
        {
          id: 'thirdItemThirdChild',
          label: 'third child',
          pathname: '/somewhere/else',
        },
      ],
    },
  ],
};

const avatarArgs: Partial<AvatarProps> = {
  user: {
    firstName: 'Ted',
    surName: 'Nilsson',
    email: 'ted@nilsson.com',
    createdAt: new Date().toString(),
  },
};

const boxArgs: Partial<BoxProps> = {};

const defaultArgs = { ...listArgs, ...avatarArgs, ...boxArgs };

const Template: Story<ListProps & AvatarProps & BoxProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <AvatarComp
      {...args}
      open={open}
      setOpen={() => setOpen(!open)}
      childs={
        <BoxComp>
          <ListComp {...args} />
        </BoxComp>
      }
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
