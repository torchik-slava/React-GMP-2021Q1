import { takeEvery, all } from "redux-saga/effects";

function* loginSaga() {
  // todo
}

function* watchLogin() {
  yield takeEvery("LOGIN", loginSaga);
}

export default function* root() {
  yield all([watchLogin()]);
}
