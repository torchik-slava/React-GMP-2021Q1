import React from "react";
import FilterPanel from "../components/FilterPanel";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ErrorBoundary from "../components/ErrorBoundary";
import styles from "./Pages.module.scss";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import Main from "../components/Main";

const SearchResultPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContentWrapper}>
          <SubHeader addMovieBtnRequired/>
          <Search />
        </div>
      </header>
      <ErrorBoundary>
        <main className={styles.main}>
          <div className={styles.mainContentWrapper}>
            <FilterPanel />
            <Main />
          </div>
        </main>
      </ErrorBoundary>
      <Footer />
      <Modal />
    </>
  );
};

export default SearchResultPage;
