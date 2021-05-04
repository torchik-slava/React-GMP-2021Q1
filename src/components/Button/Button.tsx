import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// PATTERN: Proxy component, Style component
const Button = ({
  text,
  className,
  type = "button",
  onClick,
}: IButton): React.ReactElement => {
  return (
    <button
      className={classNames(styles.button, className && className)}
      // eslint-disable-next-line react/button-has-type
      type={type || "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
