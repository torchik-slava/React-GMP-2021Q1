import React from "react";
import FilterPanel from "../components/FilterPanel";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ErrorBoundary from "../components/ErrorBoundary";
import styles from "./Pages.module.scss";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import classNames from "classnames";

const HomePage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContentWrapper}>
          <SubHeader addMovieBtnRequired/>
          <Search />
        </div>
      </header>
      <ErrorBoundary>
        <main className={classNames(styles.main, styles.with_no_movie)}>
          <div className={styles.mainContentWrapper}>
            <FilterPanel />
            <p>No Movie Found</p>
          </div>
        </main>
      </ErrorBoundary>
      <Footer />
      <Modal />
    </>
  );
};

export default HomePage;