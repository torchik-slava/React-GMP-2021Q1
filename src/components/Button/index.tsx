import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IButton {
  text: string;
  extraClass: any;
  onClick: (e?: any) => void;
}

const Button = ({ text, extraClass, onClick }: IButton): React.ReactElement => {
  return (
    <button className={classNames(styles.button, extraClass)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
