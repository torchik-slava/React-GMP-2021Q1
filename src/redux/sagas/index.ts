import { all } from "redux-saga/effects";
import moviesSaga from "./moviesSaga";
import loginSaga from "./loginSaga";

function* rootSaga() {
  yield all([moviesSaga(), loginSaga()]);
}

export default rootSaga;
