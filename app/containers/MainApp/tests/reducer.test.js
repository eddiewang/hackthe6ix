import expect from 'expect';
import mainAppReducer from '../reducer';
import { fromJS } from 'immutable';

describe('mainAppReducer', () => {
  it('returns the initial state', () => {
    expect(mainAppReducer(undefined, {})).toEqual(fromJS({}));
  });
});
