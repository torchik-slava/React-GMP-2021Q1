import React from "react";
import response from "../../assets/response.json";
import FilterPanel from "./FilterPanel";
import ResultsPanel from "./ResultsPanel";
import Card from "./Card";
import styles from "./Main.module.scss";

interface IMainProps {
  onCardClick: (idx: number) => void;
}

const Main = React.memo(({onCardClick}: IMainProps): React.ReactElement => {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <FilterPanel />
        <ResultsPanel totalAmount={response.totalAmount}/>
        <ul className={styles.cardsList}>
          {response.data.map((el, idx) => (
            <Card
              key={el.id}
              data={el}
              onClick={() => {onCardClick(idx)}}
            />
          ))}
        </ul>
      </div>
    </main>
  );
});

export default Main;
