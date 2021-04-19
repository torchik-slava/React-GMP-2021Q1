import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  className: any;
  onClick: (e?: any) => void;
}

const Button = ({ text, className, onClick }: IButton): React.ReactElement => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
