import React from "react";
import styles from "./styles.module.scss";


const DropdownSelect = (): React.ReactElement => {
  return (
    <ul className={styles.select}>
      <li>Edit</li>
      <li>Delete</li>
    </ul>
  );
};

export default DropdownSelect;
