import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Image as TestComponent } from '.';
import { OverrideWithOptional } from '../../../../../utils';
import { IImageProps as TestComponentProps } from '../../models';

const highResSrc =
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=30';
const lowResSrc =
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1';

type DefaultProps = Pick<TestComponentProps, 'src' | 'alt' | 'lowResSrc' | 'aspectRatio' | 'borderRadius'>;
const defaultProps: DefaultProps = {
  src: highResSrc,
  alt: 'alt-value',
  lowResSrc,
  aspectRatio: '21-9',
  borderRadius: 'none',
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Image', () => {
  test('sets alt', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('image')).toHaveAttribute('alt');
  });
  test('sets src', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('image')).toHaveAttribute('src');
  });
  test('changes aspect ratio', () => {
    const { getByTestId } = render(<Test aspectRatio="30-9" />);
    expect(getByTestId('image-wrapper')).toHaveClass('image-aspect-ratio-30-9');
  });
  test('changes border radius', () => {
    const { getByTestId } = render(<Test borderRadius="xl" />);
    expect(getByTestId('image-wrapper')).toHaveClass('image-border-radius-xl');
  });
});
