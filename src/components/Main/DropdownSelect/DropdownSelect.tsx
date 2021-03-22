import React, { useRef, useState } from "react";
import useCloseOnOutSideClick from "../../../hooks/useCloseOnOutSideClick";
import Button from "../../Button";
import Modal from "../../Modal";
import { CardDataType } from "../Card/Card";
import styles from "./DropdownSelect.module.scss";

interface IDropdown {
  data: CardDataType;
  onClose: () => void;
}

const DropdownSelect = ({ data, onClose }: IDropdown): React.ReactElement => {
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

  const dropdownRef = useRef(null);
  //useCloseOnOutSideClick(dropdownRef, onClose);

  return (
    <>
      <div className={styles.select} ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
        <Button text="" className={styles.closeBtn} onClick={onClose} />
        <Button text="Edit" className={styles.selectBtn} onClick={handleEdit} />
        <Button text="Delete" className={styles.selectBtn} onClick={handleDelete} />
      </div>
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
