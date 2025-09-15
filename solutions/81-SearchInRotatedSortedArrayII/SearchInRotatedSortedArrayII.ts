export function search(nums: number[], target: number): boolean {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[left] === nums[mid]) {
      left += 1;
    }
  }
}