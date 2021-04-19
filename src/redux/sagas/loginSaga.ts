import { takeEvery, all } from 'redux-saga/effects';

function* loginSaga() {}

function* watchLogin() {
  yield takeEvery("LOGIN", loginSaga);
}

export default function* root() {
  yield all([watchLogin()]);
}