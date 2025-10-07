export function nextPermutation(nums: number[]): void {
  const n = nums.length;
  if (n < 2) {
    return;
  }
  let i: number = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j: number = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let l = i + 1,
    r = n - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}
