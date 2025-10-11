export function exist(board: string[][], word: string): boolean {
  const ROWS = board.length;
  const COLS = board[0].length;

  const dfs = (r: number, c: number, i: number): boolean => {
    if (i === word.length) {
      return true;
    }

    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      board[r][c] !== word[i] ||
      board[r][c] === '#'
    ) {
      return false;
    }

    board[r][c] = '#';
    const response: boolean =
      dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1);
    board[r][c] = word[i];

    return response;
  };

  for (let i: number = 0; i < ROWS; i++) {
    for (let j: number = 0; j < COLS; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
