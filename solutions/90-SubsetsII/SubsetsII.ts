export function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  function backtrack(i: number, subsets: number[]): void {
    if (i === nums.length) {
      result.push([...subsets]);
      return;
    }

    subsets.push(nums[i]);
    backtrack(i + 1, subsets);
    subsets.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }

    backtrack(i + 1, subsets);
  }

  backtrack(0, []);

  return result;
}
