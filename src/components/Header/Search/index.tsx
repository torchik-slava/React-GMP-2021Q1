import React from "react";
import Button from "../../Button";
import styles from "./styles.module.scss";

const Search = (): React.ReactElement => {
  return (
    <div className={styles.search}>
      <h2 className={styles.h2}>Find your movie</h2>
      <div className={styles.searchWrapper}>
        <input className={styles.searchField} type="text" placeholder="What do you want to watch?" />
        <Button text="Search" extraClass={styles.btn}/>
      </div>
    </div>
  );
};

export default Search;
