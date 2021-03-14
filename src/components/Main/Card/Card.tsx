import React, { useState } from "react";
import Button from "../../Button";
import Poster from "../../Poster";
import DropdownSelect from "../DropdownSelect";
import styles from "./Card.module.scss";

export type CardDataType = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
};

interface ICard {
  data: CardDataType;
  onClick: () => void;
}

const Card = ({ data, onClick }: ICard): React.ReactElement => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <li className={styles.card} onClick={onClick}>
      <div className={styles.btnWrapper}>
        <Button
          text=""
          className={styles.btn}
          onClick={(event) => {
            event.stopPropagation();
            setDropdownOpen(true)
          }}
        />
      </div>
      {isDropdownOpen && <DropdownSelect data={data} onClose={() => setDropdownOpen(false)}/>}
      <Poster className={styles.image} posterPath={data.poster_path} />
      <p>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.release}>
          {data.release_date.split("-")[0]}
        </span>
      </p>
      <p className={styles.genres}>{data.genres.join(", ")}</p>
    </li>
  );
};

export default Card;
