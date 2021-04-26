import React from "react";
import ResultsPanel from "./ResultsPanel";
import Card from "./Card";
import styles from "./Main.module.scss";
import { AppState } from "../../model";
import { useDispatch, useSelector } from "react-redux";
import { openModal, requestMovieById, requestMoviesBySearch, setSearchValue } from "../../redux/actions";
import { useRouter } from "next/router";

const Main = (): React.ReactElement => {
  const router = useRouter();

  const { movies, resultsAmount } = useSelector((state: AppState) => state.movies);
  const dispatch = useDispatch();
  const onCardClick = (id: number) => {
    dispatch(requestMovieById((id)));
    router.push(`/film/${id}`, undefined, { shallow: true });
  };
  const onModalOpen = (modalType: AppState["modal"]["modalType"], movieIdx: number) => dispatch(openModal(modalType, movieIdx));

  return (
    <>
      <ResultsPanel totalAmount={resultsAmount} />
      <ul className={styles.cardsList}>
        {movies.map((el, idx) => (
          <Card
            key={el.id}
            movieIdx={idx}
            data={el}
            onClick={() => {
              onCardClick(el.id);
            }}
            onModalOpen={onModalOpen}
          />
        ))}
      </ul>
    </>
  );
};

export default React.memo(Main);
