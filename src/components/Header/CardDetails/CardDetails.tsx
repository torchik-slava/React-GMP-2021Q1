import React from "react";
import styles from "./CardDetails.module.scss";
import { CardDataType } from "../../Main/Card/Card";
import Poster from "../../Poster";

interface ICardDetails {
  data: CardDataType;
}

const CardDetails = ({ data }: ICardDetails): React.ReactElement => {
  return (
    <section className={styles.section}>
      <Poster className={styles.poster} posterPath={data.poster_path} />
      <div className={styles.details}>
        <h2 className={styles.title}>
          {data.title}
          <span className={styles.vote}>{data.vote_average}</span>
        </h2>
        <p className={styles.tagline}>{data.tagline}</p>
        <p className={styles.date_and_time}>
          {data.release_date.split('-')[0]}
          <span>{`${data.runtime} min`}</span>
        </p>
        <p className={styles.overview}>{data.overview}</p>
      </div>
    </section>
  );
};

export default CardDetails;
