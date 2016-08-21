import { take, call, put, select, fork} from 'redux-saga/effects';
import { postRequest, getRequest } from 'utils/request';
import { API_URL } from 'global';
import { INDICO_SUBMIT, FETCH_POSTS } from './constants';
import {
  indicoSubmitSuccess,
  indicoSubmitError,
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsError, } from './actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import { selectJournalDomain } from './selectors';

function* indicoSubmitAction() {
  try {
    const data = yield call(postRequest, `${API_URL}/emotions`, body)
    if (data.status === 200) {
      console.log(data);
      yield put(indicoSubmitSuccess(data.data));
    }
  } catch (error) {

    yield put(indicoSubmitError(error));
  }
}

function* indicoSubmitWatch() {
  while (yield take(INDICO_SUBMIT)) {
    yield call(indicoSubmitAction);
  }
}

function* fetchPostsAction() {
  try {
    console.log('here');
    const data = yield call(getRequest, `${API_URL}/posts`)
    if (data.status === 200) {
      console.log(data);
      yield put(fetchPostsSuccess(data.data));
    }
  } catch(error) {
    console.log(error);
    yield put(fetchPostsError(error));
  }
}

function* fetchPostsWatch() {
  while (yield take(FETCH_POSTS)) {
    yield call(fetchPostsAction);
  }
}

// Individual exports for testing
export function* defaultSaga() {
  const indicoSubmitWatcher = yield fork(indicoSubmitWatch);
  const fetchPostsWatcher = yield fork(fetchPostsWatch);
  yield take(LOCATION_CHANGE);
  yield cancel(indicoSubmitWatcher);
  yield cancel(fetchPostsWatcher);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
