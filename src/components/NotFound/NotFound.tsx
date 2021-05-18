import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../assets/images/notFound.jpg";
import styles from "./NotFound.module.scss";

const NotFoundComponent = () => {
  return (
    <>
			<h1 className={styles.h1}>Page Not Found</h1>
      <img src={img404} className={styles.img} alt="not found pic"/>
			<Link to="/" className={styles.navBtn}>Go back to home</Link>
    </>
  );
};

export default NotFoundComponent;
