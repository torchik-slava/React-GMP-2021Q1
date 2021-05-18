import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  modal: modalReducer,
});

export default rootReducer;
