import expect from 'expect';
import postEditorReducer from '../reducer';
import { fromJS } from 'immutable';

describe('postEditorReducer', () => {
  it('returns the initial state', () => {
    expect(postEditorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
