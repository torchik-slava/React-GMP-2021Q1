import React, { useState } from "react";
import Button from "../../Button";
import Logo from "../../Logo";
import Modal from "../../Modal";
import styles from "./styles.module.scss";

const SubHeader = (): React.ReactElement => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.subHeader}>
      <Logo />
      <Button
        text="+ Add Movie"
        extraClass={styles.btn}
        onClick={() => setModalOpen(true)}
      />
      {isModalOpen && (
        <Modal modalTitle="Add Movie" modalType="Add" onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default SubHeader;
