import React, { useState } from "react";
import styles from "./styles.module.scss";

const defaultUrl = "https://i.ibb.co/hmtBmhz/no-poster.jpg";

interface ICard {
  title: string;
  posterPath: string;
  releaseDate: string;
  genres: Array<string>;
}

const Card = ({
  title,
  posterPath,
  releaseDate,
  genres,
}: ICard): React.ReactElement => {
  const [url, setUrl] = useState(posterPath);

  return (
    <li className={styles.card}>
      <img className={styles.image} src={url} onError={() => setUrl(defaultUrl)} alt="poster" />
      <p>
        <span className={styles.title}>{title}</span>
        <span className={styles.release}>{releaseDate.split('-')[0]}</span>
      </p>
      <p className={styles.genres}>{genres.join(", ")}</p>
    </li>
  );
};

export default Card;
