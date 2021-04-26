import React from "react";
import Link from 'next/link';
import styles from "./NotFound.module.scss";

const NotFoundComponent = () => {
  return (
    <>
			<h1 className={styles.h1}>Page Not Found</h1>
      <img src="images/notFound.jpg" className={styles.img} alt="not found pic"/>
			<Link href="/"><a className={styles.navBtn}>Go back to home</a></Link>
    </>
  );
};

export default NotFoundComponent;
