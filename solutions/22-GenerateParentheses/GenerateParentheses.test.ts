import { generateParenthesis } from './GenerateParentheses';

describe('GenerateParentheses', () => {
  it('Test 1', () => {
    expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
  });

  it('Test 2', () => {
    expect(generateParenthesis(1)).toEqual(['()']);
  });
});
