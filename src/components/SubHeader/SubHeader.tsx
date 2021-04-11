import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const { searchValue } = useSelector((state: AppState) => state.movies);
  const showSearch = () => history.push(`/search?${searchValue}`);
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
