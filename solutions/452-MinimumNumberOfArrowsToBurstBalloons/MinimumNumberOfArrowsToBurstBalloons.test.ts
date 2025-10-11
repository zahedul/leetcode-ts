import { findMinArrowShots } from './MinimumNumberOfArrowsToBurstBalloons';

describe('MinimumNumberOfArrowsToBurstBalloons', () => {
  it('Test 1', () => {
    expect(
      findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
      ]),
    ).toEqual(2);
  });

  it('Test 2', () => {
    expect(
      findMinArrowShots([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]),
    ).toEqual(4);
  });

  it('Test 3', () => {
    expect(
      findMinArrowShots([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
      ]),
    ).toEqual(2);
  });
});
