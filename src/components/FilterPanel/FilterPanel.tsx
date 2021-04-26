import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCloseOnOutSideClick from "../../hooks/useCloseOnOutSideClick";
import { AppState } from "../../model";
import { setCurrentSort, setGerneFilter } from "../../redux/actions";
import styles from "./FilterPanel.module.scss";

const sorts = [
  { name: "Not selected", key: "" },
  { name: "Release Date", key: "release_date" },
  { name: "Vote Average", key: "vote_average" },
];

const FilterPanel = () => {
  const currentSortName = useSelector((state: AppState) => state.movies.currentSort.name);
  const gernesMap = useSelector((state: AppState) => state.movies.gernes);

  const dispatch = useDispatch();
  const sortBy = (sortParam: { name: string; key: string }) => dispatch(setCurrentSort(sortParam));
  const selectGerne =(gerneName: string) => dispatch(setGerneFilter(gerneName));

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const selectorRef = useRef(null);
  useCloseOnOutSideClick(selectorRef, () => setIsSelectorOpen(false));

  return (
    <div className={styles.filterPanel}>
      <ul>
        {Object.entries(gernesMap).map((gerne: [string, boolean], idx) => (
          <li
            key={idx}
            className={gerne[1] ? styles.active : undefined}
            onClick={() => selectGerne(gerne[0])}
          >
            {gerne[0]}
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
          {currentSortName}
        </span>
        {isSelectorOpen && (
          <ul className={styles.optionList} ref={selectorRef}>
            {sorts.map((el, idx) => (
              <li
                key={idx}
                onClick={() => {
                  sortBy(el);
                  setIsSelectorOpen(false);
                }}
              >
                {el.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
