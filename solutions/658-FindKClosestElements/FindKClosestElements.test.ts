import {findClosestElements} from "./FindKClosestElements";

describe('FindKClosestElements', () => {
  it('Test 1', () => {
    expect(findClosestElements([1,2,3,4,5], 4, 3)).toEqual([1, 2, 3, 4]);
  });

  it('Test 2', () => {
    expect(findClosestElements([1,1,2,3,4,5], 4, -1)).toEqual([1,1,2,3]);
  });
});