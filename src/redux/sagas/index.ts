import { all } from 'redux-saga/effects';

import moviesSaga from './moviesSaga';
import loginSaga from './loginSaga';

export function* rootSaga() {
  yield all([
    moviesSaga(),
    loginSaga(),    
  ]);
}