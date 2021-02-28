import React from "react";
import styles from "./styles.module.scss";

const Logo = (): React.ReactElement => {
  return (
    <span className={styles.logo}>
      <span className={styles.bold}>netflix</span>
      roulette
    </span>
  );
};

export default Logo;
