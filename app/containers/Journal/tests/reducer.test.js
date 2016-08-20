import expect from 'expect';
import journalReducer from '../reducer';
import { fromJS } from 'immutable';

describe('journalReducer', () => {
  it('returns the initial state', () => {
    expect(journalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
