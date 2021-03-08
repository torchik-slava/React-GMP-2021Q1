import React from "react";
import styles from "./styles.module.scss";

interface IResultsPanel {
  totalAmount: number;
}

const ResultsPanel = ({ totalAmount }: IResultsPanel): React.ReactElement => {
  return (
    <p className={styles.resultsPanel}>
      <span>{totalAmount}</span>
      movies found
    </p>
  );
};

export default ResultsPanel;
