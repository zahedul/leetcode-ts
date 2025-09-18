import {divide} from "./DivideTwoIntegers";

describe('DivideTwoIntegers', () => {
  it('Test 1', () => {
    expect(divide(10, 3)).toEqual(3);
  });

  it('Test 2', () => {
    expect(divide(7, -3)).toEqual(-2);
  });

  it('Test 3', () => {
    expect(divide(-2147483648, 1)).toEqual(-2147483648);
  });
});