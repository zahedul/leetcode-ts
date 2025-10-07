export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) {
    return [0];
  }

  const adj: number[][] = Array.from({ length: n }, () => []);

  for (const [n1, n2] of edges) {
    adj[n1].push(n2);
    adj[n2].push(n1);
  }

  const edgeCnt: number[] = Array(n).fill(0);
  const leaves: number[] = [];

  for (let i = 0; i < n; i++) {
    edgeCnt[i] = adj[i].length;
    if (adj[i].length === 1) {
      leaves.push(i);
    }
  }

  while (leaves.length !== 0) {
    if (n <= 2) {
      return leaves;
    }

    const size = leaves.length;

    for (let i: number = 0; i < size; i++) {
      const node: number = leaves.shift()!;
      n--;
      for (const nei of adj[node]) {
        edgeCnt[nei]--;
        if (edgeCnt[nei] === 1) {
          leaves.push(nei);
        }
      }
    }
  }

  return [];
}
