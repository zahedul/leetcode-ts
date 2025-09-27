export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const inDegree: number[] = new Array(numCourses).fill(0);
  const graph: number[][] = Array.from({ length: numCourses }, (): number[] => []);

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course] += 1;
  }

  const queue: number[] = [];
  for (let i: number = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let taken = 0;
  while (queue.length > 0) {
    const curr = queue.shift()!;
    taken += 1;
    for (const neighbor of graph[curr]) {
      inDegree[neighbor] -= 1;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor)
      }
    }
  }

  return taken === numCourses;
}