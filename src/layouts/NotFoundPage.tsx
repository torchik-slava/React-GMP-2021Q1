import classNames from "classnames";
import React from "react";
import Footer from "../components/Footer";
import NotFoundComponent from "../components/NotFound";
import SubHeader from "../components/SubHeader";
import styles from "./Layout.module.scss";

const NotFoundPage = (): React.ReactElement => {
  return (
    <>
      <main className={classNames(styles.main, styles.with_not_found)}>
        <div className={styles.mainContentWrapper}>
          <SubHeader />
          <NotFoundComponent />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
