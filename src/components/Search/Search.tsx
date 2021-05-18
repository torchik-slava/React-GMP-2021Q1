import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../model";
import { setSearchValue } from "../../redux/actions";
import styles from "./Search.module.scss";

const Search = (): React.ReactElement => {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: AppState) => state.movies.searchValue
  );
  const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchValue(event.target.value));

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
        <Link
          className={styles.btn}
          to={{ pathname: "/search", search: `?${searchValue}` }}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Search;
