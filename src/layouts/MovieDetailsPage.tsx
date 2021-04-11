import React from "react";
import FilterPanel from "../components/FilterPanel";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ErrorBoundary from "../components/ErrorBoundary";
import styles from "./Pages.module.scss";
import SubHeader from "../components/SubHeader";
import Main from "../components/Main";
import CardDetails from "../components/CardDetails";
import classNames from "classnames";

const MovieDetailsPage = () => {
  return (
    <>
      <header className={classNames(styles.header, styles.with_card_details)}>
        <div className={styles.headerContentWrapper}>
          <SubHeader showShearchBtnRequired/>
          <CardDetails />
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

export default MovieDetailsPage;
