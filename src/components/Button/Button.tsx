import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  className?: any;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: any) => void;
}

const Button = ({ text, className, type, onClick }: IButton): React.ReactElement => {
  return (
    <button className={classNames(styles.button, className)} type={type || "button"} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
