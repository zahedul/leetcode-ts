import { permuteUnique } from './PermutationsII';

describe('Permutations', () => {
  it('Test 1', () => {
    expect(permuteUnique([1, 1, 2])).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]);
  });

  it('Test 2', () => {
    expect(permuteUnique([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
