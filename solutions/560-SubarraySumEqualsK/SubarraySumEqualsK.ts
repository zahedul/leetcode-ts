export function subarraySum(nums: number[], k: number) {
  let count: number = 0;
  let sum: number = 0;
  let prefixSums: any = { 0: 1};

  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i]!;
    if ((sum - k) in prefixSums) {
      count += prefixSums[sum - k];
    }

    prefixSums[sum] = (prefixSums[sum] || 0) + 1;
  }

  return count;
}