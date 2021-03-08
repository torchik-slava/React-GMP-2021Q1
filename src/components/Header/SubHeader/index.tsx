import React from "react";
import Button from "../../Button";
import Logo from "../../Logo";
import styles from "./styles.module.scss";

const SubHeader = (): React.ReactElement => {
  return (
    <div className={styles.subHeader}>
      <Logo />
      <Button text="+ Add Movie" extraClass={styles.btn} />
    </div>
  );
};

export default SubHeader;
