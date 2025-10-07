export function myPow(x: number, n: number): number {
  function helper(x: number, n: number): number {
    if (x === 0) {
      return 0;
    }

    if (n === 0) {
      return 1;
    }

    const result: number = helper(x * x, Math.floor(n / 2));
    if (n % 2 === 0) {
      return result;
    }

    return x * result;
  }

  const result: number = helper(x, Math.abs(n));

  if (n > 0) {
    return result;
  }

  return 1 / result;
}
