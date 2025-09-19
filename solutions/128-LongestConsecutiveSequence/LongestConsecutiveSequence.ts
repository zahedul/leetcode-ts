export function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (!numSet.has(num-1)) {
      let l = 1;
      while (numSet.has(num+l)) {
        l += 1;
      }
      longest = Math.max(longest, l);
    }
  }

  return longest;
}