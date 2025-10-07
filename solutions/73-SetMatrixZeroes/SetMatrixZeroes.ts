export function setZeroes(matrix: number[][]): void {
  const ROW: number = matrix.length;
  const COL: number = matrix[0].length;
  let rowZero: boolean = false;

  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;
        if (r > 0) {
          matrix[r][0] = 0;
        } else {
          rowZero = true;
        }
      }
    }
  }

  for (let i = 1; i < ROW; i++) {
    for (let j = 1; j < COL; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let r = 0; r < ROW; r++) {
      matrix[r][0] = 0;
    }
  }

  if (rowZero) {
    for (let c = 0; c < COL; c++) {
      matrix[0][c] = 0;
    }
  }
}
