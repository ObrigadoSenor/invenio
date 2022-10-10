import { close } from '@invenio/icons';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Icon as TestComponent } from '.';
import { IIconProps as TestComponentProps } from '../../models';
import { OverrideWithOptional } from '../../../../../utils';

type DefaultProps = Pick<TestComponentProps, 'color' | 'disabled' | 'icon' | 'size'>;
const defaultProps: DefaultProps = {
  color: 'black',
  size: 's',
  icon: close,
  disabled: false,
};
afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Icon', () => {
  test('sets icon', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('icon').firstChild).toBeDefined();
  });
  test('sets size', () => {
    const { getByTestId } = render(<Test size="xl" />);
    expect(getByTestId('icon')).toHaveClass('icon-xl');
  });
  test('sets color', () => {
    const { container } = render(<Test color="green" />);
    expect(container.querySelector('[data-testid="icon"] path')?.getAttribute('fill')).toBe('green');
  });
  test('sets disabled', () => {
    const { getByTestId } = render(<Test disabled />);
    expect(getByTestId('icon')).toHaveClass('disabled');
  });
});
