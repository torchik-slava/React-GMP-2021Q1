import { ActionType, IMoviesReducerState } from "../../model";

const initialState: IMoviesReducerState = {
  isLoading: false,
  searchValue: "",
  movies: [],
  resultsAmount: 0,
  selectedMovieId: 0,
  selectedMovie: null,
  currentSort: {
    name: "Not Selected",
    key: "",
  },
  gernes: {
    All: true,
    Drama: false,
    Comedy: false,
    Adventure: false,
    Crime: false,
    Action: false,
    Family: false,
  },
};

export const moviesReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "REQUEST_MOVIES_BY_SEARCH":
      return { ...state, isLoading: true };
    case "MOVIES_REQUEST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        resultsAmount: action.payload.totalAmount,
      };
    case "MOVIE_BY_ID_REQUEST_SUCCESS": 
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "SET_SELECTED_MOVIE_ID":
      return { ...state, selectedMovieId: action.payload };
    case "SET_CURRENT_SORT":
      return {
        ...state,
        isLoading: true,
        selectedMovieId: 0,
        currentSort: action.payload,
      };
    case "SET_GERNE_FILTER":
      let newGernesMap;
      const gerneName = action.payload;
      if (gerneName === "All") {
        newGernesMap = { ...initialState.gernes };
      } else {
        newGernesMap = { ...state.gernes };
        newGernesMap[gerneName] = !state.gernes[gerneName];
        const isAnySelected = Object.values(newGernesMap)
          .slice(1)
          .find((value) => value === true);
        newGernesMap.All = !isAnySelected;
      }
      return {
        ...state,
        isLoading: true,
        selectedMovieId: 0,
        gernes: newGernesMap,
      };
    default:
      return state;
  }
};
