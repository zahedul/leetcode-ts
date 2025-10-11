import { findWords } from './WordSearchII';

describe('WordSearchII', () => {
  it('Test 1', () => {
    expect(
      findWords(
        [
          ['o', 'a', 'a', 'n'],
          ['e', 't', 'a', 'e'],
          ['i', 'h', 'k', 'r'],
          ['i', 'f', 'l', 'v'],
        ],
        ['oath', 'pea', 'eat', 'rain'],
      ),
    ).toEqual(expect.arrayContaining(['eat', 'oath']));
  });

  it('Test 2', () => {
    expect(
      findWords(
        [
          ['a', 'b'],
          ['c', 'd'],
        ],
        ['abcb'],
      ),
    ).toEqual(expect.arrayContaining([]));
  });
});
