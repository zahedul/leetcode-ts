import {topKFrequent} from "./TopKFrequentElements";

describe('TopKFrequentElements', () => {
  it('Test 1', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2]);
  });

  it('Test 2', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  it('Test 3', () => {
    expect(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2)).toEqual([1, 2]);
  });

  it('Test 4', () => {
    expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([-1, 2]);
  });
});