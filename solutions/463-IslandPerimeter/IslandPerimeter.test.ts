import { islandPerimeter } from './IslandPerimeter';

describe('Island Perimeter', () => {
  it('Test 1', () => {
    const grid = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ];
    expect(islandPerimeter(grid)).toEqual(16);
  });

  it('Test 2', () => {
    const grid = [[1]];
    expect(islandPerimeter(grid)).toEqual(4);
  });
});
