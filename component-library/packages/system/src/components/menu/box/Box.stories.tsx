import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BoxProps } from '../../..';
import { Box as BoxComp } from './index';

export default {
  title: 'System/Menu/Box',
  component: BoxComp,
} as Meta;

const defaultArgs: Partial<BoxProps> = {
  children: (
    <ul>
      <li>Some menu items</li>
    </ul>
  ),
};

const Template: Story<BoxProps> = (args) => {
  return <BoxComp {...args} />;
};

export const Box = Template.bind({});
Box.args = {
  ...defaultArgs,
};
