import { numIslands } from  './NumberOfIslands'
describe('NumberOfIslands', () => {
  it('Test 1', () => {
    const grid = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ];
    expect(numIslands(grid)).toEqual(1);
  });

  it('Test 2', () => {
    const grid = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
    expect(numIslands(grid)).toEqual(3);
  });
});