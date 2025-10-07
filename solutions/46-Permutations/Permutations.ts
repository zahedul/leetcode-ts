export function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(path: number[], used: boolean[]): void {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i: number = 0; i < nums.length; i++) {
      if(used[i]) {
        continue;
      }

      path.push(nums[i]);
      used[i] = true;
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(nums.length).fill(false))

  return result;
}