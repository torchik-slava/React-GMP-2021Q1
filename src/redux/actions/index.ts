import { AppState, MovieDataType, MovieWithOutIdDataType, ResponseType } from "../../model";
import * as types from "./types";

export const requestMoviesBySearch = () => ({
  type: types.REQUEST_MOVIES_BY_SEARCH,
} as const);

export const moviesRequestSuccess = (response: ResponseType) => ({
  type: types.MOVIES_REQUEST_SUCCESS,
  payload: response,
} as const);

export const setSearchValue = (searchValue: string) => ({
  type: types.SET_SEARCH_VALUE,
  payload: searchValue,
} as const);

export const setSelectedMovieId = (movieId: number) => ({
  type: types.SET_SELECTED_MOVIE_ID,
  payload: movieId,
} as const);

export const setCurrentSort = (sort: { name: string, key: string }) => ({
  type: types.SET_CURRENT_SORT,
  payload: sort,
} as const);

export const setGerneFilter = (gerneName: string) => ({
  type: types.SET_GERNE_FILTER,
  payload: gerneName,
} as const);

export const createMovie = (data: MovieWithOutIdDataType) => ({
  type: types.CREATE_MOVIE,
  payload: data,
} as const);


export const updateMovie = (data: MovieDataType) => ({
  type: types.UPDATE_MOVIE,
  payload: data,
} as const);

export const deleteMovie = (id: number) => ({
  type: types.DELETE_MOVIE,
  payload: id,
} as const);

export const openModal = (modalType: AppState["modal"]["modalType"], movieIdx?: number) => ({
  type: types.OPEN_MODAL,
  payload: { modalType, movieIdx }
} as const);

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
} as const);