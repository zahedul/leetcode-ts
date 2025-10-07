import { longestConsecutive } from './LongestConsecutiveSequence';

describe('LongestConsecutiveSequence', () => {
  it('Test 1', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
  });

  it('Test 2', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
  });

  it('Test 3', () => {
    expect(longestConsecutive([1, 0, 1, 2])).toEqual(3);
  });
});
