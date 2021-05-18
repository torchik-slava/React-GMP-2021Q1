import * as actions from "../redux/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionType = ReturnType<InferValueTypes<typeof actions>>;

export interface IMoviesReducerState {
  isLoading: boolean;
  searchValue: string;
  movies: Array<MovieDataType>;
  resultsAmount: number;
  selectedMovieId: number;
  selectedMovie: MovieDataType;
  currentSort: {
    name: string;
    key: string;
  };
  gernes: GenresMapType;
}

export interface IModalReducerState {
  isOpen: boolean;
  modalType:"Add" | "Edit" | "Delete";
  movieIdx?: number;
};

export type GenresMapType = { [key: string]: boolean };


export type MovieDataType = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
};

export type MovieWithOutIdDataType = Omit<MovieDataType, "id">;

export type ResponseType = {
  totalAmount: number;
  data: Array<MovieDataType>;
  offset: number;
  limit: number;
};

export interface AppState {
  movies: IMoviesReducerState;
  modal: IModalReducerState;
}
