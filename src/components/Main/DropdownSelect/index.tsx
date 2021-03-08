import React, { useState } from "react";
import Modal from "../../Modal";
import { CardDataType } from "../Card";
import styles from "./styles.module.scss";

interface IDropdown {
  data: CardDataType;
}

const DropdownSelect = ({ data }: IDropdown): React.ReactElement => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"Edit" | "Delete"  | "">("");

  const handleEdit = () => {
    setModalOpen(true);
    setModalType("Edit");
  };

  const handleDelete = () => {
    setModalOpen(true);
    setModalType("Delete");
  };

  return (
    <>
      <ul className={styles.select}>
        <li onClick={handleEdit}>Edit</li>
        <li onClick={handleDelete}>Delete</li>
      </ul>
      {isModalOpen && (
        <Modal
          modalTitle={`${modalType} Movie`}
          data={data}
          modalType={modalType}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default DropdownSelect;
