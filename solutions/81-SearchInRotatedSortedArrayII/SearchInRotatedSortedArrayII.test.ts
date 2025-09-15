import {search} from "./SearchInRotatedSortedArrayII";

describe('SearchInRotatedSortedArrayII', () => {
  it('Test 1', () => {
    expect(search([2,5,6,0,0,1,2], 0)).toEqual(true);
  });

  it('Test 2', () => {
    expect(search([2,5,6,0,0,1,2], 3)).toEqual(false);
  });

});