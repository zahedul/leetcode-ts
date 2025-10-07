import { eraseOverlapIntervals } from './NonOverlappingIntervals';

describe('NonOverlappingIntervals', () => {
  it('Test 1', async () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ])
    ).toEqual(1);
  });

  it('Test 2', async () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ])
    ).toEqual(2);
  });

  it('Test 3', async () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
      ])
    ).toEqual(0);
  });
});
