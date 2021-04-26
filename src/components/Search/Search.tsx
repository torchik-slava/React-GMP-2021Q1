import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../model";
import { requestMoviesBySearch, setSearchValue } from "../../redux/actions";
import styles from "./Search.module.scss";
import Button from "../Button";
import { useRouter } from "next/router";

const Search = (): React.ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchValue = useSelector((state: AppState) => state.movies.searchValue);
  const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(event.target.value));
  const onSearchClick = () => {
    dispatch(requestMoviesBySearch());
    router.push(`/search?q=${searchValue}`, undefined, { shallow: true });
  }

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
        <Button className={styles.btn} text="Search" onClick={onSearchClick} />
      </div>
    </div>
  );
};

export default Search;
