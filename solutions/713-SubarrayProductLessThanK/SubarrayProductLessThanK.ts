export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }

  let product = 1,
    left = 0,
    result = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k && left <= right) {
      product /= nums[left];
      left += 1;
    }
    result += right - left + 1;
  }

  return result;
}
