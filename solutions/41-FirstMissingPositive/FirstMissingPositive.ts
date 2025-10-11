export function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      const v = nums[i];
      const dest = v - 1;
      [nums[i], nums[dest]] = [nums[dest], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
}
