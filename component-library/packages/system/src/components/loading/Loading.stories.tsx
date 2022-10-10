import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LoadingProps } from '../..';
import { Loading as LoadingComp } from './index';

export default {
  title: 'System/Loading',
  component: LoadingComp,
} as Meta;

const defaultArgs: Partial<LoadingProps> = {
  loading: true,
};

const Template: Story<LoadingProps> = (args) => {
  return <LoadingComp {...args} />;
};

export const Loading = Template.bind({});
Loading.args = {
  ...defaultArgs,
};
