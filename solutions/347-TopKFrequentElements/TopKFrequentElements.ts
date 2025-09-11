export function topKFrequent(nums: number[], k: number): number[] {
  const hashMap = new Map<number, number>();
  for (let num of nums) {
    hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
  }

  const sorted = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(([num]) => num);
}