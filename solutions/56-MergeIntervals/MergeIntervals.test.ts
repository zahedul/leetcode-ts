import { merge } from './MergeIntervals';

describe('MergeIntervals', () => {
  it('TEST 1', () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('TEST 2', () => {
    expect(
      merge([
        [1, 4],
        [4, 5],
      ]),
    ).toEqual([[1, 5]]);
  });

  it('TEST 3', () => {
    expect(
      merge([
        [4, 7],
        [1, 4],
      ]),
    ).toEqual([[1, 7]]);
  });
});
