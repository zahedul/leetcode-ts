export function findOrder(
  numCourses: number,
  prerequisites: number[][]
): number[] {
  const indegree: number[] = new Array(numCourses).fill(0);
  const adj: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [nxt, pre] of prerequisites) {
    indegree[nxt]++;
    adj[pre].push(nxt);
  }

  const output: number[] = [];
  const dfs = (node: number) => {
    output.push(node);
    indegree[node]--;
    for (const nei of adj[node]) {
      indegree[nei]--;
      if (indegree[nei] === 0) {
        dfs(nei);
      }
    }
  };

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      dfs(i);
    }
  }

  return output.length === numCourses ? output : [];
}
