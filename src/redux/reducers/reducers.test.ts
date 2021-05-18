import {
  modalReducer,
  initialState as initialStateModalReducer,
} from "./modalReducer";
import {
  moviesReducer,
  initialState as initialStateMoveiReducer,
} from "./moviesReducer";
import * as types from "../actions/types";
import { ActionType } from "../../model";
import mockResponse from "../../assets/response.json";

describe("Modal reducer", () => {
  it("should return the initial state", () => {
    expect(modalReducer(undefined, {} as ActionType)).toEqual(
      initialStateModalReducer
    );
  });
  it("should handle OPEN_MODAL", () => {
    expect(
      modalReducer(initialStateModalReducer, {
        type: types.OPEN_MODAL,
        payload: {
          modalType: "Add",
          movieIdx: undefined,
        },
      })
    ).toEqual({
      modalType: "Add",
      isOpen: true,
      movieIdx: undefined,
    });
  });
  it("should handle CLOSE_MODAL", () => {
    expect(
      modalReducer(initialStateModalReducer, {
        type: types.CLOSE_MODAL,
      })
    ).toEqual({
      modalType: null,
      isOpen: false,
      movieIdx: null,
    });
  });
});

describe("Movie reducer", () => {
  it("should return the initial state", () => {
    expect(moviesReducer(undefined, {} as ActionType)).toEqual(
      initialStateMoveiReducer
    );
  });
  it("should handle REQUEST_MOVIES_BY_SEARCH", () => {
    expect(
      moviesReducer(initialStateMoveiReducer, {
        type: types.REQUEST_MOVIES_BY_SEARCH,
      })
    ).toEqual({
      ...initialStateMoveiReducer,
      isLoading: true,
    });
  });
  it("should handle MOVIES_REQUEST_SUCCESS", () => {
    const state = { ...initialStateMoveiReducer };
    state.isLoading = true;
    expect(
      moviesReducer(state, {
        type: types.MOVIES_REQUEST_SUCCESS,
        payload: mockResponse,
      })
    ).toEqual({
      ...state,
      movies: mockResponse.data,
      resultsAmount: mockResponse.totalAmount,
      isLoading: false,
    });
  });
  it("should handle MOVIE_BY_ID_REQUEST_SUCCESS", () => {
    expect(
      moviesReducer(initialStateMoveiReducer, {
        type: types.MOVIE_BY_ID_REQUEST_SUCCESS,
        payload: mockResponse.data[0],
      })
    ).toEqual({
      ...initialStateMoveiReducer,
      selectedMovie: mockResponse.data[0],
    });
  });
  it("should handle SET_SEARCH_VALUE", () => {
    expect(
      moviesReducer(initialStateMoveiReducer, {
        type: types.SET_SEARCH_VALUE,
        payload: "Some search str",
      })
    ).toEqual({
      ...initialStateMoveiReducer,
      searchValue: "Some search str",
    });
  });
  it("should handle SET_SELECTED_MOVIE_ID", () => {
    expect(
      moviesReducer(initialStateMoveiReducer, {
        type: types.SET_SELECTED_MOVIE_ID,
        payload: mockResponse.data[0].id,
      })
    ).toEqual({
      ...initialStateMoveiReducer,
      selectedMovieId: mockResponse.data[0].id,
    });
  });
  it("should handle SET_CURRENT_SORT", () => {
    const state = { ...initialStateMoveiReducer };
    state.selectedMovieId = mockResponse.data[0].id;
    expect(
      moviesReducer(state, {
        type: types.SET_CURRENT_SORT,
        payload: { name: "name", key: "key" },
      })
    ).toEqual({
      ...state,
      isLoading: true,
      selectedMovieId: 0,
      currentSort: { name: "name", key: "key" },
    });
  });
  it("should handle SET_GERNE_FILTER", () => {
    const state = { ...initialStateMoveiReducer };
    state.selectedMovieId = mockResponse.data[0].id;
    expect(
      moviesReducer(state, {
        type: types.SET_GERNE_FILTER,
        payload: "Drama",
      })
    ).toEqual({
      ...state,
      isLoading: true,
      selectedMovieId: 0,
      gernes: {
        ...state.gernes,
        All: false,
        Drama: true,
      },
    });
  });
  it("should handle SET_GERNE_FILTER with ALL flag", () => {
    const state = { ...initialStateMoveiReducer };
    state.selectedMovieId = mockResponse.data[0].id;
    state.gernes = {
      ...initialStateMoveiReducer.gernes,
      All: false,
      Drama: true,
      Comedy: true,
    };
    expect(
      moviesReducer(state, {
        type: types.SET_GERNE_FILTER,
        payload: "All",
      })
    ).toEqual({
      ...state,
      isLoading: true,
      selectedMovieId: 0,
      gernes: initialStateMoveiReducer.gernes,
    });
  });
});
