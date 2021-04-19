import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../model";
import { requestMoviesBySearch, setSearchValue } from "../../../redux/actions";
import Button from "../../Button";
import styles from "./Search.module.scss";

const Search = (): React.ReactElement => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: AppState) => state.movies.searchValue);
  const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(event.target.value));
  const searchMovies = () => dispatch(requestMoviesBySearch());

  return (
    <div className={styles.search}>
      <h2 className={styles.h2}>Find your movie</h2>
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchField}
          type="text"
          placeholder="What do you want to watch?"
          value={searchValue}
          onChange={changeSearchValue}
        />
        <Button text="Search" className={styles.btn} onClick={searchMovies} />
      </div>
    </div>
  );
};

export default Search;
