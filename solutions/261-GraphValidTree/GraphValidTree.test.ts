import { validTree } from './GraphValidTree';

describe('GraphValidTree', () => {
  it('Test 1', () => {
    expect(
      validTree(5, [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
      ])
    ).toBe(true);
  });

  it('Test 2', () => {
    expect(
      validTree(5, [
        [0, 1],
        [1, 2],
        [2, 3],
        [1, 3],
        [1, 4],
      ])
    ).toBe(false);
  });
});
