import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  login: loginReducer,
});
