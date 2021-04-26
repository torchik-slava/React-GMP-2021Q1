import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";
import { IModalReducerState, IMoviesReducerState } from "../model";
import { composeWithDevTools } from "redux-devtools-extension";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

interface State {
  movies: IMoviesReducerState;
  modal: IModalReducerState;
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.movies.movies.length) nextState.movies.movies = state.movies.movies;
    if (state.movies.resultsAmount) nextState.movies.resultsAmount = state.movies.resultsAmount;
    if (state.movies.searchValue) nextState.movies.searchValue = state.movies.searchValue;
    if (state.movies.gernes.All !== true) nextState.movies.gernes = state.movies.gernes;
    if (state.movies.currentSort.key) nextState.movies.currentSort = state.movies.currentSort;
    if (state.movies.selectedMovie) nextState.movies.selectedMovie = state.movies.selectedMovie;
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});
