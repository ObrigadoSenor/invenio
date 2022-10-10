import { renderHook } from '@testing-library/react-hooks';
import { useProgressiveImg } from './useProgressiveImg';

const highQualitySrc =
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=30';
const lowQualitySrc =
  'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1';

test('sets initial low res quality src', async () => {
  const { result } = renderHook(() => useProgressiveImg({ lowQualitySrc, highQualitySrc }));
  expect(result.current.newSrc).toEqual(lowQualitySrc);
});
