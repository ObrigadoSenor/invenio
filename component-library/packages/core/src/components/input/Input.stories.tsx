import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Input as InputComp } from '.';
import { InputProps } from '../..';

export default {
  title: 'Core/Input',
  component: InputComp,
} as Meta;

const defaultArgs: Partial<InputProps> = {
  disabled: false,
  label: 'Input',
  size: 'md',
  variant: 'primary',
  fontSize: 'md',
  placeholder: 'placeholder',
  icons: {
    start: <div>Ic</div>,
    end: <div>Ie</div>,
  },
  error: 'Error message',
};

const Template: Story<InputProps> = (args) => <InputComp {...args} />;

export const Input = Template.bind({});
Input.args = {
  ...defaultArgs,
};
