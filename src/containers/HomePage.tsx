import React, { useCallback, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../model";
import { requestMoviesBySearch, setSelectedMovieId, setCurrentSort, setGerneFilter } from "../redux/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: AppState) => state.movies.movies);
  const totalAmount = useSelector((state: AppState) => state.movies.resultsAmount);
  const selectedMovieId = useSelector((state: AppState) => state.movies.selectedMovieId);
  const currentSortName = useSelector((state: AppState) => state.movies.currentSort.name);
  const gernesMap = useSelector((state: AppState) => state.movies.gernes);
  const selectedMovie = movies.find(movie => movie.id === selectedMovieId);

  const onCardClick = useCallback((idx) => dispatch(setSelectedMovieId(idx)), []);
  const sortBy = useCallback((sortParam) => dispatch(setCurrentSort(sortParam)), []);
  const showSearch = useCallback(() => dispatch(setSelectedMovieId(0)), []);
  const selectGerne = useCallback((gerneName) => dispatch(setGerneFilter(gerneName)), []);

  useEffect(() => {
    dispatch(requestMoviesBySearch());
  }, []);

  return (
    <>
      <Header movie={selectedMovie} showSearch={showSearch} />
      <ErrorBoundary>
        <Main
          movies={movies}
          totalAmount={totalAmount}
          gernesMap={gernesMap}
          currentSortName={currentSortName}
          selectGerne={selectGerne}
          sortBy={sortBy}
          onCardClick={onCardClick}
        />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default HomePage;
