import { take, call, put, select } from 'redux-saga/effects';
import { postRequest } from 'utils/request';

function* savePostAction() {
  try {
    yield call(postRequest, '/', )
  } catch(error) {
    console.log(error);
  }

}

// Individual exports for testing
export function* defaultSaga() {

}

// All sagas to be loaded
export default [
  defaultSaga,
];
