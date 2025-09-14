export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  intervals.push(newInterval);
  let n = intervals.length;

  if (n == 0) {
    return intervals;
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