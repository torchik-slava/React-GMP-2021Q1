import React from "react";
import Search from "./Search";
import SubHeader from "./SubHeader";
import CardDetails from "./CardDetails";
import styles from "./Header.module.scss";
import response from "../../assets/response.json";
import classNames from "classnames";

interface IHeaderProps {
  cardIndex: number;
  showSearch: () => void;
}

const Header = ({
  cardIndex,
  showSearch,
}: IHeaderProps): React.ReactElement => {
  const isShowSearch = cardIndex < 0;
  return (
    <header className={classNames(styles.header, !isShowSearch && styles.with_card_details)}>
      <div className={styles.contentWrapper}>
        <SubHeader isShowSearch={isShowSearch} showSearch={showSearch} />
        {isShowSearch ? <Search /> : <CardDetails data={response.data[cardIndex]} />}
      </div>
    </header>
  );
};

export default Header;
