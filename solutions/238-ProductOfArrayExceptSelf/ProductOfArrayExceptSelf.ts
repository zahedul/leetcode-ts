export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  let defaultProduct: number = 1;
  for (let i: number = 0; i < nums.length; i++) {
    result[i] = defaultProduct;
    defaultProduct *= nums[i];
  }

  defaultProduct = 1;
  for (let i: number = nums.length - 1 ; i >= 0; i--) {
    result[i] *= defaultProduct;
    defaultProduct *= nums[i];
  }

  return result.map(x => Object.is(x, -0) ? 0 : x);
}