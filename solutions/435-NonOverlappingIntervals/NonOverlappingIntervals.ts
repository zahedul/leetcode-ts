export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let result: number = 0;
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1];
    } else {
      result++;
      prevEnd = Math.min(prevEnd, intervals[i][1]);
    }
  }

  return result;
}