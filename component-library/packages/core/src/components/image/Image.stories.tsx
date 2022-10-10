import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Image as ImageComp } from '.';
import { ImageProps } from '../..';

export default {
  title: 'Core/Image',
  component: ImageComp,
} as Meta;

const defaultArgs: Partial<ImageProps> = {};

const Template: Story<ImageProps> = (args) => <ImageComp {...args} />;

export const Image = Template.bind({});
Image.args = {
  ...defaultArgs,
  alt: 'Alt',
  src:
    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=5000&q=100',
  lowResSrc:
    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
  aspectRatio: '21-9',
  borderRadius: 'md',
  transitionSpeedMultiplierS: 0.5,
};

/* <Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
aspectRatio="2-3"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
aspectRatio="21-9"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
aspectRatio="30-9"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
borderRadius="none"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
borderRadius="s"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
borderRadius="m"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
borderRadius="l"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
borderRadius="xl"
/>
<Image
alt="Alt"
src={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'
}
lowResSrc={
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'
}
borderRadius="xxl"
/>
 */
