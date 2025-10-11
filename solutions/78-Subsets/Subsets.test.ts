import { subsets } from './Subsets';

describe('Subsets', () => {
  it('Test 1', () => {
    expect(subsets([1, 2, 3])).toEqual(
      expect.arrayContaining([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]),
    );
  });

  it('Test 2', () => {
    expect(subsets([0])).toEqual(expect.arrayContaining([[], [0]]));
  });
});
