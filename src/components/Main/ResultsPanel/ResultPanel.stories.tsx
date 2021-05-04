import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import ResultsPanel from "./ResultsPanel";
import "../../../index.css";

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs],
};

export const ResultsPanelExample = (): React.ReactElement => (
  <ResultsPanel totalAmount={number("Amount", 10)} />
);
