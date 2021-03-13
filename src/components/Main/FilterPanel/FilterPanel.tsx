import React, { useState } from "react";
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

interface IState {
  currentSort: string;
  isSelectorOpen: boolean;
}

class FilterPanel extends React.Component<{}, IState> {
  state = {
    currentSort: "Release Date",
    isSelectorOpen: false,
  };

  render() {
    return (
      <div className={styles.filterPanel}>
        <ul>
          {tabs.map((el, idx) => (
            <li key={idx} className={idx === 0 && styles.active}>
              {el}
            </li>
          ))}
        </ul>
        <div className={styles.spacer}></div>
        <div>
          <span className={styles.label}>Sort by</span>
          <span
            className={styles.selector}
            onClick={() =>
              this.setState({ isSelectorOpen: !this.state.isSelectorOpen })
            }
          >
            {this.state.currentSort}
          </span>
          {this.state.isSelectorOpen && (
            <ul className={styles.optionList}>
              {sorts.map((el, idx) => (
                <li
                  key={idx}
                  onClick={() =>
                    this.setState({ currentSort: el, isSelectorOpen: false })
                  }
                >
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default FilterPanel;
