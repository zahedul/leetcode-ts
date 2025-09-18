import {myPow} from "./Pow(x,n)";

describe('Pow(x,n)', () => {
  it('Test 1', () => {
    expect(myPow( 2.00000, 10)).toEqual(1024.00000);
  });

  it('Test 2', () => {
    expect(myPow( 2.10000, 3)).toEqual(9.26100);
  });

  it('Test 3', () => {
    expect(myPow( 2.00000, -2)).toEqual(0.25000);
  });
});