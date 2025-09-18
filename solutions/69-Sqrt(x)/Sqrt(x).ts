export function mySqrt(x: number): number {
  if (x < 2) {
    return x;
  }

  let l = 0;
  let r = x;
  let res = 0;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (mid * mid == x) {
      return mid;
    }

    if (mid * mid < x) {
      l = mid + 1;
      res = mid;
    }

    if (mid * mid > x) {
      r = mid - 1;
    }
  }

  return res;
}