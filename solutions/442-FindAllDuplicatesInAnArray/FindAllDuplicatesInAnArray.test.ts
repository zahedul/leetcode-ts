import { findDuplicates } from './FindAllDuplicatesInAnArray';

describe('FindAllDuplicatesInAnArray', () => {
  it('Test 1', () => {
    expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
  });

  it('Test 2', () => {
    expect(findDuplicates([1, 1, 2])).toEqual([1]);
  });
});
