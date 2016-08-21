/*
 *
 * Journal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  EDIT_POST,
  INDICO_SUBMIT_SUCCESS,
  INDICO_SUBMIT_ERROR,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from './constants';

const initialState = fromJS({
  contentState: {},
  stringState: '',
  date: '',
  sentiments: {},
  emotions: {},
  tags: {},
  errors: '',
  posts: {},
});

function journalReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_POST:
      return state
        .set('contentState', action.payload.rawData)
        .set('stringState', action.payload.stringData)
    case INDICO_SUBMIT_SUCCESS:
      return state
        .set('emotions', action.payload)
    case INDICO_SUBMIT_ERROR:
      return state
        .set('errors', action.payload)
    case FETCH_POSTS:
      return state
    case FETCH_POSTS_SUCCESS:
      return state
        .set('posts', action.payload)
    case FETCH_POSTS_ERROR:
      return state
        .set('errors', action.payload)
    default:
      return state;
  }
}

export default journalReducer;
