import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Snackbar as SnackbarComp } from '.';
import { SnackbarProps } from '../..';

export default {
  title: 'System/Snackbar',
  component: SnackbarComp,
} as Meta;

const defaultArgs: Partial<SnackbarProps> = {
  snacks: [
    {
      id: '1',
      value: 'Snack one',
    },
  ],
};

const Template: Story<SnackbarProps> = (args) => {
  const [snacks, setSnacks] = useState<SnackbarProps['snacks']>(args.snacks);
  return (
    <>
      <button
        onClick={() =>
          setSnacks(() => [...snacks, { id: `${snacks.length + 1}`, value: `Snack ${snacks.length + 1}` }])
        }
      >
        Add snack
      </button>
      <SnackbarComp {...args} snacks={snacks} />
    </>
  );
};

export const Snackbar = Template.bind({});
Snackbar.args = {
  ...defaultArgs,
};
