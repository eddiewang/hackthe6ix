import { delay } from 'redux-saga';
import { take, call, put, actionChannel, fork, race, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';


import { pushError, handledError } from './actions';
import {
  GLOBAL_ERROR_RECEIVED,
  ERROR_MANUAL_REMOVE,
} from './constants';

function* notificationHandler(errorData) {
  yield put(pushError(errorData));
  yield race({
    cancel: take(ERROR_MANUAL_REMOVE),
    timeOut: call(delay, 4000),
  });
  yield put(handledError());
}

function* notificationWatcher() {
  const notificationsChannel = yield actionChannel(GLOBAL_ERROR_RECEIVED);
  while (true) {
    const { payload } = yield take(notificationsChannel);
    yield call(notificationHandler, payload);
  }
}

export function* notificationSaga() {
  const notifications = yield fork(notificationWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(notifications);
}

export default [
  notificationSaga,
];
