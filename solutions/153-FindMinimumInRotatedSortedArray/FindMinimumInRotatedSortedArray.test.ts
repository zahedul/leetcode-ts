import { findMin } from './FindMinimumInRotatedSortedArray';

describe('FindMinimumInRotatedSortedArray', () => {
  it('Test 1', () => {
    expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
  });

  it('Test 2', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
  });

  it('Test 3', () => {
    expect(findMin([11, 13, 15, 17])).toEqual(11);
  });
});
