import React, { Suspense } from "react";
import classNames from "classnames";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import styles from "./Layout.module.scss";

const Modal = React.lazy(() => import("../components/Modal"));

interface ILayoutProps {
  headerPart: React.ReactElement;
  mainPart: React.ReactElement;
  withoutMovie?: boolean;
  withCardDetails?: boolean;
}

// PATTERN: Layout component
const Layout = ({
  headerPart,
  mainPart,
  withoutMovie,
  withCardDetails,
}: ILayoutProps): React.ReactElement => {
  return (
    <>
      <header
        className={classNames(
          styles.header,
          withCardDetails && styles.with_card_details
        )}
      >
        <div className={styles.headerContentWrapper}>{headerPart}</div>
      </header>
      <ErrorBoundary>
        <main
          className={classNames(
            styles.main,
            withoutMovie && styles.with_no_movie
          )}
        >
          <div className={styles.mainContentWrapper}>{mainPart}</div>
        </main>
      </ErrorBoundary>
      <Footer />
      <Suspense fallback={<div>Loading...</div>}>
        <Modal />
      </Suspense>
    </>
  );
};

export default Layout;
