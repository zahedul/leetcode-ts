import { combinationSum } from './CombinationSum';

describe('CombinationSum', () => {
  it('Test 1', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });

  it('Test 2', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  it('Test 3', () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });
});
