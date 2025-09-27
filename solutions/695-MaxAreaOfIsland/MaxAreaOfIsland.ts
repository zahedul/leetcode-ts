export function maxAreaOfIsland(grid: number[][]): number {
  let maxLen: number = 0

  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(r: number, c: number): number {
    if( r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
      return 0;
    }

    let area: number = 1;
    grid[r][c] = 0;

    area += dfs(r + 1, c);
    area += dfs(r - 1, c);
    area += dfs(r, c + 1);
    area += dfs(r, c - 1);

    return area;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        let area = dfs(i, j);
        maxLen = Math.max(maxLen, area);
      }
    }
  }

  return maxLen;
}