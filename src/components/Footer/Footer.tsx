import React from "react";
import Logo from "../Logo";
import styles from "./Footer.module.scss";

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
