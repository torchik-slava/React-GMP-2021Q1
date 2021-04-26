import React from "react";
import FilterPanel from "../components/FilterPanel";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ErrorBoundary from "../components/ErrorBoundary";
import styles from "./Pages.module.scss";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import Main from "../components/Main";
import { SagaStore, wrapper } from "../redux/configureStore";
import { END } from "redux-saga";
import { requestMoviesBySearch, setSearchValue } from "../redux/actions";

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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, ...etc }) => {
    const query  = req.url.slice(10);
    store.dispatch(setSearchValue(decodeURI(query)));
    store.dispatch(requestMoviesBySearch());
    store.dispatch(END);
    await (store as SagaStore).sagaTask.toPromise();
  }
);

export default SearchResultPage;