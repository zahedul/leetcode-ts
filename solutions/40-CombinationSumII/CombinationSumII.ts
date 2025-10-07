export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];

  candidates.sort((a, b) => a - b);

  function backtrack(start: number, path: number[], sum: number) {
    if (sum === target) {
      result.push([...path]);

      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (sum + candidates[i] > target) {
        break;
      }

      path.push(candidates[i]);
      backtrack(i + 1, path, sum + candidates[i]);
      path.pop();
    }
  }

  backtrack(0, [], 0);

  return result;
}
