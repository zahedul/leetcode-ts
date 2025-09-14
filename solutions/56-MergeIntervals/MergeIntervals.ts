export function merge(intervals: number[][]): number[][] {
  let n = intervals.length;
  const result: number[][] = [];

  if ( n === 0) {
    return result;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let prev: number[] = intervals[0];
  for (let i = 1; i < n; i++) {
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      result.push(prev);
      prev = intervals[i];
    }
  }
  result.push(prev);

  return result;
}