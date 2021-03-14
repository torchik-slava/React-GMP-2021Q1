import React, { useEffect, useRef, useState } from "react";
import useCloseOnOutSideClick from "../../../hooks/useCloseOnOutSideClick";
import styles from "./FilterPanel.module.scss";

const tabs = ["All", "Documentary", "Comedy", "Horror", "Crime"];
const sorts = [
  "Release Date",
  "Vote Average",
  "Vote Count",
  "Budget",
  "Revenue",
  "Runtime",
];

const FilterPanel = () => {
  const [currentSort, setcurrentSort] = useState("Release Date");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const selectorRef = useRef(null);
  useCloseOnOutSideClick(selectorRef, () => setIsSelectorOpen(false));

  return (
    <div className={styles.filterPanel}>
      <ul>
        {tabs.map((el, idx) => (
          <li key={idx} className={idx === 0 ? styles.active : undefined}>
            {el}
          </li>
        ))}
      </ul>
      <div className={styles.spacer}></div>
      <div>
        <span className={styles.label}>Sort by</span>
        <span
          className={styles.selector}
          onClick={() => setIsSelectorOpen((isSelectorOpen) => !isSelectorOpen)}
        >
          {currentSort}
        </span>
        {isSelectorOpen && (
          <ul className={styles.optionList} ref={selectorRef}>
            {sorts.map((el, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setcurrentSort(el);
                  setIsSelectorOpen(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
