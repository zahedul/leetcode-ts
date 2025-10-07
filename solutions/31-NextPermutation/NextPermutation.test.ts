import { nextPermutation } from './NextPermutation';

describe('NextPermutation', () => {
  it('Test 1', () => {
    const data: number[] = [1, 2, 3];
    nextPermutation(data);
    expect(data).toEqual([1, 3, 2]);
  });

  it('Test 2', () => {
    const data: number[] = [3, 2, 1];
    nextPermutation(data);
    expect(data).toEqual([1, 2, 3]);
  });

  it('Test 3', () => {
    const data: number[] = [1, 1, 5];
    nextPermutation(data);
    expect(data).toEqual([1, 5, 1]);
  });

  it('Test 4', () => {
    const data: number[] = [1, 1];
    nextPermutation(data);
    expect(data).toEqual([1, 1]);
  });

  it('Test 5', () => {
    const data: number[] = [1, 3, 5, 4, 2];
    nextPermutation(data);
    expect(data).toEqual([1, 4, 2, 3, 5]);
  });
});
