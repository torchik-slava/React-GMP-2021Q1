import React from "react";
import response from "../../assets/response.json";
import FilterPanel from "./FilterPanel";
import ResultsPanel from "./ResultsPanel";
import Card from "./Card";
import styles from "./Main.module.scss";

const Main = (): React.ReactElement => {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <FilterPanel />
        <ResultsPanel totalAmount={response.totalAmount}/>
        <ul className={styles.cardsList}>
          {response.data.map((el) => (
            <Card
              key={el.id}
              data={el}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
