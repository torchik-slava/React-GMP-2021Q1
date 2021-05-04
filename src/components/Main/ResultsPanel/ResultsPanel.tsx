import React from "react";
import styles from "./ResultsPanel.module.scss";

interface IResultsPanel {
  totalAmount: number;
}

// PATTERN: Stateless function
const ResultsPanel = ({ totalAmount }: IResultsPanel): React.ReactElement => {
  return (
    <p className={styles.resultsPanel}>
      <span>{totalAmount}</span>
      movies found
    </p>
  );
};

export default ResultsPanel;
