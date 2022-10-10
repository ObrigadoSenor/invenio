import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ListProps } from '../../..';
import { List as ListComp } from './index';

export default {
  title: 'System/Menu/List',
  component: ListComp,
} as Meta;

const defaultArgs: Partial<ListProps> = {
  openIds: ['thirdItem'],
  onNavigate: (pathname) => console.log(pathname),
  list: [
    {
      id: 'firstItem',
      label: 'First item',
      pathname: '/',
      disabled: true,
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

const Template: Story<ListProps> = (args) => {
  return <ListComp {...args} />;
};

export const List = Template.bind({});
List.args = {
  ...defaultArgs,
};
