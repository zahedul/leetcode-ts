import { subarraySum } from './SubarraySumEqualsK';

describe('SubarraySumEquals', () => {
  it('Test 1', () => {
    expect(subarraySum([1, 1, 1], 2)).toEqual(2);
  });

  it('Test 2', () => {
    expect(subarraySum([1, 2, 3], 3)).toEqual(2);
  });

  it('Test 3', () => {
    expect(subarraySum([2, 4, 1, 2, 1], 3)).toEqual(2);
  });
});