export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const subsets: number[] = [];

  function dfs(i: number) {
    if (i >= nums.length) {
      result.push([...subsets]);
      return;
    }

    subsets.push(nums[i]);
    dfs(i + 1);

    subsets.pop();
    dfs(i + 1);
  }

  dfs(0);

  return result;
}
