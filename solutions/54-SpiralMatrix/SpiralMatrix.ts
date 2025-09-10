export function spiralOrder(matrix: number[][]): number[] {
  let result: number[] = [];
  let left: number = 0, right: number = matrix[0].length;
  let top: number = 0, bottom: number = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;

    if (!(left < right && top < bottom)) {
      break;
    }

    for (let i = right - 1; i > left - 1; i--) {
      result.push(matrix[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i > top - 1; i--) {
      result.push(matrix[i][left]);
    }
    left++;

  }

  return result;
}