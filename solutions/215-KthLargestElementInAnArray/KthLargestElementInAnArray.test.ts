import { findKthLargest } from './KthLargestElementInAnArray';

describe('KthLargestElementInAnArray', () => {
  it('Test 1', async () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
  });

  it('Test 2', async () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
  });
});
