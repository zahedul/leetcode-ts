import {firstMissingPositive} from "./FirstMissingPositive";

describe('First Missing Positive', () => {
  it('Test 1', () => {
    expect(firstMissingPositive([1,2,0])).toEqual( 3);
  });

  it('Test 2', () => {
    expect(firstMissingPositive([3,4,-1,1])).toEqual( 2);
  });

  it('Test 3', () => {
    expect(firstMissingPositive([7,8,9,11,12])).toEqual( 1);
  });
});