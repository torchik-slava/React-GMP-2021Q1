import { MovieDataType, MovieWithOutIdDataType, ResponseType } from "../model";

const baseUrl = "http://localhost:4000/movies";
const baseParams = "&sortOrder=desc&searchBy=title&limit=12";

export const getMoviesBySearchQuery = (
  searchQuery: string,
  sortParam: string,
  filterParam: string
): Promise<ResponseType> =>
  fetch(
    `${baseUrl}?search=${searchQuery}&sortBy=${sortParam}&filter=${filterParam}${baseParams}`
  ).then((response) => response.json());

export const getMovieById = (id: string): Promise<MovieDataType> =>
  fetch(`${baseUrl}/${id}`).then((response) => response.json());

export const createMovie = (data: MovieWithOutIdDataType): Promise<unknown> =>
  fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const updateMovie = (data: MovieDataType): Promise<unknown> =>
  fetch(baseUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const deleteMovie = (id: number): Promise<unknown> =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
