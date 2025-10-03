export function countComponents(n: number, edges: number[][]): number {
  const adj: number[][] = Array.from({ length: n}, () => []);
  const visit: boolean[] = Array(n).fill(false);

  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const dfs = (node: number) => {
    for (const nei of adj[node]) {
      if (!visit[nei]) {
        visit[nei] = true;
        dfs(nei);
      }
    }
  };

  let result: number = 0;
  for (let node = 0; node < n; node++) {
    if (!visit[node]) {
      visit[node] = true;
      dfs(node);
      result++;
    }
  }

  return result;
}