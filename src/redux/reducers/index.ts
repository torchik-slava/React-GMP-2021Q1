import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  modal: modalReducer,
});
