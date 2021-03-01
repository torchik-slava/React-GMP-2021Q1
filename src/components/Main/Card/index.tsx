import React, { useState } from "react";
import Button from "../../Button";
import DropdownSelect from "../DropdownSelect";
import styles from "./styles.module.scss";

const defaultUrl = "https://i.ibb.co/hmtBmhz/no-poster.jpg";

interface ICard {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  genres: Array<string>;
}

const Card = ({
  id,
  title,
  posterPath,
  releaseDate,
  genres,
}: ICard): React.ReactElement => {
  const [url, setUrl] = useState(posterPath);

  return (
    <li className={styles.card}>
      <div className={styles.btnWrapper}>
        <Button text="" extraClass={styles.btn} />
      </div>
      {id === 337167 && <DropdownSelect />}
      <img
        className={styles.image}
        src={url}
        onError={() => setUrl(defaultUrl)}
        alt="poster"
      />
      <p>
        <span className={styles.title}>{title}</span>
        <span className={styles.release}>{releaseDate.split("-")[0]}</span>
      </p>
      <p className={styles.genres}>{genres.join(", ")}</p>
    </li>
  );
};

export default Card;
