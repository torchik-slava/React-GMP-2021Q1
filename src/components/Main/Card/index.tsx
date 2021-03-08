import React, { useState } from "react";
import Button from "../../Button";
import Modal from "../../Modal";
import DropdownSelect from "../DropdownSelect";
import styles from "./styles.module.scss";

const defaultUrl = "https://i.ibb.co/hmtBmhz/no-poster.jpg";

export type CardDataType = {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  genres: Array<string>,
  runtime: number,
};

interface ICard {
  data: CardDataType;
}

const Card = ({ data }: ICard): React.ReactElement => {
  const [url, setUrl] = useState(data.poster_path);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li className={styles.card}>
      <div className={styles.btnWrapper}>
        <Button
          text=""
          extraClass={styles.btn}
          onClick={() => setDropdownOpen(true)}
        />
      </div>
      {isDropdownOpen && <DropdownSelect data={data} />}      
      <img
        className={styles.image}
        src={url}
        onError={() => setUrl(defaultUrl)}
        alt="poster"
      />
      <p>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.release}>{data.release_date.split("-")[0]}</span>
      </p>
      <p className={styles.genres}>{data.genres.join(", ")}</p>
    </li>
  );
};

export default Card;
