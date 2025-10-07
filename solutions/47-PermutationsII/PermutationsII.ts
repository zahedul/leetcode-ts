export function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  function backtrack(paths: number[], used: boolean[]): void{
    if (paths.length === nums.length) {
      result.push([...paths]);

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if(used[i]) {
        continue;
      }

      if ( i > 0 && nums[i] === nums[i-1] && used[i - 1]) {
        continue;
      }

      paths.push(nums[i]);
      used[i] = true;
      backtrack(paths, used);
      used[i] = false;
      paths.pop();
    }

  }

  backtrack([], Array(nums.length).fill(false));

  return result;

}