import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import { createMovie, deleteMovie, getMovieById, getMoviesBySearchQuery, updateMovie } from '../../api';
import { movieByIdRequestSuccess, moviesRequestSuccess } from '../actions';
import { AppState, MovieDataType, ResponseType } from "../../model";
import * as types from "../actions/types";

function* getMoviesSaga() {
  try {
    const searchQuery: string = yield select((state: AppState) => state.movies.searchValue);
    const sortParam: string = yield select((state: AppState) => state.movies.currentSort.key);
    const gernesMap: { [key: string]: boolean } = yield select((state: AppState) => state.movies.gernes);
    const filterParam = Object.entries(gernesMap)
      .slice(1)
      .filter((gerneEntries: [string, boolean]) => gerneEntries[1])
      .map((gerneEntries: [string, boolean]) => gerneEntries[0])
      .join(",");
    const data: ResponseType = yield call(getMoviesBySearchQuery, searchQuery.trim(), sortParam, filterParam);
    yield put(moviesRequestSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* getMovieByIdSaga(action: any) {
  try {
    const id = action.payload;
    const data: MovieDataType = yield call(getMovieById, id);
    yield put(movieByIdRequestSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* createMovieSaga(action: any) {
  try {
    const data = action.payload;
    delete data.id;
    yield call(createMovie, data);
    yield getMoviesSaga();
  } catch (error) {
    console.log(error);
  }
}

function* updateMovieSaga(action: any) {
  try {
    const data = action.payload;
    yield call(updateMovie, data);
    yield getMoviesSaga();
  } catch (error) {
    console.log(error);
  }
}

function* deleteMovieSaga(action: any) {
  try {
    const id = action.payload;
    yield call(deleteMovie, id);
    yield getMoviesSaga();
  } catch (error) {
    console.log(error);
  }
}

function* watchGetMovies() {
  yield takeEvery([types.REQUEST_MOVIES_BY_SEARCH, types.SET_CURRENT_SORT, types.SET_GERNE_FILTER], getMoviesSaga);
}

function* watchGetMovieById() {
  yield takeEvery(types.REQUEST_MOVIE_BY_ID, getMovieByIdSaga);
}

function* watchCreateMovie() {
  yield takeEvery(types.CREATE_MOVIE, createMovieSaga);
}

function* watchUpdateMovie() {
  yield takeEvery(types.UPDATE_MOVIE, updateMovieSaga);
}

function* watchDeleteMovie() {
  yield takeEvery(types.DELETE_MOVIE, deleteMovieSaga);
}

export default function* root() {
  yield all([watchGetMovies(), watchGetMovieById(), watchCreateMovie(), watchUpdateMovie(), watchDeleteMovie()]);
}