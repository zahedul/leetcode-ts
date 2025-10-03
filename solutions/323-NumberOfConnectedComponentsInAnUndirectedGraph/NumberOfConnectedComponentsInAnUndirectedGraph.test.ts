import {countComponents} from "./NumberOfConnectedComponentsInAnUndirectedGraph";

describe('NumberOfConnectedComponentsInAnUndirectedGraph', () => {
  it('Test 1', () => {
    expect(countComponents(3, [[0,1], [0,2]])).toEqual(1);
  });

  it('Test 2', () => {
    expect(countComponents(6, [[0,1], [1,2], [2,3], [4,5]])).toEqual(2);
  });
});