/*
 *
 * Journal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  EDIT_POST,
} from './constants';
import { Editor, EditorState } from 'draft-js';

const defaultState = EditorState.createEmpty();
const initialState = fromJS({
  editorState: defaultState
});

function journalReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_POST:
      return state.set('editorState', action.payload);
    default:
      return state;
  }
}

export default journalReducer;
