import { findPeakElement } from './FindPeakElement';

describe('FindPeakElement', () => {
  it('Test 1', () => {
    expect(findPeakElement([1, 2, 3, 1])).toEqual(2);
  });

  it('Test 2', () => {
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toEqual(5);
  });
});
