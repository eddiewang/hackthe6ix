/*
 *
 * Journal actions
 *
 */

import {
  EDIT_POST,
  INDICO_SUBMIT,
  INDICO_SUBMIT_SUCCESS,
  INDICO_SUBMIT_ERROR,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from './constants';

export function editPost(state) {
  return {
    type: EDIT_POST,
    payload: state,
  }
}

export function indicoSubmit() {
  return {
    type: INDICO_SUBMIT,
  }
}

export function indicoSubmitSuccess(payload) {
  return {
    type: INDICO_SUBMIT_SUCCESS,
    payload
  }
}

export function indicoSubmitError(err) {
  return {
    type: INDICO_SUBMIT_ERROR,
    payload: err
  }
}

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
  }
}

export function fetchPostsSuccess(payload) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload,
  }
}

export function fetchPostsError(error) {
  return {
    type: FETCH_POSTS_ERROR,
    payload: error,
  }
}