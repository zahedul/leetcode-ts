import { myPow } from './Pow(x,n)';

describe('Pow(x,n)', () => {
  it('Test 1', () => {
    expect(myPow(2.0, 10)).toEqual(1024.0);
  });

  it('Test 2', () => {
    expect(myPow(2.1, 3)).toEqual(9.261);
  });

  it('Test 3', () => {
    expect(myPow(2.0, -2)).toEqual(0.25);
  });
});
