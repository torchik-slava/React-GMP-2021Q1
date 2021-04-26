import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../model";
import { openModal } from "../../redux/actions";
import Button from "../Button";
import Logo from "../Logo";
import styles from "./SubHeader.module.scss";

interface ISubHeaderProps {
  addMovieBtnRequired?: true;
  showShearchBtnRequired?: true;
}

const SubHeader = ({
  addMovieBtnRequired,
  showShearchBtnRequired,
}: ISubHeaderProps): React.ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchValue } = useSelector((state: AppState) => state.movies);
  const showSearch = () => router.push(`/search?q=${searchValue}`, undefined, { shallow: true });
  const onModalOpen = (modalType: AppState["modal"]["modalType"]) => dispatch(openModal(modalType));

  return (
    <div className={styles.subHeader}>
      <Logo />
      {addMovieBtnRequired && (
        <Button
          text="+ Add Movie"
          className={styles.addBtn}
          onClick={() => onModalOpen("Add")}
        />
      )}
      {showShearchBtnRequired && (
        <Button text="" className={styles.searchBtn} onClick={showSearch} />
      )}
    </div>
  );
};

export default SubHeader;
