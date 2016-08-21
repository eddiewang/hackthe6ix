/*
 *
 * Journal actions
 *
 */

import {
  EDIT_POST,
} from './constants';

export function editPost(state) {
  return {
    type: EDIT_POST,
    payload: state,
  }
}