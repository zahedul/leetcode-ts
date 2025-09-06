import {numSubarrayProductLessThanK} from "./SubarrayProductLessThanK";

describe('SubarrayProductLessThanK', () => {
  it('Test 1', () => {
    expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toEqual(8);
  });

  it('Test 2', () => {
    expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toEqual(0);
  });
});