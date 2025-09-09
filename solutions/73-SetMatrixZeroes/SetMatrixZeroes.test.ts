import { setZeroes } from "./SetMatrixZeroes";

describe('SetMatrixZeroes', () => {
  test("Test 1", () => {
    const matrix = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9]
    ];

    setZeroes(matrix);

    expect(matrix).toEqual([
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9]
    ]);
  });

  test("Test 2", () => {
    const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

    setZeroes(matrix);

    expect(matrix).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]]
    );
  });

  test("Test 3", () => {
    const matrix = [[1,0]];

    setZeroes(matrix);

    expect(matrix).toEqual([[0,0]]);
  });
});