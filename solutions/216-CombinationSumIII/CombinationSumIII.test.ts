import { combinationSum3 } from "./CombinationSumIII";

describe('CombinationSum3', () => {
  it('Test 1', () => {
    expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]]);
  });

  it('Test 2', () => {
    expect(combinationSum3(3, 9)).toEqual([[1,2,6],[1,3,5],[2,3,4]]);
  });

  it('Test 3', () => {
    expect(combinationSum3(4, 1)).toEqual([]);
  });
});