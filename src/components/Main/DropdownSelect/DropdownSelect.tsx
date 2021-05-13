import React, { useRef } from "react";
import useCloseOnOutSideClick from "../../../hooks/useCloseOnOutSideClick";
import { AppState } from "../../../model";
import Button from "../../Button";
import styles from "./DropdownSelect.module.scss";

interface IDropdown {
  movieIdx: number;
  onClose: () => void;
  onModalOpen: (modalType: AppState["modal"]["modalType"], movieIdx?: number) => void;
}

const DropdownSelect = ({ movieIdx, onClose, onModalOpen }: IDropdown): React.ReactElement => {
  const dropdownRef = useRef(null);
  useCloseOnOutSideClick(dropdownRef, onClose);

  return (
    <>
      <div className={styles.select} ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
        <Button text="" className={styles.closeBtn} onClick={onClose} />
        <Button text="Edit" className={styles.selectBtn} onClick={() => onModalOpen("Edit", movieIdx)} />
        <Button text="Delete" className={styles.selectBtn} onClick={() => onModalOpen("Delete", movieIdx)} />
      </div>
    </>
  );
};

export default DropdownSelect;
