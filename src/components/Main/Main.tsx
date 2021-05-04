import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ResultsPanel from "./ResultsPanel";
import Card from "./Card";
import styles from "./Main.module.scss";
import { AppState } from "../../model";
import {
  openModal,
  requestMoviesBySearch,
  setSearchValue,
} from "../../redux/actions";

//  PATTERN: Array as children
const Main = (): React.ReactElement => {
  const { search } = useLocation();
  const history = useHistory();

  const { movies, resultsAmount, searchValue } = useSelector(
    (state: AppState) => state.movies
  );
  const dispatch = useDispatch();
  const onCardClick = (idx: number) => history.push(`/film/${idx}`);
  const onModalOpen = (
    modalType: AppState["modal"]["modalType"],
    movieIdx: number
  ) => dispatch(openModal(modalType, movieIdx));

  useEffect(() => {
    dispatch(setSearchValue(searchValue || decodeURI(search.slice(1))));
    dispatch(requestMoviesBySearch());
  }, [dispatch, search, searchValue]);

  return (
    <>
      <ResultsPanel totalAmount={resultsAmount} />
      <ul className={styles.cardsList}>
        {/* PATTERN: Array as children */}
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
