import { MovieDataType, MovieWithOutIdDataType } from "../model";

const baseUrl = "http://localhost:4000/movies";
const baseParams = "&sortOrder=desc&searchBy=title&limit=12";

export const getMoviesBySearchQuery = (
  searchQuery: string,
  sortParam: string,
  filterParam: string
) =>
  fetch(
    `${baseUrl}?search=${searchQuery}&sortBy=${sortParam}&filter=${filterParam}${baseParams}`
  ).then((response) => response.json());

export const createMovie = (data: MovieWithOutIdDataType) => fetch(baseUrl, {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export const updateMovie = (data: MovieDataType) => fetch(baseUrl, {
  method: "PUT",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export const deleteMovie = (id: number) => fetch(`${baseUrl}/${id}`, {
  method: "DELETE",
});
