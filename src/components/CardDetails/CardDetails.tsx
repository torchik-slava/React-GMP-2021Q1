import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.scss";
import Poster from "../Poster";
import { AppState } from "../../model";
import { requestMovieById } from "../../redux/actions";

const CardDetails = (): React.ReactElement => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMovieById(Number(id)));
  }, [dispatch, id]);

  const { selectedMovie: data } = useSelector(
    (state: AppState) => state.movies
  );

  return (
    <section className={styles.section}>
      {data && (
        <>
          <Poster
            className={styles.poster}
            posterPath={data.poster_path}
            width=""
          />
          <div className={styles.details}>
            <h2 className={styles.title}>
              {data.title}
              <span className={styles.vote}>{data.vote_average}</span>
            </h2>
            <p className={styles.tagline}>{data.tagline}</p>
            <p className={styles.date_and_time}>
              {data.release_date.split("-")[0]}
              <span>{`${data.runtime} min`}</span>
            </p>
            <p className={styles.overview}>{data.overview}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default CardDetails;
