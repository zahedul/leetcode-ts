import {findOrder} from "./CourseScheduleII";

describe('Course Schedule II', () => {
  it('Test 1', () => {
    expect(findOrder(2, [[1,0]])).toEqual([0, 1]);
  });

  it('Test 2', () => {
    expect(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])).toEqual([0, 2, 1, 3]);
  });

  it('Test 3', () => {
    expect(findOrder(1, [])).toEqual([0]);
  });
});