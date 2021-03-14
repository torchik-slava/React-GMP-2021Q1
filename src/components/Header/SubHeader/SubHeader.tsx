import React, { useState } from "react";
import Button from "../../Button";
import Logo from "../../Logo";
import Modal from "../../Modal";
import styles from "./SubHeader.module.scss";

interface ISubHeaderProps {
  isShowSearch: boolean;
  showSearch: () => void;
}

const SubHeader = ({
  isShowSearch,
  showSearch,
}: ISubHeaderProps): React.ReactElement => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.subHeader}>
      <Logo />
      {isShowSearch ? (
        <Button
          text="+ Add Movie"
          className={styles.addBtn}
          onClick={() => setModalOpen(true)}
        />
      ) : (
        <Button text="" className={styles.searchBtn} onClick={showSearch} />
      )}

      {isModalOpen && (
        <Modal
          modalTitle="Add Movie"
          modalType="Add"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SubHeader;
