import React from "react";
import styles from "./styles.module.scss";

const tabs = ["All", "Documentary", "Comedy", "Horror", "Crime"];

const FilterPanel = (): React.ReactElement => {
  return (
    <div className={styles.filterPanel}>
      <ul>
        {tabs.map((el, idx) => (
          <li className={idx === 0 && styles.active}>{el}</li>
        ))}
      </ul>
      <div className={styles.spacer}></div>
      <div>
        <span className={styles.label}>Sort by</span>
        <span className={styles.selector}>Release date</span>
      </div>
    </div>
  );
};

export default FilterPanel;
