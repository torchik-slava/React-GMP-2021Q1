import React from "react";
import FilterPanel from "./FilterPanel";
import ResultsPanel from "./ResultsPanel";
import Card from "./Card";
import styles from "./Main.module.scss";
import { AppState, GenresMapType, MovieDataType } from "../../model";

interface IMainProps {
  movies: Array<MovieDataType>;
  totalAmount: number;
  gernesMap: GenresMapType;
  currentSortName: string;
  onCardClick: (idx: number) => void;
  selectGerne: (gerneName: string) => void;
  sortBy: (sortParam: { name: string; key: string }) => void;
  onModalOpen: (modalType: AppState["modal"]["modalType"], movieIdx?: number) => void;
}

const Main = ({
  movies,
  totalAmount,
  gernesMap,
  currentSortName,
  selectGerne,
  sortBy,
  onCardClick,
  onModalOpen,
}: IMainProps): React.ReactElement => {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <FilterPanel
          gernesMap={gernesMap}
          currentSortName={currentSortName}
          selectGerne={selectGerne}
          sortBy={sortBy}
        />
        <ResultsPanel totalAmount={totalAmount} />
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
      </div>
    </main>
  );
};

export default React.memo(Main);
