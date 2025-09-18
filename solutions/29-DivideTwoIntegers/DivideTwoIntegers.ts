export function divide(dividend: number, divisor: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX;
  }

  let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let result = 0;

  for (let i = 30; i >= 0; i--) {
    if ((a >>> i) >= b) {
      result += 1 << i;
      a -= b << i;
    }
  }

  result = sign * result;

  return result;
}