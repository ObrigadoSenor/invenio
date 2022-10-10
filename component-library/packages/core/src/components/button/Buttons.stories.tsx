import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button as ButtonComp } from '.';
import { ButtonProps } from '../..';

export default {
  title: 'Core/Button',
  component: ButtonComp,
} as Meta;

const defaultArgs: Partial<ButtonProps> = {
  disabled: false,
  label: 'Button',
  size: 'md',
  variant: 'primary',
  fontSize: 'md',
};

const Template: Story<ButtonProps> = (args) => <ButtonComp {...args} />;

export const Button = Template.bind({});
Button.args = {
  ...defaultArgs,
};
