export function findWords(board: string[][], words: string[]): string[] {
  const ROWS: number = board.length;
  const COLS: number = board[0].length;
  const result: string[] = [];

  class TrieNode {
    children: Map<string, TrieNode> = new Map<string, TrieNode>();
    word: string | null = null;
  }

  const root = new TrieNode();
  for (const word of words) {
    let node: TrieNode = root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.word = word;
  }

  const dfs = (r: number, c: number, node: TrieNode): void => {
    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      board[r][c] === '#' ||
      !node.children.has(board[r][c])
    ) {
      return;
    }

    const temp: string = board[r][c];
    const nextNode: TrieNode = node.children.get(temp)!;

    if (nextNode.word) {
      result.push(nextNode.word);
      nextNode.word = null;
    }
    board[r][c] = '#';

    dfs(r + 1, c, nextNode);
    dfs(r - 1, c, nextNode);
    dfs(r, c + 1, nextNode);
    dfs(r, c - 1, nextNode);

    board[r][c] = temp;

    if (nextNode.children.size === 0) {
      node.children.delete(temp);
    }
  };

  for (let i: number = 0; i < ROWS; i++) {
    for (let j: number = 0; j < COLS; j++) {
      dfs(i, j, root);
    }
  }

  return result;
}
