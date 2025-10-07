import { combinationSum2 } from './CombinationSumII';

describe('CombinationSum', () => {
  it('Test 1', () => {
    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]);
  });

  it('Test 2', () => {
    expect(combinationSum2([2, 5, 2, 1, 2], 5)).toEqual([[1, 2, 2], [5]]);
  });

  it('Test 3', () => {
    expect(combinationSum2([2], 1)).toEqual([]);
  });
});
