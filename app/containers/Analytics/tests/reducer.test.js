import expect from 'expect';
import analyticsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('analyticsReducer', () => {
  it('returns the initial state', () => {
    expect(analyticsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
