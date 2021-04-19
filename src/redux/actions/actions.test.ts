import * as actions from "./index";
import * as types from "./types";
import mockResponse from "../../assets/response.json";

describe("Actions", () => {
  it("should create requestMoviesBySearch action", () => {
    const expectedAction = {
      type: types.REQUEST_MOVIES_BY_SEARCH,
    };
    expect(actions.requestMoviesBySearch()).toEqual(expectedAction);
  });
  it("should create moviesRequestSuccess action", () => {
    const response = mockResponse;
    const expectedAction = {
      type: types.MOVIES_REQUEST_SUCCESS,
      payload: response,
    };
    expect(actions.moviesRequestSuccess(response)).toEqual(expectedAction);
  });
  it("should create requestMovieById action", () => {
    const id = mockResponse.data[0].id;
    const expectedAction = {
      type: types.REQUEST_MOVIE_BY_ID,
      payload: id,
    };
    expect(actions.requestMovieById(id)).toEqual(expectedAction);
  });
  it("should create movieByIdRequestSuccess action", () => {
    const response = mockResponse.data[0];
    const expectedAction = {
      type: types.MOVIE_BY_ID_REQUEST_SUCCESS,
      payload: response,
    };
    expect(actions.movieByIdRequestSuccess(response)).toEqual(expectedAction);
  });
  it("should create setSearchValue action", () => {
    const searchStr = "Search string";
    const expectedAction = {
      type: types.SET_SEARCH_VALUE,
      payload: searchStr,
    };
    expect(actions.setSearchValue(searchStr)).toEqual(expectedAction);
  });
  it("should create setSelectedMovieId action", () => {
    const movieId = mockResponse.data[0].id;
    const expectedAction = {
      type: types.SET_SELECTED_MOVIE_ID,
      payload: movieId,
    };
    expect(actions.setSelectedMovieId(movieId)).toEqual(expectedAction);
  });
  it("should create setCurrentSort action", () => {
    const sort = { name: "Name", key: "Key" };
    const expectedAction = {
      type: types.SET_CURRENT_SORT,
      payload: sort,
    };
    expect(actions.setCurrentSort(sort)).toEqual(expectedAction);
  });
  it("should create setGerneFilter action", () => {
    const gerneName = "Gerne Name";
    const expectedAction = {
      type: types.SET_GERNE_FILTER,
      payload: gerneName,
    };
    expect(actions.setGerneFilter(gerneName)).toEqual(expectedAction);
  });
  it("should create createMovie action", () => {
    const data = mockResponse.data[0];
    delete data.id;
    const expectedAction = {
      type: types.CREATE_MOVIE,
      payload: data,
    };
    expect(actions.createMovie(data)).toEqual(expectedAction);
  });
  it("should create updateMovie action", () => {
    const data = mockResponse.data[0];
    const expectedAction = {
      type: types.UPDATE_MOVIE,
      payload: data,
    };
    expect(actions.updateMovie(data)).toEqual(expectedAction);
  });
  it("should create deleteMovie action", () => {
    const id = mockResponse.data[0].id;
    const expectedAction = {
      type: types.DELETE_MOVIE,
      payload: id,
    };
    expect(actions.deleteMovie(id)).toEqual(expectedAction);
  });
  it("should create openModal action", () => {
    const modalType = "Edit";
    const movieIdx = 0;
    const expectedAction = {
      type: types.OPEN_MODAL,
      payload: { modalType, movieIdx },
    };
    expect(actions.openModal(modalType, movieIdx)).toEqual(expectedAction);
  });
  it("should create closeModal action", () => {
    const expectedAction = {
      type: types.CLOSE_MODAL,
    };
    expect(actions.closeModal()).toEqual(expectedAction);
  });
});
