import React from "react";
import Search from "./Search";
import SubHeader from "./SubHeader";
import CardDetails from "./CardDetails";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { AppState, MovieDataType } from "../../model";

interface IHeaderProps {
  movie: MovieDataType;
  showSearch: () => void;
  onModalOpen: (modalType: AppState["modal"]["modalType"], movieIdx?: number) => void;
}

const Header = ({
  movie,
  showSearch,
  onModalOpen
}: IHeaderProps): React.ReactElement => {
  const isShowSearch = !movie;
  return (
    <header className={classNames(styles.header, !isShowSearch && styles.with_card_details)}>
      <div className={styles.contentWrapper}>
        <SubHeader isShowSearch={isShowSearch} showSearch={showSearch} onModalOpen={onModalOpen}/>
        {isShowSearch ? <Search /> : <CardDetails data={movie} />}
      </div>
    </header>
  );
};

export default React.memo(Header);
