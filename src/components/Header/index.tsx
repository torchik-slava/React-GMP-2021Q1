import React from "react";
import Search from "./Search";
import SubHeader from "./SubHeader";
import styles from "./styles.module.scss";

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          <SubHeader />
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
