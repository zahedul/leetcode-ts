export function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);

  let result = points.length;
  let prev = points[0];

  for (let i = 1; i < points.length; i++) {
    const current = points[i];
    if (current[0] <= prev[1]) {
      result -= 1;

      prev = [current[0], Math.min(current[1], prev[1]) ];
    } else {
      prev = current;
    }
  }


  return result;
}