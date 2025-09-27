import {canFinish} from "./CourseSchedule";

describe('Course Schedule Test', () => {
  it('Test 1', () => {
    expect(canFinish(2, [[1,0]])).toEqual(true);
  });

  it('Test 2', () => {
    expect(canFinish(2, [[1,0],[0,1]])).toEqual(false);
  });

  it('Test 3', () => {
    expect(canFinish(3, [[1,0],[2,1],[0,2]])).toEqual(false);
  });
})