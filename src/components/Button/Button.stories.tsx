import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Button from "./Button";
import "../../index.css";
import styles from "../Search/Search.module.scss";

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs],
  argTypes: { onClick: { action: "clicked" } },
};

export const ButtonExample = (): React.ReactElement => (
  <Button className={styles.btn} text={text("Text", "Search")} />
);
