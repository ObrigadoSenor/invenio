import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProgressBar as ProgressBarComp } from '.';
import { ProgressBarProps } from '../..';

export default {
  title: 'System/Progressbar',
  component: ProgressBarComp,
} as Meta;

const defaultArgs: Partial<ProgressBarProps> = {
  variant: 'primary',
  size: 'sm',
  intervalMS: 4000,
};

const Template: Story<ProgressBarProps> = (args) => {
  return <ProgressBarComp {...args} />;
};

export const Progressbar = Template.bind({});
Progressbar.args = {
  ...defaultArgs,
};
