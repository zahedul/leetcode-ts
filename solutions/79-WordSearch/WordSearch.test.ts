import { exist } from './WordSearch';

describe('WordSearch', () => {
  it('Test 1', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCCED',
      ),
    ).toEqual(true);
  });

  it('Test 2', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'SEE',
      ),
    ).toEqual(true);
  });

  it('Test 3', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCB',
      ),
    ).toEqual(false);
  });
});
