import React from "react";
import { AppState } from "../../../model";
import Button from "../../Button";
import Logo from "../../Logo";
import styles from "./SubHeader.module.scss";

interface ISubHeaderProps {
  isShowSearch: boolean;
  showSearch: () => void;
  onModalOpen: (modalType: AppState["modal"]["modalType"], movieIdx?: number) => void;
}

const SubHeader = ({
  isShowSearch,
  showSearch,
  onModalOpen,
}: ISubHeaderProps): React.ReactElement => {
  return (
    <div className={styles.subHeader}>
      <Logo />
      {isShowSearch ? (
        <Button
          text="+ Add Movie"
          className={styles.addBtn}
          onClick={() => onModalOpen("Add")}
        />
      ) : (
        <Button text="" className={styles.searchBtn} onClick={showSearch} />
      )}
    </div>
  );
};

export default SubHeader;
