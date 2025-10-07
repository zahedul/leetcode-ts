import { mySqrt } from './Sqrt(x)';

describe('Sqrt(x)', () => {
  it('Test 1', () => {
    expect(mySqrt(4)).toEqual(2);
  });

  it('Test 2', () => {
    expect(mySqrt(8)).toEqual(2);
  });
});
