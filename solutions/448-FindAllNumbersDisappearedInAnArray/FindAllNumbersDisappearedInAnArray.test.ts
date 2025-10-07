import { findDisappearedNumbers } from './FindAllNumbersDisappearedInAnArray';

describe('FindAllNumbersDisappearedInAnArray', () => {
  it('Test 1', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  it('Test 2', () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });
});
