import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IButton {
  text: string;
  extraClass: any;
}

const Button = ({ text, extraClass }: IButton): React.ReactElement => {
  return (
    <button className={classNames(styles.button, extraClass)}>{text}</button>
  );
};

export default Button;
