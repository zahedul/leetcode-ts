export function maxProduct(nums: number[]): number {
  let result: number = nums[0];
  let maxSoFar: number = nums[0];
  let minSoFar: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0 ) {
      [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
    }

    maxSoFar = Math.max(nums[i], maxSoFar * nums[i]);
    minSoFar = Math.min(nums[i], minSoFar * nums[i]);

    result = Math.max(result, maxSoFar);
  }

  return result;
}