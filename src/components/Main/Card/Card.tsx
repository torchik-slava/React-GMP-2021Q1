import React, { useState } from "react";
import { AppState } from "../../../model";
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
  movieIdx: number;
  data: CardDataType;
  onClick: () => void;
  onModalOpen: (
    modalType: AppState["modal"]["modalType"],
    movieIdx?: number
  ) => void;
}

const Card = ({
  data,
  movieIdx,
  onClick,
  onModalOpen,
}: ICard): React.ReactElement => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <li className={styles.card} onClick={onClick}>
      <div className={styles.btnWrapper}>
        <Button
          text=""
          className={styles.btn}
          onClick={(event) => {
            event.stopPropagation();
            setDropdownOpen(true);
          }}
        />
      </div>
      {isDropdownOpen && (
        <DropdownSelect
          movieIdx={movieIdx}
          onClose={() => setDropdownOpen(false)}
          onModalOpen={onModalOpen}
        />
      )}
      <Poster
        className={styles.image}
        posterPath={data.poster_path}
        width="350"
      />
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
