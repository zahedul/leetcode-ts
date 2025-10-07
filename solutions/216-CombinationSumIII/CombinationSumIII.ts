export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, path: number[], sum: number) {
    if (path.length === k) {
      if (sum === n) {
        result.push([...path]);
      }
      return;
    }

    for (let i = start; i < 10; i++) {
      if (sum + i > n) {
        break;
      }

      path.push(i);
      backtrack(i + 1, path, sum + i);
      path.pop();
    }
  }

  backtrack(1, [], 0);

  return result;
}
