export function numIslands(grid: string[][]): number {
  let result: number = 0;

  if (!grid || grid.length===0) {
    return result;
  }

  const rows: number = grid.length;
  const cols: number = grid[0].length;

  function dfs(r: number, c: number) {

    if (
      r < 0 || c < 0 ||
      r >= rows || c >= cols
    ) {
      return;
    }

    const isVisited = (grid[r][c] == '0');
    if (isVisited) {
      return;
    }

    grid[r][c] = '0';

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        result++;
        dfs(r, c);
      }
    }
  }

  return result;
}