import { permute } from './Permutations';

describe('Permutations', () => {
  it('Test 1', () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it('Test 2', () => {
    expect(permute([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  it('Test 3', () => {
    expect(permute([1])).toEqual([[1]]);
  });
});
