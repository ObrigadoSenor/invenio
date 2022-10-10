import { close } from '@invenio/icons';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Text as TestComponent } from '.';
import { OverrideWithOptional } from '../../../../../utils';
import { TextProps as TestComponentProps } from '../../models';

type DefaultProps = Pick<
  TestComponentProps,
  'size' | 'type' | 'weight' | 'tag' | 'wrap' | 'leftIcon' | 'rightIcon' | 'width'
>;
const defaultProps: DefaultProps = {
  size: 'm',
  type: 'primary',
  weight: 'regular',
  tag: 'span',
  wrap: 'wrap',
  width: 'full',
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Text', () => {
  test('renders', () => {
    const { getByTestId } = render(<Test>Text</Test>);
    expect(getByTestId('text-wrapper')).toBeInTheDocument();
  });
  test('sets size', () => {
    const { getByTestId } = render(<Test size="xl">Text</Test>);
    expect(getByTestId('text')).toHaveClass('text-xl');
  });

  test('sets type', () => {
    const { getByTestId } = render(<Test type="secondary">Text</Test>);
    expect(getByTestId('text')).toHaveClass('text-secondary');
  });
  test('sets weight', () => {
    const { getByTestId } = render(<Test weight="bold">Text</Test>);
    expect(getByTestId('text')).toHaveClass('text-bold');
  });
  test('sets wrap', () => {
    const { getByTestId } = render(<Test wrap="nowrap">Text</Test>);
    expect(getByTestId('text')).toHaveClass('text-nowrap');
  });
  test('set left icons', () => {
    const { getAllByTestId } = render(
      <Test wrap="nowrap" leftIcon={{ icon: close }}>
        Text
      </Test>,
    );
    expect(getAllByTestId('icon')).toHaveLength(1);
  });
  test('set right icons', () => {
    const { getAllByTestId } = render(
      <Test wrap="nowrap" rightIcon={{ icon: close }}>
        Text
      </Test>,
    );
    expect(getAllByTestId('icon')).toHaveLength(1);
  });
  test('set both icons', () => {
    const { getAllByTestId } = render(
      <Test wrap="nowrap" leftIcon={{ icon: close }} rightIcon={{ icon: close }}>
        Text
      </Test>,
    );
    expect(getAllByTestId('icon')).toHaveLength(2);
  });
  test('sets tag', () => {
    const { getByTestId } = render(<Test tag="h4">Text</Test>);
    expect(getByTestId('text').tagName).toBe('H4');
  });
});
