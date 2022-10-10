import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Text as TextComp } from '.';
import { TextProps } from '../..';

export default {
  title: 'Core/Text',
  component: TextComp,
} as Meta;

const defaultArgs: Partial<TextProps> = {
  children: 'My little text',
  fontSize: 'md',
  textVariant: 'p',
  variant: 'primary',
};

const Template: Story<TextProps> = (args) => <TextComp {...args} />;

export const Text = Template.bind({});
Text.args = {
  ...defaultArgs,
};
